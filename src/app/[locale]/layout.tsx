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
    fr: "Jura Champi - Producteur de champignons frais dans le Jura. Fournisseur pour restaurants, cantines, traiteurs et particuliers. Livraison locale.",
    en: "Jura Champi - Fresh mushroom producer in the Jura. Supplier for restaurants, canteens, caterers and individuals. Local delivery.",
  };

  return {
    title: titles[locale] ?? titles.fr,
    description: descriptions[locale] ?? descriptions.fr,
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
    "@type": "Organization",
    name: "Jura Champi",
    url: "https://jurachampi.fr",
    description: "Producteur de champignons frais dans le Jura",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1234 Route des Champignons",
      addressLocality: "Saint-Claude",
      postalCode: "39200",
      addressRegion: "Jura",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-3-84-51-23-45",
      contactType: "customer service",
      email: "contact@jurachampi.fr",
      areaServed: "FR",
    },
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
