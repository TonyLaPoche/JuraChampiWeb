import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

const products = [
  {
    id: "shiitake",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    translationKey: "shiitake",
  },
  {
    id: "pleurote",
    img: "https://images.unsplash.com/photo-1615485290382-441e4d048cb5?w=600&h=400&fit=crop",
    translationKey: "pleurote",
  },
  {
    id: "champignonParis",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
    translationKey: "champignonParis",
  },
  {
    id: "maitake",
    img: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=600&h=400&fit=crop",
    translationKey: "maitake",
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
    <div className="bg-white">
      <section className="bg-gradient-to-b from-emerald-50 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-emerald-900 sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-emerald-700">{t("subtitle")}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:w-1/2">
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
                  <h2 className="text-2xl font-bold text-emerald-900 sm:text-3xl">
                    {t(`${product.translationKey}.name`)}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-emerald-800">
                    {t(`${product.translationKey}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
