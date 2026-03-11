import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://your-domain.com"),
  title: {
    default: "Restro POS - All-in-one POS & Billing for Restaurants and Hotels",
    template: "%s | Restro POS",
  },
  description:
    "The ultimate all-in-one POS and Billing solution designed for modern boutique hotels, cafes, and high-end restaurants. Streamline your operations today.",
  keywords: ["POS", "Restaurant POS", "Hotel Billing Software", "Cloud POS", "Restaurant Management System", "Boutique Hotel POS", "Billing Solution"],
  authors: [{ name: "Restro" }],
  creator: "Restro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Restro POS - All-in-one POS & Billing Solution",
    description: "Streamline your restaurant and hotel operations with our cloud-based POS and billing system.",
    siteName: "Restro POS",
    images: [
      {
        url: "/og-image.png", // Expected Open Graph image 1200x630
        width: 1200,
        height: 630,
        alt: "Restro POS Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restro POS - All-in-one POS & Billing Solution",
    description: "Streamline your restaurant and hotel operations with our cloud-based POS and billing system.",
    images: ["/og-image.png"], 
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} antialiased overflow-x-hidden bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
