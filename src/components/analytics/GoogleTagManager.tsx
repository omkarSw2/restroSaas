"use client";

import Script from "next/script";

interface GoogleTagManagerProps {
  gtmId?: string;
  gaId?: string;
}

/**
 * High-performance Google analytics script injection component.
 * Supports both Google Analytics 4 (G-XXXX measurement IDs, via gtag.js)
 * and Google Tag Manager (GTM-XXXX container IDs).
 * Uses Next.js native Script tag with afterInteractive strategy to preserve Core Web Vitals (LCP & INP).
 */
export default function GoogleTagManager({ gtmId, gaId }: GoogleTagManagerProps) {
  const containerId = gtmId || process.env.NEXT_PUBLIC_GTM_ID;
  const measurementId = gaId || process.env.NEXT_PUBLIC_GA_ID;

  if (!containerId && !measurementId) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "Google Analytics: no ID configured. Add NEXT_PUBLIC_GA_ID (G-XXXX) or NEXT_PUBLIC_GTM_ID (GTM-XXXX) to your environment variables."
      );
    }
    return null;
  }

  return (
    <>
      {/* Google Analytics 4 (gtag.js) */}
      {measurementId && (
        <>
          <Script
            id="ga4-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          />
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${measurementId}');
              `,
            }}
          />
        </>
      )}

      {/* Google Tag Manager Container Script */}
      {containerId && (
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
      )}
    </>
  );
}
