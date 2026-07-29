import Link from "next/link";

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "PRODUCT",
    links: [
      { href: "/product#editing", label: "Editing" },
      { href: "/product#editing", label: "Annotation" },
      { href: "/product#signatures", label: "Signatures" },
      { href: "/product#sharing", label: "Secure sharing" },
    ],
  },
  {
    title: "USE CASES",
    links: [
      { href: "/for-legal", label: "Legal" },
      { href: "/for-hr", label: "HR" },
      { href: "/for-finance", label: "Finance" },
      { href: "/for-operations", label: "Operations" },
      { href: "/for-procurement", label: "Procurement" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { href: "/resources/blogs", label: "Blogs" },
        { href: "/security", label: "Security" },
      // { href: "/resources/guides", label: "Guides" },

      // { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { href: "https://calendar.app.google/WbdzvM2oayoF9G6X7", label: "Contact" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms and Conditions" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-mist/10 bg-ink text-mist-faint">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[1.4fr_repeat(4,1fr)] gap-10 px-10 pb-10 pt-16">
        <div>
          <div className="flex items-center gap-2.5 text-mist">
              <img src="fav-icon.png" alt="" className="h-8 w-auto"/>
            <span className="text-xl">DocuFence</span>
          </div>
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
              <Link key={link.label} href={link.href} className="text-mist-faint">
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
