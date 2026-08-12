import { Download } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { navigationLinks, resumePath } from "@/lib/portfolio-data";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between rounded-2xl border border-white/10 bg-[#0b0c0f]/82 px-3 py-2 shadow-[0_12px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-4 2xl:max-w-[1480px]">
        <Link
          href="/#home"
          aria-label="Pranay Dumbhare — back to home"
          className="flex min-h-11 items-center gap-3 rounded-xl pr-2"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-sm font-black text-[#17100a]">
            PD
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-white sm:block">
            Pranay Dumbhare
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium text-white/66 transition hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href={resumePath}
            variant="secondary"
            download
            className="h-11 px-4"
            ariaLabel="Download Pranay Dumbhare's resume"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            <span>Resume</span>
          </Button>
          <Button href="/#contact" className="hidden lg:inline-flex">
            Let&apos;s talk
          </Button>

          <details className="mobile-menu relative lg:hidden">
            <summary
              aria-label="Open navigation menu"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/14 bg-white/[0.06]"
            >
              <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
                <span className="menu-line h-px w-4 bg-white transition" />
                <span className="menu-line h-px w-4 bg-white transition" />
              </span>
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-[calc(100%+0.7rem)] w-56 overflow-hidden rounded-2xl border border-white/12 bg-[#111216] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.5)]"
            >
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex min-h-12 items-center rounded-xl px-4 text-sm font-medium text-white/76 hover:bg-white/[0.07] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="mt-1 flex min-h-12 items-center rounded-xl bg-accent px-4 text-sm font-bold text-[#17100a]"
              >
                Let&apos;s talk
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
