import type { Metadata } from "next";
import { UseCasePage } from "@/components/use-case/use-case-page";
import { LEGAL_DATA } from "./data";

export const metadata: Metadata = {
  title: "For Legal Teams",
  description:
    "Precision document control for law firms and in-house counsel: review, redact, sign, and disclose a matter in one tab, with a time-stamped record of every access.",
};

export default function ForLegalPage() {
  return <UseCasePage data={LEGAL_DATA} />;
}
