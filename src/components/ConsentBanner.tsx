import { useEffect, useState } from "react";
import { analyticsConfigured } from "../analytics/config";
import { getConsent, setConsent, loadAnalytics } from "../analytics/analytics";

export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!analyticsConfigured()) return; // nothing to consent to
    const choice = getConsent();
    if (choice === "granted") {
      loadAnalytics();
      return;
    }
    if (choice === "denied") return;
    setShow(true);
  }, []);

  const accept = () => {
    setConsent("granted");
    loadAnalytics();
    setShow(false);
  };
  const decline = () => {
    setConsent("denied");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="consent" role="dialog" aria-label="Cookie consent">
      <div className="container consent-inner">
        <p className="consent-text">
          <span className="prompt" />
          <span className="cmd">
            this site uses analytics cookies (Google Analytics &amp; Microsoft Clarity) to
            understand traffic and how the page is used.
          </span>
        </p>
        <div className="consent-actions">
          <button className="consent-btn ghost" onClick={decline}>
            [ decline ]
          </button>
          <button className="consent-btn accept" onClick={accept}>
            [ accept ]
          </button>
        </div>
      </div>
    </div>
  );
}
