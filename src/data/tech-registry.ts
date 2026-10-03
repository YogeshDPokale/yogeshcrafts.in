import registry from "./tech-registry.json";

export const TECH = registry;
export type TechKey = keyof typeof TECH;
