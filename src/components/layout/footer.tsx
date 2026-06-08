import Link from "next/link";
import { site } from "@/data/site";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Resume", href: "/resume" },
    { label: "Blog", href: "https://blogs.yogeshcrafts.in", isExternal: true },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="w-full border-t border-border bg-background py-12 px-6 md:px-8 mt-auto">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {/* Column 1: Wordmark */}
          <div className="flex flex-col gap-2">
            <Link href="/" className="wordmark lowercase tracking-tighter text-xl font-bold text-foreground">
              {site.wordmark}
            </Link>
            <p className="text-sm text-muted-foreground">
              Made by {site.name}, Pune.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <li key={link.label}>
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={12} className="opacity-60" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h4>
            <div className="flex items-center gap-4">
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-center text-xs text-muted-foreground md:flex-row md:justify-between md:text-left">
          <p>© {currentYear} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
