import { useState } from "react";
import { CheckCircle2, Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Reveal from "@/components/shared/Reveal";
import SectionIntro from "@/components/shared/SectionIntro";
import { siteData } from "@/data/mockData";

const contactIcons = {
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin,
};

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    window.setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-20 pb-20">
      <section className="section-shell pt-8">
        <SectionIntro
          badge="Contact"
          title={siteData.contactPage.title}
          description={siteData.contactPage.description}
        />
      </section>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <div className="glass-panel rounded-[34px] p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-sky-200/70">
                Reach out
              </p>
              <div className="mt-8 space-y-4">
                {siteData.contactInfo.map((item) => {
                  const Icon = contactIcons[item.icon];

                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      className="group flex items-start gap-4 rounded-[24px] border border-black/6 bg-black/[0.03] p-4 transition-colors hover:bg-black/[0.05] dark:border-white/8 dark:bg-black/20 dark:hover:bg-white/[0.04]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-sky-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.title}</p>
                        <p className="mt-1 font-medium text-foreground dark:text-white">{item.value}</p>
                        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {siteData.socialLinks.map((social) => {
                  const Icon = socialIcons[social.icon];

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
                      className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/72 px-4 py-2 text-sm text-foreground/78 transition-all hover:-translate-y-0.5 hover:bg-white hover:text-foreground dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:bg-white/[0.08] dark:hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                      {social.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-panel rounded-[34px] p-7 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-semibold tracking-[-0.05em] text-foreground dark:text-white">
                    {siteData.contactPage.form.title}
                  </h2>
                  <p className="mt-3 max-w-xl leading-7 text-foreground/72 dark:text-slate-300">
                    {siteData.contactPage.form.description}
                  </p>
                </div>
                <div className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-emerald-200 sm:block">
                  Usually replies in 24h
                </div>
              </div>

              {isSubmitted ? (
                <div className="mt-6 flex items-center gap-3 rounded-[24px] border border-emerald-400/20 bg-emerald-400/10 px-4 py-4 text-emerald-100">
                  <CheckCircle2 className="h-5 w-5" />
                  {siteData.contactPage.form.successMessage}
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground/80 dark:text-slate-300">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={siteData.contactPage.form.placeholders.name}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground/80 dark:text-slate-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={siteData.contactPage.form.placeholders.email}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground/80 dark:text-slate-300">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={siteData.contactPage.form.placeholders.subject}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground/80 dark:text-slate-300">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[180px]"
                    placeholder={siteData.contactPage.form.placeholders.message}
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    <Send className="h-4 w-4" />
                    {isSubmitting
                      ? siteData.contactPage.form.submittingLabel
                      : siteData.contactPage.form.submitLabel}
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href={`mailto:${siteData.personal.email}`}>
                      <Mail className="h-4 w-4" />
                      Email directly
                    </a>
                  </Button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
