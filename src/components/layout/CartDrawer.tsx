import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart, formatGBP } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export const CartDrawer = () => {
  const { items, isOpen, setOpen, update, remove, subtotal, count } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Cart {count > 0 && <span className="text-sm text-muted-foreground font-normal">({count})</span>}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center gap-4 px-6">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-muted">
              <ShoppingBag className="h-7 w-7 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">Your cart is empty.</p>
            <Button variant="outline" onClick={() => setOpen(false)} asChild>
              <Link to="/shop">Browse Peptides</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto -mx-6 px-6 py-4 space-y-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-4 border-b border-border pb-4 last:border-0">
                  <img src={product.image} alt={product.name} className="h-20 w-20 rounded-md border border-border object-cover bg-surface" loading="lazy" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-medium text-sm">{product.name}</p>
                        <p className="text-xs font-mono text-muted-foreground">{product.code} · {product.size}</p>
                      </div>
                      <button onClick={() => remove(product.id)} aria-label="Remove" className="text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-md border border-border">
                        <button onClick={() => update(product.id, quantity - 1)} className="grid h-7 w-7 place-items-center hover:bg-muted transition-colors" aria-label="Decrease">
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-7 text-center text-sm">{quantity}</span>
                        <button onClick={() => update(product.id, quantity + 1)} className="grid h-7 w-7 place-items-center hover:bg-muted transition-colors" aria-label="Increase">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="text-sm font-semibold">{formatGBP(product.price * quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold text-base">{formatGBP(subtotal)}</span>
              </div>
              <p className="text-xs text-muted-foreground">Shipping & taxes calculated at checkout.</p>
              <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/checkout" onClick={() => setOpen(false)}>Checkout</Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
