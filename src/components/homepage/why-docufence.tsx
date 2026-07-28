import { FileCheck, ShieldCheck, Undo2 } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function WhyDocuFence() {
  return (
    <section className="mx-auto max-w-[1180px] px-10 pb-[100px] pt-[104px]">
      <Reveal className="mb-14 max-w-[46em]">
        <div className="mb-7 flex items-center gap-[9px] font-mono text-[11px] tracking-[0.16em] text-ink">
          <span className="inline-block h-1.5 w-1.5 bg-accent" />
          WHY DOCUFENCE
        </div>
        <h2 className="mb-[22px] text-[56px] font-medium leading-[1.02] tracking-[-0.028em]">
          The document leaves your hands. <span className="text-mono-label">It never leaves your control.</span>
        </h2>
        <p className="max-w-[26em] text-[19px] leading-[1.5] text-ink-faint">
          One file, one workspace, from first edit to final signature and every access after it.
        </p>
      </Reveal>

      <Reveal className="grid grid-cols-3 gap-5">
        <div className="border border-ink/[0.12] bg-white">
          <div className="flex h-[220px] items-center justify-center overflow-hidden bg-ink px-5">
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="h-6 w-[17px] border border-mist/35" />
              ))}
              <span className="mx-1.5 h-0.5 w-[26px] bg-mist/40" />
              <span className="h-[78px] w-[58px] bg-accent shadow-[0_0_0_8px_rgba(21,168,206,0.14)]" />
            </div>
          </div>
          <div className="px-[26px] pb-[30px] pt-[26px]">
            <div className="mb-4 flex items-center gap-3">
              <FileCheck className="h-5 w-5 text-accent" />
              <span className="font-mono text-[10px] tracking-[0.14em] text-mono-label">01</span>
            </div>
            <h3 className="mb-2.5 text-[23px] font-medium tracking-[-0.015em]">
              The file never leaves the workspace
            </h3>
            <p className="text-[15px] leading-[1.6] text-ink-faint">
              Open the document once. Edit, review, sign, and send it from the same window, with
              nothing exported in between.
            </p>
          </div>
        </div>

        <div className="border border-ink/[0.12] bg-white">
          <div className="flex h-[220px] items-center justify-center overflow-hidden bg-ink px-5">
            <div className="flex h-[116px] w-[186px] items-center justify-center border border-mist/25">
              <div className="flex h-[76px] w-[130px] items-center justify-center border border-mist/45">
                <div className="h-[38px] w-[76px] bg-accent shadow-[0_0_0_8px_rgba(21,168,206,0.14)]" />
              </div>
            </div>
          </div>
          <div className="px-[26px] pb-[30px] pt-[26px]">
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <span className="font-mono text-[10px] tracking-[0.14em] text-mono-label">02</span>
            </div>
            <h3 className="mb-2.5 text-[23px] font-medium tracking-[-0.015em]">
              Security you can point to
            </h3>
            <p className="text-[15px] leading-[1.6] text-ink-faint">
              Encryption in transit and at rest, permissions per recipient, and an access log you
              can read. We never train AI on your documents.
            </p>
          </div>
        </div>

        <div className="border border-ink/[0.12] bg-white">
          <div className="flex h-[220px] items-center justify-center overflow-hidden bg-ink px-5">
            <div className="flex items-center">
              <span className="h-[78px] w-14 bg-mist" />
              <span className="h-[3px] w-[34px] bg-accent" />
              <span className="h-[78px] w-[5px] bg-accent shadow-[0_0_0_7px_rgba(21,168,206,0.14)]" />
              <span className="h-[3px] w-[34px] bg-mist/[0.18]" />
              <span className="h-[78px] w-14 border border-dashed border-mist/35" />
            </div>
          </div>
          <div className="px-[26px] pb-[30px] pt-[26px]">
            <div className="mb-4 flex items-center gap-3">
              <Undo2 className="h-5 w-5 text-accent" />
              <span className="font-mono text-[10px] tracking-[0.14em] text-mono-label">03</span>
            </div>
            <h3 className="mb-2.5 text-[23px] font-medium tracking-[-0.015em]">
              Control that outlives the send
            </h3>
            <p className="text-[15px] leading-[1.6] text-ink-faint">
              Set links to expire, restrict printing and forwarding, and pull access back in one
              click if something changes.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
