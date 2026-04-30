import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Menu, X, User, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/shop", label: "Products" },
  { to: "/faq", label: "FAQs" },
  { to: "/shipping", label: "Shipping & Delivery" },
  { to: "/contact", label: "Contact" },
];

const LoginModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [showPw, setShowPw] = useState(false);
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-2">
            <img src="/logo.png" alt="Renovo Peptides" className="h-9 w-auto" />
          </div>
          <DialogTitle className="text-center font-display text-xl">
            {mode === "login" ? "Sign in to your account" : "Create an account"}
          </DialogTitle>
          <p className="text-center text-xs text-muted-foreground mt-1">
            For verified research professionals only
          </p>
        </DialogHeader>

        <form className="mt-2 space-y-4" onSubmit={(e) => e.preventDefault()}>
          {mode === "register" && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="reg-first">First name</Label>
                <Input id="reg-first" className="mt-1.5" placeholder="Jane" />
              </div>
              <div>
                <Label htmlFor="reg-last">Last name</Label>
                <Input id="reg-last" className="mt-1.5" placeholder="Smith" />
              </div>
            </div>
          )}
          <div>
            <Label htmlFor="login-email">Email address</Label>
            <Input id="login-email" type="email" className="mt-1.5" placeholder="you@lab.com" />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="login-pw">Password</Label>
              {mode === "login" && (
                <button type="button" className="text-xs text-accent hover:underline">
                  Forgot password?
                </button>
              )}
            </div>
            <div className="relative mt-1.5">
              <Input
                id="login-pw"
                type={showPw ? "text" : "password"}
                placeholder="••••••••"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Toggle password visibility"
              >
                {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {mode === "register" && (
            <div>
              <Label htmlFor="login-pw2">Confirm password</Label>
              <Input id="login-pw2" type="password" className="mt-1.5" placeholder="••••••••" />
            </div>
          )}

          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            {mode === "login" ? "Sign in" : "Create account"}
          </Button>
        </form>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <button onClick={() => setMode("register")} className="text-accent hover:underline font-medium">
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button onClick={() => setMode("login")} className="text-accent hover:underline font-medium">
                Sign in
              </button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const SiteHeader = () => {
  const { count, setOpen } = useCart();
  const [mobile, setMobile] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
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

          <nav className="hidden md:flex items-center gap-7">
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

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLoginOpen(true)}
              className="hidden sm:flex items-center gap-1.5 text-sm text-foreground/80 hover:text-accent"
            >
              <User className="h-4 w-4" />
              <span className="hidden lg:inline">Sign In</span>
            </Button>
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
              <button
                onClick={() => { setMobile(false); setLoginOpen(true); }}
                className="py-3 text-sm font-medium text-foreground/80 text-left flex items-center gap-2"
              >
                <User className="h-4 w-4" /> Sign In
              </button>
            </div>
          </div>
        )}
      </header>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
};
