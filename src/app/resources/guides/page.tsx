import type { Metadata } from "next";
import { GuidesReader } from "@/components/guides/guides-reader";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Tactical implementation playbooks for contract lifecycle, HR onboarding, finance stack consolidation, and zero-trust document sharing.",
};

export default function GuidesPage() {
  return <GuidesReader />;
}
