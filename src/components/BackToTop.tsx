import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    setPressed(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setPressed(false), 400);
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className={`back-to-top ${visible ? "back-to-top--visible" : ""} ${pressed ? "back-to-top--pressed" : ""}`}
    >
      <span className="back-to-top__face">
        <ChevronUp className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className="back-to-top__shadow" aria-hidden />
    </button>
  );
};
