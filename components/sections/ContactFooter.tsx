import Image from "next/image";
import { ArrowUp, ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { contactEmail, resumePath, socialLinks } from "@/lib/portfolio-data";

const socialIcons = { GitHub: Github, LinkedIn: Linkedin, Email: Mail } as const;

export default function ContactFooter() {
  return (
    <footer id="contact" className="contact-footer">
      <div className="container contact-inner">
        <div className="contact-heading">
          <p className="eyebrow">07 / Get in touch</p>
          <h2>Let&apos;s build something that works.</h2>
          <figure className="contact-companions">
            <div className="contact-companions-image">
              <Image
                src="/assets/me_and_cat_footer.png"
                alt="Illustration of Pranay waving while holding his cat"
                fill
                sizes="(max-width: 699px) 88vw, 350px"
              />
            </div>
            <figcaption>A friendly hello from me and my cat.</figcaption>
          </figure>
        </div>
        <div className="contact-content">
          <p>Hiring for backend engineering or building something with Java, distributed systems, or applied AI? Let&apos;s talk.</p>
          <a className="contact-email" href={`mailto:${contactEmail}`}>
            {contactEmail}<ArrowUpRight size={22} aria-hidden="true" />
          </a>
          <div className="contact-actions">
            <Button href={`mailto:${contactEmail}`}>
              Start a conversation<ArrowUpRight size={17} aria-hidden="true" />
            </Button>
            <Button href={resumePath} variant="secondary" download>
              <Download size={17} aria-hidden="true" />Download resume
            </Button>
          </div>
          <nav className="contact-socials" aria-label="Social links">
            {socialLinks.filter((link) => link.label !== "Email").map((link) => {
              const Icon = socialIcons[link.label];
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  <Icon size={17} aria-hidden="true" />{link.label}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              );
            })}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Pranay Dumbhare · Pune, India</p>
          <a className="footer-top-link" href="#home">Back to top<ArrowUp size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
