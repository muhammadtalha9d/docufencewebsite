"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

const COLUMNS: {
    title: string;
    links: { href: string; label: string; eventName: string }[];
}[] = [
    {
        title: "PRODUCT",
        links: [
            { href: "/product#editing", label: "Editing", eventName: "footer_product_editing_press" },
            { href: "/product#editing", label: "Annotation", eventName: "footer_product_annotation_press" },
            { href: "/product#signatures", label: "Signatures", eventName: "footer_product_signatures_press" },
            { href: "/product#sharing", label: "Secure sharing", eventName: "footer_product_sharing_press" },
        ],
    },
    {
        title: "USE CASES",
        links: [
            { href: "/for-legal", label: "Legal", eventName: "footer_usecase_legal_press" },
            { href: "/for-hr", label: "HR", eventName: "footer_usecase_hr_press" },
            { href: "/for-finance", label: "Finance", eventName: "footer_usecase_finance_press" },
            { href: "/for-operations", label: "Operations", eventName: "footer_usecase_operations_press" },
            { href: "/for-procurement", label: "Procurement", eventName: "footer_usecase_procurement_press" },
        ],
    },
    {
        title: "RESOURCES",
        links: [
            { href: "/resources/blogs", label: "Blogs", eventName: "footer_resources_blogs_press" },
            { href: "/security", label: "Security", eventName: "footer_resources_security_press" },
        ],
    },
    {
        title: "COMPANY",
        links: [
            { href: "https://calendar.app.google/WbdzvM2oayoF9G6X7", label: "Contact", eventName: "footer_company_contact_press" },
            { href: "/privacy", label: "Privacy Policy", eventName: "footer_company_privacy_press" },
            { href: "/terms", label: "Terms and Conditions", eventName: "footer_company_terms_press" },
        ],
    },
];

export function SiteFooter() {
    return (
        <footer className="border-t border-mist/10 bg-ink text-mist-faint">
            <div className="mx-auto grid max-w-[1180px] grid-cols-[1.4fr_repeat(4,1fr)] gap-10 px-10 pb-10 pt-16">
                <div>
                    <Link
                        href="/"
                        className="flex items-center gap-2.5 text-mist cursor-pointer"
                        onClick={() => trackEvent("footer_logo_press")}
                    >
                        <img src="/Fav-Icon.png" alt="" className="h-8 w-auto" />
                        <span className="text-xl">DocuFence</span>
                    </Link>
                    <p className="mt-4 max-w-[22em] text-sm leading-[1.6]">
                        The secure document workspace. Edit, sign, and share in one place.
                    </p>
                </div>

                {COLUMNS.map((col) => (
                    <div key={col.title} className="grid gap-[11px] text-sm">
                        <div className="font-mono text-[10px] tracking-[0.14em] text-mist">
                            {col.title}
                        </div>
                        {col.links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-mist-faint hover:text-mist cursor-pointer"
                                onClick={() => trackEvent(link.eventName)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
            <div className="mx-auto max-w-[1180px] px-10 pb-11 text-[13px]">
                © 2026 DocuFence
            </div>
        </footer>
    );
}