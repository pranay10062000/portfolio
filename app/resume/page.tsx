import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUp, ArrowUpRight, Briefcase, Download, FileText, FolderOpen, Github, Linkedin, Mail, MapPin, Phone, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/ui/Navbar";
import ResumeSidebar from "@/components/resume/ResumeSidebar";
import { contactEmail, detailedResumePath, experienceEntries, leadershipEntries, resumePath, socialLinks, workEntries } from "@/lib/portfolio-data";
import "./resume.css";

export const metadata: Metadata = {
  title: "Resume",
  description: "Explore Pranay Dumbhare's full professional profile: Oracle experience, both internships, research, projects, community leadership, OCI certifications, and both resume versions.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Pranay Dumbhare | Resume",
    description: "Java backend development, performance engineering, and AI-assisted automation. Experience, projects, skills, and a downloadable resume.",
    url: "/resume",
  },
};

const sectionLinks = [
  ["Experience", "resume-experience"],
  ["Projects", "resume-projects"],
  ["Leadership", "resume-leadership"],
  ["Skills", "resume-skills"],
  ["Education", "resume-education"],
  ["Recognition", "resume-recognition"],
  ["Certifications", "resume-certifications"],
];

function emphasize(text: string) {
  return text.split(/(account[- ]opening|account originations?|\b\d+(?:%|\+)|17 services|\bcloud\b)/gi).map((part, index) =>
    /^(account[- ]opening|account originations?|\d+(?:%|\+)|17 services|cloud)$/i.test(part) ? <strong key={index}>{part}</strong> : part,
  );
}

export default function ResumePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content" className="container resume-page">
        <div className="resume-topline">
          <Link href="/" className="text-link"><ArrowLeft size={16} aria-hidden="true" /> Back to portfolio</Link>
          <p className="eyebrow">The full profile / A closer look</p>
        </div>

        <header id="resume-intro" className="resume-intro">
          <div className="resume-profile">
            <h1>Pranay Dumbhare<span aria-hidden="true">.</span></h1>
            <p className="resume-role">Software Engineer 2</p>
            <p className="resume-summary">I build backend services for <strong>account origination</strong> and <strong>account opening</strong> at Oracle, with experience across API development, performance engineering, and AI-assisted automation. This is the fuller picture: both internships, robotics and medical image research, community work, and continued learning.</p>
            <p className="resume-location"><MapPin size={15} aria-hidden="true" /> Pune, Maharashtra, India</p>
            <nav className="resume-contacts" aria-label="Contact and profiles">
              <a href={`mailto:${contactEmail}`} aria-label={`Email ${contactEmail}`}><Mail size={16} aria-hidden="true" /> Email</a>
              <a href={socialLinks.find((link) => link.label === "LinkedIn")!.href} target="_blank" rel="noopener noreferrer"><Linkedin size={16} aria-hidden="true" /> LinkedIn<ArrowUpRight size={13} aria-hidden="true" /></a>
              <a href={socialLinks.find((link) => link.label === "GitHub")!.href} target="_blank" rel="noopener noreferrer"><Github size={16} aria-hidden="true" /> GitHub<ArrowUpRight size={13} aria-hidden="true" /></a>
              <a href="tel:+917744024976" aria-label="Call Pranay at +91 77440 24976"><Phone size={15} aria-hidden="true" /> Phone</a>
            </nav>
          </div>
          <div className="resume-download-card">
            <span className="resume-file-icon"><FileText size={25} aria-hidden="true" /></span>
            <p className="eyebrow">Take a copy</p>
            <h2>Two ways to take a copy.</h2>
            <p>A one-page overview or a two-page resume with fuller experience and activities.</p>
            <div className="resume-download-actions">
              <Button href={resumePath} download ariaLabel="Download Pranay Dumbhare's one-page resume"><Download size={17} aria-hidden="true" /> One-page PDF</Button>
              <Button href={detailedResumePath} variant="secondary" download ariaLabel="Download Pranay Dumbhare's detailed two-page resume"><Download size={17} aria-hidden="true" /> Detailed PDF</Button>
            </div>
            <div className="resume-open-links">
              <a href={resumePath} target="_blank" rel="noopener noreferrer">Open one-page<ArrowUpRight size={13} aria-hidden="true" /></a>
              <a href={detailedResumePath} target="_blank" rel="noopener noreferrer">Open detailed<ArrowUpRight size={13} aria-hidden="true" /></a>
            </div>
          </div>
        </header>

        <nav className="resume-jump" aria-label="Resume sections">
          <span className="eyebrow">On this page</span>
          {sectionLinks.map(([label, id], index) => <a key={id} href={`#${id}`}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{label}</a>)}
        </nav>

        <div className="resume-layout">
          <div className="resume-main-column">
            <section id="resume-experience" className="resume-card" aria-labelledby="resume-experience-title">
              <header className="resume-card-heading">
                <div><p className="eyebrow">01 / Career</p><h2 id="resume-experience-title">Experience</h2></div>
                <Briefcase size={22} aria-hidden="true" />
              </header>
              {experienceEntries.map((entry) => (
                <article className="resume-entry" key={`${entry.company}-${entry.role}`}>
                  <div className="resume-entry-top">
                    <a className="resume-company" href={entry.companyUrl} target="_blank" rel="noopener noreferrer">{entry.company}<ArrowUpRight size={15} aria-hidden="true" /></a>
                    <p className="resume-entry-period">{entry.period}</p>
                  </div>
                  <h3>{entry.role}</h3>
                  <p className="resume-entry-context">{emphasize(entry.team)}{entry.location && <><span aria-hidden="true"> · </span>{entry.location}</>}</p>
                  {entry.note && <p className="resume-entry-note">{entry.note}</p>}
                  <ul className="resume-bullets">{entry.bullets.map((bullet) => <li key={bullet}>{emphasize(bullet)}</li>)}</ul>
                </article>
              ))}
            </section>

            <section id="resume-projects" className="resume-card" aria-labelledby="resume-projects-title">
              <header className="resume-card-heading">
                <div><p className="eyebrow">02 / Building & research</p><h2 id="resume-projects-title">Projects</h2></div>
                <FolderOpen size={22} aria-hidden="true" />
              </header>
              {workEntries.map((project) => (
                <article className="resume-project" key={project.title}>
                  <p className="resume-project-kind">{project.eyebrow}</p>
                  <div className="resume-project-title"><h3>{project.title}</h3><p>{project.period}</p></div>
                  <p className="resume-project-description">{project.description}</p>
                  <ul className="resume-bullets">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">{project.linkLabel}<ArrowUpRight size={16} aria-hidden="true" /></a>
                </article>
              ))}
            </section>

            <section id="resume-leadership" className="resume-card" aria-labelledby="resume-leadership-title">
              <header className="resume-card-heading">
                <div><p className="eyebrow">03 / Beyond work</p><h2 id="resume-leadership-title">Leadership & community</h2></div>
                <Users size={22} aria-hidden="true" />
              </header>
              {leadershipEntries.map((entry) => (
                <article className="resume-community-entry" key={entry.organization}>
                  <p className="resume-project-kind">{entry.category}</p>
                  <h3>{entry.organization}</h3>
                  <p className="resume-community-role">{entry.role}</p>
                  <p className="resume-community-copy">{entry.description}</p>
                </article>
              ))}
            </section>
          </div>
          <ResumeSidebar />
        </div>

        <footer className="resume-endbar">
          <div><p>Have a role in mind?</p><a href={`mailto:${contactEmail}`} className="text-link">Let&apos;s talk<ArrowUpRight size={16} aria-hidden="true" /></a></div>
          <a className="text-link" href="#resume-intro">Back to top<ArrowUp size={16} aria-hidden="true" /></a>
        </footer>
      </main>
    </>
  );
}
