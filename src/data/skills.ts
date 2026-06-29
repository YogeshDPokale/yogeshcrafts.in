import { TechKey } from "./tech-registry";

export type SkillItem = TechKey | { label: string };

export type SkillGroup = {
  label: string;
  emphasis?: boolean; // highlight security & compliance
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      "angular",
      "typescript",
      "rxjs",
      "javascript",
      "nextjs",
      { label: "Performance Optimization" },
      { label: "Lazy Loading" },
      { label: "Caching" }
    ]
  },
  {
    label: "Backend",
    items: [
      "dotnet",
      "csharp",
      "aspnet",
      "nodejs",
      "python"
    ]
  },
  {
    label: "AI & Developer Tools",
    items: [
      "azureopenai",
      "vertexai",
      "anthropic",
      "mcp",
      { label: "Agentic Workflows" },
      { label: "Streaming" },
      { label: "Prompt Engineering" },
      { label: "AI Chat Architecture" }
    ]
  },
  {
    label: "Cloud & Infrastructure",
    items: [
      "azure",
      "gcp",
      "cloudflare",
      "docker",
      "blob",
      { label: "Azure App Services" },
      { label: "Azure Maps" },
      { label: "SAS URL Management" },
      { label: "CI/CD" }
    ]
  },
  {
    label: "Auth & Security",
    emphasis: true,
    items: [
      { label: "OAuth 2.0" },
      { label: "OpenID Connect" },
      { label: "Refresh Token Rotation" },
      { label: "Google SSO" },
      { label: "Microsoft SSO" },
      { label: "RBAC" },
      { label: "VAPT Remediation" },
      { label: "GDPR" },
      { label: "ISO / SOC" }
    ]
  },
  {
    label: "Databases",
    items: [
      "mssql",
      "mysql",
      "postgres"
    ]
  },
  {
    label: "Also Familiar With",
    items: [
      "c",
      "cpp",
      "java",
      "php",
      "solidity",
      { label: "Flutter" },
      { label: "R" }
    ]
  }
];
