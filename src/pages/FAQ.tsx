import { SiteLayout } from "@/components/layout/SiteLayout";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What are peptides and how are they made?",
    a: "Peptides are short chains of amino acids linked together by peptide bonds. They are synthesised in laboratories using Solid-Phase Peptide Synthesis (SPPS), then purified and freeze-dried (lyophilised) for research applications.",
  },
  {
    q: "Are your peptides suitable for research?",
    a: "Yes. Our products meet high purity standards (minimum 99%) for controlled laboratory research only. They are explicitly unsuitable for human or animal use, diagnostics, or clinical purposes of any kind.",
  },
  {
    q: "Do your peptides contain mannitol?",
    a: "Some peptide products may include trace amounts of mannitol or other stabilisers used during lyophilisation to help maintain structure and support handling. This is noted where applicable.",
  },
  {
    q: "Why does my peptide look cloudy after reconstitution?",
    a: "A cloudy or milky appearance after reconstitution can be normal, especially for peptides with hydrophobic amino acids. This does not indicate contamination. If you have concerns, please contact our support team.",
  },
  {
    q: "How should I store peptides?",
    a: "Unopened freeze-dried (lyophilised) peptides should be kept in a cool, dry, temperature-controlled environment, ideally at or below -20 °C, protected from light. Reconstituted solutions require prompt use and appropriate cold storage.",
  },
  {
    q: "Do you provide Certificates of Analysis?",
    a: "Yes. Batch-specific Certificates of Analysis (COAs) are available upon request or from individual product pages, verifying purity and identity via HPLC and mass spectrometry.",
  },
  {
    q: "What payment and shipping methods do you offer?",
    a: "We support multiple secure payment options. Both standard (3–7 business days) and express (1–2 business days) shipping are available within the UK, including international options where legally permitted.",
  },
  {
    q: "Do you offer blended peptides?",
    a: "We supply selected research peptide blends alongside individual peptides. See our product catalogue for currently available combinations.",
  },
  {
    q: "Can you provide usage guidance?",
    a: "We do not provide dosing, reconstitution, or administration instructions. Researchers must follow their own internal laboratory protocols and applicable regulations.",
  },
  {
    q: "Are peptides legal to buy in the UK?",
    a: "Peptides are legal to purchase and possess in the UK strictly for legitimate laboratory research purposes. Human or animal administration is strictly prohibited. Customers are responsible for ensuring compliance with their local regulations.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <SiteLayout>
      <section className="border-b border-border bg-surface">
        <div className="container-tight py-16 sm:py-20">
          <span className="eyebrow">Support</span>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">Frequently asked questions</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Common questions about our products, ordering, and research compliance.
          </p>
        </div>
      </section>

      <section className="container-tight py-16">
        <div className="divide-y divide-border rounded-lg border border-border overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-sm font-medium hover:bg-muted/50 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`h-4 w-4 text-accent shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-border bg-surface p-6 text-sm text-muted-foreground">
          <p>Can't find what you're looking for? Email us at{" "}
            <a href="mailto:support@renovopeptides.com" className="text-accent hover:underline">
              support@renovopeptides.com
            </a>{" "}
            and we'll respond within one business day.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
};

export default FAQ;
