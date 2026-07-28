import type { Metadata } from "next";
import { Homepage } from "@/components/homepage/homepage";

export const metadata: Metadata = {
  title: "DocuFence — The Secure Document Workspace",
  description:
    "One secure workspace for all your teams' critical documents. Edit, sign, and share without losing control, with encryption, access control, and instant revocation built in.",
};

export default function Home() {
  return <Homepage />;
}
