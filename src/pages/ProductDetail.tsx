import { Link, useParams } from "react-router-dom";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { getProduct, products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { formatGBP, useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/shop/ProductCard";
import { ShieldCheck, FileText, Truck, Lock, Minus, Plus, ChevronRight } from "lucide-react";
import { useState } from "react";

const ProductDetail = () => {
  const { slug = "" } = useParams();
  const product = getProduct(slug);
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <SiteLayout>
        <div className="container-wide py-32 text-center">
          <h1 className="font-display text-3xl">Product not found</h1>
          <Button asChild className="mt-6"><Link to="/shop">Back to shop</Link></Button>
        </div>
      </SiteLayout>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  const specs = [
    ["Molecular formula", product.molecularFormula],
    ["Molecular weight", product.molecularWeight],
    ["CAS number", product.casNumber],
    ["Purity", `${product.purity} (HPLC)`],
    ["Size", product.size],
    ["Storage", product.storage],
  ];

  return (
    <SiteLayout>
      <div className="container-wide pt-8 text-xs text-muted-foreground flex items-center gap-1.5">
        <Link to="/" className="hover:text-accent">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/shop" className="hover:text-accent">Shop</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{product.name}</span>
      </div>

      <section className="container-wide py-10 grid gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-border bg-surface aspect-square">
            <img src={product.image} alt={`${product.name} ${product.size}`} className="h-full w-full object-cover" />
          </div>
          <span className="absolute left-4 top-4 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[10px] font-mono uppercase tracking-widest">
            {product.category}
          </span>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">{product.code} · Batch verified</p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight">{product.name}</h1>
          <p className="mt-1 text-muted-foreground">{product.size} · Purity {product.purity}</p>
          <p className="mt-5 text-foreground/80 leading-relaxed">{product.description}</p>

          <div className="mt-8 flex items-baseline gap-3">
            <span className="font-display text-3xl font-bold">{formatGBP(product.price)}</span>
            <span className="text-xs text-muted-foreground">incl. VAT where applicable</span>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="inline-flex items-center rounded-md border border-border">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-11 w-11 place-items-center hover:bg-muted" aria-label="Decrease">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center text-sm font-medium">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="grid h-11 w-11 place-items-center hover:bg-muted" aria-label="Increase">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button size="lg" onClick={() => add(product, qty)} className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent">
              Add to Cart
            </Button>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 text-xs">
            {[
              { icon: ShieldCheck, t: "COA Included" },
              { icon: FileText, t: "Batch Documented" },
              { icon: Truck, t: "Tracked UK Shipping" },
              { icon: Lock, t: "Discreet Packaging" },
            ].map(({ icon: I, t }) => (
              <li key={t} className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2.5">
                <I className="h-4 w-4 text-accent" /> {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-md border border-accent/30 bg-accent/5 p-4 text-xs text-foreground/80">
            <strong className="text-accent">Research Use Only.</strong> This product is intended for in-vitro
            laboratory research only. Not for human or animal consumption, diagnostic or therapeutic use.
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="container-wide py-12">
        <h2 className="font-display text-2xl font-bold tracking-tight mb-6">Technical specification</h2>
        <div className="rounded-lg border border-border overflow-hidden">
          <dl className="divide-y divide-border">
            {specs.map(([k, v]) => (
              <div key={k} className="grid grid-cols-3 gap-4 px-5 py-3.5 text-sm bg-card">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="col-span-2 font-mono text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-wide py-12">
          <h2 className="font-display text-2xl font-bold tracking-tight mb-6">Related peptides</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </SiteLayout>
  );
};

export default ProductDetail;
