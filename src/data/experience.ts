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
    name: "Unlock Future",
    location: "Pune, India",
    techTags: ["dotnet", "csharp", "aspnet", "angular", "typescript", "mssql", "azure", "gcp", "azureopenai", "anthropic", "mcp"],
    roles: [
      {
        title: "Software Developer",
        type: "Full-time",
        start: "Jun 2025",
        end: "Present",
        bullets: [
          "Designed and built a multi-provider LLM orchestration service supporting Azure OpenAI, GCP Vertex AI, and Anthropic Claude behind a unified streaming API.",
          "Integrated Model Context Protocol (MCP) and reasoning-model support, plus a configurable system-instruction layer for agentic workflows.",
          "Owned authentication and authorization across multiple production applications (.NET + Angular), including JWT lifecycle, refresh-token flows, and role-based access control.",
          "Partnered with external auditing firms to achieve VAPT, GDPR, SOC, and ISO compliance across 3+ web applications; remediated security findings end-to-end."
        ]
      },
      {
        title: "Associate Software Developer",
        type: "Full-time",
        start: "Jun 2024",
        end: "Jun 2025",
        bullets: [
          "Built and maintained .NET Web APIs and Angular features across multiple production apps.",
          "Integrated Azure Blob Storage and GCP services into backend pipelines.",
          "Optimized Angular frontend performance — reduced bundle size, addressed change-detection bottlenecks, and improved Core Web Vitals.",
          "Owned deployment and release cycles for several internal and client-facing applications."
        ]
      },
      {
        title: "Software Developer Intern",
        type: "Internship",
        start: "Nov 2023",
        end: "May 2024",
        bullets: [
          "Contributed to ASP.NET Web API and Angular projects under senior mentorship.",
          "Built features end-to-end across the .NET + Angular stack; learned production CI/CD, code review, and release management."
        ]
      }
    ]
  }
];
