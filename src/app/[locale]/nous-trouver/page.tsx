import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { routing } from "@/i18n/routing";

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
      ? "Nous trouver | Jura Champi - Marchés, locaux, contact"
      : "Find us | Jura Champi - Markets, premises, contact",
    description: isFr
      ? "Où trouver Jura Champi : marchés de Lons-le-Saunier, Arbois, Saint-Claude, Foncine-le-Haut. Nos locaux à Saint-Claude. Contact et livraison champignons frais Jura."
      : "Where to find Jura Champi: markets in Lons-le-Saunier, Arbois, Saint-Claude. Our premises in Saint-Claude. Contact and fresh mushroom delivery in the Jura.",
    keywords: isFr
      ? ["Jura Champi marchés", "champignons Saint-Claude", "marchés Jura", "producteur champignons Lons-le-Saunier"]
      : ["Jura Champi markets", "mushrooms Saint-Claude", "Jura markets"],
  };
}

export default async function NousTrouverPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("findUs");

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615485290382-441e4d048cb5?w=1920')] bg-cover bg-center opacity-15" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <h1 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-emerald-700">{t("subtitle")}</p>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-emerald-900 sm:text-3xl">
              {t("history.title")}
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-emerald-800/90">
              <p>{t("history.paragraph1")}</p>
              <p>{t("history.paragraph2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos locaux */}
      <section className="bg-emerald-50/50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-emerald-900 sm:text-3xl">
                {t("premises.title")}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-emerald-800">
                {t("premises.description")}
              </p>
              <p className="mt-4 font-medium italic text-emerald-700">
                {t("premises.visit")}
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=450&fit=crop"
                alt="Caves et cultures Jura Champi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Où nous retrouver - avec le jeu de mot */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-emerald-900 sm:text-3xl">
            {t("whereToFind.title")}
          </h2>
          <p className="mt-4 rounded-xl bg-emerald-100 px-6 py-4 text-center text-lg font-medium italic text-emerald-800 sm:text-xl">
            « {t("whereToFind.wordplay")} »
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {/* En ligne & téléphone */}
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-2xl">
                📞
              </div>
              <h3 className="mt-4 text-xl font-semibold text-emerald-900">
                {t("whereToFind.online.title")}
              </h3>
              <p className="mt-2 text-emerald-700">
                {t("whereToFind.online.description")}
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block font-semibold text-emerald-600 hover:text-emerald-700"
              >
                → Nous contacter
              </Link>
            </div>

            {/* Marchés */}
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-2xl">
                🛒
              </div>
              <h3 className="mt-4 text-xl font-semibold text-emerald-900">
                {t("whereToFind.markets.title")}
              </h3>
              <p className="mt-2 text-emerald-700">
                {t("whereToFind.markets.description")}
              </p>
              <p className="mt-4 text-sm font-medium text-emerald-800">
                {t("whereToFind.markets.list")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
