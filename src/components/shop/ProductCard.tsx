import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { formatGBP, useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const ProductCard = ({ product }: { product: Product }) => {
  const { add } = useCart();
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
      <Link to={`/product/${product.slug}`} className="relative block aspect-square overflow-hidden bg-surface">
        <img
          src={product.image}
          alt={`${product.name} ${product.size} research peptide vial`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width={1024}
          height={1024}
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-foreground/80 backdrop-blur">
          {product.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{product.code} · Purity {product.purity}</p>
        <Link to={`/product/${product.slug}`} className="mt-1">
          <h3 className="font-display text-lg font-semibold tracking-tight hover:text-accent transition-colors">
            {product.name} <span className="text-muted-foreground font-normal">· {product.size}</span>
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{product.short}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-lg font-bold">{formatGBP(product.price)}</span>
          <Button size="sm" variant="outline" onClick={() => add(product)} className="gap-1">
            <Plus className="h-4 w-4" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};
