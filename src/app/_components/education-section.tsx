export function EducationSection() {
  return (
    <section className="mb-20 md:mb-28">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-12">
        Education
      </h2>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <h3 className="text-2xl font-semibold dark:text-slate-200">
              Bachelor of Science in Information Technology
            </h3>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mt-2">
              University of Information Technology, VNU-HCMC
            </p>
          </div>
          <div className="text-gray-600 dark:text-slate-400 mt-3 md:mt-0">
            <p className="font-medium">2017 - 2021</p>
            <p className="text-sm">HCMC, Vietnam</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-700 dark:text-slate-300">
            Focused on software engineering, web development, and database
            management. Graduated with honors.
          </p>
        </div>
      </div>
    </section>
  );
}
