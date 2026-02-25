export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["PHP", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "React Native", "Laravel", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Tools & Technologies",
      skills: ["React Query", "SQL", "Docker", "CI/CD", "RESTful API", "Git"],
    },
  ];

  return (
    <section className="mb-20 md:mb-28">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-12">
        Skills
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="text-xl font-semibold mb-4 dark:text-slate-200">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
