"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const tCommon = useTranslations("common");

  return (
    <footer className="border-t border-jc-900/10 bg-jc-900 text-jc-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link href="/" className="text-lg font-bold text-jc-50">
            Jura Champi
          </Link>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/"
              className="text-sm transition-colors hover:text-jc-300"
            >
              {tCommon("home")}
            </Link>
            <Link
              href="/nous-trouver"
              className="text-sm transition-colors hover:text-jc-300"
            >
              {tCommon("findUs")}
            </Link>
            <Link
              href="/produits"
              className="text-sm transition-colors hover:text-jc-300"
            >
              {tCommon("products")}
            </Link>
            <Link
              href="/contact"
              className="text-sm transition-colors hover:text-jc-300"
            >
              {tCommon("contact")}
            </Link>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center gap-4 border-t border-jc-800/40 pt-6 text-center text-sm text-jc-300">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/mentions-legales" className="hover:text-jc-200">
              {t("legal")}
            </Link>
            <Link href="/confidentialite" className="hover:text-jc-200">
              {t("privacy")}
            </Link>
            <Link href="/cgv" className="hover:text-jc-200">
              {t("terms")}
            </Link>
          </div>
          <p>© {new Date().getFullYear()} Jura Champi. {t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}
