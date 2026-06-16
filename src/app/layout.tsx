import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://techresto.com",
  ),
  title: {
    default: "TechResto - High-Performance Restaurant POS & Management System",
    template: "%s | TechResto",
  },
  description:
    "TechResto provides the ultimate hospitality OS for modern restaurants, cafes, and retail. Streamline billing, inventory, and loyalty with real-time insights.",
  keywords: [
    "Restaurant POS",
    "Cloud POS",
    "Inventory Management",
    "Restaurant Management System",
    "TechResto",
    "Billing Software",
    "Hospitality OS",
  ],
  authors: [{ name: "TechResto Team", url: "https://techresto.com" }],
  creator: "TechResto Corporation",
  publisher: "TechResto Corporation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "TechResto - High-Performance Restaurant POS",
    description:
      "The ultimate hospitality OS for modern restaurants and retail.",
    url: "https://techresto.com",
    siteName: "TechResto",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechResto POS Dashboard",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechResto - Restaurant Management Simplified",
    description: "Steamline your restaurant operations with TechResto POS.",
    images: ["/og-image.png"],
    creator: "@techresto",
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
  "name": "TechResto",
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
  "name": "TechResto",
  "url": "https://techresto.com",
  "logo": "https://techresto.com/favicon.png",
  "sameAs": [
    "https://twitter.com/techresto"
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
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
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
