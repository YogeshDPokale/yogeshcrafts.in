import Link from "next/link";
import { site } from "@/data/site";
import { publicCareer } from "@/data/career";
import { experiences } from "@/data/experience";
import { SkillItem } from "@/data/skills";
import { education } from "@/data/education";
import { projects } from "@/data/projects";
import { Keywords } from "@/components/shared/keywords";
import { TechChip } from "@/components/shared/tech-chip";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export const metadata = { title: "Resume · Yogesh Pokale", description: publicCareer.summary };
const heading = "text-xs font-mono font-semibold uppercase tracking-wider text-primary border-b border-border/40 pb-1.5 mb-4";
const skillName = (item: SkillItem | string) => typeof item === "string" ? item : item.label;

export default function ResumePage() {
  const selectedProjects = publicCareer.resumeProjectSlugs.map((slug) => projects.find((p) => p.slug === slug)!);
  return (
    <div className="bg-background min-h-screen py-12 px-6 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between gap-4 mb-12 no-print">
          <Link href="/" className="inline-flex gap-1.5 text-sm text-muted-foreground hover:text-primary"><ArrowLeft size={16} />Back to Home</Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "sm" })}><ExternalLink size={14} /> View PDF</a>
        </div>
        <article className="rounded-xl border border-border/80 bg-card p-8 md:p-12 shadow-sm print:border-0 print:bg-transparent print:p-0 print:shadow-none">
          <header className="border-b border-border/60 pb-6 mb-7 text-center">
            <h1 className="heading-serif text-4xl md:text-5xl tracking-tight">{site.name}</h1>
            <p className="text-sm text-primary mt-3">{site.tagline}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <span>{site.location}</span>
              <a href={`mailto:${site.email}`} className="hover:text-primary">{site.email}</a>
            </div>
            <nav aria-label="Professional profiles" className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <a href={site.portfolio} className="hover:text-primary">yogeshcrafts.in</a>
              <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a>
              <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
            </nav>
          </header>
          <section className="mb-8"><h2 className={heading}>Summary</h2><p className="text-sm leading-relaxed text-muted-foreground"><Keywords text={publicCareer.summary} /></p></section>
          <section className="mb-8">
            <h2 className={heading}>Experience</h2>
            {experiences.map((company) => (
              <div key={company.name} className="space-y-6">
                <div><h3 className="text-base font-bold">{company.name}</h3><p className="text-xs text-muted-foreground">{company.location}</p></div>
                {company.roles.map((role) => (
                  <div key={role.title}>
                    <div className="flex flex-wrap justify-between gap-2 mb-2"><h4 className="text-sm font-semibold">{role.title} <span className="font-normal text-xs">({role.type})</span></h4><span className="text-xs text-muted-foreground">{role.start} — {role.end}</span></div>
                    <ul className="list-disc pl-4 space-y-1.5 text-xs leading-relaxed text-muted-foreground">{role.bullets.map((bullet) => <li key={bullet}><Keywords text={bullet} /></li>)}</ul>
                  </div>
                ))}
              </div>
            ))}
          </section>
          <section className="mb-8">
            <h2 className={heading}>Skills</h2>
            <div className="space-y-4">{publicCareer.resumeSkillGroups.map((group) => <div key={group.label}>
              <h3 className="text-xs font-bold mb-2">{group.label}</h3>
              <div className="flex flex-wrap gap-1.5">{group.items.map((item, index) => <TechChip key={index} name={skillName(item)} />)}</div>
            </div>)}</div>
          </section>
          <section className="mb-8">
            <h2 className={heading}>Selected Projects</h2>
            <div className="space-y-5">{selectedProjects.map((project) => <div key={project.slug}>
              <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-sm font-semibold">{project.title}
                {project.links.caseStudy && <Link href={project.links.caseStudy} className="ml-3 text-xs font-normal text-primary hover:underline">Overview ↗</Link>}
              </h3><span className="text-xs text-muted-foreground">{project.year}</span></div>
              <p className="text-xs leading-relaxed text-muted-foreground mt-1"><Keywords text={project.resumeDescription || project.description || project.blurb} /></p>
              <p className="text-[11px] text-muted-foreground mt-1">{project.ownership}</p>
            </div>)}</div>
          </section>
          <section className="mb-8">
            <h2 className={heading}>Education</h2>
            <div className="space-y-4">{education.map((edu) => <div key={edu.degree}><div className="flex flex-wrap justify-between gap-2"><h3 className="text-sm font-semibold">{edu.degree}</h3><span className="text-xs text-muted-foreground">{edu.period}</span></div><p className="text-xs text-muted-foreground mt-1">{edu.institution}{edu.distinction && <span> · {edu.distinction}</span>}</p></div>)}</div>
          </section>
          <section className="mb-8"><h2 className={heading}>Awards & Achievements</h2><p className="text-sm font-semibold">{publicCareer.award.title} ({publicCareer.award.year})</p></section>
          <section><h2 className={heading}>{publicCareer.learning.title}</h2><div className="space-y-2">{publicCareer.learning.items.map((item) => <p key={item.name} className="text-xs text-muted-foreground"><strong>{item.name}:</strong> {item.status}</p>)}</div></section>
        </article>
      </div>
    </div>
  );
}
