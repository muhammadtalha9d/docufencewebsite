import type { UseCaseData } from "@/components/use-case/types";

export const OPERATIONS_DATA: UseCaseData = {
  slug: "for-operations",
  segmentTag: "04 / FOR OPERATIONS AND EXECUTIVE ADMIN",
  headline: ["Keep leadership aligned", "and vendor management friction-free."],
  intro:
    "Operations teams lose hours moving between four subscriptions just to prepare a board deck or execute a vendor contract. One tab for editing, review, signing, and sharing, with a record of every open.",
  heroMock: {
    fileName: "Vendor-Contract_2026.pdf",
    toolbarLabels: ["Edit", "Comment"],
    clauseLabel: "5. Term and Renewal",
    clauseText:
      "This agreement renews annually unless notice is given sixty days before expiry.",
    reviewerInitials: "RV",
    reviewerRole: "Ops lead",
    note: "Set the link to expire on the renewal date.",
  },
  midCtaDocument: "Bring a live vendor contract. We will run the loop end to end with you.",
  docsHeading: "Documents operations teams run through DocuFence",
  docsSubcopy: "Every document below stays on one link, however many hands it passes through.",
  docList: [
    "Vendor and supplier contracts",
    "Policies and standard procedures",
    "Insurance certificates",
    "Renewals and notice letters",
    "Executive presentations and briefs",
    "Facility and service agreements",
  ],
  painHeading: "Where the current stack loses the thread.",
  painSubcopy: "Four ways an operational document drifts once it leaves your desk.",
  painPoints: [
    {
      icon: "copy",
      title: "Five copies, no match",
      body: "Five people hold five copies of the same policy and none of them match.",
    },
    {
      icon: "cloud-off",
      title: "Deadlines in an inbox",
      body: "A renewal deadline passes because the form sat in someone's inbox.",
    },
    {
      icon: "link-2-off",
      title: "Access outlives the deal",
      body: "A vendor keeps access to a document long after the contract ends.",
    },
    {
      icon: "send",
      title: "Chasing in a third tool",
      body: "Chasing a signature means re-sending the file through a third tool.",
    },
  ],
  workflowHeading: ["The operations workflow loop,", "start to finish, in one tab."],
  steps: [
    {
      label: "Edit",
      icon: "pen-line",
      step: "STEP 01",
      title: "Edit",
      body: "Fix last-minute page order, formatting, and typos on executive presentations and operational briefs, on the original file.",
      proof: "No re-export before it goes out",
    },
    {
      label: "Comment & review",
      icon: "message-square",
      step: "STEP 02",
      title: "Comment and review",
      body: "Tag leadership for inline feedback, resolve review comments, and keep the discussion on the document instead of in a thread.",
      proof: "Feedback stays on the file",
    },
    {
      label: "Sign",
      icon: "pen-tool",
      step: "STEP 03",
      title: "Sign",
      body: "Execute vendor agreements, leases, and service contracts with unlimited built-in signatures.",
      proof: "Unlimited signatures, every plan",
    },
    {
      label: "Share & govern",
      icon: "share-2",
      step: "STEP 04",
      title: "Share and govern",
      body: "Track exactly who opened, edited, or signed with time-stamped activity logs, and revoke access when a contract ends.",
      proof: "Access ends with the contract",
    },
  ],
  stepMocks: {
    edit: {
      clauseLabel: "3. Service Levels",
      clauseText: "response times are",
      highlight: "four (4) hours for priority incidents",
    },
    redact: {
      docTitle: "Appendix A — Supplier Rates",
      reviewerInitials: "CC",
      reviewerRole: "Ops lead",
      note: "Rate card stays masked in the version we circulate internally.",
    },
    sign: {
      fileName: "VENDOR-CONTRACT.PDF",
      signer1Name: "P. Ruiz",
      signer2Name: "S. Beckett",
    },
    share: {
      fileName: "POLICY-PACK-2026",
      activity: [
        { label: "Vendor opened", time: "09:14" },
        { label: "Facilities lead opened", time: "11:02" },
        { label: "Access revoked by you", time: "11:40" },
      ],
    },
  },
  whyHeading: "Why operations teams choose DocuFence",
  whyCards: [
    {
      icon: "layers",
      title: "One subscription",
      body: "One subscription instead of four, and no tab-hopping between editor, inbox, and signing tool.",
    },
    {
      icon: "git-branch",
      title: "One current version",
      body: "One live file, however many hands it passes through, so there is nothing to reconcile later.",
    },
    {
      icon: "link-2-off",
      title: "Access that ends",
      body: "Access ends when the relationship does, on a date you set or in one click.",
    },
  ],
  securityHeading: "Documents that pass through many hands.",
  securitySubcopy:
    "Operations documents pass through more hands than anything else in the business. These controls keep that from becoming permanent exposure.",
  securityPoints: [
    "Vendor and internal documents are never used to train any AI model.",
    "Per-recipient control over view, download, and forward.",
    "Links that expire on a date or on completion.",
    "A full access record for every document you send out.",
  ],
  faqHeading: "Questions Operations teams ask",
  faqs: [
    {
      q: "How do we stop old versions circulating?",
      a: "Everyone works from one link to one file, so there is nothing to reconcile later.",
    },
    {
      q: "Do vendors need an account?",
      a: "No. They open a link and sign.",
    },
    {
      q: "Can access end automatically when a contract does?",
      a: "Yes. Set an expiry date, or revoke manually in one click.",
    },
    {
      q: "Can we see whether a policy was actually opened?",
      a: "Yes. Every view is logged with a time stamp.",
    },
  ],
};
