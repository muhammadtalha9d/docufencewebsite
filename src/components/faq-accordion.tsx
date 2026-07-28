"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export function FaqAccordion({
  items,
  className,
  defaultOpen = 0,
}: {
  items: FaqItem[];
  className?: string;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={className}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-ink/[0.16]">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-baseline justify-between gap-6 py-[22px] text-left font-sans text-lg text-ink"
            >
              {item.q}
              <span className="flex-shrink-0 font-mono text-base text-link">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="pb-6 pr-[60px]">
                <p className="max-w-[42em] text-[17px] leading-[1.65] text-ink-soft">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
