import { ArrowUpRight, Plus } from "lucide-react";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { experienceEntries, type ExperienceEntry } from "@/lib/portfolio-data";

function emphasizeAccountWork(text: string) {
  return text.split(/(account[- ]opening|account originations?|\bcloud\b)/gi).map((part, index) => (
    /^(?:account(?:[- ]opening| originations?)|cloud)$/i.test(part)
      ? <strong key={index}>{part}</strong>
      : part
  ));
}

function ExperienceEntryView({ entry }: { entry: ExperienceEntry }) {
  const visibleBullets = entry.featured ? entry.bullets.slice(0, 6) : entry.bullets;
  const additionalBullets = entry.featured ? entry.bullets.slice(6) : [];

  return (
    <article className="experience-entry">
      <div className="experience-meta">
        <a className="experience-company" href={entry.companyUrl} target="_blank" rel="noreferrer">
          {entry.company}
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <p className="experience-period">{entry.period}</p>
        {entry.location && <p className="experience-location">{entry.location}</p>}
      </div>
      <div className="experience-body">
        <h3>{entry.role}</h3>
        <p className="experience-team">{emphasizeAccountWork(entry.team)}</p>
        {entry.note && <p className="experience-progression">{entry.note}</p>}
        <ul className="experience-bullets">
          {visibleBullets.map((bullet) => <li key={bullet}>{emphasizeAccountWork(bullet)}</li>)}
        </ul>
        {additionalBullets.length > 0 && (
          <details className="experience-more">
            <summary>
              More engineering contributions ({additionalBullets.length})
              <Plus size={17} aria-hidden="true" />
            </summary>
            <ul className="experience-bullets">
              {additionalBullets.map((bullet) => <li key={bullet}>{emphasizeAccountWork(bullet)}</li>)}
            </ul>
          </details>
        )}
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      eyebrow="01 / Experience"
      title="From API design to production."
      description="Backend development for account origination and lending, plus earlier internships in medical image analysis and search systems."
    >
      <div className="experience-list">
        {experienceEntries.map((entry) => (
          <ExperienceEntryView key={`${entry.company}-${entry.role}`} entry={entry} />
        ))}
      </div>
    </SectionWrapper>
  );
}
