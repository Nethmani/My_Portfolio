// Centralized Professional Data
export const professionalHighlights = {
  home: [
    {
      title: "Full-Stack Developer",
      description: "MERN stack specialist with modern web technologies",
      category: "development",
    },
    {
      title: "IT Support",
      description:
        "Providing technical assistance and ensuring smooth system operations",
      category: "support",
    },
    {
      title: "UI/UX Designer",
      description:
        "Designing intuitive, user-centered interfaces that enhance user experience",
      category: "design",
    },
  ],
  about: [
    {
      title: "Full-Stack Development",
      description:
        "Proficient in MERN stack with experience in building scalable web applications",
      category: "development",
    },
    {
      title: "Industry Experience",
      description:
        "Hands-on internship experience as Software Engineer and IT Support professional",
      category: "experience",
    },
    {
      title: "Problem Solving",
      description:
        "Strong analytical skills with a focus on writing clean, maintainable code",
      category: "technical",
    },
    {
      title: "Team Collaboration",
      description:
        "Experienced in agile development practices and cross-functional team work",
      category: "collaboration",
    },
  ],
};

// Featured Tech Stack
export const featuredTechStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Selenium", color: "#43B02A" },
  { name: "SonarQube", color: "#4E9BCD" },
];

// Navigation Links with descriptions for better UX
export const navigationPages = [
  { href: "/", label: "Home", description: "Landing page" },
  { href: "/about", label: "About", description: "Skills & expertise" },
  { href: "/education", label: "Education", description: "Academic journey" },
  { href: "/projects", label: "Projects", description: "Portfolio projects" },
  {
    href: "/portfolio",
    label: "Reflective Journal",
    description: "Personal growth & insights",
  },
  { href: "/contact", label: "Contact", description: "Get in touch" },
];

// Social Links
export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Nethmani",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/pamalka-nethmani",
    icon: "linkedin",
  },
  {
    name: "Email",
    href: "mailto:contact@pamalkanethmani.com",
    icon: "email",
  },
];

// Personal Info
export const personalInfo = {
  fullName: "Pamalka Nethmani",
  shortName: "PN",
  email: "contact@pamalkanethmani.com",
  phone: "+94 xx xxx xxxx",
  location: "Sri Lanka",
  bio: "Passionate developer creating innovative solutions and building meaningful digital experiences.",
  tagline: "Full-Stack Developer | IT Support | UI/UX Designer",
};

// Page CTAs (Call To Actions) - Connect pages together
export const pageConnections = {
  home: {
    nextPage: "/about",
    cta: "Learn More About Me",
    description: "Discover my skills and expertise",
  },
  about: {
    nextPage: "/projects",
    cta: "View My Projects",
    description: "See what I've built",
  },
  projects: {
    nextPage: "/education",
    cta: "Check My Education",
    description: "My academic journey",
  },
  education: {
    nextPage: "/portfolio",
    cta: "Read My Reflections",
    description: "Personal growth insights",
  },
  portfolio: {
    nextPage: "/contact",
    cta: "Let's Connect",
    description: "Get in touch with me",
  },
  contact: {
    nextPage: "/",
    cta: "Back to Home",
    description: "Return to main page",
  },
};
