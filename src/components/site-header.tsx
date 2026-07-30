"use client";

import Link from "next/link";
import { useState } from "react";
import {
    ChevronDown,
    Scale,
    UsersRound,
    LineChart,
    Workflow,
    Handshake,
    Newspaper,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const USE_CASES = [
    { href: "/for-legal", label: "Legal", icon: Scale, eventName: "header_usecase_legal_press" },
    { href: "/for-hr", label: "HR", icon: UsersRound, eventName: "header_usecase_hr_press" },
    { href: "/for-finance", label: "Finance", icon: LineChart, eventName: "header_usecase_finance_press" },
    { href: "/for-operations", label: "Operations", icon: Workflow, eventName: "header_usecase_operations_press" },
    { href: "/for-procurement", label: "Procurement", icon: Handshake, eventName: "header_usecase_procurement_press" },
];

const RESOURCES = [
    {
        href: "/resources/blogs",
        label: "Blogs",
        description: "Latest articles, guides, and industry insights",
        icon: Newspaper,
        eventName: "header_resources_blogs_press",
    },
];

export function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [resOpen, setResOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-[10px]">
            <div className="mx-auto flex h-[68px] max-w-[1180px] items-center justify-between gap-7 px-10">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2.5 text-ink cursor-pointer"
                    onClick={() => trackEvent("header_logo_press")}
                >
                    <img src="/Fav-Icon.png" alt="" className="h-8 w-auto" />
                    <span className="text-[21px] tracking-[-0.01em]">DocuFence</span>
                </Link>

                {/* Navigation Links */}
                <nav className="flex min-w-0 items-center gap-6 whitespace-nowrap text-[15px] text-ink-soft">
                    <Link
                        href="/product"
                        className="text-ink-soft hover:text-ink cursor-pointer"
                        onClick={() => trackEvent("header_nav_product_press")}
                    >
                        Product
                    </Link>

                    {/* Use Cases Dropdown */}
                    <span
                        onMouseEnter={() => setMenuOpen(true)}
                        onMouseLeave={() => setMenuOpen(false)}
                        className="relative inline-flex cursor-default items-center gap-1.5 text-ink py-5"
                    >
                        Use cases
                        <ChevronDown className="h-3.5 w-3.5" />
                        <span
                            className="absolute left-[-18px] top-full pt-1"
                            style={{ display: menuOpen ? "block" : "none" }}
                        >
                            <span className="grid min-w-[250px] border border-ink/[0.14] bg-white shadow-[0_20px_46px_rgba(14,36,51,0.14)]">
                                {USE_CASES.map(({ href, label, icon: Icon, eventName }, i) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={() => trackEvent(eventName)}
                                        className={`flex items-center gap-3 px-[18px] py-3.5 text-ink hover:bg-[#F1F4F5] cursor-pointer ${
                                            i < USE_CASES.length - 1 ? "border-b border-ink/[0.08]" : ""
                                        }`}
                                    >
                                        <Icon className="h-4 w-4 text-accent" />
                                        {label}
                                    </Link>
                                ))}
                            </span>
                        </span>
                    </span>

                    <Link
                        href="/security"
                        className="text-ink-soft hover:text-ink cursor-pointer"
                        onClick={() => trackEvent("header_nav_security_press")}
                    >
                        Security
                    </Link>

                    {/* Resources Dropdown */}
                    <span
                        onMouseEnter={() => setResOpen(true)}
                        onMouseLeave={() => setResOpen(false)}
                        className="relative inline-flex cursor-default items-center gap-1.5 text-ink-soft hover:text-ink py-5"
                    >
                        Resources
                        <ChevronDown className="h-3.5 w-3.5" />
                        <span
                            className="absolute left-[-18px] top-full pt-1"
                            style={{ display: resOpen ? "block" : "none" }}
                        >
                            <span className="grid min-w-[310px] border border-ink/[0.14] bg-white shadow-[0_20px_46px_rgba(14,36,51,0.14)]">
                                {RESOURCES.map(({ href, label, description, icon: Icon, eventName }, i) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={() => trackEvent(eventName)}
                                        className={`grid gap-[5px] px-[18px] py-[15px] text-ink hover:bg-[#F1F4F5] cursor-pointer ${
                                            i < RESOURCES.length - 1 ? "border-b border-ink/[0.08]" : ""
                                        }`}
                                    >
                                        <span className="flex items-center gap-2.5 text-sm">
                                            <Icon className="h-4 w-4 text-accent" />
                                            {label}
                                        </span>
                                        <span className="pl-[26px] text-xs leading-[1.45] text-dropdown-sub">
                                            {description}
                                        </span>
                                    </Link>
                                ))}
                            </span>
                        </span>
                    </span>
                </nav>

                {/* Action Buttons */}
                <div className="flex flex-shrink-0 items-center gap-4 whitespace-nowrap">
                    <Link
                        href="https://dashboard.docufence.com/"
                        className="text-[15px] text-ink-soft hover:text-ink cursor-pointer"
                        onClick={() => trackEvent("header_signup_press")}
                    >
                        Sign Up
                    </Link>
                    <Link
                        href="https://calendar.app.google/WbdzvM2oayoF9G6X7"
                        className="bg-ink px-5 py-[11px] text-[15px] text-paper hover:bg-black cursor-pointer"
                        onClick={() => trackEvent("header_book_a_call_press")}
                    >
                        Book a Call
                    </Link>
                </div>
            </div>
        </header>
    );
}