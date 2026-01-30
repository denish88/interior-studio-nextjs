import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { GoldenBackground } from "@/components/GoldenBackground";
import { site } from "@/lib/data";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Orix Design Studio | Timeless Interior Design",
    template: "%s",
  },
  description:
    "Crafting timeless interior experiences. Residential and commercial interiors, turnkey solutions, and custom furniture.",
  keywords: [
    "interior design",
    "interior design studio",
    "residential interior design",
    "commercial interior design",
    "luxury interiors",
    "Orix Design Studio",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Orix Design Studio | Timeless Interior Design",
    description: "Crafting timeless interior experiences. Residential and commercial interiors.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orix Design Studio",
    description: "Crafting timeless interior experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: site.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      description: site.tagline,
      email: site.email,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Design District, Suite 400",
        addressLocality: "Your City",
        addressRegion: "ST",
        postalCode: "10001",
      },
      sameAs: [site.social.instagram, site.social.pinterest, site.social.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.tagline,
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[100] focus:rounded focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-black focus:outline-none"
        >
          Skip to main content
        </a>
        <GoldenBackground />
        <CustomCursor />
        <Navbar />
        <main id="main-content" className="relative" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
