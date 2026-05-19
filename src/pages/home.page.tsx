import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Palette,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TypingHeading from "@/components/shared/TypingHeading";
import Reveal from "@/components/shared/Reveal";
import SectionIntro from "@/components/shared/SectionIntro";
import { siteData } from "@/data/mockData";

const homeSkillIcons = {
  code: Code2,
  palette: Palette,
  rocket: Rocket,
};

const socialIconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Sparkles,
  mail: Mail,
};

function HomePage() {
  const featuredProjects = siteData.projects.filter((project) =>
    new Set(siteData.home.featuredProjectsSection.projectIds).has(
      project.id as 1 | 2 | 3
    )
  );

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = siteData.personal.resumeUrl;
    link.download = siteData.personal.resumeFileName;
    link.click();
  };

  return (
    <div className="pb-20">
      <section className="section-shell relative pt-10 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="relative">
            <Reveal className="space-y-8">
              <TypingHeading />
              <p className="max-w-2xl text-balance text-lg leading-8 text-foreground/78 sm:text-xl">
                {siteData.home.heroDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link to="/projects">
                    Explore Selected Work <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" onClick={downloadResume}>
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {siteData.socialLinks.map((social) => {
                  const Icon = socialIconMap[social.icon];

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/65 px-4 py-2 text-sm text-foreground/80 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-0.5 hover:bg-white hover:text-foreground dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:shadow-none dark:hover:bg-white/[0.08] dark:hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                      {social.name}
                    </a>
                  );
                })}
              </div>
            </Reveal>

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-8 hidden rounded-2xl border border-black/8 bg-white/80 px-4 py-3 text-sm text-sky-950 shadow-[0_16px_40px_rgba(15,23,42,0.14)] backdrop-blur-xl xl:block dark:border-white/10 dark:bg-white/[0.04] dark:text-sky-100 dark:shadow-[0_14px_50px_rgba(6,10,24,0.32)]"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-sky-700/70 dark:text-sky-200/70">
                Shipping
              </p>
              <p className="mt-2 font-medium">Interfaces that feel precise</p>
            </motion.div>
          </div>

          <Reveal delay={0.1} className="relative">
            <div className="relative overflow-hidden rounded-[38px] border border-black/8 bg-white/80 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_24px_80px_rgba(6,10,24,0.42)]">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/30" />
              <div className="absolute right-5 top-5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-200">
                Open to work
              </div>

              <div className="grid gap-4 lg:grid-rows-[auto_1fr_auto]">
                <div className="flex items-start justify-between gap-4 px-3 pt-3">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-sky-700/80 dark:text-sky-200/70">
                      Personal brand
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-foreground/72 dark:text-slate-300">
                      Blending product thinking, motion, and frontend craft to
                      build elegant developer experiences.
                    </p>
                  </div>
                </div>

                <div className="relative mx-auto flex w-full max-w-[28rem] justify-center overflow-hidden rounded-[32px] border border-black/6 bg-gradient-to-br from-sky-100 via-white to-violet-100 p-4 dark:border-white/10 dark:from-sky-400/15 dark:via-slate-950 dark:to-violet-400/10">
                  <div className="absolute inset-x-10 top-0 h-32 rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-400/20" />
                  <img
                    src={siteData.personal.avatarUrl}
                    alt={siteData.personal.fullName}
                    className="relative z-10 h-[26rem] w-full rounded-[28px] object-cover object-top shadow-[0_22px_60px_rgba(15,23,42,0.18)] sm:h-[34rem]"
                  />
                </div>

                <div className="grid gap-4 px-3 pb-3 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="grid gap-4 sm:grid-cols-3 sm:col-span-2">
                    {[
                      { label: "Projects launched", value: "07" },
                      { label: "Years building", value: "04+" },
                      { label: "Design systems", value: "05" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-[24px] border border-black/6 bg-white/70 p-4 shadow-[0_10px_28px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-black/20 dark:shadow-none"
                      >
                        <p className="text-2xl font-semibold tracking-[-0.05em] text-foreground dark:text-white">
                          {stat.value}
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[28px] border border-black/6 bg-white/72 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-black/20 dark:shadow-none">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700 dark:text-sky-200">
                        <BriefcaseBusiness className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-foreground dark:text-white">
                          Current focus
                        </p>
                        <p className="text-sm text-muted-foreground">
                          React interfaces and SaaS-style UX.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["React", "TypeScript", "Framer Motion", "Tailwind CSS"].map(
                        (tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="rounded-full border border-black/6 bg-black/[0.03] px-3 py-1 text-foreground/75 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
                          >
                            {tag}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell mt-28">
        <SectionIntro
          badge="Capabilities"
          title={siteData.home.whatIDo.title}
          description={siteData.home.whatIDo.description}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {siteData.home.whatIDo.items.map((skill, index) => {
            const Icon = homeSkillIcons[skill.icon];

            return (
              <Reveal key={skill.name} delay={index * 0.08}>
                <div className="group rounded-[30px] border border-black/8 bg-white/75 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/15 to-violet-500/15 text-sky-700 dark:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-foreground dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="mt-3 leading-7 text-foreground/72 dark:text-slate-300">
                    {skill.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell mt-28">
        <SectionIntro
          badge="Selected work"
          title={siteData.home.featuredProjectsSection.title}
          description={siteData.home.featuredProjectsSection.description}
        />
        <div className="mt-10 space-y-6">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <article className="grid overflow-hidden rounded-[34px] border border-black/8 bg-white/78 shadow-[0_24px_60px_rgba(15,23,42,0.1)] lg:grid-cols-[1.1fr_0.9fr] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none">
                <div className="relative min-h-[280px] overflow-hidden border-b border-black/6 lg:min-h-[360px] lg:border-b-0 lg:border-r lg:border-black/6 dark:border-white/8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/55 via-transparent to-transparent dark:from-slate-950/80 dark:via-slate-950/15" />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <Badge className="rounded-full bg-sky-500/10 px-3 py-1 text-sky-700 dark:text-sky-200">
                      {project.category}
                    </Badge>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <h3 className="mt-6 text-3xl font-semibold tracking-[-0.05em] text-foreground dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-foreground/72 dark:text-slate-300">
                    {project.longDescription}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full border border-black/6 bg-black/[0.03] px-3 py-1 text-foreground/75 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
