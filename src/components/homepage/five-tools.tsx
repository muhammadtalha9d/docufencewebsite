"use client";

import { Layers, X, Check, Lock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { trackEvent } from "@/lib/analytics";

const OLD_STACK = [
    { label: "PDF editor", issue: "Breaks layout & margins", eventName: "fivetools_oldstack_pdfeditor_press" },
    { label: "Word", issue: "Endless re-exports & version chaos", eventName: "fivetools_oldstack_word_press" },
    { label: "Email", issue: "Feedback lost in reply chains", eventName: "fivetools_oldstack_email_press" },
    { label: "eSign portal", issue: "Extra logins & per-envelope fees", eventName: "fivetools_oldstack_esign_press" },
    { label: "Cloud drive", issue: "Zero control over sent links", eventName: "fivetools_oldstack_clouddrive_press" },
];

const NEW_FEATURES = [
    { title: "Native PDF editing", body: "Fix text without layout breaks", eventName: "fivetools_newfeature_nativepdf_press" },
    { title: "Single live document", body: "No re-exports, no version chaos", eventName: "fivetools_newfeature_singlelivedoc_press" },
    { title: "In-app team notes", body: "Threaded comments on the document", eventName: "fivetools_newfeature_inappnotes_press" },
    { title: "Built-in signatures", body: "Sign in place, with no envelope fees", eventName: "fivetools_newfeature_builtinsig_press" },
    { title: "1-click revocation", body: "Kill access anytime, anywhere", eventName: "fivetools_newfeature_revocation_press" },
];

export function FiveTools() {
    return (
        <section className="border-t border-ink/10 bg-white text-ink">
            <div className="mx-auto max-w-[1180px] px-10 pb-[104px] pt-[100px]">
                <Reveal as="h2" className="mb-4 max-w-[12em] text-[58px] font-medium leading-[1.0] tracking-[-0.03em]">
                    Five tools for one document. <span className="text-mono-label">Now one.</span>
                </Reveal>
                <Reveal as="p" className="mb-14 max-w-[34em] text-lg leading-[1.6] text-ink-faint">
                    Stop paying for fragmented apps that scatter your team&apos;s files.
                </Reveal>

                <Reveal className="grid grid-cols-[minmax(0,1fr)_108px_minmax(0,1fr)] items-center">
                    <div className="border border-ink/[0.14] bg-[#FCFCFD]">
                        <div className="flex h-12 items-center gap-2.5 border-b border-ink/10 px-6">
                            <Layers className="h-4 w-4 text-[#8A3A4C]" />
                            <span className="text-sm">The fragmented stack</span>
                            <span className="ml-auto font-mono text-[10px] tracking-[0.12em] text-[#8A3A4C]">
                5 SUBSCRIPTIONS
              </span>
                        </div>
                        {OLD_STACK.map((row, i) => (
                            <div
                                key={row.label}
                                onClick={() => trackEvent(row.eventName)}
                                className={`grid h-24 grid-cols-[20px_minmax(0,130px)_minmax(0,1fr)] items-center gap-4 px-6 cursor-pointer hover:bg-red-50/30 transition-colors ${
                                    i < OLD_STACK.length - 1 ? "border-b border-ink/10" : ""
                                }`}
                            >
                                <X className="h-[17px] w-[17px] text-[#C2405A]" />
                                <span className="text-[17px]">{row.label}</span>
                                <span className="justify-self-start border border-[#C2405A]/[0.22] bg-[#C2405A]/[0.09] px-2.5 py-1.5 text-sm leading-[1.4] text-[#8A3A4C]">
                  ✕ {row.issue}
                </span>
                            </div>
                        ))}
                    </div>

                    <div className="h-[528px]">
                        <div className="relative mt-12 h-[480px]">
                            <svg
                                viewBox="0 0 100 480"
                                preserveAspectRatio="none"
                                className="absolute inset-0 h-full w-full"
                            >
                                <path d="M0 48 C34 48 30 240 56 240" fill="none" stroke="rgba(21,168,206,0.5)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                                <path d="M0 144 C34 144 30 240 56 240" fill="none" stroke="rgba(21,168,206,0.5)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                                <path d="M0 240 L56 240" fill="none" stroke="rgba(21,168,206,0.5)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                                <path d="M0 336 C34 336 30 240 56 240" fill="none" stroke="rgba(21,168,206,0.5)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                                <path d="M0 432 C34 432 30 240 56 240" fill="none" stroke="rgba(21,168,206,0.5)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                                <path d="M56 240 L92 240" fill="none" stroke="#15A8CE" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                                <polygon points="92,231 100,240 92,249" fill="#15A8CE" />
                            </svg>
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap border border-accent/40 bg-white px-2 py-1.5 text-center font-mono text-[9px] leading-[1.3] tracking-[0.14em] text-link">
                MERGE
                <br />
                INTO
              </span>
                        </div>
                    </div>

                    <div className="relative">
            <span
                className="pointer-events-none absolute left-[-6%] top-[4%] h-[92%] w-[112%] blur-[52px]"
                style={{
                    background:
                        "radial-gradient(circle at 50% 45%, rgba(21,168,206,0.30), rgba(21,168,206,0.08) 48%, rgba(21,168,206,0) 74%)",
                }}
            />
                        <div className="relative border border-[#2C4453] bg-ink shadow-[0_34px_68px_rgba(14,36,51,0.34),0_0_44px_rgba(21,168,206,0.18)]">
                            <div className="flex items-center gap-2.5 border-b border-mist/[0.14] px-6 py-[15px]">
                                <Lock className="h-4 w-4 text-[#46C3E0]" />
                                <span className="text-sm text-[#F2F7F9]">DocuFence workspace</span>
                                <span className="ml-auto flex items-center gap-1.5 border border-accent/40 bg-accent/[0.12] px-2.5 py-1.5 font-mono text-[9px] tracking-[0.12em] text-[#5FD3EE]">
                  <span
                      className="h-[5px] w-[5px] rounded-full bg-[#46C3E0]"
                      style={{ animation: "df-blink 1.8s steps(1,end) infinite" }}
                  />
                  LIVE
                </span>
                            </div>
                            <div className="px-6 pb-2 pt-1">
                                {NEW_FEATURES.map((f, i) => (
                                    <div
                                        key={f.title}
                                        onClick={() => trackEvent(f.eventName)}
                                        className={`grid grid-cols-[20px_minmax(0,1fr)] items-start gap-3.5 py-[17px] cursor-pointer hover:bg-white/5 transition-colors ${
                                            i < NEW_FEATURES.length - 1 ? "border-b border-mist/[0.12]" : ""
                                        }`}
                                    >
                                        <Check className="mt-0.5 h-[17px] w-[17px] text-[#46E0A8]" />
                                        <div className="min-w-0">
                                            <div className="mb-1 text-base text-[#F2F7F9]">{f.title}</div>
                                            <div className="text-sm leading-[1.45] text-mist-soft">{f.body}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-accent/[0.28] bg-accent/10 px-6 py-3.5 text-center font-mono text-[10px] tracking-[0.14em] text-[#5FD3EE]">
                                ONE VERSION. ALWAYS CURRENT. ALWAYS SECURE.
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}