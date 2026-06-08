import { TechKey } from "./tech-registry";

export type Project = {
  slug: string;
  title: string;
  year: number;
  blurb: string;          // 1-2 lines
  description?: string;   // longer, for /projects page
  tech: TechKey[];        // keys from tech-registry
  tags: ("Web" | "Blockchain" | "AI" | "Tool")[];
  links: { live?: string; github?: string; caseStudy?: string };
  featured: boolean;      // controls homepage visibility
};

export const projects: Project[] = [
  {
    slug: "dairy-management-system",
    title: "Dairy Management System",
    year: 2022,
    blurb: "System to manage daily milk producer records, calculate rates, and generate weekly/monthly billing reports.",
    description: "A comprehensive solution for dairy operators that automates milk collection records, producer pricing based on milk fat content, and weekly/monthly invoicing. Designed to replace manual bookkeeping with clean digital records.",
    tech: ["php", "javascript", "mysql"],
    tags: ["Web"],
    links: {
      github: "https://github.com/yogeshcrafts/dairy-management"
    },
    featured: true
  },
  {
    slug: "blockchain-banking",
    title: "Blockchain Banking",
    year: 2023,
    blurb: "Banking interface that stores high-value transactions on a private blockchain, using smart contracts for ledger integrity.",
    description: "An experimental banking portal leveraging a private Ethereum blockchain to register and verify high-value ledger modifications. Uses Solidity smart contracts to enforce business logic and secure financial transfers against modifications.",
    tech: ["nodejs", "solidity", "mysql", "metamask"], // Truffle and Ganache are text tags or registry items
    tags: ["Web", "Blockchain"],
    links: {
      github: "https://github.com/yogeshcrafts/blockchain-banking"
    },
    featured: true
  }
];
