import { ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { experienceEntries, type ExperienceEntry } from "@/lib/portfolio-data";

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <article
      className={
        entry.featured
          ? "rounded-[2rem] border border-accent/22 bg-[linear-gradient(135deg,rgba(255,138,26,0.08),rgba(255,255,255,0.025)_42%)] p-5 shadow-[0_26px_80px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10"
          : "rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-5 sm:p-7"
      }
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <a
            href={entry.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold uppercase tracking-[0.18em] text-accent hover:text-[#ffb36a]"
          >
            {entry.company}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <h3 className="mt-1 text-balance text-2xl font-black tracking-[-0.035em] text-white sm:text-3xl">
            {entry.role}
          </h3>
          <p className="mt-2 text-sm font-medium text-white/56 sm:text-base">{entry.team}</p>
        </div>
        <div className="shrink-0 sm:text-right">
          <p className="text-sm font-semibold text-white/76">{entry.period}</p>
          <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/44">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {entry.location}
          </p>
        </div>
      </div>

      <ul
        className={
          entry.featured
            ? "mt-7 grid gap-x-8 gap-y-4 lg:grid-cols-2"
            : "mt-6 space-y-3.5"
        }
      >
        {entry.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-white/66 sm:text-[0.95rem] sm:leading-7">
            <CheckCircle2
              className="mt-1 h-4 w-4 shrink-0 text-accent"
              strokeWidth={2.2}
              aria-hidden="true"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-wrap gap-2 border-t border-white/[0.08] pt-5">
        {entry.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-white/58"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Experience() {
  const [currentRole, ...earlierRoles] = experienceEntries;

  return (
    <SectionWrapper
      id="experience"
      eyebrow="Experience"
      title="Backend development with measurable delivery impact."
      description="Feature development is the core of my role, supported by performance engineering, test automation, and deployment ownership across distributed banking services."
    >
      <div className="space-y-6">
        <ExperienceCard entry={currentRole} />
        <div className="grid gap-6 lg:grid-cols-2">
          {earlierRoles.map((entry) => (
            <ExperienceCard key={`${entry.company}-${entry.role}`} entry={entry} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
