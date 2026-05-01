import { useEffect, useState } from "react";
import { ShieldCheck, FlaskConical, AlertTriangle } from "lucide-react";

const STORAGE_KEY = "renovo_age_verified";

export const AgeVerificationModal = () => {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [declined, setDeclined] = useState(false);

  useEffect(() => {
    const verified = sessionStorage.getItem(STORAGE_KEY);
    if (!verified) {
      // slight delay so page assets start loading first
      const t = setTimeout(() => setVisible(true), 300);
      return () => clearTimeout(t);
    }
  }, []);

  const handleAgree = () => {
    setLeaving(true);
    setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setVisible(false);
      setLeaving(false);
    }, 600);
  };

  const handleDecline = () => {
    setDeclined(true);
  };

  if (!visible) return null;

  return (
    <div
      className={`age-gate-overlay ${leaving ? "age-gate-overlay--exit" : ""}`}
      aria-modal="true"
      role="dialog"
      aria-labelledby="age-gate-title"
    >
      {/* Animated background particles */}
      <div className="age-gate-particles" aria-hidden>
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className={`particle particle--${i % 6}`} />
        ))}
      </div>

      {/* 3D Card */}
      <div className={`age-gate-card ${leaving ? "age-gate-card--exit" : ""} ${declined ? "age-gate-card--shake" : ""}`}>
        {/* Top glow */}
        <div className="age-gate-glow" aria-hidden />

        {/* Header */}
        <div className="age-gate-header">
          <div className="age-gate-logo-wrap">
            <img src="/logo.png" alt="Renovo Peptides" className="age-gate-logo" />
          </div>
          <div className="age-gate-badge">
            <FlaskConical className="h-3 w-3" />
            <span>Research Use Only</span>
          </div>
        </div>

        {/* Divider */}
        <div className="age-gate-divider" />

        {/* Body */}
        {!declined ? (
          <>
            <h2 id="age-gate-title" className="age-gate-title">
              Welcome to <span className="age-gate-brand">Renovo Peptides.</span>
            </h2>

            <p className="age-gate-intro">
              This website contains information about research peptides intended
              strictly for <strong>laboratory and educational purposes only</strong>.
            </p>

            <p className="age-gate-sub">
              Products and information offered by <strong>Renovo Peptides</strong> are{" "}
              <strong>not</strong> intended to diagnose, treat, cure, or prevent any
              disease, and are <strong>not</strong> for human or veterinary use,
              consumption, or injection.
            </p>

            <p className="age-gate-confirm-label">By entering this site, you confirm that:</p>

            <ul className="age-gate-list">
              <li>
                <ShieldCheck className="age-gate-list-icon" />
                <span>
                  You are <strong>18 years of age or older</strong> (or the age of
                  majority in your jurisdiction)
                </span>
              </li>
              <li>
                <ShieldCheck className="age-gate-list-icon" />
                <span>
                  You understand that all products from{" "}
                  <strong>Renovo Peptides</strong> are for research purposes only
                </span>
              </li>
              <li>
                <ShieldCheck className="age-gate-list-icon" />
                <span>
                  You agree to our{" "}
                  <a href="/terms" className="age-gate-link">Terms &amp; Conditions</a>{" "}
                  and{" "}
                  <a href="/privacy" className="age-gate-link">Privacy Policy</a>
                </span>
              </li>
            </ul>

            <p className="age-gate-warning">
              If you do not meet these requirements, please exit the website
              immediately.
            </p>

            <div className="age-gate-actions">
              <button className="age-gate-btn age-gate-btn--agree" onClick={handleAgree}>
                <span className="age-gate-btn-shimmer" />
                <ShieldCheck className="h-4 w-4" />
                I Am 18+ And Agree
              </button>
              <button className="age-gate-btn age-gate-btn--decline" onClick={handleDecline}>
                <AlertTriangle className="h-4 w-4" />
                I Do Not Agree / I Am Under 18
              </button>
            </div>
          </>
        ) : (
          <div className="age-gate-declined">
            <AlertTriangle className="age-gate-declined-icon" />
            <h2 className="age-gate-declined-title">Access Restricted</h2>
            <p className="age-gate-declined-text">
              You must be 18 years or older and agree to our terms to access this
              site. Please exit the page now.
            </p>
            <button
              className="age-gate-btn age-gate-btn--back"
              onClick={() => setDeclined(false)}
            >
              Go Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
