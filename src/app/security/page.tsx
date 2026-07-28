import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldOff,
  Lock,
  ShieldCheck,
  Link2Off,
  KeyRound,
  Server,
  History,
  LockKeyhole,
  Timer,
  UsersRound,
  Ban,
  Network,
  DatabaseBackup,
  UserRoundCheck,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { FaqAccordion } from "@/components/faq-accordion";
import { SECURITY_FAQ } from "./faq";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Security you control, privacy you can verify: encryption in transit and at rest, zero AI training on your documents, active access governance, and time-stamped audit trails.",
};

const TRUST_BADGES = [
  { icon: ShieldOff, label: "Zero AI Data Retention" },
  { icon: Lock, label: "AES-256 At Rest" },
  { icon: ShieldCheck, label: "TLS 1.3 In Transit" },
  { icon: Link2Off, label: "1-Click Revocation" },
];

const PILLARS = [
  { href: "#pillar-2", icon: KeyRound, label: "Active access governance" },
  { href: "#pillar-3", icon: Server, label: "Infrastructure protection" },
  { href: "#pillar-4", icon: History, label: "Time-stamped audit trails" },
];

const ACCESS_POINTS = [
  {
    icon: LockKeyhole,
    title: "Password-protected links",
    body: "Require a password before a document opens, per link and per recipient.",
  },
  {
    icon: Timer,
    title: "Auto-expiry",
    body: "Links close themselves after a set window, or the moment signing completes.",
  },
  {
    icon: Link2Off,
    title: "Remote revocation",
    body: "Kill access at any point in the lifecycle, including after the file has been opened.",
  },
  {
    icon: UsersRound,
    title: "Least-privilege internally",
    body: "Our own staff cannot browse your documents. Access is scoped, logged, and requested.",
  },
];

const INFRA_CARDS = [
  {
    icon: Server,
    title: "SOC 2-certified data centers",
    body: "Application data is hosted on enterprise cloud infrastructure in the region you choose at signup.",
  },
  {
    icon: Network,
    title: "Strict network isolation",
    body: "Isolated network VPCs separate customer workloads, with no lateral access between tenants.",
  },
  {
    icon: DatabaseBackup,
    title: "Automated backups",
    body: "Encrypted, versioned backups run on a schedule so a bad day never becomes a lost file.",
  },
  {
    icon: UserRoundCheck,
    title: "Role-based internal access",
    body: "Our staff cannot browse your documents. Access is scoped by RBAC, logged, and time-bound.",
  },
];

const AUDIT_ROWS = [
  { who: "External reviewer", action: "Viewed", time: "09:41:06", muted: false },
  { who: "Finance lead", action: "Edited", time: "10:02:55", muted: false },
  { who: "Counterparty", action: "Signed", time: "11:17:20", muted: false },
  { who: "Unknown device", action: "Blocked", time: "11:44:03", muted: true },
  { who: "Owner", action: "Revoked link", time: "11:45:31", muted: false },
];

const AUDIT_NOTES = [
  {
    title: "Immutable by design",
    body: "Entries are append-only. Nobody, including an account owner, can edit history.",
  },
  {
    title: "IP and device logged",
    body: "Each event records the originating IP and device, so a blocked attempt is evidence, not a guess.",
  },
  {
    title: "Exportable",
    body: "Download the log as CSV for an internal review or an external audit request.",
  },
];

const OWNERSHIP_CARDS = [
  {
    title: "Where the data sits",
    body: "Documents are stored in the region you choose at signup, and they stay there.",
  },
  {
    title: "Who can reach it",
    body: "Only the people you grant access to, plus scoped internal access that is logged and time-bound.",
  },
  {
    title: "What happens if you leave",
    body: "Export everything, then we delete it. Your documents do not stay behind.",
  },
];

export default function SecurityPage() {
  return (
    <div>
      <section className="mx-auto max-w-[1180px] px-10 pb-[88px] pt-[108px]">
        <Reveal className="mb-[34px] flex items-center gap-[9px] font-mono text-[11px] tracking-[0.16em] text-ink">
          <span className="inline-block h-1.5 w-1.5 bg-accent" />
          DATA PRIVACY &amp; ARCHITECTURE
        </Reveal>
        <Reveal
          as="h1"
          className="mb-7 max-w-[13em] text-[78px] font-medium leading-[0.99] tracking-[-0.032em]"
        >
          Security you control. <span className="text-mono-label">Privacy you can verify.</span>
        </Reveal>
        <Reveal className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-14">
          <p className="max-w-[34em] text-[19px] leading-[1.55] text-ink-soft">
            Engineered with bank-grade encryption, zero AI data retention, and
            instant server-side link revocation to protect your team&apos;s
            sensitive documents.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#pillars"
              className="whitespace-nowrap bg-ink px-[30px] py-4 text-base text-paper hover:bg-black"
            >
              Read Our Security Stance
            </a>
            <Link
              href="/contact"
              className="whitespace-nowrap border border-ink/[0.22] px-[26px] py-[15px] text-base text-ink hover:border-ink/55"
            >
              Contact Team
            </Link>
          </div>
        </Reveal>
        <Reveal className="mt-[46px] flex flex-wrap items-center gap-x-10 gap-y-3.5 border-y border-ink/[0.14] py-[22px]">
          {TRUST_BADGES.map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-2.5 text-[15px] text-ink">
              <Icon className="h-[17px] w-[17px] text-link" />
              {label}
            </span>
          ))}
        </Reveal>
      </section>

      <section id="pillars" className="mx-auto max-w-[1180px] px-10 pb-[92px]">
        <Reveal className="grid grid-cols-3 gap-px border-y border-ink/[0.14] bg-ink/[0.14]">
          {PILLARS.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-3.5 bg-paper px-6 py-6 text-ink hover:text-link"
            >
              <Icon className="h-5 w-5 flex-shrink-0 text-accent" />
              <span className="text-base leading-[1.35]">{label}</span>
            </a>
          ))}
        </Reveal>
      </section>

      <section id="pillar-2" className="border-b border-ink/10 bg-white">
        <div className="mx-auto max-w-[1180px] px-10 pb-[104px] pt-[100px]">
          <Reveal className="mb-14 grid grid-cols-2 items-start gap-[72px]">
            <h2 className="text-[52px] font-medium leading-[1.02] tracking-[-0.028em]">
              Active access governance.{" "}
              <span className="text-mono-label">Real-time control over sent documents.</span>
            </h2>
            <p className="max-w-[30em] pt-2 text-lg leading-[1.6] text-ink-faint">
              Static email attachments create permanent data leaks. DocuFence
              links give you real-time access revocation, auto-expiration
              timers, and permission guardrails that block unauthorized
              downloads and forwards globally.
            </p>
          </Reveal>

          <Reveal className="grid grid-cols-[1fr_1.1fr] items-stretch gap-12">
            <div className="grid content-start">
              {ACCESS_POINTS.map(({ icon: Icon, title, body }, i) => (
                <div
                  key={title}
                  className={`grid grid-cols-[24px_1fr] gap-4 py-[22px] ${
                    i < ACCESS_POINTS.length - 1 ? "border-b border-ink/[0.14]" : ""
                  }`}
                >
                  <Icon className="mt-[3px] h-5 w-5 text-accent" />
                  <div>
                    <div className="mb-1.5 text-lg">{title}</div>
                    <p className="text-[15px] leading-[1.6] text-ink-faint">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-ink/[0.12] bg-white shadow-[0_24px_50px_rgba(14,36,51,0.10)]">
              <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
                <span className="text-sm">Access rules</span>
                <span className="font-mono text-[10px] text-mono-label">
                  Payroll-Summary.pdf
                </span>
              </div>
              <div className="px-5 pb-[22px] pt-2">
                <div className="flex items-center justify-between border-b border-ink/10 py-4">
                  <span className="text-[15px] text-ink-faint">Password required</span>
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
                  <span className="text-[15px] text-ink-faint">Expires</span>
                  <span className="font-mono text-xs text-link">ON SIGNATURE</span>
                </div>
                <div className="flex items-center justify-between pb-1 pt-[18px]">
                  <span className="text-[15px] text-ink-faint">Access</span>
                  <span className="flex items-center gap-2 border border-accent/70 px-3.5 py-1.5 text-[13px] text-link">
                    <Ban className="h-3.5 w-3.5" />
                    Revoke now
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="pillar-3" className="bg-paper">
        <div className="mx-auto max-w-[1180px] px-10 pb-[100px] pt-24">
          <Reveal className="mb-[52px] grid grid-cols-2 items-start gap-[72px]">
            <h2 className="text-[50px] font-medium leading-[1.03] tracking-[-0.028em]">
              Infrastructure and data protection.{" "}
              <span className="text-mono-label">Encrypted at rest and in transit.</span>
            </h2>
            <p className="max-w-[32em] pt-2 text-lg leading-[1.6] text-ink-soft">
              Your files are protected using industry-standard AES 256-bit
              encryption at rest and TLS 1.3 in transit. All application data
              is hosted in top-tier, SOC 2-certified cloud data centers
              featuring automated backups and strict network isolation.
            </p>
          </Reveal>

          <Reveal className="grid grid-cols-[280px_minmax(0,1fr)] items-start gap-10">
            <div className="grid gap-4">
              <div className="bg-ink px-6 py-[26px] text-mist">
                <div className="mb-3.5 font-mono text-[10px] tracking-[0.14em] text-[#46C3E0]">
                  AT REST
                </div>
                <div className="text-[30px] tracking-[-0.02em]">AES-256</div>
              </div>
              <div className="bg-ink px-6 py-[26px] text-mist">
                <div className="mb-3.5 font-mono text-[10px] tracking-[0.14em] text-[#46C3E0]">
                  IN TRANSIT
                </div>
                <div className="text-[30px] tracking-[-0.02em]">TLS 1.3</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {INFRA_CARDS.map(({ icon: Icon, title, body }) => (
                <div key={title} className="border border-ink/[0.13] bg-white px-[26px] py-[26px]">
                  <Icon className="h-5 w-5 text-link" />
                  <div className="my-2 text-[19px]">{title}</div>
                  <p className="text-[15px] leading-[1.6] text-ink-soft">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="pillar-4" className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-[1180px] px-10 pb-[100px] pt-24">
          <Reveal className="mb-[52px] grid grid-cols-2 items-start gap-[72px]">
            <h2 className="text-[50px] font-medium leading-[1.03] tracking-[-0.028em]">
              Time-stamped audit trails.{" "}
              <span className="text-mono-label">Complete visibility into file activity.</span>
            </h2>
            <p className="max-w-[32em] pt-2 text-lg leading-[1.6] text-ink-soft">
              Maintain an immutable log of document interactions for internal
              compliance. Track views, signature executions, and permission
              changes with exact timestamps and IP logs.
            </p>
          </Reveal>

          <Reveal className="grid grid-cols-[minmax(0,1fr)_300px] items-start gap-10">
            <div className="border border-ink/[0.12] bg-[#FCFCFD] shadow-[0_24px_50px_rgba(14,36,51,0.10)]">
              <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
                <span className="text-sm">Audit trail</span>
                <span className="font-mono text-[10px] text-dropdown-sub">Board-Pack.pdf</span>
              </div>
              <div className="px-5 pb-5 pt-1">
                <div className="grid grid-cols-[minmax(0,1fr)_110px_120px] gap-4 border-b border-ink/10 py-3.5 font-mono text-[10px] tracking-[0.12em] text-dropdown-sub">
                  <span>WHO</span>
                  <span>ACTION</span>
                  <span>TIME</span>
                </div>
                {AUDIT_ROWS.map((row, i) => (
                  <div
                    key={row.who + row.time}
                    className={`grid grid-cols-[minmax(0,1fr)_110px_120px] gap-4 py-[15px] text-sm text-ink ${
                      i < AUDIT_ROWS.length - 1 ? "border-b border-ink/[0.08]" : ""
                    }`}
                  >
                    <span>{row.who}</span>
                    <span className={row.muted ? "text-dropdown-sub" : "text-link"}>
                      {row.action}
                    </span>
                    <span className="font-mono text-xs text-dropdown-sub">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid content-start gap-3.5">
              {AUDIT_NOTES.map((note) => (
                <div key={note.title} className="border border-ink/[0.13] px-[22px] py-[22px]">
                  <div className="mb-2 text-[17px]">{note.title}</div>
                  <p className="text-[15px] leading-[1.6] text-ink-soft">{note.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-[1180px] px-10 pb-24 pt-[92px]">
          <Reveal
            as="h2"
            className="mb-11 max-w-[18em] text-[44px] font-medium leading-[1.04] tracking-[-0.028em]"
          >
            What you can tell your own client
          </Reveal>
          <Reveal className="grid grid-cols-3 gap-px border-y border-ink/[0.14] bg-ink/[0.14]">
            {OWNERSHIP_CARDS.map((card, i) => (
              <div
                key={card.title}
                className={`bg-white py-[30px] pb-[34px] ${
                  i === 0 ? "pr-[30px]" : i === OWNERSHIP_CARDS.length - 1 ? "pl-[30px]" : "px-[30px]"
                }`}
              >
                <div className="mb-2.5 text-[19px]">{card.title}</div>
                <p className="text-[15px] leading-[1.6] text-ink-faint">{card.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink/[0.08] bg-[#F1F4F6]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[340px_minmax(0,1fr)] gap-[72px] px-10 py-[84px]">
          <Reveal>
            <h2 className="mb-3.5 text-[40px] font-medium leading-[1.05] tracking-[-0.028em]">
              Transparent security FAQ
            </h2>
            <p className="text-[17px] leading-[1.6] text-ink-soft">
              The four questions every IT and compliance reviewer asks,
              answered without hedging.
            </p>
          </Reveal>
          <Reveal className="border-t border-ink/[0.16]">
            <FaqAccordion items={SECURITY_FAQ} defaultOpen={null} />
          </Reveal>
        </div>
      </section>

      <section id="contact" className="bg-ink text-mist">
        <div className="mx-auto max-w-[1180px] px-10 py-28 text-center">
          <Reveal
            as="h2"
            className="mx-auto mb-6 max-w-[13em] text-[60px] font-medium leading-[1.0] tracking-[-0.03em]"
          >
            Send us your security questionnaire.
          </Reveal>
          <Reveal as="p" className="mx-auto mb-[38px] max-w-[30em] text-lg leading-[1.55] text-mist-soft">
            We will answer it in plain language, control by control.
          </Reveal>
          <Reveal className="flex justify-center gap-3.5">
            <Link
              href="/signup"
              className="bg-paper px-8 py-[15px] text-[15px] text-ink hover:bg-white"
            >
              Sign Up
            </Link>
            <Link
              href="/contact"
              className="border border-mist/[0.28] px-7 py-3.5 text-[15px] text-mist hover:border-mist/60"
            >
              Book a Call
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
