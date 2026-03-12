"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";

export function Header() {
  const t = useTranslations("common");
  const pathname = usePathname();
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/produits", label: t("products") },
    { href: "/contact", label: t("contact") },
  ];

  const otherLocale = locale === "fr" ? "en" : "fr";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-900/20 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-emerald-700">
            <Image
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80&h=80&fit=crop"
              alt="Jura Champi"
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <span className="text-xl font-bold text-emerald-900">Jura Champi</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                  ? "text-emerald-700"
                  : "text-emerald-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={pathname}
            locale={otherLocale}
            className="rounded-lg border border-emerald-700/30 px-3 py-1.5 text-sm font-medium text-emerald-800 transition-colors hover:bg-emerald-50"
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
            className="rounded-lg border border-emerald-700/30 px-2 py-1 text-xs font-medium text-emerald-800"
          >
            {locale === "fr" ? "EN" : "FR"}
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-emerald-900 hover:bg-emerald-50"
            aria-label="Menu"
          >
            <svg
              className="h-6 w-6"
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
        <div className="border-t border-emerald-900/10 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-left font-medium transition-colors ${
                  pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-emerald-900 hover:bg-emerald-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
