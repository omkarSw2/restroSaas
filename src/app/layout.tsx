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
      "The ultimate hospitality OS for modern restaurants and retail.",
    url: "https://www.techrestopos.com",
    siteName: "techrestoPOS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "techrestoPOS Dashboard",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "techrestoPOS - Restaurant Management Simplified",
    description: "Steamline your restaurant operations with techrestoPOS.",
    images: ["/og-image.png"],
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
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "184"
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
        "text": "Yes, security is our top priority. We use end-to-end encryption for all transaction data and are fully PCI-DSS Level 1 compliant. Your data is backed up daily in secure cloud servers with 99.9% uptime guarantee."
      }
    },
    {
      "@type": "Question",
      "name": "What hardware is compatible with the software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our platform is designed to be hardware-agnostic. It works seamlessly on iPads, Android tablets, and most Windows-based POS terminals. We also integrate with major receipt printers, cash drawers, and card readers like Star Micronics and Epson."
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
        "text": "We offer 24/7 technical support via chat, email, and phone for all our customers. Our Professional and Enterprise plans include priority queuing and dedicated account managers for expedited resolution of critical issues."
      }
    },
    {
      "@type": "Question",
      "name": "Can I integrate with my existing accounting software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We offer native integrations with QuickBooks, Xero, and NetSuite. This allows for automatic daily sales syncing, reducing manual data entry and ensuring your books are always up to date."
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
