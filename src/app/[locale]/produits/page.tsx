import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ProductDetailSections } from "@/components/ProductDetailSections";
import { MushroomProductCard } from "@/components/MushroomProductCard";
import { champignons } from "@/lib/assets";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: isFr
      ? "Nos Champignons | Shiitaké, pleurote, Black Pearl — Jura Champi"
      : "Our Mushrooms | Shiitake, oyster, Black Pearl — Jura Champi",
    description: isFr
      ? "Découvrez nos champignons frais cultivés au pied du Jura : Shiitaké, Pleurote blanche, Pleurote de Panicaut, Black Pearl, Crinière de lion. Producteur local."
      : "Discover our fresh mushrooms at the foot of the Jura: Shiitake, white oyster, king oyster, Black Pearl, lion's mane. Local producer.",
    keywords: isFr
      ? ["champignons Jura", "shiitaké", "pleurote", "Black Pearl", "crinière de lion", "champignons bio"]
      : ["Jura mushrooms", "shiitake", "oyster mushroom", "lion's mane"],
  };
}

const products = [
  {
    id: "shiitake",
    img: champignons.shiitake,
    translationKey: "shiitake" as const,
  },
  {
    id: "pleuroteBlanche",
    img: champignons.pleuroteBlanche,
    translationKey: "pleuroteBlanche" as const,
  },
  {
    id: "pleurotePanicaut",
    img: champignons.pleurotePanicaut,
    translationKey: "pleurotePanicaut" as const,
  },
  {
    id: "blackPearl",
    img: champignons.blackPearl,
    translationKey: "blackPearl" as const,
  },
  {
    id: "criniereLion",
    img: champignons.criniereLion,
    translationKey: "criniereLion" as const,
  },
];

export default async function ProduitsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("products");

  return (
    <div className="bg-jc-page">
      <section className="relative overflow-hidden bg-gradient-to-b from-jc-100 to-jc-page py-12 sm:py-16">
        <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-jc-300/25 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-jc-400/20 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-jc-900 sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-jc-700">{t("subtitle")}</p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 md:gap-12">
            {products.map((product) => (
              <MushroomProductCard
                key={product.id}
                imageSrc={product.img}
                name={t(`${product.translationKey}.name`)}
                description={t(`${product.translationKey}.description`)}
              >
                <ProductDetailSections translationKey={product.translationKey} />
              </MushroomProductCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
