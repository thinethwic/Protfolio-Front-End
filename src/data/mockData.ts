export interface NavigationItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  description: string;
  icon: "github" | "linkedin" | "twitter" | "mail";
}

export interface ContactInfoItem {
  title: string;
  value: string;
  description: string;
  href: string;
  icon: "mail" | "phone" | "map-pin";
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  demo: string;
  features: string[];
  technologies: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
}

export interface SkillCategoryItem {
  name: string;
  level: number;
  years?: number;
}

export interface SkillCategory {
  title: string;
  icon: "code" | "server" | "database" | "palette";
  skills: SkillCategoryItem[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface TimelineItem {
  id: number;
  type: "work" | "education" | "certification";
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  icon: "briefcase" | "graduation-cap" | "award";
}

export const siteData = {
  personal: {
    fullName: "Thineth Wickramarchchi",
    brandName: "Thineth Wick",
    initials: "TW",
    greeting: "Hi, I'm",
    avatarUrl:
      "https://storage.googleapis.com/portfolio_thineth/Thinethprofile.jpeg",
    resumeUrl:
      "https://storage.cloud.google.com/portfolio_thineth/Thineth%20CV.pdf",
    resumeFileName: "Thineth CV.pdf",
    email: "thinethwic@gmail.com",
    phone: "+94 (76) 809 0515",
    location: "No 74, Matara Road, Kamburupitiya",
    linkedinUrl: "https://www.linkedin.com/in/thineth-wick/",
    footerText: "Built with React & Tailwind CSS",
    copyright: "© 2026 Thineth Wickramarachchi. All rights reserved.",
    responseTime:
      "I typically respond to messages within 24 hours during business days.",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Timeline", href: "/timeline" },
    { name: "Contact", href: "/contact" },
  ] satisfies NavigationItem[],
  socialLinks: [
    {
      name: "GitHub",
      icon: "github",
      href: "https://github.com/thinethwic",
      description: "Check out my code",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      href: "https://linkedin.com/in/thineth-wick",
      description: "Professional network",
    },
    {
      name: "Twitter",
      icon: "twitter",
      href: "https://twitter.com/",
      description: "Follow my thoughts",
    },
    {
      name: "Email",
      icon: "mail",
      href: "mailto:thinethwic@gmail.com",
      description: "Send me an email directly",
    },
  ] satisfies SocialLink[],
  home: {
    heroDescription:
      "Full Stack Developer & UI/UX Designer passionate about creating beautiful, functional, and user-centered digital experiences.",
    whatIDo: {
      title: "What I Do",
      description:
        "I specialize in creating end-to-end digital solutions that combine great design with robust functionality.",
      items: [
        {
          icon: "code",
          name: "Frontend Development",
          description: "React, TypeScript, Tailwind CSS, Shadcn UI",
        },
        {
          icon: "palette",
          name: "UI/UX Design",
          description: "Figma, Adobe XD, Responsive Design",
        },
        {
          icon: "rocket",
          name: "Backend Development",
          description: "Node.js, .NET ASP, Mongo DB, Spring Boot",
        },
      ],
    },
    featuredProjectsSection: {
      title: "Featured Projects",
      description:
        "Here are some of my recent projects that showcase my skills and experience.",
      projectIds: [1, 2, 3],
    },
    cta: {
      title: "Ready to work together?",
      description:
        "I'm always interested in new opportunities and interesting projects. Let's discuss how we can bring your ideas to life.",
    },
  },
  about: {
    title: "About Me",
    summary:
      "I'm a passionate full-stack developer with a love for creating beautiful, functional web applications that make a difference in people's lives.",
    journeyTitle: "My Journey",
    journeyParagraphs: [
      "My journey into web development began during my computer science studies, where I discovered my passion for creating digital solutions that solve real-world problems. What started as curiosity about how websites work has evolved into a career dedicated to crafting exceptional user experiences.",
      "Over the years, I've had the privilege of working on diverse projects, from e-commerce platforms to data visualization tools. Each project has taught me valuable lessons about the importance of user-centered design, clean code, and effective collaboration.",
      "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and mentoring. I believe in the power of community and continuous learning to drive innovation in our field.",
    ],
    valuesSection: {
      title: "Core Values",
      description:
        "The principles that guide my work and drive my passion for development.",
      items: [
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
      ],
    },
    interestsSection: {
      title: "Beyond Code",
      description:
        "When I'm not behind the computer, here's what keeps me inspired and motivated.",
      items: [
        {
          icon: "code",
          name: "Coding",
          description: "Building innovative solutions",
        },
        { icon: "music", name: "Music", description: "Listening to music" },
        {
          icon: "camera",
          name: "Photography",
          description: "Capturing moments and stories",
        },
        {
          icon: "book",
          name: "Reading",
          description: "Tech blogs and fiction novels",
        },
        {
          icon: "coffee",
          name: "Coffee",
          description: "Specialty coffee enthusiast",
        },
        {
          icon: "heart",
          name: "Fitness",
          description: "Running and weight training",
        },
      ],
    },
    funFactsSection: {
      title: "Fun Facts",
      description: "A few random things about me that might surprise you.",
      items: [
        { value: "500+", label: "Cups of coffee consumed while coding" },
        { value: "10+", label: "Programming languages explored" },
        { value: "3", label: "Musical instruments played" },
      ],
    },
    cta: {
      title: "Let's Connect!",
      description:
        "I'm always excited to meet fellow developers, potential collaborators, or anyone who shares a passion for technology and innovation.",
    },
  },
  projectsPage: {
    title: "My Projects",
    description:
      "A collection of projects I've worked on, showcasing my skills in web development, design, and problem-solving.",
    categories: ["All", "Full-Stack", "Frontend", "Backend", "Desktop"],
    emptyState: {
      title: "No projects found",
      description: "Try adjusting your search terms or category filter.",
    },
  },
  projects: [
    {
      id: 1,
      title: "CIC Intranet Web Application",
      description:
        "Unimind AI is a full-stack solution with React, Node.js, and MongoDB",
      longDescription:
        "UniMind AI Web Application is an MVP product that leverages GPT-3.5 for advanced AI-driven solutions. Built with MERN Stack, React, and Vite for a high-performance frontend, it uses Express.js for a robust backend and Tailwind CSS for a sleek, responsive UI. The platform harnesses GPT-3.5 to power features such as intelligent content generation, automated decision-making, and personalized user interactions, making it a cutting-edge tool for businesses and individuals.",
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
        "Three-step depression detection tool",
        "Responsive design for mobile and desktop with React.js",
      ],
      technologies: {
        frontend: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
        backend: [
          "Java Spring Boot",
          "Spring Security",
          "Hibernate",
          "Post",
          "PostgreSQL",
        ],
        tools: ["VS Code", "Figma", "PgAdmin", "Intellij"],
      },
    },
    {
      id: 2,
      title: "Inventory Mangement System - IT Assets",
      description:
        "Inventory Management System – IT Assets",
      longDescription:
        "My client needed a centralised system to track and manage their organisation's IT assets — from hardware devices to software licenses — replacing messy spreadsheets with a reliable, role-based web platform.",
      image:
        "https://storage.googleapis.com/portfolio_thineth/3.png",
      tags: ["React", "JavaScript", "Tailwind CSS", "Shadcn UI"],
      category: "Full-Stack",
      github: "https://github.com/thinethwic/Mini-Project-Front-End.git",
      demo: "https://example.com/ecommerce-demo",
      features: [
        "Implemented a Node.js backend with TypeScript and MongoDB.",
        "User authentication and authorization from Clerk",
        "Predict depression level using a fine-tuned model",
        "Three-step depression detection tool",
        "Responsive design for mobile and desktop with React.js",
      ],
      technologies: {
        frontend: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
        backend: [
          "Java Spring Boot",
          "Spring Security",
          "Hibernate",
          "Post",
          "PostgreSQL",
        ],
        tools: ["VS Code", "Figma", "PgAdmin", "Intellij"],
      },
    },
    {
      id: 3,
      title: "SkillMentor - WebApp for Find Your Mentor",
      description:
        "SkillMentor – Full-Stack Online Mentoring Platform",
      longDescription:
        "My client needed a complete mentoring platform — a marketplace where students discover expert mentors, book sessions, and track learning progress, backed by a full admin system.",
      image:
        "https://storage.googleapis.com/portfolio_thineth/Skill-Mentor.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      category: "Full-Stack",
      github: "https://skillmentor-frontend-zeta.vercel.app/",
      demo: "https://github.com/thinethwic/skillmentor-platform.git",
      features: [
        "Implemented a Node.js backend with TypeScript and MongoDB.",
        "User authentication and authorization from Clerk",
        "Predict depression level using a fine-tuned model",
        "Three-step depression detection tool",
        "Responsive design for mobile and desktop with React.js",
      ],
      technologies: {
        frontend: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
        backend: [
          "Java Spring Boot",
          "Spring Security",
          "Hibernate",
          "Post",
          "PostgreSQL",
        ],
        tools: ["VS Code", "Figma", "PgAdmin", "Intellij"],
      },
    },
    {
      id: 4,
      title: "UniMind AI Web Application",
      description:
        "Unimind AI is a full-stack solution with React, Node.js, and MongoDB",
      longDescription:
        "UniMind AI Web Application is an MVP product that leverages GPT-3.5 for advanced AI-driven solutions. Built with MERN Stack, React, and Vite for a high-performance frontend, it uses Express.js for a robust backend and Tailwind CSS for a sleek, responsive UI. The platform harnesses GPT-3.5 to power features such as intelligent content generation, automated decision-making, and personalized user interactions, making it a cutting-edge tool for businesses and individuals.",
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
        "Three-step depression detection tool",
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
          "OpenAI",
        ],
        tools: ["JWT", "OpenAI API", "MongoDB Atlas", "VS Code", "Figma"],
      },
    },
    {
      id: 5,
      title: "Hirely AI Web Application",
      description:
        "Hirely AI is a full-stack solution with React, Node.js, and MongoDB",
      longDescription:
        "Hirely AI Web Application is an MVP product designed to streamline hiring processes using AI. Built with MERN Stack, React, and Vite for a fast and efficient frontend, it leverages Express.js for a scalable backend and Tailwind CSS for a modern, responsive UI. OpenAI GPT-3.5 Turbo powers the AI-assisted experiences in the application.",
      image: "/api/placeholder/600/400",
      tags: ["React", "JavaScript", "Tailwind CSS", "Shadcn UI"],
      category: "Full-Stack",
      github: "https://github.com/thinethwic/HirelyAI-Front-End.git",
      demo: "https://example.com/task-demo",
      features: [
        "Implemented a Node.js backend with TypeScript and MongoDB",
        "User authentication and authorization from Clerk",
        "Implemented a responsive UI with React.js",
        "Post available jobs and apply through the platform",
      ],
      technologies: {
        frontend: ["React", "JavaScript", "Shadcn UI", "Tailwind CSS"],
        backend: ["Node.js", "Express", "MongoDB", "Mongoose", "TypeScript"],
        tools: ["Clerk", "Figma", "OpenAI", "AWS S3"],
      },
    },
    {
      id: 6,
      title: "POS Software System",
      description:
        "POS Software System is a robust Point of Sale solution designed for efficient transaction processing and business management.",
      longDescription:
        "POS Software System is a robust Point of Sale solution designed for efficient transaction processing and business management. Built with C# for a powerful and user-friendly interface, it uses SQL databases for secure and scalable data storage. The system streamlines sales, inventory management, and reporting for retail and hospitality businesses.",
      image: "https://storage.googleapis.com/portfolio_thineth/projectPOS.png",
      tags: ["C#", "POS", "SQL", "Database Management Studio", "Figma"],
      category: "Desktop",
      github: "https://github.com/example/data-viz",
      demo: "https://example.com/dataviz-demo",
      features: [
        "Inventory management",
        "Payment processing",
        "Employee management",
        "Barcode scanner",
        "Sales processing",
        "Reporting and analytics",
      ],
      technologies: {
        frontend: ["Windows Forms (WinForms)"],
        backend: ["C#"],
        tools: ["SQL Server Management Studio", "Figma"],
      },
    },
    {
      id: 7,
      title: "Ceylon Hiker Website (WordPress)",
      description:
        "A responsive travel, camping, and 4x4 website built with WordPress",
      longDescription:
        "Ceylon Hiker is a 3-in-1 website that brings together travelling, camping, and 4x4 track information. It provides route details, campsite information, and off-road guidance in a single experience for outdoor enthusiasts in Sri Lanka.",
      image: "/api/placeholder/600/400",
      tags: ["WordPress", "PHP", "Nginx", "CSS", "MySQL"],
      category: "Frontend",
      github: "https://github.com/example/weather-app",
      demo: "https://example.com/weather-demo",
      features: [
        "3-in-1 platform developed using WordPress",
        "Designed and implemented a device-responsive UI",
        "Details about camping routes and 4x4 tracks",
        "Easy-to-customize website structure",
        "Integrated a chat agent for end users",
      ],
      technologies: {
        frontend: ["HTML", "CSS3", "JavaScript"],
        backend: ["Nginx", "PHP", "MySQL"],
        tools: ["All-in-One WP Migration", "Tawk.to Live Chat", "WPForms Lite"],
      },
    },
    {
      id: 8,
      title: "BeanStack - Coffee Shop",
      description:
        "A fully functional responsive website for a fictional coffee shop",
      longDescription:
        "BeanStack is a fully functional responsive website for a fictional coffee shop focused on user experience. Customers can browse the menu, access shop information, and place orders online through a clean and approachable interface.",
      image: "/api/placeholder/600/400",
      tags: ["ASP.NET", "C#", "MVC", "Tailwind CSS"],
      category: "Full-Stack",
      github: "https://github.com/example/blog-platform",
      demo: "https://example.com/blog-demo",
      features: [
        "Designed the system using clean MVC architecture",
        "Developed an attractive and easy-to-use UI with ASP.NET",
        "Implemented a responsive interface",
        "Built the backend with C#",
        "Developed the database using MySQL",
      ],
      technologies: {
        frontend: ["ASP.NET", "HTML", "Tailwind CSS", "JavaScript"],
        backend: ["C#", ".NET", "MySQL"],
        tools: ["Figma", "MySQL Server", "GitHub", "Visual Studio 2022"],
      },
    },
  ] satisfies Project[],
  skillsPage: {
    title: "Skills & Expertise",
    description:
      "A comprehensive overview of my technical skills, tools, and expertise gained through years of hands-on experience and continuous learning.",
    overviewSection: {
      title: "Skills Overview",
      description:
        "A visual representation of my core competencies and proficiency levels.",
    },
    certificationsSection: {
      title: "Certifications",
      description:
        "Professional certifications that validate my expertise and commitment to continuous learning.",
    },
    languagesSection: {
      title: "Languages",
      description: "Communication proficiency",
    },
    currentLearningSection: {
      title: "Currently Learning",
      description: "Expanding my skill set",
      items: ["Spring Boot", "AI/ML", "Blockchain", "Docker/Kubernetes"],
    },
    cta: {
      title: "Ready to Collaborate?",
      description:
        "I'm always excited to work on challenging projects and learn new technologies. Let's build something amazing together!",
    },
  },
  skillCategories: {
    frontend: {
      title: "Frontend Development",
      icon: "code",
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
      icon: "server",
      skills: [
        { name: "Spring Boot", level: 10, years: 0 },
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
      icon: "database",
      skills: [
        { name: "SQL Server Management", level: 85, years: 2 },
        { name: "MongoDB", level: 80, years: 2 },
        { name: "MySQL", level: 75, years: 2 },
        { name: "Mongoose", level: 85, years: 2 },
      ],
    },
    tools: {
      title: "Tools & DevOps",
      icon: "palette",
      skills: [
        { name: "Git/GitHub", level: 95, years: 4 },
        { name: "AWS", level: 75, years: 2 },
        { name: "Vite", level: 85, years: 1 },
      ],
    },
    design: {
      title: "Design & UX",
      icon: "palette",
      skills: [
        { name: "Figma", level: 85, years: 2 },
        { name: "Responsive Design", level: 95, years: 4 },
        { name: "UI/UX Design", level: 80, years: 2 },
        { name: "Prototyping", level: 75, years: 2 },
        { name: "User Research", level: 70, years: 1 },
      ],
    },
  } satisfies Record<string, SkillCategory>,
  certifications: [
    {
      name: "Introduction to Large Language Model",
      issuer: "Google",
      year: "Nov 2025",
      credentialId: "20002830",
    },
    {
      name: "Introduction to Generative AI",
      issuer: "Google",
      year: "Oct 2025",
      credentialId: "19205416",
    },
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
  ] satisfies Certification[],
  languages: [
    { name: "Sinhala", level: "Native" },
    { name: "English", level: "Conversational" },
  ] satisfies Language[],
  timelinePage: {
    title: "My Journey",
    description:
      "A chronological overview of my educational background, professional experience, and key milestones that have shaped my career in technology.",
    legend: [
      { label: "Work Experience", colorClass: "bg-blue-500" },
      { label: "Education", colorClass: "bg-green-500" },
      { label: "Certifications", colorClass: "bg-yellow-500" },
    ],
    cta: {
      title: "What's Next?",
      description:
        "I'm always looking for new challenges and opportunities to grow. Let's discuss how we can work together to create something amazing.",
    },
  },
  timeline: [
    {
      id: 1,
      type: "work",
      title: "Volunteer - Software Developer",
      company: "BinaryCode Solutions (Pvt) LTD",
      location: "Matara",
      startDate: "2024 March",
      endDate: "Present",
      description:
        "Lead development of enterprise-level desktop applications using C#. Web application development using WordPress, React, and Node.js.",
      achievements: ["Creating a POS system using C# from scratch"],
      technologies: ["Visual Studio", "C#", "SQL", "SQL Management System"],
      icon: "briefcase",
    },
    {
      id: 2,
      type: "work",
      title: "Intern - Database Management",
      company: "Nekfa Australia (Pvt) Limited",
      location: "Colombo",
      startDate: "2023 Feb",
      endDate: "2023 April",
      description:
        "Designed and supported database-driven systems while collaborating on structured solutions for public-sector service workflows.",
      achievements: [
        "Created and designed a procurement service database for the Negombo Municipal Council",
        "Created and designed a walking lane reservation database for the Negombo Municipal Council",
        "Designed a photoshoot reservation system database for the Negombo Municipal Council",
      ],
      technologies: ["dbForge MySQL", "ER Diagram", "MySQL"],
      icon: "briefcase",
    },
    {
      id: 3,
      type: "work",
      title: "IT System Technician",
      company: "Wickramarachchi Distributors (Pvt) LTD",
      location: "Matara",
      startDate: "2018 Feb",
      endDate: "2020 Jan",
      description:
        "Maintained business systems, software environments, and hardware infrastructure for daily operations.",
      achievements: [
        "Maintained current software licenses",
        "Patched applications with the latest features",
        "Installed and configured software and hardware",
      ],
      technologies: ["POS System", "SQL Database"],
      icon: "briefcase",
    },
    {
      id: 4,
      type: "certification",
      title:
        "Early Detection and Management of Depression Among University Students",
      company:
        "Lincoln International Multidisciplinary Conference 2024, Sri Lanka",
      location: "Colombo",
      startDate: "August 2024",
      description:
        "A review of AI-driven methods for detecting and managing depression among university students, emphasizing early identification, confidentiality, and accessibility.",
      achievements: [
        "Researched AI-based screening tools",
        "Focused on improving mental health support services within academic institutions",
      ],
      technologies: [],
      icon: "award",
    },
    {
      id: 5,
      type: "education",
      title:
        "Bachelor of Health Science (BHSc) Hons in Health Information Communication Technology (HICT)",
      company:
        "Gampaha Wickramarachchi University of Indigenous Medicine (GWUIM)",
      location: "Kandy Road, Yakkala, Sri Lanka",
      startDate: "2022 March",
      endDate: "Present",
      description:
        "Learning OOP, web development, data structures and algorithms, ASP.NET, MERN stack, AI/ML, and health information management.",
      achievements: [
        "Current GPA 3.90 up to 3rd year",
        "Former President of the Technological Advancement Society",
      ],
      technologies: [
        "Java",
        "Python",
        "C",
        "Data Structures",
        "Node Js",
        "Database Systems",
        "C#",
        "ASP.NET",
      ],
      icon: "graduation-cap",
    },
    {
      id: 6,
      type: "education",
      title:
        "Certificate in Advanced Multimedia Web Design & Development Techniques",
      company: "University of Colombo School of Computing (UCSC)",
      location: "Colombo, Sri Lanka",
      startDate: "2023 Oct",
      endDate: "2024 Jan",
      description:
        "Studied web design and development techniques, graphics design for web applications, web engineering technologies, accessibility, and validation techniques.",
      achievements: ["Successfully completed the course and earned the certificate"],
      technologies: ["WordPress", "CSS", "JavaScript", "Photoshop", "PHP", "HTML"],
      icon: "graduation-cap",
    },
    {
      id: 7,
      type: "education",
      title: "Advanced Level Examination",
      company: "Rahula College Matara",
      location: "Matara, Sri Lanka",
      startDate: "2016 Jan",
      endDate: "2019 Aug",
      description: "G.C.E Advanced Level studies completed at Rahula College Matara.",
      achievements: [
        "Engineering Technology - B",
        "Science for Technology - B",
        "Information Communication Technology - C",
        "General English - S",
      ],
      technologies: [],
      icon: "graduation-cap",
    },
  ] satisfies TimelineItem[],
  contactPage: {
    title: "Get In Touch",
    description:
      "I'm always interested in hearing about new opportunities, collaborations, or just having a friendly chat about technology and development.",
    form: {
      title: "Send a Message",
      description:
        "Fill out the form below and I'll get back to you as soon as possible.",
      successMessage:
        "Thanks for your message! I'll get back to you within 24 hours.",
      placeholders: {
        name: "Your name",
        email: "your.email@example.com",
        subject: "What's this about?",
        message: "Tell me about your project, ideas, or just say hello!",
      },
      submitLabel: "Send Message",
      submittingLabel: "Sending...",
    },
    sections: {
      contactInfoTitle: "Contact Information",
      socialTitle: "Connect With Me",
      responseTimeTitle: "Response Time",
    },
    cta: {
      title: "Let's Build Something Great Together",
      description:
        "Whether you have a project in mind, want to collaborate, or just want to say hello, I'm always excited to connect with fellow developers and creative minds.",
      primaryLabel: "Email Me Directly",
      secondaryLabel: "Connect on LinkedIn",
    },
  },
  contactInfo: [
    {
      icon: "mail",
      title: "Email",
      value: "thinethwic@gmail.com",
      description: "Send me an email anytime!",
      href: "mailto:thinethwic@gmail.com",
    },
    {
      icon: "phone",
      title: "Phone",
      value: "+94 (76) 809 0515",
      description: "Call me during business hours",
      href: "tel:+94768090515",
    },
    {
      icon: "map-pin",
      title: "Location",
      value: "No 74, Matara Road, Kamburupitiya",
      description: "Available for remote work",
      href: "#",
    },
  ] satisfies ContactInfoItem[],
} as const;

export type SiteData = typeof siteData;
