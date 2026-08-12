import { Bot, Gauge, Leaf, PanelsTopLeft } from "lucide-react";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { workEntries, type WorkEntry } from "@/lib/portfolio-data";

const accentStyles = {
  orange: {
    shell: "border-accent/20 bg-[linear-gradient(145deg,rgba(255,138,26,0.09),rgba(255,255,255,0.025)_55%)]",
    icon: "bg-accent/12 text-[#ffad5d]",
    glow: "bg-accent/10",
    Icon: PanelsTopLeft,
  },
  violet: {
    shell: "border-violet-400/20 bg-[linear-gradient(145deg,rgba(139,92,246,0.09),rgba(255,255,255,0.025)_55%)]",
    icon: "bg-violet-400/12 text-violet-300",
    glow: "bg-violet-400/10",
    Icon: Bot,
  },
  blue: {
    shell: "border-blue-400/20 bg-[linear-gradient(145deg,rgba(59,130,246,0.09),rgba(255,255,255,0.025)_55%)]",
    icon: "bg-blue-400/12 text-blue-300",
    glow: "bg-blue-400/10",
    Icon: Gauge,
  },
  green: {
    shell: "border-emerald-400/20 bg-[linear-gradient(145deg,rgba(52,211,153,0.08),rgba(255,255,255,0.025)_55%)]",
    icon: "bg-emerald-400/12 text-emerald-300",
    glow: "bg-emerald-400/10",
    Icon: Leaf,
  },
};

function WorkCard({ work }: { work: WorkEntry }) {
  const styles = accentStyles[work.accent];
  const Icon = styles.Icon;

  return (
    <article className={`group relative overflow-hidden rounded-[1.75rem] border p-5 sm:p-7 ${styles.shell}`}>
      <div
        className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-[70px] transition duration-300 group-hover:scale-125 ${styles.glow}`}
        aria-hidden="true"
      />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <span className={`grid h-11 w-11 place-items-center rounded-2xl ${styles.icon}`}>
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="rounded-full border border-white/10 bg-black/15 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/54">
            {work.impact}
          </span>
        </div>

        <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-white/42">
          {work.eyebrow}
        </p>
        <h3 className="mt-2 text-balance text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
          {work.title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-white/62 sm:text-base">
          {work.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2 border-t border-white/[0.08] pt-5">
          {work.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-white/58"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <SectionWrapper
      id="work"
      eyebrow="Work"
      title="Systems and workflows I have built."
      description="A closer look at the backend, GenAI, performance, and product work behind the outcomes in my experience."
      className="border-y border-white/[0.06] bg-white/[0.012]"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {workEntries.map((work) => (
          <WorkCard key={work.title} work={work} />
        ))}
      </div>
    </SectionWrapper>
  );
}
