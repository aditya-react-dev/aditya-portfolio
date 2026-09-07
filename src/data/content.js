// ─── Edit everything in this file with your real details ───

export const profile = {
  name: "Aditya",
  lastName: "",
  roles: ["Frontend Developer", "React.js Developer", "UI Engineer"],
  location: "India",
  tagline:
    "I turn product ideas into fast, thoughtful web experiences — with a sharp eye for UI detail and production-quality React.",
  email: "aditya.kr.bca@gmail.com",
  phone: "+91 8797381717",
  github: "https://github.com/aditya-react-dev",
  githubHandle: "github.com/aditya-react-dev",
  linkedin: "https://linkedin.com/in/aditya-6b6a9220a",
  linkedinHandle: "linkedin.com/in/aditya-6b6a9220a",
  resumeFile: "/resume.pdf", // drop your resume.pdf inside the public/ folder
};

export const about = [
  "Frontend Developer with 3+ years of experience building high-performance, scalable web applications using React.js, Tailwind CSS and modern JavaScript.",
  "I translate Figma designs into pixel-perfect, accessible UI components for e-commerce and SaaS products — from clean component architecture and state management through to REST API integration.",
  "My work has improved Lighthouse performance scores from 60 to 90+, reduced initial load time by 20%, and increased engagement by 25% through responsive, accessibility-focused redesigns.",
];

export const stats = [
  { value: 3, suffix: "+", label: "Years experience" },
  { value: 10, suffix: "+", label: "Projects shipped" },
  { value: 90, suffix: "+", label: "Lighthouse score achieved" },
];

export const strengths = [
  { number: "01", title: "Craft-led UI", text: "Clear hierarchy, purposeful motion and responsive detail in every viewport." },
  { number: "02", title: "Product thinking", text: "Interfaces shaped around real user flows, not just a pretty first screen." },
  { number: "03", title: "Reliable delivery", text: "Clean components, API integration and a practical focus on performance." },
];

export const skills = [
  { name: "React.js", level: 90 },
  { name: "JavaScript (ES6+)", level: 88 },
  { name: "Redux", level: 80 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Next.js", level: 65 },
  { name: "REST APIs & JWT", level: 82 },
  { name: "Performance optimization", level: 85 },
  { name: "TypeScript", level: 60 },
];

export const projects = [
  {
    title: "E-Commerce Admin Dashboard",
    description:
      "An analytics dashboard that lets business teams track sales, revenue and users through interactive, easy-to-scan visualizations.",
    tags: ["React.js", "Tailwind CSS", "Chart.js"],
    github: null,
    live: null,
    accent: "violet",
    number: "01",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A mobile-first developer portfolio with a clean component architecture, fast loading experience and Vercel deployment workflow.",
    tags: ["React.js", "Vercel", "Responsive UI"],
    github: "https://github.com/aditya-react-dev",
    live: "https://aditya-portfolio-eosin-iota.vercel.app",
    accent: "cyan",
    number: "02",
  },
  {
    title: "Client Web Builds",
    description:
      "Delivered responsive static and dynamic client websites across finance and education, with consistent visual systems and polished UI.",
    tags: ["React.js", "HTML5", "CSS3"],
    github: null,
    live: null,
    accent: "violet",
    number: "03",
  },
  {
    title: "Reusable UI Component Kits",
    description:
      "Created reusable interface components that cut development time by 30% per sprint while keeping product UI consistent.",
    tags: ["React.js", "Tailwind CSS", "Figma"],
    github: null,
    live: null,
    accent: "cyan",
    number: "04",
  },
];

export const experience = [
  {
    company: "Nipunar Consultancy Services",
    role: "Frontend Developer (Associate Software Engineer)",
    location: "",
    period: "Sept 2023 — Present",
    points: [
      "Developed React-based interfaces for e-commerce and dashboard applications, improving responsiveness and maintainability.",
      "Implemented code-splitting and lazy loading to reduce initial page load time by 20%, raising Lighthouse scores from 60 to 90+.",
      "Integrated Stripe payments and JWT-based authentication, while shipping pixel-perfect Tailwind components from Figma designs.",
      "Increased engagement by 25% through responsive redesigns and improved key user flows with WCAG accessibility enhancements.",
    ],
  },
  {
    company: "Nipunar Consultancy Services",
    role: "Junior Front-End Developer",
    location: "",
    period: "Jul 2022 — Aug 2023",
    points: [
      "Delivered 10+ static and dynamic websites across finance and education domains.",
      "Modernized legacy JavaScript codebases into React.js, improving maintainability and performance.",
      "Built reusable UI component kits that reduced development time by 30% per sprint and supported a 15% improvement in client satisfaction.",
    ],
  },
];
