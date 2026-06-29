"use client";

import * as React from "react";
import { site } from "@/data/site";
import { Reveal } from "@/components/shared/reveal";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start">
          
          {/* Left column: SVG Avatar */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <Reveal delay={0.1} y={15} className="relative">
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-secondary border border-border shadow-inner group overflow-hidden">
                {/* Visual grid accent background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--primary),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--primary),0.05)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
                
                {/* Initials typeset in Display/Serif font */}
                <span className="heading-serif text-5xl font-normal tracking-tight text-primary select-none group-hover:scale-105 transition-transform duration-300">
                  YP
                </span>
                
                {/* Subtle outer glow ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/10 group-hover:border-primary/25 transition-colors duration-300" />
              </div>
            </Reveal>
          </div>

          {/* Right column: Bio Text */}
          <div className="md:col-span-8 flex flex-col gap-6">
            <Reveal delay={0.1}>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                About Me
              </h3>
            </Reveal>
            
            <Reveal delay={0.2} className="flex flex-col gap-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a full-stack software engineer based in{" "}
                <span className="text-foreground font-medium">Pune, India</span>, with 2+ years of
                production experience. I build web applications end to end —{" "}
                <span className="text-foreground font-medium">Angular</span> frontends,{" "}
                <span className="text-foreground font-medium">.NET</span> APIs, and{" "}
                <span className="text-foreground font-medium">Azure</span> cloud infrastructure — and I own
                the full deployment lifecycle from development to live.
              </p>

              <p>
                I've spent the last year deep in AI tooling — building an{" "}
                <span className="text-foreground font-medium">MCP server</span> for IDE-to-database context,
                replicating an AI assistant platform with containerized code execution and connector handling,
                and building internal developer plugins with Claude Code and Cursor. I'm drawn to the tooling
                layer: the systems that make developers and AI work better together.
              </p>

              <p>
                I've also worked closely with VAPT security firms, implemented{" "}
                <span className="text-foreground font-medium">OAuth/OIDC</span> authentication flows across
                multiple products, and been involved in GDPR and ISO compliance audits — so I think about
                security and reliability as part of shipping, not an afterthought.
              </p>
            </Reveal>

            {/* Metric Stats Strip */}
            <Reveal delay={0.3} className="pt-4 border-t border-border/40 mt-2">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm font-mono text-muted-foreground/80">
                <span>2+ Years Experience</span>
                <span className="text-primary/40">•</span>
                <span>3+ Production Apps</span>
                <span className="text-primary/40">•</span>
                <span>VAPT · GDPR · ISO</span>
                <span className="text-primary/40">•</span>
                <span>Azure · GCP · Cloudflare</span>
              </div>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
