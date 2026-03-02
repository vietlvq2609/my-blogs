// ============ FEATURED PROJECTS ============
export const featuredProjects = [
  {
    id: 1,
    title: "EcoTrack",
    description:
      "A carbon footprint tracking SaaS that helps individuals and businesses monitor and reduce their environmental impact with real-time analytics.",
    image: "/assets/common/man_avatar.png",
    technologies: ["Next.js", "PostgreSQL", "Stripe", "Chart.js"],
    liveUrl: "https://ecotrack.demo",
    githubUrl: "https://github.com/demo/ecotrack",
    featured: true,
  },
  {
    id: 2,
    title: "DevCollab",
    description:
      "Real-time collaborative code editor with video chat, supporting 50+ programming languages and instant deployment previews.",
    image: "/assets/common/man_avatar.png",
    technologies: ["React", "WebSockets", "Redis", "Docker"],
    liveUrl: "https://devcollab.demo",
    githubUrl: "https://github.com/demo/devcollab",
    featured: true,
  },
  {
    id: 3,
    title: "ShopFlow",
    description:
      "Modern e-commerce boilerplate with headless CMS, payment processing, and inventory management built for developers.",
    image: "/assets/common/man_avatar.png",
    technologies: ["TypeScript", "tRPC", "Prisma", "Tailwind"],
    liveUrl: "https://shopflow.demo",
    githubUrl: "https://github.com/demo/shopflow",
    featured: true,
  },
];

export type Project = (typeof featuredProjects)[number];

// ============ SKILLS DATA ============
export const skillsData = {
  yearsOfExperience: 6,
  techStack: [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Node.js", icon: "🟢" },
    { name: "Next.js", icon: "▲" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "GraphQL", icon: "◈" },
  ],
  currentStatus: "Open to opportunities",
  githubStats: {
    contributions: 1247,
    repositories: 42,
    stars: 156,
  },
  codePhilosophy: "Clean code > Clever code. Always.",
  coffeeCount: 2847,
};

// ============ DEV CHECKLIST ============
export const devChecklist = [
  {
    id: 1,
    title: "Clean Architecture",
    description:
      "Modular, maintainable codebases with clear separation of concerns",
    icon: "🏗️",
  },
  {
    id: 2,
    title: "Performance First",
    description: "Core Web Vitals optimized, lazy loading, code splitting",
    icon: "⚡",
  },
  {
    id: 3,
    title: "Type Safety",
    description: "TypeScript end-to-end, from database to UI components",
    icon: "🛡️",
  },
  {
    id: 4,
    title: "Comprehensive Testing",
    description:
      "Unit, integration, and E2E tests for confidence in every deploy",
    icon: "🧪",
  },
  {
    id: 5,
    title: "CI/CD Pipelines",
    description: "Automated builds, tests, and deployments with GitHub Actions",
    icon: "🔄",
  },
  {
    id: 6,
    title: "Documentation",
    description: "Self-documenting code, comprehensive READMEs, and API docs",
    icon: "📚",
  },
];

export type ChecklistItem = (typeof devChecklist)[number];
