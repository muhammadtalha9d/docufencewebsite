import type { Metadata } from "next";
import { UseCasePage } from "@/components/use-case/use-case-page";
import { PROCUREMENT_DATA } from "./data";

export const metadata: Metadata = {
  title: "For Procurement and Sales Operations",
  description:
    "Accelerate deal cycles without compromising on control: redline, sign, and share commercial agreements in one tab, one file, one record.",
};

export default function ForProcurementPage() {
  return <UseCasePage data={PROCUREMENT_DATA} />;
}
