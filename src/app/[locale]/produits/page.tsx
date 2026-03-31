import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { routing } from "@/i18n/routing";
import { ProductDetailSections } from "@/components/ProductDetailSections";
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
      <section className="bg-gradient-to-b from-jc-100 to-jc-page py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-jc-900 sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-jc-700">{t("subtitle")}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`flex flex-col gap-8 lg:flex-row lg:items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-jc-300/40 lg:w-1/2">
                  <Image
                    src={product.img}
                    alt={t(`${product.translationKey}.name`)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index < 2}
                  />
                </div>
                <div className="lg:w-1/2 lg:px-12">
                  <h2 className="text-2xl font-bold text-jc-900 sm:text-3xl">
                    {t(`${product.translationKey}.name`)}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-jc-800">
                    {t(`${product.translationKey}.description`)}
                  </p>
                  <ProductDetailSections translationKey={product.translationKey} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
