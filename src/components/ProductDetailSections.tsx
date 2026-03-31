import { getTranslations } from "next-intl/server";

const DETAIL_KEYS = [
  "origin",
  "taste",
  "cuisine",
  "benefits",
  "properties",
] as const;

type ProductKey =
  | "pleuroteBlanche"
  | "pleurotePanicaut"
  | "blackPearl"
  | "shiitake"
  | "criniereLion";

export async function ProductDetailSections({
  translationKey,
}: {
  translationKey: ProductKey;
}) {
  const t = await getTranslations("products");
  const blocks: { label: string; text: string }[] = [];

  for (const key of DETAIL_KEYS) {
    const text = t(`${translationKey}.${key}`);
    if (text?.trim()) {
      blocks.push({ label: t(`labels.${key}`), text });
    }
  }

  if (blocks.length === 0) return null;

  return (
    <div className="mt-8 space-y-6 border-t border-jc-300/50 pt-8">
      {blocks.map(({ label, text }) => (
        <div key={label}>
          <h3 className="text-lg font-semibold text-jc-900">{label}</h3>
          <p className="mt-2 text-base leading-relaxed text-jc-800">{text}</p>
        </div>
      ))}
    </div>
  );
}
