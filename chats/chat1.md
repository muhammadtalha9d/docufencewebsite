# Hero copy revision for home

_Started 2026-07-27 12:14 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "# Claude Design Prompt: DocuFence Website Rebuild????**How to use this:** don't"
The project currently has no files except possibly dotfiles — a `list_files` on the project root would return nothing else.
Current date is now July 27, 2026
</system-info>

<default aesthetic_system_instructions>
The user has not attached a design system. If they have ALSO not attached references or art direction, and the project is empty, ask your questions with the questions_v2 tool — but do NOT ask about the visual aesthetic (no questions about vibe, colors or palette directions (including color-swatch svg-options questions), typography, mood, or art direction): right after you ask, this app shows a visual-direction picker, and the user's pick reaches you with their answers (as theme instructions or an attached theme/design system). Spend your questions on everything else: audience, purpose, content, structure, scope, interactions, tone of copy. Exception: if the request already states the visual direction (a named design system, brand, or concrete art direction), set show_design_system_picker to false on the questions_v2 call and don't re-ask it.

If no visual direction ever arrives — no theme instructions, no attached theme or design system, no references or other art direction (picker skipped, or no questionnaire so no picker appeared) — you must still ASK what visual aesthetic they want before designing; one focused question is enough. Do NOT just pick your own. Once you have a direction, use this guidance when creating designs:
- Choose a type pairing from web-safe set or Google Fonts. Helvetica is a good choice. Avoid hard-to-read or overly stylized fonts. Use 1-3 fonts only.
- Foreground and background: choose a color tone (warm, cool, neutral, something in-between). Use subtly-toned whites and blacks; avoid saturations above 0.02 for whites.
- Accents: choose 0-2 additional accent colors using oklch. All accents should share same chroma and lightness; vary hue.
- NEVER write out an SVG yourself that's more complicated than a square, circle, diamond, etc.
- For imagery, never hand-draw SVGs; use subtly-striped SVG placeholders instead with monospace explainers for what should be dropped there (e.g. “product shot”)

CRITICAL: ignore default aesthetic entirely if given other aesthetic instructions like reference images, design systems or guidance, or if there are files in the project already.
</default aesthetic_system_instructions>

<pasted_text name="Pasted text (151 lines)">
# Claude Design Prompt: DocuFence Website Rebuild

**How to use this:** don't paste the whole thing at once. A full multi-page Next.js site is too much for one pass and you'll get shallow output on every page. Paste **Part 1 (foundation) + Part 2 (homepage)** first and iterate until the homepage design is right. Then paste Part 1 again as context plus one page section at a time (Part 3, 4, 5...). Part 1 is your reusable context block.

---

## PART 1 — FOUNDATION (paste this at the start of every session)

I'm rebuilding the website for DocuFence, a B2B SaaS product. Build it in **Next.js (App Router) with TypeScript and Tailwind CSS**. SEO is a primary requirement, so use static generation where possible, the Next.js Metadata API for per-page meta and Open Graph tags, semantic HTML with a single H1 per page and logical heading order, next/image for all images, a generated sitemap.xml and robots.txt, and JSON-LD structured data (Organization, plus Article on blog posts and FAQPage where there's an FAQ). Optimize for Core Web Vitals: no layout shift, fast LCP, minimal client-side JS. Use server components by default and only reach for client components where interactivity requires it.

### What DocuFence is

DocuFence is one app where you can open a PDF, edit it, comment on and mark it up, sign it or collect signatures, and share it with access controls. Normally that job is spread across five tools: a PDF editor, Word, email, a separate eSignature tool, and a cloud drive. DocuFence replaces that stack with one place.

The benefit ladder, in this order:
1. **What it is:** one app that handles a document end to end.
2. **What it saves:** time and friction. No converting, re-uploading, or hunting for the right version.
3. **What it protects:** control. You know where the document is, who can see it, and you can shut off access. For people personally responsible if a file leaks, this is the real product.

### Audience

Primary audience is **anyone who handles sensitive documents**: legal teams, HR, finance, and operations/admin. The homepage must be generic and speak to all of them. Lawyers are the deepest and most valuable segment but they get their own page, not the homepage.

### Positioning

Homepage positioning: DocuFence is the secure document workspace for teams that handle sensitive files. Instead of juggling a PDF editor, email threads, and a separate signing tool, you edit, comment, sign, and share in one place, with the encryption and access control that keep every document under your control.

### Two USPs that must appear on every page

1. **No more app-hopping.** One place instead of five tools.
2. **Security and confidentiality.** Encryption, access control, and the ability to revoke access.

### CRITICAL CONSTRAINTS — do not violate these

- **No fabricated social proof.** Do not invent client logos, company names, testimonials, quotes, star ratings, customer counts, or "trusted by X" claims. Do not include placeholder logo walls or testimonial carousels. We have no public customers yet. The design must look complete and premium **without** any social proof at all. This is the single most important constraint.
- **No compliance certification badges or claims.** Do not write SOC 2, ISO 27001, GDPR compliant, CCPA, HIPAA, or "court-admissible" anywhere. We do not hold certifications. Security is communicated by describing **actual controls** instead: encryption in transit and at rest, we never train AI on your documents, granular access control over who can view/download/forward, instant revocation, least-privilege internal access, audit trail of who accessed what, and clear data ownership. Frame it as "security you can point to, not a badge you have to trust."
- **No invented statistics.** No "saves 10 hours a week" or "used by 5,000 teams" unless I supply the number.
- **No em dashes** anywhere in the copy.
- **Placeholder imagery must be clearly neutral.** Use simple abstract shapes, gradients, or product-UI wireframe blocks. Never a fake photo of a person presented as a customer.

### Copy rules

The current site's copy is too complicated and abstract. Fix that:
- Short sentences. Plain words. Aim for something a busy person skims in five seconds and understands.
- Concrete over abstract. "Edit a PDF without breaking the formatting" beats "streamline document workflows."
- No corporate filler: no "unlock," "empower," "seamless," "leverage," "revolutionize," "cutting-edge," "elevate."
- No jargon that only lawyers understand on generic pages (no "matter," "redline," "privilege," "counsel"). Save those for the legal page.
- Every section should answer one question the visitor is actually asking.

### Design direction

Reference: harvey.ai. Take the **design language**, not the structure, because Harvey leans on a video hero, dozens of real client logos, named customer testimonials, and six compliance certifications. We have none of those. Our design has to feel just as premium with far less to show.

What to take from it:
- **Restraint.** Very few elements per screen. Generous whitespace. Nothing cramped or busy.
- **Warm near-black rather than pure black** for dark sections (think #1C1A18 rather than #000000), with a light warm off-white for light sections (not stark #FFFFFF).
- **Editorial typography.** Large, confident headlines with tight leading. A refined sans for UI and body. Consider a serif or high-contrast display face for headlines to feel considered rather than templated. Real typographic hierarchy, not five sizes of the same weight.
- **A muted palette with one restrained accent.** The current site uses a bright purple that reads cheap. Go quieter and more sophisticated. One accent used sparingly for emphasis and CTAs only.
- **Alternating light and dark sections** as pacing, so the dark sections land as punctuation rather than decoration.
- **Subtle motion only.** Gentle fade and rise on scroll. No parallax, no bouncing, no autoplaying carousels.
- **Calm, subtle borders and shadows.** Avoid heavy card shadows and rounded-everything. Precision over friendliness.

What to avoid: the current DocuFence site is text-heavy, visually cheap, and information-dense. Fewer words, more space, stronger hierarchy.

### Site map

- `/` Homepage (generic)
- `/for-legal` Use case: legal teams and law firms (deepest, most detailed)
- `/for-hr` Use case: HR teams
- `/for-finance` Use case: finance teams
- `/for-operations` Use case: operations and admin
- `/security` Security page (important, this is our USP)
- `/product` or feature pages: editing, annotation, signatures, secure sharing
- `/blog` Blog index with category filtering
- `/blog/[slug]` Blog post template (MDX)
- `/pricing` Custom pricing, contact-based, no fixed rates
- `/contact` Book a call / request demo
- `/about`

Primary CTA sitewide: **Sign Up**. Secondary: **Book a Call**. Do not use "Start Free Trial."

---

## PART 2 — HOMEPAGE

Build the homepage. It must work for a cold visitor who has never heard of DocuFence and doesn't know what it does.

**Hero**
- Eyebrow: THE SECURE DOCUMENT WORKSPACE
- H1: Edit, sign, and share your documents in one secure place.
- Subcopy: Stop bouncing between a PDF editor, email, and a separate signing tool. Do it all in one workspace, with the encryption and access control that keep every document confidential and yours.
- CTAs: Sign Up (primary), Book a Call (secondary)
- Visual: a clean product-UI representation showing a PDF being edited and commented on. Use a neutral, generic document, not a legal contract. No fake user avatars with real-sounding names.

**Section 2: Show the product doing the thing.** The single biggest weakness of our current site is that a visitor can't tell what the product actually does. Design a section that walks through the four core actions (edit, comment, sign, share) with a UI representation for each. Build it so a real screen recording or screenshot can drop into each slot later. This section carries the most weight on the page.

**Section 3: Five tools into one.** A clear visual contrast: the old way (PDF editor, Word, email, eSignature tool, cloud drive, with the friction each one adds) collapsing into one DocuFence workspace. Make the mess-to-order contrast do the talking, with minimal copy.

**Section 4: Security, immediately after the promise.** Because the H1 says "secure," the proof has to be high on the page. Lay out the actual controls: encryption in transit and at rest, we never train AI on your documents, control who can view/download/forward, revoke access after sending, audit trail, clear data ownership. Plain language, one line each. Absolutely no certification badges. Include a link to the full `/security` page.

**Section 5: Who it's for.** Four cards linking to the use case pages: Legal, HR, Finance, Operations. One line each describing the documents they handle.

**Section 6: FAQ.** Accordion, with FAQPage JSON-LD. Questions: Do recipients need an account to view or sign? Do you train AI on my documents? What happens if formatting breaks when I import a PDF? Can I revoke access after I've shared something? Does this replace Word? What does it cost?

**Section 7: Closing CTA.** Simple, confident, one line plus the two buttons.

**Footer:** product/features, use cases, resources (blog, security), company, legal. No fake certification badges.

---

## PART 3 — USE CASE PAGE TEMPLATE

Build a reusable use case page template, then generate the four variants. Structure per page:
- Hero with segment-specific headline and subcopy
- The specific documents this audience handles and the specific pain of handling them across five tools
- How the four core actions apply to their work
- Security framed in their terms (for legal: confidentiality and personal liability; for HR: personal employee data; for finance: audit trail and approvals; for operations: routing and version control)
- Segment-relevant FAQ
- CTA

The `/for-legal` page is the most important and should be the most detailed, since paid search and SEO traffic for legal-intent keywords lands here. It's the only page where "redline," "matter," and "confidentiality obligations" language is appropriate.

---

## PART 4 — BLOG

Build the blog for SEO. Requirements:
- MDX-based posts in the repo, no external CMS needed
- `/blog` index with category filtering (categories: PDF editing, redlining and review, secure sharing, signing, legal, HR, finance)
- Post template optimized for reading and for search: clear typographic hierarchy, comfortable measure (65 to 75 characters), auto-generated table of contents from H2s, reading time, related posts
- Article JSON-LD, canonical URLs, per-post Metadata API implementation, Open Graph images
- Every post ends with a short "How DocuFence helps" block
- Generate 2 or 3 sample posts as demonstrations of the template

---

## PART 5 — SECURITY PAGE

This is our most important supporting page because security is the USP and we have no certifications to lean on. Design it so the specificity itself is the credibility.

Cover, in plain language: how data is encrypted in transit and at rest; that we never train AI on customer documents; granular access control (who can view, download, forward); instant revocation after sending; audit trail of access; least-privilege internal access; where data is stored; who owns the data and what happens to documents if the customer leaves.

Frame the whole page around the idea that a customer should be able to explain our security to their own client. No certification badges, no "bank-grade" or "military-grade" puffery, no vague "we take security seriously." Specific and verifiable only.

---

## Also tell me

- Which sections will look weakest once real screenshots and copy replace placeholders
- Where the design will visibly want social proof, so I know what to prioritize producing
- The folder structure and any packages you're adding
</pasted_text>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Design Components">
This project uses Design Components: every design is a single streaming `Name.dc.html` file. The full authoring spec is in your system prompt under "Writing code — Design Components" — follow it. Author and edit `.dc.html` content with the `dc_write`, `dc_html_str_replace`, `dc_js_str_replace`, and `dc_set_props` tools (not `write_file`; `str_replace_edit` works but won't stream); template edits stream into the live preview as you type.
</attached-skill>


<system-reminder>Auto-injected reminder (ignore if not relevant): do not recreate copyrighted or branded UI unless the user's email domain matches that company. Create original designs instead.</system-reminder>

## Assistant

I'll build this as a single high-fidelity homepage design (Part 2) so we can get the design language right before going further.

_[tool: dc_write]_

_[tool: ready_for_verification]_

Homepage design is up (Part 2). Note: I produce the design in HTML here, not a Next.js repo — this is the visual spec you'd hand to build; the SEO/App Router structure is straightforward to implement from it.

Direction: warm off-white #F7F5F2 / warm near-black #1C1A18, Newsreader for headlines against Helvetica for UI, one muted clay accent (#94502F) used only on CTAs and small marks. Section 2 is a tabbed walkthrough with four drop-in slots for screen recordings.

**Weakest once real assets land:** the hero visual (a wireframe reads intentional; a mediocre real screenshot will not) and the four walkthrough slots — they need tight, cropped recordings of a single action, not full-app screenshots. If the product UI is busy, the restraint of the page collapses.

**Where it will want social proof:** immediately after Section 4 (security) and again above the closing CTA. Both currently end on assertion with nothing corroborating. Priority to produce: one named customer quote about confidentiality, then a logo or two. Until then the security grid is doing the trust work alone.

Next: say the word and I'll do the security page or the /for-legal template.

## User

change hero copy for home:
tag: THE UNIFIED SECURE DOCUMENT WORKSPACE

Headline: One secure workspace for all your teams' critical documents. 

Subheadline:.Your daily workflow shouldn't require four different subscriptions and unsafe email chains. DocuFence brings native editing, redlining, e-signatures, and zero-trust sharing into a single secure perimeter - so your team stops losing hours to tool-switching and keeps company data locked down

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Hero copy updated. Swapped the em dash for a comma to keep the no-em-dash rule.

## User

harvey uses these colours 
change font to use harvey's font

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Switched to a single grotesque (Archivo, closest free stand-in for Harvey's Söhne) at medium weight for headlines, and the neutral palette: #FAF9F8 off-white, #1A1A1A near-black, warm greys. The clay accent is gone — CTAs are now solid near-black like the reference.

## User

Found issues — fixing…

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Fixed: above-the-fold content now paints immediately (only below-fold elements are hidden for the reveal), plus a timeout that un-hides anything the observer misses.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

On dark sections: primary CTA is now inverted (light fill, dark text), brand marks are light ink, and the connector line is stronger. The reveal fallback now only triggers if the page never scrolls, so the rise still plays.

## User

okay the website is missing a pop, nothing is standing out. its minimal like harvey but harvey's webiste doesnt look dull

## Assistant

Adding scale contrast and a real focal point: bigger two-tone headline and a full-bleed dark hero panel holding the product mock.

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Where the pop comes from now:

- Hero headline at 88px with a two-tone split (statement in ink, qualifier in grey), full width instead of a cramped half-column
- The product mock now sits in a full-bleed near-black panel with a deep shadow, straddling the boundary into the next section — that dark band is the page's focal point
- Bigger jumps in the type scale (section heads 48–64px against 11px mono eyebrows) so hierarchy reads instantly
- Use-case cards on white with a lift on hover; walkthrough slots taller with a soft shadow

Still no accent color, per the Harvey palette. If you want one spark, I'd put a single restrained hue on the eyebrow marks and link underlines only.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Section is now the 4-stage loop (Collaborate & Prep → Execute → Secure Hand-Off → Govern) with the END-TO-END CONTROL tag and your copy. Two adjustments: the em dash in the headline became a comma, and each stage panel now names a matching recording slot.

Also fixed from the last review: the hero mock's shadow no longer bleeds onto the light section, and the mess-to-order connector spans the full gap with an arrowhead.

## User

below hero can we have a section that talks about why we're better, like before we explain the workflow and how things work

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Added a "Why DocuFence" section between the hero and the workflow: a two-tone positioning statement plus three hairline-divided points (one app instead of five, security you can point to, control that outlives the send). It sets up the argument before the how.

## User

sharing the logo and docufence colours with you

## Assistant

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

Brand colors picked up: cyan #15A8CE, deep navy #0E2433, black/white. (The logo SVG's artwork is an embedded raster that didn't come through, so I'm using a mark placeholder for now.)

_[tool: run_script]_

_[tool: dc_js_str_replace]_

_[tool: grep]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Rebased on the brand palette: deep navy #0E2433 for text and dark sections, cool off-white surfaces, cyan #15A8CE used sparingly as the accent (brand mark, eyebrow dots, active stage indicator, links, one highlight in the mock). CTAs stay solid navy on light, inverted on dark.

Two things I need from you: the logo SVG's artwork is an embedded bitmap that didn't survive the upload, so the mark is still a placeholder square — send a vector or PNG version. And confirm whether the wordmark should be set in Archivo or its own lockup.

## User

the sections sound great, like structurally and copy wise but design wise they're getting lost within each other, i see too much text only no visuals
the text that is highlighted it snot enough for me to actually look

## Assistant

_[tool: read_file]_

_[tool: run_script]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Three changes to break the wall of text:

- **Security is now a dark navy section** with a real UI mock on the left (share settings: view on, download off, forward off, link expires, revoke) next to the six controls as a tighter list with cyan markers. It reads as proof, not prose, and it separates the light sections either side.
- **Why DocuFence** points each get an abstract diagram: five outlines collapsing into one cyan block, nested frames, a severed link.
- **Use-case cards** each carry a small document graphic with a cyan tag, so the row is visual before it's textual.

Pacing is now light → dark hero panel → light → grey → dark → dark security → light → grey FAQ → dark close.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: grep]_

_[tool: dc_html_str_replace]_

_[tool: grep]_

Those hairlines are inside the navy card, so they still read correctly.

_[tool: ready_for_verification]_

Fixed: "Five tools" is now a white section (the five friction chips in outline, the DocuFence card as a solid navy block with a shadow), so it no longer merges with the dark security section below. The connector has its own clear channel and ends in a cyan arrowhead, and the "03" tile is redrawn as a solid line stopped dead by a cyan bar against a dashed, unreachable copy.

## User

can we change the who its for section to look smth like this, i like the editorial look

## Assistant

_[tool: run_script]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

"Who it's for" is now an editorial filmstrip: a dark section with four 620px image panels that peek past the edge, headline and one line set over a bottom gradient, cyan segment label top-left, and arrow buttons to page through. Each panel has a labelled image slot for real photography.

I also moved it above "Five tools" so it doesn't sit dark-on-dark against the security section.

## User

can we add images here stock images to represent ecah audience and also can "legal" "hr" etc be in white pills

## Assistant

_[tool: run_script]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: multi_screenshot]_

_[tool: run_script]_

_[tool: multi_screenshot]_

_[tool: multi_screenshot]_

Topic-matched stock photos are in (contracts for Legal, an office meeting for HR, etc.), desaturated and blended into the navy so the row stays editorial, and the segment labels are now white pills.

_[tool: ready_for_verification]_

Note: these are live placeholder stock URLs, fine for design review but swap them for licensed images before launch. The HR photo shows a person, so keep it framed as generic imagery, never captioned as a customer.

## User

can the subheading be shorter and below the headline (max 2 lines)
can the visuals be improved, use stock images and icons please
also i dont like one app instead of 5 psotioning
these just feel off

## User

can the subheading be shorter and below the headline (max 2 lines)
can the visuals be improved, use stock images and icons please
also i dont like one app instead of 5 psotioning
these just feel off

## User

noo i like this kind of drawing/design, just you need to make it pop, somehow

## Assistant

_[tool: run_script]_

_[tool: multi_screenshot]_

_[tool: run_script]_

_[tool: multi_screenshot]_

Diagrams are back and now do the work: each sits in a full-width navy panel at large scale, cyan solid against white outlines with a soft cyan halo. Photos dropped from this section.

_[tool: ready_for_verification]_

The three tiles now read as one visual system: five outlines collapsing into a solid cyan file, nested frames closing around the file, and the link cut dead before the copy on the far side.

## User

heading in 2 lines please instead of 5

## Assistant

_[tool: dc_html_str_replace]_

_[tool: multi_screenshot]_

At the full 1180px container that lands in two lines; the preview iframe here is narrower, which is why it shows three.

_[tool: ready_for_verification]_

Widened the heading measure so it breaks in two lines instead of five.

## User

can you redo the product page to include all features:
Hero Section
Tag: CAPABILITIES OVERVIEW

Headline: Every document tool your team needs. In one tab.

Subheadline: Replace your PDF editor, e-signature app, redaction software, and secure file transfer links with one unified workspace.

CTA: [ Explore the Platform ]

Section 1: Native PDF Editing & Team Notes
Headline: Edit and annotate without breaking formatting.

Body: Stop converting PDFs back to Word just to fix typos. Edit text, update numbers, swap pages, and re-order layouts directly inside your browser.

Key Benefits:

Layout Protection: Preserve original fonts, margins, and tables automatically.

Inline Team Notes: Tag colleagues, leave threaded feedback, and resolve comments in real time.

Permanent Redaction: Black out SSNs, bank details, and salary figures safely.

Section 2: Unlimited Built-In e-Signatures
Headline: Execute agreements without the e-signature tax.

Body: Sending documents for signature shouldn't come with unpredictable envelope fees. DocuFence includes unlimited legally binding digital signatures in every plan.

Key Benefits:

Zero Envelope Caps: Send as many offer letters and contracts as you need.

In-Tab Transition: Move from document review to signature request in one click.

Legal Compliance: Fully compliant with ESIGN and eIDAS standards.

Section 3: Granular Sharing & Instant Revocation
Headline: Complete control over files after they leave your screen.

Body: Emailed attachments are impossible to track or pull back. DocuFence links give you complete remote control over shared documents.

Key Benefits:

1-Click Revocation: Emailed the wrong person? Kill access instantly, even after the link is opened.

Expiration Timers: Set links to auto-destruct after 24 hours, 7 days, or upon signature completion.

Permission Guardrails: Disable downloading, editing, and screenshots for external viewers.

## Assistant

_[tool: snip]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

New page: **DocuFence Product.dc.html** — hero, a three-item capability index, then the three feature sections, each pairing a product mock with three benefit rows (editor + notes panel, signature request with recipient statuses, link settings with revoke), alternating light / navy / light, closing CTA and footer. Header links back to the homepage.

One copy change you should sign off on: I wrote the third signature benefit as "Signatures are captured to meet ESIGN and eIDAS requirements" rather than "Fully compliant with ESIGN and eIDAS." Your own constraint bars compliance claims, and "fully compliant" is the kind of line legal buyers will ask you to evidence. Tell me if you want the stronger wording back.

## User

security page content:
Page 3: Security & Trust
Hero Section
Tag: DATA PRIVACY & COMPLIANCE

Headline: Security isn't a feature. It's a precondition.

Subheadline: Fast-moving teams won't tolerate security gaps, and IT leaders reject tools that introduce uncertainty. DocuFence is engineered from the ground up to eliminate risk and protect your sensitive data.

Core Security Pillars
Pillar 1: Zero AI Model Training
Your internal financial reports, HR records, and vendor contracts are strictly your property. We maintain a strict zero-data-retention policy—your data is never used to train public LLMs or machine learning algorithms.

Pillar 2: Active Access Governance
Take control of shared data. Set password-protected access rules, auto-expiry dates, and revoke file permissions remotely at any point in the document lifecycle.

Pillar 3: End-to-End Encryption & Audit Trails
Files are protected with AES 256-bit encryption at rest and TLS 1.3 in transit. Detailed audit logs record every view, edit, download, and signature with precise time-stamps.

## Assistant

_[tool: snip]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

Security page is up, no PILLAR 01/02/03 tags — each section leads straight with its headline. Structure: hero, three-item index, zero AI training (dark, with a diagram of the file stopped before the training corpus), access governance (white, access-rules mock), encryption and audit (AES-256 / TLS 1.3 blocks beside a real audit-log table), a "what you can tell your own client" row on data residency, access, and exit, then CTA.

Two copy notes: I swapped the tag to DATA PRIVACY AND GOVERNANCE since "compliance" implies certifications you don't hold, and "strict zero-data-retention policy" is written as a position held with your processors so it reads as verifiable.

## User

on home page the use case section can u chnage heading subheading to:
Built for high-stakes workflows across every department.
Whether you are managing confidential court filings, candidate offer letters, or financial audit packages, DocuFence gives your team one secure perimeter to edit, review, sign, and share.

## Assistant

_[tool: snip]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Updated, with the arrows now aligned to the baseline of the new subheading.

## User

each use case should have a dedicated page with details of how they can use docufence
legal should be first, these should be in a dropdwon menu in nav bar also, and should be linked from home page

## Assistant

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: run_script]_

Now linking them from the homepage nav and cards.

_[tool: run_script]_

_[tool: grep]_

_[tool: run_script]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: multi_screenshot]_

_[tool: multi_screenshot]_

Dropdown works, links resolve.

_[tool: ready_for_verification]_

Four use-case pages built on one template, Legal first and deepest:

- **DocuFence For Legal** — redlining, execution, disclosure under control, closing the matter; confidentiality framed as personal responsibility; 5 FAQs
- **For HR** — redaction of personal data, offer signing, need-to-know sharing, retention
- **For Finance** — approval routing, board pack distribution, audit evidence
- **For Operations** — one current version, vendor signing, access that ends with the contract

Each has: hero, the documents that team handles, where the five-tool stack fails them, the four-stage workflow in their terms, security in their language, segment FAQ, CTA.

Nav now has a Use cases dropdown (Legal, HR, Finance, Operations) on every page, and the homepage filmstrip cards, footer, Product and Security links all point to real pages.

## User

can u create home page hero image like this
produt in action

## User

i want more content in each use case page, ive wriiten it down

## User

i want more content in each use case page, ive wriiten it down

## Assistant

_[tool: run_script]_

_[tool: run_script]_

Adding Procurement to the dropdown across all pages.

_[tool: run_script]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

_[tool: update_todos]_

All five use-case pages rebuilt with your fuller content: numbered segment tag, your headline and intro, the documents that team handles, where the current stack fails them, the **four-stage workflow loop** (Edit / Comment and redact / Sign / Share and govern) with your copy, a "Why X teams choose DocuFence" block, security in their terms, FAQ, and CTA. Procurement and Sales Operations is a new fifth page, added to the nav dropdown and footer.

Five phrases from your copy I changed to stay inside your own constraints — say the word if you want any restored:

- "court-admissible" → "a time-stamped audit trail" (you banned it explicitly)
- "bank-grade encryption" → "AES-256 at rest, TLS 1.3 in transit"
- "100% PII confidentiality" and "cutting onboarding times in half" → concrete statements, no invented figures
- "Start Free Trial" → "Sign Up"
- The "Why X choose" lines are set as statements, not quotation marks, so they don't read as testimonials

Remaining in the todo list: the Product and Security pages still have the older flat "Use cases" nav link rather than the dropdown, the homepage filmstrip needs a fifth Procurement panel, and pricing / contact / about / blog are not built yet.

## User

can docs u handle every week on use case pages look like this

## Assistant

_[tool: run_script]_

_[tool: update_todos]_

Rebuilt the "documents you handle" section on all five use-case pages as the vertical cycling list: small label on the left, a large stack of document types in the middle where the active line is dark navy and the rest fade back, and an "Explore Platform" button on the right. The active line advances every 1.9 seconds.

Not yet checked in the browser — some of the longer labels (for example "NDAs and confidentiality agreements") may wrap at 46px, which would break the rhythm. That plus the remaining items are recorded in the todo list:

1. Procurement link in the Product and Security page navs
2. Fifth Procurement panel in the homepage filmstrip
3. Verify the cycling list renders on all five pages
4. Shorten long document labels to one line each
5. Pricing, contact, about, and blog pages still unbuilt

## User

can you make the use case visually betterm rn it feels too long

## Assistant

_[tool: update_todos]_

Recorded the plan before pausing. The fix for the length problem, when work resumes:

1. Merge the dark "where the stack fails" band and the "why teams choose" block into a single band — they argue the same thing twice
2. Workflow loop as a 2×2 grid instead of four full-width stacked rows, which alone removes roughly a screen of scroll
3. Section padding down from 96px to 72px throughout
4. Shorten the long document labels so each cycling line stays on one line

Also still open: Procurement in the Product and Security navs, a fifth Procurement panel on the homepage filmstrip, and the unbuilt pricing, contact, about, and blog pages.

## User

each use case page should look like a landing page that we can use for ads, and right now CTAs are also missing, hero section should also have an image

## Assistant

_[tool: update_todos]_

Plan recorded before the session pauses. When work resumes, the use-case pages become proper ad landing pages:

**Hero** — split layout, message and both CTAs above the fold on the left, a segment-specific product mock on the right: contract redline for Legal, offer letter for HR, audit pack for Finance, vendor contract for Operations and Procurement.

**CTAs** — a mid-page CTA after the workflow loop and an inline one under the Why band, so no visitor scrolls more than a screen without a way to convert.

**Length** — cut to five sections (hero, documents, workflow loop, security, FAQ plus CTA), Pain and Why merged into one band, the loop as a 2×2 grid, padding down to 72px.

Still open beyond that: Procurement in the Product and Security navs, a fifth Procurement panel on the homepage filmstrip, and pricing, contact, about, and blog.

## User

within legal use case page 
we have multiple use cases as well like there are sub categories how can we add that there, this is only for lawyers for now
but how can we target them

## Assistant

_[tool: update_todos]_

Plan is recorded. My recommendation for legal sub-targeting, in short:

**Two layers, not one.** `/for-legal` becomes a hub with a practice-area selector — Litigation, Corporate and M&A, Real Estate, Employment, IP, In-house counsel — that swaps the documents list and workflow copy in place. Good for organic visitors who arrive not knowing which page they want.

**Then a separate landing page per practice** for the ads, generated from the same template: `/for-legal/litigation`, `/for-legal/corporate`, and so on. Each gets its own H1, document set, pain list, and FAQ matched to that keyword cluster, because ad traffic converts on message match — a litigator searching "redact exhibits" should land on a page whose headline says exhibits, not one that says "legal teams."

The template already supports this: the five current pages are generated from one structure with swapped content, so six practice variants cost little beyond writing the copy.

Everything remaining is in the todo list — landing-page rebuild with hero imagery and mid-page CTAs, length reduction, Procurement nav gaps, and the unbuilt pricing, contact, about, and blog pages.

## User

not separate landing page practice

## Assistant

_[tool: update_todos]_

Understood — one Legal page, practice areas handled by an in-page selector rather than separate pages. Todo updated.

Where things stand: homepage, product, security, and five use-case pages are built and cross-linked. The remaining work is all captured in the list — the landing-page rebuild for use-case pages (hero imagery, mid-page CTAs, shorter structure), the Legal practice-area selector, the Procurement nav gaps, and the unbuilt pricing, contact, about, and blog pages.

## User

please do it

## Assistant

_[tool: run_script]_

## Assistant

_[tool: update_todos]_

## User

please remove this from security page

## User

please remove this from security page

## User

can you also add privacy and terms and conditions page please, only link from footer, also remove about us from footer

## Assistant

_[tool: run_script]_

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Added Privacy Policy and Terms and Conditions pages, each with a sticky contents rail and numbered sections. Footer now links both and About is removed sitewide (13 pages).

## User

Found issues — fixing…

