import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos     = useRef({ x: -100, y: -100 });
  const ring    = useRef({ x: -100, y: -100 });
  const rafId   = useRef<number>(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.11);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.11);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%,-50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%,-50%)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    const onHover = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("a,button,[data-cursor-grow]");
      if (el) {
        ringRef.current?.classList.add("cursor-ring--grow");
        dotRef.current?.classList.add("cursor-dot--hide");
      } else {
        ringRef.current?.classList.remove("cursor-ring--grow");
        dotRef.current?.classList.remove("cursor-dot--hide");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onHover);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onHover);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  );
};
