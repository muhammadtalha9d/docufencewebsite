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
            "We never use customer documents to train any AI or machine learning model, ours or a third party’s.",
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
        title: "Google integrations are optional",
        paragraphs: [
            "DocuFence can connect to your Google Account for two things only: importing a file from Google Drive, and picking recipient email addresses from Google Contacts.",
            "Both features are optional. Every core function, including viewing, editing, signing, storing and sharing documents, works without ever connecting a Google Account.",
            "We never ask for Google access at sign-up, at app launch, or in the background. We ask only at the moment you tap Import from Google Drive or Google Contacts.",
            "Sign-in and consent are handled by Google’s own screens. We never see, receive or store your Google password. You can disconnect at any time at google.com/permissions.",
        ],
    },
    {
        id: "s11",
        number: "11",
        title: "Google Drive: what we access",
        paragraphs: [
            "This feature lets you bring a document already stored in your Drive into DocuFence, so you can view, edit, annotate or sign it. It is a file-import convenience, nothing more.",
            "When the Google Drive app is available, Drive’s own picker opens and returns the one file you select. We request no Google permission at all on this path, and never receive a Google access token.",
            "Otherwise we use the drive.file permission. This is the narrowest Drive permission Google offers: it gives access only to the individual files you personally select in the picker, and to nothing else.",
            "We receive the contents of that one selected file, plus its name, type and size, which are needed to store and display it.",
        ],
    },
    {
        id: "s12",
        number: "12",
        title: "Google Drive: what we do not do",
        paragraphs: [
            "We do not list, browse, search, index or scan your Google Drive, and we do not open any file you did not select.",
            "We do not create, edit, overwrite, rename, move or delete anything in your Drive. The integration is import-only, in one direction.",
            "We do not read your folder structure, sharing settings, comments or revision history.",
            "We keep no background connection to your Drive. Each import is a separate action you start.",
        ],
    },
    {
        id: "s13",
        number: "13",
        title: "Google Drive: how the file is used and stored",
        paragraphs: [
            "An imported file becomes a normal DocuFence document, stored on our servers under the same security, retention and deletion rules as any file you upload from your device.",
            "A temporary copy may sit in the app’s private cache during the import. Other apps cannot read it, and it is cleared automatically.",
            "Deleting the document in DocuFence does not touch the original in your Drive, and edits made in DocuFence are never written back to your Drive.",
        ],
    },
    {
        id: "s14",
        number: "14",
        title: "Google Contacts: what we access",
        paragraphs: [
            "When you send a document for signature or share it by email, you need recipient addresses. Typing them by hand is slow and a typo can send a confidential document to the wrong person, so we let you pick from your own contacts instead.",
            "We use the contacts.readonly permission and read two fields only: the contact’s name and email address.",
            "Contacts without an email address are not shown, since they cannot receive a document.",
            "The permission is read-only. We cannot create, edit or delete any contact in your Google Account.",
        ],
    },
    {
        id: "s15",
        number: "15",
        title: "Google Contacts: what we do not access",
        paragraphs: [
            "Phone numbers, addresses, birthdays, job titles, organisations, notes, photos, or any other contact field.",
            "Contact groups, labels or starred status.",
            "Your Gmail, your Calendar, or any other Google service.",
        ],
    },
    {
        id: "s16",
        number: "16",
        title: "Google Contacts: how the data is used and stored",
        paragraphs: [
            "The contact list is used for one thing: showing you a list to pick from. It stays in the app’s temporary memory while that screen is open and is discarded when you leave.",
            "The full contact list is never sent to our servers and never saved in our database.",
            "Only the addresses you actually select are kept, in order to send the request you asked us to send, to record who a document went to as part of its audit trail, and to offer those people again under Recently Added.",
            "Contacts you do not select are not stored anywhere, in any form.",
            "We do not build a social graph, do not use your contacts to recruit new users, do not message them unless you ask us to, and never use contact data for advertising or profiling.",
        ],
    },
    {
        id: "s17",
        number: "17",
        title: "Limited use of Google user data",
        paragraphs: [
            "DocuFence’s use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements. Specifically:",
            "We use the data only to provide the features described above.",
            "We do not sell it, and do not transfer it to others except where needed to provide these features, to comply with the law, or in a merger or acquisition where the buyer honours this policy.",
            "We do not use it for advertising of any kind.",
            "We do not let humans read it, except with your explicit agreement, for security investigations, where the law requires it, or once it is anonymised and aggregated.",
            "We do not use it to train AI or machine-learning models.",
        ],
    },
    {
        id: "s18",
        number: "18",
        title: "Your control over Google data",
        paragraphs: [
            "Revoke our access at any time at google.com/permissions. It takes effect immediately, and we simply ask again next time you use the feature.",
            "Revoking does not delete documents you already imported, and does not cancel signature requests already sent.",
            "Delete imported documents inside DocuFence like any other document, and remove saved recipients from the recipient list.",
            "To have everything deleted, contact us at privacy@docufence.com.",
        ],
    },
    {
        id: "s19",
        number: "19",
        title: "Android, iOS and web",
        paragraphs: [
            "These integrations work on the same principles on every platform: the same narrow permissions, the same data, and the same limits on how it is used and stored.",
            "Only the Google consent screen itself differs, because each platform supplies its own Google sign-in component.",
        ],
    },
    {
        id: "s20",
        number: "20",
        title: "Changes and contact",
        paragraphs: [
            "If we change this policy in a way that affects you, we will tell you by email before it takes effect.",
            "Questions go to privacy@docufence.com.",
        ],
    },
];