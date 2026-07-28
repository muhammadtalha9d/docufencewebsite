import Link from "next/link";
import { Lock, ShieldOff, SlidersHorizontal, Link2Off, History, Download, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";

const FEATURES = [
  {
    icon: Lock,
    title: "Encrypted in transit and at rest",
    body: "Encrypted on the way to us and while it sits with us.",
  },
  {
    icon: ShieldOff,
    title: "We never train AI on your documents",
    body: "Your files train no model, ours or anyone else's.",
  },
  {
    icon: SlidersHorizontal,
    title: "Control view, download, and forward",
    body: "Set what each recipient can do, one permission at a time.",
  },
  {
    icon: Link2Off,
    title: "Revoke access after sending",
    body: "Switch the link off and it stops opening. Immediately.",
  },
  {
    icon: History,
    title: "An audit trail of who opened what",
    body: "Time-stamped access logs you can read without asking anyone.",
  },
  {
    icon: Download,
    title: "Your documents stay yours",
    body: "Leave whenever you want and take every file with you.",
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="bg-ink text-mist">
      <div className="mx-auto max-w-[1180px] px-10 pb-[108px] pt-[104px]">
        <Reveal className="mb-[60px] flex items-end justify-between gap-10">
          <div>
            <div className="mb-7 flex items-center gap-[9px] font-mono text-[11px] tracking-[0.16em] text-accent">
              <span className="inline-block h-1.5 w-1.5 bg-accent" />
              SECURITY
            </div>
            <h2 className="max-w-[13em] text-[56px] font-medium leading-[1.02] tracking-[-0.028em]">
              Security you can point to, <span className="text-mist-faint">not a badge you have to trust.</span>
            </h2>
          </div>
          <Link
            href="/security"
            className="whitespace-nowrap border-b border-accent/70 pb-1 text-[15px] text-mist hover:text-accent"
          >
            Read the full security page
          </Link>
        </Reveal>

        <Reveal className="grid grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] items-start gap-14">
          <div className="relative">
            <span
              className="pointer-events-none absolute left-[-8%] top-[6%] h-[88%] w-[116%] blur-[56px]"
              style={{
                background:
                  "radial-gradient(circle at 40% 40%, rgba(21,168,206,0.34), rgba(21,168,206,0.10) 45%, rgba(21,168,206,0) 72%)",
              }}
            />
            <div className="relative border border-mist/[0.18] bg-white/[0.055] shadow-[0_36px_72px_rgba(0,0,0,0.48)] backdrop-blur-md">
              <div className="flex items-center gap-3 border-b border-mist/[0.12] px-5 py-4">
                <Lock className="h-4 w-4 text-[#46C3E0]" />
                <span className="text-[15px]">Share settings</span>
                <span className="ml-auto flex items-center gap-1.5 border border-accent/40 bg-accent/[0.12] px-2.5 py-1.5 font-mono text-[10px] tracking-[0.12em] text-[#5FD3EE]">
                  <span
                    className="h-[5px] w-[5px] rounded-full bg-[#46C3E0]"
                    style={{ animation: "df-blink 1.8s steps(1,end) infinite" }}
                  />
                  LINK ACTIVE
                </span>
              </div>
              <div className="flex items-center justify-between gap-3.5 border-b border-mist/10 px-5 py-2.5 font-mono text-[10px] tracking-[0.1em] text-[#8FA9B6]">
                <span>Q3-REPORT.PDF</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3 w-3 text-[#46C3E0]" />
                  END-TO-END ENCRYPTED
                </span>
              </div>
              <div className="px-5 pb-[22px] pt-2">
                <div className="flex items-center justify-between gap-4 border-b border-mist/10 py-[15px]">
                  <span className="text-[15px] text-[#DCE6EB]">Can view</span>
                  <span className="flex h-[21px] w-10 items-center justify-end rounded-full bg-accent px-[3px] shadow-[0_0_14px_rgba(21,168,206,0.55)]">
                    <span className="block h-[15px] w-[15px] rounded-full bg-white" />
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-mist/10 py-[15px]">
                  <span className="text-[15px] text-[#DCE6EB]">Can download</span>
                  <span className="flex h-[21px] w-10 items-center rounded-full border border-mist/25 px-[3px]">
                    <span className="block h-[13px] w-[13px] rounded-full bg-mist/30" />
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-mist/10 py-[15px]">
                  <span className="text-[15px] text-[#DCE6EB]">Can forward</span>
                  <span className="flex h-[21px] w-10 items-center rounded-full border border-mist/25 px-[3px]">
                    <span className="block h-[13px] w-[13px] rounded-full bg-mist/30" />
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-mist/10 py-[15px]">
                  <span className="text-[15px] text-[#DCE6EB]">Link expires</span>
                  <span className="border border-accent/40 bg-accent/[0.12] px-2.5 py-1.5 font-mono text-[11px] tracking-[0.1em] text-[#5FD3EE]">
                    IN 7 DAYS
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 pb-0.5 pt-[18px]">
                  <span className="text-[15px] text-[#DCE6EB]">Access</span>
                  <span className="flex cursor-pointer items-center gap-2 border border-[#EF4444]/60 px-3.5 py-2 text-[13px] text-[#FF9494] hover:border-[#EF4444] hover:bg-[#EF4444] hover:text-white">
                    <Link2Off className="h-3.5 w-3.5" />
                    Revoke
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-[1] grid grid-cols-2 gap-3.5">
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="grid content-start gap-3 border border-mist/[0.12] bg-white/[0.04] px-[22px] pb-6 pt-[22px] hover:border-accent/55"
              >
                <Icon className="h-[19px] w-[19px] text-[#46C3E0]" />
                <div className="text-[17px] leading-[1.3]">{title}</div>
                <p className="text-sm leading-[1.6] text-[#9DB4C0]">{body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
