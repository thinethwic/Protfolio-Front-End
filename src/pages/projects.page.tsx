import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "UniMind AI Web Application",
    description:
      "Unimind AI is a full-stack solution with React, Node.js, and MongoDB",
    longDescription:
      "UniMind AI Web Application is an MVP product that leverages GPT-3.5 for advancedAI-driven solutions. Built with MERN Stack, React, + Vite for a high-performance frontend, it uses Express.js for a robust backend and Tailwind CSS for a sleek,responsive UI. The platform harnesses GPT-3.5 to power features such as intelligentcontent generation, automated decision-making, and personalized user interactions,making it a cutting-edge tool for businesses and individuals.",
    image:
      "https://storage.googleapis.com/portfolio_thineth/projectUnimind.png",
    tags: ["React", "JavaScript", "Tailwind CSS", "Shadcn UI"],
    category: "Full-Stack",
    github: "https://github.com/thinethwic/Mini-Project-Front-End.git",
    demo: "https://example.com/ecommerce-demo",
    features: [
      "Implemented a Node.js backend with TypeScript and MongoDB.",
      "User authentication and authorization from Clerk",
      "Predict depression level using a fine-tuned model",
      "Three Step's Depression detection Tool",
      "Responsive design for mobile and desktop with React.js",
    ],
    technologies: {
      frontend: ["React", "JavaScript", "Tailwind CSS", "Shadcn UI", "Clerk"],
      backend: [
        "Node.js",
        "Express Js",
        "MongoDB",
        "Mongoose",
        "Clerk Tokens",
        "Open AI",
      ],
      tools: ["JWT", "Open AI API", "MongoDB Atlas", "VS Code", "Figma"],
    },
  },
  {
    id: 2,
    title: "Hirely AI Web Application",
    description:
      "Hirely AI is a full-stack solution with React, Node.js, and MongoDB",
    longDescription:
      "Hirely AI Web Application is an MVP product designed to streamline hiring processesusing AI. Built with MERN Stack, React, + Vite for a fast and efficient frontend, it leverages Express.js for a scalable backend and Tailwind CSS for a modern,responsive UI. Also, the Open AI GPT 3.5 Turbo version is used for the AI part of this application.",
    image: "/api/placeholder/600/400",
    tags: ["React", "JavaScript", "Tailwind CSS", "Shadcn UI"],
    category: "Full-Stack",
    github: "https://github.com/thinethwic/HirelyAI-Front-End.git",
    demo: "https://example.com/task-demo",
    features: [
      "Implemented a Node.js backend with TypeScript and MongoDB",
      "User authentication and authorization from Clerk",
      "Implemented Responsive UI with React.js",
      "Post Jobs currently available and Apply to this Job using platform",
    ],
    technologies: {
      frontend: ["React", "JavaScript", "Shadcn UI", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB", "Mongoose", "TypeScript"],
      tools: ["Clerk", "Figma", "OpenAI", "AWS S3"],
    },
  },
  {
    id: 3,
    title: "POS Software System",
    description:
      "POS Software System is a robust Point of Sale (POS) solution designed for efficient transaction processing and business management",
    longDescription:
      "POS Software System is a robust Point of Sale (POS) solution designed for efficient transaction processing and business management. Built with C# for a powerful anduser-friendly interface, it utilizes SQL Database for secure and scalable data storage.The system streamlines sales, inventory management, and reporting, making it idealfor retail and hospitality businessesHirely",
    image: "https://storage.googleapis.com/portfolio_thineth/projectPOS.png",
    tags: ["C#", "POS", "SQL", "Database Mangment Studio", "Figma"],
    category: "Desktop",
    github: "https://github.com/example/data-viz",
    demo: "https://example.com/dataviz-demo",
    features: [
      "Inventory management",
      "Payment processing",
      "Employee management",
      "Barcode Scanner",
      "Sales processing",
      "Reporting and analytics",
    ],
    technologies: {
      frontend: ["Windows Forms (WinForms)"],
      backend: ["C#"],
      tools: ["SQl Server Managment Studio", "Figma"],
    },
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with React and TypeScript",
    longDescription:
      "A modern, responsive portfolio website showcasing projects, skills, and experience. Built with React, TypeScript, Tailwind CSS, and Shadcn UI for optimal performance and user experience.",
    image: "/api/placeholder/600/400",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    github: "https://github.com/thinethwic/Protfolio-Front-End.git",
    demo: "https://thinethwic.netlify.app/",
    features: [
      "Responsive design for all devices",
      "Dark/light theme toggle",
      "Smooth animations with Framer Motion",
      "SEO optimization",
      "Performance optimized",
      "Accessibility compliant",
      "Contact form integration",
    ],
    technologies: {
      frontend: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Shadcn UI",
      ],
      backend: [],
      tools: ["Vite", "ESLint", "Prettier", "Vercel"],
    },
  },
  {
    id: 5,
    title: "Ceylon Hiker Website (WordPress)",
    description:
      "A responsive Travelling, Campping, 4 * 4, website built with Wordpress",
    longDescription:
      "First time in Sri Lanka, we have offered a 3-in-1 website named Ceylon Hiker. That's include Travelling, camping, and 4 * 4 Tracks information. Here we provide all camping information like information about routes to the campsite and information about 4*4 tracks and other 4*4 necessary details.",
    image: "/api/placeholder/600/400",
    tags: ["WordPress", "PHP", "Nginx", "CSS", "MySQL"],
    category: "Frontend",
    github: "https://github.com/example/weather-app",
    demo: "https://example.com/weather-demo",
    features: [
      "3-in-1 Platform ddeveloped using WordPress",
      "Design and implemented device Resposive UI",
      "Deatils about camping, 4*4 tracks",
      "Easy Customizable Website",
      "Implemented Chat agent for easy to the end users",
    ],
    technologies: {
      frontend: ["HTML", "CSS3", "JavaScript"],
      backend: ["nginx", "PHP", "MySQL"],
      tools: ["All-in-One WP Migration", "Tawk.to Live Chat", "WPForm Lite"],
    },
  },
  {
    id: 6,
    title: "EB Calc Software System",
    description:
      "An innovative solution designed for efficient creation of separate electricity bills for rental locations",
    longDescription:
      "Proficient in EB Calc Software – an innovative solution designed for efficient creation of separate electricity bills for rental locations. Demonstrates advanced skills inutilizing this software to streamline billing processes, ensuring accuracy and transparency in financial transactions.",
    image: "/api/placeholder/600/400",
    tags: ["C#", "Desktop", "SQL Server", "Windows"],
    category: "Desktop",
    github: "https://github.com/thinethwic/Elctricity-Bill-New.git",
    demo: "https://example.com/blog-demo",
    features: [
      "Implemented Resposive Desktop UI using .NET",
      "Developing .NET backend using C#",
      "Implemented a database using SQL Server Managment Studio",
    ],
    technologies: {
      frontend: ["Windows Forms (WinForms)", ".NET"],
      backend: ["C#", "SQL"],
      tools: ["SQl Server Managment Studio", "Figma"],
    },
  },

  {
    id: 7,
    title: "BeanStack - Coffee Shop",
    description:
      "Create a fully functional responsive website for BeanStack, a fictional coffee shop that prioritized user experience",
    longDescription:
      "As part of this project, we set out to create a fully functional responsive website for BeanStack, a fictional coffee shop that prioritized user experience. The website was designed to be user-friendly, allowing customers to easily browse the menu and access information about the shop, and place orders online.",
    image: "/api/placeholder/600/400",
    tags: ["ASP.NET", "C#", "MVC", "Tailwind CSS"],
    category: "Full-Stack",
    github: "https://github.com/example/blog-platform",
    demo: "https://example.com/blog-demo",
    features: [
      "Designing and architecturing the system by following clean architecture (MVC)",
      "Developing modern user interface that is both attractive and easy to use with ASP.NET",
      "Implemetnted Responsive UI",
      "Implemented a Backend with C#",
      "Developing a Database using MySQL Servers",
    ],
    technologies: {
      frontend: ["ASP.NET", "HTML", "Tailwind CSS", "JavaScript"],
      backend: ["C#", ".NET", "MySQL"],
      tools: ["Figma", "MySQL Server", "Git HUB", "Visual Studio 2022"],
    },
  },
];

const categories = ["All", "Full-Stack", "Frontend", "Backend", "Desktop"];

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const ProjectModal = ({ project }: { project: (typeof projects)[0] }) => (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
      </DialogHeader>

      <div className="space-y-6">
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-2">🚀</div>
            <img src={project.image} alt="" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <p className="text-muted-foreground">{project.longDescription}</p>

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="technologies">Technologies</TabsTrigger>
            <TabsTrigger value="links">Links</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="space-y-4">
            <div className="grid gap-2">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="technologies" className="space-y-4">
            <div className="grid gap-4">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.frontend.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.backend.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Tools & Services</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.tools.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="links" className="space-y-4">
            <div className="flex flex-col gap-4">
              <Button asChild size="lg" className="w-full">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View Source Code
                </a>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DialogContent>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of projects I've worked on, showcasing my skills in
              web development, design, and problem-solving.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category)}
                    className="text-sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🚀</div>
                      <img src={project.image} alt="" />
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm line-clamp-2">
                          {project.description}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="ml-2">
                        {project.category}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" className="flex-1">
                            View Details
                          </Button>
                        </DialogTrigger>
                        <ProjectModal project={project} />
                      </Dialog>

                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>

                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div variants={fadeInUp} className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or category filter.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectsPage;
