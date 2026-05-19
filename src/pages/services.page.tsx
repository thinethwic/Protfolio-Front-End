import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  Palette,
  Rocket,
  Server,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/shared/Reveal";
import SectionIntro from "@/components/shared/SectionIntro";
import { siteData } from "@/data/mockData";

const serviceIcons = {
  code: Code2,
  palette: Palette,
  server: Server,
  rocket: Rocket,
  database: Database,
  briefcase: BriefcaseBusiness,
};

const serviceTechLogoMap: Record<string, string> = {
  React: "https://cdn.simpleicons.org/react/61DAFB",
  TypeScript: "https://cdn.simpleicons.org/typescript/3178C6",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  Vite: "https://cdn.simpleicons.org/vite/646CFF",
  "Shadcn UI": "https://cdn.simpleicons.org/shadcnui/000000",
  "Java Spring Boot": "https://cdn.simpleicons.org/springboot/6DB33F",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs/5FA04E",
  "Spring Security": "https://cdn.simpleicons.org/springsecurity/6DB33F",
  JWT: "https://cdn.simpleicons.org/jsonwebtokens/000000",
  "Express.js": "https://cdn.simpleicons.org/express/000000",
  MongoDB: "https://cdn.simpleicons.org/mongodb/47A248",
  PostgreSQL: "https://cdn.simpleicons.org/postgresql/4169E1",
  Clerk: "https://cdn.simpleicons.org/clerk/6C47FF",
  Figma: "https://cdn.simpleicons.org/figma/F24E1E",
  "Responsive Design": "https://cdn.simpleicons.org/css3/1572B6",
  "UI/UX Design": "https://cdn.simpleicons.org/framer/0055FF",
  Prototyping: "https://cdn.simpleicons.org/framer/0055FF",
  MySQL: "https://cdn.simpleicons.org/mysql/4479A1",
  "SQL Server Management":
    "https://cdn.simpleicons.org/microsoftsqlserver/CC2927",
  "Google Cloud": "https://cdn.simpleicons.org/googlecloud/4285F4",
  "Role-Based Access": "https://cdn.simpleicons.org/auth0/EB5424",
};

function ServiceTechChip({ tech }: { tech: string }) {
  const logoUrl = serviceTechLogoMap[tech];
  const fallback = tech
    .split(/[\s/.+-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-black/6 bg-white/78 px-3 py-2 text-sm text-foreground/80 shadow-[0_8px_18px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:shadow-none">
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={`${tech} logo`}
          className="h-4 w-4 object-contain"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black/8 text-[9px] font-semibold text-foreground/70 dark:bg-white/12 dark:text-slate-100">
          {fallback}
        </span>
      )}
      <span>{tech}</span>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="space-y-24 pb-20">
      <section className="section-shell pt-8">
        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <Reveal className="space-y-8">
            <SectionIntro
              badge="Services"
              title={siteData.servicesPage.title}
              description={siteData.servicesPage.description}
            />

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Core services", value: `${siteData.services.length}` },
                { label: "Delivery style", value: "End-to-End" },
                { label: "Focus", value: "Usability + Scale" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-panel rounded-[26px] p-5"
                >
                  <p className="text-2xl font-semibold tracking-[-0.05em] text-foreground dark:text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel relative overflow-hidden rounded-[36px] p-6 sm:p-8">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/20" />
              <div className="absolute right-6 top-6 rounded-full border border-sky-500/16 bg-sky-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-sky-700 dark:text-sky-200">
                Trusted workflow
              </div>

              <div className="max-w-xl space-y-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-sky-700/80 dark:text-sky-200/70">
                    What clients get
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-foreground dark:text-white sm:text-4xl">
                    Clean product thinking, strong implementation, and reliable delivery.
                  </h2>
                </div>

                <div className="grid gap-4">
                  {[
                    "Modern UI systems that feel polished and easy to use",
                    "Scalable backend architecture for real business workflows",
                    "Responsive interfaces optimized for desktop and mobile",
                    "Clear collaboration from planning to launch",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[22px] border border-black/6 bg-black/[0.025] p-4 dark:border-white/8 dark:bg-black/20"
                    >
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-600 dark:text-emerald-300">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <p className="text-sm leading-7 text-foreground/76 dark:text-slate-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 xl:grid-cols-2">
          {siteData.services.map((service, index) => {
            const Icon = serviceIcons[service.icon];

            return (
              <Reveal key={service.title} delay={index * 0.05}>
                <article className="glass-panel group rounded-[36px] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[22px] border border-black/6 bg-gradient-to-br from-sky-400/18 via-white to-violet-400/16 text-sky-700 shadow-[0_14px_34px_rgba(15,23,42,0.08)] dark:border-white/10 dark:from-sky-400/18 dark:via-white/[0.06] dark:to-violet-400/16 dark:text-white dark:shadow-none">
                      <Icon className="h-7 w-7" />
                    </div>
                    <Badge className="rounded-full border border-black/6 bg-black/[0.03] px-3 py-1 text-foreground/78 dark:border-white/10 dark:bg-white/[0.06] dark:text-sky-200">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </Badge>
                  </div>

                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-sky-700/80 dark:text-sky-200/70">
                        Tailored offering
                      </p>
                      <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-[-0.04em] text-foreground dark:text-white">
                        {service.title}
                      </h2>
                    </div>
                    <Sparkles className="mt-1 h-4 w-4 text-sky-500/70 dark:text-sky-300" />
                  </div>

                  <p className="mt-4 text-base leading-8 text-foreground/76 dark:text-slate-300">
                    {service.description}
                  </p>

                  <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.95fr]">
                    <div className="rounded-[26px] border border-black/6 bg-black/[0.025] p-5 dark:border-white/8 dark:bg-black/20">
                      <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Deliverables
                      </h3>
                      <div className="grid gap-3">
                        {service.deliverables.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 rounded-[18px] border border-black/6 bg-white/72 px-4 py-3 shadow-[0_8px_18px_rgba(15,23,42,0.04)] dark:border-white/8 dark:bg-white/[0.04] dark:shadow-none"
                          >
                            <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-300">
                              <Check className="h-3.5 w-3.5" />
                            </span>
                            <p className="text-sm leading-7 text-foreground/76 dark:text-slate-300">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[26px] border border-black/6 bg-black/[0.025] p-5 dark:border-white/8 dark:bg-black/20">
                      <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <ServiceTechChip key={tech} tech={tech} />
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell">
        <SectionIntro
          badge="Process"
          title={siteData.servicesPage.processTitle}
          description={siteData.servicesPage.processDescription}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {siteData.servicesPage.process.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.05}>
              <div className="glass-panel relative rounded-[30px] p-6">
                <div className="absolute right-5 top-5 text-4xl font-semibold tracking-[-0.08em] text-sky-500/10 dark:text-sky-300/10">
                  {step.step}
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.26em] text-sky-700 dark:text-sky-200">
                  Step {step.step}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-foreground dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-foreground/74 dark:text-slate-300">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <Reveal>
          <div className="glass-panel relative overflow-hidden rounded-[40px] p-8 sm:p-10">
            <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-sky-500/8 via-violet-500/6 to-transparent lg:block" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-sky-700 dark:text-sky-200">
                  Start a project
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-foreground dark:text-white sm:text-4xl">
                  {siteData.servicesPage.cta.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-foreground/76 dark:text-slate-300">
                  {siteData.servicesPage.cta.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button asChild size="lg">
                  <a href="/contact">
                    Get In Touch <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href={`mailto:${siteData.personal.email}`}>Discuss a Project</a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default ServicesPage;
