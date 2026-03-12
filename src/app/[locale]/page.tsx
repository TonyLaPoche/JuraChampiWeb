import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615485290382-441e4d048cb5?w=1920')] bg-cover bg-center opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-emerald-900 sm:text-5xl md:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-700 sm:text-xl">
              {t("hero.subtitle")}
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-emerald-700 hover:shadow-xl"
              >
                {t("hero.cta")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-emerald-900 sm:text-4xl">
              {t("story.title")}
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-emerald-800/90">
              <p>{t("story.paragraph1")}</p>
              <p>{t("story.paragraph2")}</p>
              <p>{t("story.paragraph3")}</p>
            <div className="mt-6">
              <Link
                href="/nous-trouver"
                className="inline-flex items-center font-semibold text-emerald-600 hover:text-emerald-700"
              >
                {t("story.learnMore")}
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-emerald-50/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-emerald-900 sm:text-4xl">
            {t("clients.title")}
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-2xl">
                🍽️
              </div>
              <h3 className="mt-4 text-xl font-semibold text-emerald-900">
                {t("clients.restaurants")}
              </h3>
              <p className="mt-2 text-emerald-700">
                {t("clients.restaurantsDesc")}
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-2xl">
                🏫
              </div>
              <h3 className="mt-4 text-xl font-semibold text-emerald-900">
                {t("clients.canteens")}
              </h3>
              <p className="mt-2 text-emerald-700">
                {t("clients.canteensDesc")}
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl sm:col-span-2 lg:col-span-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-2xl">
                🍄
              </div>
              <h3 className="mt-4 text-xl font-semibold text-emerald-900">
                {t("clients.individuals")}
              </h3>
              <p className="mt-2 text-emerald-700">
                {t("clients.individualsDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-emerald-900 sm:text-4xl">
              {t("productsPreview.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-700">
              {t("productsPreview.subtitle")}
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
                name: "Shiitaké",
              },
              {
                img: "https://images.unsplash.com/photo-1615485290382-441e4d048cb5?w=400&h=300&fit=crop",
                name: "Pleurote",
              },
              {
                img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
                name: "Champignon de Paris",
              },
              {
                img: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&h=300&fit=crop",
                name: "Maitaké",
              },
            ].map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-2xl bg-emerald-50 shadow-md transition-shadow hover:shadow-xl"
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
                  <h3 className="font-semibold text-emerald-900">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/produits"
              className="inline-flex items-center rounded-lg border-2 border-emerald-600 px-6 py-3 font-semibold text-emerald-600 transition-colors hover:bg-emerald-600 hover:text-white"
            >
              {t("productsPreview.viewAll")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
