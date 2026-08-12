import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("relative w-full scroll-mt-28 py-20 sm:py-24 lg:py-28", className)}>
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10 2xl:max-w-[1480px]">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
            {eyebrow}
          </p>
          <h2 className="text-balance text-[clamp(2rem,5.5vw,3.6rem)] font-black leading-[1.02] tracking-[-0.05em] text-white">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
