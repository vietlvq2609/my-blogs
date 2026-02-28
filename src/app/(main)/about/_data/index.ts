export const personalInfo = {
  name: "Viktor Le",
  title: "Full Stack Developer",
  tagline: "Building digital experiences with passion and precision",
  avatar: "/assets/common/man_avatar.png",
  location: "Ho Chi Minh City, Vietnam",
  age: 28,
  story: `I started my journey in tech back in college, fascinated by how code could bring ideas to life.
    After years of building web applications, I've developed a deep love for clean architecture,
    performant systems, and creating tools that make developers' lives easier.`,
};

export const hobbies = [
  { emoji: "🎮", label: "Gaming" },
  { emoji: "📚", label: "Reading" },
  { emoji: "🎸", label: "Music" },
  { emoji: "✈️", label: "Travel" },
];

export const funFacts = [
  "🎯 Can solve a Rubik's cube in under 2 minutes",
  "☕ Powered by 3+ cups of coffee daily",
  "🌙 Night owl who codes best after midnight",
];

export const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Docker",
  "PostgreSQL",
  "AWS",
];

export const workExperiences = [
  {
    id: 1,
    company: "TechCorp Global",
    role: "Senior Full Stack Developer",
    duration: "2023 - Present",
    description:
      "Leading development of microservices architecture and mentoring junior developers. Implementing CI/CD pipelines and improving system performance by 40%.",
    technologies: ["Next.js", "Node.js", "AWS", "Docker"],
  },
  {
    id: 2,
    company: "StartupXYZ",
    role: "Full Stack Developer",
    duration: "2021 - 2023",
    description:
      "Built and scaled a SaaS platform from 0 to 50k users. Developed real-time collaboration features and payment integrations.",
    technologies: ["React", "Python", "PostgreSQL", "Redis"],
  },
  {
    id: 3,
    company: "Digital Agency Co.",
    role: "Frontend Developer",
    duration: "2019 - 2021",
    description:
      "Created responsive web applications for various clients. Focused on accessibility and performance optimization.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 4,
    company: "Freelance",
    role: "Web Developer",
    duration: "2018 - 2019",
    description:
      "Started my professional journey building websites and web apps for small businesses and startups.",
    technologies: ["JavaScript", "PHP", "MySQL", "WordPress"],
  },
];

export type WorkExperience = (typeof workExperiences)[number];
