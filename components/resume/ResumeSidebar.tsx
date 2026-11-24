import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { awardDescription, awardUrl, certificationEntries, skillGroups } from "@/lib/portfolio-data";

export default function ResumeSidebar() {
  return (
    <div className="resume-side-column">
      <section id="resume-skills" className="resume-card" aria-labelledby="resume-skills-title">
        <header className="resume-card-heading">
          <p className="eyebrow">04 / Skills</p>
          <h2 id="resume-skills-title">Technical skills</h2>
        </header>
        {skillGroups.map((group) => (
          <div className="resume-skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="resume-skill-list" aria-label={group.title}>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section id="resume-education" className="resume-card" aria-labelledby="resume-education-title">
        <header className="resume-card-heading">
          <p className="eyebrow">05 / Education</p>
          <h2 id="resume-education-title">Education</h2>
        </header>
        <h3 className="resume-school">Visvesvaraya National Institute of Technology, Nagpur</h3>
        <p className="resume-qualification">B.Tech. in Electronics and Communication Engineering</p>
        <p className="resume-period">
          <time dateTime="2019-07">Jul 2019</time> – <time dateTime="2023-06">Jun 2023</time>
        </p>
        <p className="resume-grade">CGPA: 8.61 / 10</p>
      </section>

      <section id="resume-recognition" className="resume-card" aria-labelledby="resume-recognition-title">
        <header className="resume-card-heading">
          <p className="eyebrow">06 / Recognition</p>
          <h2 id="resume-recognition-title">Recognition</h2>
        </header>
        <h3 className="resume-award-title">Oracle Pacesetter Award</h3>
        <p className="resume-period"><time dateTime="2024">2024</time></p>
        <p className="resume-award-copy">
          {awardDescription}
        </p>
        <a className="resume-award-link" href={awardUrl} target="_blank" rel="noopener noreferrer">
          View certificate<ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </section>

      <section id="resume-certifications" className="resume-card" aria-labelledby="resume-certifications-title">
        <header className="resume-card-heading">
          <p className="eyebrow">07 / Continued learning</p>
          <h2 id="resume-certifications-title">Credentials</h2>
        </header>
        {certificationEntries.map((entry) => (
          <article className="resume-certification" key={entry.title}>
            <h3>{entry.title}</h3>
            <p className="resume-certification-issuer">{entry.issuer}</p>
            <p className="resume-credential-kind">{entry.kind}</p>
            <p className="resume-certification-dates">Earned {entry.issued}{entry.validUntil && <><br />Valid until {entry.validUntil}</>}</p>
            {entry.credentialId && <p className="resume-credential-id">Credential ID: <span>{entry.credentialId}</span></p>}
            <a className="resume-award-link" href={entry.href} target="_blank" rel="noopener noreferrer">
              {entry.linkLabel}<ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>
        ))}
      </section>

      <section className="resume-card resume-personal-card" aria-labelledby="resume-personal-title">
        <header className="resume-card-heading">
          <p className="eyebrow">Beyond the code</p>
          <h2 id="resume-personal-title">Me &amp; my cat.</h2>
        </header>
        <figure>
          <div className="resume-companion-image">
            <Image
              src="/assets/me_and_cat.png"
              alt="Playful illustration of Pranay and his cat wearing heart-shaped glasses"
              fill
              sizes="(max-width: 699px) 220px, 240px"
            />
          </div>
          <figcaption>A little personality behind the profile.</figcaption>
        </figure>
      </section>
    </div>
  );
}
