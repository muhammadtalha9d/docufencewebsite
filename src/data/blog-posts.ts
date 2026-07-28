import type { BlogPost } from "@/components/blog/types";

export const CATEGORIES = [
  "All",
  "HR & People Ops",
  "Finance & Ops",
  "Security & IT",
  "Legal & Compliance",
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "eliminate-per-envelope-esignature-fees",
    title: "How to Eliminate \"Per-Envelope\" E-Signature Fees for Good",
    category: "Finance & Ops",
    author: "Sarah Jenkins",
    initials: "SJ",
    readTime: "5 min read",
    date: "14 Jul 2026",
    tags: ["eSignatures", "Cost Reduction", "Software Stack"],
    summary:
      "Why pay-per-envelope pricing penalizes growing teams, and how unlimited signatures save thousands a year.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    dek: "Pay-per-envelope pricing was designed for a world where sending a document was rare. Most teams now send constantly, and the meter has become a tax on doing the work.",
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        blocks: [
          {
            type: "p",
            text: "Every finance lead who has renewed an e-signature contract knows the conversation. Usage was higher than forecast, the envelope allowance ran out in month nine, and someone in procurement is now asking why a signature costs money at all.",
          },
          {
            type: "p",
            text: "The awkward part is that the overage is rarely caused by growth in revenue. It is caused by ordinary operational hygiene: a re-send after a typo, a second signer added late, a countersignature that needed its own envelope.",
          },
        ],
      },
      {
        id: "hidden-cost",
        heading: "The Hidden Cost",
        blocks: [
          {
            type: "p",
            text: "The line item on the invoice is the smallest part of the cost. The expensive part is the behaviour the meter creates.",
          },
          {
            type: "list",
            items: [
              {
                title: "Batching.",
                text: "Teams hold documents back to avoid burning envelopes, which pushes execution dates later in the month.",
              },
              {
                title: "Shadow signing.",
                text: "Someone prints, signs, scans, and emails a PDF to avoid the cost, and the audit trail disappears with it.",
              },
              {
                title: "Seat rationing.",
                text: "Only two people hold licences, so every signature routes through them and stalls when they are away.",
              },
            ],
          },
          {
            type: "quote",
            text: "A pricing model that makes your team hesitate before sending a document is not a pricing model. It is a process constraint.",
          },
        ],
      },
      {
        id: "the-math",
        heading: "What Teams Actually Pay",
        blocks: [
          {
            type: "p",
            text: "A 40-person company sending offer letters, vendor agreements, and renewals typically lands between 900 and 1,400 envelopes a year once re-sends are counted. On a metered plan with overage, that is where the surprise lives.",
          },
          {
            type: "table",
            headers: ["Document type", "Per year", "Re-sends"],
            rows: [
              ["Offer letters and HR paperwork", "310", "18%"],
              ["Vendor and supplier agreements", "420", "24%"],
              ["Renewals, notices, and change orders", "260", "31%"],
            ],
          },
          {
            type: "p",
            text: "Nearly a quarter of all sends are corrections. On a metered plan you pay twice for the same agreement, and the second charge buys you nothing.",
          },
        ],
      },
      {
        id: "the-solution",
        heading: "The Solution",
        blocks: [
          {
            type: "p",
            text: "Move signing into the tool where the document already lives, on a plan where sending is unlimited. Three things change immediately.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              {
                title: "No second copy.",
                text: "The signature lands on the file you were already editing, so there is no re-upload and no version to reconcile.",
              },
              {
                title: "Correcting is free.",
                text: "A typo costs a minute, not a billable envelope, so nobody negotiates with the meter before fixing an error.",
              },
              {
                title: "Everyone can send.",
                text: "Signing stops being a licensed privilege, which removes the bottleneck around two people's calendars.",
              },
            ],
          },
        ],
      },
      {
        id: "migrating",
        heading: "Migrating in a Week",
        blocks: [
          {
            type: "p",
            text: "Start with one document family rather than the whole estate. Offer letters and vendor NDAs are ideal: high volume, low variation, and owned by a single team.",
          },
          {
            type: "p",
            text: "Export completed envelopes from the incumbent for the record, point the template at the new workspace, and run both in parallel for a fortnight. Executed agreements stay valid either way, so there is no cliff edge.",
          },
        ],
      },
      {
        id: "what-to-watch",
        heading: "What to Watch For",
        blocks: [
          {
            type: "p",
            text: "Unlimited sending is only worth having if the record is intact. Before you switch, confirm three things in writing: that every signature carries a time stamp and an audit trail, that access can be revoked after a document has been opened, and that your files are never used to train a model.",
          },
          {
            type: "p",
            text: "If a vendor cannot answer those three questions plainly, the envelope price is not the thing that should worry you.",
          },
        ],
      },
    ],
  },
  {
    slug: "redacting-candidate-pii-hr-playbook",
    title: "Redacting Candidate PII: A Data Privacy Playbook for HR Teams",
    category: "HR & People Ops",
    author: "Marcus Vance",
    initials: "MV",
    readTime: "6 min read",
    date: "9 Jul 2026",
    tags: ["HR Tech", "Data Privacy", "Redaction"],
    summary:
      "Essential best practices for masking salary info, SSNs, and bank details before circulating candidate offer letters.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    dek: "A candidate profile touches more hands than almost any other document in the business. Most of what it contains has no reason to be on most of those screens.",
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        blocks: [
          {
            type: "p",
            text: "A single offer letter can carry a national ID number, a home address, a bank account for payroll setup, and a salary figure the hiring manager was never meant to negotiate against. All of it usually rides along in one PDF, forwarded to whoever needs to sign off next.",
          },
          {
            type: "p",
            text: "The fix is not a new policy document. It is making the file itself incapable of over-sharing.",
          },
        ],
      },
      {
        id: "what-to-mask",
        heading: "What Actually Needs Masking",
        blocks: [
          {
            type: "list",
            items: [
              {
                title: "National ID and tax numbers.",
                text: "Needed by payroll, never by a hiring manager approving a start date.",
              },
              {
                title: "Bank and routing details.",
                text: "Belongs to the same narrow group as tax numbers, no wider.",
              },
              {
                title: "Compensation history.",
                text: "Prior salary has no place in a file shared with someone outside the offer decision.",
              },
            ],
          },
          {
            type: "quote",
            text: "If a field isn't needed to make this specific decision, it shouldn't be visible to the person making it.",
          },
        ],
      },
      {
        id: "redaction-vs-covering",
        heading: "Redaction Is Not the Same as Covering",
        blocks: [
          {
            type: "p",
            text: "A black rectangle drawn over text in a PDF viewer does not remove the text underneath. Copy-pasting or extracting the layer still surfaces it. Real redaction deletes the underlying content, not just the pixels on top of it.",
          },
          {
            type: "p",
            text: "That distinction matters most in exactly the documents HR handles most often: PII sits in the text layer, and a visual cover is a false sense of safety.",
          },
        ],
      },
      {
        id: "workflow",
        heading: "Building It Into the Workflow",
        blocks: [
          {
            type: "p",
            text: "Redact once, at the point the file first goes wider than the person who created it, and keep the unredacted original in a place only payroll and the candidate can reach. Every downstream copy, including the one the hiring manager sees, comes from the redacted version by default.",
          },
        ],
      },
    ],
  },
  {
    slug: "static-attachments-it-liability",
    title: "Sent to the Wrong Email? Why Static Attachments Are an IT Liability",
    category: "Security & IT",
    author: "Alex Rivera",
    initials: "AR",
    readTime: "4 min read",
    date: "2 Jul 2026",
    tags: ["Security", "Access Revocation", "Zero-Trust"],
    summary:
      "Why traditional email attachments leak corporate data, and how one-click revocation protects files after the send.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    dek: "The moment an attachment leaves your outbox, every control your company has over that file stops applying. Autocomplete picked the wrong contact, and there is no undo.",
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        blocks: [
          {
            type: "p",
            text: "An attachment is a copy, and a copy has no memory of where it came from. Once it lands in an inbox, it can be forwarded, downloaded, and stored indefinitely, entirely outside any system your IT team can see.",
          },
        ],
      },
      {
        id: "the-gap",
        heading: "The Access Gap",
        blocks: [
          {
            type: "p",
            text: "Most security programs are built around who can get into a system. Almost none of them can answer a simpler question after the fact: who still has this specific file, right now.",
          },
          {
            type: "quote",
            text: "You cannot revoke access to something you already gave away completely.",
          },
        ],
      },
      {
        id: "the-fix",
        heading: "Links, Not Copies",
        blocks: [
          {
            type: "p",
            text: "A shared link keeps the file on your side of the perimeter and grants a view rather than a copy. Turn the link off, and the document stops opening for everyone it was sent to, including the recipient who already opened it once.",
          },
          {
            type: "list",
            items: [
              {
                title: "Wrong recipient.",
                text: "Kill the link the moment you notice, before it is ever opened.",
              },
              {
                title: "Role change.",
                text: "End access the day someone leaves a project, without touching the original file.",
              },
              {
                title: "Time-boxed access.",
                text: "Set an expiry up front so nothing needs to be remembered later.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "curing-tab-chaos-pdf-workflows",
    title: "Curing 'Tab Chaos': How Ops Leaders Streamline Modern PDF Workflows",
    category: "Finance & Ops",
    author: "Sarah Jenkins",
    initials: "SJ",
    readTime: "5 min read",
    date: "24 Jun 2026",
    tags: ["Productivity", "PDF Editing", "Workflow"],
    summary:
      "A look at the hidden hours lost jumping between Word, a PDF editor, a signing tool, and email attachments.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    dek: "A single vendor contract can pass through four different apps before it is fully executed. Every handoff between them is where time, and version control, quietly disappear.",
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        blocks: [
          {
            type: "p",
            text: "Open the PDF, convert it to Word to fix a clause, convert it back, email it for comments, upload it again to a signing tool. None of those steps add value to the document. All of them add time and risk of a stray version.",
          },
        ],
      },
      {
        id: "cost-of-hopping",
        heading: "The Cost of Hopping",
        blocks: [
          {
            type: "p",
            text: "Ops teams rarely notice the cost of tool-switching because no single hop looks expensive. It is the accumulation, five or six switches per document, multiplied across every contract a team touches in a quarter, that adds up to real hours.",
          },
          {
            type: "table",
            headers: ["Handoff", "Typical delay"],
            rows: [
              ["PDF to Word and back", "15 to 40 minutes"],
              ["Email thread for feedback", "1 to 3 days"],
              ["Re-upload to signing tool", "10 to 20 minutes"],
            ],
          },
        ],
      },
      {
        id: "one-file",
        heading: "One File, Start to Finish",
        blocks: [
          {
            type: "p",
            text: "The fix is not a faster converter. It is removing the conversions altogether, editing, commenting, and signing on the same file so nothing needs to be re-exported before it moves to the next step.",
          },
        ],
      },
    ],
  },
  {
    slug: "zero-ai-training-guarantees",
    title: "Zero-AI Training Guarantees: Protecting Proprietary Company Files",
    category: "Legal & Compliance",
    author: "David Chen",
    initials: "DC",
    readTime: "7 min read",
    date: "18 Jun 2026",
    tags: ["AI Privacy", "Compliance", "Enterprise"],
    summary:
      "What happens to your files when they are uploaded to web PDF editors, and why zero-retention policies are non-negotiable.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    dek: "Most free PDF tools are free because the document you upload is the product. Enterprise files deserve a plainer answer than a line buried in a terms-of-service page.",
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        blocks: [
          {
            type: "p",
            text: "Every document a company uploads to a web tool is a decision about where that content goes next. For most consumer-grade PDF editors, the honest answer is that it may be retained and used to improve the underlying models.",
          },
        ],
      },
      {
        id: "what-to-ask",
        heading: "What to Ask a Vendor",
        blocks: [
          {
            type: "list",
            items: [
              {
                title: "Is my content used for training, ever?",
                text: "The answer should be a flat no, not a configurable setting buried in an admin panel.",
              },
              {
                title: "Is this written into the contract?",
                text: "A policy on a marketing page is not the same thing as a term you can enforce.",
              },
              {
                title: "What about extracted text?",
                text: "Text pulled out for search or rendering counts as your content too, and the same guarantee should cover it.",
              },
            ],
          },
        ],
      },
      {
        id: "why-it-matters",
        heading: "Why It Matters More Than It Used To",
        blocks: [
          {
            type: "p",
            text: "Legal and finance documents are exactly the kind of proprietary material that makes a useful training set: precise language, real numbers, real names. That is precisely why the guarantee needs to be explicit rather than assumed.",
          },
          {
            type: "quote",
            text: "A zero-training policy that isn't in the contract is a preference, not a protection.",
          },
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, count = 3): BlogPost[] {
  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug);
  const sameCategory = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, count);
}
