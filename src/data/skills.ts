import { TechKey } from "./tech-registry";

export type SkillItem = TechKey | { label: string };

export type SkillGroup = {
  label: string;
  emphasis?: boolean; // highlight security & compliance
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "AI / LLM",
    items: [
      "azureopenai",
      "vertexai",
      "anthropic",
      "mcp",
      { label: "Agentic Workflows" },
      { label: "Streaming" },
      { label: "Reasoning" },
      { label: "System Instruction Design" }
    ]
  },
  {
    label: "Backend",
    items: [
      "dotnet",
      "csharp",
      "aspnet",
      "nodejs"
    ]
  },
  {
    label: "Frontend",
    items: [
      "angular",
      "typescript",
      "rxjs",
      "javascript"
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
    label: "Cloud & Infra",
    items: [
      "azure",
      "gcp",
      { label: "Azure Blob" },
      { label: "CI/CD" },
      { label: "Deployment" }
    ]
  },
  {
    label: "Security & Compliance",
    emphasis: true,
    items: [
      { label: "Authentication Systems" },
      { label: "VAPT" },
      { label: "GDPR" },
      { label: "SOC" },
      { label: "ISO" }
    ]
  },
  {
    label: "Earlier exposure",
    items: [
      "c",
      "cpp",
      "python",
      "java",
      "php",
      "solidity"
    ]
  }
];
