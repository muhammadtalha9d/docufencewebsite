import type { FaqItem } from "@/components/faq-accordion";

// String keys (not component references) so this data can cross the
// server/client boundary — function components aren't serializable props.
export type IconName =
  | "git-branch"
  | "mail-x"
  | "cloud-off"
  | "copy"
  | "printer"
  | "inbox"
  | "send"
  | "receipt"
  | "share-2"
  | "eye-off"
  | "shield-off"
  | "history"
  | "link-2-off"
  | "smartphone"
  | "layers"
  | "lock"
  | "timer"
  | "infinity";

export type PainPoint = {
  icon: IconName;
  title: string;
  body: string;
};

export type WhyCard = {
  icon: IconName;
  title: string;
  body: string;
};

export type EditStepMock = {
  clauseLabel: string;
  clauseText: string;
  highlight: string;
};

export type RedactStepMock = {
  docTitle: string;
  reviewerInitials: string;
  reviewerRole: string;
  note: string;
};

export type SignStepMock = {
  fileName: string;
  signer1Name: string;
  signer2Name: string;
};

export type ShareStepMock = {
  fileName: string;
  activity: { label: string; time: string }[];
};

export type WorkflowStep = {
  label: string;
  icon: "pen-line" | "eye-off" | "pen-tool" | "share-2" | "message-square";
  step: string;
  title: string;
  body: string;
  proof: string;
};

export type UseCaseData = {
  slug: string;
  segmentTag: string;
  headline: [string, string];
  intro: string;
  heroMock: {
    fileName: string;
    toolbarLabels: [string, string];
    clauseLabel: string;
    clauseText: string;
    reviewerInitials: string;
    reviewerRole: string;
    note: string;
  };
  midCtaDocument: string;
  docsHeading: string;
  docsSubcopy: string;
  docList: string[];
  painHeading: string;
  painSubcopy: string;
  painPoints: PainPoint[];
  workflowHeading: [string, string];
  steps: [WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep];
  stepMocks: {
    edit: EditStepMock;
    redact: RedactStepMock;
    sign: SignStepMock;
    share: ShareStepMock;
  };
  whyHeading: string;
  whyCards: [WhyCard, WhyCard, WhyCard];
  securityHeading: string;
  securitySubcopy: string;
  securityPoints: [string, string, string, string];
  faqHeading: string;
  faqs: FaqItem[];
};
