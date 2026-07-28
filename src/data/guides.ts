export type GuideChapter = {
  title: string;
  paras: string[];
  listTitle: string;
  items: string[];
};

export type Guide = {
  cat: string;
  title: string;
  blurb: string;
  meta: string;
  img: string;
  intro: string;
  chapters: [GuideChapter, GuideChapter, GuideChapter];
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;

export const GUIDES: Guide[] = [
  {
    cat: "LEGAL & COMPLIANCE",
    title: "The Enterprise Contract Lifecycle Blueprint",
    blurb: "From intake request to executed archive, with owners and gates at every hand-off.",
    meta: "3 chapters · 18 min",
    img: unsplash("1589829545856-d10d557cf95f"),
    intro:
      "Most contract delays are not legal problems. They are routing problems: a request with no owner, a redline that lives in an inbox, an executed copy nobody filed. This blueprint sets the gates.",
    chapters: [
      {
        title: "Intake and triage without a queue",
        paras: [
          "A single intake form is the cheapest control you will ever add. It forces the requester to name the counterparty, the value, the deadline, and the template family before legal spends a minute on it.",
          "Triage on two axes only: risk and standardisation. Anything on your own template under a set value threshold should route to a named business approver, not to counsel. Reserve counsel for the non-standard and the material.",
        ],
        listTitle: "CHAPTER 1 CHECKLIST",
        items: [
          "One intake route, with the requester named as the accountable owner.",
          "A value threshold that separates self-serve templates from counsel review.",
          "A defined turnaround target per tier, published to the business.",
          "A standing list of pre-approved fallback positions for common redlines.",
        ],
      },
      {
        title: "Redlining on one live document",
        paras: [
          "Version chaos is created the moment a draft leaves the workspace as an attachment. Keep the document in one place and let comments and edits land on it, so the current state is never in question.",
          "Redact before you circulate, not after. Commercial terms, salary bands, and account details should be permanently masked in the copy that goes to a wider group, rather than trusted to a request not to scroll.",
        ],
        listTitle: "CHAPTER 2 CHECKLIST",
        items: [
          "No attachments in negotiation threads: share a link with view permissions.",
          "Internal comments resolved before the counterparty sees the draft.",
          "Sensitive figures permanently redacted in the circulated version.",
          "A named approver signs off the final language before signature routing.",
        ],
      },
      {
        title: "Execution, archive, and obligations",
        paras: [
          "Signature order matters more than signature tooling. Define whether the counterparty or the executive signs first, and make the routing part of the template rather than a decision someone makes under time pressure.",
          "The archive is the deliverable. An executed agreement is only useful if the audit trail, the effective date, and the renewal window are all recoverable a year later by someone who was not in the deal.",
        ],
        listTitle: "CHAPTER 3 CHECKLIST",
        items: [
          "Signer order fixed in the template, with time-stamped audit trail retained.",
          "Executed copies filed automatically against the counterparty record.",
          "Renewal and notice dates captured at execution, not at renewal.",
          "Access to the executed file revocable if the deal team changes.",
        ],
      },
    ],
  },
  {
    cat: "HR & PEOPLE OPS",
    title: "Remote HR Onboarding & PII Security Playbook",
    blurb: "Collect, mask, and route new-hire paperwork without leaving PII in inboxes.",
    meta: "3 chapters · 15 min",
    img: unsplash("1521737711867-e3b97375f902"),
    intro:
      "A remote hire generates a dozen documents holding identity numbers, bank details, and salary. This playbook keeps that data out of email threads and shared drives from day one.",
    chapters: [
      {
        title: "Mapping what you actually collect",
        paras: [
          "Before tightening the process, list every document a new joiner touches and mark which fields are personally identifiable. Most teams find two or three artefacts carrying data nobody downstream needs.",
          "Then decide who genuinely requires the unredacted version. Payroll needs bank details; the hiring manager does not. That single distinction removes most of your exposure.",
        ],
        listTitle: "CHAPTER 1 CHECKLIST",
        items: [
          "A written inventory of onboarding documents and the PII each contains.",
          "A named recipient list per document, with a default of least access.",
          "Retention windows agreed with legal for each artefact.",
          "A deletion owner for anything held beyond the probation period.",
        ],
      },
      {
        title: "Offer letters and redaction discipline",
        paras: [
          "Offer letters circulate more widely than any other HR document, and they carry the most sensitive number in the company. Mask salary bands and identity numbers in any copy that leaves the people team.",
          "Redaction has to be permanent rather than cosmetic. A black rectangle drawn over text that is still selectable is not a control, and it will be found the first time somebody copies the page.",
        ],
        listTitle: "CHAPTER 2 CHECKLIST",
        items: [
          "Salary, SSN, and bank fields permanently redacted before circulation.",
          "Approvals gathered as comments on the live document, not by reply-all.",
          "Signature routing set to candidate first, then the approving executive.",
          "Countersigned copy shared as a link with download disabled.",
        ],
      },
      {
        title: "Day-one hand-off and access wind-down",
        paras: [
          "Onboarding ends when the record is filed and the working copies are gone. Set expiry on every share link at the point of sending, so cleanup happens without anyone remembering to do it.",
          "For candidates who decline, treat withdrawal as a deletion trigger. Revoking access and clearing drafts closes the loop that most teams leave open indefinitely.",
        ],
        listTitle: "CHAPTER 3 CHECKLIST",
        items: [
          "Auto-expiration set on every candidate-facing link, seven days by default.",
          "Access revoked for declined offers on the same day.",
          "Final signed set filed to the employee record with an audit trail.",
          "Quarterly review of who can still open last quarter's offer letters.",
        ],
      },
    ],
  },
  {
    cat: "FINANCE & OPS",
    title: "The Finance SaaS Stack Consolidation Framework",
    blurb: "Find overlapping document tools, price the real cost, and retire them in one quarter.",
    meta: "3 chapters · 16 min",
    img: unsplash("1554224155-6726b3ff858f"),
    intro:
      "Document work is usually spread across a PDF editor, a word processor, an e-signature portal, and cloud storage. Each renewal looks small. Together they are a line item worth consolidating.",
    chapters: [
      {
        title: "Building the true cost picture",
        paras: [
          "Start with the invoice, then add the parts nobody bills you for: envelope overages, seats bought for one signer, and the hours spent moving a file between four tools.",
          "Count re-sends separately. On metered plans, corrections often account for a fifth of volume, which means you are paying twice for the same agreement and getting nothing for the second charge.",
        ],
        listTitle: "CHAPTER 1 CHECKLIST",
        items: [
          "Every document tool listed with renewal date, seat count, and overage terms.",
          "Annual send volume measured, including re-sends and countersignatures.",
          "Licence utilisation checked against actual active users.",
          "Hidden cost of tool switching estimated per document family.",
        ],
      },
      {
        title: "Choosing the consolidation target",
        paras: [
          "The winning tool is the one where the document already lives. Editing, comments, signature, and sharing on one file removes the export step that creates every version conflict.",
          "Judge candidates on the record they produce rather than the feature list. Time-stamped audit trails, revocable access, and a written zero-retention position matter more than another annotation type.",
        ],
        listTitle: "CHAPTER 2 CHECKLIST",
        items: [
          "Unlimited sending confirmed in writing, with no envelope meter.",
          "Audit trail exportable for every executed document.",
          "Access revocation and link expiry available post-send.",
          "Zero AI training and data retention position confirmed by the vendor.",
        ],
      },
      {
        title: "Migrating one document family at a time",
        paras: [
          "Do not move the whole estate. Pick one high-volume, low-variation family such as vendor NDAs or offer letters, and run it in parallel with the incumbent for a fortnight.",
          "Export completed envelopes from the outgoing tool for the record before the contract lapses. Executed agreements remain valid either way, so there is no cliff edge to plan around.",
        ],
        listTitle: "CHAPTER 3 CHECKLIST",
        items: [
          "One pilot document family, with a single owning team.",
          "Historic executed records exported before the incumbent renewal date.",
          "Templates rebuilt once, then reused rather than copied per deal.",
          "Savings reported against the pre-migration baseline at 60 days.",
        ],
      },
    ],
  },
  {
    cat: "SECURITY & IT",
    title: "Zero-Trust Document Sharing Standard Operating Procedure",
    blurb: "A written SOP for sending sensitive files with revocable, expiring, permissioned access.",
    meta: "3 chapters · 14 min",
    img: unsplash("1550751827-4bd374c3f58b"),
    intro:
      "An email attachment is a permanent, uncontrolled copy the moment it is delivered. This SOP replaces attachments with links you can still govern after the send.",
    chapters: [
      {
        title: "Retiring the attachment",
        paras: [
          "Static files cannot be recalled, expired, or watermarked. Once a document is delivered as an attachment it exists in every downstream inbox, archive, and personal device that touched it.",
          "Replace the default with a link that carries policy. View-only access, disabled download, and a visible watermark change the risk profile without changing how the recipient works.",
        ],
        listTitle: "CHAPTER 1 CHECKLIST",
        items: [
          "Attachments prohibited for any document classified confidential or above.",
          "Default share mode set to view-only, with download and print disabled.",
          "Confidential watermark applied to externally shared documents.",
          "Recipients addressed individually rather than by distribution list.",
        ],
      },
      {
        title: "Setting the guardrails before you send",
        paras: [
          "Every share decision is three settings: who can open it, for how long, and what they can do with it. Making those explicit at send time is faster than reviewing access later.",
          "Password protection is worth the friction on anything material. Pair it with an expiry window short enough that a forgotten link stops being a liability on its own.",
        ],
        listTitle: "CHAPTER 2 CHECKLIST",
        items: [
          "Expiry window set on every external link, seven days as the default.",
          "Password protection required for financial and personnel documents.",
          "Permissions reviewed at send: view, comment, or sign only.",
          "Internal links scoped to named people, never to anyone with the URL.",
        ],
      },
      {
        title: "Revocation, audit, and incident response",
        paras: [
          "The control that matters most is the one you use after a mistake. Server-side revocation invalidates the token instantly, so a refresh returns nothing rather than a cached copy.",
          "Keep the audit trail as your incident record. Views, signature events, and permission changes with timestamps and IP data turn a vague worry into a factual, closable report.",
        ],
        listTitle: "CHAPTER 3 CHECKLIST",
        items: [
          "One-click revocation documented and tested quarterly.",
          "Audit trail retained for every externally shared document.",
          "A named owner per share, accountable for revoking when the work closes.",
          "Misdirected-send response steps written down before you need them.",
        ],
      },
    ],
  },
];
