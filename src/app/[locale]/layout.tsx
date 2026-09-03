import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { WhatsAppFloatingButton } from "@/components/shared/WhatsAppFloatingButton";
import { LanguagePopup } from "@/components/i18n/LanguagePopup";
import { MauritiusHolidayPopup } from "@/components/shared/MauritiusHolidayPopup";
import { routing } from "@/i18n/routing";
import { getLocaleConfig } from "@/i18n/locales";
import { buildAlternates, ogLocale, SITE_URL } from "@/i18n/seo";

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.home" });
  const alternates = buildAlternates(locale, "");

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("title"),
      template: `%s | MauTravel`,
    },
    description: t("description"),
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
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: ogLocale(locale),
      url: alternates.canonical,
      siteName: "MauTravel",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.jpg"],
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon.png", type: "image/png", sizes: "32x32" },
      ],
      apple: "/apple-touch-icon.png",
    },
    alternates,
  };
}

function getSchemas(locale: string, t: (key: string) => string) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "MauTravel",
    url: SITE_URL,
    description: t("description"),
    inLanguage: getLocaleConfig(locale).tag,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/${locale}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
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

  return { websiteSchema, organizationSchema };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const localeConfig = getLocaleConfig(locale);
  const t = await getTranslations({ locale, namespace: "seo.home" });
  const { websiteSchema, organizationSchema } = getSchemas(locale, t);

  return (
    <html
      lang={localeConfig.tag}
      dir={localeConfig.dir}
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="theme-color" content="#0F2044" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-foreground">
        <NextIntlClientProvider>
          <JsonLd data={websiteSchema} />
          <JsonLd data={organizationSchema} />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloatingButton />
          <LanguagePopup />
          <MauritiusHolidayPopup />
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
