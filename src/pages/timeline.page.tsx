import { Award, Briefcase, GraduationCap } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionIntro from "@/components/shared/SectionIntro";
import { siteData } from "@/data/mockData";

const iconMap = {
  briefcase: Briefcase,
  "graduation-cap": GraduationCap,
  award: Award,
};

const colorMap = {
  work: "from-sky-400/30 to-cyan-400/10 text-sky-200",
  education: "from-emerald-400/30 to-teal-400/10 text-emerald-200",
  certification: "from-violet-400/30 to-fuchsia-400/10 text-violet-200",
};

function TimelinePage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="section-shell pt-8">
        <SectionIntro
          badge="Journey"
          title={siteData.timelinePage.title}
          description={siteData.timelinePage.description}
        />
      </section>

      <section className="section-shell">
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-sky-400/40 via-white/10 to-transparent sm:left-1/2 sm:-translate-x-px" />
          <div className="space-y-8">
            {siteData.timeline.map((item, index) => {
              const Icon = iconMap[item.icon];
              const reverse = index % 2 === 1;

              return (
                <Reveal key={item.id} delay={index * 0.05}>
                  <div
                    className={`relative grid gap-4 sm:grid-cols-2 ${
                      reverse ? "sm:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div
                      className={`hidden sm:block ${
                        reverse ? "text-left" : "text-right"
                      }`}
                    >
                      {!reverse ? (
                        <span className="inline-flex rounded-full border border-black/8 bg-white/72 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400">
                          {item.startDate}
                          {item.endDate ? ` - ${item.endDate}` : ""}
                        </span>
                      ) : null}
                    </div>

                    <div className="relative sm:pl-12">
                      <span className="absolute left-0 top-8 z-10 flex h-9 w-9 -translate-x-[1.05rem] items-center justify-center rounded-full border border-white/10 bg-slate-950 shadow-[0_0_0_6px_rgba(8,10,15,1)] sm:left-0">
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${colorMap[item.type]}`}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                      </span>
                      <div className="glass-panel rounded-[30px] p-6">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full border border-black/8 bg-white/72 px-3 py-1 text-xs uppercase tracking-[0.24em] text-muted-foreground dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400 sm:hidden">
                            {item.startDate}
                            {item.endDate ? ` - ${item.endDate}` : ""}
                          </span>
                          <span className="rounded-full border border-black/6 bg-black/[0.03] px-3 py-1 text-xs text-foreground/78 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
                            {item.type}
                          </span>
                        </div>
                        <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-foreground dark:text-white">
                          {item.title}
                        </h2>
                        <p className="mt-2 text-sm text-sky-200">{item.company}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{item.location}</p>
                        <p className="mt-5 leading-7 text-foreground/74 dark:text-slate-300">
                          {item.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-black/6 bg-black/[0.03] px-3 py-1 text-xs text-foreground/74 dark:border-white/8 dark:bg-black/20 dark:text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className={`${reverse ? "block" : "hidden"} sm:block`}>
                      {reverse ? (
                        <span className="hidden rounded-full border border-black/8 bg-white/72 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400 sm:inline-flex">
                          {item.startDate}
                          {item.endDate ? ` - ${item.endDate}` : ""}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TimelinePage;
