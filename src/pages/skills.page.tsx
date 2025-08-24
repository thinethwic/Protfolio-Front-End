import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  Server,
  Smartphone,
  Award,
  BookOpen,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Skills data organized by category
const skillCategories = {
  frontend: {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React", level: 95, years: 3 },
      { name: "TypeScript", level: 90, years: 2 },
      { name: "JavaScript", level: 95, years: 4 },
      { name: "HTML/CSS", level: 98, years: 5 },
      { name: "Tailwind CSS", level: 90, years: 2 },
      { name: "Vite.js", level: 75, years: 1 },
      { name: "WordPress", level: 80, years: 3 },
    ],
  },
  backend: {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 88, years: 3 },
      { name: "TypeScript", level: 90, years: 2 },
      { name: "Python", level: 85, years: 2 },
      { name: "Express.js", level: 90, years: 3 },
      { name: "C# .NET", level: 80, years: 1 },
      { name: "RESTful APIs", level: 92, years: 3 },
      { name: "JWT", level: 85, years: 2 },
    ],
  },
  database: {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "SQL Server Managment", level: 85, years: 2 },
      { name: "MongoDB", level: 80, years: 2 },
      { name: "MySQL", level: 75, years: 2 },
      { name: "Mongoose", level: 85, years: 2 },
    ],
  },
  tools: {
    title: "Tools & DevOps",
    icon: Palette,
    skills: [
      { name: "Git/GitHub", level: 95, years: 4 },
      { name: "AWS", level: 75, years: 2 },
      { name: "Vite", level: 85, years: 1 },
    ],
  },
  design: {
    title: "Design & UX",
    icon: Palette,
    skills: [
      { name: "Figma", level: 85, years: 2 },
      { name: "Responsive Design", level: 95, years: 4 },
      { name: "UI/UX Design", level: 80, years: 2 },
      { name: "Prototyping", level: 75, years: 2 },
      { name: "User Research", level: 70, years: 1 },
    ],
  },
};

const certifications = [
  {
    name: "Advanced Multimedia Web Design and Development Techniques",
    issuer: "UCSC",
    year: "2023",
    credentialId: "ADMTC/2023/AMWDDT/GR_03/008",
  },
  {
    name: "AI Driven Full-stack Development",
    issuer: "STEM Link",
    year: "2024 (Pending)",
    credentialId: "",
  },
];

const languages = [
  { name: "Sinhala", level: "Native" },
  { name: "English", level: "Conversational" },
];

function SkillsPage() {
  const SkillCard = ({ skill }: { skill: any }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill.name}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{skill.years}y</span>
          <span className="text-xs font-medium">{skill.level}%</span>
        </div>
      </div>
      <Progress value={skill.level} className="h-2" />
    </motion.div>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills, tools, and
              expertise gained through years of hands-on experience and
              continuous learning.
            </p>
          </motion.div>

          {/* Skills Categories */}
          <motion.div variants={fadeInUp} className="mb-20">
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="database">Database</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
              </TabsList>

              {Object.entries(skillCategories).map(([key, category]) => (
                <TabsContent key={key} value={key} className="mt-8">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <category.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">
                            {category.title}
                          </CardTitle>
                          <CardDescription>
                            {category.skills.length} skills in this category
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {category.skills.map((skill) => (
                          <SkillCard key={skill.name} skill={skill} />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>

          {/* Skills Overview */}
          <motion.div variants={fadeInUp} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Skills Overview
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A visual representation of my core competencies and proficiency
                levels.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skillCategories).map(([key, category]) => (
                <motion.div key={key} variants={fadeInUp}>
                  <Card className="text-center h-full">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <category.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        {category.title}
                      </CardTitle>
                      <CardDescription>
                        {category.skills.length} Technologies
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {category.skills.slice(0, 4).map((skill) => (
                          <Badge
                            key={skill.name}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill.name}
                          </Badge>
                        ))}
                        {category.skills.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{category.skills.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={fadeInUp} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Certifications
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional certifications that validate my expertise and
                commitment to continuous learning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <motion.div key={cert.name} variants={fadeInUp}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{cert.name}</CardTitle>
                          <CardDescription className="text-sm">
                            {cert.issuer} • {cert.year}
                          </CardDescription>
                          <p className="text-xs text-muted-foreground mt-2">
                            Credential ID: {cert.credentialId}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages & Additional Skills */}
          <motion.div variants={fadeInUp} className="mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Languages</CardTitle>
                      <CardDescription>
                        Communication proficiency
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {languages.map((lang) => (
                      <div
                        key={lang.name}
                        className="flex justify-between items-center"
                      >
                        <span className="font-medium">{lang.name}</span>
                        <Badge variant="outline">{lang.level}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        Currently Learning
                      </CardTitle>
                      <CardDescription>Expanding my skill set</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">React Native</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">AI/ML</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">Block Chain</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">Docker/Kubernates</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.section variants={fadeInUp} className="text-center">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Collaborate?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always excited to work on challenging projects and learn new
                technologies. Let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Get In Touch
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                >
                  View My Work
                </a>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}

export default SkillsPage;
