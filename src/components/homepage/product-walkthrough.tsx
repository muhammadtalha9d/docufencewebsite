"use client";

import { useState } from "react";
import {
    PenLine,
    MessageSquare,
    EyeOff,
    PenTool,
    Type,
    Check,
    Link as LinkIcon,
    ShieldCheck,
    History,
    Ban,
    CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { trackEvent } from "@/lib/analytics";

const STEPS = [
    { label: "Collaborate & Prep", title: "Collaborate and prep.", body: "Edit text directly on PDFs without breaking margins. Leave inline notes, tag teammates, and black out sensitive PII before files leave your team.", eventName: "walkthrough_tab_collaborate_press" },
    { label: "Execute", title: "Execute in the same tab.", body: "Turn approved drafts into legally binding agreements instantly. Collect signatures without envelope caps or third-party redirects.", eventName: "walkthrough_tab_execute_press" },
    { label: "Secure Hand-Off", title: "Hand off securely.", body: "Share confidential offer letters, financial audits, or vendor contracts via secure links with customized password, view-only, and print restrictions.", eventName: "walkthrough_tab_handoff_press" },
    { label: "Govern", title: "Govern after sending.", body: "Retain total control after sending. Pull back access in one click, auto-expire links, and review complete time-stamped activity logs.", eventName: "walkthrough_tab_govern_press" },
];

function WindowChrome({ fileName }: { fileName: string }) {
    return (
        <div className="flex items-center gap-3 bg-[#16303F] px-4 py-[11px]">
      <span className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-mist/[0.28]" />
        <span className="h-2 w-2 rounded-full bg-mist/[0.28]" />
        <span className="h-2 w-2 rounded-full bg-mist/[0.28]" />
      </span>
            <span className="border border-mist/[0.14] bg-mist/[0.08] px-3 py-1.5 font-mono text-[11px] text-mist">
        {fileName}
      </span>
            <span className="ml-auto flex items-center gap-1.5 border border-accent/60 px-2.5 py-[5px] font-mono text-[9px] tracking-[0.12em] text-accent">
        <span className="h-[5px] w-[5px] rounded-full bg-accent" style={{ animation: "df-blink 1.6s steps(1,end) infinite" }} />
        LIVE
      </span>
        </div>
    );
}

export function ProductWalkthrough() {
    const [step, setStep] = useState(0);

    const handleStepClick = (index: number, eventName: string) => {
        setStep(index);
        trackEvent(eventName);
    };

    return (
        <section id="product" className="border-y border-ink/[0.08] bg-[#EDF0F1]">
            <div className="mx-auto max-w-[1180px] px-10 pb-[100px] pt-24">
                <Reveal className="mb-[52px]">
                    <div className="mb-7 flex items-center gap-[9px] font-mono text-[11px] tracking-[0.16em] text-ink">
                        <span className="inline-block h-1.5 w-1.5 bg-accent" />
                        END-TO-END CONTROL
                    </div>
                    <h2 className="max-w-[15em] text-[56px] font-medium leading-[1.02] tracking-[-0.028em]">
                        From first draft to final signature, <span className="text-mono-label">under one secure roof.</span>
                    </h2>
                </Reveal>

                <Reveal className="grid grid-cols-4 border-t border-ink/[0.14]">
                    {STEPS.map((s, i) => {
                        const active = i === step;
                        return (
                            <button
                                key={s.label}
                                type="button"
                                onClick={() => handleStepClick(i, s.eventName)}
                                className="border-t-2 py-[18px] pr-5 text-left cursor-pointer"
                                style={{
                                    borderTopColor: active ? "#15A8CE" : "transparent",
                                    color: active ? "#0E2433" : "#8FA3AF",
                                }}
                            >
                                <div className="font-mono text-[10px] tracking-[0.14em] opacity-55">
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <div className="mt-[7px] text-[17px]">{s.label}</div>
                            </button>
                        );
                    })}
                </Reveal>

                <div className="mt-10 grid gap-[26px]">
                    <div>
                        <h3 className="mb-3.5 text-[30px] font-medium leading-[1.15]">{STEPS[step].title}</h3>
                        <p className="max-w-[46em] text-base leading-[1.65] text-ink-faint">{STEPS[step].body}</p>
                    </div>

                    <div className="flex min-h-[440px] flex-col overflow-hidden border border-ink/[0.12] bg-white shadow-[0_24px_50px_rgba(14,36,51,0.10)]">
                        {step === 0 && (
                            <>
                                <WindowChrome fileName="Engagement-Letter_v3.pdf" />
                                <div className="flex items-center gap-2 border-b border-ink/10 px-4 py-2.5">
                                    <button
                                        type="button"
                                        onClick={() => trackEvent("walkthrough_edit_text_press")}
                                        className="flex items-center gap-1.5 bg-ink px-3 py-2 text-xs text-paper cursor-pointer"
                                    >
                                        <PenLine className="h-[13px] w-[13px] text-accent" />
                                        Edit PDF Text
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => trackEvent("walkthrough_comment_press")}
                                        className="flex items-center gap-1.5 border border-ink/[0.16] px-2.5 py-1.5 text-xs text-ink-faint cursor-pointer"
                                    >
                                        <MessageSquare className="h-[13px] w-[13px] text-mono-label" />
                                        Comment
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => trackEvent("walkthrough_redact_press")}
                                        className="flex items-center gap-1.5 border border-ink/[0.16] px-2.5 py-1.5 text-xs text-ink-faint cursor-pointer"
                                    >
                                        <EyeOff className="h-[13px] w-[13px] text-mono-label" />
                                        Redact
                                    </button>
                                    <span className="ml-auto font-mono text-[10px] text-dropdown-sub">PAGE 2 / 9</span>
                                </div>
                                <div className="grid flex-1 grid-cols-[minmax(0,1fr)_minmax(150px,214px)] gap-4 bg-[#F1F4F5] px-[22px] py-5">
                                    <div className="relative min-w-0 border border-ink/10 bg-white px-6 py-[22px]">
                                        <div className="mb-3.5 text-[15px] font-medium">3. Fees and Scope</div>
                                        <div className="mb-2.5 h-[7px] w-[94%] bg-ink/10" />
                                        <div className="mb-[18px] h-[7px] w-[78%] bg-ink/10" />
                                        <div className="relative mb-5 border-l-[3px] border-[#7C5CFF] bg-[#7C5CFF]/[0.08] px-3.5 py-2.5">
                                            <span
                                                className="block overflow-hidden whitespace-nowrap text-[13px] leading-[1.6]"
                                                style={{ animation: "df-type 7s cubic-bezier(.4,.1,.3,1) infinite" }}
                                            >
                                                Fees are invoiced monthly against the agreed scope
                                            </span>
                                            <span
                                                className="absolute right-3 top-3 h-[15px] w-0.5 bg-[#7C5CFF]"
                                                style={{ animation: "df-blink 1s steps(1,end) infinite" }}
                                            />
                                            <span
                                                className="absolute -top-6 right-0 flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#7C5CFF] px-[11px] py-1.5 text-[11px] text-white"
                                                style={{ animation: "df-pop 7s ease-out infinite" }}
                                            >
                                                <span className="h-[5px] w-[5px] rounded-full bg-white" />
                                                David is typing…
                                            </span>
                                        </div>
                                        <div className="mb-[18px] h-[7px] w-[88%] bg-ink/10" />
                                        <div className="flex items-end gap-3.5">
                                            <div>
                                                <div className="mb-1.5 font-mono text-[9px] tracking-[0.12em] text-dropdown-sub">
                                                    ANNUAL FEE CAP
                                                </div>
                                                <div className="relative h-4 w-[148px]">
                                                    <span className="absolute inset-0 text-[13px] text-ink-soft">USD 480,000.00</span>
                                                    <span
                                                        className="absolute left-0 top-0 h-4 bg-ink"
                                                        style={{ animation: "df-redact 7s ease-out infinite" }}
                                                    />
                                                </div>
                                            </div>
                                            <span
                                                className="flex items-center gap-1.5 bg-[#178A56]/[0.12] px-2.5 py-1.5 text-[11px] text-[#12703F]"
                                                style={{ animation: "df-pop 7s ease-out 0.9s infinite" }}
                                            >
                                                <Check className="h-3 w-3" />
                                                Permanently Redacted
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="mt-12 self-start border border-ink/[0.14] bg-white shadow-[0_16px_34px_rgba(14,36,51,0.18)]"
                                        style={{ animation: "df-pop 7s ease-out 0.45s infinite" }}
                                    >
                                        <div className="flex items-center gap-2 px-[13px] pb-1.5 pt-3">
                                            <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#2C5468] text-[9px] text-mist">
                                                JS
                                            </span>
                                            <span className="text-xs">Jane (Partner)</span>
                                            <span className="ml-auto font-mono text-[9px] text-mono-label">NOW</span>
                                        </div>
                                        <p className="px-[13px] pb-2.5 text-xs leading-[1.5] text-ink-soft">
                                            Keep the fee cap redacted in the copy the client committee sees.
                                        </p>
                                        <div className="flex gap-2 px-[13px] pb-3.5">
                                            <button
                                                type="button"
                                                onClick={() => trackEvent("walkthrough_comment_reply_press")}
                                                className="flex-1 border border-ink/[0.16] py-1.5 text-center text-[11px] cursor-pointer"
                                            >
                                                Reply
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => trackEvent("walkthrough_comment_resolve_press")}
                                                className="flex-1 bg-accent py-2 text-center text-[11px] text-ink cursor-pointer"
                                            >
                                                Resolve
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {step === 1 && (
                            <>
                                <WindowChrome fileName="MSA_Final_Execution.pdf" />
                                <div className="flex items-center gap-2 border-b border-ink/10 px-4 py-2.5">
                                    <button
                                        type="button"
                                        onClick={() => trackEvent("walkthrough_request_signature_press")}
                                        className="flex items-center gap-1.5 bg-ink px-3 py-2 text-xs text-paper cursor-pointer"
                                    >
                                        <PenTool className="h-[13px] w-[13px] text-accent" />
                                        Request Signature
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => trackEvent("walkthrough_edit_text_step1_press")}
                                        className="flex items-center gap-1.5 border border-ink/[0.16] px-2.5 py-1.5 text-xs text-ink-faint cursor-pointer"
                                    >
                                        <Type className="h-[13px] w-[13px] text-mono-label" />
                                        Edit PDF Text
                                    </button>
                                    <span className="ml-auto font-mono text-[10px] text-dropdown-sub">PAGE 9 / 9</span>
                                </div>
                                <div className="grid flex-1 grid-cols-[minmax(0,1fr)_minmax(160px,208px)] gap-4 bg-[#F1F4F5] px-[22px] py-5">
                                    <div className="flex flex-col justify-between border border-ink/10 bg-white px-6 py-[22px]">
                                        <div>
                                            <div className="mb-3.5 text-[15px] font-medium">12. Execution</div>
                                            <div className="mb-2.5 h-[7px] w-[92%] bg-ink/10" />
                                            <div className="mb-2.5 h-[7px] w-[84%] bg-ink/10" />
                                            <div className="h-[7px] w-[66%] bg-ink/10" />
                                        </div>
                                        <div>
                                            <div className="mb-2 font-mono text-[9px] tracking-[0.12em] text-dropdown-sub">
                                                SIGNATURE — CLIENT
                                            </div>
                                            <div className="flex h-[66px] items-center overflow-hidden border-2 border-accent bg-accent/[0.07] px-4">
                                                <span
                                                    className="text-2xl text-ink"
                                                    style={{
                                                        fontFamily: "'Segoe Script', 'Brush Script MT', cursive",
                                                        animation: "df-sign 7s ease-out infinite",
                                                    }}
                                                >
                                                    A. Whitfield
                                                </span>
                                            </div>
                                            <div className="mt-2.5 flex flex-wrap items-center gap-2">
                                                <span
                                                    className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#178A56]/[0.12] px-[11px] py-1.5 text-[11px] text-[#12703F]"
                                                    style={{ animation: "df-pop 7s ease-out 1.1s infinite" }}
                                                >
                                                    <Check className="h-3 w-3" />
                                                    Legally Binding (ESIGN Compliant)
                                                </span>
                                                <span className="font-mono text-[9px] text-dropdown-sub">14:22 UTC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border border-ink/[0.12] bg-white p-4">
                                        <div className="mb-1 text-[13px] font-medium">Signing order</div>
                                        <div className="mb-3.5 font-mono text-[9px] tracking-[0.12em] text-dropdown-sub">
                                            2 OF 2 COMPLETE
                                        </div>
                                        <div className="grid gap-2.5">
                                            <div className="flex items-center gap-2.5 border border-ink/[0.12] px-3 py-2.5">
                                                <span className="font-mono text-[10px] text-dropdown-sub">1st</span>
                                                <span className="text-xs">Client</span>
                                                <CheckCircle2 className="ml-auto h-[15px] w-[15px] text-[#12703F]" />
                                            </div>
                                            <div className="flex items-center gap-2.5 border border-accent/50 bg-accent/[0.07] px-3 py-2.5">
                                                <span className="font-mono text-[10px] text-dropdown-sub">2nd</span>
                                                <span className="text-xs">Executive Partner</span>
                                                <span
                                                    className="ml-auto flex"
                                                    style={{ animation: "df-pop 7s ease-out 1.6s infinite" }}
                                                >
                                                    <CheckCircle2 className="h-[15px] w-[15px] text-[#12703F]" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-4 bg-ink py-2.5 text-center text-[11px] text-paper">Sealed and filed</div>
                                        <div className="mt-2 text-center font-mono text-[9px] text-dropdown-sub">
                                            NO ENVELOPE CAPS
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <WindowChrome fileName="Board-Pack_Q3.pdf" />
                                <div className="flex items-center gap-2 border-b border-ink/10 px-4 py-2.5">
                                    <button
                                        type="button"
                                        onClick={() => trackEvent("walkthrough_share_link_press")}
                                        className="flex items-center gap-1.5 bg-ink px-3 py-2 text-xs text-paper cursor-pointer"
                                    >
                                        <LinkIcon className="h-[13px] w-[13px] text-accent" />
                                        Share Secure Link
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => trackEvent("walkthrough_request_sig_step2_press")}
                                        className="flex items-center gap-1.5 border border-ink/[0.16] px-2.5 py-1.5 text-xs text-ink-faint cursor-pointer"
                                    >
                                        <PenTool className="h-[13px] w-[13px] text-mono-label" />
                                        Request Signature
                                    </button>
                                    <span className="ml-auto font-mono text-[10px] text-dropdown-sub">VIEW ONLY</span>
                                </div>
                                <div className="relative flex-1 bg-[#F1F4F5] px-[22px] py-5">
                                    <div className="relative h-full overflow-hidden border border-ink/10 bg-white px-6 py-[22px]">
                                        <div className="mb-3.5 text-[15px] font-medium">Appendix C — Consolidated Figures</div>
                                        <div className="mb-2.5 h-[7px] w-[92%] bg-ink/10" />
                                        <div className="mb-2.5 h-[7px] w-[76%] bg-ink/10" />
                                        <div className="mb-2.5 h-[7px] w-[88%] bg-ink/10" />
                                        <div className="mb-2.5 h-[7px] w-[64%] bg-ink/10" />
                                        <div className="h-[7px] w-[82%] bg-ink/10" />
                                        <span className="absolute inset-0 flex rotate-[-24deg] items-center justify-center whitespace-nowrap font-mono text-[22px] tracking-[0.18em] text-ink/[0.07]">
                                            CONFIDENTIAL — VIEW ONLY
                                        </span>
                                    </div>
                                    <span
                                        className="absolute inset-[20px_22px] bg-ink/[0.42]"
                                        style={{ animation: "df-scalein 7s ease-out infinite" }}
                                    />
                                    <div
                                        className="absolute left-1/2 top-1/2 max-h-[calc(100%-44px)] w-[min(320px,calc(100%-56px))] overflow-hidden border border-ink/[0.16] bg-white shadow-[0_22px_48px_rgba(14,36,51,0.28)]"
                                        style={{
                                            transform: "translate(-50%,-50%)",
                                            animation: "df-modalin 7s ease-out 0.2s infinite",
                                        }}
                                    >
                                        <div className="flex items-center gap-2.5 border-b border-ink/10 px-[18px] py-[15px]">
                                            <ShieldCheck className="h-4 w-4 text-link" />
                                            <span className="text-sm font-medium">Sharing guardrails</span>
                                        </div>
                                        <div className="px-[18px] pb-4 pt-1">
                                            <div className="flex items-center gap-3 border-b border-ink/10 py-3.5">
                                                <div className="grid gap-1">
                                                    <span className="text-[13px]">View only</span>
                                                    <span className="font-mono text-[9px] tracking-[0.1em] text-dropdown-sub">
                                                        DOWNLOAD, PRINT, COPY OFF
                                                    </span>
                                                </div>
                                                <span
                                                    className="ml-auto flex h-5 w-[38px] items-center rounded-full px-[3px]"
                                                    style={{ animation: "df-track 7s ease-out 0.5s infinite" }}
                                                >
                                                    <span
                                                        className="h-3.5 w-3.5 rounded-full bg-white"
                                                        style={{ animation: "df-knob 7s cubic-bezier(.3,.1,.2,1) 0.5s infinite" }}
                                                    />
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3 border-b border-ink/10 py-3.5">
                                                <div className="grid gap-1">
                                                    <span className="text-[13px]">Password protection</span>
                                                    <span className="font-mono text-[9px] tracking-[0.1em] text-dropdown-sub">
                                                        ••••••••
                                                    </span>
                                                </div>
                                                <span
                                                    className="ml-auto flex h-5 w-[38px] items-center rounded-full px-[3px]"
                                                    style={{ animation: "df-track 7s ease-out 1.1s infinite" }}
                                                >
                                                    <span
                                                        className="h-3.5 w-3.5 rounded-full bg-white"
                                                        style={{ animation: "df-knob 7s cubic-bezier(.3,.1,.2,1) 1.1s infinite" }}
                                                    />
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3 border-b border-ink/10 py-3.5">
                                                <div className="grid gap-1">
                                                    <span className="text-[13px]">Auto-expiration</span>
                                                    <span className="font-mono text-[9px] tracking-[0.1em] text-dropdown-sub">7 DAYS</span>
                                                </div>
                                                <span
                                                    className="ml-auto flex h-5 w-[38px] items-center rounded-full px-[3px]"
                                                    style={{ animation: "df-track 7s ease-out 1.7s infinite" }}
                                                >
                                                    <span
                                                        className="h-3.5 w-3.5 rounded-full bg-white"
                                                        style={{ animation: "df-knob 7s cubic-bezier(.3,.1,.2,1) 1.7s infinite" }}
                                                    />
                                                </span>
                                            </div>
                                            <div className="mt-4 flex items-center gap-2.5">
                                                <button
                                                    type="button"
                                                    onClick={() => trackEvent("walkthrough_create_link_press")}
                                                    className="flex-1 bg-ink py-[11px] text-center text-xs text-paper cursor-pointer"
                                                >
                                                    Create link
                                                </button>
                                                <span className="font-mono text-[9px] text-dropdown-sub">3 CONTROLS ON</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <WindowChrome fileName="Discovery-Bundle_03.pdf" />
                                <div className="flex items-center gap-2 border-b border-ink/10 px-4 py-2.5">
                                    <button
                                        type="button"
                                        onClick={() => trackEvent("walkthrough_governance_audit_press")}
                                        className="flex items-center gap-1.5 bg-ink px-3 py-2 text-xs text-paper cursor-pointer"
                                    >
                                        <History className="h-[13px] w-[13px] text-accent" />
                                        Governance &amp; Audit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => trackEvent("walkthrough_share_link_step3_press")}
                                        className="flex items-center gap-1.5 border border-ink/[0.16] px-2.5 py-1.5 text-xs text-ink-faint cursor-pointer"
                                    >
                                        <LinkIcon className="h-[13px] w-[13px] text-mono-label" />
                                        Share Secure Link
                                    </button>
                                    <span className="ml-auto font-mono text-[10px] text-dropdown-sub">OWNER: ADMIN</span>
                                </div>
                                <div className="grid flex-1 grid-cols-[minmax(0,1fr)_minmax(170px,240px)] gap-4 bg-[#F1F4F5] px-[22px] py-5">
                                    <div className="flex flex-col gap-3.5">
                                        <div className="flex flex-1 flex-col overflow-hidden border border-ink/10 bg-white">
                                            <div
                                                className="flex items-center gap-2 bg-[#B03030] px-3.5 py-2.5 font-mono text-[10px] tracking-[0.14em] text-white"
                                                style={{ animation: "df-pop 7s ease-out 1.9s infinite" }}
                                            >
                                                <Ban className="h-3 w-3" />
                                                STATUS: LINK TERMINATED
                                            </div>
                                            <div className="px-5 py-[18px]">
                                                <div className="mb-3 text-sm font-medium">Exhibit 4 — Correspondence</div>
                                                <div className="mb-2 h-[7px] w-[90%] bg-ink/10" />
                                                <div className="mb-2 h-[7px] w-[72%] bg-ink/10" />
                                                <div className="mb-2 h-[7px] w-[84%] bg-ink/10" />
                                                <div className="h-[7px] w-[58%] bg-ink/10" />
                                            </div>
                                        </div>
                                        <div className="grid gap-3 border border-ink/[0.12] bg-white px-[18px] py-4">
                                            <div className="grid gap-0.5">
                                                <span className="text-[13px] font-medium">Kill switch</span>
                                                <span className="text-[11px] leading-[1.45] text-dropdown-sub">
                                                    Ends access for every recipient at once.
                                                </span>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => trackEvent("walkthrough_revoke_link_press")}
                                                className="flex items-center justify-center gap-2.5 bg-[#B03030] px-3.5 py-2.5 text-center text-xs text-white cursor-pointer"
                                                style={{ animation: "df-kill 7s ease-out infinite, df-press 7s ease-out infinite" }}
                                            >
                                                <span className="h-2 w-2 rounded-full bg-white" />
                                                Revoke Link Access Instantly
                                            </button>
                                        </div>
                                    </div>
                                    <div className="min-w-0 border border-ink/[0.12] bg-white px-[18px] py-4">
                                        <div className="mb-0.5 text-[13px] font-medium">Audit trail</div>
                                        <div className="mb-2 font-mono text-[9px] tracking-[0.12em] text-dropdown-sub">
                                            TIME-STAMPED
                                        </div>
                                        <div
                                            className="grid grid-cols-[58px_minmax(0,1fr)] items-start gap-2 border-b border-ink/10 py-2.5"
                                            style={{ animation: "df-pop 7s ease-out 0.5s infinite" }}
                                        >
                                            <span className="pt-0.5 font-mono text-[9px] text-dropdown-sub">10:14 AM</span>
                                            <span className="text-xs leading-[1.45] text-ink">Link opened by client@firm.com</span>
                                        </div>
                                        <div
                                            className="grid grid-cols-[58px_minmax(0,1fr)] items-start gap-2 border-b border-ink/10 py-2.5"
                                            style={{ animation: "df-pop 7s ease-out 1.2s infinite" }}
                                        >
                                            <span className="pt-0.5 font-mono text-[9px] text-dropdown-sub">10:15 AM</span>
                                            <span className="text-xs leading-[1.45] text-ink">E-signature executed</span>
                                        </div>
                                        <div
                                            className="grid grid-cols-[58px_minmax(0,1fr)] items-start gap-2 border-b border-ink/10 py-2.5"
                                            style={{ animation: "df-pop 7s ease-out 1.9s infinite" }}
                                        >
                                            <span className="pt-0.5 font-mono text-[9px] text-dropdown-sub">10:30 AM</span>
                                            <span className="text-xs leading-[1.45] text-[#B03030]">
                                                Access revoked by Admin (Access Blocked)
                                            </span>
                                        </div>
                                        <div className="mt-3.5 font-mono text-[9px] text-dropdown-sub">EXPORTABLE AS CSV</div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}