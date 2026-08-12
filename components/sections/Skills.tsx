import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { skillGroups } from "@/lib/portfolio-data";

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      eyebrow="Skills"
      title="A Java-first stack for dependable backend delivery."
      description="Organized by how I use the tools in practice—from service development and data access to performance testing and cloud delivery."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <article
            key={group.title}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-5 sm:p-7"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent/10 text-xs font-black text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">{group.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/50">{group.description}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
