export const site = {
  name: "Yogesh Pokale",
  wordmark: "yogeshcrafts",
  // Tagline — Option A selected: technical, clear, ATS-friendly
  tagline: "Full-Stack Engineer · Azure Cloud · AI Tooling",
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
