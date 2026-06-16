"use client";

import Script from "next/script";

interface GoogleTagManagerProps {
  gtmId?: string;
}

/**
 * High-performance Google Tag Manager script injection component.
 * Uses Next.js native Script tag with afterInteractive strategy to preserve Core Web Vitals (LCP & INP).
 */
export default function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  const containerId = gtmId || process.env.NEXT_PUBLIC_GTM_ID;

  if (!containerId) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "Google Tag Manager: Container ID is missing. Add NEXT_PUBLIC_GTM_ID to your environment variables."
      );
    }
    return null;
  }

  return (
    <>
      {/* Google Tag Manager Container Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${containerId}');
          `,
        }}
      />
    </>
  );
}
