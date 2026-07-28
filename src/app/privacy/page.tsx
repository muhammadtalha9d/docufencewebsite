import type { Metadata } from "next";
import { LegalDocPage } from "@/components/legal-doc-page";
import { PRIVACY_SECTIONS } from "./sections";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What DocuFence collects, why we collect it, and what we never do with your documents.",
};

export default function PrivacyPage() {
  return (
    <LegalDocPage
      eyebrow="PRIVACY"
      title="Privacy Policy"
      intro="This page explains what we collect, why we collect it, and what we never do with your documents. It is written to be read, not skimmed past."
      lastUpdated="LAST UPDATED JULY 2026"
      sections={PRIVACY_SECTIONS}
    />
  );
}
