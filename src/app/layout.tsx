import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { WhatsAppFloatingButton } from "@/components/shared/WhatsAppFloatingButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// IMPORTANT: Replace https://www.mautravel.com with your actual domain.
const SITE_URL = "https://www.mautravel.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MauTravel — Mauritius Tour Operator",
    template: "%s | MauTravel",
  },
  description:
    "MauTravel is Mauritius's trusted Tour Operator — offering premium airport transfers, private tours, activities, car rental, properties, and more.",
  keywords: [
    "Mauritius travel",
    "Tour Operator Mauritius",
    "airport transfer Mauritius",
    "Mauritius tours",
    "Mauritius activities",
    "car rental Mauritius",
    "Mauritius holiday",
    "private tours Mauritius",
    "Mauritius excursions",
    "DMC Mauritius",
    "catamaran Mauritius",
    "paragliding Mauritius",
    "dolphin swim Mauritius",
  ],
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
  openGraph: {
    title: "MauTravel — Mauritius Tour Operator",
    description:
      "Your trusted partner for premium travel experiences in Mauritius. Transfers, tours, activities, car rental and more.",
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "MauTravel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MauTravel — Mauritius Tour Operator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MauTravel — Mauritius Tour Operator",
    description:
      "Your trusted partner for premium travel experiences in Mauritius. Transfers, tours, activities, car rental and more.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "MauTravel",
  url: SITE_URL,
  description:
    "MauTravel is Mauritius's trusted Tour Operator — offering premium airport transfers, private tours, activities, car rental, properties, and more.",
  inLanguage: "en-GB",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "MauTravel",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/icon.png`,
    width: 512,
    height: 512,
  },
  description:
    "MauTravel is a fully licensed and government-registered Tour Operator in Mauritius, offering airport transfers, private tours, curated activities, car rental, and hand-picked properties.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MU",
    addressLocality: "Mauritius",
    addressRegion: "Mauritius",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+230-5826-9725",
      contactType: "customer service",
      availableLanguage: ["English", "French"],
      contactOption: "TollFree",
    },
    {
      "@type": "ContactPoint",
      url: "https://wa.me/23058269725",
      contactType: "customer service",
      availableLanguage: ["English", "French"],
    },
  ],
  email: "mautravel.taxi@gmail.com",
  areaServed: {
    "@type": "Country",
    name: "Mauritius",
    sameAs: "https://www.wikidata.org/wiki/Q1025",
  },
  priceRange: "$$",
  currenciesAccepted: "MUR, EUR, USD, GBP",
  paymentAccepted: "Cash, Bank Transfer",
  openingHours: "Mo-Su 00:00-23:59",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "500",
    reviewCount: "500",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="theme-color" content="#0F2044" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-foreground">
        <JsonLd data={WEBSITE_SCHEMA} />
        <JsonLd data={ORGANIZATION_SCHEMA} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T550QLNF8Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T550QLNF8Z');
          `}
        </Script>
      </body>
    </html>
  );
}
