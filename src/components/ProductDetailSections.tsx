import { getTranslations } from "next-intl/server";
import { ProductDetailCollapsibleGroup } from "@/components/ProductDetailCollapsibleGroup";

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

  return <ProductDetailCollapsibleGroup blocks={blocks} />;
}
