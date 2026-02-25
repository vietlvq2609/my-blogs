export function ContactSection() {
  return (
    <section className="mb-20 md:mb-28" id="contact">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-12">
        Get In Touch
      </h2>
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 md:p-12 rounded-lg text-white">
        <h3 className="text-3xl font-bold mb-4">
          Ready to work together?
        </h3>
        <p className="text-xl mb-6 opacity-90">
          I'm available for freelance projects and full-time opportunities.
          Let's build something amazing together!
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="mailto:viktokle@example.com"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-center"
          >
            Send Email
          </a>
          <a
            href="https://linkedin.com/in/viktokle"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-center"
          >
            LinkedIn Profile
          </a>
          <a
            href="https://github.com/viktokle"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-center"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
