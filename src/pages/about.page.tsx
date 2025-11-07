import { motion } from "framer-motion";
import {
  Download,
  Heart,
  Coffee,
  Code,
  Music,
  Camera,
  Book,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

const interests = [
  { icon: Code, name: "Coding", description: "Building innovative solutions" },
  { icon: Music, name: "Music", description: "Listing Music" },
  {
    icon: Camera,
    name: "Photography",
    description: "Capturing moments and stories",
  },
  { icon: Book, name: "Reading", description: "Tech blogs and fiction novels" },
  { icon: Coffee, name: "Coffee", description: "Specialty coffee enthusiast" },
  { icon: Heart, name: "Fitness", description: "Running and weight training" },
];

const values = [
  {
    title: "Innovation",
    description:
      "Always exploring new technologies and approaches to solve problems creatively.",
  },
  {
    title: "Quality",
    description:
      "Committed to writing clean, maintainable code and delivering polished user experiences.",
  },
  {
    title: "Collaboration",
    description:
      "Believe in the power of teamwork and open communication to achieve great results.",
  },
  {
    title: "Continuous Learning",
    description:
      "Passionate about staying current with industry trends and expanding my skill set.",
  },
];

function AboutPage() {
  const directAvatarUrl =
    "https://storage.cloud.google.com/portfolio_thineth/Thinethprofile.jpg";
  const downloadResume = () => {
    // In a real app, this would trigger a download of your actual resume
    const link = document.createElement("a");
    link.href =
      "https://storage.cloud.google.com/portfolio_thineth/Thineth%20CV.pdf"; // Replace with actual resume file path
    link.download = "Thineth CV.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Hero Section */}
          <motion.section variants={fadeInUp} className="text-center mb-20">
            <Avatar className="w-40 h-40 mx-auto mb-8">
              <AvatarImage src={directAvatarUrl} alt="Profile" />
              <AvatarFallback>TW</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate full-stack developer with a love for creating
              beautiful, functional web applications that make a difference in
              people's lives.
            </p>
          </motion.section>

          {/* Personal Story */}
          <motion.section variants={fadeInUp} className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  My Journey
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    My journey into web development began during my computer
                    science studies, where I discovered my passion for creating
                    digital solutions that solve real-world problems. What
                    started as curiosity about how websites work has evolved
                    into a career dedicated to crafting exceptional user
                    experiences.
                  </p>
                  <p>
                    Over the years, I've had the privilege of working on diverse
                    projects, from e-commerce platforms to data visualization
                    tools. Each project has taught me valuable lessons about the
                    importance of user-centered design, clean code, and
                    effective collaboration.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new
                    technologies, contributing to open-source projects, or
                    sharing my knowledge through blog posts and mentoring. I
                    believe in the power of community and continuous learning to
                    drive innovation in our field.
                  </p>
                </div>
                <div className="mt-8">
                  <Button onClick={downloadResume} size="lg">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                  <Code className="h-32 w-32 text-muted-foreground" />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Core Values */}
          <motion.section variants={fadeInUp} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide my work and drive my passion for
                development.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  custom={index}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                      <CardDescription className="text-base">
                        {value.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Interests & Hobbies */}
          <motion.section variants={fadeInUp} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Beyond Code
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                When I'm not behind the computer, here's what keeps me inspired
                and motivated.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  variants={fadeInUp}
                  custom={index}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                        <interest.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{interest.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {interest.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Fun Facts */}
          <motion.section variants={fadeInUp} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Fun Facts</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A few random things about me that might surprise you.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    500+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Cups of coffee consumed while coding
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    10+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Programming languages explored
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <p className="text-sm text-muted-foreground">
                    Musical instruments played
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section variants={fadeInUp} className="text-center">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Connect!
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always excited to meet fellow developers, potential
                collaborators, or anyone who shares a passion for technology and
                innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="/contact">Get In Touch</a>
                </Button>
                <Button variant="outline" size="lg" onClick={downloadResume}>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPage;
