import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface Props { to: number; suffix?: string; duration?: number; }

export const AnimatedCounter = ({ to, suffix = "", duration = 1800 }: Props) => {
  const { ref, inView } = useInView(0.3);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now();
    const tick  = (now: number) => {
      const pct = Math.min((now - start) / duration, 1);
      // ease out cubic
      const ease = 1 - Math.pow(1 - pct, 3);
      setVal(Math.round(ease * to));
      if (pct < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {val}{suffix}
    </span>
  );
};
