"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { JURA_PAYSAGE_SRC } from "@/lib/assets";

/** Décalage du fond en px pour un effet parallaxe (0 = pas d’anim si reduce motion). */
const PARALLAX_FACTOR = 0.38;

type Props = {
  title: string;
  subtitle: string;
  cta: string;
};

export function HomeHeroParallax({ title, subtitle, cta }: Props) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const onScroll = () => {
      setOffsetY(window.scrollY * PARALLAX_FACTOR);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-[min(92vh,52rem)] overflow-hidden bg-jc-page">
      {/* Calque image : plus haut que la section pour éviter les bords au translate */}
      <div
        className="pointer-events-none absolute -left-[5%] -right-[5%] -top-[12%] bottom-[-12%] z-0"
        aria-hidden
      >
        <div
          className="relative h-full w-full will-change-transform"
          style={{
            transform: `translate3d(0, ${offsetY}px, 0)`,
          }}
        >
          <Image
            src={JURA_PAYSAGE_SRC}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Voile pour lisibilité + lien sur la palette */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-jc-page/75 via-jc-page/45 to-jc-page/85"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-jc-300/60 bg-jc-page/90 px-6 py-10 text-center shadow-lg shadow-jc-900/10 backdrop-blur-md sm:px-10 sm:py-12">
          <h1 className="text-4xl font-bold tracking-tight text-jc-900 sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-jc-700 sm:text-xl">
            {subtitle}
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-jc-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-jc-800 hover:shadow-xl"
            >
              {cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
