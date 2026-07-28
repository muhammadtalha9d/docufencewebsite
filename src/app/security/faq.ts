import type { FaqItem } from "@/components/faq-accordion";

export const SECURITY_FAQ: FaqItem[] = [
  {
    q: "How does DocuFence handle data privacy and AI model training?",
    a: "We maintain a strict zero-data-retention policy. Your documents, extracted text, and user inputs are strictly processed to render your workspace and are never exposed to external AI training pipelines.",
  },
  {
    q: "Where is customer data hosted?",
    a: "DocuFence is hosted on enterprise-grade AWS infrastructure in secure, SOC 2-certified data centers utilizing isolated network VPCs, automated backups, and AES-256 encryption.",
  },
  {
    q: "Can DocuFence employees read my documents?",
    a: "No. Access to customer data is strictly restricted by system-level role-based access controls (RBAC) and zero-trust operational protocols.",
  },
  {
    q: "How do you enforce link revocation?",
    a: "When you click Revoke Access, our server invalidates the document token instantly. Anyone attempting to open or refresh the link is immediately blocked from viewing or downloading the content.",
  },
];
