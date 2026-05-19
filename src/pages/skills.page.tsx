import {
  Award,
  Code2,
  Database,
  Palette,
  Server,
  Sparkles,
} from "lucide-react";
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

const skillLogoMap: Record<string, string> = {
  React: "https://cdn.simpleicons.org/react/61DAFB",
  TypeScript: "https://cdn.simpleicons.org/typescript/3178C6",
  JavaScript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  "HTML/CSS": "https://cdn.simpleicons.org/html5/E34F26",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "Vite.js": "https://cdn.simpleicons.org/vite/646CFF",
  WordPress: "https://cdn.simpleicons.org/wordpress/21759B",
  "Spring Boot": "https://cdn.simpleicons.org/springboot/6DB33F",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs/5FA04E",
  Python: "https://cdn.simpleicons.org/python/3776AB",
  "Express.js": "https://cdn.simpleicons.org/express/000000",
  "C# .NET": "https://cdn.simpleicons.org/dotnet/512BD4",
  "RESTful APIs": "https://cdn.simpleicons.org/postman/FF6C37",
  JWT: "https://cdn.simpleicons.org/jsonwebtokens/000000",
  "SQL Server Management":
    "https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000",
  MongoDB: "https://cdn.simpleicons.org/mongodb/47A248",
  MySQL: "https://cdn.simpleicons.org/mysql/4479A1",
  Mongoose: "https://cdn.simpleicons.org/mongodb/47A248",
  "Git/GitHub": "https://cdn.simpleicons.org/github/181717",
  AWS: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
  Vite: "https://cdn.simpleicons.org/vite/646CFF",
  Figma: "https://cdn.simpleicons.org/figma/F24E1E",
  "Responsive Design": "https://cdn.simpleicons.org/css/1572B6",
  "UI/UX Design": "https://cdn.simpleicons.org/framer/0055FF",
  Prototyping: "https://cdn.simpleicons.org/framer/0055FF",
  "User Research": "https://cdn.simpleicons.org/notion/000000",
  PostgreSQL:
    "https://img.icons8.com/?size=100&id=JRnxU7ZWP4mi&format=png&color=000000",
};

function SkillLogo({ skillName }: { skillName: string }) {
  const logoUrl = skillLogoMap[skillName];
  const fallbackLabel = skillName
    .split(/[\s/.+-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  if (!logoUrl) {
    return (
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/6 bg-white/80 text-xs font-semibold text-foreground/75 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
        {fallbackLabel}
      </div>
    );
  }

  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/6 bg-white/80 p-2 shadow-[0_8px_20px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none">
      <img
        src={logoUrl}
        alt={`${skillName} logo`}
        className="h-6 w-6 object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

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
                      <div
                        key={skill.name}
                        className="rounded-[24px] border border-black/6 bg-black/[0.03] p-4 dark:border-white/8 dark:bg-black/20"
                      >
                        <div className="mb-3 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <SkillLogo skillName={skill.name} />
                            <div>
                              <p className="font-medium text-foreground dark:text-white">
                                {skill.name}
                              </p>
                              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                                {skill.years ?? 0} years
                              </p>
                            </div>
                          </div>
                          <span className="text-sm font-medium text-sky-600 dark:text-sky-200">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="pl-0 sm:pl-[3.75rem]">
                          <Progress
                            value={skill.level}
                            className="h-2 bg-black/[0.06] dark:bg-white/[0.06]"
                          />
                        </div>
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-600 dark:text-sky-200">
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
                      <p className="mt-2 text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
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
