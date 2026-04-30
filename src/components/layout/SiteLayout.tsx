import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { CartDrawer } from "./CartDrawer";

export const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <SiteHeader />
    <main className="flex-1">{children}</main>
    <SiteFooter />
    <CartDrawer />
  </div>
);
