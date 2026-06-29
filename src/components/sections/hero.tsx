"use client";

import * as React from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/reveal";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex flex-col justify-center py-20 md:py-32 overflow-hidden bg-background">
      {/* Background radial highlight */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--accent)/15,transparent)]" />
      
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <StaggerContainer className="flex max-w-3xl flex-col items-start gap-6">
          {/* Eyebrow Availability Badge */}
          {site.available && (
            <StaggerItem>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent/30 px-3 py-1 text-xs font-mono font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for new opportunities
              </div>
            </StaggerItem>
          )}

          {/* Name Header */}
          <StaggerItem>
            <h1 className="heading-serif text-5xl md:text-7xl font-normal tracking-tight text-foreground">
              {site.name}
            </h1>
          </StaggerItem>

          {/* Tagline */}
          <StaggerItem>
            <h2 className="text-xl md:text-3xl font-medium tracking-tight text-muted-foreground leading-relaxed max-w-2xl">
              {site.tagline}
            </h2>
          </StaggerItem>

          {/* Description Subparagraph */}
          <StaggerItem>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground/80 max-w-2xl">
              Based in <span className="text-foreground font-medium">Pune, India</span> — I build web applications
              end to end at{" "}
              <span className="text-foreground font-medium">Unlock Future</span>: Angular frontends, .NET APIs,
              and Azure cloud infrastructure. Currently deep in the AI tooling space — building MCP servers,
              LLM orchestration layers, and developer productivity tooling.
            </p>
          </StaggerItem>

          {/* CTAs */}
          <StaggerItem className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/projects"
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "rounded-lg group h-11 px-6 shadow-sm border border-primary/10 hover:translate-y-[-1px] transition-all duration-200"
              })}
            >
              View Projects
              <ArrowRight size={16} className="ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/resume"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "rounded-lg h-11 px-6 hover:bg-secondary hover:translate-y-[-1px] transition-all duration-200"
              })}
            >
              View Resume
            </Link>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
