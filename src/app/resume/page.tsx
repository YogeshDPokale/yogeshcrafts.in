import * as React from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { experiences } from "@/data/experience";
import { skillGroups, SkillItem } from "@/data/skills";
import { education } from "@/data/education";
import { projects } from "@/data/projects";
import { TechChip } from "@/components/shared/tech-chip";
import { ArrowLeft, Download, Mail, Trophy, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "Resume · Yogesh Pokale",
  description: "Professional resume of Yogesh Pokale, full-stack engineer and AI features developer.",
};

export default function ResumePage() {
  const getItemName = (item: SkillItem): string => {
    return typeof item === "string" ? item : item.label;
  };

  return (
    <div className="bg-background min-h-screen py-12 px-6 md:py-20">
      <div className="mx-auto max-w-3xl">
        
        {/* Back Link & Download Actions */}
        <div className="flex items-center justify-between gap-4 mb-12 no-print">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "rounded-lg h-9 gap-1.5 font-mono text-xs"
            })}
          >
            <ExternalLink size={14} />
            View PDF
          </a>
        </div>

        {/* Resume Sheet Container */}
        <article className="rounded-xl border border-border/80 bg-card p-8 md:p-12 shadow-sm print:border-0 print:bg-transparent print:p-0 print:shadow-none">
          
          {/* Header */}
          <header className="border-b border-border/60 pb-8 mb-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h1 className="heading-serif text-4xl md:text-5xl font-normal text-foreground">
                  {site.name}
                </h1>
                <p className="text-sm font-mono text-primary font-medium tracking-tight mt-1">
                  {site.tagline}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {site.location}
                </p>
              </div>

              {/* Contact / Links */}
              <div className="flex flex-col gap-1.5 text-xs font-mono text-muted-foreground">
                <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Mail size={12} />
                  {site.email}
                </a>
                <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <FaLinkedin size={12} />
                  linkedin.com/in/yogesh-pokale
                </a>
                <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <FaGithub size={12} />
                  github.com/YogeshDPokale/yogeshcrafts.in
                </a>
              </div>
            </div>
          </header>

          {/* Section: Professional Summary */}
          <section className="mb-8">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-primary border-b border-border/40 pb-1.5 mb-3">
              Summary
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Results-driven Full-stack Developer with over 2.5 years of experience building secure, high-performance web applications using the .NET and Angular ecosystems. 
              Proven expertise in developing AI orchestration pipelines, implementing resilient JWT/refresh-token authentication systems, and executing security remediations for ISO, VAPT, and SOC2 compliance audits.
            </p>
          </section>

          {/* Section: Professional Experience */}
          <section className="mb-8">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-primary border-b border-border/40 pb-1.5 mb-4">
              Experience
            </h2>
            <div className="flex flex-col gap-6">
              {experiences.map((company) => (
                <div key={company.name} className="flex flex-col gap-4">
                  <div className="flex items-baseline justify-between border-b border-border/20 pb-1">
                    <h3 className="text-base font-bold text-foreground">
                      {company.name}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground">{company.location}</span>
                  </div>

                  <div className="flex flex-col gap-6 pl-2">
                    {company.roles.map((role) => (
                      <div key={role.title} className="flex flex-col gap-1.5">
                        <div className="flex flex-wrap justify-between items-baseline gap-2">
                          <h4 className="text-sm font-semibold text-foreground">
                            {role.title} <span className="text-xs font-normal font-mono text-muted-foreground">({role.type})</span>
                          </h4>
                          <span className="text-xs font-mono text-muted-foreground">{role.start} — {role.end}</span>
                        </div>
                        <ul className="list-disc list-outside space-y-1.5 pl-4 text-xs text-muted-foreground">
                          {role.bullets.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Skills */}
          <section className="mb-8">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-primary border-b border-border/40 pb-1.5 mb-4">
              Skills
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.label} className="flex flex-col gap-1.5">
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-wide">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-block rounded bg-secondary px-2 py-0.5 text-[10px] font-mono text-muted-foreground border border-border/60"
                      >
                        {getItemName(item)}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Education */}
          <section className="mb-8">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-primary border-b border-border/40 pb-1.5 mb-4">
              Education
            </h2>
            <div className="flex flex-col gap-4">
              {education.map((edu) => (
                <div key={edu.degree} className="flex flex-col gap-1">
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="text-sm font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">{edu.institution}</p>
                  {edu.details && (
                    <p className="text-[11px] text-muted-foreground/80 leading-relaxed mt-0.5">{edu.details}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section: Projects */}
          <section className="mb-8">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-primary border-b border-border/40 pb-1.5 mb-4">
              Academic Projects
            </h2>
            <div className="flex flex-col gap-4">
              {projects.map((proj) => (
                <div key={proj.title} className="flex flex-col gap-1">
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="text-sm font-semibold text-foreground">
                      {proj.title}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground">{proj.year}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{proj.description || proj.blurb}</p>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {proj.tech.map((t) => (
                      <span key={t} className="text-[9px] font-mono bg-secondary/80 text-muted-foreground px-1.5 py-0.5 rounded border border-border/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Awards */}
          <section className="mb-8">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-primary border-b border-border/40 pb-1.5 mb-3">
              Awards & Achievements
            </h2>
            <div className="flex items-start gap-2.5 text-xs text-muted-foreground">
              <Trophy size={14} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">Rank 1 — Intercollegiate Electronics Competition</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">Awarded in 2019 for designing and demonstrating hardware integration systems.</p>
              </div>
            </div>
          </section>

          {/* Section: Certifications */}
          <section className="mb-0">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-primary border-b border-border/40 pb-1.5 mb-3">
              Certifications
            </h2>
            <p className="text-xs italic text-muted-foreground">
              Currently preparing for Microsoft Certified Azure AI Engineer Associate credentials. Updates pending.
            </p>
          </section>

        </article>
      </div>
    </div>
  );
}
