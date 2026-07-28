import type { Metadata } from "next";
import { LegalDocPage } from "@/components/legal-doc-page";
import { TERMS_SECTIONS } from "./sections";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "The agreement between you and DocuFence.",
};

export default function TermsPage() {
  return (
    <LegalDocPage
      eyebrow="TERMS OF SERVICE"
      title="Terms and Conditions"
      intro="The agreement between you and DocuFence. Plain wording, no traps, and nothing here removes a right you have under the law where you live."
      lastUpdated="LAST UPDATED JULY 2026"
      sections={TERMS_SECTIONS}
    />
  );
}
