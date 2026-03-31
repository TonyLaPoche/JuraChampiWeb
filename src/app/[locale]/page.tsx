import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { routing } from "@/i18n/routing";
import { champignons } from "@/lib/assets";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: isFr
      ? "Jura Champi | Producteur et fournisseur de champignons frais dans le Jura"
      : "Jura Champi | Fresh mushroom producer and supplier in the Jura",
    description: isFr
      ? "Jura Champi - Culture de champignons frais en bordure du Jura. Pleurote blanche, Pleurote de Panicaut, Black Pearl, Shiitaké, Crinière de lion. Livraison restaurants, traiteurs, collectivités et particuliers. Collonges, Ain."
      : "Jura Champi - Fresh mushroom cultivation on the edge of the Jura. Oyster mushroom, Shiitake, Lion's mane. Delivery to restaurants, caterers, communities and individuals. Collonges, Ain.",
    keywords: isFr
      ? ["Jura champi", "champignons Collonges", "champignons Ain", "producteur champignons frais", "champignons bio Jura", "livraison champignons"]
      : ["Jura mushrooms", "mushroom producer Jura", "fresh mushrooms France"],
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-jc-100 to-jc-page">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615485290382-441e4d048cb5?w=1920')] bg-cover bg-center opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-jc-900 sm:text-5xl md:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-jc-700 sm:text-xl">
              {t("hero.subtitle")}
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-jc-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-jc-800 hover:shadow-xl"
              >
                {t("hero.cta")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-jc-page py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-jc-900 sm:text-4xl">
              {t("story.title")}
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-jc-800/90">
              <p>{t("story.paragraph1")}</p>
            <div className="mt-6">
              <Link
                href="/nous-trouver"
                className="inline-flex items-center font-semibold text-jc-600 hover:text-jc-700"
              >
                {t("story.learnMore")}
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-jc-100/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-jc-900 sm:text-4xl">
            {t("clients.title")}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-jc-700">
            {t("clients.intro")}
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-jc-page p-6 shadow-lg transition-shadow hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-jc-200 text-2xl">
                🍽️
              </div>
              <h3 className="mt-4 text-xl font-semibold text-jc-900">
                {t("clients.restaurants")}
              </h3>
              <p className="mt-2 text-jc-700">
                {t("clients.restaurantsDesc")}
              </p>
            </div>
            <div className="rounded-2xl bg-jc-page p-6 shadow-lg transition-shadow hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-jc-200 text-2xl">
                🏫
              </div>
              <h3 className="mt-4 text-xl font-semibold text-jc-900">
                {t("clients.canteens")}
              </h3>
              <p className="mt-2 text-jc-700">
                {t("clients.canteensDesc")}
              </p>
            </div>
            <div className="rounded-2xl bg-jc-page p-6 shadow-lg transition-shadow hover:shadow-xl sm:col-span-2 lg:col-span-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-jc-200 text-2xl">
                🍄
              </div>
              <h3 className="mt-4 text-xl font-semibold text-jc-900">
                {t("clients.individuals")}
              </h3>
              <p className="mt-2 text-jc-700">
                {t("clients.individualsDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="bg-jc-page py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-jc-900 sm:text-4xl">
              {t("productsPreview.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-jc-700">
              {t("productsPreview.subtitle")}
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[
              { img: champignons.shiitake, name: "Shiitaké" },
              { img: champignons.pleuroteBlanche, name: "Pleurote blanche" },
              { img: champignons.pleurotePanicaut, name: "Pleurote de Panicaut" },
              { img: champignons.blackPearl, name: "Black Pearl" },
              { img: champignons.criniereLion, name: "Crinière de lion" },
            ].map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-2xl bg-jc-100 shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-jc-900">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/produits"
              className="inline-flex items-center rounded-lg border-2 border-jc-600 px-6 py-3 font-semibold text-jc-600 transition-colors hover:bg-jc-600 hover:text-white"
            >
              {t("productsPreview.viewAll")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
