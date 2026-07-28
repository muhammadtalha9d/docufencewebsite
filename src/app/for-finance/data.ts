import type { UseCaseData } from "@/components/use-case/types";

export const FINANCE_DATA: UseCaseData = {
  slug: "for-finance",
  segmentTag: "03 / FOR FINANCE AND ACCOUNTING",
  headline: ["Distribute reports and audit packages", "with absolute privacy."],
  intro:
    "Finance directors need strict control over who sees internal numbers. One tab to prepare, approve, sign, and release a pack, with a time-stamped record of every open.",
  heroMock: {
    fileName: "Audit-Pack_Q3.pdf",
    toolbarLabels: ["Edit", "Note"],
    clauseLabel: "3. Revenue Recognition",
    clauseText: "Revenue is recognised on delivery, with deferred balances disclosed in note 7.",
    reviewerInitials: "RV",
    reviewerRole: "Controller",
    note: "Auditor gets view-only access until the audit closes.",
  },
  midCtaDocument: "Bring a live audit pack. We will run the loop end to end with you.",
  docsHeading: "Documents finance teams run through DocuFence",
  docsSubcopy: "Every document below carries a time-stamped record of who opened it, and when.",
  docList: [
    "Audit packages and working papers",
    "Invoices and statements",
    "Approval memos and sign-offs",
    "Board packs",
    "Bank and lender documentation",
    "Budgets, forecasts, and tax exports",
  ],
  painHeading: "Where the current stack breaks an audit.",
  painSubcopy: "Four failure points that surface exactly when someone asks you to prove the record.",
  painPoints: [
    {
      icon: "mail-x",
      title: "Approvals in email",
      body: "Approvals live in email, so proving who signed off means digging through threads.",
    },
    {
      icon: "share-2",
      title: "Board packs travel",
      body: "A board pack gets forwarded beyond the people who were meant to see it.",
    },
    {
      icon: "copy",
      title: "Two versions filed",
      body: "Two versions of a statement circulate and the wrong one gets filed.",
    },
    {
      icon: "eye-off",
      title: "No record of access",
      body: "Nobody can say for certain who opened a sensitive file, or when.",
    },
  ],
  workflowHeading: ["The finance workflow loop,", "start to finish, in one tab."],
  steps: [
    {
      label: "Edit",
      icon: "pen-line",
      step: "STEP 01",
      title: "Edit",
      body: "Adjust financial summaries, quarterly tables, and tax exports inside the browser window, on the original file.",
      proof: "Tables keep their formatting",
    },
    {
      label: "Comment & redact",
      icon: "eye-off",
      step: "STEP 02",
      title: "Comment and redact",
      body: "Permanently mask account details, routing numbers, and taxpayer information before anything is shared outside the team.",
      proof: "Redactions are burned in, not overlaid",
    },
    {
      label: "Sign",
      icon: "pen-tool",
      step: "STEP 03",
      title: "Sign",
      body: "Execute filings, audit sign-offs, and board resolutions with built-in signatures, each one time-stamped as it happens.",
      proof: "Every approval is attributable",
    },
    {
      label: "Share & govern",
      icon: "share-2",
      step: "STEP 04",
      title: "Share and govern",
      body: "Give external auditors view-only access with downloads and printing disabled, and end access the moment the audit concludes.",
      proof: "Downloads and printing off by default",
    },
  ],
  stepMocks: {
    edit: {
      clauseLabel: "Note 7 — Deferred Revenue",
      clauseText: "deferred balances are released over",
      highlight: "twelve months from delivery",
    },
    redact: {
      docTitle: "Appendix B — Bank Detail",
      reviewerInitials: "CC",
      reviewerRole: "Controller",
      note: "Account numbers stay masked in the pack the auditor sees.",
    },
    sign: {
      fileName: "BOARD-RESOLUTION.PDF",
      signer1Name: "L. Moreau",
      signer2Name: "T. Nakamura",
    },
    share: {
      fileName: "AUDIT-PACK-Q3",
      activity: [
        { label: "External auditor opened", time: "09:14" },
        { label: "Audit partner opened", time: "11:02" },
        { label: "Access revoked by you", time: "11:40" },
      ],
    },
  },
  whyHeading: "Why finance teams choose DocuFence",
  whyCards: [
    {
      icon: "lock",
      title: "Region-pinned encryption",
      body: "AES-256 at rest and TLS 1.3 in transit, stored in the region you choose at signup.",
    },
    {
      icon: "history",
      title: "A trail for the auditor",
      body: "A complete record of who opened every audit file, and when, exportable on request.",
    },
    {
      icon: "shield-off",
      title: "Nothing trains a model",
      body: "Financial documents are never used to train any AI system, ours or anyone else's.",
    },
  ],
  securityHeading: "A trail you can hand to an auditor.",
  securitySubcopy:
    "Finance work is judged after the fact. These controls mean the record exists before anyone asks for it.",
  securityPoints: [
    "Financial documents are never used to train any AI model.",
    "AES-256 at rest and TLS 1.3 in transit, with region-pinned storage.",
    "Instant revocation of any outstanding link.",
    "Time-stamped logs of every view, edit, download, and signature.",
  ],
  faqHeading: "Questions Finance teams ask",
  faqs: [
    {
      q: "Can we prove who approved something?",
      a: "Yes. Every signature and approval is recorded against the document with a time stamp.",
    },
    {
      q: "Can a board pack be made view-only?",
      a: "Yes. Downloading, printing, and forwarding can each be turned off per recipient.",
    },
    {
      q: "Do we control where data is stored?",
      a: "Yes. You choose the storage region at signup and documents stay there.",
    },
    {
      q: "Can links expire after a meeting?",
      a: "Yes. Set an expiry date, or expire on completion.",
    },
  ],
};
