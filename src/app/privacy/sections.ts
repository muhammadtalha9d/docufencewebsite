export type PrivacySection = {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
};

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: "s1",
    number: "01",
    title: "Who this policy covers",
    paragraphs: [
      "This policy applies to people who use DocuFence, people who visit our website, and people who receive a document through a DocuFence link without holding an account.",
      "If your employer holds the DocuFence account, they control the documents in it. This policy describes how we handle that data on their behalf.",
    ],
  },
  {
    id: "s2",
    number: "02",
    title: "What we collect",
    paragraphs: [
      "Account data: your name, work email, company name, and the plan you are on.",
      "Document data: the files you upload, the edits and comments made on them, and the signatures collected on them.",
      "Usage data: which features are used and when, so we can keep the service working and find faults.",
      "Technical data: IP address, browser type, and device type, held in server logs.",
    ],
  },
  {
    id: "s3",
    number: "03",
    title: "What we never do with your documents",
    paragraphs: [
      "We never use customer documents to train any AI or machine learning model, ours or a third party's.",
      "We never sell customer data, and we never share document contents with advertisers or data brokers.",
      "We do not read your documents. Our staff cannot browse customer files, and access for support is granted only with your explicit request and is logged.",
    ],
  },
  {
    id: "s4",
    number: "04",
    title: "Why we process data",
    paragraphs: [
      "To provide the service you asked for: storing, editing, signing, and sharing documents.",
      "To secure the service: detecting abuse, preventing unauthorised access, and maintaining audit records.",
      "To bill you correctly and to answer support requests.",
      "We do not process your documents for any purpose beyond running the product for you.",
    ],
  },
  {
    id: "s5",
    number: "05",
    title: "How long we keep it",
    paragraphs: [
      "Documents are kept for as long as your account holds them. When you delete a document it is removed from active systems immediately and from backups within thirty days.",
      "If you close your account, you can export everything first. After closure we delete account data within ninety days, apart from records we are required to keep for tax and accounting.",
    ],
  },
  {
    id: "s6",
    number: "06",
    title: "Who we share it with",
    paragraphs: [
      "We use a small number of infrastructure providers to run the product, including cloud hosting, email delivery, and payment processing. Each is bound by contract to process data only on our instructions.",
      "We do not disclose customer documents to anyone else unless we are legally compelled to, and where the law allows it we will tell you before we do.",
    ],
  },
  {
    id: "s7",
    number: "07",
    title: "Where your data is stored",
    paragraphs: [
      "You choose a storage region when you create an account, and your documents stay in that region.",
      "Backups are held in the same region as the primary data.",
    ],
  },
  {
    id: "s8",
    number: "08",
    title: "Your rights",
    paragraphs: [
      "You can access, correct, export, or delete your personal data at any time from account settings, or by writing to us.",
      "You can object to processing, and you can ask us to restrict it. If your employer holds the account, direct the request to them and we will support it.",
      "If you are unhappy with how we handled a request, you can complain to your local data protection authority.",
    ],
  },
  {
    id: "s9",
    number: "09",
    title: "Cookies",
    paragraphs: [
      "We use cookies that are necessary to keep you signed in and to keep the service secure. We use a small amount of first-party analytics to understand which pages are used.",
      "We do not run advertising cookies or third-party tracking pixels on the product.",
    ],
  },
  {
    id: "s10",
    number: "10",
    title: "Changes and contact",
    paragraphs: [
      "If we change this policy in a way that affects you, we will tell you by email before it takes effect.",
      "Questions go to privacy@docufence.com.",
    ],
  },
];
