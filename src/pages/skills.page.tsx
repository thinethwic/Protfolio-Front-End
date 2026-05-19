import { Award, Code2, Database, Palette, Server, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Reveal from "@/components/shared/Reveal";
import SectionIntro from "@/components/shared/SectionIntro";
import { siteData } from "@/data/mockData";

const categoryIcons = {
  code: Code2,
  server: Server,
  database: Database,
  palette: Palette,
};

function SkillsPage() {
  const categories = Object.entries(siteData.skillCategories);

  return (
    <div className="space-y-28 pb-20">
      <section className="section-shell pt-8">
        <SectionIntro
          badge="Skills"
          title={siteData.skillsPage.title}
          description={siteData.skillsPage.description}
        />
        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {categories.map(([key, category], index) => {
            const Icon = categoryIcons[category.icon];

            return (
              <Reveal key={key} delay={index * 0.06}>
                <div className="glass-panel rounded-[32px] p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/18 to-violet-400/18 text-sky-700 dark:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground dark:text-white">
                          {category.title}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {category.skills.length} technologies
                        </p>
                      </div>
                    </div>
                    <Sparkles className="h-4 w-4 text-sky-300" />
                  </div>

                  <div className="mt-8 space-y-5">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="rounded-[24px] border border-black/6 bg-black/[0.03] p-4 dark:border-white/8 dark:bg-black/20">
                        <div className="mb-3 flex items-center justify-between gap-4">
                          <div>
                            <p className="font-medium text-foreground dark:text-white">{skill.name}</p>
                            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                              {skill.years ?? 0} years
                            </p>
                          </div>
                          <span className="text-sm font-medium text-sky-200">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2 bg-white/[0.06]" />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            badge="Credentials"
            title={siteData.skillsPage.certificationsSection.title}
            description={siteData.skillsPage.certificationsSection.description}
          />
          <div className="grid gap-4">
            {siteData.certifications.map((cert, index) => (
              <Reveal key={cert.name} delay={index * 0.06}>
                <div className="glass-panel rounded-[28px] p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-200">
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-lg font-semibold text-foreground dark:text-white">
                          {cert.name}
                        </h3>
                        <Badge className="w-fit rounded-full border border-black/6 bg-black/[0.03] text-foreground/78 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
                          {cert.year}
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{cert.issuer}</p>
                      <p className="mt-3 font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
                        Credential {cert.credentialId || "Pending"}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkillsPage;
