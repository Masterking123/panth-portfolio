// Portfolio Configuration
// Edit this file to update all information across your portfolio

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Panth Thaker",
    title: "Software Developer & Data Analyst",
    email: "thakerpanth10@gmail.com",
    location: "Ontario, Canada",
    bio: "I craft exceptional digital experiences through innovative web applications, combining cutting-edge technology with stunning design to bring ideas to life.",

    // Social Links
    social: {
      github: "https://github.com/Masterking123",
      linkedin: "https://www.linkedin.com/in/panth-thaker-764017371",
    },
  },

  // About Section
  about: {
    journey: [
      "I'm a passionate full-stack developer with 3+ years of experience building innovative web applications. I specialize in turning complex problems into elegant, user-friendly solutions that make a real impact.",
      "My approach combines technical expertise with creative design thinking, ensuring every project not only functions flawlessly but also delivers an exceptional user experience.",
    ],
  },

  // Skills & Technologies
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Docker",
    "Kubernetes",
    "Git",
    "CI/CD",
    "REST APIs",
    "GraphQL",
    "Tailwind CSS",
    "Framer Motion",
  ],

  // Projects
  projects: [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Stripe",
        "JWT",
        "Tailwind CSS",
      ],
      links: {
        github: "https://github.com/yourusername/ecommerce",
        demo: "https://your-ecommerce-demo.com",
      },
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      featured: true, // Set to true for featured projects
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: [
        "React",
        "TypeScript",
        "Firebase",
        "Tailwind CSS",
        "Framer Motion",
      ],
      links: {
        github: "https://github.com/yourusername/taskmanager",
        demo: "https://your-taskmanager-demo.com",
      },
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather conditions, forecasts, and weather maps using OpenWeatherMap API.",
      technologies: [
        "JavaScript",
        "CSS3",
        "Weather API",
        "Chart.js",
        "Local Storage",
      ],
      links: {
        github: "https://github.com/yourusername/weather-dashboard",
        demo: "https://your-weather-demo.com",
      },
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      featured: true,
    },
    // Add more projects here as needed
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React, TypeScript, and Framer Motion. Features smooth animations, glassmorphism design, and optimized performance.",
      technologies: ["React", "TypeScript", "Framer Motion", "Vite", "CSS3"],
      links: {
        github: "https://github.com/yourusername/portfolio",
        demo: "https://yourportfolio.com",
      },
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      featured: true,
    },
  ],

  // Animation Settings
  animations: {
    typewriterSpeed: 80, // milliseconds between characters
    typewriterDelay: 1000, // delay before typing starts
    staggerDelay: 0.1, // delay between animated elements
    pageLoadDelay: 200, // initial page load delay
  },

  // Theme Settings
  theme: {
    primaryColor: "#3b82f6", // Blue
    secondaryColor: "#8b5cf6", // Purple
    accentColor: "#06b6d4", // Cyan
    // Add more theme customizations here
  },

  // Navigation
  navigation: [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],

  // SEO Settings
  seo: {
    title: "Your Name - Full Stack Developer Portfolio",
    description:
      "Full Stack Developer Portfolio - showcasing modern web applications and projects",
    keywords: "full stack developer, react developer, web developer, portfolio",
    ogImage: "/og-image.jpg", // Add your Open Graph image
  },
};

// Helper function to get featured projects only
export const getFeaturedProjects = () => {
  return portfolioConfig.projects.filter((project) => project.featured);
};

// Helper function to get all projects
export const getAllProjects = () => {
  return portfolioConfig.projects;
};

// Helper function to get skills by category (you can extend this)
export const getSkillsByCategory = () => {
  const { skills } = portfolioConfig;
  return {
    frontend: skills.filter((skill) =>
      [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
      ].includes(skill)
    ),
    backend: skills.filter((skill) =>
      ["Node.js", "Express.js", "Python", "Django"].includes(skill)
    ),
    database: skills.filter((skill) =>
      ["PostgreSQL", "MongoDB", "Redis"].includes(skill)
    ),
    tools: skills.filter((skill) =>
      ["AWS", "Docker", "Kubernetes", "Git", "CI/CD"].includes(skill)
    ),
    apis: skills.filter((skill) => ["REST APIs", "GraphQL"].includes(skill)),
  };
};
