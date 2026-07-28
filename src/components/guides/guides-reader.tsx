"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckSquare, Check, FileDown, ShieldCheck, Lock, Newspaper } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { GUIDES } from "@/data/guides";

export function GuidesReader() {
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState("chapter-1");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const guide = GUIDES[selected];

  useEffect(() => {
    const onScroll = () => {
      const ids = guide.chapters.map((_, i) => `chapter-${i + 1}`);
      const line = window.innerHeight * 0.32;
      let current = ids[0];
      ids.forEach((id) => {
        const el = sectionRefs.current[id];
        if (el && el.getBoundingClientRect().top <= line) current = id;
      });
      setActive(current);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, [guide]);

  function selectGuide(i: number) {
    setSelected(i);
    setActive("chapter-1");
  }

  return (
    <div>
      <section className="mx-auto max-w-[1180px] px-10 pb-11 pt-[76px]">
        <Reveal className="mb-7 flex items-center gap-[9px] font-mono text-[11px] tracking-[0.16em] text-ink">
          <span className="inline-block h-1.5 w-1.5 bg-accent" />
          RESOURCES / GUIDES
        </Reveal>
        <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-end gap-14">
          <Reveal as="h1" className="text-[56px] font-medium leading-[1.0] tracking-[-0.03em]">
            Playbooks you can hand to a team <span className="text-mist-faint">and run on Monday.</span>
          </Reveal>
          <Reveal as="p" className="text-[17px] leading-[1.6] text-ink-soft">
            Tactical implementation frameworks, chapter by chapter, with checklists you can lift
            straight into your own process docs.
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-10 pb-5">
        <Reveal className="mb-[18px] flex items-baseline justify-between gap-6 border-t border-ink/[0.14] pt-5">
          <h2 className="text-[26px] font-medium tracking-[-0.02em]">The library</h2>
          <span className="font-mono text-[11px] tracking-[0.12em] text-dropdown-sub">
            {GUIDES.length} PLAYBOOKS
          </span>
        </Reveal>
        <Reveal className="grid grid-cols-4 gap-4">
          {GUIDES.map((g, i) => {
            const isSelected = i === selected;
            return (
              <a key={g.title} href="#reader">
                <button
                  type="button"
                  onClick={() => selectGuide(i)}
                  className={`flex w-full flex-col border bg-white text-left text-ink hover:border-accent/70 ${
                    isSelected ? "border-accent" : "border-ink/[0.13]"
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-ink/10 bg-[#EEF2F4]">
                    <div className="absolute inset-0 flex items-center justify-center gap-2">
                      <span className="h-[9px] w-[9px] bg-[#C3D1D8]" />
                      <span className="text-sm text-[#A6B7C0]">DocuFence</span>
                    </div>
                    <Image
                      src={g.img}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 280px"
                      className="relative object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 px-5 py-5">
                    <span className="font-mono text-[10px] tracking-[0.14em] text-link">{g.cat}</span>
                    <span className="text-[19px] font-medium leading-[1.24] tracking-[-0.015em]">
                      {g.title}
                    </span>
                    <span className="text-[15px] leading-[1.55] text-ink-soft">{g.blurb}</span>
                    <span className="mt-auto flex items-center gap-2.5 border-t border-ink/10 pt-4 font-mono text-[10px] tracking-[0.1em] text-dropdown-sub">
                      <span>{g.meta}</span>
                      <span className={`ml-auto ${isSelected ? "text-link" : "text-dropdown-sub"}`}>
                        {isSelected ? "READING" : "OPEN"}
                      </span>
                    </span>
                  </div>
                </button>
              </a>
            );
          })}
        </Reveal>
      </section>

      <div
        id="reader"
        className="mx-auto grid max-w-[1180px] grid-cols-[minmax(150px,1.05fr)_minmax(0,2.6fr)_minmax(200px,1.35fr)] items-start gap-12 px-10 pb-24 pt-11"
      >
        <aside className="sticky top-[100px] min-w-0 self-start">
          <div className="border-t border-ink/[0.16] pt-[18px]">
            <div className="mb-3.5 font-mono text-[10px] tracking-[0.14em] text-dropdown-sub">
              CONTENTS
            </div>
            <nav className="grid gap-0.5">
              {guide.chapters.map((ch, i) => {
                const id = `chapter-${i + 1}`;
                const isActive = active === id;
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="grid grid-cols-[2px_minmax(0,1fr)] items-start gap-3 py-2.5"
                    style={{ color: isActive ? "#0F172A" : "#5A7180" }}
                  >
                    <span
                      className="h-full"
                      style={{ background: isActive ? "#15A8CE" : "rgba(14,36,51,0.14)" }}
                    />
                    <span className="grid min-w-0 gap-1">
                      <span className="font-mono text-[10px] tracking-[0.12em] text-dropdown-sub">
                        CHAPTER {i + 1}
                      </span>
                      <span className="text-[15px] leading-[1.35]">{ch.title}</span>
                    </span>
                  </a>
                );
              })}
            </nav>
          </div>
          <div className="mt-6 border-t border-ink/10 pt-[18px]">
            <div className="mb-3 font-mono text-[10px] tracking-[0.14em] text-dropdown-sub">
              OTHER PLAYBOOKS
            </div>
            <nav className="grid gap-2.5">
              {GUIDES.map((g, i) =>
                i === selected ? null : (
                  <a
                    key={g.title}
                    href="#reader"
                    onClick={() => selectGuide(i)}
                    className="text-sm leading-[1.4] text-ink-faint hover:text-link"
                  >
                    {g.title}
                  </a>
                )
              )}
            </nav>
          </div>
        </aside>

        <article className="min-w-0">
          <div className="mb-5 flex items-center gap-3">
            <span className="bg-ink px-2.5 py-1.5 font-mono text-[10px] tracking-[0.14em] text-paper">
              GUIDE
            </span>
            <span className="border border-accent/50 px-2.5 py-[5px] font-mono text-[10px] tracking-[0.14em] text-link">
              {guide.cat}
            </span>
          </div>
          <h2 className="mb-5 max-w-[22em] text-[44px] font-medium leading-[1.06] tracking-[-0.028em]">
            {guide.title}
          </h2>
          <p className="mb-[30px] max-w-[34em] text-xl leading-[1.65] text-ink-soft">{guide.intro}</p>

          <div className="relative mb-11 aspect-[16/7] overflow-hidden border border-ink/[0.12] bg-[#EEF2F4]">
            <div className="absolute inset-0 flex items-center justify-center gap-2.5">
              <span className="h-3 w-3 bg-[#C3D1D8]" />
              <span className="text-xl text-[#A6B7C0]">DocuFence</span>
            </div>
            <Image
              key={guide.img}
              src={guide.img}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              className="relative object-cover"
            />
          </div>

          {guide.chapters.map((ch, i) => (
            <section
              key={ch.title}
              id={`chapter-${i + 1}`}
              ref={(el) => {
                sectionRefs.current[`chapter-${i + 1}`] = el;
              }}
              className="mb-[52px] scroll-mt-[100px]"
            >
              <div className="mb-3.5 flex items-center gap-3">
                <span className="font-mono text-[11px] tracking-[0.14em] text-link">
                  CHAPTER {i + 1}
                </span>
                <span className="h-px flex-1 bg-ink/[0.14]" />
              </div>
              <h3 className="mb-[18px] max-w-[26em] text-[32px] font-medium leading-[1.15] tracking-[-0.022em]">
                {ch.title}
              </h3>
              {ch.paras.map((para, pi) => (
                <p key={pi} className="mb-[18px] max-w-[36em] text-lg leading-[1.75] text-ink-soft">
                  {para}
                </p>
              ))}
              <div className="mt-6 border border-ink/[0.13] bg-white px-[26px] py-6">
                <div className="mb-4 flex items-center gap-2.5">
                  <CheckSquare className="h-4 w-4 text-link" />
                  <span className="font-mono text-[10px] tracking-[0.14em] text-dropdown-sub">
                    {ch.listTitle}
                  </span>
                </div>
                <div className="grid gap-3">
                  {ch.items.map((item) => (
                    <div key={item} className="grid grid-cols-[18px_minmax(0,1fr)] items-start gap-3.5">
                      <Check className="mt-1 h-4 w-4 text-accent" />
                      <div className="text-[17px] leading-[1.55] text-ink">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

          <div className="flex flex-wrap items-center justify-between gap-8 bg-ink px-11 py-10 text-mist">
            <div className="min-w-0 flex-1 basis-80">
              <div className="mb-3 max-w-[22em] text-[30px] font-medium leading-[1.15] tracking-[-0.022em]">
                Want this running on your own documents?
              </div>
              <div className="text-[15px] leading-[1.55] text-[#BACAD3]">
                We will walk the playbook through your real workflow on a 30 minute call.
              </div>
            </div>
            <div className="grid flex-none justify-items-center gap-2.5">
              <Link
                href="/contact"
                className="whitespace-nowrap bg-accent px-8 py-4 text-base text-ink hover:bg-[#3FBEDD]"
              >
                Book a Call
              </Link>
              <span className="text-[13px] text-mist-soft">No slides, just your paperwork</span>
            </div>
          </div>
        </article>

        <aside className="sticky top-[100px] min-w-0 self-start">
          <div className="border border-[#2C4453] bg-ink text-mist shadow-[0_24px_48px_rgba(14,36,51,0.22)]">
            <div className="flex items-center gap-2.5 border-b border-mist/[0.14] px-5 py-[15px]">
              <FileDown className="h-4 w-4 text-[#46C3E0]" />
              <span className="font-mono text-[10px] tracking-[0.14em] text-[#5FD3EE]">
                TAKE IT WITH YOU
              </span>
            </div>
            <div className="p-5">
              <div className="mb-2 text-[19px] font-medium leading-[1.3]">{guide.title}</div>
              <div className="mb-[18px] text-sm leading-[1.55] text-[#A9BCC6]">
                {guide.meta} · Includes the full checklist set as a printable PDF.
              </div>
              <a
                href="#download"
                className="block bg-accent px-[18px] py-3.5 text-center text-[15px] text-ink hover:bg-[#3FBEDD]"
              >
                Download Full Guide (PDF)
              </a>
              <div className="mt-2.5 text-center text-xs text-mist-faint">No form. No email gate.</div>
            </div>
            <div className="grid gap-2.5 border-t border-mist/[0.12] px-5 py-4">
              <div className="flex items-center gap-2 text-[13px] text-[#BACAD3]">
                <ShieldCheck className="h-[15px] w-[15px] text-[#46E0A8]" />
                Zero AI data retention
              </div>
              <div className="flex items-center gap-2 text-[13px] text-[#BACAD3]">
                <Lock className="h-[15px] w-[15px] text-[#46E0A8]" />
                AES-256 at rest
              </div>
            </div>
          </div>
          <div className="mt-[22px] border border-ink/[0.13] bg-white p-5">
            <div className="mb-3 font-mono text-[10px] tracking-[0.14em] text-dropdown-sub">
              RELATED READING
            </div>
            <Link
              href="/resources/blogs"
              className="inline-flex items-center gap-2 text-sm text-ink hover:text-link"
            >
              <Newspaper className="h-[15px] w-[15px]" />
              Browse the blog
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
