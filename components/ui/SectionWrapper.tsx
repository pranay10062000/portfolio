import { cn } from "@/lib/utils";

type SectionWrapperProps = { id: string; eyebrow: string; title: string; description?: string; children: React.ReactNode; className?: string };

export function SectionWrapper({ id, eyebrow, title, description, children, className }: SectionWrapperProps) {
  const descriptionContent = description?.split(/(account[- ]opening|account originations?)/gi).map((part, index) =>
    /^account(?:[- ]opening| originations?)$/i.test(part) ? <strong key={index}>{part}</strong> : part,
  );
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("section", className)}>
      <div className="container">
        <header className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <div><h2 id={`${id}-title`}>{title}</h2>{description ? <p className="section-description">{descriptionContent}</p> : null}</div>
        </header>
        {children}
      </div>
    </section>
  );
}
