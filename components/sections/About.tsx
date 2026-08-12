import { ArrowUpRight, Award, BookOpen, GraduationCap } from "lucide-react";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { aboutCopy, awardUrl, publicationUrl } from "@/lib/portfolio-data";

export default function About() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About"
      title="Engineering depth, backed by research and ownership."
      description={aboutCopy}
      className="border-t border-white/[0.06]"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-5 sm:p-7">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/10 text-accent">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-white/42">Education</p>
          <h3 className="mt-2 text-xl font-bold leading-snug text-white">
            Visvesvaraya National Institute of Technology, Nagpur
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/58">
            B.Tech in Electronics &amp; Communication Engineering · 2019–2023
          </p>
          <p className="mt-5 text-sm font-bold text-[#ffb36a]">CGPA 8.61 / 10.00</p>
        </article>

        <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-5 sm:p-7">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-400/10 text-violet-300">
            <BookOpen className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-white/42">Publication</p>
          <h3 className="mt-2 text-xl font-bold text-white">Hybrid HoVer-Net</h3>
          <p className="mt-3 text-sm leading-6 text-white/58">
            Co-authored a deep-learning method for colon-nuclei segmentation that achieved 91%
            accuracy, improving the baseline by 3%.
          </p>
          <a
            href={publicationUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-violet-300 hover:text-white"
          >
            CVIP 2022 · Springer
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </article>

        <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-5 sm:p-7">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-400/10 text-emerald-300">
            <Award className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-white/42">
            Recognition &amp; Leadership
          </p>
          <h3 className="mt-2 text-xl font-bold text-white">Oracle Pacesetter Award</h3>
          <p className="mt-3 text-sm leading-6 text-white/58">
            Recognized for team contributions; also co-founded Vaneesha Rise Foundation and
            mentored students through Avanti Fellows.
          </p>
          <a
            href={awardUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-emerald-300 hover:text-white"
          >
            View award
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </article>
      </div>
    </SectionWrapper>
  );
}
