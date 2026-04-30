import { ReactNode } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const PolicyPage = ({ title, eyebrow, children }: { title: string; eyebrow: string; children: ReactNode }) => (
  <SiteLayout>
    <section className="border-b border-border bg-surface">
      <div className="container-tight py-14">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>
      </div>
    </section>
    <section className="container-tight py-14">
      <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-p:text-foreground/80 prose-p:leading-relaxed prose-a:text-accent">
        {children}
      </div>
    </section>
  </SiteLayout>
);
