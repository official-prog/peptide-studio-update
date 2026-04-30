import { Link } from "react-router-dom";
import { Mail, MapPin, ShieldCheck } from "lucide-react";

export const SiteFooter = () => {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-wide py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/">
              <img src="/logo.png" alt="Renovo Peptides Research Only" className="h-12 w-auto" />
            </Link>
            <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
              UK-based supplier of high-purity research peptides. Every batch independently
              tested and supplied with a Certificate of Analysis. Strictly for laboratory and
              research use only.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href="mailto:support@renovopeptides.com" className="flex items-center gap-2 text-foreground/90 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" /> support@renovopeptides.com
              </a>
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" /> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
              </p>
            </div>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Peptides</Link></li>
              <li><Link to="/shop?category=Cognitive" className="hover:text-accent transition-colors">Cognitive</Link></li>
              <li><Link to="/shop?category=Recovery" className="hover:text-accent transition-colors">Recovery</Link></li>
              <li><Link to="/shop?category=Longevity" className="hover:text-accent transition-colors">Longevity</Link></li>
              <li><Link to="/shop?category=Metabolic" className="hover:text-accent transition-colors">Metabolic</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping & Delivery Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-accent transition-colors">Cookie Policy</Link></li>
              <li><Link to="/legal" className="hover:text-accent transition-colors">Legal Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-border bg-background p-5 text-xs text-muted-foreground flex items-start gap-3">
          <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p>
            <strong className="text-foreground">Research Use Only.</strong> The products sold by Renovo Peptides are intended
            exclusively for in-vitro research and laboratory experimentation by qualified
            professionals. They are not pharmaceutical, food or cosmetic products and are not
            intended for human or veterinary use, consumption, injection, diagnostic, therapeutic or any clinical use.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Renovo Research Ltd. All rights reserved.</p>
          <p className="font-mono uppercase tracking-widest">Registered in England & Wales · Company No. 16952545</p>
        </div>
      </div>
    </footer>
  );
};
