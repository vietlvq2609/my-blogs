export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Fullstack Developer",
      company: "TechViet Solutions",
      location: "HCMC, Vietnam",
      period: "2024 - Present",
      description:
        "Leading development of enterprise web applications using React and Laravel. Implemented CI/CD pipelines and improved application performance by 40%.",
      technologies: ["React", "Laravel", "Docker", "PostgreSQL", "AWS"],
    },
    {
      title: "Fullstack Developer",
      company: "Digital Innovation Lab",
      location: "HCMC, Vietnam",
      period: "2022 - 2024",
      description:
        "Developed and maintained multiple client projects including e-commerce platforms and business management systems. Collaborated with cross-functional teams to deliver high-quality solutions.",
      technologies: ["React", "PHP", "MySQL", "RESTful API", "Git"],
    },
    {
      title: "Frontend Developer",
      company: "StartUp Hub Vietnam",
      location: "HCMC, Vietnam",
      period: "2021 - 2022",
      description:
        "Built responsive web applications using React and modern JavaScript frameworks. Worked closely with designers to implement pixel-perfect UI components.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "React Query"],
    },
  ];

  return (
    <section className="mb-20 md:mb-28">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-12">
        Work Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
              <div>
                <h3 className="text-2xl font-semibold dark:text-slate-200">
                  {exp.title}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                  {exp.company}
                </p>
              </div>
              <div className="text-gray-600 dark:text-slate-400 mt-2 md:mt-0 md:text-right">
                <p className="font-medium">{exp.period}</p>
                <p className="text-sm">{exp.location}</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 px-3 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
