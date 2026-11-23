import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { leadershipEntries } from "@/lib/portfolio-data";

export default function Community() {
  return (
    <SectionWrapper
      id="community"
      eyebrow="05 / Beyond work"
      title="Leadership & community."
      description="Environmental initiatives, academic mentoring, and campus placement coordination alongside my technical work."
      className="community-section"
    >
      <div className="community-grid">
        {leadershipEntries.map((entry) => (
          <article className="community-card" key={entry.organization}>
            <p className="eyebrow">{entry.category}</p>
            <h3>{entry.organization}</h3>
            <p className="community-role">{entry.role}</p>
            <p className="community-description">{entry.description}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
