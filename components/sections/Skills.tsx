import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { skillGroups } from "@/lib/portfolio-data";

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      eyebrow="03 / Skills"
      title="The tools behind the work."
      description="A Java-first foundation, with experience across data, delivery, performance, and applied AI."
    >
      <div className="skill-list">
        {skillGroups.map((group, index) => (
          <article key={group.title} className="skill-row">
            <div className="skill-heading">
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.title}</h3>
            </div>
            <ul className="skill-items" aria-label={group.title}>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
