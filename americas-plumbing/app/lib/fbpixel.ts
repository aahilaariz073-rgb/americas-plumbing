// Meta (Facebook) Pixel — Lead event tracking.
// Pixel ID comes from env, never hardcoded here.
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

// Fires the Meta Pixel "Lead" event. Called from each lead form's success
// handler (Contact page, ChatBot, popup) only after a successful submission
// response — never on click or validation pass.
export function reportLead(source: 'popup' | 'contact_page' | 'chatbot', contentName?: string) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;
  window.fbq('track', 'Lead', {
    source,
    ...(contentName ? { content_name: contentName } : {}),
  });
}
