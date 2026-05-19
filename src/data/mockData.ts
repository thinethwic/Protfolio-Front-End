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

export interface ServiceItem {
  title: string;
  description: string;
  icon:
    | "code"
    | "palette"
    | "server"
    | "rocket"
    | "database"
    | "briefcase";
  deliverables: string[];
  technologies: string[];
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
    { name: "Services", href: "/services" },
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
      "I'm a motivated full-stack developer and software engineering intern specializing in Java Spring Boot backend engineering and MERN stack development, passionate about building secure, scalable, and data-driven web applications.",
    journeyTitle: "My Journey",
    journeyParagraphs: [
      "My journey into software development began during my BHSc (Hons) in Health Information and Communication Technology at Gampaha Wickramarachchi University, where I discovered a deep passion for building digital solutions that solve real-world problems. What started as curiosity about how web applications work has grown into hands-on experience with full-stack development, from designing databases at the Negombo Municipal Council to engineering enterprise-grade backend systems with Java Spring Boot.",
      "Over the years I've worked across a range of meaningful projects — from AI-powered hiring platforms and mentoring marketplaces to company intranet systems and asset management tools. Each project has sharpened my understanding of secure authentication, role-based access control, clean API design, and scalable architecture. I've had the privilege of applying these skills professionally as a Software Engineering Intern at CIC Feeds (Pvt) Ltd, where I'm currently building and maintaining internal web solutions used across the organisation.",
      "Beyond work, I co-authored a research paper on AI-driven early detection of depression published at the Lincoln International Multidisciplinary Conference 2024, and served as the Founding President of the Technological Advancement Society at my university. I'm continuously deepening my expertise through certifications in Java Spring Boot, AI & Machine Learning, and full-stack development — driven by a belief that technology, when built thoughtfully, can genuinely improve lives.",
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
  servicesPage: {
    title: "Services I Provide",
    description:
      "I help businesses, startups, and teams design, build, and improve modern digital products with a strong focus on usability, clean engineering, and maintainable systems.",
    processTitle: "How I Work",
    processDescription:
      "A practical workflow that keeps delivery transparent, collaborative, and focused on real business outcomes.",
    process: [
      {
        step: "01",
        title: "Discover",
        description:
          "Understand your product goals, users, technical needs, and project scope before implementation begins.",
      },
      {
        step: "02",
        title: "Design & Plan",
        description:
          "Shape the UI, architecture, and delivery milestones so the product direction is clear and maintainable.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "Develop responsive frontend experiences and reliable backend features with production-level attention to quality.",
      },
      {
        step: "04",
        title: "Launch & Improve",
        description:
          "Support testing, release readiness, and follow-up improvements based on feedback and product growth.",
      },
    ],
    cta: {
      title: "Need a service tailored to your project?",
      description:
        "If you have an idea, product requirement, or company system to build, I can help turn it into a polished and scalable solution.",
    },
  },
  services: [
    {
      title: "Frontend Web Development",
      icon: "code",
      description:
        "Building fast, responsive, and modern user interfaces with a strong focus on usability, performance, and clean component architecture.",
      deliverables: [
        "Responsive React/Vite interfaces",
        "Modern Tailwind CSS and component-based UI systems",
        "Dashboard and admin panel development",
        "Landing pages and portfolio websites",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Shadcn UI"],
    },
    {
      title: "Backend Development",
      icon: "server",
      description:
        "Designing secure and scalable backend systems for APIs, business logic, authentication, and enterprise workflows.",
      deliverables: [
        "REST API development",
        "Role-based authentication and authorization",
        "Spring Boot and Node.js backend services",
        "Business logic and system integration",
      ],
      technologies: ["Java Spring Boot", "Node.js", "Spring Security", "JWT", "Express.js"],
    },
    {
      title: "Full-Stack Web Applications",
      icon: "rocket",
      description:
        "Delivering complete end-to-end web applications from database design to polished frontend experiences.",
      deliverables: [
        "Custom business systems",
        "Internal company tools and portals",
        "MERN and Java-based full-stack applications",
        "Deployment-ready solutions",
      ],
      technologies: ["React", "Java Spring Boot", "MongoDB", "PostgreSQL", "Clerk"],
    },
    {
      title: "UI/UX Design",
      icon: "palette",
      description:
        "Designing clean, intuitive, and modern interfaces that help users move through products with clarity and confidence.",
      deliverables: [
        "Wireframes and interface layouts",
        "High-fidelity screens in Figma",
        "Usability-focused design improvements",
        "Responsive design systems",
      ],
      technologies: ["Figma", "Responsive Design", "UI/UX Design", "Prototyping"],
    },
    {
      title: "Database Design & Management",
      icon: "database",
      description:
        "Structuring reliable databases and data flows that support scalable applications and real-world operational needs.",
      deliverables: [
        "Database schema design",
        "SQL and NoSQL data modeling",
        "Query optimization and relationship planning",
        "Business data structure design",
      ],
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server Management"],
    },
    {
      title: "Company Systems & Internal Tools",
      icon: "briefcase",
      description:
        "Creating practical internal systems for businesses such as inventory tools, intranet platforms, support systems, and operational dashboards.",
      deliverables: [
        "Inventory and asset management systems",
        "Intranet and help-desk platforms",
        "Department workflow solutions",
        "Secure business dashboards",
      ],
      technologies: ["React", "Java Spring Boot", "PostgreSQL", "Google Cloud", "Role-Based Access"],
    },
  ] satisfies ServiceItem[],
  projects: [
    {
      id: 1,
      title: "CIC Intranet System",
      description:
        "An integrated Company Intranet and Help Desk platform with role-based access and a full ticketing system.",
      longDescription:
        "Designing and developing an integrated Company Intranet and Help Desk platform featuring department-wise authentication, role-based access control, and a full ticketing system. Employees can raise support tickets that automatically trigger email notifications to the relevant department HOD, with Google Cloud-backed file storage for secure document management. Built with React + Vite, Tailwind CSS, Java Spring Boot, Spring Security, and JWT — currently in the final development phase.",
      image: "https://storage.googleapis.com/portfolio_thineth/CIC_Intranet.png",
      tags: ["React", "Java Spring Boot", "JWT", "Google Cloud"],
      category: "Full-Stack",
      github: "",
      demo: "",
      features: [
        "Department-wise authentication and role-based access control",
        "Full ticketing system with automatic email notifications to department HODs",
        "Google Cloud-backed file storage for secure document management",
        "Built with React + Vite frontend and Java Spring Boot backend",
        "Secured with Spring Security and JWT",
      ],
      technologies: {
        frontend: ["React", "Vite", "Tailwind CSS"],
        backend: ["Java Spring Boot", "Spring Security", "JWT"],
        tools: ["Google Cloud", "VS Code", "IntelliJ", "Postman"],
      },
    },
    {
      id: 2,
      title: "Enterprise Asset Management Inventory System",
      description:
        "A full-stack IT asset management system with location-based authentication and real-time asset tracking.",
      longDescription:
        "Designed and developed a full-stack Enterprise Asset Management Inventory System featuring location-based authentication, role-based access control, and real-time asset tracking across multiple branches. Built with React + Vite, Tailwind CSS, Java Spring Boot, Spring Security, and JWT — enforcing geo-restricted logins and role-scoped API permissions to prevent unauthorized cross-location operations.",
      image: "https://storage.googleapis.com/portfolio_thineth/3.png",
      tags: ["React", "Java Spring Boot", "PostgreSQL", "Clerk"],
      category: "Full-Stack",
      github: "https://github.com/thinethwic/cic-inventory-front-end.git",
      demo: "https://cicinventory.netlify.app/",
      features: [
        "Location-based authentication with geo-restricted logins",
        "Role-based access control and role-scoped API permissions",
        "Real-time asset tracking across multiple branches",
        "Prevents unauthorized cross-location operations",
        "Clerk authentication integrated with Spring Security and JWT",
      ],
      technologies: {
        frontend: ["React", "Vite", "Tailwind CSS"],
        backend: ["Java Spring Boot", "Spring Security", "JWT", "PostgreSQL"],
        tools: ["Clerk", "PgAdmin", "IntelliJ", "Postman", "Figma"],
      },
    },
    {
      id: 3,
      title: "SkillMentor – Online Mentoring Platform",
      description:
        "A full-stack mentoring marketplace connecting students with expert mentors for personalised one-on-one sessions.",
      longDescription:
        "Designed and developed SkillMentor, a full-stack online mentoring platform connecting students with expert mentors for personalised one-on-one sessions. Features include mentor discovery with rich profiles and student reviews, a smart booking system with double-booking prevention and real-time status tracking, and a complete admin dashboard with role-based access control for mentor management, subject oversight, and payment confirmation. Secured with JWT-based Clerk authentication, enforcing distinct Student and Admin roles across frontend and backend. Deployed live on Vercel and Render.",
      image: "https://storage.googleapis.com/portfolio_thineth/Skill-Mentor.png",
      tags: ["React", "TypeScript", "Java Spring Boot", "PostgreSQL"],
      category: "Full-Stack",
      github: "https://github.com/thinethwic/skillmentor-platform",
      demo: "https://skillmentor-frontend-zeta.vercel.app/",
      features: [
        "Mentor discovery with rich profiles and student reviews",
        "Smart booking system with double-booking prevention and real-time status tracking",
        "Complete admin dashboard for mentor management, subject oversight, and payment confirmation",
        "JWT-based Clerk authentication with distinct Student and Admin roles",
        "Deployed live on Vercel and Render",
      ],
      technologies: {
        frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn UI", "React Hook Form", "Zod"],
        backend: ["Java Spring Boot", "PostgreSQL", "Clerk"],
        tools: ["JWT", "IntelliJ", "VS Code", "Figma", "Postman"],
      },
    },
    {
      id: 4,
      title: "UniMind AI Web Application",
      description:
        "A MERN stack MVP leveraging GPT-3.5 Turbo for intelligent content generation and AI-driven interactions.",
      longDescription:
        "UniMind AI Web Application is an MVP product that leverages GPT-3.5 Turbo for advanced AI-driven solutions. Built with MERN Stack, React, and Vite for a high-performance frontend, it uses Express.js for a robust backend and Tailwind CSS for a sleek, responsive UI. The platform harnesses GPT-3.5 Turbo to power features such as intelligent content generation, automated decision-making, and personalized user interactions, making it a cutting-edge tool for businesses and individuals.",
      image: "https://storage.googleapis.com/portfolio_thineth/Skill%20Mentor%20Web%20App%20-%20Fiverr.png",
      tags: ["React", "Node.js", "MongoDB", "OpenAI"],
      category: "Full-Stack",
      github: "https://github.com/thinethwic/Mini-Project-Front-End.git",
      demo: "",
      features: [
        "Intelligent content generation using GPT-3.5 Turbo",
        "Automated decision-making and personalized user interactions",
        "User authentication and authorization with Clerk",
        "Responsive design for mobile and desktop",
        "MERN stack with React + Vite frontend",
      ],
      technologies: {
        frontend: ["React", "TypeScript", "JavaScript", "Shadcn UI", "Tailwind CSS", "Clerk"],
        backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "OpenAI GPT-3.5"],
        tools: ["Python", "Clerk Tokens", "MongoDB Atlas", "VS Code", "Figma"],
      },
    },
    {
      id: 5,
      title: "Hirely AI Smart Hire Portal",
      description:
        "A MERN stack MVP that streamlines hiring processes using OpenAI GPT-3.5 Turbo.",
      longDescription:
        "Hirely AI Smart Hire portal web application is an MVP product designed to streamline hiring processes using AI. Built with MERN Stack, React, and Vite for a fast and efficient frontend, it leverages Express.js for a scalable backend and Tailwind CSS for a modern, responsive UI. OpenAI GPT-3.5 Turbo powers the AI-assisted hiring experiences in the application.",
      image: "https://storage.googleapis.com/portfolio_thineth/Hirely%20AI.png",
      tags: ["React", "TypeScript", "Node.js", "OpenAI"],
      category: "Full-Stack",
      github: "https://github.com/thinethwic/HirelyAI.git",
      demo: "https://aidf-front-end-thineth.netlify.app/",
      features: [
        "AI-powered hiring assistance using OpenAI GPT-3.5 Turbo",
        "Post available jobs and apply through the platform",
        "User authentication and authorization with Clerk",
        "Responsive UI with React.js and Tailwind CSS",
        "Scalable Node.js and Express.js backend with MongoDB",
      ],
      technologies: {
        frontend: ["React", "TypeScript", "JavaScript", "Shadcn UI", "Tailwind CSS"],
        backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "OpenAI GPT-3.5"],
        tools: ["Python", "Clerk", "AWS S3", "VS Code", "Figma"],
      },
    },
    {
      id: 6,
      title: "BeanStack - Coffee Shop",
      description:
        "A fully functional responsive website for a fictional coffee shop",
      longDescription:
        "BeanStack is a fully functional responsive website for a fictional coffee shop focused on user experience. Customers can browse the menu, access shop information, and place orders online through a clean and approachable interface.",
      image: "https://storage.googleapis.com/portfolio_thineth/cofeee.jpg",
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
        { name: "Spring Boot", level: 90, years: 1 },
        { name: "TypeScript", level: 90, years: 2 },
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
        { name: "PostgreSQL", level: 85, years: 1 },
        { name: "SQL Server Management", level: 85, years: 2 },
        { name: "MongoDB", level: 80, years: 2 },
        { name: "MySQL", level: 75, years: 2 },
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
      name: "Java OOP & Spring Boot Backend Engineer",
      issuer: "STEM Link",
      year: "Apr 2026",
      credentialId: "f737311f-e6f6-40fa-ab60-172338aeff00",
    },
    {
      name: "Artificial Intelligence and Machine Learning Certification",
      issuer: "SKYREK",
      year: "Nov 2025",
      credentialId: "SKML25788",
    },
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
      title: "Intern - Software Engineer",
      company: "CIC Feeds (Pvt) LTD",
      location: "Ekala, Sri Lanaka",
      startDate: "2026 March",
      endDate: "Present",
      description:
        "",
      achievements: ["Completed two Project, IT Asset Tool, CIC Intranet Project"],
      technologies: ["Java Spring Boot", "PostgreSQL", "Hibernate", "Ubuntu", "Lunux"],
      icon: "briefcase",
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
