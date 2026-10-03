import projectData from "./projects.json";
import { TechKey } from "./tech-registry";

export type Project = {
  slug: string; title: string; year: number; blurb: string; description?: string; resumeDescription?: string;
  ownership: string; status: string; tech: TechKey[];
  tags: ("Web" | "Blockchain" | "AI" | "Tool" | "Infrastructure")[];
  links: { live?: string; github?: string; caseStudy?: string };
  featured?: boolean; caseStudy?: { heading: string; body: string }[];
};
export const projects = projectData as Project[];
