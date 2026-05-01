import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { useCart, formatGBP } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

const Checkout = () => {
  const { items, subtotal } = useCart();
  const shipping = subtotal >= 150 || subtotal === 0 ? 0 : 6.95;
  const total = subtotal + shipping;

  const onPay = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Stripe checkout will be wired up next. This is a UI preview.");
  };

  if (items.length === 0) {
    return (
      <SiteLayout>
        <div className="container-tight py-32 text-center">
          <h1 className="font-display text-3xl font-bold">Your cart is empty</h1>
          <Button asChild className="mt-6"><Link to="/shop">Browse peptides</Link></Button>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="container-wide py-12">
        <span className="eyebrow">Secure checkout</span>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight">Checkout</h1>
      </section>

      <section className="container-wide pb-20 grid gap-10 lg:grid-cols-3">
        <form onSubmit={onPay} className="lg:col-span-2 space-y-8">
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8 space-y-5">
            <h2 className="font-display text-lg font-semibold">Contact</h2>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required className="mt-2" />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 sm:p-8 space-y-5">
            <h2 className="font-display text-lg font-semibold">Shipping address</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div><Label>First name</Label><Input required className="mt-2" /></div>
              <div><Label>Last name</Label><Input required className="mt-2" /></div>
            </div>
            <div><Label>Address</Label><Input required className="mt-2" /></div>
            <div className="grid gap-5 sm:grid-cols-3">
              <div className="sm:col-span-2"><Label>City</Label><Input required className="mt-2" /></div>
              <div><Label>Postcode</Label><Input required className="mt-2" /></div>
            </div>
            <div><Label>Country</Label><Input defaultValue="United Kingdom" required className="mt-2" /></div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-lg font-semibold">Payment</h2>
              <span className="flex items-center gap-1 text-xs text-muted-foreground"><Lock className="h-3.5 w-3.5" /> SSL secured</span>
            </div>
            <div className="rounded-md border border-dashed border-border bg-surface p-6 text-sm text-muted-foreground text-center">
              Stripe payment element will appear here. Connect Stripe to enable real card payments.
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent">
            Pay {formatGBP(total)}
          </Button>
        </form>

        <aside className="lg:col-span-1">
          <div className="rounded-lg border border-border bg-card p-6 sticky top-24">
            <h2 className="font-display text-lg font-semibold mb-4">Order summary</h2>
            <ul className="space-y-3 max-h-72 overflow-y-auto pr-1">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-3">
                  <img src={product.image} alt={product.name} className="h-14 w-14 rounded-md border border-border object-cover bg-surface" loading="lazy" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{product.name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{product.code} · ×{quantity}</p>
                  </div>
                  <p className="text-sm font-semibold">{formatGBP(product.price * quantity)}</p>
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatGBP(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "Free" : formatGBP(shipping)}</span></div>
              <div className="flex justify-between border-t border-border pt-2 mt-2 font-display text-base font-semibold"><span>Total</span><span>{formatGBP(total)}</span></div>
            </div>
            <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" /> Discreet UK packaging. COA included.
            </p>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
};

export default Checkout;
