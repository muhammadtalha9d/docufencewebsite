"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PostThumb } from "./post-thumb";
import { CATEGORIES } from "@/data/blog-posts";
import { trackEvent } from "@/lib/analytics";
import type { BlogPost } from "./types";

export function BlogDirectory({ posts }: { posts: BlogPost[] }) {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("All");

    const featured = posts[0];

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return posts.filter((post) => {
            if (category !== "All" && post.category !== category) return false;
            if (!q) return true;
            return (
                (post.title +
                    " " +
                    post.summary +
                    " " +
                    post.author +
                    " " +
                    post.category +
                    " " +
                    post.tags.join(" "))
                    .toLowerCase()
                    .includes(q)
            );
        });
    }, [posts, query, category]);

    const handleCategoryClick = (cat: string) => {
        setCategory(cat);
        trackEvent("blog_category_filter_press");
    };

    const handleClearQuery = () => {
        setQuery("");
        trackEvent("blog_search_clear_press");
    };

    return (
        <div>
            <section className="mx-auto max-w-[1180px] px-10 pb-10 pt-[76px]">
                <Reveal className="mb-7 flex items-center gap-[9px] font-mono text-[11px] tracking-[0.16em] text-ink">
                    <span className="inline-block h-1.5 w-1.5 bg-accent" />
                    RESOURCES / BLOG
                </Reveal>
                <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-end gap-14">
                    <Reveal as="h1" className="text-[56px] font-medium leading-[1.0] tracking-[-0.03em]">
                        Notes on moving documents <span className="text-mist-faint">without losing control of them.</span>
                    </Reveal>
                    <Reveal as="p" className="text-[17px] leading-[1.6] text-ink-soft">
                        Practical writing for the people who own the paperwork: HR, finance, operations,
                        security, and legal.
                    </Reveal>
                </div>
            </section>

            <section className="mx-auto max-w-[1180px] px-10 pb-11">
                <Reveal className="grid grid-cols-[minmax(0,300px)_minmax(0,1fr)] items-center gap-7 border-y border-ink/[0.14] py-5">
                    <div className="flex items-center gap-2.5 border border-ink/20 bg-white px-3.5 py-3">
                        <Search className="h-4 w-4 text-dropdown-sub" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search articles..."
                            className="min-w-0 flex-1 border-0 bg-transparent text-[15px] text-ink outline-none"
                        />
                        {query && (
                            <button
                                type="button"
                                onClick={handleClearQuery}
                                className="font-mono text-[11px] text-dropdown-sub cursor-pointer"
                            >
                                CLEAR
                            </button>
                        )}
                    </div>
                    <div className="flex flex-wrap justify-end gap-2">
                        {CATEGORIES.map((cat) => {
                            const active = category === cat;
                            return (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => handleCategoryClick(cat)}
                                    className={`px-4 py-2.5 text-sm cursor-pointer ${
                                        active ? "border border-ink bg-ink text-paper" : "border border-ink/20 bg-white text-ink"
                                    }`}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </Reveal>
            </section>

            {featured && (
                <section className="mx-auto max-w-[1180px] px-10 pb-16">
                    <Reveal
                        as={Link}
                        href={`/resources/blogs/${featured.slug}`}
                        onClick={() => trackEvent("blog_featured_post_press")}
                        className="grid grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] border border-ink/[0.13] bg-white text-ink shadow-[0_20px_44px_rgba(14,36,51,0.08)] hover:border-accent/60 cursor-pointer"
                    >
                        <div className="min-h-[360px] border-r border-ink/10">
                            <PostThumb src={featured.image} aspect="aspect-[4/3]" sizes="(max-width: 768px) 100vw, 600px" />
                        </div>
                        <div className="p-11">
                            <div className="mb-[22px] flex items-center gap-3">
                                <span className="bg-ink px-2.5 py-1.5 font-mono text-[10px] tracking-[0.14em] text-paper">
                                    FEATURED
                                </span>
                                <span className="border border-accent/50 px-2.5 py-[5px] font-mono text-[10px] tracking-[0.14em] text-link">
                                    {featured.category.toUpperCase()}
                                </span>
                            </div>
                            <div className="mb-4 text-[36px] font-medium leading-[1.1] tracking-[-0.025em]">
                                {featured.title}
                            </div>
                            <div className="mb-[30px] text-[17px] leading-[1.6] text-ink-soft">
                                {featured.summary}
                            </div>
                            <div className="flex items-center gap-3.5 border-t border-ink/[0.12] pt-[22px]">
                                <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#2C5468] text-[13px] text-mist">
                                    {featured.initials}
                                </span>
                                <span className="text-[15px]">{featured.author}</span>
                                <span className="ml-auto text-right font-mono text-[10px] tracking-[0.1em] text-dropdown-sub">
                                    {featured.readTime.toUpperCase()}
                                    <br />
                                    {featured.date.toUpperCase()}
                                </span>
                            </div>
                        </div>
                    </Reveal>
                </section>
            )}

            <section className="mx-auto max-w-[1180px] px-10 pb-24">
                <Reveal className="mb-[22px] flex items-baseline justify-between gap-6">
                    <h2 className="text-[26px] font-medium tracking-[-0.02em]">All articles</h2>
                    <span className="font-mono text-[11px] tracking-[0.12em] text-dropdown-sub">
                        {filtered.length === posts.length
                            ? `${posts.length} ARTICLES`
                            : `${filtered.length} OF ${posts.length} ARTICLES`}
                    </span>
                </Reveal>
                <div className="grid grid-cols-3 gap-4">
                    {filtered.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/resources/blogs/${post.slug}`}
                            onClick={() => trackEvent("blog_post_card_press")}
                            className="flex flex-col border border-ink/[0.13] bg-white text-ink hover:border-accent/60 cursor-pointer"
                        >
                            <PostThumb src={post.image} />
                            <div className="flex flex-1 flex-col gap-3 px-[22px] pb-6 pt-[22px]">
                                <span className="font-mono text-[10px] tracking-[0.14em] text-link">
                                    {post.category.toUpperCase()}
                                </span>
                                <span className="text-xl font-medium leading-[1.22] tracking-[-0.015em]">
                                    {post.title}
                                </span>
                                <span className="text-[15px] leading-[1.6] text-ink-soft">{post.summary}</span>
                                <span className="mt-0.5 flex flex-wrap gap-1.5">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="border border-ink/10 bg-[#F1F4F6] px-2.5 py-1.5 text-[11px] text-ink-soft"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </span>
                                <span className="mt-auto flex items-center gap-2.5 border-t border-ink/10 pt-4">
                                    <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#2C5468] text-[11px] text-mist">
                                        {post.initials}
                                    </span>
                                    <span className="min-w-0 text-sm">{post.author}</span>
                                    <span className="ml-auto whitespace-nowrap font-mono text-[10px] text-dropdown-sub">
                                        {post.readTime.toUpperCase()}
                                    </span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
                {filtered.length === 0 && (
                    <div className="border border-dashed border-ink/[0.22] px-10 py-14 text-center">
                        <div className="mb-2 text-lg">No articles match that search.</div>
                        <div className="text-[15px] text-ink-soft">
                            Try a different term, or reset the category filter to All.
                        </div>
                    </div>
                )}
            </section>

            <section className="bg-ink text-mist">
                <div className="mx-auto grid max-w-[1180px] grid-cols-[minmax(0,1fr)_auto] items-center gap-10 px-10 py-[78px]">
                    <div>
                        <div className="mb-[18px] font-mono text-[11px] tracking-[0.16em] text-[#46C3E0]">
                            GUIDES
                        </div>
                        <div className="mb-3 max-w-[22em] text-[34px] font-medium tracking-[-0.022em]">
                            Operational and compliance playbooks, written to be handed to a team.
                        </div>
                        <div className="text-base text-[#BACAD3]">
                            Longer-form walkthroughs for onboarding, audit prep, vendor reviews, and disclosure.
                        </div>
                    </div>
                    <Link
                        href="/resources/guides"
                        onClick={() => trackEvent("blog_browse_guides_press")}
                        className="whitespace-nowrap bg-accent px-[30px] py-[15px] text-base text-ink hover:bg-[#3FBEDD] cursor-pointer"
                    >
                        Browse the guides
                    </Link>
                </div>
            </section>
        </div>
    );
}