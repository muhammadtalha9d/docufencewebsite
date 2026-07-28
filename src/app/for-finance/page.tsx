import type { Metadata } from "next";
import { UseCasePage } from "@/components/use-case/use-case-page";
import { FINANCE_DATA } from "./data";

export const metadata: Metadata = {
  title: "For Finance Teams",
  description:
    "Distribute reports and audit packages with absolute privacy: prepare, approve, sign, and release a pack in one tab, with a time-stamped record of every open.",
};

export default function ForFinancePage() {
  return <UseCasePage data={FINANCE_DATA} />;
}
