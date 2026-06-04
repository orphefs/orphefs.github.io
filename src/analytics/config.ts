// ============================================================
//  Analytics configuration
//  Paste your IDs below (or set VITE_GA_ID / VITE_CLARITY_ID at build time).
//  While both are empty, analytics + the consent banner stay completely OFF.
// ============================================================

// Google Analytics 4 Measurement ID — looks like "G-XXXXXXXXXX".
export const GA_MEASUREMENT_ID: string =
  (import.meta.env.VITE_GA_ID as string | undefined) ?? "G-B8TYF9L1CJ";

// Microsoft Clarity Project ID — the short id from your Clarity project URL.
export const CLARITY_PROJECT_ID: string =
  (import.meta.env.VITE_CLARITY_ID as string | undefined) ?? "x1xv4zhwtv";

export const analyticsConfigured = (): boolean =>
  Boolean(GA_MEASUREMENT_ID || CLARITY_PROJECT_ID);
