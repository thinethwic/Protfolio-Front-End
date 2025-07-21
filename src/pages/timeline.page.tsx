import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Award,
  MapPin,
  Calendar,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

// Timeline data - replace with your actual timeline
const timelineData = [
  {
    id: 1,
    type: "education",
    title: "BHSc (Hons) in Health Information and Communication Technology",
    company: "GWUIM",
    location: "Kandy Road, Yakkala",
    startDate: "2022",
    endDate: "Present",
    description:
      "Lead development of enterprise-level web applications using React, Node.js, and AWS. Mentor junior developers and collaborate with cross-functional teams to deliver high-quality solutions.",
    achievements: [
      "Led a team of 5 developers on a major product redesign",
      "Improved application performance by 40% through optimization",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Mentored 3 junior developers who were promoted within 1 year",
    ],
    technologies: [
      "React",
      "Node.js",
      "AWS",
      "TypeScript",
      "Docker",
      "PostgreSQL",
    ],
    icon: Briefcase,
  },
  {
    id: 2,
    type: "work",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    startDate: "2022",
    endDate: "2023",
    description:
      "Developed and maintained multiple web applications for clients ranging from startups to established companies. Worked on both frontend and backend technologies.",
    achievements: [
      "Built 8 web applications from scratch",
      "Achieved 99.9% uptime across all deployed applications",
      "Reduced client onboarding time by 50% through automation",
      "Implemented responsive design improving mobile usage by 25%",
    ],
    technologies: ["React", "Next.js", "Express.js", "MongoDB", "Tailwind CSS"],
    icon: Briefcase,
  },
  {
    id: 3,
    type: "education",
    title: "AWS Certified Solutions Architect",
    company: "Amazon Web Services",
    location: "Online",
    startDate: "2023",
    endDate: "2023",
    description:
      "Earned AWS Solutions Architect certification demonstrating expertise in designing distributed systems on AWS.",
    achievements: [
      "Passed exam with 95% score",
      "Specialized in serverless architecture",
      "Gained expertise in cloud security best practices",
    ],
    technologies: ["AWS", "Lambda", "S3", "EC2", "RDS", "CloudFormation"],
    icon: Award,
  },
  {
    id: 4,
    type: "work",
    title: "Frontend Developer",
    company: "Digital Agency Co.",
    location: "New York, NY",
    startDate: "2021",
    endDate: "2022",
    description:
      "Specialized in creating responsive, interactive web interfaces for various clients. Collaborated closely with designers and backend developers.",
    achievements: [
      "Delivered 15+ client projects on time and within budget",
      "Improved website loading speeds by 35% on average",
      "Implemented accessibility standards (WCAG 2.1 AA)",
      "Received 'Developer of the Year' award",
    ],
    technologies: ["React", "JavaScript", "CSS3", "Webpack", "Figma"],
    icon: Briefcase,
  },
  {
    id: 5,
    type: "education",
    title: "Bachelor of Science in Computer Science",
    company: "State University",
    location: "Boston, MA",
    startDate: "2018",
    endDate: "2022",
    description:
      "Graduated Magna Cum Laude with a comprehensive foundation in computer science principles, algorithms, and software engineering.",
    achievements: [
      "Graduated Magna Cum Laude (GPA: 3.8/4.0)",
      "President of Computer Science Club",
      "Winner of Annual Hackathon 2021",
      "Dean's List for 6 consecutive semesters",
    ],
    technologies: [
      "Java",
      "Python",
      "C++",
      "Data Structures",
      "Algorithms",
      "Database Systems",
    ],
    icon: GraduationCap,
  },
  {
    id: 6,
    type: "work",
    title: "Web Development Intern",
    company: "Local Web Studio",
    location: "Boston, MA",
    startDate: "2021",
    endDate: "2021",
    description:
      "Summer internship focused on frontend development and UI/UX design. Gained hands-on experience with modern web technologies.",
    achievements: [
      "Contributed to 3 major client projects",
      "Learned modern JavaScript frameworks",
      "Improved design skills with Figma and Adobe Creative Suite",
      "Received full-time job offer",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Adobe Creative Suite",
    ],
    icon: Briefcase,
  },
  {
    id: 7,
    type: "education",
    title: "High School Diploma",
    company: "Central High School",
    location: "Boston, MA",
    startDate: "2014",
    endDate: "2018",
    description:
      "Graduated as Valedictorian with a focus on STEM subjects. Active in various tech-related clubs and competitions.",
    achievements: [
      "Valedictorian (GPA: 4.0/4.0)",
      "Captain of Programming Team",
      "Winner of State-level Programming Competition",
      "National Honor Society Member",
    ],
    technologies: ["Python", "Java", "Web Development", "Mathematics"],
    icon: GraduationCap,
  },
];

function TimelinePage() {
  const TimelineItem = ({ item, index }: { item: any; index: number }) => {
    const isEven = index % 2 === 0;
    const Icon = item.icon;

    return (
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`flex items-center gap-8 ${
          isEven ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Content */}
        <div className={`flex-1 ${isEven ? "text-right" : "text-left"}`}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div
                className={`flex items-start gap-4 ${
                  isEven ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    item.type === "work"
                      ? "bg-blue-100 dark:bg-blue-900"
                      : item.type === "education"
                      ? "bg-green-100 dark:bg-green-900"
                      : "bg-yellow-100 dark:bg-yellow-900"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      item.type === "work"
                        ? "text-blue-600 dark:text-blue-400"
                        : item.type === "education"
                        ? "text-green-600 dark:text-green-400"
                        : "text-yellow-600 dark:text-yellow-400"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-lg font-medium text-foreground">
                    {item.company}
                  </CardDescription>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {item.startDate} - {item.endDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{item.description}</p>

              {item.achievements && item.achievements.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {item.achievements.map(
                      (achievement: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech: string) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline indicator */}
        <div className="flex flex-col items-center">
          <div
            className={`w-4 h-4 rounded-full border-4 border-background ${
              item.type === "work"
                ? "bg-blue-500"
                : item.type === "education"
                ? "bg-green-500"
                : "bg-yellow-500"
            }`}
          />
          {index < timelineData.length - 1 && (
            <div className="w-px h-16 bg-border mt-2" />
          )}
        </div>

        {/* Spacer */}
        <div className="flex-1" />
      </motion.div>
    );
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Journey</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A chronological overview of my educational background,
              professional experience, and key milestones that have shaped my
              career in technology.
            </p>
          </motion.div>

          {/* Timeline Legend */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-500" />
              <span className="text-sm">Work Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500" />
              <span className="text-sm">Education</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-yellow-500" />
              <span className="text-sm">Certifications</span>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Mobile Timeline */}
            <div className="md:hidden space-y-8">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-4 h-4 rounded-full border-4 border-background ${
                          item.type === "work"
                            ? "bg-blue-500"
                            : item.type === "education"
                            ? "bg-green-500"
                            : "bg-yellow-500"
                        }`}
                      />
                      {index < timelineData.length - 1 && (
                        <div className="w-px h-full bg-border mt-2 absolute top-4" />
                      )}
                    </div>

                    <div className="flex-1">
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <div
                              className={`p-2 rounded-lg ${
                                item.type === "work"
                                  ? "bg-blue-100 dark:bg-blue-900"
                                  : item.type === "education"
                                  ? "bg-green-100 dark:bg-green-900"
                                  : "bg-yellow-100 dark:bg-yellow-900"
                              }`}
                            >
                              <item.icon
                                className={`h-6 w-6 ${
                                  item.type === "work"
                                    ? "text-blue-600 dark:text-blue-400"
                                    : item.type === "education"
                                    ? "text-green-600 dark:text-green-400"
                                    : "text-yellow-600 dark:text-yellow-400"
                                }`}
                              />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-xl">
                                {item.title}
                              </CardTitle>
                              <CardDescription className="text-lg font-medium text-foreground">
                                {item.company}
                              </CardDescription>
                              <div className="flex flex-col gap-2 mt-2 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>
                                    {item.startDate} - {item.endDate}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  <span>{item.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            {item.description}
                          </p>

                          {item.achievements &&
                            item.achievements.length > 0 && (
                              <div className="mb-4">
                                <h4 className="font-semibold mb-2">
                                  Key Achievements:
                                </h4>
                                <ul className="space-y-1">
                                  {item.achievements.map(
                                    (achievement: string, idx: number) => (
                                      <li
                                        key={idx}
                                        className="flex items-start gap-2 text-sm"
                                      >
                                        <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                                        <span>{achievement}</span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}

                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech: string) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop Timeline */}
            <div className="hidden md:block space-y-16">
              {timelineData.map((item, index) => (
                <TimelineItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.section variants={fadeInUp} className="text-center mt-20">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What's Next?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always looking for new challenges and opportunities to grow.
                Let's discuss how we can work together to create something
                amazing.
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

export default TimelinePage;
