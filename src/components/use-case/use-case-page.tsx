"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Eye,
  FileText,
  Highlighter,
  Link as LinkIcon,
  Link2Off,
  PenTool,
  Type,
  MessageSquare,
  EyeOff,
  Share2,
  GitBranch,
  MailX,
  CloudOff,
  Copy,
  Printer,
  Inbox,
  Send,
  Receipt,
  ShieldOff,
  History,
  Smartphone,
  Layers,
  Lock,
  Timer,
  Infinity as InfinityIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { FaqAccordion } from "@/components/faq-accordion";
import type { IconName, UseCaseData } from "./types";

const STEP_ICONS = {
  "pen-line": Type,
  "eye-off": EyeOff,
  "pen-tool": PenTool,
  "share-2": Share2,
  "message-square": MessageSquare,
} as const;

const CARD_ICONS: Record<IconName, typeof GitBranch> = {
  "git-branch": GitBranch,
  "mail-x": MailX,
  "cloud-off": CloudOff,
  copy: Copy,
  printer: Printer,
  inbox: Inbox,
  send: Send,
  receipt: Receipt,
  "share-2": Share2,
  "eye-off": EyeOff,
  "shield-off": ShieldOff,
  history: History,
  "link-2-off": Link2Off,
  smartphone: Smartphone,
  layers: Layers,
  lock: Lock,
  timer: Timer,
  infinity: InfinityIcon,
};

export function UseCasePage({ data }: { data: UseCaseData }) {
  const [tab, setTab] = useState(0);
  const [docIndex, setDocIndex] = useState(2 % data.docList.length);

  useEffect(() => {
    const id = setInterval(() => {
      setDocIndex((i) => (i + 1) % data.docList.length);
    }, 2200);
    return () => clearInterval(id);
  }, [data.docList.length]);

  const activeStep = data.steps[tab];

  return (
    <div>
      <section className="mx-auto max-w-[1180px] px-10 pb-6 pt-[76px]">
        <div className="grid grid-cols-[1fr_1.05fr] items-center gap-16">
          <div>
            <Reveal className="mb-[30px] flex items-center gap-[9px] font-mono text-[11px] tracking-[0.16em] text-ink">
              <span className="inline-block h-1.5 w-1.5 bg-accent" />
              {data.segmentTag}
            </Reveal>
            <Reveal
              as="h1"
              className="mb-[26px] max-w-[13em] text-[60px] font-medium leading-[0.99] tracking-[-0.032em]"
            >
              {data.headline[0]} <span className="text-mist-faint">{data.headline[1]}</span>
            </Reveal>
            <div className="grid gap-7">
              <Reveal as="p" className="max-w-[30em] text-lg leading-[1.55] text-ink-soft">
                {data.intro}
              </Reveal>
              <Reveal className="grid justify-items-start gap-3">
                <div className="flex items-center gap-3">
                  <Link
                    href="https://calendar.app.google/WbdzvM2oayoF9G6X7"
                    className="whitespace-nowrap bg-ink px-[34px] py-[17px] text-base text-paper hover:bg-black"
                  >
                    Book a Call
                  </Link>
                  <Link
                    href="https://dev-app.docufence.com/signup"
                    className="whitespace-nowrap border border-ink/[0.22] px-[26px] py-4 text-base text-ink hover:border-ink/55"
                  >
                    Sign Up
                  </Link>
                </div>
                <div className="text-sm text-dropdown-sub">
                  A 30-minute walkthrough on one of your own documents. No credit card, no
                  procurement review.
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal className="border border-ink/[0.12] bg-white shadow-[0_24px_60px_rgba(14,36,51,0.14)]">
            <div className="flex items-center gap-3 bg-[#16303F] px-4 py-[11px]">
              <span className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-mist/[0.28]" />
                <span className="h-2 w-2 rounded-full bg-mist/[0.28]" />
                <span className="h-2 w-2 rounded-full bg-mist/[0.28]" />
              </span>
              <span className="border border-mist/[0.14] bg-mist/[0.08] px-3 py-1.5 font-mono text-[11px] text-mist">
                {data.heroMock.fileName}
              </span>
              <span className="ml-auto flex items-center gap-1.5 border border-accent/60 px-2.5 py-[5px] font-mono text-[9px] tracking-[0.12em] text-accent">
                <span className="h-[5px] w-[5px] rounded-full bg-accent" />
                LIVE
              </span>
            </div>
            <div className="flex items-center gap-2 border-b border-ink/10 px-4 py-2.5">
              <span className="flex items-center gap-1.5 border border-ink/[0.16] px-2.5 py-1.5 text-xs">
                <Type className="h-[13px] w-[13px] text-accent" />
                {data.heroMock.toolbarLabels[0]}
              </span>
              <span className="flex items-center gap-1.5 border border-ink/[0.16] px-2.5 py-1.5 text-xs">
                <Highlighter className="h-[13px] w-[13px] text-accent" />
                {data.heroMock.toolbarLabels[1]}
              </span>
              <span className="flex items-center gap-1.5 border border-ink/[0.16] px-2.5 py-1.5 text-xs">
                <PenTool className="h-[13px] w-[13px] text-accent" />
                Sign
              </span>
              <span className="ml-auto flex items-center gap-1.5 text-[11px] text-ink-faint">
                <CheckCircle2 className="h-3 w-3 text-accent" />
                Saved
              </span>
            </div>
            <div className="relative bg-[#F1F4F5] px-6 pb-[34px] pt-6">
              <div className="border border-ink/10 bg-white px-7 pb-[34px] pt-[26px]">
                <div className="mb-3 text-base font-medium">{data.heroMock.clauseLabel}</div>
                <div className="mb-[18px] border-l-[3px] border-accent bg-accent/[0.07] px-[13px] py-2.5 text-[13px] leading-[1.6]">
                  {data.heroMock.clauseText}
                </div>
                <div className="mb-2.5 h-[7px] w-[92%] bg-ink/10" />
                <div className="mb-2.5 h-[7px] w-[74%] bg-ink/10" />
                <div className="h-[7px] w-[84%] bg-ink/10" />
              </div>
              <div className="absolute bottom-3 right-3.5 w-[232px] border border-ink/[0.14] bg-white shadow-[0_14px_30px_rgba(14,36,51,0.16)]">
                <div className="flex items-center gap-2.5 px-3.5 pb-1.5 pt-2.5">
                  <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#2C5468] text-[9px] text-mist">
                    {data.heroMock.reviewerInitials}
                  </span>
                  <span className="text-xs">{data.heroMock.reviewerRole}</span>
                  <span className="ml-auto font-mono text-[9px] text-mono-label">2 MIN</span>
                </div>
                <p className="px-3.5 pb-2.5 text-xs leading-[1.5] text-ink-faint">
                  {data.heroMock.note}
                </p>
                <div className="flex gap-2 px-3.5 pb-3.5">
                  <span className="flex-1 border border-ink/[0.16] py-1.5 text-center text-[11px]">
                    Reply
                  </span>
                  <span className="flex-1 bg-accent py-2 text-center text-[11px] text-ink">
                    Resolve
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-10 pb-[72px] pt-[34px]">
        <Reveal className="flex flex-wrap items-center gap-x-10 gap-y-3.5 border-y border-ink/[0.14] py-[22px]">
          <span className="flex items-center gap-2.5 text-[15px] text-ink">
            <Link2Off className="h-[17px] w-[17px] text-link" />
            Zero AI model training
          </span>
          <span className="flex items-center gap-2.5 text-[15px] text-ink">
            <Check className="h-[17px] w-[17px] text-link" />
            AES-256 at rest, TLS 1.3 in transit
          </span>
          <span className="flex items-center gap-2.5 text-[15px] text-ink">
            <Clock className="h-[17px] w-[17px] text-link" />
            Time-stamped access trail
          </span>
          <span className="flex items-center gap-2.5 text-[15px] text-ink">
            <Link2Off className="h-[17px] w-[17px] text-link" />
            Revoke after opening
          </span>
        </Reveal>
      </section>

      <section className="border-y border-ink/10 bg-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[340px_1fr] items-start gap-16 px-10 pb-20 pt-[76px]">
          <Reveal>
            <h2 className="mb-[18px] text-[38px] font-medium leading-[1.06] tracking-[-0.028em]">
              {data.docsHeading}
            </h2>
            <p className="mb-[26px] text-[17px] leading-[1.6] text-ink-soft">
              {data.docsSubcopy}
            </p>
            <Link
              href="https://dev-app.docufence.com/signup"
              className="inline-flex items-center gap-2.5 border border-ink/[0.22] px-[22px] py-3.5 text-[15px] text-ink hover:border-ink/55"
            >
              Explore Platform
              <ArrowRight className="h-[15px] w-[15px]" />
            </Link>
          </Reveal>
          <Reveal className="grid grid-cols-2 gap-2.5">
            {data.docList.map((doc, i) => (
              <div
                key={doc}
                className={`grid grid-cols-[20px_1fr] items-start gap-3.5 border border-ink/[0.14] px-[22px] py-5 ${
                  i === docIndex ? "bg-accent/[0.09]" : "bg-white"
                }`}
              >
                <FileText className="mt-0.5 h-[18px] w-[18px] text-link" />
                <span className="text-[17px] leading-[1.45] text-ink">{doc}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F1F4F6]">
        <div className="mx-auto max-w-[1180px] px-10 pb-20 pt-[76px]">
          <Reveal className="mb-10 grid grid-cols-2 items-end gap-16">
            <h2 className="text-[44px] font-medium leading-[1.05] tracking-[-0.028em]">
              {data.painHeading}
            </h2>
            <p className="max-w-[32em] text-[17px] leading-[1.6] text-ink-soft">
              {data.painSubcopy}
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-2 gap-4">
            {data.painPoints.map((point, i) => {
              const Icon = CARD_ICONS[point.icon];
              return (
                <div
                  key={point.title}
                  className="border border-ink/[0.13] bg-white px-[30px] pb-8 pt-[30px] hover:border-accent/55"
                >
                  <div className="mb-[18px] flex items-center justify-between">
                    <Icon className="h-[22px] w-[22px] text-link" />
                    <span className="font-mono text-[11px] tracking-[0.14em] text-mono-label">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mb-2.5 text-xl font-medium tracking-[-0.015em]">
                    {point.title}
                  </div>
                  <p className="text-[17px] leading-[1.6] text-ink-soft">{point.body}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-[1180px] px-10 pb-[84px] pt-[76px]">
          <Reveal as="h2" className="mb-3.5 max-w-[18em] text-[44px] font-medium leading-[1.05] tracking-[-0.028em]">
            {data.workflowHeading[0]} <span className="text-mist-faint">{data.workflowHeading[1]}</span>
          </Reveal>
          <Reveal as="p" className="mb-[34px] max-w-[40em] text-[17px] leading-[1.6] text-ink-soft">
            Pick a step to see what it looks like in the product.
          </Reveal>
          <Reveal className="mb-5 flex flex-wrap gap-2.5">
            {data.steps.map((step, i) => {
              const Icon = STEP_ICONS[step.icon];
              const active = i === tab;
              return (
                <button
                  key={step.label}
                  type="button"
                  onClick={() => setTab(i)}
                  className={`flex items-center gap-2.5 border px-5 py-[13px] text-[15px] ${
                    active
                      ? "border-ink bg-ink text-paper"
                      : "border-ink/20 bg-white text-ink"
                  }`}
                >
                  <Icon className="h-[17px] w-[17px]" />
                  {step.label}
                </button>
              );
            })}
          </Reveal>

          <Reveal className="grid grid-cols-[0.85fr_1.15fr] items-stretch border border-ink/[0.14] bg-[#FCFCFD]">
            <div className="flex flex-col justify-center gap-4 border-r border-ink/10 px-11 py-12">
              <div className="font-mono text-[11px] tracking-[0.16em] text-link">
                {activeStep.step}
              </div>
              <h3 className="text-[30px] font-medium tracking-[-0.02em]">{activeStep.title}</h3>
              <p className="text-[17px] leading-[1.62] text-ink-soft">{activeStep.body}</p>
              <div className="mt-1 flex items-center gap-2.5 text-[15px] text-ink">
                <Check className="h-4 w-4 text-link" />
                {activeStep.proof}
              </div>
            </div>
            <div className="flex min-h-[400px] items-center bg-[#F1F4F6] p-[30px]">
              {tab === 0 && (
                <div className="grid w-full grid-cols-[84px_1fr] gap-3.5 border border-ink/[0.12] bg-white p-4 shadow-[0_16px_40px_rgba(14,36,51,0.10)]">
                  <div className="grid gap-2.5">
                    <div className="h-[66px] border-2 border-accent bg-[#F8FAFB]" />
                    <div className="h-[66px] border border-ink/[0.14] bg-[#F8FAFB]" />
                    <div className="h-[66px] border border-ink/[0.14] bg-[#F8FAFB]" />
                    <div className="flex h-[30px] items-center justify-center gap-1.5 border border-dashed border-ink/[0.28] font-mono text-[9px] text-dropdown-sub">
                      REORDER
                    </div>
                  </div>
                  <div>
                    <div className="mb-4 flex items-center gap-1.5 border-b border-ink/10 pb-3">
                      <span className="flex items-center gap-1.5 bg-ink px-2.5 py-1.5 text-[11px] text-paper">
                        <Type className="h-3 w-3" />
                        Text
                      </span>
                      <span className="border border-ink/[0.16] px-2.5 py-1.5 text-[11px]">Pages</span>
                      <span className="border border-ink/[0.16] px-2.5 py-1.5 text-[11px]">Layout</span>
                      <span className="ml-auto font-mono text-[9px] text-dropdown-sub">PAGE 1 / 12</span>
                    </div>
                    <div className="mb-3 text-sm font-medium">{data.stepMocks.edit.clauseLabel}</div>
                    <div className="mb-2.5 h-[7px] w-[96%] bg-ink/10" />
                    <div className="mb-3 border border-accent/45 bg-accent/[0.12] px-2.5 py-2 text-[13px] leading-[1.5]">
                      {data.stepMocks.edit.clauseText}{" "}
                      <span className="border-b-2 border-accent">{data.stepMocks.edit.highlight}</span>
                      <span className="ml-0.5 inline-block h-3.5 w-0.5 -translate-y-px bg-ink align-middle" />
                    </div>
                    <div className="mb-2.5 h-[7px] w-[88%] bg-ink/10" />
                    <div className="mb-2.5 h-[7px] w-[72%] bg-ink/10" />
                    <div className="h-[7px] w-[91%] bg-ink/10" />
                  </div>
                </div>
              )}

              {tab === 1 && (
                <div className="w-full border border-ink/[0.12] bg-white p-5 shadow-[0_16px_40px_rgba(14,36,51,0.10)]">
                  <div className="mb-4 flex items-center gap-2 border-b border-ink/10 pb-3">
                    <span className="flex items-center gap-1.5 bg-ink px-2.5 py-1.5 text-[11px] text-paper">
                      <EyeOff className="h-3 w-3" />
                      Redact
                    </span>
                    <span className="border border-ink/[0.16] px-2.5 py-1.5 text-[11px]">Comment</span>
                    <span className="ml-auto font-mono text-[9px] text-dropdown-sub">
                      2 REDACTIONS APPLIED
                    </span>
                  </div>
                  <div className="grid grid-cols-[1fr_200px] items-start gap-4">
                    <div>
                      <div className="mb-3 text-sm font-medium">{data.stepMocks.redact.docTitle}</div>
                      <div className="mb-2.5 h-[7px] w-[94%] bg-ink/10" />
                      <div className="mb-2.5 flex items-center gap-2">
                        <div className="h-[15px] w-[120px] bg-ink" />
                        <div className="h-[7px] w-[90px] bg-ink/10" />
                      </div>
                      <div className="mb-2.5 h-[7px] w-[82%] bg-ink/10" />
                      <div className="mb-2.5 flex items-center gap-2">
                        <div className="h-[7px] w-[60px] bg-ink/10" />
                        <div className="h-[15px] w-[148px] bg-ink" />
                      </div>
                      <div className="h-[7px] w-[76%] bg-ink/10" />
                    </div>
                    <div className="border border-ink/[0.14] bg-[#FCFCFD]">
                      <div className="flex items-center gap-2 px-3 pb-1.5 pt-2.5">
                        <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#2C5468] text-[9px] text-mist">
                          {data.stepMocks.redact.reviewerInitials}
                        </span>
                        <span className="text-xs">{data.stepMocks.redact.reviewerRole}</span>
                      </div>
                      <p className="px-3 pb-2.5 text-xs leading-[1.5] text-ink-soft">
                        {data.stepMocks.redact.note}
                      </p>
                      <div className="flex gap-1.5 px-3 pb-3">
                        <span className="flex-1 border border-ink/[0.16] py-1.5 text-center text-[11px]">
                          Reply
                        </span>
                        <span className="flex-1 bg-accent py-[7px] text-center text-[11px] text-ink">
                          Resolve
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {tab === 2 && (
                <div className="w-full border border-ink/[0.12] bg-white p-5 shadow-[0_16px_40px_rgba(14,36,51,0.10)]">
                  <div className="mb-4 flex items-center gap-2 border-b border-ink/10 pb-3">
                    <span className="flex items-center gap-1.5 bg-ink px-2.5 py-1.5 text-[11px] text-paper">
                      <PenTool className="h-3 w-3" />
                      Signature
                    </span>
                    <span className="ml-auto font-mono text-[9px] text-dropdown-sub">
                      {data.stepMocks.sign.fileName}
                    </span>
                  </div>
                  <div className="grid grid-cols-[1fr_208px] items-start gap-4">
                    <div>
                      <div className="mb-2.5 h-[7px] w-[88%] bg-ink/10" />
                      <div className="mb-[22px] h-[7px] w-[74%] bg-ink/10" />
                      <div className="mb-2 font-mono text-[9px] tracking-[0.14em] text-dropdown-sub">
                        SIGNATURE — CLIENT
                      </div>
                      <div
                        className="flex h-[62px] items-center justify-center border-2 border-accent bg-accent/[0.08] text-[22px] text-ink"
                        style={{ fontFamily: "'Segoe Script', 'Brush Script MT', cursive" }}
                      >
                        {data.stepMocks.sign.signer1Name}
                      </div>
                      <div className="mt-2 flex justify-between font-mono text-[9px] text-dropdown-sub">
                        <span>SIGNED 14:22 UTC</span>
                        <span>IP LOGGED</span>
                      </div>
                    </div>
                    <div className="border border-ink/[0.14] bg-[#FCFCFD] p-3.5">
                      <div className="mb-3 text-xs font-medium">Signers</div>
                      <div className="mb-2.5 flex items-center gap-2 border-b border-ink/10 pb-2.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-link" />
                        <span className="text-xs">{data.stepMocks.sign.signer1Name}</span>
                        <span className="ml-auto font-mono text-[9px] text-link">SIGNED</span>
                      </div>
                      <div className="mb-3 flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-mono-label" />
                        <span className="text-xs">{data.stepMocks.sign.signer2Name}</span>
                        <span className="ml-auto font-mono text-[9px] text-mono-label">WAITING</span>
                      </div>
                      <div className="bg-ink py-2.5 text-center text-[11px] text-paper">
                        Send for signature
                      </div>
                      <div className="mt-2 text-center font-mono text-[9px] text-dropdown-sub">
                        NO ENVELOPE FEES
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {tab === 3 && (
                <div className="w-full border border-ink/[0.12] bg-white p-5 shadow-[0_16px_40px_rgba(14,36,51,0.10)]">
                  <div className="mb-4 flex items-center gap-2 border-b border-ink/10 pb-3">
                    <span className="flex items-center gap-1.5 bg-ink px-2.5 py-1.5 text-[11px] text-paper">
                      <Share2 className="h-3 w-3" />
                      Share settings
                    </span>
                    <span className="ml-auto font-mono text-[9px] text-dropdown-sub">
                      {data.stepMocks.share.fileName}
                    </span>
                  </div>
                  <div className="mb-3.5 flex items-center gap-2 border border-ink/[0.16] px-3 py-2.5">
                    <LinkIcon className="h-3.5 w-3.5 text-link" />
                    <span className="font-mono text-[11px] text-ink-soft">
                      docufence.io/m/4f19c2
                    </span>
                    <span className="ml-auto bg-ink px-2.5 py-1.5 text-[10px] text-paper">Copy</span>
                  </div>
                  <div className="mb-3.5 grid grid-cols-2 gap-2.5">
                    <div className="border border-ink/[0.14] px-3 py-2.5">
                      <div className="mb-1 font-mono text-[9px] tracking-[0.12em] text-dropdown-sub">
                        EXPIRES
                      </div>
                      <div className="text-[13px]">14 Aug 2026, 17:00</div>
                    </div>
                    <div className="border border-ink/[0.14] px-3 py-2.5">
                      <div className="mb-1 font-mono text-[9px] tracking-[0.12em] text-dropdown-sub">
                        DOWNLOAD
                      </div>
                      <div className="text-[13px]">Blocked</div>
                    </div>
                  </div>
                  <div className="border border-ink/[0.14]">
                    {data.stepMocks.share.activity.map((entry, i) => (
                      <div
                        key={entry.label}
                        className={`flex items-center gap-2.5 px-3 py-2.5 text-xs ${
                          i < data.stepMocks.share.activity.length - 1
                            ? "border-b border-ink/10"
                            : ""
                        }`}
                      >
                        {i === data.stepMocks.share.activity.length - 1 ? (
                          <Link2Off className="h-[13px] w-[13px] text-ink" />
                        ) : (
                          <Eye className="h-[13px] w-[13px] text-link" />
                        )}
                        {entry.label}
                        <span className="ml-auto font-mono text-[9px] text-dropdown-sub">
                          {entry.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1180px] px-10 py-[60px]">
          <Reveal className="grid grid-cols-[1fr_auto] items-center gap-10 bg-[#16303F] px-12 py-11 text-mist">
            <div>
              <div className="mb-2.5 max-w-[20em] text-[28px] font-medium tracking-[-0.02em]">
                See it running on one of your own documents.
              </div>
              <div className="text-[15px] text-mist-soft">{data.midCtaDocument}</div>
            </div>
            <div className="flex flex-shrink-0 items-center gap-3">
              <Link
                href="https://calendar.app.google/WbdzvM2oayoF9G6X7"
                className="whitespace-nowrap bg-accent px-[30px] py-[15px] text-base text-ink hover:bg-[#3FBEDD]"
              >
                Book a Call
              </Link>
              <Link
                href="https://dev-app.docufence.com/signup"
                className="whitespace-nowrap border-b border-mist/40 pb-[3px] text-base text-mist hover:text-accent"
              >
                Sign Up
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink/[0.08] bg-[#F1F4F6]">
        <div className="mx-auto max-w-[1180px] px-10 pb-[84px] pt-[76px]">
          <Reveal as="h2" className="mb-10 max-w-[20em] text-[40px] font-medium leading-[1.05] tracking-[-0.028em]">
            {data.whyHeading}
          </Reveal>
          <Reveal className="grid grid-cols-3 gap-4">
            {data.whyCards.map((card) => {
              const Icon = CARD_ICONS[card.icon];
              return (
                <div
                  key={card.title}
                  className="border border-ink/[0.13] bg-white px-[30px] pb-[34px] pt-8 hover:border-accent/55"
                >
                  <Icon className="h-6 w-6 text-link" />
                  <div className="my-2.5 text-[22px] font-medium tracking-[-0.015em]">
                    {card.title}
                  </div>
                  <p className="text-[17px] leading-[1.6] text-ink-soft">{card.body}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-mist">
        <div className="mx-auto max-w-[1180px] px-10 py-20">
          <Reveal className="mb-11 grid grid-cols-2 items-start gap-[72px]">
            <h2 className="text-[44px] font-medium leading-[1.05] tracking-[-0.028em]">
              {data.securityHeading}
            </h2>
            <p className="max-w-[30em] pt-1.5 text-lg leading-[1.6] text-[#BACAD3]">
              {data.securitySubcopy}
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-[1.1fr_1fr] items-start gap-14">
            <div className="border-t border-mist/[0.16]">
              {data.securityPoints.map((point) => (
                <div
                  key={point}
                  className="grid grid-cols-[24px_1fr] gap-4 border-b border-mist/[0.16] py-5"
                >
                  <Check className="mt-0.5 h-[18px] w-[18px] text-accent" />
                  <div className="text-[17px] leading-[1.5]">{point}</div>
                </div>
              ))}
            </div>
            <Link
              href="/security"
              className="mt-5 inline-flex items-center gap-2.5 justify-self-start border-b border-accent/70 pb-1 text-base text-mist hover:text-accent"
            >
              Read the full security page
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-ink/[0.08] bg-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[320px_1fr] gap-[72px] px-10 pb-[82px] pt-[78px]">
          <Reveal as="h2" className="text-[40px] font-medium leading-[1.05] tracking-[-0.028em]">
            {data.faqHeading}
          </Reveal>
          <Reveal className="border-t border-ink/[0.16]">
            <FaqAccordion items={data.faqs} defaultOpen={0} />
          </Reveal>
        </div>
      </section>

      <section id="contact" className="bg-ink text-mist">
        <div className="mx-auto max-w-[1180px] px-10 py-[92px] text-center">
          <Reveal
            as="h2"
            className="mx-auto mb-5 max-w-[14em] text-[54px] font-medium leading-[1.02] tracking-[-0.03em]"
          >
            Ready to streamline your team&apos;s document workflow?
          </Reveal>
          <Reveal as="p" className="mx-auto mb-[34px] max-w-[32em] text-lg leading-[1.55] text-[#BACAD3]">
            Edit, review, sign, and share securely, without leaving the tab.
          </Reveal>
          <Reveal className="grid justify-items-center gap-3.5">
            <div className="flex items-center gap-4">
              <Link
                href="https://calendar.app.google/WbdzvM2oayoF9G6X7"
                className="bg-accent px-[34px] py-4 text-base text-ink hover:bg-[#3FBEDD]"
              >
                Book a Call
              </Link>
              <Link
                href="https://dev-app.docufence.com/signup"
                className="border-b border-mist/40 pb-[3px] text-base text-mist hover:text-accent"
              >
                Sign Up
              </Link>
            </div>
            <div className="text-sm text-mist-soft">
              30 minutes, on your document, with the security questions answered live.
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
