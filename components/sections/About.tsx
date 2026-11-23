import { ArrowUpRight } from "lucide-react";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { aboutCopy, awardUrl } from "@/lib/portfolio-data";

export default function About() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="04 / About"
      title="Curious by nature. Hands-on by choice."
      description={aboutCopy}
      className="about-section"
    >
      <div className="about-grid">
        <article className="about-item">
          <p className="about-label">Education / 2019–2023</p>
          <h3>VNIT Nagpur</h3>
          <p>B.Tech. in Electronics and Communication Engineering, Visvesvaraya National Institute of Technology.</p>
          <p className="about-highlight">8.61 / 10 CGPA</p>
        </article>
        <article className="about-item">
          <p className="about-label">Recognition / 2024</p>
          <h3>Oracle Pacesetter Award</h3>
          <p>Recognized for setting up CI/CD pipelines to automate deployments and delivering tested, AI-enabled backend features for banking applications.</p>
          <a className="about-link" href={awardUrl} target="_blank" rel="noreferrer">
            View certificate<ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </article>
        <article className="about-item">
          <p className="about-label">Engineering leadership</p>
          <h3>Building team ownership</h3>
          <p>Mentored two junior engineers in DevOps across more than ten environments, including <strong>cloud</strong> environments on OCI.</p>
          <p className="about-highlight">Knowledge shared. Ownership grown.</p>
        </article>
      </div>
    </SectionWrapper>
  );
}
