import { ArrowUpRight } from "lucide-react";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { certificationEntries } from "@/lib/portfolio-data";

export default function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      eyebrow="06 / Continued learning"
      title="Certifications & learning."
      description="OCI certifications and selected cloud and machine learning courses, chosen for relevance to my engineering work."
      className="certifications-section"
    >
      <div className="certification-grid">
        {certificationEntries.map((entry) => (
          <article className="certification-card" key={entry.title}>
            <p className="eyebrow">{entry.issuer}</p>
            <p className="certification-kind">{entry.kind}</p>
            <h3>{entry.title}</h3>
            <dl className="certification-dates">
              <div><dt>Earned</dt><dd>{entry.issued}</dd></div>
              {entry.validUntil && <div><dt>Valid until</dt><dd>{entry.validUntil}</dd></div>}
              {entry.credentialId && <div><dt>Credential ID</dt><dd className="credential-id">{entry.credentialId}</dd></div>}
            </dl>
            <a className="text-link" href={entry.href} target="_blank" rel="noopener noreferrer">
              {entry.linkLabel}<ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
