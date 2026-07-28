import type { UseCaseData } from "@/components/use-case/types";

export const LEGAL_DATA: UseCaseData = {
  slug: "for-legal",
  segmentTag: "01 / FOR LEGAL AND CORPORATE COUNSEL",
  headline: ["Precision document control", "without the tool-hopping."],
  intro:
    "Law firms and in-house legal teams cannot afford version chaos, broken PDF formatting, or security uncertainty. One tab to review, redact, sign, and distribute a matter, with a time-stamped record of every access.",
  heroMock: {
    fileName: "Vendor-Agreement_v4.pdf",
    toolbarLabels: ["Edit", "Redline"],
    clauseLabel: "4. Limitation of Liability",
    clauseText:
      "Neither party is liable for indirect or consequential loss arising out of this agreement.",
    reviewerInitials: "RV",
    reviewerRole: "Reviewer",
    note: "Cap liability at twelve months of fees before we send this for signature.",
  },
  midCtaDocument: "Bring a live contract. We will run the loop end to end with you.",
  docsHeading: "Documents legal teams run through DocuFence",
  docsSubcopy: "Every document below stays inside one perimeter from first draft to disclosure.",
  docList: [
    "Engagement and retainer letters",
    "NDAs and confidentiality agreements",
    "Filings, exhibits, and settlement documents",
    "Matter files and client records",
    "Commercial contracts under negotiation",
    "Discovery and disclosure bundles",
  ],
  painHeading: "Where the current stack fails a matter.",
  painSubcopy:
    "Four failure points that show up on almost every negotiation, and what they cost you when a client asks for the record.",
  painPoints: [
    {
      icon: "git-branch",
      title: "Version drift",
      body: "Redlines split across five email threads and nobody knows which version is current.",
    },
    {
      icon: "mail-x",
      title: "No way back",
      body: "A contract goes out as an attachment and you can never pull it back.",
    },
    {
      icon: "cloud-off",
      title: "Privilege at risk",
      body: "A privileged document sits in a personal cloud drive behind an open link.",
    },
    {
      icon: "copy",
      title: "A second copy",
      body: "A signature request means re-uploading the file to a separate tool, creating a copy you no longer control.",
    },
  ],
  workflowHeading: ["The legal workflow loop,", "start to finish, in one tab."],
  steps: [
    {
      label: "Edit",
      icon: "pen-line",
      step: "STEP 01",
      title: "Edit",
      body: "Modify contract text, reorder pages, and fix layout breaks directly on the PDF. No converting back to Word and no reformatting before it goes out.",
      proof: "Formatting survives the round trip",
    },
    {
      label: "Comment & redact",
      icon: "eye-off",
      step: "STEP 02",
      title: "Comment and redact",
      body: "Collaborate with co-counsel using threaded inline notes, and permanently black out client PII or confidential commercial terms before disclosure.",
      proof: "Redactions are burned in, not overlaid",
    },
    {
      label: "Sign",
      icon: "pen-tool",
      step: "STEP 03",
      title: "Sign",
      body: "Send retainer agreements, settlement documents, and NDAs for legally binding e-signature on the same copy you have been editing.",
      proof: "No envelope fees, no per-send meter",
    },
    {
      label: "Share & govern",
      icon: "share-2",
      step: "STEP 04",
      title: "Share and govern",
      body: "Send discovery files to outside counsel with an expiry date set, watch who opened them, and revoke access the moment a matter resolves.",
      proof: "Revocable after opening",
    },
  ],
  stepMocks: {
    edit: {
      clauseLabel: "7.2 Term and Termination",
      clauseText: "either party may terminate on",
      highlight: "sixty (60) days written notice",
    },
    redact: {
      docTitle: "Schedule 2 — Commercial Terms",
      reviewerInitials: "CC",
      reviewerRole: "Co-counsel",
      note: "Pricing schedule stays redacted for the disclosure bundle.",
    },
    sign: {
      fileName: "RETAINER-AGREEMENT.PDF",
      signer1Name: "A. Whitfield",
      signer2Name: "M. Okafor",
    },
    share: {
      fileName: "DISCOVERY-BUNDLE-03",
      activity: [
        { label: "Outside counsel opened", time: "09:14" },
        { label: "Expert witness opened", time: "11:02" },
        { label: "Access revoked by you", time: "11:40" },
      ],
    },
  },
  whyHeading: "Why legal teams choose DocuFence",
  whyCards: [
    {
      icon: "shield-off",
      title: "Nothing trains a model",
      body: "Client files are never used to train any AI system, ours or anyone else's. It is in the contract, not just the marketing.",
    },
    {
      icon: "history",
      title: "An evidenced record",
      body: "A time-stamped trail of every view, edit, download, and signature, exportable when a client or regulator asks.",
    },
    {
      icon: "link-2-off",
      title: "Recall what you sent",
      body: "Complete revocation rights over anything you have shared, including after a recipient has opened it.",
    },
  ],
  securityHeading: "Confidentiality obligations you can evidence.",
  securitySubcopy:
    "You carry personal responsibility for client confidentiality. These are the controls you can point to when a client asks how their file is handled.",
  securityPoints: [
    "Client documents are never used to train any AI model.",
    "AES-256 at rest and TLS 1.3 in transit, with access scoped per recipient.",
    "Instant revocation, including after a document has been opened.",
    "A time-stamped record of every view, edit, download, and signature.",
  ],
  faqHeading: "Questions Legal teams ask",
  faqs: [
    {
      q: "Do counterparties need an account to review or sign?",
      a: "No. They open a link, read the document, mark it up if you allow it, and sign. No signup and no download.",
    },
    {
      q: "Can I keep privileged material out of reach internally?",
      a: "Yes. Access is granted per document and per person, and our own staff cannot browse your files.",
    },
    {
      q: "What happens to version history during a negotiation?",
      a: "Every change is recorded against one file, so there is one current version and a full history rather than eight attachments.",
    },
    {
      q: "Can I revoke a bundle I have already disclosed?",
      a: "Yes. Switch the link off and it stops opening, even for a recipient who has already viewed it.",
    },
    {
      q: "Does this replace our document management system?",
      a: "No. It handles the working life of a document, from drafting through execution and disclosure. Finalised files export cleanly into your DMS.",
    },
  ],
};
