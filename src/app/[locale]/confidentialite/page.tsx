import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
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
  const t = await getTranslations({ locale, namespace: "legal.privacy" });
  return {
    title: t("title"),
    robots: { index: true, follow: true },
  };
}

export default async function ConfidentialitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("legal.privacy");

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
              <h2 className="text-xl font-semibold">1. Responsable du traitement</h2>
              <p className="mt-2">
                Jura Champi, représenté par Laurence et Aurélien, est responsable du traitement des données personnelles collectées sur ce site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">2. Données collectées</h2>
              <p className="mt-2">
                Nous collectons les données que vous nous communiquez via le formulaire de contact : nom, adresse email, numéro de téléphone et objet du message.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">3. Finalités du traitement</h2>
              <p className="mt-2">
                Vos données sont utilisées exclusivement pour répondre à vos demandes de contact, de devis ou de commande. Elles ne sont jamais utilisées à des fins commerciales ou transmises à des tiers sans votre consentement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">4. Durée de conservation</h2>
              <p className="mt-2">
                Les données sont conservées pendant la durée nécessaire au traitement de votre demande, puis supprimées dans un délai de 3 ans maximum conformément aux obligations légales.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">5. Vos droits (RGPD)</h2>
              <p className="mt-2">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et de portabilité de vos données. Vous pouvez également vous opposer au traitement ou demander sa limitation. Pour exercer ces droits : contact@jurachampi.fr. Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">6. Cookies</h2>
              <p className="mt-2">
                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de traceur n&apos;est utilisé. Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient ne plus être disponibles.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">7. Sécurité</h2>
              <p className="mt-2">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">8. Contact</h2>
              <p className="mt-2">
                Pour toute question : contact@jurachampi.fr
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
