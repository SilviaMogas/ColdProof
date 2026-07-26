import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display face — Brand Book v1.0
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// Data face — temperatures, timestamps, checkpoint IDs, measurements
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ColdProof — Proof of safe delivery",
  description:
    "ColdProof gives pharmaceutical companies, logistics operators and healthcare organisations a verifiable record of every condition and handover across the cold chain.",
  keywords: [
    "cold chain assurance",
    "temperature monitoring",
    "pharmaceutical logistics",
    "chain of custody",
    "cold chain compliance",
    "verifiable delivery",
  ],
  openGraph: {
    title: "ColdProof — Proof of safe delivery",
    description:
      "A verifiable record of whether a temperature-sensitive shipment remained within its required conditions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* No-JS fallback: never leave scroll-reveal content permanently hidden */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
