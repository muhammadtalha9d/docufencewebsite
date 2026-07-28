import Link from "next/link";
import { Reveal } from "@/components/reveal";

export type LegalSection = {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
};

export function LegalDocPage({
  eyebrow,
  title,
  intro,
  lastUpdated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <div>
      <section className="mx-auto max-w-[1180px] px-10 pb-[60px] pt-[92px]">
        <Reveal className="mb-[30px] flex items-center gap-[9px] font-mono text-[11px] tracking-[0.16em] text-ink">
          <span className="inline-block h-1.5 w-1.5 bg-accent" />
          {eyebrow}
        </Reveal>
        <Reveal
          as="h1"
          className="mb-[26px] max-w-[14em] text-[64px] font-medium leading-[1.0] tracking-[-0.032em]"
        >
          {title}
        </Reveal>
        <Reveal as="p" className="mb-[26px] max-w-[34em] text-lg leading-[1.6] text-ink-faint">
          {intro}
        </Reveal>
        <Reveal className="font-mono text-[11px] tracking-[0.12em] text-mono-label">
          {lastUpdated}
        </Reveal>
      </section>

      <section className="border-y border-ink/10 bg-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[280px_minmax(0,1fr)] items-start gap-20 px-10 pb-20 pt-6">
          <Reveal className="sticky top-[92px] pt-11">
            <div className="mb-3.5 font-mono text-[10px] tracking-[0.14em] text-mono-label">
              CONTENTS
            </div>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex gap-3.5 border-b border-ink/[0.12] py-[13px] text-sm leading-[1.4] text-ink-faint hover:text-ink"
              >
                <span className="font-mono text-[11px] text-mono-label">{section.number}</span>
                {section.title}
              </a>
            ))}
          </Reveal>

          <div>
            {sections.map((section) => (
              <Reveal key={section.id} id={section.id} className="border-b border-ink/[0.12] py-11">
                <div className="grid grid-cols-[56px_1fr] items-start gap-6">
                  <span className="pt-[9px] font-mono text-[11px] tracking-[0.12em] text-mono-label">
                    {section.number}
                  </span>
                  <div>
                    <h2 className="mb-[18px] text-[30px] font-medium leading-[1.1] tracking-[-0.024em]">
                      {section.title}
                    </h2>
                    {section.paragraphs.map((paragraph, i) => (
                      <p
                        key={i}
                        className="mb-3.5 max-w-[40em] text-base leading-[1.7] text-ink-faint last:mb-0"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-mist">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-10 px-10 py-[84px]">
          <div>
            <div className="mb-3 text-[34px] font-medium tracking-[-0.024em]">
              Questions about this page?
            </div>
            <p className="max-w-[30em] text-[17px] leading-[1.55] text-mist-soft">
              Write to legal@docufence.com and a person will answer.
            </p>
          </div>
          <div className="flex flex-shrink-0 gap-3">
            <Link
              href="/security"
              className="whitespace-nowrap border border-mist/[0.28] px-6 py-[13px] text-[15px] text-mist hover:border-mist/60"
            >
              Security page
            </Link>
            <Link
              href="/contact"
              className="whitespace-nowrap bg-paper px-7 py-3.5 text-[15px] text-ink hover:bg-white"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
