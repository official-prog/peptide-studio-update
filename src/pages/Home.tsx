import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/shop/ProductCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { products, categories } from "@/data/products";
import { ArrowRight, ShieldCheck, FlaskConical, Microscope, Award, Truck, Lock, Star } from "lucide-react";
import heroVial from "@/assets/hero-vial.jpg";
import molecule from "@/assets/molecule-pattern.jpg";

/* ── Magnetic Button wrapper ── */
const MagBtn = ({ children, className = "", ...props }: React.ComponentProps<"div">) => {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 18;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * 18;
    ref.current!.style.transform = `translate(${x}px,${y}px)`;
  };
  const onLeave = () => { ref.current!.style.transform = "translate(0,0)"; };
  return (
    <div ref={ref} className={`mag-btn ${className}`} onMouseMove={onMove} onMouseLeave={onLeave} {...props}>
      {children}
    </div>
  );
};

/* ── Stagger reveal wrapper ── */
const StaggerGrid = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref  = useRef<HTMLDivElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        Array.from(el.children).forEach((child, i) => {
          (child as HTMLElement).style.animationDelay = `${i * 0.1}s`;
          child.classList.add("stagger-in");
        });
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
};

/* ── Parallax layer (hero) ── */
const useParallax = (speed = 0.25) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const tick = () => {
      if (ref.current) ref.current.style.transform = `translateY(${window.scrollY * speed}px)`;
    };
    window.addEventListener("scroll", tick, { passive: true });
    return () => window.removeEventListener("scroll", tick);
  }, [speed]);
  return ref;
};

/* ── Floating orbs (hero bg) ── */
const FloatingOrbs = () => (
  <div className="hero-orbs" aria-hidden>
    {[...Array(6)].map((_, i) => <span key={i} className={`orb orb-${i}`} />)}
  </div>
);

const Home = () => {
  const featuredSlugs = ["bpc-157-10mg", "tb-500-5mg", "semax-10mg", "thymosin-alpha-1-5mg"];
  const featured = featuredSlugs.map((s) => products.find((p) => p.slug === s)!).filter(Boolean);
  const parallaxBg  = useParallax(0.18);
  const parallaxImg = useParallax(-0.12);

  const [imgTilt, setImgTilt] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLDivElement>(null);
  const onImgMove = (e: React.MouseEvent) => {
    const r = imgRef.current!.getBoundingClientRect();
    const x = ((e.clientY - r.top)  / r.height - 0.5) * -10;
    const y = ((e.clientX - r.left) / r.width  - 0.5) *  10;
    setImgTilt({ x, y });
  };

  return (
    <SiteLayout>

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="hero-section">
        {/* Animated gradient bg */}
        <div className="hero-gradient-bg" aria-hidden />
        <FloatingOrbs />

        {/* Molecule texture parallax */}
        <div
          ref={parallaxBg}
          aria-hidden
          className="hero-molecule-bg"
          style={{ backgroundImage: `url(${molecule})` }}
        />

        <div className="container-wide relative z-10 grid gap-12 py-24 lg:grid-cols-2 lg:py-32 lg:gap-16 items-center">

          {/* Left text */}
          <div className="hero-text-col">
            <div className="hero-eyebrow-wrap">
              <span className="hero-eyebrow-dot" />
              <span className="hero-eyebrow-text">UK · Research Grade · &gt;99% Purity</span>
            </div>

            <h1 className="hero-h1">
              <span className="hero-h1-line hero-h1-line--1">Precision</span>
              <span className="hero-h1-line hero-h1-line--2">
                peptides<span className="hero-h1-accent">.</span>
              </span>
              <span className="hero-h1-line hero-h1-line--3">Serious research.</span>
            </h1>

            <p className="hero-desc">
              Renovo Peptides UK supplies independently-tested, lab-verified research peptides
              with full Certificates of Analysis. Synthesised to pharmaceutical-grade standards
              for laboratory use only.
            </p>

            <div className="hero-cta-row">
              <MagBtn>
                <Button asChild size="lg" className="hero-btn-primary">
                  <Link to="/shop">Browse Peptides <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </MagBtn>
              <MagBtn>
                <Button asChild size="lg" variant="outline" className="hero-btn-outline">
                  <Link to="/about">Our Standards</Link>
                </Button>
              </MagBtn>
            </div>

            <div className="hero-trust-row">
              {[
                { icon: ShieldCheck, label: "COA on every batch" },
                { icon: Lock,        label: "Discreet UK shipping" },
                { icon: Award,       label: ">99% HPLC purity" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="hero-trust-item">
                  <Icon className="h-3.5 w-3.5 text-accent" /> {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right image - 3D tilt */}
          <div
            ref={imgRef}
            className="hero-img-col"
            onMouseMove={onImgMove}
            onMouseLeave={() => setImgTilt({ x: 0, y: 0 })}
            style={{
              transform: `perspective(900px) rotateX(${imgTilt.x}deg) rotateY(${imgTilt.y}deg)`,
              transition: "transform 0.18s cubic-bezier(.34,1.56,.64,1)",
            }}
          >
            {/* Glow halo */}
            <div className="hero-img-glow" aria-hidden />
            <div ref={parallaxImg} className="hero-img-inner">
              <img
                src={heroVial}
                alt="Research peptide vial"
                className="hero-img"
                width={1600} height={1024}
              />
              {/* Floating badge */}
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                <div>
                  <p className="hero-badge-label">Batch Verified</p>
                  <p className="hero-badge-desc">HPLC + Mass Spec</p>
                </div>
              </div>
              {/* Purity chip */}
              <div className="hero-purity-chip">
                <Star className="h-3 w-3 fill-current" />
                &gt;99% Purity
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll-indicator" aria-hidden>
          <span className="hero-scroll-line" />
          <span className="hero-scroll-text">Scroll</span>
        </div>
      </section>

      {/* ══════════════════ STATS STRIP ══════════════════ */}
      <section className="stats-strip">
        <div className="container-wide stats-grid">
          {[
            { icon: FlaskConical, stat: 99, suffix: "%", label: "HPLC Purity",       sub: "Every batch" },
            { icon: ShieldCheck,  stat: 100, suffix: "%", label: "COA Verified",      sub: "Independent testing" },
            { icon: Truck,        stat: 48,  suffix: "h",  label: "UK Dispatch",       sub: "Tracked & discreet" },
            { icon: Microscope,   stat: 30,  suffix: "+",  label: "Peptides Available",sub: "Research grade" },
          ].map(({ icon: Icon, stat, suffix, label, sub }) => (
            <div key={label} className="stat-card">
              <div className="stat-icon-wrap">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <p className="stat-number">
                <AnimatedCounter to={stat} suffix={suffix} />
              </p>
              <p className="stat-label">{label}</p>
              <p className="stat-sub">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════ CATEGORIES ══════════════════ */}
      <section className="container-wide py-24">
        <div className="section-header">
          <div>
            <span className="eyebrow">Catalogue</span>
            <h2 className="section-title">Research categories</h2>
          </div>
          <Link to="/shop" className="section-link">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <StaggerGrid className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Link key={c} to={`/shop?category=${c}`} className="cat-card stagger-item">
              <div className="cat-card-shine" aria-hidden />
              <span className="cat-card-num">0{i + 1}</span>
              <h3 className="cat-card-title">{c}</h3>
              <p className="cat-card-count">
                {products.filter((p) => p.category === c).length} peptides
              </p>
              <ArrowRight className="cat-card-arrow" />
            </Link>
          ))}
        </StaggerGrid>
      </section>

      {/* ══════════════════ FEATURED PRODUCTS ══════════════════ */}
      <section className="container-wide py-12 pb-24">
        <div className="section-header">
          <div>
            <span className="eyebrow">Best sellers</span>
            <h2 className="section-title">Featured peptides</h2>
          </div>
        </div>
        <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <div key={p.id} className="stagger-item">
              <ProductCard product={p} />
            </div>
          ))}
        </StaggerGrid>
      </section>

      {/* ══════════════════ DARK QUALITY SECTION ══════════════════ */}
      <section className="quality-section">
        {/* animated grid bg */}
        <div className="quality-grid-bg" aria-hidden />
        {/* floating orbs */}
        <div className="quality-orbs" aria-hidden>
          <span className="q-orb q-orb-1" />
          <span className="q-orb q-orb-2" />
        </div>

        <div className="container-wide relative z-10 py-24">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="quality-left">
              <span className="eyebrow" style={{ color: "hsl(222 85% 70%)" }}>Standards</span>
              <h2 className="quality-title">
                Verified purity.<br />
                <span className="quality-title-accent">Documented quality.</span>
              </h2>
              <p className="quality-desc">
                Every peptide is synthesised in ISO-certified facilities and independently
                analysed by HPLC and mass spectrometry. Certificates of Analysis are issued
                for every batch and available on request.
              </p>
              <MagBtn>
                <Button asChild size="lg" className="quality-btn">
                  <Link to="/about">Read our process</Link>
                </Button>
              </MagBtn>
            </div>

            <ul className="quality-steps">
              {[
                ["01", "Synthesis",    "Solid-phase peptide synthesis to research-grade specification."],
                ["02", "Purification", "Reverse-phase HPLC to >99% purity."],
                ["03", "Verification", "Independent HPLC + mass spectrometry analysis."],
                ["04", "Certification","Batch-numbered Certificate of Analysis included."],
              ].map(([n, t, d], i) => (
                <li key={n} className="quality-step" style={{ "--i": i } as React.CSSProperties}>
                  <span className="quality-step-num">{n}</span>
                  <div className="quality-step-bar" />
                  <div>
                    <p className="quality-step-title">{t}</p>
                    <p className="quality-step-desc">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════ REVIEWS ══════════════════ */}
      <section className="container-wide py-24">
        <div className="text-center mb-14">
          <span className="eyebrow">Trusted by researchers</span>
          <h2 className="section-title">From the laboratory</h2>
        </div>
        <StaggerGrid className="grid gap-6 md:grid-cols-3">
          {[
            { q: "Consistent purity batch to batch, exactly what a research lab needs.", a: "Dr. M. Hartley", r: "Bioscience Researcher", stars: 5 },
            { q: "Fast UK dispatch and the COAs are spotless. Highly professional supplier.", a: "S. Patel", r: "Independent Lab", stars: 5 },
            { q: "The packaging and documentation match what we'd expect from clinical-grade vendors.", a: "Dr. A. Reyes", r: "University Research", stars: 5 },
          ].map((t) => (
            <figure key={t.a} className="review-card-3d stagger-item">
              <div className="review-card-glow" aria-hidden />
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-accent text-3xl leading-none font-serif">"</div>
              <blockquote className="mt-2 text-sm leading-relaxed text-foreground/85">{t.q}</blockquote>
              <figcaption className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                <div className="review-avatar">{t.a[0]}</div>
                <div>
                  <p className="text-sm font-semibold">{t.a}</p>
                  <p className="text-xs text-muted-foreground">{t.r}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </StaggerGrid>
      </section>

      {/* ══════════════════ CTA BANNER ══════════════════ */}
      <section className="cta-banner">
        <div className="cta-banner-glow" aria-hidden />
        <div className="container-wide relative z-10 py-20 text-center">
          <span className="eyebrow" style={{ color: "hsl(222 85% 70%)" }}>Get started</span>
          <h2 className="cta-title">Ready to advance your research?</h2>
          <p className="cta-desc">
            Every order ships with a Certificate of Analysis. Lab-grade peptides, independently verified.
          </p>
          <MagBtn className="inline-block mt-8">
            <Button asChild size="lg" className="cta-btn">
              <Link to="/shop">Shop All Peptides <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </MagBtn>
        </div>
      </section>

    </SiteLayout>
  );
};

export default Home;
