import { TechKey } from "./tech-registry";
import { publicCareer } from "./career";

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
export const experiences = publicCareer.experience as ExperienceCompany[];
