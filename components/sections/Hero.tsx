import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { resumePath } from "@/lib/portfolio-data";

const metrics = [
  { value: "60%", label: "faster targeted API responses" },
  { value: "75%", label: "shorter delivery cycle" },
  { value: "80%", label: "test coverage across 17 services" },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate w-full overflow-hidden border-b border-white/[0.07]">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -left-48 top-12 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-60 top-40 h-[34rem] w-[34rem] rounded-full bg-[#5563ff]/10 blur-[160px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-12 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:min-h-[min(900px,100svh)] lg:grid-cols-[minmax(0,1.06fr)_minmax(360px,0.94fr)] lg:gap-16 lg:px-10 lg:pb-20 lg:pt-32 2xl:max-w-[1480px]">
        <div className="min-w-0">
          <div className="mb-6 inline-flex min-h-9 items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.08] px-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#ffb36a] sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(255,138,26,0.8)]" />
            Java Backend Engineer · Oracle
          </div>

          <h1 className="text-balance max-w-[11ch] text-[clamp(2.75rem,8.6vw,5.5rem)] font-black leading-[0.94] tracking-[-0.065em] text-white">
            Building reliable backend systems for banking at scale.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/66 sm:text-lg sm:leading-8">
            I develop Java and Spring Boot microservices, improve distributed-system performance,
            and automate delivery with GenAI, CI/CD, AWS, and OCI.
          </p>

          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
            <Button href="#experience" className="w-full min-[420px]:w-auto">
              Explore my experience
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              href={resumePath}
              variant="secondary"
              download
              className="w-full min-[420px]:w-auto"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download resume
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.035] p-3 sm:mt-12 sm:p-4">
            {metrics.map((metric) => (
              <div key={metric.value} className="min-w-0 px-2 sm:px-4">
                <dt className="text-[0.66rem] leading-4 text-white/48 sm:text-xs sm:leading-5">
                  {metric.label}
                </dt>
                <dd className="mb-1 text-xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
          <div
            className="absolute -inset-4 rotate-2 rounded-[2.2rem] border border-white/[0.08] bg-white/[0.025]"
            aria-hidden="true"
          />
          <div className="relative aspect-[6/5] overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#17100c] shadow-[0_40px_110px_rgba(0,0,0,0.45)] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/assets/orange_bg.png"
              alt=""
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1023px) 90vw, 42vw"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,8,5,0.08),rgba(12,8,5,0.38))]"
              aria-hidden="true"
            />

            <div className="absolute inset-x-4 top-4 z-20 flex items-start justify-between gap-3 sm:inset-x-6 sm:top-6">
              <div className="rounded-2xl border border-white/18 bg-black/20 px-3 py-2 backdrop-blur-md sm:px-4 sm:py-3">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/60">
                  Current focus
                </p>
                <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
                  Banking Origination
                </p>
              </div>
              <span className="rounded-full border border-white/18 bg-black/20 px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/76 backdrop-blur-md sm:text-xs">
                Pune, India
              </span>
            </div>

            <div className="absolute inset-x-[12%] bottom-0 top-[14%] z-10">
              <Image
                src="/assets/emoticon.png"
                alt="3D avatar illustration of Pranay Dumbhare"
                fill
                priority
                className="origin-bottom scale-[1.45] object-contain object-bottom drop-shadow-[0_32px_60px_rgba(0,0,0,0.35)] sm:scale-[1.35] lg:scale-[1.65]"
                sizes="(max-width: 1023px) 78vw, 36vw"
              />
            </div>

            <div className="absolute inset-x-4 bottom-4 z-20 rounded-2xl border border-white/18 bg-[#111216]/74 p-3 backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/45">
                    Core stack
                  </p>
                  <p className="mt-1 truncate text-xs font-semibold text-white sm:text-sm">
                    Java · Spring Boot · Microservices
                  </p>
                </div>
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
