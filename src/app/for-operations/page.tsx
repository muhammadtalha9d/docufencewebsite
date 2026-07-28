import type { Metadata } from "next";
import { UseCasePage } from "@/components/use-case/use-case-page";
import { OPERATIONS_DATA } from "./data";

export const metadata: Metadata = {
  title: "For Operations Teams",
  description:
    "Keep leadership aligned and vendor management friction-free: edit, review, sign, and share in one tab, with a record of every open.",
};

export default function ForOperationsPage() {
  return <UseCasePage data={OPERATIONS_DATA} />;
}
