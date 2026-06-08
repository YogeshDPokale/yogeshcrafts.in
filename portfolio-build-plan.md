# Portfolio Build Plan — yogeshcrafts.in

**Owner:** Yogesh Pokale
**Site:** `https://yogeshcrafts.in` (apex domain)
**Purpose:** Personal portfolio for job hunting + personal brand
**Audience:** Hiring managers, recruiters, and engineering peers (primary), prospective freelance clients (secondary)
**Target markets:** India and global remote
**Companion site:** `blogs.yogeshcrafts.in` (separate repo, separate plan)

---

## 0. Critical open items — read this first

Before the agent starts building, the following must be resolved or accepted as placeholders:

1. **Projects section is the weak spot.** With company work off-limits and no current side projects, the projects page has only two college-era entries (Dairy Management 2022, Blockchain Banking 2023). **Strong recommendation:** ship at least one weekend side project before launching. See §6.5 for three small project ideas designed to showcase the LLM/auth/full-stack skills that the experience section describes. If launching with only college projects, the agent must structure the page so it doesn't visually feel sparse.
2. **GitHub username** is unknown — resume PDF references GitHub but no handle. Placeholder used: `__GITHUB_USERNAME__`. Replace before build.
3. **Twitter/X handle** — not provided. Plan assumes none; section will be hidden if blank.
4. **Calendly link** — not provided. Plan assumes none; "Book a call" CTA will be omitted.
5. **Phone number** — Yogesh has not confirmed whether to display it. **Default: hidden** (industry best practice; spam exposure). Easy to enable later in data file.
6. **Testimonials** — none provided. Section omitted from v1.
7. **Tagline** — three options provided in §6.1; Yogesh to pick one.
8. **Color palette** — two options provided in §5.2; Yogesh to pick one.
9. **Photo** — avatar for v1, real photo to be swapped in later. Avatar is a clean SVG placeholder with initials "YP".

---

## 1. Tech stack (locked)

| Layer | Choice | Version | Rationale |
|---|---|---|---|
| Framework | Next.js (App Router) | `^15.x` | SSG/SSR, file-based routing, image optimization, metadata API |
| Language | TypeScript | `^5.x` | Type safety, better IDE, mandatory for serious work |
| Styling | Tailwind CSS | `^4.x` | Utility-first, native CSS variables in v4, fast iteration |
| Components | shadcn/ui | latest | Accessible, copy-paste, fully customizable base |
| Motion | Motion (motion/react) | `^11.x` | Successor to Framer Motion; declarative, accessible |
| Theme | next-themes | `^0.4.x` | Dark/light toggle, SSR-safe, system preference |
| Icons | lucide-react | `^0.4xx` | Clean, consistent line icons |
| Tech logos | simple-icons (via `react-icons/si`) | latest | Brand-accurate logos for the tech chip system |
| Fonts | next/font (local + Google) | bundled | Optimized self-hosted font loading, no FOUT |
| Contact form | Formspree REST endpoint | free tier | Static-friendly, no backend needed |
| Analytics | Vercel Analytics | latest | Free, privacy-friendly, zero-config |
| OG images | `@vercel/og` | latest | Dynamic social card generation |
| Linting | ESLint + Prettier | latest | |
| Package manager | pnpm | `^9.x` | Faster, cleaner than npm |
| Deployment | Vercel | n/a | Native Next.js support, free tier, edge network |

**Why not other stacks**, briefly: Astro is the better choice for the blog (see separate plan) but Next.js is correct here for the React ecosystem (Motion, shadcn, the creative-component libraries the portfolio might grow into). Angular was considered and rejected — too heavy for a content/portfolio site, weaker SEO story, and the React component ecosystem is significantly larger for this kind of work.

---

## 2. Information architecture & routes

```
/                       Homepage (single-page with sections, anchor nav)
  #about
  #skills
  #experience
  #projects   (shows 3–4 featured, "View all →" links to /projects)
  #contact
/resume                 Full HTML resume + PDF download button
/projects               All projects, grid layout
/projects/[slug]        Individual project case study (reserved for future)
/api/contact            (Not used — Formspree handles directly)
```

**Rationale for the hybrid:** Recruiters scan in 30 seconds — single-page-scroll homepage lets them see everything fast. But `/resume` and `/projects` need their own crawlable URLs for SEO (someone Googling "Yogesh Pokale resume" should land directly on the resume page).

---

## 3. Global layout

### Top navigation
- **Left:** Wordmark `yogeshcrafts` (no logo image — typeset wordmark in the display font, lowercase, tracking-tight). Links to `/`.
- **Right:** Nav links — `About`, `Experience`, `Projects`, `Resume`, `Blog ↗` (external to `blogs.yogeshcrafts.in`), `Contact`. The blog link gets the small external-arrow icon to signal it leaves the site.
- **Far right:** Theme toggle (sun/moon icon, lucide).
- **Behavior:** Sticky on scroll with a subtle backdrop-blur (`backdrop-filter: blur(8px)`) and a hairline bottom border that appears only after `scrollY > 4`. Mobile: hamburger that opens a full-height sheet (use shadcn `Sheet`).

### Footer
- Three columns on desktop, stacked on mobile:
  1. Wordmark + one-line "Made by Yogesh Pokale, Pune."
  2. Quick links (same as nav, minus theme toggle).
  3. Socials (GitHub, LinkedIn, Email).
- Bottom strip: `© 2026 Yogesh Pokale` + `Built with Next.js, deployed on Vercel`.

---

## 4. Design language

**Direction:** Refined minimalism with editorial typography. Generous whitespace, restrained color, one strong accent, slow and subtle motion. The kind of site that feels intentional, not templated. No animated blobs, no scroll-jacking, no custom cursors.

### 4.1 Typography

Avoid the generic stack (Inter / Roboto / system). Use:

| Role | Font | Source | Weight(s) |
|---|---|---|---|
| Display / headings | **Instrument Serif** | Google Fonts | Regular 400, Italic 400i |
| Body / UI | **Switzer** | Fontshare | 400, 500, 600, 700 |
| Mono / tech labels / code | **JetBrains Mono** | Google Fonts | 400, 500 |

**Why this pairing:** Instrument Serif gives the site an editorial, considered feel (used by sites like Pitch, Linear blog). Switzer is a clean, modern geometric sans that's free and distinctive without being trendy. Together they read "minimal but designed," not "AI template."

**Type scale (Tailwind/CSS variables):**
- `text-xs` 12px — meta labels
- `text-sm` 14px — body small, captions
- `text-base` 16px — body
- `text-lg` 18px — large body
- `text-xl` 20px — section subheadings
- `text-2xl` 24px — h3
- `text-3xl` 30px — h2
- `text-5xl` 48px — h1 mobile
- `text-7xl` 72px — h1 desktop / hero name

**Tracking:** Headings get `tracking-tight` (-0.02em). The wordmark gets `tracking-tighter` (-0.04em).

### 4.2 Color palette — two options, pick one

**Option A — Refined Indigo (safer, classic tech feel):**

```css
/* Light */
--bg:        #FAFAF9;
--surface:   #FFFFFF;
--text:      #0A0A0A;
--muted:     #525252;
--border:    #E5E5E5;
--accent:    #4338CA;   /* indigo-700 */
--accent-fg: #FFFFFF;

/* Dark */
--bg:        #0A0A0A;
--surface:   #141414;
--text:      #FAFAFA;
--muted:     #A3A3A3;
--border:    #262626;
--accent:    #818CF8;   /* indigo-400 */
--accent-fg: #0A0A0A;
```

**Option B — Warm Amber (distinctive, memorable, less common):**

```css
/* Light */
--bg:        #FAFAF7;
--surface:   #FFFFFF;
--text:      #1A1A1A;
--muted:     #57534E;
--border:    #E7E5E4;
--accent:    #B45309;   /* amber-700 */
--accent-fg: #FFFFFF;

/* Dark */
--bg:        #0C0A09;
--surface:   #1C1917;
--text:      #FAFAF9;
--muted:     #A8A29E;
--border:    #292524;
--accent:    #FBBF24;   /* amber-400 */
--accent-fg: #1A1A1A;
```

**My recommendation: Option B** — more memorable, less Vercel/Linear-clone, warmer feel that pairs well with the serif display font. But Option A is the safe pick for a strictly corporate-recruiter audience.

### 4.3 Spacing & rhythm

- Page max-width: `max-w-6xl` (72rem / 1152px) centered, with `px-6` on mobile and `px-8` on desktop.
- Vertical section spacing: `py-24` desktop, `py-16` mobile.
- Component spacing follows the 4px grid (Tailwind default).

### 4.4 Motion principles

- **Page load:** one orchestrated reveal — hero text staggers in over ~600ms with `ease-out`. Each subsequent section reveals on scroll-into-view (10% threshold) with a 20px translateY + opacity fade, 400ms duration. Use `Motion`'s `useInView` hook.
- **Hover:** subtle. Links underline-grow (left-to-right) instead of color change. Buttons get a tiny `translateY(-1px)` on hover.
- **Theme switch:** color tokens animate via `transition: background-color 300ms ease, color 300ms ease` on `:root`.
- **No:** parallax, scroll-jacking, sticky-pinned full-screen sections, autoplaying anything.
- **Respect `prefers-reduced-motion`** — disable all transform animations, keep only opacity fades.

---

## 5. Tech chip system

A single `<TechChip name="..." />` component that renders consistently across all projects, skills, and experience sections.

**Behavior:**
- Renders brand icon (from `react-icons/si` — Simple Icons) + label.
- Background uses the brand color at low opacity (e.g., 12% in light, 18% in dark) for the chip fill.
- Border at the brand color at higher opacity (~30%).
- Text in the brand color (light theme) or a lightened brand color (dark theme).
- Falls back to neutral gray if the tech isn't in the registry.

**Tech registry (`src/data/tech-registry.ts`):**

```ts
export const TECH = {
  dotnet:     { label: ".NET",         color: "#512BD4", icon: "SiDotnet" },
  csharp:     { label: "C#",           color: "#239120", icon: "SiCsharp" },
  aspnet:     { label: "ASP.NET",      color: "#512BD4", icon: "SiDotnet" },
  angular:    { label: "Angular",      color: "#DD0031", icon: "SiAngular" },
  typescript: { label: "TypeScript",   color: "#3178C6", icon: "SiTypescript" },
  javascript: { label: "JavaScript",   color: "#F7DF1E", icon: "SiJavascript" },
  rxjs:       { label: "RxJS",         color: "#B7178C", icon: "SiReactivex" },
  nodejs:     { label: "Node.js",      color: "#5FA04E", icon: "SiNodedotjs" },
  python:     { label: "Python",       color: "#3776AB", icon: "SiPython" },
  mssql:      { label: "MS SQL",       color: "#CC2927", icon: "SiMicrosoftsqlserver" },
  mysql:      { label: "MySQL",        color: "#4479A1", icon: "SiMysql" },
  postgres:   { label: "PostgreSQL",   color: "#4169E1", icon: "SiPostgresql" },
  azure:      { label: "Azure",        color: "#0078D4", icon: "SiMicrosoftazure" },
  azureopenai:{ label: "Azure OpenAI", color: "#0078D4", icon: "SiMicrosoftazure" },
  gcp:        { label: "GCP",          color: "#4285F4", icon: "SiGooglecloud" },
  vertexai:   { label: "Vertex AI",    color: "#4285F4", icon: "SiGooglecloud" },
  anthropic:  { label: "Claude",       color: "#D97757", icon: "SiAnthropic" },
  openai:     { label: "OpenAI",       color: "#10A37F", icon: "SiOpenai" },
  mcp:        { label: "MCP",          color: "#000000", icon: null }, // text-only chip
  signalr:    { label: "SignalR",      color: "#512BD4", icon: "SiDotnet" },
  blob:       { label: "Azure Blob",   color: "#0078D4", icon: "SiMicrosoftazure" },
  php:        { label: "PHP",          color: "#777BB4", icon: "SiPhp" },
  solidity:   { label: "Solidity",     color: "#363636", icon: "SiSolidity" },
  truffle:    { label: "Truffle",      color: "#5E464D", icon: null },
  ganache:    { label: "Ganache",      color: "#E4A663", icon: null },
  metamask:   { label: "MetaMask",     color: "#F6851B", icon: "SiMetamask" },
  c:          { label: "C",            color: "#A8B9CC", icon: "SiC" },
  cpp:        { label: "C++",          color: "#00599C", icon: "SiCplusplus" },
  java:       { label: "Java",         color: "#ED8B00", icon: "SiOpenjdk" },
} as const;
```

**Consistency rule:** if .NET appears anywhere on the site, it always renders with `#512BD4`. Same chip color across home, projects page, resume — no exceptions.

---

## 6. Section-by-section spec

### 6.1 Hero (`#top`)

**Layout:** Left-aligned content, generous top padding (`pt-32` desktop). No image in v1 (avatar appears in About). Full-width container.

**Content:**

- **Eyebrow** (small mono caps, muted): `AVAILABLE FOR NEW OPPORTUNITIES` (toggleable in data file)
- **H1** (Instrument Serif, 5xl mobile / 7xl desktop): `Yogesh Pokale`
- **Tagline (h2-style, large)** — Yogesh picks one:
  - **Option 1:** *Full-stack engineer building AI-native products with .NET, Angular, and LLM systems.*
  - **Option 2:** *I build production AI features — from .NET backends to Angular interfaces to multi-provider LLM orchestration.*
  - **Option 3:** *Full-stack developer focused on AI systems, secure APIs, and shipping enterprise products.*
- **Sub-paragraph (body, muted):** *Currently at Unlock Future in Pune, where I work across .NET, Angular, and modern AI infrastructure — building auth systems, LLM services, and security-audited applications.*
- **CTAs (two buttons):**
  - Primary (filled): `View Resume →` links to `/resume`
  - Secondary (outline): `Get in touch` smooth-scrolls to `#contact`

**Motion:** Each block (eyebrow, h1, tagline, sub-paragraph, CTAs) fades + translates up with a 80ms stagger.

### 6.2 About (`#about`)

**Layout:** Two columns desktop (40/60), stacked mobile. Left column: avatar (SVG, 200px circle, neutral background, "YP" initials in display font). Right column: bio text.

**Content (write exactly this, edit if needed):**

> I'm a full-stack developer based in Pune, India, with 2.5+ years of experience building production web applications. I work primarily in the .NET and Angular ecosystem, with a growing focus on AI-native systems — including LLM orchestration, agentic workflows, and Model Context Protocol (MCP) integrations.
>
> At Unlock Future I've shipped authentication systems across multiple production apps, built scalable services that abstract major LLM providers (Azure OpenAI, GCP Vertex AI, Anthropic Claude) behind unified APIs with streaming and reasoning support, and worked alongside external auditing firms to achieve VAPT, GDPR, SOC, and ISO compliance.
>
> I care about systems that are fast, secure, and clear — and the small details that make software feel built rather than assembled.

**Below the bio:** a small horizontal stat strip:

```
2.5+ years    ·    3+ production apps    ·    4 compliance audits    ·    Multi-cloud (Azure, GCP)
```

(In mono font, muted, with center-dot separators.)

### 6.3 Skills (`#skills`)

**Layout:** Categorized groups. Each category is a row with a small uppercase mono label on the left and chips wrapping on the right.

**Categories & skills:**

| Category | Skills (in chip order) |
|---|---|
| AI / LLM | Azure OpenAI, GCP Vertex AI, Claude (Anthropic), MCP, Agentic Workflows, Streaming, Reasoning, System Instruction Design |
| Backend | .NET, C#, ASP.NET Web API, Node.js |
| Frontend | Angular, TypeScript, RxJS, JavaScript |
| Databases | MS SQL, MySQL, PostgreSQL |
| Cloud & Infra | Azure (Blob, App Service), GCP, CI/CD, Deployment |
| Security & Compliance | Authentication systems, VAPT, GDPR, SOC, ISO |
| Earlier exposure | C, C++, Python, Java, PHP, Solidity |

**Note for the agent:** "Agentic Workflows," "Streaming," "Reasoning," "System Instruction Design," "Authentication systems," "VAPT," "GDPR," "SOC," "ISO," "CI/CD," "Deployment" are text-only chips (no logo). All others use the tech registry from §5.

**Security & Compliance category styling:** give this category a subtle visual emphasis — slightly thicker border on the chips, or a tiny shield icon next to the category label. This combo is Yogesh's rarest skill and shouldn't blend in.

### 6.4 Experience (`#experience`)

**Layout:** Vertical timeline. Single column. Each role is a card with:
- Left column (narrow, mono, muted): date range
- Right column: company logo (24px) + company name, role title (h3), location, then 3–4 impact bullets

**Content — Unlock Future (Dec 2023 – Present, Pune, India):**

The agent should render three sub-roles under one company block (since LinkedIn shows them as one continuous engagement):

#### Software Developer — Jun 2025 – Present
- Designed and built a multi-provider LLM orchestration service supporting Azure OpenAI, GCP Vertex AI, and Anthropic Claude behind a unified streaming API.
- Integrated Model Context Protocol (MCP) and reasoning-model support, plus a configurable system-instruction layer for agentic workflows.
- Owned authentication and authorization across multiple production applications (.NET + Angular), including JWT lifecycle, refresh-token flows, and role-based access control.
- Partnered with external auditing firms to achieve VAPT, GDPR, SOC, and ISO compliance across 3+ web applications; remediated security findings end-to-end.

#### Associate Software Developer — Jun 2024 – Jun 2025
- Built and maintained .NET Web APIs and Angular features across multiple production apps.
- Integrated Azure Blob Storage and GCP services into backend pipelines.
- Optimized Angular frontend performance — reduced bundle size, addressed change-detection bottlenecks, improved Core Web Vitals.
- Owned deployment for several internal and client-facing applications.

#### Software Developer Intern — Nov 2023 – May 2024
- Contributed to ASP.NET Web API and Angular projects under senior mentorship.
- Built features end-to-end across the .NET + Angular stack; learned production CI/CD, code review, and release management.

**Tech tags below the company block** (chips): .NET, C#, ASP.NET, Angular, TypeScript, MS SQL, Azure, GCP, Azure OpenAI, Claude, MCP.

### 6.5 Projects (`#projects`)

**Layout:** Grid. Desktop: 2-column. Mobile: 1-column. Each card has title, 1-line description, tech chips, and either a "Live →" link, "GitHub →" link, or both.

**Content (current state):**

1. **Dairy Management System** *(2022)*
   - System to manage daily milk producer records, calculate rates, generate weekly/monthly billing reports.
   - Tech: PHP, JavaScript, MySQL
   - Links: GitHub (placeholder)

2. **Blockchain Banking** *(2023)*
   - Banking interface that stores high-value transactions on a private blockchain, using smart contracts for ledger integrity.
   - Tech: Node.js, Solidity, MySQL, Truffle, Ganache, MetaMask
   - Links: GitHub (placeholder)

**CTA below the grid:** `View all projects →` links to `/projects`.

---

> ### ⚠️ Recommended side projects for Yogesh to build (separate from agent task)
>
> The projects above are old college work. Strongly recommend building one of the following before the site goes live for job applications:
>
> 1. **MCP server for [X]** — pick something useful (e.g., an MCP server for reading PDF metadata, or for a niche API you use). 1–2 weekends. Showcases MCP expertise directly. Open-source on GitHub.
> 2. **Multi-LLM compare tool** — small Next.js app: enter a prompt, see Azure OpenAI / Claude / Gemini responses side by side, with token counts and latency. 1 weekend. Showcases LLM service knowledge. Deploy free on Vercel.
> 3. **Angular + .NET auth starter** — open-source repo with JWT auth, refresh tokens, role-based access, MFA scaffold. 2 weekends. Showcases the auth-systems experience from your bullets. Becomes a GitHub repo recruiters can actually inspect.
>
> Even one of these flips the projects page from "college work" to "actively shipping." The agent's project card structure is data-driven via `src/data/projects.ts` — adding new projects is a single object append; no UI changes needed.

---

### 6.6 Contact (`#contact`)

**Layout:** Two columns desktop, stacked mobile. Left: heading + short prose. Right: contact form.

**Left content:**

> ### Let's talk
>
> I'm open to roles in full-stack development, AI engineering, and platform/backend work — remote-friendly, India-based. Also happy to chat about LLM systems, secure architecture, or anything in between.
>
> **yogesh.d.pokale@gmail.com** *(click-to-copy)*
>
> [LinkedIn] · [GitHub] *(socials as inline icon-links)*

**Right form (via Formspree free tier):**
- Fields: Name, Email, Message
- Submit button: `Send →`
- On submit: Formspree handles delivery; show inline success state `Message sent. I'll reply within 48 hours.`
- Honeypot field for spam.

**Setup note:** Yogesh signs up at formspree.io free tier and pastes the endpoint into `.env.local` as `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.

---

## 7. `/resume` page

**Purpose:** Full HTML resume optimized for screen reading + a PDF download for ATS systems.

**Layout:** Single-column, `max-w-3xl`, generous spacing. Print stylesheet so `Cmd+P` produces a clean PDF if the download is missing.

**Top of page:**
- Name (h1, Instrument Serif), location, email, links to LinkedIn and GitHub.
- Right-aligned button: `Download PDF ↓` linking to `/resume.pdf`.

**Sections** (in order):
1. **Summary** — 3-sentence version of the About bio, tuned for recruiters.
2. **Experience** — same as homepage §6.4 but with longer bullets if desired.
3. **Skills** — same categorization as §6.3.
4. **Education** — M.Sc. Computer Science, Sir Parashurambhau College (Oct 2022 – May 2024). B.Sc. Computer Science, Savitribai Phule Pune University (Jul 2019 – Sep 2022, First Class with A+).
5. **Projects** — at minimum the two college projects, plus any side projects added later.
6. **Awards** — 2019 Intercollegiate Electronics Competition, Rank 1.
7. **Certifications** — section stub, empty for now, will populate later.

**PDF file:** `public/resume.pdf`. Yogesh updates LaTeX separately and replaces this file. The on-page HTML version is the source of truth for what recruiters see; PDF is for download/ATS.

---

## 8. `/projects` page

**Purpose:** Full list of projects (just the same data from `src/data/projects.ts`, no truncation).

**Layout:** Grid (3-column desktop, 2 tablet, 1 mobile). Optional filter pills along the top (`All`, `Web`, `Blockchain`, `AI`) — implementable as client-side filter on the `tags` field. Only render filter bar if there are 4+ projects.

**Each card:** title, year (top right, muted mono), 2–3 line description, tech chips, "Live" / "GitHub" / "Case study" links.

**`/projects/[slug]` route:** scaffold the dynamic route but don't generate pages yet. When a project gains a case study, drop an MDX file into `src/content/projects/<slug>.mdx` and it auto-renders. Each case study has: cover image, problem, approach, stack, role, outcome, screenshots.

---

## 9. SEO, metadata, social cards

- **Per-route metadata** via Next.js `generateMetadata`. Every page exports title, description, og:image.
- **Site title pattern:** `Yogesh Pokale — Full-stack developer` (home). Sub-pages: `Resume · Yogesh Pokale`, `Projects · Yogesh Pokale`.
- **Open Graph images** generated dynamically via `@vercel/og` at `/opengraph-image` (homepage) — text-based card with name + tagline on the chosen color palette, using Instrument Serif.
- **`robots.txt`** allow all, with `Sitemap: https://yogeshcrafts.in/sitemap.xml`.
- **`sitemap.xml`** generated at build time (`next-sitemap` package or Next.js's built-in `sitemap.ts`).
- **JSON-LD** structured data on homepage: `Person` schema with name, jobTitle, sameAs (LinkedIn, GitHub), worksFor, alumniOf. Major SEO win for "Yogesh Pokale" search.
- **Canonical URLs** on every page.
- **Favicon set:** generate from a stylized "Y" wordmark in the accent color, output `favicon.ico`, `apple-touch-icon.png`, `icon.svg`.

---

## 10. Performance budget

Targets (Lighthouse, mobile, 4G simulated):

- **LCP** < 1.5s
- **CLS** < 0.05
- **TBT** < 100ms
- **Total page weight (homepage):** < 250KB JS, < 100KB CSS, fonts subset to Latin only
- **Lighthouse Performance / Accessibility / SEO / Best Practices:** ≥ 95 each

Enforce via:
- All hero imagery as SVG or `next/image` with proper sizing.
- `next/font` for all fonts, `display: swap`.
- Motion library tree-shaken via barrel imports.
- No client-side fetching on initial render.

---

## 11. File structure

```
yogeshcrafts-portfolio/
├── public/
│   ├── resume.pdf                  (Yogesh's PDF, swappable)
│   ├── avatar.svg                  (placeholder "YP" avatar)
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── icon.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx              (root layout: fonts, theme provider, nav, footer)
│   │   ├── page.tsx                (homepage — composes sections)
│   │   ├── opengraph-image.tsx     (dynamic OG card for /)
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── not-found.tsx           (custom 404 with personality)
│   │   ├── resume/
│   │   │   └── page.tsx
│   │   └── projects/
│   │       ├── page.tsx            (all projects)
│   │       └── [slug]/
│   │           └── page.tsx        (case studies, MDX-driven)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── nav.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── theme-toggle.tsx
│   │   │   └── mobile-nav.tsx
│   │   ├── sections/
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── projects.tsx        (homepage version — 3-4 featured)
│   │   │   └── contact.tsx
│   │   ├── shared/
│   │   │   ├── tech-chip.tsx
│   │   │   ├── section-heading.tsx
│   │   │   ├── project-card.tsx
│   │   │   ├── experience-card.tsx
│   │   │   ├── stat-strip.tsx
│   │   │   ├── reveal.tsx          (motion wrapper for scroll-in)
│   │   │   └── copyable-email.tsx
│   │   └── ui/                     (shadcn components: button, sheet, etc.)
│   ├── data/
│   │   ├── site.ts                 (name, email, socials, tagline choice, etc.)
│   │   ├── projects.ts             (project list — single source of truth)
│   │   ├── experience.ts
│   │   ├── skills.ts
│   │   ├── education.ts
│   │   └── tech-registry.ts        (the §5 registry)
│   ├── lib/
│   │   ├── utils.ts                (cn helper, etc.)
│   │   └── seo.ts                  (metadata helpers)
│   └── styles/
│       └── globals.css             (Tailwind directives + CSS variables for theme tokens)
├── .env.local.example
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── package.json
└── README.md
```

---

## 12. Content data schemas

Every piece of content lives in `src/data/*.ts` files. The agent must build all UI to consume these schemas — no hardcoded content inside components.

```ts
// src/data/site.ts
export const site = {
  name: "Yogesh Pokale",
  wordmark: "yogeshcrafts",
  tagline: "...", // Yogesh picks from §6.1
  location: "Pune, Maharashtra, India",
  email: "yogesh.d.pokale@gmail.com",
  phone: null,                            // hidden by default
  available: true,                        // shows "available" eyebrow
  socials: {
    linkedin: "https://www.linkedin.com/in/yogesh-pokale-7b887025b",
    github: "https://github.com/__GITHUB_USERNAME__",
    twitter: null,
    calendly: null,
  },
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "",
};

// src/data/projects.ts
export type Project = {
  slug: string;
  title: string;
  year: number;
  blurb: string;          // 1-2 lines
  description?: string;   // longer, for /projects page
  tech: TechKey[];        // keys from tech-registry
  tags: ("Web" | "Blockchain" | "AI" | "Tool")[];
  links: { live?: string; github?: string; caseStudy?: string };
  featured: boolean;      // controls homepage visibility
};

// src/data/experience.ts
export type ExperienceRole = {
  title: string;
  type: "Full-time" | "Internship";
  start: string;          // ISO month, e.g. "2025-06"
  end: string | "present";
  bullets: string[];
};

export type ExperienceCompany = {
  name: string;
  logo?: string;
  location: string;
  roles: ExperienceRole[];
  techTags: TechKey[];
};

// src/data/skills.ts
export type SkillGroup = {
  label: string;
  emphasis?: boolean;     // for the Security & Compliance highlight
  items: Array<TechKey | { label: string }>;   // either registry key or text-only chip
};
```

---

## 13. Build order for the coding agent

Execute in this order. Each step is independently shippable.

1. **Scaffold.** `pnpm create next-app@latest` with TS, Tailwind, App Router, no `src/` (then create `src/` and reorganize). Add shadcn/ui (`pnpm dlx shadcn@latest init`), Motion, next-themes, react-icons, lucide-react, @vercel/og. Set up ESLint + Prettier.
2. **Design tokens & fonts.** Set up `globals.css` with CSS variables for both themes (use the chosen palette from §5.2). Wire `next/font` for Instrument Serif, Switzer (self-hosted via Fontshare), JetBrains Mono. Configure `tailwind.config.ts` to extend with these tokens.
3. **Theme + layout shell.** `next-themes` provider, theme toggle component, root layout with nav + footer. Mobile nav via shadcn `Sheet`. Validate dark/light works.
4. **Data files.** Create all `src/data/*.ts` files with the content from §6 and §12. Populate `tech-registry.ts` from §5.
5. **Shared components.** `<TechChip>`, `<SectionHeading>`, `<Reveal>` (Motion wrapper), `<CopyableEmail>`, `<StatStrip>`.
6. **Homepage sections in order:** Hero → About → Skills → Experience → Projects → Contact. Build, validate, move on.
7. **Resume page.** HTML version of all data, with print styles and PDF download button.
8. **Projects page.** Grid, filter pills (conditionally rendered), data-driven.
9. **`/projects/[slug]` scaffold.** Dynamic route reading MDX from `src/content/projects/`. Empty for now; works when content is added later.
10. **SEO.** Metadata helpers, sitemap, robots, JSON-LD on home, favicons, `opengraph-image.tsx`.
11. **404 page.** Custom design — short, on-brand, with a link home and to the blog.
12. **Analytics + perf.** Drop in `@vercel/analytics`, audit Lighthouse, fix any below-target scores.
13. **Accessibility audit.** Tab through every page, check focus states, verify color contrast, test with `prefers-reduced-motion`.
14. **Deploy.** Push to GitHub, connect to Vercel, set environment variables (`NEXT_PUBLIC_FORMSPREE_ENDPOINT`), point apex domain `yogeshcrafts.in` at Vercel (A record + CNAME per Vercel's instructions).

---

## 14. Deployment notes

**Vercel setup:**
1. Connect GitHub repo.
2. Build command: `pnpm build`. Install command: `pnpm install`.
3. Add env var: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.
4. Add custom domain `yogeshcrafts.in`. Vercel issues SSL automatically.
5. Set the apex domain as primary; redirect `www.yogeshcrafts.in` to apex.

**DNS at registrar:** Point A record `@` → Vercel's IP (Vercel will show this in the dashboard). The `blogs.` subdomain is handled separately by the blog project — it does not interfere with the portfolio's DNS.

---

## 15. Acceptance criteria

The agent's deliverable is complete when:

- [ ] Homepage loads in under 1.5s LCP on mobile (Lighthouse, simulated 4G).
- [ ] Lighthouse scores ≥ 95 on Performance, Accessibility, SEO, Best Practices.
- [ ] All sections render correctly in both dark and light themes.
- [ ] Theme toggle persists across page navigations.
- [ ] All tech chips render with the correct brand color per the registry.
- [ ] Resume page renders cleanly + PDF download works.
- [ ] Projects page works; filter renders only if 4+ projects exist.
- [ ] Contact form submits successfully to Formspree.
- [ ] Site is fully keyboard-navigable; focus states visible.
- [ ] `prefers-reduced-motion` disables non-opacity animations.
- [ ] OG image renders correctly when site URL is pasted into LinkedIn/Twitter/WhatsApp previewers.
- [ ] Sitemap and robots.txt accessible at `/sitemap.xml` and `/robots.txt`.
- [ ] No console errors or hydration warnings.

---

## 16. Post-launch TODOs (Yogesh's list)

In rough priority order:

1. **Add at least one side project** (see §6.5 callout). This is the single highest-leverage thing.
2. **Replace avatar with a real photo** (drop into `public/avatar.jpg`, swap reference in `<About>`).
3. **Add real GitHub username** in `src/data/site.ts`.
4. **Update LaTeX resume**, export PDF, replace `public/resume.pdf`.
5. **Request 1–2 testimonials** from manager/colleagues at Unlock Future. Add `<Testimonials>` section between Experience and Projects when available.
6. **Start the blog** (separate project, separate plan) — first 2-3 posts dramatically improve SEO for the portfolio too.
7. **Pursue and add certifications** as they come (Azure AI Engineer, Microsoft Certified .NET Developer, AWS, GCP).
8. **Add a "Now" section** to the homepage after a couple of months — what you're currently building/learning. Updated quarterly.

---

*End of plan. Agent: read end-to-end before starting. Yogesh: confirm tagline (§6.1) and color palette (§5.2) choices, and resolve open items in §0, before agent execution.*
