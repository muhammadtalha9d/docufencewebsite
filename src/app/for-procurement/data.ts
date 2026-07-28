import type { UseCaseData } from "@/components/use-case/types";

export const PROCUREMENT_DATA: UseCaseData = {
  slug: "for-procurement",
  segmentTag: "05 / FOR PROCUREMENT AND SALES OPERATIONS",
  headline: ["Accelerate deal cycles", "without compromising on control."],
  intro:
    "Moving a commercial agreement from first redline to final signature should not mean per-envelope fees or switching between a PDF app and a signing app. One tab, one file, one record.",
  heroMock: {
    fileName: "MSA_Redline_v3.pdf",
    toolbarLabels: ["Edit", "Redline"],
    clauseLabel: "2. Commercial Terms",
    clauseText: "Pricing tiers apply for the initial term and are fixed for twelve months.",
    reviewerInitials: "RV",
    reviewerRole: "Risk review",
    note: "Mask the pricing tiers before this goes to the reseller.",
  },
  midCtaDocument: "Bring a live MSA. We will run the loop end to end with you.",
  docsHeading: "Documents commercial teams run through DocuFence",
  docsSubcopy: "Every document below stays under your control after it is sent, pricing included.",
  docList: [
    "Master services agreements",
    "Statements of work",
    "Vendor and reseller contracts",
    "Pricing schedules and proposals",
    "Security and risk questionnaires",
    "Renewals and change orders",
  ],
  painHeading: "Where the current stack slows a deal.",
  painSubcopy: "Four points where a commercial cycle stalls, or leaks.",
  painPoints: [
    {
      icon: "receipt",
      title: "Envelope caps",
      body: "Envelope caps turn a busy quarter into a budget conversation.",
    },
    {
      icon: "share-2",
      title: "Proposals travel",
      body: "A proposal is forwarded to a competitor and you never know.",
    },
    {
      icon: "git-branch",
      title: "Versions drift",
      body: "Redlines bounce between two apps and the versions drift apart.",
    },
    {
      icon: "mail-x",
      title: "Status lives in email",
      body: "Signature chasing happens in email, so nobody can see real status.",
    },
  ],
  workflowHeading: ["The procurement workflow loop,", "start to finish, in one tab."],
  steps: [
    {
      label: "Edit",
      icon: "pen-line",
      step: "STEP 01",
      title: "Edit",
      body: "Update commercial terms, scope detail, and service levels natively on the contract PDF, without a round trip through another format.",
      proof: "No round trip through Word",
    },
    {
      label: "Comment & redact",
      icon: "eye-off",
      step: "STEP 02",
      title: "Comment and redact",
      body: "Review clauses with internal risk teams, and black out proprietary pricing tiers before a document goes to a third party.",
      proof: "Redactions are burned in, not overlaid",
    },
    {
      label: "Sign",
      icon: "pen-tool",
      step: "STEP 03",
      title: "Sign",
      body: "Send MSAs and SOWs for legally binding signature in one click, with no envelope caps in any plan.",
      proof: "No envelope caps, any plan",
    },
    {
      label: "Share & govern",
      icon: "share-2",
      step: "STEP 04",
      title: "Share and govern",
      body: "Protect proposal links with a password, prevent forwarding, and see engagement as it happens.",
      proof: "Password plus no-forward links",
    },
  ],
  stepMocks: {
    edit: {
      clauseLabel: "4. Fees and Payment",
      clauseText: "invoices are payable within",
      highlight: "thirty (30) days of receipt",
    },
    redact: {
      docTitle: "Schedule 1 — Pricing Tiers",
      reviewerInitials: "CC",
      reviewerRole: "Risk review",
      note: "Tier pricing stays masked in the reseller copy.",
    },
    sign: {
      fileName: "MSA-EXECUTION.PDF",
      signer1Name: "D. Alvarez",
      signer2Name: "K. Ibrahim",
    },
    share: {
      fileName: "PROPOSAL-LINK-118",
      activity: [
        { label: "Prospect opened", time: "09:14" },
        { label: "Reseller opened", time: "11:02" },
        { label: "Access revoked by you", time: "11:40" },
      ],
    },
  },
  whyHeading: "Why commercial teams choose DocuFence",
  whyCards: [
    {
      icon: "infinity",
      title: "No envelope caps",
      body: "Unlimited e-signature sending in every plan, so a busy quarter never becomes a budget conversation.",
    },
    {
      icon: "link-2-off",
      title: "Control after sending",
      body: "Password-protect a proposal, disable forwarding, and revoke it after it has been opened.",
    },
    {
      icon: "timer",
      title: "Shorter cycles",
      body: "Redline, approve, and sign on one file, so nothing waits on a re-upload into another tool.",
    },
  ],
  securityHeading: "Pricing that stays with the parties who agreed it.",
  securitySubcopy:
    "Pricing is the most forwarded document in any company. These controls decide who can pass it on.",
  securityPoints: [
    "Contracts and proposals are never used to train any AI model.",
    "Password-protected links with forwarding disabled.",
    "Instant revocation of a proposal after it has been opened.",
    "A time-stamped record of every view and signature.",
  ],
  faqHeading: "Questions commercial teams ask",
  faqs: [
    {
      q: "Are there limits on how many documents we send for signature?",
      a: "No. Signature sending is unlimited in every plan.",
    },
    {
      q: "Can we password-protect a proposal?",
      a: "Yes, per link, and you can disable forwarding at the same time.",
    },
    {
      q: "Can we see whether a prospect opened the proposal?",
      a: "Yes. Every view is logged with a time stamp.",
    },
    {
      q: "Can we pull a proposal back?",
      a: "Yes. Revoke the link and it stops opening.",
    },
  ],
};
