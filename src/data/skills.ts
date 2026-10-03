import { TechKey } from "./tech-registry";
import { publicCareer } from "./career";

export type SkillItem = TechKey | { label: string };
export type SkillGroup = { label: string; emphasis?: boolean; items: SkillItem[] };
export const skillGroups = publicCareer.skillGroups as SkillGroup[];
