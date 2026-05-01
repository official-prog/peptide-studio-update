import { useRef, useState, useCallback } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export const ZoomableImage = ({ src, alt, className = "" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [dragging, setDragging] = useState(false);

  const MIN = 1;
  const MAX = 4;

  const getRelativePos = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    };
  };

  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const pos = getRelativePos(e as unknown as React.MouseEvent);
    setOrigin(pos);
    setZoom((z) => {
      const delta = e.deltaY < 0 ? 0.3 : -0.3;
      return Math.min(MAX, Math.max(MIN, z + delta));
    });
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (zoom > 1) {
        const pos = getRelativePos(e);
        setOrigin(pos);
      }
    },
    [zoom]
  );

  const onDoubleClick = useCallback(
    (e: React.MouseEvent) => {
      if (zoom > 1) {
        setZoom(1);
        setOrigin({ x: 50, y: 50 });
      } else {
        const pos = getRelativePos(e);
        setOrigin(pos);
        setZoom(2.5);
      }
    },
    [zoom]
  );

  const onMouseLeave = useCallback(() => {
    if (!dragging) {
      setZoom(1);
      setOrigin({ x: 50, y: 50 });
    }
  }, [dragging]);

  return (
    <div
      ref={ref}
      className={`zoomable-image-wrap ${className}`}
      onWheel={onWheel}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onDoubleClick={onDoubleClick}
      style={{ cursor: zoom > 1 ? "zoom-out" : "zoom-in" }}
      title={zoom > 1 ? "Double-click or scroll to zoom out" : "Scroll or double-click to zoom"}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="zoomable-image"
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: `${origin.x}% ${origin.y}%`,
        }}
        onMouseDown={() => setDragging(true)}
        onMouseUp={() => setDragging(false)}
      />
      {zoom > 1 && (
        <span className="zoomable-image-hint">
          {Math.round(zoom * 100)}% · Double-click to reset
        </span>
      )}
      <span className="zoomable-image-badge" aria-hidden>
        🔍 Scroll to zoom
      </span>
    </div>
  );
};
