import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { FaqAccordion } from "@/components/faq-accordion";
import { HOMEPAGE_FAQ } from "@/data/homepage-faq";
import { Hero } from "./hero";
import { WhyDocuFence } from "./why-docufence";
import { ProductWalkthrough } from "./product-walkthrough";
import { AudiencesFilmstrip } from "./audiences-filmstrip";
import { FiveTools } from "./five-tools";
import { SecuritySection } from "./security-section";

export function Homepage() {
  return (
    <div>
      <Hero />
      <WhyDocuFence />
      <ProductWalkthrough />
      <AudiencesFilmstrip />
      <FiveTools />
      <SecuritySection />

      <section className="border-y border-ink/[0.08] bg-[#EDF0F1]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[320px_1fr] gap-[72px] px-10 pb-24 pt-24">
          <Reveal as="h2" className="text-[48px] font-medium leading-[1.04] tracking-[-0.028em]">
            Questions people ask
          </Reveal>
          <Reveal className="border-t border-ink/[0.16]">
            <FaqAccordion items={HOMEPAGE_FAQ} defaultOpen={0} />
          </Reveal>
        </div>
      </section>

      <section id="contact" className="bg-ink text-mist">
        <div className="mx-auto max-w-[1180px] px-10 py-[116px] text-center">
          <Reveal
            as="h2"
            className="mx-auto mb-10 max-w-[13em] text-[64px] font-medium leading-[1.0] tracking-[-0.03em]"
          >
            Put your documents in one place you control.
          </Reveal>
          <Reveal className="flex justify-center gap-3.5">
            <Link
              href="https://dev-app.docufence.com/signup"
              className="bg-paper px-8 py-[15px] text-[15px] text-ink hover:bg-white"
            >
              Sign Up
            </Link>
            <Link
              href="https://calendar.app.google/WbdzvM2oayoF9G6X7"
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
