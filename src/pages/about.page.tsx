import {
  ArrowUpRight,
  BookOpen,
  Camera,
  Coffee,
  Code2,
  Heart,
  Music4,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/shared/Reveal";
import SectionIntro from "@/components/shared/SectionIntro";
import { siteData } from "@/data/mockData";

const interestIcons = {
  code: Code2,
  music: Music4,
  camera: Camera,
  book: BookOpen,
  coffee: Coffee,
  heart: Heart,
};

function AboutPage() {
  const stats = [
    { value: "3.90", label: "Current GPA" },
    { value: "7+", label: "Shipped projects" },
    { value: "4", label: "Core stacks" },
    { value: "24h", label: "Avg. response rhythm" },
  ];

  return (
    <div className="space-y-28 pb-20">
      <section className="section-shell pt-8">
        <SectionIntro
          badge="About"
          title={siteData.about.title}
          description={siteData.about.summary}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="glass-panel rounded-[34px] p-7 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-sky-200/70">
                Journey
              </p>
              <div className="mt-6 space-y-5 text-base leading-8 text-foreground/74 dark:text-slate-300">
                {siteData.about.journeyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-6">
              <div className="glass-panel rounded-[34px] p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-sky-200/70">
                  Snapshot
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[24px] border border-black/6 bg-black/[0.03] p-4 dark:border-white/8 dark:bg-black/20"
                    >
                      <p className="text-3xl font-semibold tracking-[-0.05em] text-foreground dark:text-white">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-[34px] p-7">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-sky-200/70">
                    Experience highlights
                  </p>
                  <Sparkles className="h-4 w-4 text-sky-300" />
                </div>
                <div className="mt-5 space-y-4">
                  {siteData.timeline.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start justify-between gap-4 rounded-[24px] border border-white/8 bg-white/[0.03] p-4"
                    >
                      <div>
                        <p className="font-medium text-foreground dark:text-white">{item.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>
                      </div>
                      <Badge className="rounded-full border border-black/6 bg-black/[0.03] text-foreground/78 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
                        {item.startDate}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <SectionIntro
          badge="Principles"
          title={siteData.about.valuesSection.title}
          description={siteData.about.valuesSection.description}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {siteData.about.valuesSection.items.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.08}>
              <div className="glass-panel group rounded-[30px] p-6 transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-foreground dark:text-white">
                    {value.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-300" />
                </div>
                <p className="mt-4 leading-7 text-foreground/72 dark:text-slate-300">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionIntro
            badge="Stack"
            title="Preferred stack and working rhythm."
            description="I like product-focused systems that stay clean under growth: strong UI structure, reliable motion, and implementation details that respect performance."
          />
          <Reveal delay={0.06}>
            <div className="glass-panel rounded-[34px] p-7">
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Node.js",
                  "MongoDB",
                  "Figma",
                  "Shadcn/UI",
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="rounded-full border border-black/6 bg-black/[0.03] px-4 py-2 text-sm text-foreground/78 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Design to code",
                    body: "Comfortable turning high-fidelity direction into production UI.",
                  },
                  {
                    title: "Motion restraint",
                    body: "Animations support hierarchy and feel, not decoration for its own sake.",
                  },
                  {
                    title: "Scalable systems",
                    body: "Reusable patterns, clear spacing, and better long-term maintainability.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-black/6 bg-black/[0.03] p-4 dark:border-white/8 dark:bg-black/20"
                  >
                    <p className="font-medium text-foreground dark:text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <SectionIntro
          badge="Beyond work"
          title={siteData.about.interestsSection.title}
          description={siteData.about.interestsSection.description}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {siteData.about.interestsSection.items.map((interest, index) => {
            const Icon = interestIcons[interest.icon];

            return (
              <Reveal key={interest.name} delay={index * 0.06}>
                <div className="glass-panel rounded-[30px] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-sky-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground dark:text-white">
                    {interest.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/72 dark:text-slate-300">
                    {interest.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
