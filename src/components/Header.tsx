"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { LOGO_TRANSPARENT_SRC } from "@/lib/assets";

function isNavActive(pathname: string, href: string) {
  return (
    pathname === href || (href !== "/" && pathname.startsWith(href))
  );
}

export function Header() {
  const t = useTranslations("common");
  const pathname = usePathname();
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/nous-trouver", label: t("findUs") },
    { href: "/produits", label: t("products") },
    { href: "/contact", label: t("contact") },
  ];

  const otherLocale = locale === "fr" ? "en" : "fr";

  const langToggleBase =
    "rounded-lg border border-jc-600/35 font-semibold tracking-wide text-jc-800 " +
    "motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out " +
    "hover:border-jc-600 hover:bg-jc-100 hover:text-jc-900 hover:shadow-md hover:shadow-jc-600/10 " +
    "active:scale-[0.98] motion-safe:hover:-translate-y-0.5";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-jc-900/20 bg-jc-page/95 backdrop-blur supports-[backdrop-filter]:bg-jc-page/80 motion-safe:transition-shadow motion-safe:duration-300 hover:shadow-sm hover:shadow-jc-900/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-lg outline-none ring-jc-600/40 focus-visible:ring-2"
        >
          <Image
            src={LOGO_TRANSPARENT_SRC}
            alt="Jura Champi"
            width={140}
            height={40}
            className="h-9 w-auto object-contain motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out group-hover:scale-[1.04] group-active:scale-[0.98] sm:h-10"
            priority
          />
          <span className="text-xl font-bold text-jc-900 motion-safe:transition-colors motion-safe:duration-300 group-hover:text-jc-700">
            Jura Champi
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-2 md:flex md:gap-1">
          {navLinks.map((link) => {
            const active = isNavActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "relative px-3 py-2 text-sm font-medium outline-none",
                  "after:pointer-events-none after:absolute after:inset-x-3 after:bottom-0.5 after:h-0.5 after:rounded-full after:bg-jc-600",
                  "after:origin-left after:transition-transform after:duration-300 after:ease-out motion-safe:after:transition-transform",
                  active
                    ? "text-jc-700 after:scale-x-100"
                    : "text-jc-900 after:scale-x-0 hover:text-jc-600 motion-safe:hover:after:scale-x-100",
                  "focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-jc-600/40",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={pathname}
            locale={otherLocale}
            className={`ml-4 px-3 py-1.5 text-sm ${langToggleBase}`}
            aria-label={t("language")}
          >
            {locale === "fr" ? "EN" : "FR"}
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href={pathname}
            locale={otherLocale}
            className={`px-2 py-1 text-xs ${langToggleBase}`}
            aria-label={t("language")}
          >
            {locale === "fr" ? "EN" : "FR"}
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-jc-900 motion-safe:transition-transform motion-safe:duration-200 hover:bg-jc-100 hover:text-jc-700 active:scale-95"
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className={`h-6 w-6 motion-safe:transition-transform motion-safe:duration-300 ${mobileMenuOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="jc-header-mobile-drawer border-t border-jc-900/10 bg-jc-page/98 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => {
              const active = isNavActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    animationDelay: `${i * 45}ms`,
                  }}
                  className={[
                    "jc-header-mobile-link rounded-xl px-4 py-3 text-left text-base font-medium motion-safe:transition-all motion-safe:duration-200",
                    active
                      ? "bg-jc-200/60 text-jc-900 shadow-sm"
                      : "text-jc-900 hover:bg-jc-100 motion-safe:hover:translate-x-1 active:scale-[0.99]",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
