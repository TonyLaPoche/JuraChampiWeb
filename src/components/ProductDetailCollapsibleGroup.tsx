"use client";

import { useId, useState } from "react";

export type DetailBlock = { label: string; text: string };

type Props = {
  blocks: DetailBlock[];
};

export function ProductDetailCollapsibleGroup({ blocks }: Props) {
  const baseId = useId();

  return (
    <div className="mt-8 rounded-xl border border-jc-300/35 bg-jc-100/40 p-3 md:mt-6 md:p-4">
      <ul className="divide-y divide-jc-300/35">
        {blocks.map((block, index) => (
          <CollapsibleRow
            key={`${baseId}-${block.label}`}
            label={block.label}
            text={block.text}
            defaultOpen={index === 0}
          />
        ))}
      </ul>
    </div>
  );
}

function CollapsibleRow({
  label,
  text,
  defaultOpen = false,
}: {
  label: string;
  text: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const btnId = useId();

  return (
    <li className="list-none">
      <button
        id={btnId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={
          "flex w-full items-center justify-between gap-3 py-3 pl-1 pr-2 text-left " +
          "motion-safe:transition-colors motion-safe:duration-200 " +
          "rounded-lg hover:bg-jc-200/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-jc-600/40 md:py-3.5"
        }
      >
        <span className="text-base font-semibold tracking-wide text-jc-900">
          {label}
        </span>
        <span
          className={
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-jc-400/50 bg-jc-page/80 text-jc-700 " +
            "motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-reduce:transition-none " +
            (open ? "rotate-180" : "rotate-0")
          }
          aria-hidden
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      <div
        className={
          "grid overflow-hidden motion-safe:transition-[grid-template-rows] " +
          "motion-safe:duration-300 motion-safe:ease-out motion-reduce:transition-none " +
          (open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")
        }
      >
        <div id={panelId} role="region" aria-labelledby={btnId} className="min-h-0">
          <p className="px-1 pb-4 pt-0 text-base leading-relaxed text-jc-800 md:pb-5">
            {text}
          </p>
        </div>
      </div>
    </li>
  );
}
