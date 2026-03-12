import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: isFr
      ? "Contact | Commander des champignons frais - Jura Champi"
      : "Contact | Order fresh mushrooms - Jura Champi",
    description: isFr
      ? "Contactez Jura Champi pour commander des champignons frais. Livraison restaurants, cantines, particuliers dans le Jura. Téléphone, email, formulaire."
      : "Contact Jura Champi to order fresh mushrooms. Delivery to restaurants, canteens, individuals in the Jura. Phone, email, form.",
    keywords: isFr
      ? ["contact Jura Champi", "commander champignons Jura", "livraison champignons"]
      : ["contact Jura Champi", "order mushrooms Jura"],
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
