import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  const titles: Record<string, string> = {
    fr: "Jura Champi | Producteur de champignons frais dans le Jura",
    en: "Jura Champi | Fresh mushroom producer in the Jura",
  };

  const descriptions: Record<string, string> = {
    fr: "Jura Champi — culture de champignons bio au pied du Jura (Collonges, Ain). Shiitaké, pleurote, Black Pearl, crinière de lion. Livraison pros et particuliers.",
    en: "Jura Champi — organic mushrooms at the foot of the Jura (Collonges, Ain). Shiitake, oyster, Black Pearl, lion's mane. Delivery for professionals and individuals.",
  };

  return {
    title: titles[locale] ?? titles.fr,
    description: descriptions[locale] ?? descriptions.fr,
    keywords: [
      "Jura champi",
      "champignons Collonges",
      "champignons Ain",
      "producteur champignons bio",
      "champignons frais Jura",
    ],
    alternates: {
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://jurachampi.fr/#organization",
    name: "Jura Champi",
    alternateName: "Jura Champignons",
    url: "https://jurachampi.fr",
    description:
      "Micro ferme artisanale à Collonges (Ain), en bordure du Jura. Champignons bio : Shiitaké, pleurote, Black Pearl, crinière de lion. Livraison restaurants, collectivités et particuliers.",
    image:
      "https://jurachampi.fr/logo%20jura%20champi%20fond%20transparent.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "250, rue de l'Etournelle, Techno Parc de Collonges",
      addressLocality: "Collonges",
      postalCode: "01550",
      addressRegion: "Ain",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 46.339,
      longitude: 5.916,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-6-09-33-15-67",
      contactType: "customer service",
      email: "contact@jurachampi.fr",
      areaServed: ["Jura", "Franche-Comté", "France"],
      availableLanguage: ["French", "English"],
    },
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "14:00",
        closes: "18:00",
      },
    ],
    sameAs: [],
  };

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
