import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { contactEmail, resumePath, socialLinks } from "@/lib/portfolio-data";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
} as const;

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative w-full overflow-hidden border-t border-white/[0.07] bg-[#07080a]">
      <div
        className="absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-accent/[0.08] blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1180px] px-5 pb-8 pt-20 sm:px-8 sm:pt-24 lg:px-10 lg:pt-28 2xl:max-w-[1480px]">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
              Contact
            </p>
            <h2 className="text-balance mt-4 max-w-[12ch] text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.94] tracking-[-0.06em] text-white">
              Let&apos;s build a backend that holds up under pressure.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
              If you are hiring for Java backend, distributed systems, performance engineering,
              or GenAI-enabled developer tooling, I would be glad to talk.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Email me</p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-3 block break-all text-lg font-bold text-white hover:text-accent sm:text-xl"
            >
              {contactEmail}
            </a>
            <div className="mt-6 flex flex-col gap-3 min-[440px]:flex-row lg:flex-col xl:flex-row">
              <Button href={`mailto:${contactEmail}`} className="w-full">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Start a conversation
              </Button>
              <Button href={resumePath} variant="secondary" download className="w-full">
                <Download className="h-4 w-4" aria-hidden="true" />
                Resume
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.08] pt-5">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.label];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={link.label === "Email" ? `Email ${contactEmail}` : `Open Pranay's ${link.label}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 text-sm font-medium text-white/62 hover:border-white/22 hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {link.label}
                  </a>
                );
              })}
              <a
                href="tel:+917744024976"
                aria-label="Call Pranay at +91 77440 24976"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 text-sm font-medium text-white/62 hover:border-white/22 hover:text-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Phone
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/[0.07] pt-6 text-xs text-white/34 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Pranay Dumbhare</p>
          <p>Java · Spring Boot · Microservices · Performance</p>
        </div>
      </div>
    </footer>
  );
}
