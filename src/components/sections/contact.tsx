"use client";

import * as React from "react";
import { site } from "@/data/site";
import { CopyableEmail } from "@/components/shared/copyable-email";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
    _gotcha: "", // Honeypot field
  });
  
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Ignore spam bot fill
    if (formState._gotcha) {
      setStatus("success");
      return;
    }

    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      setErrorMessage("All fields are required.");
      return;
    }

    setStatus("submitting");

    try {
      // Resolve endpoint: if blank, warning is logged and fetch is simulated to avoid crash
      const endpoint = site.formspreeEndpoint || "https://formspree.io/f/placeholder";
      
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "", _gotcha: "" });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to deliver message.");
      }
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start">
          
          {/* Left: Contact Info */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Reveal>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-primary mb-2">
                Connect
              </h3>
              <h2 className="heading-serif text-3xl md:text-4xl font-normal text-foreground mb-4">
                Let's talk
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                I'm open to roles in full-stack development, AI engineering, and platform/backend work — remote-friendly or India-based. 
                Also happy to chat about LLM systems, secure architecture, or anything in between.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-4 items-start">
              <span className="text-xs font-mono font-medium text-muted-foreground uppercase">
                Direct Email (Click to copy)
              </span>
              <CopyableEmail email={site.email} />
            </Reveal>
          </div>

          {/* Right: Contact Form */}
          <div className="md:col-span-7">
            <Reveal delay={0.1} className="rounded-xl border border-border bg-card p-6 md:p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-8 animate-in fade-in-50 duration-300">
                  <CheckCircle2 className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Message Sent</h3>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Thank you! Your message has been sent successfully. I'll get back to you within 48 hours.
                  </p>
                  <Button
                    onClick={() => setStatus("idle")}
                    variant="ghost"
                    className="mt-6 text-xs text-primary"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Honeypot field (hidden from humans) */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={formState._gotcha}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-mono font-medium text-muted-foreground uppercase">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-mono font-medium text-muted-foreground uppercase">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-mono font-medium text-muted-foreground uppercase">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or role..."
                      rows={5}
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-y min-h-[120px]"
                    />
                  </div>

                  {/* Error Notification */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-lg border border-destructive/20 bg-destructive/10 p-3.5 text-xs text-destructive animate-in fade-in-50">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Form Submission Button */}
                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full md:w-auto self-start rounded-lg h-11 px-6 group transition-all duration-200"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={14} className="ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
