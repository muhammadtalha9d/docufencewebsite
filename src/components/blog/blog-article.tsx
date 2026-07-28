"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, MinusCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PostThumb } from "./post-thumb";
import type { BlogBlock, BlogPost } from "./types";

function Block({ block }: { block: BlogBlock }) {
  if (block.type === "p") {
    return (
      <p className="mb-[18px] max-w-[36em] text-lg leading-[1.75] text-ink-soft last:mb-0">
        {block.text}
      </p>
    );
  }
  if (block.type === "quote") {
    return (
      <blockquote className="mb-[18px] max-w-[34em] border-l-[3px] border-accent bg-accent/[0.07] px-6 py-5 text-[19px] leading-[1.6]">
        {block.text}
      </blockquote>
    );
  }
  if (block.type === "table") {
    return (
      <div className="mb-[18px] border border-ink/[0.13]">
        <div
          className="grid gap-4 border-b border-ink/[0.12] px-5 py-3.5 font-mono text-[10px] tracking-[0.12em] text-dropdown-sub"
          style={{ gridTemplateColumns: `1.4fr repeat(${block.headers.length - 1}, 1fr)` }}
        >
          {block.headers.map((h) => (
            <span key={h}>{h}</span>
          ))}
        </div>
        {block.rows.map((row, i) => (
          <div
            key={row[0]}
            className={`grid gap-4 px-5 py-[15px] text-base ${
              i < block.rows.length - 1 ? "border-b border-ink/10" : ""
            }`}
            style={{ gridTemplateColumns: `1.4fr repeat(${block.headers.length - 1}, 1fr)` }}
          >
            {row.map((cell, ci) => (
              <span key={ci} className={ci === 0 ? "" : "text-ink-soft"}>
                {cell}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  }
  // list
  return (
    <div className="mb-6 grid gap-2.5">
      {block.items.map((item, i) => (
        <div
          key={item.title ?? item.text}
          className={
            block.ordered
              ? "grid grid-cols-[30px_minmax(0,1fr)] items-start gap-3.5 border-b border-ink/[0.12] py-4 last:border-b-0"
              : "grid grid-cols-[22px_minmax(0,1fr)] items-start gap-3.5 border border-ink/[0.13] bg-white px-5 py-[18px]"
          }
        >
          {block.ordered ? (
            <span className="pt-1 font-mono text-[11px] text-link">
              {String(i + 1).padStart(2, "0")}
            </span>
          ) : (
            <MinusCircle className="mt-0.5 h-[18px] w-[18px] text-link" />
          )}
          <div className="text-[17px] leading-[1.55] text-ink-soft">
            {item.title && <strong className="font-medium text-ink">{item.title} </strong>}
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export function BlogArticle({ post, related }: { post: BlogPost; related: BlogPost[] }) {
  const [active, setActive] = useState(post.sections[0]?.id ?? "");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.32;
      let current = post.sections[0]?.id ?? "";
      post.sections.forEach((section) => {
        const el = sectionRefs.current[section.id];
        if (el && el.getBoundingClientRect().top <= line) current = section.id;
      });
      setActive(current);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, [post.sections]);

  return (
    <div>
      <div className="mx-auto flex max-w-[1180px] items-center gap-2.5 px-10 pt-[34px] font-mono text-[10px] tracking-[0.12em] text-dropdown-sub">
        <Link href="/resources/blogs" className="text-dropdown-sub">
          RESOURCES
        </Link>
        <span>/</span>
        <Link href="/resources/blogs" className="text-dropdown-sub">
          BLOG
        </Link>
        <span>/</span>
        <span className="text-link">{post.category.toUpperCase()}</span>
      </div>

      <div className="mx-auto grid max-w-[1180px] grid-cols-[minmax(0,1fr)_minmax(240px,300px)] items-start gap-16 px-10 pb-24 pt-[30px]">
        <article className="min-w-0">
          <Reveal
            as="h1"
            className="mb-[26px] max-w-[22em] text-[50px] font-medium leading-[1.04] tracking-[-0.03em]"
          >
            {post.title}
          </Reveal>
          <Reveal as="p" className="mb-[30px] max-w-[34em] text-xl leading-[1.6] text-ink-soft">
            {post.dek}
          </Reveal>

          <Reveal className="mb-[34px] flex flex-wrap items-center gap-4 border-y border-ink/[0.14] py-[22px]">
            <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#2C5468] text-sm text-mist">
              {post.initials}
            </span>
            <span className="text-base">{post.author}</span>
            <span className="ml-auto flex items-center gap-[18px] font-mono text-[10px] tracking-[0.12em] text-dropdown-sub">
              <span>{post.date.toUpperCase()}</span>
              <span className="border border-accent/50 px-2.5 py-[5px] text-link">
                {post.category.toUpperCase()}
              </span>
              <span>{post.readTime.toUpperCase()}</span>
            </span>
          </Reveal>

          <Reveal className="mb-11 border border-ink/[0.12]">
            <PostThumb src={post.image} aspect="aspect-[16/8]" sizes="(max-width: 1024px) 100vw, 800px" />
          </Reveal>

          {post.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => {
                sectionRefs.current[section.id] = el;
              }}
              className="mb-10 scroll-mt-[100px]"
            >
              <h2 className="mb-4 text-[32px] font-medium leading-[1.15] tracking-[-0.022em]">
                {section.heading}
              </h2>
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </section>
          ))}

          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-9 bg-ink px-[46px] py-11 text-mist">
            <div>
              <div className="mb-3 max-w-[22em] text-[30px] font-medium leading-[1.15] tracking-[-0.022em]">
                Ready to simplify your team&apos;s document workflows? Try DocuFence.
              </div>
              <div className="text-[15px] text-[#BACAD3]">
                Unlimited signatures, one file, and a record you can hand to an auditor.
              </div>
            </div>
            <div className="grid justify-items-center gap-2.5">
              <Link
                href="/contact"
                className="whitespace-nowrap bg-accent px-8 py-4 text-base text-ink hover:bg-[#3FBEDD]"
              >
                Book a Call
              </Link>
              <span className="text-[13px] text-mist-soft">30 minutes, on your document</span>
            </div>
          </div>
        </article>

        <aside className="sticky top-[100px] min-w-0 self-start">
          <div className="border-t border-ink/[0.16] pt-[18px]">
            <div className="mb-3.5 font-mono text-[10px] tracking-[0.14em] text-dropdown-sub">
              ON THIS PAGE
            </div>
            <nav className="grid gap-0.5">
              {post.sections.map((section) => {
                const isActive = active === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="grid grid-cols-[2px_minmax(0,1fr)] items-start gap-3 py-2.5 text-sm leading-[1.45]"
                    style={{ color: isActive ? "#0F172A" : "#5A7180" }}
                  >
                    <span
                      className="h-full"
                      style={{ background: isActive ? "#15A8CE" : "rgba(14,36,51,0.14)" }}
                    />
                    <span>{section.heading}</span>
                  </a>
                );
              })}
            </nav>
          </div>
          <div className="mt-[26px] border border-ink/[0.13] bg-white p-5">
            <div className="mb-3 font-mono text-[10px] tracking-[0.14em] text-dropdown-sub">TAGS</div>
            <div className="mb-[18px] flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-ink/10 bg-[#F1F4F6] px-2.5 py-1.5 text-xs text-ink-soft"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/resources/blogs"
              className="inline-flex items-center gap-2 text-sm text-ink hover:text-link"
            >
              <ArrowLeft className="h-[15px] w-[15px]" />
              All articles
            </Link>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="border-y border-ink/10 bg-white">
          <div className="mx-auto max-w-[1180px] px-10 pb-[84px] pt-[76px]">
            <Reveal as="h2" className="mb-7 text-[34px] font-medium tracking-[-0.022em]">
              Similar articles you might like
            </Reveal>
            <Reveal className="grid grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/resources/blogs/${r.slug}`}
                  className="flex flex-col border border-ink/[0.13] bg-[#FCFCFD] text-ink hover:border-accent/60"
                >
                  <PostThumb src={r.image} />
                  <div className="flex flex-1 flex-col gap-2.5 px-[22px] pb-[22px] pt-5">
                    <span className="font-mono text-[10px] tracking-[0.14em] text-link">
                      {r.category.toUpperCase()}
                    </span>
                    <span className="text-[19px] font-medium leading-[1.24] tracking-[-0.015em]">
                      {r.title}
                    </span>
                    <span className="text-[15px] leading-[1.6] text-ink-soft">{r.summary}</span>
                    <span className="mt-auto flex items-center gap-2.5 border-t border-ink/10 pt-4">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2C5468] text-[10px] text-mist">
                        {r.initials}
                      </span>
                      <span className="text-[13px]">{r.author}</span>
                      <span className="ml-auto whitespace-nowrap font-mono text-[10px] text-dropdown-sub">
                        {r.readTime.toUpperCase()}
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      )}
    </div>
  );
}
