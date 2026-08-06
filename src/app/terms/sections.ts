import type { LegalSection } from "@/components/legal-doc-page";

export const TERMS_SECTIONS: LegalSection[] = [
    {
        id: "s1",
        number: "01",
        title: "The agreement",
        paragraphs: [
            "These terms apply when you create a DocuFence account or use the service. If you are agreeing on behalf of a company, you confirm you are allowed to bind that company.",
            "If we have signed a separate written agreement with your company, that agreement takes precedence where the two conflict.",
        ],
    },
    {
        id: "s2",
        number: "02",
        title: "Your account",
        paragraphs: [
            "You are responsible for keeping your credentials secure and for activity carried out under your account.",
            "You must tell us promptly if you believe an account has been accessed without permission.",
            "Accounts are for named people. Do not share one login between several users.",
        ],
    },
    {
        id: "s3",
        number: "03",
        title: "Acceptable use",
        paragraphs: [
            "Do not use DocuFence to store or distribute unlawful material, malware, or content you have no right to hold.",
            "Do not attempt to access another customer’s data, probe our infrastructure without written permission, or interfere with the service for other users.",
            "Do not resell or white-label the service without a written agreement with us.",
        ],
    },
    {
        id: "s4",
        number: "04",
        title: "Your content",
        paragraphs: [
            "You own the documents you upload. Uploading them gives us no ownership and no licence beyond what is needed to run the service for you: storing the file, rendering it, and delivering it to the people you share it with.",
            "You are responsible for having the right to upload and share what you upload.",
        ],
    },
    {
        id: "s5",
        number: "05",
        title: "Electronic signatures",
        paragraphs: [
            "Signatures collected through DocuFence are electronic signatures. We record the signer, the time, and the document version signed.",
            "You are responsible for deciding whether an electronic signature is appropriate for a given document in your jurisdiction, and for any formalities your own transaction requires.",
        ],
    },
    {
        id: "s6",
        number: "06",
        title: "Fees and billing",
        paragraphs: [
            "Pricing is agreed with you before your subscription starts. Fees are billed in advance for the period you have chosen.",
            "If a payment fails we will contact you before restricting access. Fees already paid are not refundable except where the law requires it.",
            "We will give at least thirty days notice before any price change affecting your renewal.",
        ],
    },
    {
        id: "s7",
        number: "07",
        title: "Availability and support",
        paragraphs: [
            "We work to keep the service available and will give notice of planned maintenance where we reasonably can.",
            "We do not promise uninterrupted availability unless a separate written service level agreement says otherwise.",
        ],
    },
    {
        id: "s8",
        number: "08",
        title: "Security and privacy",
        paragraphs: [
            "Our security controls are described on the security page, and our handling of personal data is described in the privacy policy. Both form part of this agreement.",
        ],
    },
    {
        id: "s9",
        number: "09",
        title: "Ending the agreement",
        paragraphs: [
            "You can cancel at any time from account settings, effective at the end of your current billing period.",
            "We may suspend or end an account that breaches these terms, and where the breach can be fixed we will give you a reasonable chance to fix it first.",
            "Before your account closes you can export every document. After closure, deletion follows the timeline in the privacy policy.",
        ],
    },
    {
        id: "s10",
        number: "10",
        title: "Liability",
        paragraphs: [
            "Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be limited.",
            "Subject to that, neither party is liable for indirect or consequential loss, and our total liability in any twelve month period is limited to the fees you paid us in that period.",
        ],
    },
    {
        id: "s11",
        number: "11",
        title: "Optional third-party integrations",
        paragraphs: [
            "The Google Drive and Google Contacts integrations are optional conveniences and are not required to use DocuFence.",
            "Your use of Google services and your Google Account is governed by your own agreement with Google. DocuFence is not a party to it, and nothing here changes it.",
        ],
    },
    {
        id: "s12",
        number: "12",
        title: "What you confirm when you use them",
        paragraphs: [
            "By using an integration you authorise us to access the specific data you select, for the purposes set out in the privacy policy, and you confirm that you are the authorised holder of the Google Account you connect.",
            "You confirm that you have the right to import and process the document you select, and that doing so infringes nobody’s intellectual property, confidentiality or privacy.",
            "You confirm that you have a lawful basis for giving us the email addresses you import, and for us to send those people the invitations you instruct us to send.",
            "You remain responsible for the recipients you choose. We send invitations only on your instruction, and you must not use DocuFence for unsolicited, bulk or unlawful messages.",
        ],
    },
    {
        id: "s13",
        number: "13",
        title: "Limits of the integrations",
        paragraphs: [
            "Google Drive access is import-only. We never write to, change or delete anything in your Drive, and DocuFence edits are not synced back.",
            "Google Contacts access is read-only. We never create, change or delete your contacts.",
        ],
    },
    {
        id: "s14",
        number: "14",
        title: "Availability and changes to integrations",
        paragraphs: [
            "These features depend on interfaces operated by Google, which Google may change, restrict or discontinue at any time without notice to us.",
            "We may therefore modify, suspend or withdraw an integration, including where Google’s policies or the law require it. We will give reasonable notice where practical.",
            "Withdrawing an integration does not affect documents you already imported.",
        ],
    },
    {
        id: "s15",
        number: "15",
        title: "Disconnecting a Google Account",
        paragraphs: [
            "You can disconnect your Google Account from DocuFence at any time from your Google Account permissions page.",
            "This disables the feature, but does not close your DocuFence account, delete imported documents, or withdraw signature requests already sent.",
        ],
    },
    {
        id: "s16",
        number: "16",
        title: "Integration disclaimer",
        paragraphs: [
            "These integrations are provided as is and as available. To the fullest extent the law allows, DocuFence is not liable for the availability, accuracy or performance of Google’s services, or for any interruption, delay or data loss originating from them.",
            "This does not limit liability that cannot lawfully be limited, and does not affect our own obligations under these terms or the privacy policy.",
        ],
    },
    {
        id: "s17",
        number: "17",
        title: "Changes to these terms",
        paragraphs: [
            "We may update these terms. If a change materially affects you, we will give notice by email at least thirty days before it takes effect, and you may cancel before then if you disagree.",
        ],
    },
    {
        id: "s18",
        number: "18",
        title: "Governing law and contact",
        paragraphs: [
            "These terms are governed by the laws of England and Wales, and the courts of England and Wales have jurisdiction, unless a separate signed agreement says otherwise.",
            "Questions go to legal@docufence.com.",
        ],
    },
];