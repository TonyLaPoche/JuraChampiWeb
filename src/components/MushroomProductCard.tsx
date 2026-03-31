"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  imageSrc: string;
  name: string;
  description: string;
  children?: ReactNode;
};

export function MushroomProductCard({
  imageSrc,
  name,
  description,
  children,
}: Props) {
  return (
    <article
      className={
        "group relative overflow-hidden rounded-2xl border border-jc-300/50 bg-jc-page p-6 shadow-md " +
        "motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out " +
        "hover:z-[1] hover:border-jc-400 hover:shadow-xl hover:shadow-jc-900/10 " +
        "motion-safe:hover:-translate-y-1 md:p-8"
      }
    >
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-10">
        <div
          className={
            "relative mx-auto aspect-square w-full max-w-[350px] shrink-0 overflow-hidden rounded-2xl " +
            "border border-jc-300/40 bg-jc-200/30 shadow-inner motion-safe:transition-all motion-safe:duration-300 " +
            "group-hover:border-jc-500/50 group-hover:shadow-lg md:mx-0 md:w-[350px] md:max-w-[350px]"
          }
        >
          <Image
            src={imageSrc}
            alt={name}
            width={350}
            height={350}
            className={
              "h-full w-full object-cover motion-safe:transition-transform " +
              "motion-safe:duration-500 motion-safe:ease-out group-hover:scale-[1.06]"
            }
            sizes="(max-width: 768px) 100vw, 350px"
          />
        </div>

        <div className="min-w-0 flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-jc-900 sm:text-3xl">
            {name}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-jc-800">{description}</p>
          {children}
        </div>
      </div>
    </article>
  );
}
