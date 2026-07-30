"use client";

import type { Metadata } from "next";
import Link from "next/link";
import {
    PenLine,
    Signature as SignatureIcon,
    Link2Off,
    Type,
    Image as ImageIcon,
    Highlighter,
    Square,
    MessageSquare,
    AtSign,
    LayoutGrid,
    MessagesSquare,
    EyeOff,
    Infinity as InfinityIcon,
    MousePointerClick,
    Scale,
    PenTool,
    Timer,
    ShieldCheck,
    Ban,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { trackEvent } from "@/lib/analytics";

export default function ProductPage() {
    return (
        <div>
            <section className="mx-auto max-w-[1180px] px-10 pb-[84px] pt-[108px]">
                <Reveal className="mb-[34px] flex items-center gap-[9px] font-mono text-[11px] tracking-[0.16em] text-ink">
                    <span className="inline-block h-1.5 w-1.5 bg-accent" />
                    CAPABILITIES OVERVIEW
                </Reveal>
                <Reveal
                    as="h1"
                    className="mb-[30px] max-w-[14em] text-[82px] font-medium leading-[0.98] tracking-[-0.032em]"
                >
                    Every document tool your team needs.{" "}
                    <span className="text-mono-label">In one tab.</span>
                </Reveal>
                <Reveal className="grid grid-cols-[1fr_auto] items-end gap-14">
                    <p className="max-w-[32em] text-[19px] leading-[1.55] text-ink-faint">
                        Replace your PDF editor, e-signature app, redaction software, and
                        secure file transfer links with one unified workspace.
                    </p>
                    <a
                        href="#capabilities"
                        onClick={() => trackEvent("product_hero_explore_press")}
                        className="whitespace-nowrap bg-ink px-8 py-4 text-[15px] text-paper hover:bg-black cursor-pointer"
                    >
                        Explore the Platform
                    </a>
                </Reveal>
            </section>

            <section id="capabilities" className="mx-auto max-w-[1180px] px-10 pb-24">
                <Reveal className="grid grid-cols-3 gap-px border-y border-ink/[0.14] bg-ink/[0.14]">
                    <a
                        href="#editing"
                        onClick={() => trackEvent("product_capabilities_tab_editing_press")}
                        className="flex items-center gap-4 bg-paper py-[26px] pr-7 text-ink hover:text-link cursor-pointer"
                    >
                        <PenLine className="h-5 w-5 text-accent" />
                        <span className="text-[17px]">Editing, notes, and redaction</span>
                    </a>
                    <a
                        href="#signatures"
                        onClick={() => trackEvent("product_capabilities_tab_signatures_press")}
                        className="flex items-center gap-4 bg-paper px-7 py-[26px] text-ink hover:text-link cursor-pointer"
                    >
                        <SignatureIcon className="h-5 w-5 text-accent" />
                        <span className="text-[17px]">Unlimited e-signatures</span>
                    </a>
                    <a
                        href="#sharing"
                        onClick={() => trackEvent("product_capabilities_tab_sharing_press")}
                        className="flex items-center gap-4 bg-paper py-[26px] pl-7 text-ink hover:text-link cursor-pointer"
                    >
                        <Link2Off className="h-5 w-5 text-accent" />
                        <span className="text-[17px]">Sharing and revocation</span>
                    </a>
                </Reveal>
            </section>

            <section id="editing" className="border-y border-ink/10 bg-white">
                <div className="mx-auto max-w-[1180px] px-10 pb-[100px] pt-24">
                    <Reveal className="mb-14 grid grid-cols-2 items-start gap-[72px]">
                        <div>
                            <div className="mb-[22px] font-mono text-[10px] tracking-[0.16em] text-mono-label">
                                01 / NATIVE PDF EDITING AND TEAM NOTES
                            </div>
                            <h2 className="text-[52px] font-medium leading-[1.02] tracking-[-0.028em]">
                                Edit and annotate{" "}
                                <span className="text-mono-label">without breaking formatting.</span>
                            </h2>
                        </div>
                        <p className="max-w-[30em] pt-2 text-lg leading-[1.6] text-ink-faint">
                            Stop converting PDFs back to Word just to fix typos. Edit text,
                            update numbers, swap pages, and re-order layouts directly inside
                            your browser.
                        </p>
                    </Reveal>

                    <Reveal className="grid grid-cols-[1.15fr_1fr] items-stretch gap-12">
                        <div className="border border-ink/[0.12] bg-white shadow-[0_24px_50px_rgba(14,36,51,0.10)]">
                            <div className="flex h-11 items-center gap-[18px] border-b border-ink/10 px-4">
                                <Type className="h-4 w-4 text-ink-soft" />
                                <ImageIcon className="h-4 w-4 text-ink-soft" />
                                <Highlighter className="h-4 w-4 text-ink-soft" />
                                <Square className="h-4 w-4 text-accent" />
                                <MessageSquare className="h-4 w-4 text-ink-soft" />
                                <span className="ml-auto font-mono text-[10px] text-mono-label">
                                    Vendor-Agreement.pdf
                                </span>
                            </div>
                            <div className="grid min-h-[400px] grid-cols-[1fr_190px]">
                                <div
                                    className="grid content-start gap-[11px] p-7"
                                    style={{
                                        background:
                                            "repeating-linear-gradient(135deg, #FCFDFD 0 8px, #F1F4F5 8px 16px)",
                                    }}
                                >
                                    <div className="h-[15px] w-[54%] bg-ink/[0.22]" />
                                    <div className="h-2 w-full bg-ink/10" />
                                    <div className="h-2 w-[92%] bg-ink/10" />
                                    <div className="h-2 w-[62%] bg-accent/65" />
                                    <div className="h-2 w-[86%] bg-ink/10" />
                                    <div className="h-[14px] w-[34%] bg-ink" />
                                    <div className="h-2 w-[78%] bg-ink/10" />
                                    <div className="h-[14px] w-[22%] bg-ink" />
                                    <div className="mt-[18px] font-mono text-[9px] tracking-[0.12em] text-[#9DB0BB]">
                                        EDITOR SCREEN DROPS HERE
                                    </div>
                                </div>
                                <div className="grid content-start gap-3.5 border-l border-ink/10 p-4">
                                    <div className="font-mono text-[9px] tracking-[0.12em] text-mono-label">
                                        NOTES
                                    </div>
                                    <div className="grid gap-1.5 border border-ink/[0.12] p-2.5">
                                        <div className="h-1.5 w-[46%] bg-ink/[0.24]" />
                                        <div className="h-[5px] w-[92%] bg-ink/10" />
                                        <div className="h-[5px] w-[68%] bg-ink/10" />
                                    </div>
                                    <div className="grid gap-1.5 border border-accent/60 p-2.5">
                                        <div className="h-1.5 w-[52%] bg-accent/85" />
                                        <div className="h-[5px] w-[84%] bg-ink/10" />
                                        <div className="h-[5px] w-[60%] bg-ink/10" />
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-ink-faint">
                                        <AtSign className="h-3.5 w-3.5 text-accent" />
                                        Tag a teammate
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid content-start">
                            <div className="grid grid-cols-[24px_1fr] gap-4 border-b border-ink/[0.14] py-[22px]">
                                <LayoutGrid className="mt-[3px] h-5 w-5 text-accent" />
                                <div>
                                    <div className="mb-1.5 text-lg">Layout protection</div>
                                    <p className="text-[15px] leading-[1.6] text-ink-faint">
                                        Original fonts, margins, and tables are preserved automatically.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-[24px_1fr] gap-4 border-b border-ink/[0.14] py-[22px]">
                                <MessagesSquare className="mt-[3px] h-5 w-5 text-accent" />
                                <div>
                                    <div className="mb-1.5 text-lg">Inline team notes</div>
                                    <p className="text-[15px] leading-[1.6] text-ink-faint">
                                        Tag colleagues, leave threaded feedback, and resolve
                                        comments in real time.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-[24px_1fr] gap-4 py-[22px]">
                                <EyeOff className="mt-[3px] h-5 w-5 text-accent" />
                                <div>
                                    <div className="mb-1.5 text-lg">Permanent redaction</div>
                                    <p className="text-[15px] leading-[1.6] text-ink-faint">
                                        Black out national ID numbers, bank details, and salary
                                        figures for good, not just visually.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section id="signatures" className="bg-ink text-mist">
                <div className="mx-auto max-w-[1180px] px-10 pb-[104px] pt-[100px]">
                    <Reveal className="mb-14 grid grid-cols-2 items-start gap-[72px]">
                        <div>
                            <div className="mb-[22px] font-mono text-[10px] tracking-[0.16em] text-accent">
                                02 / UNLIMITED BUILT-IN E-SIGNATURES
                            </div>
                            <h2 className="text-[52px] font-medium leading-[1.02] tracking-[-0.028em]">
                                Execute agreements{" "}
                                <span className="text-mist-soft">without the e-signature tax.</span>
                            </h2>
                        </div>
                        <p className="max-w-[30em] pt-2 text-lg leading-[1.6] text-mist-soft">
                            Sending documents for signature shouldn&apos;t come with
                            unpredictable envelope fees. DocuFence includes unlimited
                            digital signatures in every plan.
                        </p>
                    </Reveal>

                    <Reveal className="grid grid-cols-[1fr_1.15fr] items-stretch gap-12">
                        <div className="grid content-start">
                            <div className="grid grid-cols-[24px_1fr] gap-4 border-b border-mist/[0.14] py-[22px]">
                                <InfinityIcon className="mt-[3px] h-5 w-5 text-accent" />
                                <div>
                                    <div className="mb-1.5 text-lg">Zero envelope caps</div>
                                    <p className="text-[15px] leading-[1.6] text-mist-soft">
                                        Send as many offer letters and contracts as you need. No
                                        per-envelope meter.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-[24px_1fr] gap-4 border-b border-mist/[0.14] py-[22px]">
                                <MousePointerClick className="mt-[3px] h-5 w-5 text-accent" />
                                <div>
                                    <div className="mb-1.5 text-lg">In-tab transition</div>
                                    <p className="text-[15px] leading-[1.6] text-mist-soft">
                                        Move from document review to signature request in one
                                        click. No re-upload, no redirect.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-[24px_1fr] gap-4 py-[22px]">
                                <Scale className="mt-[3px] h-5 w-5 text-accent" />
                                <div>
                                    <div className="mb-1.5 text-lg">
                                        Built to the signature standards
                                    </div>
                                    <p className="text-[15px] leading-[1.6] text-mist-soft">
                                        Signatures are captured to meet ESIGN and eIDAS
                                        requirements, with a time-stamped record of every step.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border border-mist/[0.18] bg-[#16303F]">
                            <div className="flex items-center justify-between border-b border-mist/[0.12] px-5 py-4">
                                <span className="text-sm">Signature request</span>
                                <span className="font-mono text-[10px] text-mist-soft">
                                    Offer-Letter.pdf
                                </span>
                            </div>
                            <div className="grid gap-[18px] px-5 py-6">
                                <div className="flex items-center justify-between gap-4 border border-dashed border-accent/70 px-[18px] py-[22px]">
                                    <span className="font-mono text-[10px] tracking-[0.14em] text-accent">
                                        SIGNATURE FIELD
                                    </span>
                                    <PenTool className="h-[18px] w-[18px] text-accent" />
                                </div>
                                <div className="grid gap-2.5">
                                    <div className="flex items-center justify-between border-b border-mist/10 py-3">
                                        <span className="text-[15px] text-[#CBD8DF]">Recipient 1</span>
                                        <span className="font-mono text-[11px] text-accent">SIGNED</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-mist/10 py-3">
                                        <span className="text-[15px] text-[#CBD8DF]">Recipient 2</span>
                                        <span className="font-mono text-[11px] text-mist-soft">VIEWED</span>
                                    </div>
                                    <div className="flex items-center justify-between py-3">
                                        <span className="text-[15px] text-[#CBD8DF]">Recipient 3</span>
                                        <span className="font-mono text-[11px] text-mist-soft">SENT</span>
                                    </div>
                                </div>
                                <div className="font-mono text-[9px] tracking-[0.12em] text-mist/35">
                                    SIGNATURE FLOW RECORDING DROPS HERE
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section id="sharing" className="bg-paper">
                <div className="mx-auto max-w-[1180px] px-10 pb-[100px] pt-[100px]">
                    <Reveal className="mb-14 grid grid-cols-2 items-start gap-[72px]">
                        <div>
                            <div className="mb-[22px] font-mono text-[10px] tracking-[0.16em] text-mono-label">
                                03 / GRANULAR SHARING AND INSTANT REVOCATION
                            </div>
                            <h2 className="text-[52px] font-medium leading-[1.02] tracking-[-0.028em]">
                                Complete control over files{" "}
                                <span className="text-mono-label">after they leave your screen.</span>
                            </h2>
                        </div>
                        <p className="max-w-[30em] pt-2 text-lg leading-[1.6] text-ink-faint">
                            Emailed attachments are impossible to track or pull back.
                            DocuFence links give you remote control over every shared
                            document.
                        </p>
                    </Reveal>

                    <Reveal className="grid grid-cols-[1.15fr_1fr] items-stretch gap-12">
                        <div className="border border-ink/[0.12] bg-white shadow-[0_24px_50px_rgba(14,36,51,0.10)]">
                            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
                                <span className="text-sm">Link settings</span>
                                <span className="font-mono text-[10px] text-mono-label">
                                    Board-Pack.pdf
                                </span>
                            </div>
                            <div className="px-5 pb-[22px] pt-2">
                                <div className="flex items-center justify-between border-b border-ink/10 py-4">
                                    <span className="text-[15px] text-ink-faint">Can view</span>
                                    <span className="box-border flex h-5 w-[38px] items-center justify-end bg-accent px-[3px]">
                                        <span className="block h-3.5 w-3.5 bg-white" />
                                    </span>
                                </div>
                                <div className="flex items-center justify-between border-b border-ink/10 py-4">
                                    <span className="text-[15px] text-ink-faint">Can download</span>
                                    <span className="box-border flex h-5 w-[38px] items-center border border-ink/25 px-[3px]">
                                        <span className="block h-3 w-3 bg-ink/25" />
                                    </span>
                                </div>
                                <div className="flex items-center justify-between border-b border-ink/10 py-4">
                                    <span className="text-[15px] text-ink-faint">Can forward</span>
                                    <span className="box-border flex h-5 w-[38px] items-center border border-ink/25 px-[3px]">
                                        <span className="block h-3 w-3 bg-ink/25" />
                                    </span>
                                </div>
                                <div className="flex items-center justify-between border-b border-ink/10 py-4">
                                    <span className="text-[15px] text-ink-faint">Link expires</span>
                                    <span className="font-mono text-xs text-link">IN 24 HOURS</span>
                                </div>
                                <div className="flex items-center justify-between pb-1 pt-[18px]">
                                    <span className="text-[15px] text-ink-faint">Access</span>
                                    <button
                                        type="button"
                                        onClick={() => trackEvent("product_demo_revoke_press")}
                                        className="flex items-center gap-2 border border-accent/70 px-3.5 py-1.5 text-[13px] text-link cursor-pointer"
                                    >
                                        <Ban className="h-3.5 w-3.5" />
                                        Revoke now
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid content-start">
                            <div className="grid grid-cols-[24px_1fr] gap-4 border-b border-ink/[0.14] py-[22px]">
                                <Link2Off className="mt-[3px] h-5 w-5 text-accent" />
                                <div>
                                    <div className="mb-1.5 text-lg">One-click revocation</div>
                                    <p className="text-[15px] leading-[1.6] text-ink-faint">
                                        Sent it to the wrong person? Kill access instantly, even
                                        after the link has been opened.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-[24px_1fr] gap-4 border-b border-ink/[0.14] py-[22px]">
                                <Timer className="mt-[3px] h-5 w-5 text-accent" />
                                <div>
                                    <div className="mb-1.5 text-lg">Expiration timers</div>
                                    <p className="text-[15px] leading-[1.6] text-ink-faint">
                                        Set links to expire after 24 hours, 7 days, or the moment
                                        signing completes.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-[24px_1fr] gap-4 py-[22px]">
                                <ShieldCheck className="mt-[3px] h-5 w-5 text-accent" />
                                <div>
                                    <div className="mb-1.5 text-lg">Permission guardrails</div>
                                    <p className="text-[15px] leading-[1.6] text-ink-faint">
                                        Turn off downloading, editing, and forwarding for external
                                        viewers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="bg-ink text-mist">
                <div className="mx-auto max-w-[1180px] px-10 py-28 text-center">
                    <Reveal
                        as="h2"
                        className="mx-auto mb-[38px] max-w-[13em] text-[60px] font-medium leading-[1.0] tracking-[-0.03em]"
                    >
                        Four tools, one subscription, one perimeter.
                    </Reveal>
                    <Reveal className="flex justify-center gap-3.5">
                        <Link
                            href="https://dev-app.docufence.com/signup"
                            onClick={() => trackEvent("product_bottom_signup_press")}
                            className="bg-paper px-8 py-[15px] text-[15px] text-ink hover:bg-white cursor-pointer"
                        >
                            Sign Up
                        </Link>
                        <Link
                            href="https://calendar.app.google/WbdzvM2oayoF9G6X7"
                            onClick={() => trackEvent("product_bottom_book_call_press")}
                            className="border border-mist/[0.28] px-7 py-3.5 text-[15px] text-mist hover:border-mist/60 cursor-pointer"
                        >
                            Book a Call
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}