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
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://your-domain.com"),
  title: {
    default: "Kinetic Ledger - High-Performance POS for Modern Commerce",
    template: "%s | Kinetic Ledger",
  },
  description:
    "Precision tools for high-velocity growth. Kinetic Ledger provides real-time data and automated infrastructure for modern retail environments.",
  keywords: ["POS", "Retail POS", "Commerce Infrastructure", "Cloud POS", "Inventory Management", "Kinetic Ledger"],
  authors: [{ name: "Kinetic Ledger" }],
  creator: "Kinetic Ledger",
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
