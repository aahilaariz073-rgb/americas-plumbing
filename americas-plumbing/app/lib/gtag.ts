// Google Ads conversion tracking.
// AW-633466141 = America's Plumbing Google Ads conversion ID.
export const GOOGLE_ADS_ID = 'AW-633466141';
// "Contact" conversion action (form / chat / popup lead submitted).
const CONTACT_CONVERSION_LABEL = 'AW-633466141/jwioCMKO7dEBEJ3ah64C';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Fires the Google Ads "Contact" conversion event. Called from every lead
// form's success handler (Contact page, ChatBot, popup) since all of them
// submit via AJAX and never navigate to a "thank you" page for gtag to load on.
export function reportContactConversion() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', { send_to: CONTACT_CONVERSION_LABEL });
}
