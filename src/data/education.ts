import { publicCareer } from "./career";

export type EducationEntry = { degree: string; institution: string; period: string; details?: string; distinction?: string };
export const education: EducationEntry[] = publicCareer.education;
