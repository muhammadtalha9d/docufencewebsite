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
  BookOpen,
} from "lucide-react";

const USE_CASES = [
  { href: "/for-legal", label: "Legal", icon: Scale },
  { href: "/for-hr", label: "HR", icon: UsersRound },
  { href: "/for-finance", label: "Finance", icon: LineChart },
  { href: "/for-operations", label: "Operations", icon: Workflow },
  { href: "/for-procurement", label: "Procurement", icon: Handshake },
];

const RESOURCES = [
  {
    href: "/resources/blogs",
    label: "Blogs",
    description: "Latest articles, guides, and industry insights",
    icon: Newspaper,
  },
  // {
  //   href: "/resources/guides",
  //   label: "Guides",
  //   description: "In-depth operational and compliance playbooks",
  //   icon: BookOpen,
  // },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-[10px]">
      <div className="mx-auto flex h-[68px] max-w-[1180px] items-center justify-between gap-7 px-10">
        <Link href="/" className="flex items-center gap-2.5 text-ink">
            <img src="/Fav-icon.png" alt="" className="h-8 w-auto"/>
          <span className="text-[21px] tracking-[-0.01em]">DocuFence</span>
        </Link>

        <nav className="flex min-w-0 items-center gap-6 whitespace-nowrap text-[15px] text-ink-soft">
          <Link href="/product" className="text-ink-soft">
            Product
          </Link>

          <span
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
            className="relative inline-flex cursor-default items-center gap-1.5 text-ink"
          >
            Use cases
            <ChevronDown className="h-3.5 w-3.5" />
            <span
              className="absolute left-[-18px] top-full pt-3.5"
              style={{ display: menuOpen ? "block" : "none" }}
            >
              <span className="grid min-w-[250px] border border-ink/[0.14] bg-white shadow-[0_20px_46px_rgba(14,36,51,0.14)]">
                {USE_CASES.map(({ href, label, icon: Icon }, i) => (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center gap-3 px-[18px] py-3.5 text-ink hover:bg-[#F1F4F5] ${
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

          <Link href="/security" className="text-ink-soft">
            Security
          </Link>
          {/*<Link href="/pricing" className="text-ink-soft">*/}
          {/*  Pricing*/}
          {/*</Link>*/}

          <span
            onMouseEnter={() => setResOpen(true)}
            onMouseLeave={() => setResOpen(false)}
            className="relative inline-flex cursor-default items-center gap-1.5 text-ink-soft"
          >
            Resources
            <ChevronDown className="h-3.5 w-3.5" />
            <span
              className="absolute left-[-18px] top-full pt-3.5"
              style={{ display: resOpen ? "block" : "none" }}
            >
              <span className="grid min-w-[310px] border border-ink/[0.14] bg-white shadow-[0_20px_46px_rgba(14,36,51,0.14)]">
                {RESOURCES.map(({ href, label, description, icon: Icon }, i) => (
                  <Link
                    key={href}
                    href={href}
                    className={`grid gap-[5px] px-[18px] py-[15px] text-ink hover:bg-[#F1F4F5] ${
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

        <div className="flex flex-shrink-0 items-center gap-4 whitespace-nowrap">
          <Link href="https://dev-app.docufence.com/signup" className="text-[15px] text-ink-soft">
            Sign Up
          </Link>
          <Link
            href="https://calendar.app.google/WbdzvM2oayoF9G6X7 "
            className="bg-ink px-5 py-[11px] text-[15px] text-paper hover:bg-black"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
