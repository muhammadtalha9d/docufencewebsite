"use client";

import { useRef } from "react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { trackEvent } from "@/lib/analytics";

const SLIDES = [
    {
        href: "/for-legal",
        label: "LEGAL",
        eventName: "audiences_card_legal_press",
        bg: "#132B3B",
        image:
            "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?auto=format&fit=crop&w=1400&q=70",
        title: "Client files that cannot leave the perimeter.",
        body: "Engagement letters, NDAs, and matter files. Redline, sign, and share without a copy escaping into an email thread.",
    },
    {
        href: "/for-hr",
        label: "HR",
        eventName: "audiences_card_hr_press",
        bg: "#16303F",
        image:
            "https://images.unsplash.com/photo-1758691737246-95bf8f09a997?auto=format&fit=crop&w=1400&q=70",
        title: "Personal data about real people.",
        body: "Offer letters, contracts, and employee records. Send them for signature without exposing them to the wider company.",
    },
    {
        href: "/for-finance",
        label: "FINANCE",
        eventName: "audiences_card_finance_press",
        bg: "#122734",
        image:
            "https://images.unsplash.com/photo-1767424412548-1a1ac7f4b9bc?auto=format&fit=crop&w=1400&q=70",
        title: "Numbers that need a paper trail.",
        body: "Statements, audits, and approvals. Every open and every signature is time-stamped and yours to review.",
    },
    {
        href: "/for-operations",
        label: "OPERATIONS",
        eventName: "audiences_card_operations_press",
        bg: "#15323F",
        image:
            "https://images.unsplash.com/photo-1761735486549-7a6a04e67061?auto=format&fit=crop&w=1400&q=70",
        title: "Documents moving through a lot of hands.",
        body: "Vendor forms, policies, and renewals. One current version, routed and revocable, instead of five attachments.",
    },
    {
        href: "/for-procurement",
        label: "PROCUREMENT",
        eventName: "audiences_card_procurement_press",
        bg: "#14303E",
        image:
            "https://images.unsplash.com/photo-1775163024488-e88e4a71179f?auto=format&fit=crop&w=1400&q=70",
        title: "Agreements with people outside the company.",
        body: "Vendor contracts, SOWs, and NDAs. Send one link per supplier, watch who opened it, and pull it back when the deal changes.",
    },
];

export function AudiencesFilmstrip() {
    const stripRef = useRef<HTMLDivElement>(null);

    function scroll(dir: number) {
        stripRef.current?.scrollBy({ left: dir * 636, behavior: "smooth" });
        trackEvent(dir === 1 ? "audiences_slide_next_press" : "audiences_slide_prev_press");
    }

    return (
        <section id="audiences" className="overflow-hidden bg-ink text-mist">
            <div className="mx-auto flex max-w-[1180px] items-end justify-between gap-10 px-10 pb-12 pt-24">
                <Reveal className="max-w-[40em]">
                    <h2 className="mb-[18px] text-[48px] font-medium leading-[1.04] tracking-[-0.028em]">
                        Built for high-stakes workflows across every department.
                    </h2>
                    <p className="max-w-[34em] text-lg leading-[1.55] text-mist-soft">
                        Whether you are managing confidential court filings, candidate offer letters, or
                        financial audit packages, DocuFence gives your team one secure perimeter to edit,
                        review, sign, and share.
                    </p>
                </Reveal>
                <div className="flex flex-shrink-0 gap-2.5">
                    <button
                        type="button"
                        aria-label="Previous"
                        onClick={() => scroll(-1)}
                        className="flex h-11 w-11 items-center justify-center border border-mist/[0.28] text-mist hover:border-accent hover:text-accent cursor-pointer"
                    >
                        ←
                    </button>
                    <button
                        type="button"
                        aria-label="Next"
                        onClick={() => scroll(1)}
                        className="flex h-11 w-11 items-center justify-center border border-mist/[0.28] text-mist hover:border-accent hover:text-accent cursor-pointer"
                    >
                        →
                    </button>
                </div>
            </div>
            <div
                ref={stripRef}
                className="flex gap-4 overflow-x-auto px-10 pb-24 [scroll-snap-type:x_mandatory] [scrollbar-width:none]"
            >
                {SLIDES.map((slide) => (
                    <Link
                        key={slide.href}
                        href={slide.href}
                        onClick={() => trackEvent(slide.eventName)}
                        className="relative block h-[520px] flex-none w-[620px] overflow-hidden border border-mist/10 text-mist hover:border-accent/60 cursor-pointer"
                        style={{
                            backgroundColor: slide.bg,
                            backgroundImage: `url('${slide.image}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundBlendMode: "luminosity",
                            scrollSnapAlign: "center",
                        }}
                    >
                        <span className="absolute left-[30px] top-[26px] z-[2] rounded-full bg-white px-3.5 py-2 font-mono text-[10px] tracking-[0.16em] text-ink">
                            {slide.label}
                        </span>
                        <span
                            className="absolute inset-x-0 bottom-0 h-[62%]"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(6,18,26,0) 0%, rgba(6,18,26,0.88) 62%)",
                            }}
                        />
                        <span className="absolute bottom-[30px] left-[30px] right-[30px] block">
                            <span className="mb-3 block max-w-[13em] text-[34px] leading-[1.1] tracking-[-0.02em]">
                                {slide.title}
                            </span>
                            <span className="block max-w-[30em] text-[15px] leading-[1.55] text-mist-soft">
                                {slide.body}
                            </span>
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}