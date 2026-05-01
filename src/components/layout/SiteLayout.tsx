import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { CartDrawer } from "./CartDrawer";
import { BackToTop } from "@/components/BackToTop";

export const SiteLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    sections.forEach((el) => {
      el.classList.add("reveal");
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 50) {
        el.classList.add("in-view");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -60px 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main key={pathname} className="flex-1 page-transition">
        {children}
      </main>
      <SiteFooter />
      <CartDrawer />
      <BackToTop />
    </div>
  );
};
