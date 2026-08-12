import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/Button";
import Navbar from "@/components/ui/Navbar";
import { resumePath } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Pranay Dumbhare, a Java backend engineer specializing in Spring Boot, microservices, performance engineering, GenAI automation, and CI/CD.",
};

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-background px-5 pb-16 pt-32 text-white sm:px-8 sm:pt-36 lg:px-10">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-accent/10 blur-[130px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1180px] 2xl:max-w-[1480px]">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/60 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to portfolio
          </Link>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent sm:text-sm">
                Resume
              </p>
              <h1 className="mt-3 text-balance text-[clamp(2.4rem,7vw,5rem)] font-black leading-[0.96] tracking-[-0.06em]">
                Pranay Dumbhare
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                Java Backend Engineer · Spring Boot · Microservices · Performance Engineering ·
                GenAI Automation · AWS &amp; OCI
              </p>
            </div>

            <div className="flex flex-col gap-3 min-[430px]:flex-row">
              <Button href={resumePath} download>
                <Download className="h-4 w-4" aria-hidden="true" />
                Download PDF
              </Button>
              <Button href={resumePath} variant="secondary" external>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Open PDF
              </Button>
            </div>
          </div>

          <section className="mt-10 rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-4 sm:p-5">
            <div className="rounded-2xl border border-white/10 bg-[#111216] p-5 text-center md:hidden">
              <p className="text-sm leading-6 text-white/62">
                For the clearest mobile view, open or download the one-page PDF using the buttons
                above.
              </p>
            </div>
            <iframe
              src={`${resumePath}#view=FitH`}
              title="Pranay Dumbhare resume PDF"
              className="hidden h-[1050px] w-full rounded-xl bg-white md:block"
            />
          </section>
        </div>
      </main>
    </>
  );
}
