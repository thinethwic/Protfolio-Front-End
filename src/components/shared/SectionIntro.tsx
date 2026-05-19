import Reveal from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

interface SectionIntroProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

function SectionIntro({
  badge,
  title,
  description,
  align = "left",
  className,
}: SectionIntroProps) {
  const isCenter = align === "center";

  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        isCenter && "mx-auto text-center",
        className
      )}
    >
      {badge ? (
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/70 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.28em] text-sky-800 shadow-[0_8px_24px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.04] dark:text-sky-200/80 dark:shadow-none">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-sky-400" />
          {badge}
        </span>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl md:text-5xl dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-balance text-base leading-7 text-foreground/72 sm:text-lg dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export default SectionIntro;
