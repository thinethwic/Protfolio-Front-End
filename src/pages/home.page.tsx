import {
  ArrowRight,
  Code,
  Palette,
  Rocket,
  Download,
  Github,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Sample data - replace with your actual data
const featuredProjects = [
  {
    id: 1,
    title: "UniMind AI",
    description:
      "UniMind AI Web Application is an MVP product that leverages GPT-3.5 for advanced AI-driven solutions. Built with MERN Stack, React, + Vite for a high-performancefrontend, it uses Express.js for a robust backend and Tailwind CSS for a sleek,responsive UI.",
    image: "src/assets/projectUnimind.png",
    tags: ["React", "MongoDB", "Express Js", "GPT-3.5 Turbo"],
    github: "https://github.com/example/project1",
    demo: "https://example.com/demo1",
  },
  {
    id: 2,
    title: "Hirely AI",
    description:
      "Hirely AI Web Application is an MVP product designed to streamline hiring processesusing AI. Built with MERN Stack, React, + Vite for a fast and efficient frontend, itleverages Express.js for a scalable backend and Tailwind CSS for a modern,responsive UI.",
    image: "/api/placeholder/400/200",
    tags: ["React", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/thinethwic/HirelyAI-Front-End.git",
    demo: "https://example.com/demo2",
  },
  {
    id: 3,
    title: "POS Software System",
    description:
      "POS Software System is a robust Point of Sale (POS) solution designed for efficient transaction processing and business management. Built with C# for a powerful anduser-friendly interface,",
    image: "src/assets/projectPOS.png",
    tags: ["C#", "Desktop App", "POS", "ERP"],
    github: "https://github.com/example/project3",
    demo: "https://example.com/demo3",
  },
];

const skills = [
  {
    icon: Code,
    name: "Frontend Development",
    description: "React, TypeScript, Tailwind CSS, Shadcn UI",
  },
  {
    icon: Palette,
    name: "UI/UX Design",
    description: "Figma, Adobe XD, Responsive Design",
  },
  {
    icon: Rocket,
    name: "Backend Development",
    description: "Node.js, .NET ASP, Mongo DB, PHP",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Avatar className="w-32 h-32 mx-auto mb-6">
                <AvatarImage
                  src="src\assets\Thinethprofile.jpg"
                  alt="Profile"
                />
                <AvatarFallback>TW</AvatarFallback>
              </Avatar>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Hi, I'm Thineth Wickramarchchi
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Full Stack Developer & UI/UX Designer passionate about creating
              beautiful, functional, and user-centered digital experiences.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="text-lg">
                <Link to="/projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I specialize in creating end-to-end digital solutions that
                combine great design with robust functionality.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill) => (
                <motion.div key={skill.name} variants={fadeInUp}>
                  <Card className="text-center h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <skill.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{skill.name}</CardTitle>
                      <CardDescription className="text-base">
                        {skill.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and
                experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <motion.div key={project.id} variants={fadeInUp}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <img src={project.image} alt="" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link to="/projects">
                  View All Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Ready to work together?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            >
              I'm always interested in new opportunities and interesting
              projects. Let's discuss how we can bring your ideas to life.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
