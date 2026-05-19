import { useState } from "react";
import { ArrowRight, ExternalLink, Github, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Reveal from "@/components/shared/Reveal";
import SectionIntro from "@/components/shared/SectionIntro";
import { siteData } from "@/data/mockData";

const technologyLogoMap: Record<string, string> = {
  React: "https://cdn.simpleicons.org/react/61DAFB",
  TypeScript: "https://cdn.simpleicons.org/typescript/3178C6",
  JavaScript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "Shadcn UI": "https://cdn.simpleicons.org/shadcnui/000000",
  Clerk: "https://cdn.simpleicons.org/clerk/6C47FF",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs/5FA04E",
  Express: "https://cdn.simpleicons.org/express/000000",
  "Express Js": "https://cdn.simpleicons.org/express/000000",
  MongoDB: "https://cdn.simpleicons.org/mongodb/47A248",
  Mongoose: "https://cdn.simpleicons.org/mongodb/47A248",
  OpenAI: "https://cdn.simpleicons.org/openai/412991",
  "OpenAI API": "https://cdn.simpleicons.org/openai/412991",
  JWT: "https://cdn.simpleicons.org/jsonwebtokens/000000",
  "MongoDB Atlas": "https://cdn.simpleicons.org/mongodb/47A248",
  Figma: "https://cdn.simpleicons.org/figma/F24E1E",
  "AWS S3": "https://cdn.simpleicons.org/amazons3/569A31",
  "C#": "https://cdn.simpleicons.org/csharp/512BD4",
  SQL: "https://cdn.simpleicons.org/postgresql/4169E1",
  "SQL Server": "https://cdn.simpleicons.org/microsoftsqlserver/CC2927",
  ".NET": "https://cdn.simpleicons.org/dotnet/512BD4",
  "Windows Forms (WinForms)": "https://cdn.simpleicons.org/windows/0078D6",
  "SQL Server Management Studio":
    "https://cdn.simpleicons.org/microsoftsqlserver/CC2927",
  Vite: "https://cdn.simpleicons.org/vite/646CFF",
  ESLint: "https://cdn.simpleicons.org/eslint/4B32C3",
  Prettier: "https://cdn.simpleicons.org/prettier/F7B93E",
  Vercel: "https://cdn.simpleicons.org/vercel/000000",
  "Framer Motion": "https://cdn.simpleicons.org/framer/0055FF",
  WordPress: "https://cdn.simpleicons.org/wordpress/21759B",
  PHP: "https://cdn.simpleicons.org/php/777BB4",
  Nginx: "https://cdn.simpleicons.org/nginx/009639",
  CSS: "https://cdn.simpleicons.org/css/1572B6",
  CSS3: "https://cdn.simpleicons.org/css3/1572B6",
  HTML: "https://cdn.simpleicons.org/html5/E34F26",
  HTML5: "https://cdn.simpleicons.org/html5/E34F26",
  MySQL: "https://cdn.simpleicons.org/mysql/4479A1",
  "All-in-One WP Migration": "https://cdn.simpleicons.org/wordpress/21759B",
  "Tawk.to Live Chat": "https://cdn.simpleicons.org/tawkto/FF6B00",
  "WPForms Lite": "https://cdn.simpleicons.org/wordpress/21759B",
  Windows: "https://cdn.simpleicons.org/windows/0078D6",
  "ASP.NET": "https://cdn.simpleicons.org/dotnet/512BD4",
  MVC: "https://cdn.simpleicons.org/dotnet/512BD4",
  "MySQL Server": "https://cdn.simpleicons.org/mysql/4479A1",
  GitHub: "https://cdn.simpleicons.org/github/181717",
  "Visual Studio 2022":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Visual_Studio_Icon_2022.svg/3840px-Visual_Studio_Icon_2022.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
  "VS Code":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/960px-Visual_Studio_Code_1.35_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
  IntelliJ:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/3840px-IntelliJ_IDEA_Icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",

  PostgreSQL:
    "https://img.icons8.com/?size=100&id=JRnxU7ZWP4mi&format=png&color=000000",
};

function TechnologyChip({ name }: { name: string }) {
  const logoUrl = technologyLogoMap[name];
  const fallbackLabel = name
    .split(/[\s/.+-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-black/6 bg-black/[0.03] px-3 py-2 text-sm text-foreground/78 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={`${name} logo`}
          className="h-4 w-4 object-contain"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black/10 text-[9px] font-semibold text-foreground/70 dark:bg-white/12 dark:text-slate-100">
          {fallbackLabel}
        </span>
      )}
      <span>{name}</span>
    </div>
  );
}

function ProjectDetailsDialog({
  project,
}: {
  project: (typeof siteData.projects)[number];
}) {
  return (
    <DialogContent className="max-h-[88vh] overflow-y-auto border-black/8 bg-white/96 sm:max-w-4xl dark:border-white/10 dark:bg-slate-950/96">
      <DialogHeader>
        <DialogTitle className="text-2xl font-semibold text-foreground dark:text-white">
          {project.title}
        </DialogTitle>
      </DialogHeader>

      <div className="space-y-6">
        <div className="overflow-hidden rounded-[24px] border border-black/6 dark:border-white/8">
          <img
            src={project.image}
            alt={project.title}
            className="h-full max-h-[26rem] w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-full border border-black/6 bg-black/[0.03] text-foreground/78 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <p className="text-base leading-8 text-foreground/76 dark:text-slate-300">
          {project.longDescription}
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[24px] border border-black/6 bg-black/[0.025] p-5 dark:border-white/8 dark:bg-black/20">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Features
            </h4>
            <div className="space-y-2">
              {project.features.map((feature) => (
                <p
                  key={feature}
                  className="text-sm leading-7 text-foreground/76 dark:text-slate-300"
                >
                  {feature}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-black/6 bg-black/[0.025] p-5 dark:border-white/8 dark:bg-black/20">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Frontend
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.frontend.map((tech) => (
                <TechnologyChip key={tech} name={tech} />
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-black/6 bg-black/[0.025] p-5 dark:border-white/8 dark:bg-black/20">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Backend & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                ...project.technologies.backend,
                ...project.technologies.tools,
              ].map((tech) => (
                <TechnologyChip key={tech} name={tech} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              View Live Demo <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Source Code
            </a>
          </Button>
        </div>
      </div>
    </DialogContent>
  );
}

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = siteData.projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const normalizedSearch = searchTerm.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(normalizedSearch) ||
      project.description.toLowerCase().includes(normalizedSearch) ||
      project.tags.some((tag) => tag.toLowerCase().includes(normalizedSearch));

    return matchesCategory && matchesSearch;
  });

  const featuredProject = filteredProjects[0];
  const remainingProjects = filteredProjects.slice(1);

  return (
    <div className="space-y-20 pb-20">
      <section className="section-shell pt-8">
        <SectionIntro
          badge="Projects"
          title={siteData.projectsPage.title}
          description={siteData.projectsPage.description}
        />

        <Reveal className="mt-10 flex flex-col gap-4 rounded-[28px] border border-black/8 bg-white/76 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none">
          <div className="flex flex-wrap gap-2">
            {siteData.projectsPage.categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="relative w-full lg:max-w-sm">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name, stack, or category"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12 w-full rounded-full border border-black/8 bg-white/80 pl-11 pr-4 text-sm text-foreground outline-none transition focus:border-sky-500/40 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
            />
          </div>
        </Reveal>
      </section>

      {featuredProject ? (
        <section className="section-shell">
          <Reveal>
            <article className="overflow-hidden rounded-[38px] border border-black/8 bg-white/80 shadow-[0_24px_60px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none">
              <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
                <div className="relative min-h-[320px] border-b border-black/6 lg:min-h-[520px] lg:border-b-0 lg:border-r lg:border-black/6 dark:border-white/8">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/45 via-transparent to-transparent dark:from-slate-950/90 dark:via-slate-950/20" />
                  <div className="absolute left-6 top-6 rounded-full border border-black/8 bg-white/78 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-sky-800 shadow-[0_10px_28px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60 dark:text-sky-200/75 dark:shadow-none">
                    Featured spotlight
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <Badge className="rounded-full bg-sky-500/10 px-3 py-1 text-sky-700 dark:text-sky-200">
                    {featuredProject.category}
                  </Badge>
                  <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.06em] text-foreground dark:text-white">
                    {featuredProject.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-foreground/76 dark:text-slate-300">
                    {featuredProject.longDescription}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {featuredProject.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full border border-black/6 bg-black/[0.03] text-foreground/78 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {featuredProject.features.slice(0, 4).map((feature) => (
                      <div
                        key={feature}
                        className="rounded-[24px] border border-black/6 bg-black/[0.025] p-4 text-sm leading-7 text-foreground/74 dark:border-white/8 dark:bg-black/20 dark:text-slate-300"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">View Full Details</Button>
                      </DialogTrigger>
                      <ProjectDetailsDialog project={featuredProject} />
                    </Dialog>
                    <Button asChild>
                      <a
                        href={featuredProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live Demo <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </section>
      ) : null}

      <section className="section-shell">
        <div className="space-y-6">
          {remainingProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.04}>
              <article className="group overflow-hidden rounded-[34px] border border-black/8 bg-white/80 shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none">
                <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                  <div
                    className={`relative min-h-[240px] overflow-hidden ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/30 via-transparent to-transparent dark:from-slate-950/80 dark:via-slate-950/15" />
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <Badge className="rounded-full border border-black/6 bg-black/[0.03] text-foreground/78 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
                        {project.category}
                      </Badge>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <h3 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-foreground dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-4 leading-8 text-foreground/76 dark:text-slate-300">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="rounded-full border border-black/6 bg-black/[0.03] text-foreground/78 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">View Details</Button>
                        </DialogTrigger>
                        <ProjectDetailsDialog project={project} />
                      </Dialog>
                      <Button asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <Reveal className="mt-8">
            <div className="rounded-[30px] border border-black/8 bg-white/80 p-10 text-center shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none">
              <p className="text-2xl font-semibold text-foreground dark:text-white">
                {siteData.projectsPage.emptyState.title}
              </p>
              <p className="mt-3 text-muted-foreground">
                {siteData.projectsPage.emptyState.description}
              </p>
            </div>
          </Reveal>
        ) : null}
      </section>
    </div>
  );
}

export default ProjectsPage;
