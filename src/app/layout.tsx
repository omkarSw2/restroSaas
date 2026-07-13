import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://www.techrestopos.com",
  ),
  title: {
    default: "techrestoPOS - High-Performance Restaurant POS & Management System",
    template: "%s | techrestoPOS",
  },
  description:
    "techrestoPOS by Techcardz is a high-performance, cloud-based restaurant POS and billing management software for cafes, QSRs, and fine dining. Manage billing, inventory, QR ordering, and loyalty seamlessly.",
  keywords: [
    "Restaurant POS",
    "Cloud POS",
    "Inventory Management",
    "Restaurant Management System",
    "techrestoPOS",
    "Billing Software",
    "Hospitality OS",
  ],
  authors: [{ name: "techrestoPOS Team", url: "https://www.techrestopos.com" }],
  creator: "Techcardz Services Private Limited",
  publisher: "Techcardz Services Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "techrestoPOS - High-Performance Restaurant POS",
    description:
      "The ultimate hospitality OS for modern restaurants — billing, KDS, QR ordering, inventory, and loyalty in one system.",
    url: "https://www.techrestopos.com",
    siteName: "techrestoPOS",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "techrestoPOS - Restaurant Management Simplified",
    description: "Streamline your restaurant operations with techrestoPOS.",
    creator: "@techrestopos",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

// Rich Structured Data (JSON-LD Schemas) for enhanced SEO visibility
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "techrestoPOS",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "iOS, Android, Windows, Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "INR",
    "description": "Free trial and live interactive demo available"
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "techrestoPOS",
  "url": "https://www.techrestopos.com",
  "logo": "https://www.techrestopos.com/favicon.png",
  "sameAs": [
    "https://twitter.com/techrestopos"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is my data secure with your POS system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, security is our top priority. All traffic is encrypted over SSL and payments are processed by trusted gateways like Razorpay, Stripe, and PayPal — card details never touch our servers. Every restaurant runs on its own isolated database with automated nightly backups."
      }
    },
    {
      "@type": "Question",
      "name": "What hardware is compatible with the software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our platform is completely hardware-agnostic. It runs in any modern browser on iPads, Android tablets, and Windows machines, and can be installed as an app on any device. KOTs and customer bills print to any connected receipt printer directly from the browser, with silent one-click printing supported on kiosk setups."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the setup process take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For single locations, you can be up and running within 24-48 hours. Our onboarding team assists with menu upload and configuration. For multi-location enterprises, we provide a dedicated implementation manager to ensure a smooth phased rollout over 2-4 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of customer support do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We support you from day one — on-site installation assistance, phone and email support, and an in-app helpdesk where you can raise tickets and track resolutions. Critical issues get priority handling so your service is never interrupted."
      }
    },
    {
      "@type": "Question",
      "name": "What integrations does techrestoPOS support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "techrestoPOS supports 15+ payment gateways including Razorpay, Stripe, PayPal, and Paytm, plus SMS notifications via Twilio and MSG91. Sales and item reports export to Excel for your accountant or any accounting tool."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        {/* Load Google Tag Manager optimized container script */}
        <GoogleTagManager />

        {/* Inject JSON-LD SEO schemas directly into head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-body antialiased overflow-x-hidden bg-background text-on-surface">
        {children}
      </body>
    </html>
  );
}
