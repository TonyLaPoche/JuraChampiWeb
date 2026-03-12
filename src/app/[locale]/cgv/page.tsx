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
  const t = await getTranslations({ locale, namespace: "legal.cgv" });
  return {
    title: t("title"),
    robots: { index: true, follow: true },
  };
}

export default async function CGVPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("legal.cgv");

  return (
    <div className="bg-white">
      <section className="border-b border-emerald-100 bg-emerald-50/30 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-emerald-900">{t("title")}</h1>
          <p className="mt-4 text-emerald-800">{t("intro")}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-emerald max-w-none space-y-8 text-emerald-900">
            <div>
              <h2 className="text-xl font-semibold">Article 1 - Objet</h2>
              <p className="mt-2">
                Les présentes Conditions Générales de Vente (CGV) s&apos;appliquent à toutes les ventes de champignons frais effectuées par Jura Champi, que ce soit auprès de professionnels (restaurants, cantines, traiteurs) ou de particuliers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Article 2 - Produits</h2>
              <p className="mt-2">
                Jura Champi commercialise des champignons frais cultivés dans le Jura : shiitaké, pleurote, champignon de Paris, maitaké et autres variétés. Les produits sont cultivés conformément aux normes de qualité et d&apos;hygiène en vigueur pour la vente de denrées alimentaires.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Article 3 - Commandes</h2>
              <p className="mt-2">
                Les commandes peuvent être passées par téléphone, email ou via le formulaire de contact du site. Toute commande est soumise à disponibilité des produits. Un devis ou confirmation de commande sera établi pour les professionnels.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Article 4 - Prix et paiement</h2>
              <p className="mt-2">
                Les prix sont indiqués en euros TTC. Ils sont communiqués sur devis ou lors de la prise de commande. Les conditions de paiement (règlement à la livraison, virement, chèque) sont définies au cas par cas selon le type de client. Pour les professionnels : paiement à réception selon les conditions convenues.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Article 5 - Livraison</h2>
              <p className="mt-2">
                Les livraisons sont effectuées dans le périmètre du Jura et des départements limitrophes selon les zones définies. Les délais et conditions de livraison sont précisés lors de la commande. Les champignons sont livrés frais, dans des conditions garantissant leur conservation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Article 6 - Réclamations</h2>
              <p className="mt-2">
                Toute réclamation concernant un produit doit être signalée dès la réception ou à la livraison. Les réclamations sont à adresser par email à contact@jurachampi.fr. Jura Champi s&apos;engage à traiter toute réclamation dans les meilleurs délais.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Article 7 - Droit de rétractation</h2>
              <p className="mt-2">
                Conformément à l&apos;article L.221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les denrées alimentaires périssables. Les ventes de champignons frais sont donc exclues du droit de rétractation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Article 8 - Responsabilité</h2>
              <p className="mt-2">
                Jura Champi, producteur et vendeur de champignons frais, est soumis aux obligations réglementaires en matière de sécurité alimentaire. Les produits sont conformes à la réglementation en vigueur.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Article 9 - Droit applicable</h2>
              <p className="mt-2">
                Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Article 10 - Contact</h2>
              <p className="mt-2">
                Jura Champi - contact@jurachampi.fr - [Téléphone à compléter]
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
