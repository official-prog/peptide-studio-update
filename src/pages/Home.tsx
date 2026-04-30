import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/shop/ProductCard";
import { products, categories } from "@/data/products";
import { ArrowRight, ShieldCheck, FlaskConical, Microscope, Award, Truck, Lock } from "lucide-react";
import heroVial from "@/assets/hero-vial.jpg";
import molecule from "@/assets/molecule-pattern.jpg";

const Home = () => {
  const featured = products.slice(0, 4);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{ backgroundImage: `url(${molecule})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="container-wide relative grid gap-12 py-20 lg:grid-cols-2 lg:py-28 lg:gap-8 items-center">
          <div className="animate-fade-up">
            <span className="eyebrow">UK · Research Grade · &gt;99% Purity</span>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.05]">
              Precision peptides<br />for serious research.
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Renovo Peptides UK supplies independently-tested, lab-verified research peptides
              with full Certificates of Analysis. Synthesised to pharmaceutical-grade standards
              for laboratory use only.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent">
                <Link to="/shop">Browse Peptides <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">Our Standards</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-accent" /> COA on every batch</span>
              <span className="flex items-center gap-2"><Lock className="h-3.5 w-3.5 text-accent" /> Discreet UK shipping</span>
              <span className="flex items-center gap-2"><Award className="h-3.5 w-3.5 text-accent" /> &gt;99% HPLC purity</span>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-accent opacity-20 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
              <img src={heroVial} alt="Research peptide vial in laboratory setting" width={1600} height={1024} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 sm:left-10 sm:right-auto sm:max-w-[280px] rounded-xl border border-border bg-background/95 backdrop-blur p-4 shadow-md">
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent">Batch Verified</p>
              <p className="mt-1 font-display text-sm font-semibold">Independent third-party HPLC + MS testing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-background">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { icon: FlaskConical, t: ">99% Purity", s: "HPLC verified" },
            { icon: ShieldCheck, t: "COA Included", s: "Every batch" },
            { icon: Truck, t: "UK Dispatch", s: "Tracked & discreet" },
            { icon: Microscope, t: "Lab Grade", s: "Research only" },
          ].map(({ icon: Icon, t, s }) => (
            <div key={t} className="flex items-center gap-3 px-4 py-5 sm:px-6">
              <Icon className="h-5 w-5 text-accent shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-tight">{t}</p>
                <p className="text-xs text-muted-foreground">{s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container-wide py-20">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow">Catalogue</span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight">Research categories</h2>
          </div>
          <Link to="/shop" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c}
              to={`/shop?category=${c}`}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-md"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Category</p>
              <h3 className="mt-2 font-display text-xl font-semibold">{c}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {products.filter((p) => p.category === c).length} peptides available
              </p>
              <ArrowRight className="absolute right-5 bottom-5 h-4 w-4 text-accent opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="container-wide py-12">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow">Best sellers</span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight">Featured peptides</h2>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Quality / process */}
      <section className="container-wide py-20">
        <div className="rounded-2xl bg-gradient-dark text-primary-foreground p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 scientific-grid opacity-[0.06]" aria-hidden />
          <div className="relative grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-glow">Standards</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
                Verified purity. Documented quality.
              </h2>
              <p className="mt-5 text-primary-foreground/80 leading-relaxed max-w-xl">
                Every peptide is synthesised in ISO-certified facilities and independently
                analysed by HPLC and mass spectrometry. Certificates of Analysis are issued
                for every batch and available on request.
              </p>
              <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/about">Read our process</Link>
              </Button>
            </div>
            <ul className="space-y-5">
              {[
                ["01", "Synthesis", "Solid-phase peptide synthesis to research-grade specification."],
                ["02", "Purification", "Reverse-phase HPLC to >99% purity."],
                ["03", "Verification", "Independent HPLC + mass spectrometry analysis."],
                ["04", "Certification", "Batch-numbered Certificate of Analysis included."],
              ].map(([n, t, d]) => (
                <li key={n} className="flex gap-5 border-l border-primary-foreground/15 pl-5">
                  <span className="font-mono text-xs text-accent-glow tracking-widest">{n}</span>
                  <div>
                    <p className="font-display text-base font-semibold">{t}</p>
                    <p className="text-sm text-primary-foreground/70 mt-0.5">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container-wide py-20">
        <div className="text-center mb-12">
          <span className="eyebrow">Trusted by researchers</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight">From the laboratory</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { q: "Consistent purity batch to batch — exactly what a research lab needs.", a: "Dr. M. Hartley", r: "Bioscience Researcher" },
            { q: "Fast UK dispatch and the COAs are spotless. Highly professional supplier.", a: "S. Patel", r: "Independent Lab" },
            { q: "The packaging and documentation match what we'd expect from clinical-grade vendors.", a: "Dr. A. Reyes", r: "University Research" },
          ].map((t) => (
            <figure key={t.a} className="rounded-lg border border-border bg-card p-6">
              <div className="text-accent text-2xl leading-none">"</div>
              <blockquote className="mt-2 text-sm leading-relaxed text-foreground/90">{t.q}</blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-semibold">{t.a}</p>
                <p className="text-xs text-muted-foreground">{t.r}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Home;
