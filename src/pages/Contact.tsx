import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent. We'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <SiteLayout>
      <section className="border-b border-border bg-surface">
        <div className="container-tight py-16 sm:py-20">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">Get in touch</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Questions about specifications, batch documentation or wholesale enquiries? Our team
            responds within one business day.
          </p>
        </div>
      </section>

      <section className="container-tight py-16 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-1 space-y-6">
          {[
            { icon: Mail, t: "Email", v: "support@renovopeptides.com", href: "mailto:support@renovopeptides.com" },
            { icon: MapPin, t: "Location", v: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ" },
            { icon: Clock, t: "Response time", v: "Within 24 hours, Mon–Fri" },
          ].map(({ icon: I, t, v, href }) => (
            <div key={t} className="rounded-lg border border-border bg-card p-5">
              <I className="h-5 w-5 text-accent" />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t}</p>
              {href ? (
                <a href={href} className="mt-1 block text-sm font-medium hover:text-accent transition-colors">{v}</a>
              ) : (
                <p className="mt-1 text-sm font-medium">{v}</p>
              )}
            </div>
          ))}
          <div className="rounded-lg border border-border bg-surface p-5 text-xs text-muted-foreground">
            <strong className="text-foreground block mb-1">Renovo Research Ltd</strong>
            Trading as Renovo Peptides · Company No. 16952545
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-2 rounded-lg border border-border bg-card p-6 sm:p-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" required className="mt-2" placeholder="Jane" />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" required className="mt-2" placeholder="Smith" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required className="mt-2" placeholder="you@lab.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" className="mt-2" placeholder="+44 7700 000000" />
            </div>
          </div>
          <div>
            <Label htmlFor="message">Messages</Label>
            <Textarea id="message" required rows={6} className="mt-2" placeholder="How can we help?" />
          </div>
          <Button type="submit" size="lg" disabled={loading} className="bg-accent text-accent-foreground hover:bg-accent/90">
            {loading ? "Sending…" : "Send"}
          </Button>
        </form>
      </section>
    </SiteLayout>
  );
};

export default Contact;
