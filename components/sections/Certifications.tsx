import { ArrowUpRight } from "lucide-react";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { certificationEntries } from "@/lib/portfolio-data";

export default function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      eyebrow="06 / Continued learning"
      title="Certifications."
      description="Oracle Cloud Infrastructure credentials in AI foundations and generative AI."
      className="certifications-section"
    >
      <div className="certification-grid">
        {certificationEntries.map((entry) => (
          <article className="certification-card" key={entry.title}>
            <p className="eyebrow">{entry.issuer}</p>
            <h3>{entry.title}</h3>
            <dl className="certification-dates">
              <div><dt>Earned</dt><dd>{entry.issued}</dd></div>
              <div><dt>Valid until</dt><dd>{entry.validUntil}</dd></div>
            </dl>
            <a className="text-link" href={entry.certificatePath} target="_blank" rel="noopener noreferrer">
              View certificate<ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
