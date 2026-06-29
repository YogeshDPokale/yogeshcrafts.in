# Portfolio Update Plan — yogeshcrafts.in
> Based on career switch analysis | Yogesh Pokale | June 2026

---

## Overview

The portfolio site architecture is already solid (Next.js 16, Cloudflare Pages, OpenNext adapter).
The only thing that needs to change is the **content** — replacing college-era projects and generic
copy with your real 2+ years of production experience, AI tooling work, and Azure expertise.

All content changes live inside `src/data/` and the About/Hero section copy.

---

## Execution Order (Priority)

| # | Task | File / Location | Effort |
|---|---|---|---|
| 1 | Push MSSQL MCP Server to GitHub with README | GitHub | 1–2 hrs |
| 2 | Update work experience | `src/data/experience.ts` | 1 hr |
| 3 | Add new projects, archive old ones | `src/data/projects.ts` | 1 hr |
| 4 | Restructure skills by category | `src/data/skills.ts` | 30 min |
| 5 | Rewrite headline, bio, tagline | `src/data/site.ts` | 30 min |
| 6 | Rewrite Hero & About section copy | `src/components/sections/` | 30 min |
| 7 | New resume PDF → replace in `/public` | `public/resume.pdf` | 2–3 hrs |
| 8 | Deploy to Cloudflare | Cloudflare Pages Dashboard | 30 min |

---

## 1. `src/data/site.ts` — Identity & Headline

### Headline / Tagline
Replace current tagline with one of the following:

**Option A (technical)**
> "Full-Stack Engineer · Azure Cloud · AI Tooling"

**Option B (story-driven)**
> "I build AI-powered products, ship them to Azure, and secure them end to end."

**Option C (developer tools angle)**
> "Building at the intersection of AI and software engineering."

### Bio (About Section — ~3 lines)
```
I'm a full-stack engineer based in Pune with 2+ years of production experience
building and shipping AI-powered products. I own the full lifecycle — from Angular
frontends and .NET APIs to Azure cloud deployments and security compliance.
Currently exploring the MCP ecosystem and building developer tooling at the
intersection of AI and software engineering.
```

### Social Links to Verify
- [ ] GitHub URL (correct profile)
- [ ] LinkedIn URL
- [ ] Email (yogesh.d.pokale@gmail.com)
- [ ] Portfolio domain (yogeshcrafts.in)

---

## 2. `src/data/experience.ts` — Work Experience

### ADD: Unlock Future Private Limited

```
Role        : Software Engineer (Full-Stack)
Duration    : 2022 – Present (2+ years)
Location    : Pune, India
Type        : Full-time
```

**Bullet points to use:**

**Cloud & Infrastructure**
- Sole owner of Azure deployments across 3 products — App Services, Azure SQL,
  Storage Accounts, SAS URL generation, and Azure Maps integration
- Managed Cloudflare DNS, domain configuration, and CDN setup for all live products
- Handled end-to-end deployment lifecycle from staging to production

**Security & Compliance**
- Coordinated with external VAPT security firms and remediated all reported
  vulnerabilities to achieve compliance certification
- Implemented authentication flows across all applications — Google SSO,
  Microsoft SSO, and in-house sign-in with secure refresh token rotation
- Implemented Role-Based Access Control (RBAC) across 2+ production applications
- Involved in GDPR and ISO compliance audits on the technical side

**Frontend**
- Built and optimized Angular frontends with focus on performance —
  caching strategy, lazy loading, and bundle size optimization
- Integrated Azure Maps into Angular applications for location-aware features

**AI & Developer Tooling**
- Built internal developer tooling plugins using Cursor and Claude Code
  to accelerate team productivity
- Independently replicated a Claude-like AI assistant interface with
  containerized code execution, chat summarization, deferred connector
  handling, and external service integrations

**Backend**
- Developed .NET REST APIs and Python utility scripts across multiple projects
- Designed and managed Azure SQL database schemas for production applications

---

## 3. `src/data/projects.ts` — Projects

### REMOVE from featured / move to archive:
- Dairy Management System (PHP/MySQL — 2022)
- Banking System Using Blockchain (Node.js/Truffle — 2023)

> Keep them in an "Archive" or "Learning Projects" section if your site supports it.
> Do NOT delete — shows history and growth.

---

### ADD: Project 1 — MSSQL MCP Server ⭐ HERO PROJECT

```
Title       : MSSQL MCP Server
Slug        : mssql-mcp-server
Status      : Open Source
Type        : Developer Tooling / AI Infrastructure
```

**Description:**
> An MCP (Model Context Protocol) server that connects coding IDEs to MSSQL databases,
> giving AI coding assistants full database schema context — tables, columns, relationships,
> stored procedures — without manual copy-pasting.

**Tech stack:** TypeScript · Node.js · MCP Protocol · MSSQL · SQL Server

**Key highlights:**
- Enables AI coding agents (Cursor, Claude Code, etc.) to query database context on demand
- Implements the MCP tool/resource protocol for IDE integration
- Reduces context-switching for developers working on database-driven applications

**Links:** GitHub repo (push before applying) · README with setup instructions

**Why it matters for hiring:**
- Rare — very few developers have built MCP servers
- Directly relevant to AI product companies and developer tools companies
- Shows understanding of how AI coding assistants work under the hood

---

### ADD: Project 2 — AI Assistant Platform (Personal R&D)

```
Title       : AI Assistant Platform
Slug        : ai-assistant-platform
Status      : Personal / R&D
Type        : AI Product Engineering
```

**Description:**
> A fully functional AI assistant interface built from scratch — replicating
> the architecture of modern AI chat products. Includes containerized code
> execution, multi-turn chat summarization, deferred tool/connector handling,
> and external service integrations.

**Tech stack:** Angular · .NET · Azure · Docker · TypeScript

**Key highlights:**
- Containerized code execution sandbox (runs code safely in isolated containers)
- Chat summarization to handle long conversation context windows
- Deferred connector system for plugging in external services at runtime
- Built to understand how production AI products handle state, context, and tools

**Why it matters for hiring:**
- Shows you understand AI products from the inside, not just as a user
- Rare combination of frontend + backend + infra + AI systems thinking

---

### ADD: Project 3 — yogeshcrafts.in (This Portfolio)

```
Title       : yogeshcrafts.in
Slug        : portfolio
Status      : Live
Type        : Frontend / Infrastructure
```

**Description:**
> Personal portfolio built with Next.js 16 App Router, deployed on Cloudflare
> Pages via the OpenNext adapter. Features dynamic OG image generation,
> automated sitemap, dark/light theming, and fully responsive design.

**Tech stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · Cloudflare Workers · OpenNext

**Key highlights:**
- Cloudflare Workers deployment with OpenNext adapter (not a standard Vercel deploy)
- Dynamic Open Graph card generator for social sharing
- Automated sitemap and robots.txt for SEO
- Resolved non-trivial Turbopack + OpenNext build issues (documented in handoff)

---

## 4. `src/data/skills.ts` — Skills Restructure

Replace flat list with grouped categories:

### Frontend
- Angular · TypeScript · Next.js · Tailwind CSS · RxJS
- Performance Optimization · Lazy Loading · Caching

### Backend
- .NET / C# · Node.js · REST APIs · Python

### Cloud & Infrastructure
- Azure App Services · Azure SQL · Azure Storage Accounts
- SAS URL Management · Azure Maps · Cloudflare Pages · Cloudflare DNS

### Auth & Security
- OAuth 2.0 · OpenID Connect · Refresh Token Rotation
- Google SSO · Microsoft SSO · RBAC · VAPT Remediation

### AI & Developer Tools
- MCP Protocol · Claude Code · Cursor · LLM Integration
- Prompt Engineering · AI Chat Architecture

### Database
- MSSQL · PostgreSQL · MySQL

### DevOps & Tooling
- GitHub · DNS Management · SSL/TLS · CI/CD Basics

---

### REMOVE from prominent placement:
- Flutter (no production experience)
- PHP (college project only)
- Solidity (college project only)
- LISP / R (coursework only)

> Keep these in an "Also familiar with" or collapsed section if needed for honesty,
> but don't lead with them.

---

## 5. Hero & About Section Copy

### Hero Section

**Headline:**
```
Yogesh Pokale
```

**Subheadline:**
```
Full-Stack Engineer · Azure Cloud · AI Tooling
```

**CTA buttons:**
- "View Projects" → /projects
- "Download Resume" → /resume or public/resume.pdf

---

### About Section

**Paragraph 1 (What you do):**
```
I'm a full-stack software engineer based in Pune, India, with 2+ years of
production experience. I build web applications end to end — Angular frontends,
.NET APIs, and Azure cloud infrastructure — and I own the full deployment
lifecycle from development to live.
```

**Paragraph 2 (What makes you different):**
```
I've spent the last year deep in AI tooling — building an MCP server for
IDE-to-database context, replicating an AI assistant platform with containerized
code execution and connector handling, and building internal developer plugins
with Claude Code and Cursor. I'm drawn to the tooling layer: the systems that
make developers and AI work better together.
```

**Paragraph 3 (Security + reliability angle):**
```
I've also worked closely with VAPT security firms, implemented OAuth/OIDC
authentication flows across multiple products, and been involved in GDPR and
ISO compliance — so I think about security and reliability as part of shipping,
not an afterthought.
```

---

## 6. Resume PDF (`public/resume.pdf`)

The site already links to this file. After the resume is rewritten, replace it.

### Resume Structure (new order):

```
1. Header          — Name, email, phone, GitHub, LinkedIn, yogeshcrafts.in
2. Summary         — 3 lines: Full-stack + Azure + AI tooling angle
3. Work Experience — Unlock Future Pvt Ltd (detailed bullets from Section 2 above)
4. Projects        — MSSQL MCP Server, AI Assistant Platform, Portfolio
5. Skills          — Grouped by category (same as Section 4 above)
6. Education       — SPPU BSc CS + MSc CS (move to bottom)
```

> Do this resume update as a separate task. Replacing `public/resume.pdf` is the
> final step before going live.

---

## 7. Deployment Checklist (Already Configured — Just Verify)

From the handoff doc, these are already set up. Confirm before final deploy:

- [ ] Build command: `pnpm build:cf`
- [ ] Build output directory: `.open-next/assets`
- [ ] Environment variable: `NEXT_PUBLIC_FORMSPREE_ENDPOINT` set in Cloudflare dashboard
- [ ] Custom domain `yogeshcrafts.in` pointed to Cloudflare Pages
- [ ] `.gitignore` has `/.open-next/` and `/.wrangler/`

---

## Quick Reference — What's Changing and Why

| Before (College Era) | After (Professional) | Why |
|---|---|---|
| Dairy Management project | MSSQL MCP Server | Shows AI tooling depth |
| Blockchain Banking project | AI Assistant Platform | Shows product thinking |
| Flat skills list (LISP, R, Flutter) | Grouped, relevant skills | Signals seniority |
| No work experience section | Detailed 2-year experience | Fills the biggest gap |
| Generic bio | AI + Azure + Security angle | Matches 2026 market demand |
| No Azure/security mentioned | VAPT, RBAC, OAuth front and center | Rare differentiators |

---

*Last updated: June 2026 | Next step: Start with GitHub → experience.ts → projects.ts*
