import Link from "next/link";
import { FileText, Type, MessageSquare, PenTool, EyeOff, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section className="pt-[108px]">
      <div className="mx-auto max-w-[1180px] px-10 pb-16">
        <Reveal className="mb-[34px] flex items-center gap-[9px] font-mono text-[11px] tracking-[0.16em] text-ink">
          <span className="inline-block h-1.5 w-1.5 bg-accent" />
          THE UNIFIED SECURE DOCUMENT WORKSPACE
        </Reveal>
        <Reveal
          as="h1"
          className="mb-[34px] max-w-[15em] text-[88px] font-medium leading-[0.98] tracking-[-0.032em]"
        >
          One secure workspace <span className="text-mono-label">for all your teams&apos; critical documents.</span>
        </Reveal>
        <Reveal className="grid grid-cols-[1fr_auto] items-end gap-14">
          <p className="max-w-[34em] text-[19px] leading-[1.55] text-ink-faint">
            Your daily workflow shouldn&apos;t require four different subscriptions and unsafe
            email chains. DocuFence brings native editing, redlining, e-signatures, and
            zero-trust sharing into a single secure perimeter, so your team stops losing hours to
            tool-switching and keeps company data locked down.
          </p>
          <div className="flex items-center gap-3.5">
            <Link
              href="https://dev-app.docufence.com/signup"
              className="whitespace-nowrap bg-ink px-8 py-4 text-[15px] text-paper hover:bg-black"
            >
              Sign Up
            </Link>
            <Link
              href="https://calendar.app.google/WbdzvM2oayoF9G6X7"
              className="whitespace-nowrap border border-ink/20 px-7 py-[15px] text-[15px] text-ink hover:border-ink/45"
            >
              Book a Call
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="overflow-hidden bg-ink px-10 pt-[72px]">
        <Reveal className="mx-auto max-w-[1000px] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-4 bg-[#16303F] px-[18px] py-3">
            <div className="flex gap-1.5">
              <span className="h-[9px] w-[9px] rounded-full bg-mist/[0.28]" />
              <span className="h-[9px] w-[9px] rounded-full bg-mist/[0.28]" />
              <span className="h-[9px] w-[9px] rounded-full bg-mist/[0.28]" />
            </div>
            <div className="flex items-center gap-2.5 border border-mist/[0.14] bg-mist/[0.08] px-3.5 py-[7px]">
              <FileText className="h-3.5 w-3.5 text-mono-label" />
              <span className="font-mono text-xs text-mist">Vendor-Agreement_v4.pdf</span>
            </div>
            <div className="ml-auto flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#16303F] bg-[#2C5468] text-[11px] text-mist">
                RV
              </span>
              <span className="-ml-[18px] flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#16303F] bg-accent text-[11px] text-ink">
                YO
              </span>
              <span className="flex items-center gap-1.5 border border-accent/60 px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                LIVE
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 border-b border-ink/10 px-[18px] py-3">
            <span className="flex items-center gap-2 border border-ink/[0.16] px-3.5 py-2.5 text-[13px]">
              <Type className="h-[15px] w-[15px] text-accent" />
              Edit PDF text
            </span>
            <span className="flex items-center gap-2 border border-ink/[0.16] px-3.5 py-2.5 text-[13px]">
              <MessageSquare className="h-[15px] w-[15px] text-accent" />
              Add comment
            </span>
            <span className="flex items-center gap-2 border border-ink/[0.16] px-3.5 py-2.5 text-[13px]">
              <PenTool className="h-[15px] w-[15px] text-accent" />
              Request signature
            </span>
            <span className="flex items-center gap-2 border border-ink/[0.16] px-3.5 py-2.5 text-[13px]">
              <EyeOff className="h-[15px] w-[15px] text-accent" />
              Redact
            </span>
            <span className="ml-auto flex items-center gap-2 text-xs text-ink-faint">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
              All changes saved
            </span>
          </div>

          <div className="relative bg-[#F1F4F5] px-10 pb-11 pt-[34px]">
            <div className="max-w-[720px] border border-ink/10 bg-white px-[46px] pb-[52px] pt-10">
              <div className="mb-4 text-lg font-medium tracking-[-0.01em]">4. Service Levels</div>
              <div className="mb-[30px] border-l-[3px] border-accent bg-accent/[0.07] px-4 py-3 text-[15px] leading-[1.65]">
                The supplier will maintain availability of 99.5 percent measured monthly. Credits
                apply where availability falls below{" "}
                <span className="bg-accent/[0.28] px-[3px]">the agreed threshold</span>
              </div>
              <div className="mb-4 text-lg font-medium tracking-[-0.01em]">
                5. Limitation of Liability
              </div>
              <p className="mb-3.5 text-[15px] leading-[1.7]">
                Neither party is liable for indirect or consequential loss arising out of this
                agreement,{" "}
                <span className="border-b-2 border-[#E4B95B] bg-[#E4B95B]/[0.18]">
                  including loss of profits or anticipated savings
                </span>
                .
              </p>
              <p className="text-[15px] leading-[1.7] text-ink-faint">
                Total liability is capped at the fees paid in the twelve months preceding the
                claim.
              </p>
            </div>

            <span className="absolute left-[470px] top-[84px] whitespace-nowrap bg-ink px-[11px] py-1.5 text-[11px] text-mist">
              Reviewer is typing
            </span>

            <div className="absolute bottom-[46px] right-[26px] w-[300px] border border-ink/[0.14] bg-white shadow-[0_18px_40px_rgba(14,36,51,0.18)]">
              <div className="flex items-center gap-2.5 px-4 pb-2.5 pt-3.5">
                <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#2C5468] text-[10px] text-mist">
                  RV
                </span>
                <span className="text-sm">Reviewer</span>
                <span className="ml-auto font-mono text-[10px] text-mono-label">2 MIN</span>
              </div>
              <p className="px-4 pb-3.5 text-sm leading-[1.55] text-ink-faint">
                Cap liability at twelve months of fees and insert the standard clause before we
                send this for signature.
              </p>
              <div className="flex gap-2.5 px-4 pb-4">
                <span className="flex-1 border border-ink/[0.16] py-2.5 text-center text-[13px]">
                  Reply
                </span>
                <span className="flex-1 bg-accent py-[10px] text-center text-[13px] text-ink">
                  Resolve
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
