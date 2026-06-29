import { TechKey } from "./tech-registry";

export type Project = {
  slug: string;
  title: string;
  year: number;
  blurb: string;          // 1-2 lines
  description?: string;   // longer, for /projects page
  tech: TechKey[];        // keys from tech-registry
  tags: ("Web" | "Blockchain" | "AI" | "Tool" | "Infrastructure")[];
  links: { live?: string; github?: string; caseStudy?: string };
  featured: boolean;      // controls homepage visibility
};

export const projects: Project[] = [
  // ────────── Featured / Current ──────────
  {
    slug: "mssql-mcp-server",
    title: "MSSQL MCP Server",
    year: 2024,
    blurb: "An MCP server that gives AI coding assistants full MSSQL database schema context — tables, columns, relationships, stored procedures — on demand.",
    description: "An internal Model Context Protocol (MCP) server built for the company's development workflow. Bridges AI coding assistants (Cursor, Claude Code) to MSSQL databases so they can query full schema context — tables, columns, relationships, and stored procedures — without manual copy-pasting. Eliminates context-switching for developers working on database-driven applications and was adopted across the engineering team.",
    tech: ["typescript", "nodejs", "mssql", "mcp"],
    tags: ["Tool", "AI"],
    links: {
      // Private — built for company internal use
    },
    featured: true
  },
  {
    slug: "ai-assistant-platform",
    title: "AI Assistant Platform",
    year: 2024,
    blurb: "A production-grade AI assistant built from scratch — with containerized code execution, multi-turn chat summarization, and a deferred connector system for external service integrations.",
    description: "A fully functional AI assistant interface built from the ground up, replicating the architecture of modern AI chat products. Features a containerized code execution sandbox (runs user code safely in isolated Docker containers), multi-turn chat summarization to handle long context windows, a deferred connector system for plugging in external services at runtime, and integrations with multiple LLM providers. Built to deeply understand how production AI products handle state, context, and tools.",
    tech: ["angular", "typescript", "dotnet", "csharp", "azure", "docker"],
    tags: ["AI", "Web"],
    links: {},
    featured: true
  },
  {
    slug: "portfolio",
    title: "yogeshcrafts.in",
    year: 2025,
    blurb: "Personal portfolio built with Next.js 16 App Router on Cloudflare Workers via OpenNext. Features dynamic OG image generation, automated sitemap, and dark/light theming.",
    description: "A personal portfolio built on Next.js 16 App Router and deployed on Cloudflare Pages via the OpenNext adapter — not a standard Vercel deploy. Features dynamic Open Graph card generation using @vercel/og, automated sitemap and robots.txt for SEO, dark/light theming with next-themes, and fully responsive design. Required resolving non-trivial Turbopack + OpenNext compilation issues (binary font asset handling, worker naming, and build loop prevention).",
    tech: ["nextjs", "typescript", "cloudflare"],
    tags: ["Web", "Infrastructure"],
    links: {
      live: "https://yogeshcrafts.in",
      github: "https://github.com/yogeshcrafts/yogeshcrafts.in"
    },
    featured: true
  },

  // ────────── Archive / Learning Projects ──────────
  {
    slug: "dairy-management-system",
    title: "Dairy Management System",
    year: 2022,
    blurb: "System to manage daily milk producer records, calculate rates, and generate weekly/monthly billing reports.",
    description: "A comprehensive solution for dairy operators that automates milk collection records, producer pricing based on milk fat content, and weekly/monthly invoicing. Designed to replace manual bookkeeping with clean digital records.",
    tech: ["php", "javascript", "mysql"],
    tags: ["Web"],
    links: {
      github: "https://github.com/yogeshcrafts/dairy-management"
    },
    featured: false
  },
  {
    slug: "blockchain-banking",
    title: "Blockchain Banking",
    year: 2023,
    blurb: "Banking interface that stores high-value transactions on a private blockchain, using smart contracts for ledger integrity.",
    description: "An experimental banking portal leveraging a private Ethereum blockchain to register and verify high-value ledger modifications. Uses Solidity smart contracts to enforce business logic and secure financial transfers against modifications.",
    tech: ["nodejs", "solidity", "mysql", "metamask"],
    tags: ["Web", "Blockchain"],
    links: {
      github: "https://github.com/yogeshcrafts/blockchain-banking"
    },
    featured: false
  }
];
