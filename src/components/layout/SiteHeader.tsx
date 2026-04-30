import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const SiteHeader = () => {
  const { count, setOpen } = useCart();
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="bg-primary text-primary-foreground">
        <div className="container-wide flex h-8 items-center justify-between text-xs">
          <span className="font-mono uppercase tracking-widest opacity-80">For Research Use Only · Not for human consumption</span>
          <span className="hidden sm:inline opacity-80">Free UK shipping over £150</span>
        </div>
      </div>

      <div className="container-wide flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img src="/logo.png" alt="Renovo Peptides Research Only" className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-accent ${isActive ? "text-accent" : "text-foreground/80"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)} aria-label="Open cart" className="relative">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-semibold text-accent-foreground">
                {count}
              </span>
            )}
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobile((v) => !v)} aria-label="Toggle menu">
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobile && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-wide flex flex-col py-3">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setMobile(false)}
                className={({ isActive }) =>
                  `py-3 text-sm font-medium ${isActive ? "text-accent" : "text-foreground/80"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
