export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  details?: string;
};

export const education: EducationEntry[] = [
  {
    degree: "M.Sc. in Computer Science",
    institution: "Sir Parashurambhau College, Pune",
    period: "Oct 2022 – May 2024",
    details: "Focus on advanced computing architectures, database systems, and software engineering."
  },
  {
    degree: "B.Sc. in Computer Science",
    institution: "Savitribai Phule Pune University",
    period: "Jul 2019 – Sep 2022",
    details: "First Class with A+. Groundwork in algorithm design, data structures, and web development technologies."
  }
];
