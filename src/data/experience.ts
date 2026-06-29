import { TechKey } from "./tech-registry";

export type ExperienceRole = {
  title: string;
  type: "Full-time" | "Internship";
  start: string;
  end: string;
  bullets: string[];
};

export type ExperienceCompany = {
  name: string;
  logo?: string;
  location: string;
  roles: ExperienceRole[];
  techTags: TechKey[];
};

export const experiences: ExperienceCompany[] = [
  {
    name: "Unlock Future Private Limited",
    location: "Pune, India",
    techTags: ["dotnet", "csharp", "aspnet", "angular", "typescript", "mssql", "azure", "gcp", "azureopenai", "anthropic", "mcp", "docker"],
    roles: [
      {
        title: "Software Engineer (Full-Stack)",
        type: "Full-time",
        start: "Jun 2025",
        end: "Present",
        bullets: [
          "Designed and built a multi-provider LLM orchestration service supporting Azure OpenAI, GCP Vertex AI, and Anthropic Claude behind a unified streaming API, with configurable system-instruction layers for agentic workflows.",
          "Integrated Model Context Protocol (MCP) tooling into the development workflow, enabling AI coding assistants to query MSSQL database schema context on demand — eliminating manual copy-pasting of schema information.",
          "Built internal developer tooling plugins using Cursor and Claude Code to accelerate team productivity; independently replicated a Claude-like AI assistant with containerized code execution, chat summarization, and deferred connector handling.",
          "Owned authentication and authorization across multiple production applications (.NET + Angular), including JWT lifecycle management, refresh-token rotation, Google/Microsoft SSO, and Role-Based Access Control (RBAC).",
          "Sole owner of Azure deployments across 3 products — App Services, Azure SQL, Storage Accounts, SAS URL generation, and Azure Maps integration.",
          "Managed Cloudflare DNS, domain configuration, and CDN setup for all live products; handled end-to-end deployment lifecycle from staging to production."
        ]
      },
      {
        title: "Associate Software Developer",
        type: "Full-time",
        start: "Jun 2024",
        end: "Jun 2025",
        bullets: [
          "Built and maintained .NET Web APIs and Angular features across multiple production apps, owning features end-to-end from design to deployment.",
          "Integrated Azure Blob Storage and GCP services into backend pipelines; designed and managed Azure SQL database schemas for production applications.",
          "Coordinated with external VAPT security firms and remediated all reported vulnerabilities; involved in GDPR and ISO compliance audits on the technical side.",
          "Optimized Angular frontend performance — reduced bundle size, addressed change-detection bottlenecks, and improved Core Web Vitals scores.",
          "Implemented authentication flows across applications — including Google SSO, Microsoft SSO, and in-house sign-in with secure refresh token rotation."
        ]
      },
      {
        title: "Software Developer Intern",
        type: "Internship",
        start: "Nov 2023",
        end: "May 2024",
        bullets: [
          "Contributed to ASP.NET Web API and Angular projects under senior mentorship.",
          "Built features end-to-end across the .NET + Angular stack; learned production CI/CD, code review, and release management practices."
        ]
      }
    ]
  }
];
