import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProductCard } from "@/components/shop/ProductCard";
import { products, categories, Category } from "@/data/products";
import { Button } from "@/components/ui/button";

const Shop = () => {
  const [params, setParams] = useSearchParams();
  const initial = (params.get("category") as Category | null) ?? null;
  const [active, setActive] = useState<Category | null>(initial);

  useEffect(() => {
    setActive((params.get("category") as Category | null) ?? null);
  }, [params]);

  const filtered = useMemo(
    () => (active ? products.filter((p) => p.category === active) : products),
    [active],
  );

  const setCat = (c: Category | null) => {
    setActive(c);
    if (c) setParams({ category: c }); else setParams({});
  };

  return (
    <SiteLayout>
      <section className="border-b border-border bg-surface">
        <div className="container-wide py-12 sm:py-16">
          <span className="eyebrow">Catalogue</span>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">Research peptides</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Lab-verified peptides supplied with full Certificate of Analysis. For research use only.
          </p>
        </div>
      </section>

      <section className="container-wide py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={active === null ? "default" : "outline"}
            size="sm"
            onClick={() => setCat(null)}
            className={active === null ? "bg-primary" : ""}
          >
            All ({products.length})
          </Button>
          {categories.map((c) => {
            const count = products.filter((p) => p.category === c).length;
            const isActive = active === c;
            return (
              <Button
                key={c}
                variant={isActive ? "default" : "outline"}
                size="sm"
                onClick={() => setCat(c)}
                className={isActive ? "bg-primary" : ""}
              >
                {c} ({count})
              </Button>
            );
          })}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Shop;
