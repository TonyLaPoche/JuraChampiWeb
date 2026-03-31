import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
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
  const t = await getTranslations({ locale, namespace: "legal.mentions" });
  return {
    title: t("title"),
    robots: { index: true, follow: true },
  };
}

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("legal.mentions");

  return (
    <div className="bg-jc-page">
      <section className="border-b border-jc-200 bg-jc-100/40 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-jc-900">{t("title")}</h1>
          <p className="mt-4 text-jc-800">{t("intro")}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-neutral prose-headings:text-jc-900 max-w-none space-y-8 text-jc-900">
            <div>
              <h2 className="text-xl font-semibold">1. Éditeur du site</h2>
              <p className="mt-2">
                <strong>Raison sociale :</strong> Jura Champi<br />
                <strong>Forme juridique :</strong> [À compléter : SARL, SAS, auto-entrepreneur, etc.]<br />
                <strong>Siège social :</strong> 250, rue de l&apos;Etournelle Techno Parc de Collonges, 01550 Collonges<br />
                <strong>SIRET :</strong> [À compléter]<br />
                <strong>RCS :</strong> [À compléter : RCS Lons-le-Saunier, numéro]<br />
                <strong>Directeur de la publication :</strong> Laurence et Aurélien
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">2. Hébergement</h2>
              <p className="mt-2">
                <strong>Hébergeur :</strong> Vercel Inc.<br />
                <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
                <strong>Site :</strong> https://vercel.com
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">3. Propriété intellectuelle</h2>
              <p className="mt-2">
                L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo) est protégé par le droit d&apos;auteur. Toute reproduction, distribution ou utilisation non autorisée est interdite sans accord préalable de Jura Champi.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">4. Données personnelles</h2>
              <p className="mt-2">
                Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes. Pour plus d&apos;informations, consultez notre{" "}
                <Link href="/confidentialite" className="font-medium text-jc-600 underline hover:text-jc-700">
                  Politique de confidentialité
                </Link>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">5. Cookies</h2>
              <p className="mt-2">
                Ce site utilise des cookies techniques nécessaires à son fonctionnement. Pour en savoir plus, consultez notre politique de confidentialité.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">6. Contact</h2>
              <p className="mt-2">
                Pour toute question concernant ces mentions légales : contact@jurachampi.fr
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
