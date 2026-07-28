import type { UseCaseData } from "@/components/use-case/types";

export const HR_DATA: UseCaseData = {
  slug: "for-hr",
  segmentTag: "02 / FOR HR AND PEOPLE OPERATIONS",
  headline: ["Hire, onboard, and protect", "candidate data at speed."],
  intro:
    "HR teams manage a constant flow of sensitive candidate and employee data. One tab to draft, redact, sign, and share onboarding paperwork, with a record of who saw what.",
  heroMock: {
    fileName: "Offer-Letter_Draft.pdf",
    toolbarLabels: ["Edit", "Redact"],
    clauseLabel: "2. Compensation",
    clauseText: "Base salary is payable monthly in arrears, subject to standard deductions.",
    reviewerInitials: "RV",
    reviewerRole: "People lead",
    note: "Black out the bank details before this goes to the hiring manager.",
  },
  midCtaDocument: "Bring a live offer letter. We will run the loop end to end with you.",
  docsHeading: "Documents HR teams run through DocuFence",
  docsSubcopy:
    "Every document below stays inside the team that owns it, from first draft to exit paperwork.",
  docList: [
    "Offer letters and employment contracts",
    "Identity and right-to-work documents",
    "Policy and handbook acknowledgements",
    "Performance and disciplinary records",
    "Salary, benefits, and direct deposit forms",
    "Onboarding and exit paperwork",
  ],
  painHeading: "Where the current stack exposes people data.",
  painSubcopy:
    "Four everyday moments where candidate and employee data slips outside the team that owns it.",
  painPoints: [
    {
      icon: "mail-x",
      title: "Forwarded for good",
      body: "A salary letter forwarded once is out of your hands for good.",
    },
    {
      icon: "cloud-off",
      title: "Drives nobody audits",
      body: "Signed contracts pile up in a shared drive with access nobody reviews.",
    },
    {
      icon: "printer",
      title: "Print, black out, rescan",
      body: "Redacting personal details means printing, blacking out, and rescanning.",
    },
    {
      icon: "inbox",
      title: "Inbox leftovers",
      body: "Candidate documents sit in an inbox long after the hire is done.",
    },
  ],
  workflowHeading: ["The HR workflow loop,", "start to finish, in one tab."],
  steps: [
    {
      label: "Edit",
      icon: "pen-line",
      step: "STEP 01",
      title: "Edit",
      body: "Update start dates, salary figures, and job titles directly on the offer letter PDF without breaking the margins or the layout.",
      proof: "Layout survives the edit",
    },
    {
      label: "Comment & redact",
      icon: "eye-off",
      step: "STEP 02",
      title: "Comment and redact",
      body: "Black out national ID numbers, bank details, and internal compensation notes before circulating a candidate profile for review.",
      proof: "Redactions are burned in, not overlaid",
    },
    {
      label: "Sign",
      icon: "pen-tool",
      step: "STEP 03",
      title: "Sign",
      body: "Send offer letters, handbooks, and direct deposit forms for signature. Candidates sign on a phone with no account and no app.",
      proof: "No account needed to sign",
    },
    {
      label: "Share & govern",
      icon: "share-2",
      step: "STEP 04",
      title: "Share and govern",
      body: "Distribute onboarding packets on links that auto-expire after seven days, and end access instantly if a candidate declines.",
      proof: "Links expire on a date you set",
    },
  ],
  stepMocks: {
    edit: {
      clauseLabel: "3. Start Date and Notice",
      clauseText: "the start date is",
      highlight: "5 May 2026, subject to references",
    },
    redact: {
      docTitle: "Candidate Profile — Confidential",
      reviewerInitials: "CC",
      reviewerRole: "People lead",
      note: "National ID stays redacted in the copy the manager sees.",
    },
    sign: {
      fileName: "OFFER-LETTER.PDF",
      signer1Name: "J. Adeyemi",
      signer2Name: "R. Castellanos",
    },
    share: {
      fileName: "ONBOARDING-PACKET-01",
      activity: [
        { label: "Candidate opened", time: "09:14" },
        { label: "Hiring manager opened", time: "11:02" },
        { label: "Access revoked by you", time: "11:40" },
      ],
    },
  },
  whyHeading: "Why HR teams choose DocuFence",
  whyCards: [
    {
      icon: "shield-off",
      title: "Nothing trains a model",
      body: "Candidate and employee files are never used to train any AI system, ours or anyone else's. It is in the contract, not just the marketing.",
    },
    {
      icon: "smartphone",
      title: "Signing on a phone",
      body: "Candidates sign in the browser with no account and no app, so nothing waits on a download.",
    },
    {
      icon: "link-2-off",
      title: "Recall what you sent",
      body: "Access ends when a role changes or a hire falls through, including after a recipient has opened it.",
    },
  ],
  securityHeading: "Employee data stays inside the team that owns it.",
  securitySubcopy:
    "People data is the easiest thing in a company to overshare by accident. These controls make oversharing a deliberate act rather than a default.",
  securityPoints: [
    "Employee documents are never used to train any AI model.",
    "Per-recipient permissions for view, download, and forward.",
    "Instant revocation when someone changes role or leaves.",
    "An access log you can hand to an internal reviewer.",
  ],
  faqHeading: "Questions HR teams ask",
  faqs: [
    {
      q: "Do candidates need an account to sign an offer?",
      a: "No. They open the link, sign, and are done.",
    },
    {
      q: "Is redaction permanent?",
      a: "Yes. Redacted content is removed from the file, not covered with a black box that can be lifted.",
    },
    {
      q: "Can I limit what a hiring manager sees?",
      a: "Yes. Access is per document and per person, with download and forward controlled separately.",
    },
    {
      q: "Can we set records to expire?",
      a: "Yes. Links can auto-expire on a date or once signing completes.",
    },
  ],
};
