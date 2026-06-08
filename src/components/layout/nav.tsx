"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet";

export function Nav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 4) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/#about", isExternal: false },
    { label: "Experience", href: "/#experience", isExternal: false },
    { label: "Projects", href: "/#projects", isExternal: false },
    { label: "Resume", href: "/resume", isExternal: false },
    { label: "Blog", href: "https://blogs.yogeshcrafts.in", isExternal: true },
    { label: "Contact", href: "/#contact", isExternal: false },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
        {/* Left: Wordmark */}
        <Link href="/" className="wordmark lowercase tracking-tighter text-xl font-bold text-foreground">
          {site.wordmark}
        </Link>

        {/* Right: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isAct = pathname === link.href;
            return link.isExternal ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-0.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-150"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={12} className="opacity-60" />
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  isAct
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="h-4 w-px bg-border ml-2" />
          <ThemeToggle />
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full"
                  aria-label="Open navigation menu"
                />
              }
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-background border-l border-border p-6 flex flex-col justify-between">
              <div>
                <SheetTitle className="wordmark lowercase tracking-tighter text-2xl font-bold text-left mb-8">
                  {site.wordmark}
                </SheetTitle>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <div key={link.label} onClick={() => setIsOpen(false)}>
                      {link.isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight size={14} className="opacity-60" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className={`text-lg font-medium transition-colors ${
                            pathname === link.href
                              ? "text-primary font-semibold"
                              : "text-muted-foreground hover:text-primary"
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
              <div className="text-xs text-muted-foreground border-t border-border pt-4">
                © {new Date().getFullYear()} {site.name}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
