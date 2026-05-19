import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { siteData } from "@/data/mockData";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

function Footer() {
  return (
    <footer className="relative border-t border-black/8 pb-10 pt-16 dark:border-white/8">
      <div className="section-shell">
        <div className="glass-panel rounded-[32px] px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-sky-800/80 dark:text-sky-200/70">
                Crafted with precision
              </p>
              <h3 className="text-2xl font-semibold tracking-[-0.05em] text-foreground sm:text-3xl dark:text-white">
                Designing polished interfaces with startup-grade clarity.
              </h3>
              <p className="text-sm leading-7 text-foreground/72 dark:text-slate-300">
                {siteData.personal.footerText}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {siteData.socialLinks.map((social) => {
                  const Icon = iconMap[social.icon];

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
                      className="group inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/72 px-4 py-2 text-sm text-foreground/78 transition-all hover:-translate-y-0.5 hover:bg-white hover:text-foreground dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:bg-white/[0.08] dark:hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                      {social.name}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  );
                })}
              </div>
              <p className="text-sm text-muted-foreground">{siteData.personal.copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
