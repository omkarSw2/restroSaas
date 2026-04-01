import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://techresto.com"),
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
    description: "The ultimate hospitality OS for modern restaurants and retail.",
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
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
      </head>
      <body
        className="font-body antialiased overflow-x-hidden bg-background text-on-surface"
      >
        {children}
      </body>
    </html>
  );
}
