import type { Metadata } from "next";
import { UseCasePage } from "@/components/use-case/use-case-page";
import { HR_DATA } from "./data";

export const metadata: Metadata = {
  title: "For HR Teams",
  description:
    "Hire, onboard, and protect candidate data at speed: draft, redact, sign, and share onboarding paperwork in one tab, with a record of who saw what.",
};

export default function ForHrPage() {
  return <UseCasePage data={HR_DATA} />;
}
