export const portfolioData = {
  personal: {
    name: "Prince Nandoliya",
    tagline: "Full Stack Developer",
    roles: [
      "Full Stack Developer",
      "MERN Stack Developer",
      "React.js Developer"
    ],
    summary:
      "Enthusiastic Full Stack Developer trained at Red & White Multimedia Education. Skilled in HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, Express.js, and MongoDB. Passionate about architecting performant REST APIs, responsive web interfaces, and modern full-stack web applications.",
    location: "Bhavnagar, Gujarat, India - 364003",
    email: "princenandoliya@gmail.com",
    phone: "+91 92742 80507",
    rawPhone: "9274280507",
    github: "https://github.com/Prince-Nandoliya",
    linkedin: "https://www.linkedin.com/in/princenandoliya/",
    oldPortfolio: "https://princenandoliyaportfolio.netlify.app/",
    resumeUrl: "/PrinceResume.pdf",
    avatar: "/profile.png",
    status: "Available for Internships & Full-Time Roles",
  },

  stats: [
    { label: "Public Repositories", value: "42+", suffix: "repos" },
    { label: "Tech Stack Mastered", value: "12+", suffix: "tools" },
    { label: "Industry Training", value: "1+ yr", suffix: "Red & White" },
    { label: "Degree Pursuit", value: "BCA", suffix: "2026-2029" },
  ],

  about: {
    story:
      "I am a passionate software craftsman based in Bhavnagar, Gujarat. Currently pursuing my Bachelor of Computer Applications (BCA) at Surendranagar University while sharpening production-grade software development skills at Red & White Multimedia Education. I specialize in building end-to-end full stack web applications with modern frontend frameworks and robust backend micro-architectures.",
    highlights: [
      {
        title: "Full-Stack Development",
        desc: "Building seamless user interfaces with React and coupling them with resilient Node.js & Express backends.",
      },
      {
        title: "Database Architecture",
        desc: "Designing document schemas with MongoDB & Mongoose, ensuring data integrity and query performance.",
      },
      {
        title: "API Design & Security",
        desc: "Crafting RESTful APIs secured with JSON Web Tokens (JWT), bcrypt password hashing, and role permissions.",
      },
      {
        title: "AI-Augmented Engineering",
        desc: "Leveraging cutting-edge AI dev workflows (Copilot, Claude, ChatGPT) to ship high-quality code 3x faster.",
      },
    ],
    languages: ["English", "Hindi", "Gujarati"],
  },

  skills: {
    frontend: [
      { name: "React.js", level: "Intermediate", icon: "react", color: "#61dafb" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "javascript", color: "#f7df1e" },
      { name: "HTML5", level: "Expert", icon: "html5", color: "#e34f26" },
      { name: "CSS3 / Modern CSS", level: "Expert", icon: "css3", color: "#1572b6" },
      { name: "Tailwind CSS", level: "Advanced", icon: "tailwind", color: "#38bdf8" },
      { name: "Bootstrap 5", level: "Advanced", icon: "bootstrap", color: "#7952b3" },
    ],
    backend: [
      { name: "Node.js", level: "Advanced", icon: "nodejs", color: "#339933" },
      { name: "Express.js", level: "Advanced", icon: "express", color: "#ffffff" },
      { name: "RESTful APIs", level: "Advanced", icon: "api", color: "#06b6d4" },
      { name: "JWT Authentication", level: "Advanced", icon: "jwt", color: "#d63aff" },
      { name: "Cloudinary Integration", level: "Intermediate", icon: "cloud", color: "#3448c5" },
    ],
    database: [
      { name: "MongoDB", level: "Advanced", icon: "mongodb", color: "#47a248" },
      { name: "Mongoose ODM", level: "Advanced", icon: "mongoose", color: "#880000" },
      { name: "PostgreSQL", level: "Intermediate", icon: "database", color: "#336791" },
      { name: "LocalStorage & Caching", level: "Expert", icon: "storage", color: "#f59e0b" },
    ],
    tools: [
      { name: "Git", level: "Advanced", icon: "git", color: "#f05032" },
      { name: "GitHub", level: "Advanced", icon: "github", color: "#ffffff" },
      { name: "VS Code", level: "Expert", icon: "vscode", color: "#007acc" },
      { name: "Postman API Client", level: "Advanced", icon: "postman", color: "#ff6c37" },
    ],
    aiTools: [
      { name: "GitHub Copilot", level: "Daily Workflow", icon: "copilot", color: "#22c55e" },
      { name: "ChatGPT (GPT-4o)", level: "Prompt & Code", icon: "chatgpt", color: "#10a37f" },
      { name: "Claude 3.5 Sonnet", level: "Architecture", icon: "claude", color: "#d97706" },
      { name: "Open Code", level: "Model Exploration", icon: "ai", color: "#8b5cf6" },
    ],
    core: [
      { name: "C Programming", level: "Foundational", icon: "c", color: "#a8b9cc" },
      { name: "C++", level: "Foundational", icon: "cpp", color: "#00599c" },
      { name: "Data Structures Basics", level: "Foundational", icon: "algo", color: "#ec4899" },
    ],
  },

  projects: [
    {
      id: "olympiad-saas",
      title: "Olympiad Online Competition SaaS Platform",
      category: "Backend",
      badge: "Internship Project",
      description:
        "An online Olympiad platform featuring student registration, online exams, question management, payments, and automatic result generation using React.js, Node.js, Express.js, and PostgreSQL.",
      features: [
        "Automated examination engine with student registration & authentication",
        "Online exam environment with question management & timer controls",
        "PostgreSQL relational database design for exam sessions & candidate submissions",
        "Automated scorecard compilation & result generation logic",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs"],
      githubUrl: "https://github.com/Prince-Nandoliya",
      liveUrl: null,
      featured: true,
      stats: { stars: "Internship", status: "Completed" },
    },
    {
      id: "jwt-auth",
      title: "JWT Authentication & Authorization System",
      category: "Backend",
      badge: "Full-Stack Security",
      description:
        "A robust authentication and security engine providing secure registration, login, session validation, password hashing with bcrypt, and role-guarded route middleware.",
      features: [
        "Token-based stateless authentication using JSON Web Tokens (JWT)",
        "Bcrypt password salting & secure hashing",
        "Protected private route middleware guards",
        "Tested thoroughly with Postman collection suite",
        "Mongoose user model schema validation",
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt", "Postman"],
      githubUrl: "https://github.com/Prince-Nandoliya/node-js/tree/main/10_jwt_authentication",
      liveUrl: null,
      featured: true,
      stats: { stars: "Featured", status: "Production Ready" },
    },
    {
      id: "ecommerce-store",
      title: "Modern E-Commerce Storefront",
      category: "Frontend",
      badge: "Interactive Web App",
      description:
        "A high-performance online storefront featuring dynamic product catalog browsing, instant search & filter, cart management with persistent LocalStorage, and responsive UI.",
      features: [
        "Dynamic product grid with category filtering & price sorting",
        "Full shopping cart state management (add, update qty, remove)",
        "LocalStorage persistence across browser sessions",
        "Responsive Bootstrap 5 layout optimized for mobile & desktop",
        "Interactive checkout modal with order calculation",
      ],
      technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap 5", "LocalStorage"],
      githubUrl: "https://github.com/Prince-Nandoliya/Javascript/tree/main/e-commerce-project",
      liveUrl: null,
      featured: true,
      stats: { stars: "Featured", status: "Complete" },
    },
    {
      id: "react-showcase",
      title: "React Modern Components & State Suite",
      category: "Frontend",
      badge: "React Ecosystem",
      description:
        "A modular React repository exploring state machines, custom hooks, reusable design tokens, component lifecycle, and interactive data visualization.",
      features: [
        "Advanced React Hooks (useState, useEffect, useMemo, useCallback)",
        "Custom UI components with clean prop drilling minimization",
        "Responsive styling and modern accessibility patterns",
        "Rapid Vite bundle orchestration",
      ],
      technologies: ["React.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)"],
      githubUrl: "https://github.com/Prince-Nandoliya/React",
      liveUrl: null,
      featured: true,
      stats: { stars: "Active", status: "Continuous Dev" },
    },
    {
      id: "number-guessing",
      title: "Interactive Number Guessing Game",
      category: "Frontend",
      badge: "Game Logic",
      description:
        "A fun JavaScript logic game testing player deductive skills with difficulty levels, high-score tracking, and engaging feedback animations.",
      features: [
        "Random state generation & bounds checking",
        "Score decrement system with persistent high-scores",
        "Audio feedback cues & celebratory visual transitions",
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
      githubUrl: "https://github.com/Prince-Nandoliya/Number-Guessing-Game",
      liveUrl: null,
      featured: false,
      stats: { stars: "Mini Game", status: "Complete" },
    },
    {
      id: "bmw-showcase",
      title: "BMW Luxury Showcase Landing Page",
      category: "Frontend",
      badge: "UI / UX Clone",
      description:
        "A luxury automotive showcase website featuring responsive grid layouts, hero video/image heroics, and refined micro-interactions.",
      features: [
        "Hero showcase with sleek typography and contrast styling",
        "Vehicle model specs grid with dynamic interactive hovers",
        "Cross-device mobile-first responsive design",
      ],
      technologies: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"],
      githubUrl: "https://github.com/Prince-Nandoliya/BMW-website",
      liveUrl: null,
      featured: false,
      stats: { stars: "Design", status: "Complete" },
    },
  ],

  education: [
    {
      degree: "BCA - Bachelor of Computer Applications",
      institution: "Surendranagar University",
      period: "2026 - 2029",
      status: "Currently Enrolled",
      type: "University Degree",
      description:
        "Pursuing comprehensive computer science foundation covering algorithms, database management, software engineering, and web development fundamentals.",
      badge: "Higher Education",
    },
    {
      degree: "Full Stack Web Development Trainee",
      institution: "Red & White Skill Education, Bhavnagar",
      period: "2025 - Present",
      status: "In Progress",
      type: "Professional Industry Diploma",
      description:
        "Intensive hands-on training across MERN stack (MongoDB, Express, React, Node.js), modern frontend responsive architecture, REST APIs, and version control.",
      badge: "Professional Training",
    },
  ],

  certifications: [
    {
      title: "Future Forward",
      issuer: "Design + Development Program",
      description: "Recognized for excellence in full stack design thinking and agile development workflows.",
      type: "Certificate of Completion",
      icon: "award",
      date: "2025",
    },
    {
      title: "Tech War 2026",
      issuer: "Competitive Programming Championship",
      description: "Certificate of active participation in state-level coding and problem-solving tournament.",
      type: "Participation Certificate",
      icon: "trophy",
      date: "2026",
    },
  ],

  githubActivity: {
    username: "Prince-Nandoliya",
    totalRepos: 42,
    followers: 7,
    following: 8,
    profileUrl: "https://github.com/Prince-Nandoliya",
    pinned: [
      { name: "React", lang: "JavaScript", desc: "React component architecture & state exploration" },
      { name: "node-js", lang: "JavaScript", desc: "Node.js core backend services & JWT authentication" },
      { name: "Javascript", lang: "JavaScript", desc: "Vanilla JS applications, e-commerce project & algorithms" },
      { name: "TechWar2026", lang: "C", desc: "Championship algorithmic solutions & competitive problems" },
    ],
  },
};
