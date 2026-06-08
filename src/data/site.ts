export const site = {
  name: "Yogesh Pokale",
  wordmark: "yogeshcrafts",
  // Tagline option 1 selected as default
  tagline: "Full-stack engineer building AI-native products with .NET, Angular, and LLM systems.",
  location: "Pune, Maharashtra, India",
  email: "yogesh.d.pokale@gmail.com",
  phone: null,                            // hidden by default
  available: true,                        // shows "available" eyebrow
  socials: {
    linkedin: "https://www.linkedin.com/in/yogesh-pokale-7b887025b",
    github: "https://github.com/yogeshcrafts",
    twitter: null,
    calendly: null,
  },
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "",
};
