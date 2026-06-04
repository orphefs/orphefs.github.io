import { GA_MEASUREMENT_ID, CLARITY_PROJECT_ID, analyticsConfigured } from "./config";

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  clarity?: ((...args: unknown[]) => void) & { q?: unknown[] };
};

const CONSENT_KEY = "ok-analytics-consent"; // "granted" | "denied"
let loaded = false;

export type Consent = "granted" | "denied";

export function getConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent): void {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage unavailable — ignore */
  }
}

// Inject GA4 + Clarity. Only called after the visitor opts in.
export function loadAnalytics(): void {
  if (loaded || !analyticsConfigured()) return;
  loaded = true;
  const w = window as AnalyticsWindow;

  // --- Google Analytics 4 ---
  if (GA_MEASUREMENT_ID) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(s);

    w.dataLayer = w.dataLayer || [];
    const gtag = (...args: unknown[]) => {
      w.dataLayer!.push(args);
    };
    w.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  // --- Microsoft Clarity ---
  if (CLARITY_PROJECT_ID) {
    const c = (function (...args: unknown[]) {
      (c.q = c.q || []).push(args);
    } as AnalyticsWindow["clarity"])!;
    w.clarity = w.clarity || c;
    const t = document.createElement("script");
    t.async = true;
    t.src = "https://www.clarity.ms/tag/" + CLARITY_PROJECT_ID;
    const first = document.getElementsByTagName("script")[0];
    first?.parentNode?.insertBefore(t, first);
  }
}

// Manual SPA page_view (GA4) on client-side route changes.
export function trackPageView(path: string): void {
  if (!loaded) return;
  const w = window as AnalyticsWindow;
  if (w.gtag && GA_MEASUREMENT_ID) {
    w.gtag("event", "page_view", {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }
}
