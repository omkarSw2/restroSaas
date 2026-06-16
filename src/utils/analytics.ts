/**
 * Safe, SSR-proof Google Tag Manager DataLayer event tracking utilities.
 * Preserves compilation safety for server-rendered components.
 */

declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Push an event to the GTM dataLayer.
 * Safely checks if window and dataLayer exist to prevent Server-Side Rendering (SSR) issues.
 */
export function trackEvent(eventName: string, eventParams: Record<string, any> = {}) {
  if (typeof window !== "undefined") {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        ...eventParams,
        timestamp: new Date().toISOString(),
      });
      
      // Log tracking events in development environment for verification
      if (process.env.NODE_ENV === "development") {
        console.log(`[Analytics Event]: ${eventName}`, eventParams);
      }
    } catch (error) {
      console.error("Failed to push event to dataLayer:", error);
    }
  }
}

/**
 * Tracks when a user first begins interacting with a form.
 * Useful for calculating form abandonment and conversion rates.
 */
export function trackFormStart(formName: string = "contact_demo_form") {
  trackEvent("form_start", {
    form_name: formName,
  });
}

/**
 * Tracks when a lead submission is successful.
 * This is the primary B2B SaaS conversion event.
 */
export function trackLeadSubmission(
  businessName: string,
  businessType: string,
  email: string,
  formName: string = "contact_demo_form"
) {
  trackEvent("lead_submit_success", {
    form_name: formName,
    business_type: businessType,
    // Using a hashed or generic notation if required for GDPR, otherwise tracking business metadata
    business_name: businessName,
    // Send email domain to see user demographics without exposing full email PII directly
    email_domain: email.split("@")[1] || "",
  });
}

/**
 * Tracks validation or server errors on forms.
 * Essential for understanding UI friction and why users aren't converting.
 */
export function trackFormError(
  fieldName: string,
  errorMessage: string,
  formName: string = "contact_demo_form"
) {
  trackEvent("form_error", {
    form_name: formName,
    field_name: fieldName,
    error_message: errorMessage,
  });
}

/**
 * Tracks clicks on call-to-action (CTA) buttons or links across the landing page.
 */
export function trackCTAClick(ctaText: string, ctaLocation: string) {
  trackEvent("cta_click", {
    cta_text: ctaText,
    cta_location: ctaLocation,
  });
}
