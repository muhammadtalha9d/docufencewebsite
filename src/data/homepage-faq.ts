import type { FaqItem } from "@/components/faq-accordion";

export const HOMEPAGE_FAQ: FaqItem[] = [
  {
    q: "Do recipients need an account to view or sign?",
    a: "No. They open a link, read the document, and sign. No signup, no download.",
  },
  {
    q: "Do you train AI on my documents?",
    a: "No. Your files are never used to train any model. They are yours and they stay yours.",
  },
  {
    q: "What happens if formatting breaks when I import a PDF?",
    a: "It should not. You edit the PDF as it is instead of converting it to another format and back, so the layout stays where you put it.",
  },
  {
    q: "Can I revoke access after I have shared something?",
    a: "Yes. Turn a link off and it stops working, even for people who already opened it.",
  },
  {
    q: "Does this replace Word?",
    a: "For documents you send out, usually yes. Edit, mark up, sign, and share without leaving the file. For long-form drafting from scratch, keep writing where you like and bring the file in.",
  },
  {
    q: "What does it cost?",
    a: "Pricing depends on team size and how you work. Book a call and we will quote you.",
  },
];
