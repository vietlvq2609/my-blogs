import Container from "@/app/_components/container";
import { AUTHOR_SHORT_NAME, LOCATION } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800 dark:border-slate-700">
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 dark:text-slate-200">
                {AUTHOR_SHORT_NAME}
              </h3>
              <p className="text-gray-600 dark:text-slate-400 mb-2">
                Fullstack Developer
              </p>
              <p className="text-gray-600 dark:text-slate-400">
                {LOCATION}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 dark:text-slate-200">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/blogs"
                    className="text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 dark:text-slate-200">
                Connect
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:viktokle@example.com"
                    className="text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/viktokle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/viktokle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-slate-700 pt-8 text-center">
            <p className="text-gray-600 dark:text-slate-400">
              © {new Date().getFullYear()} {AUTHOR_SHORT_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
