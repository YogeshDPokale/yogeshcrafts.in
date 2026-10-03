import { publicCareer } from "./career";

export const site = {
  ...publicCareer.identity,
  wordmark: "yogeshcrafts",
  phone: null,
  available: true,
  socials: {
    linkedin: publicCareer.identity.linkedin,
    github: publicCareer.identity.github,
    twitter: null,
    calendly: null,
  },
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim() ?? "",
};
