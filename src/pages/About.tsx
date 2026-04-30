import { SiteLayout } from "@/components/layout/SiteLayout";
import { Microscope, ShieldCheck, FlaskConical, Award } from "lucide-react";

const About = () => (
  <SiteLayout>
    <section className="border-b border-border bg-surface">
      <div className="container-tight py-16 sm:py-20">
        <span className="eyebrow">About</span>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
          Renovo Peptides – High-Quality Research Peptides in the UK
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Dedicated to supplying high-quality research peptides in the UK for scientific,
          laboratory, and academic research applications. Serving thousands of clients
          worldwide across research institutions and universities.
        </p>
      </div>
    </section>

    <section className="container-tight py-16 grid gap-12 md:grid-cols-2">
      <div>
        <h2 className="font-display text-2xl font-bold mb-4">Our standards</h2>
        <p className="text-foreground/80 leading-relaxed">
          Every peptide we supply is synthesised in state-of-the-art facilities using
          advanced synthesis methods, including solid-phase peptide synthesis. Each batch
          is independently analysed by HPLC and mass spectrometry to confirm identity
          and purity to a minimum of 99%.
        </p>
        <p className="mt-4 text-foreground/80 leading-relaxed">
          We maintain temperature-controlled storage with continuous monitoring to preserve
          product integrity from synthesis to dispatch. A batch-numbered Certificate of
          Analysis (COA) is issued with every product and available on request, ensuring
          full traceability.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          { icon: FlaskConical, t: ">99% Purity", s: "HPLC & mass spectrometry" },
          { icon: ShieldCheck, t: "Full COA", s: "Every batch" },
          { icon: Microscope, t: "Lab Grade", s: "Research only" },
          { icon: Award, t: "ISO Facility", s: "Certified synthesis" },
        ].map(({ icon: I, t, s }) => (
          <div key={t} className="rounded-lg border border-border bg-card p-5">
            <I className="h-5 w-5 text-accent" />
            <p className="mt-3 font-display text-base font-semibold">{t}</p>
            <p className="text-xs text-muted-foreground">{s}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container-tight py-16">
      <h2 className="font-display text-2xl font-bold mb-8">Compliance & purpose</h2>
      <div className="rounded-lg border border-border bg-card p-6 sm:p-8 text-foreground/80 leading-relaxed">
        <p>
          All products listed on this website are sold strictly for in-vitro laboratory
          research and experimental purposes by qualified personnel only. They are not
          pharmaceuticals, supplements, cosmetics or food products. They are not intended
          for human or veterinary use, consumption, injection, nor for diagnostic or
          therapeutic use.
        </p>
        <p className="mt-4">
          By purchasing from Renovo Peptides, the buyer confirms they are a qualified
          professional, that they will use the product solely for research purposes, and
          that they assume full responsibility for the safe and lawful handling of the materials.
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          Renovo Research Ltd trading as Renovo Peptides · Company No. 16952545 ·
          71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
        </p>
      </div>
    </section>
  </SiteLayout>
);

export default About;
