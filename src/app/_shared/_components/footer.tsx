import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";
import Container from "@/app/_shared/_components/container";
import Logo from "@/app/_shared/_components/logo";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/viktokle",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/viktokle",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:viktokle@example.com",
    icon: Mail,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@viktokle",
    icon: Youtube,
  },
  {
    name: "X",
    href: "https://x.com/viktokle",
    icon: Twitter,
  },
];

const categories = [
  { name: "Web Development", href: "/blogs?category=web-development" },
  { name: "DevOps", href: "/blogs?category=devops" },
  { name: "Backend", href: "/blogs?category=backend" },
  { name: "Best Practices", href: "/blogs?category=best-practices" },
];

const generalLinks = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blogs" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

const portfolioLinks = [
  { name: "E-commerce App", href: "https://demo.viktokle.dev/ecommerce" },
  { name: "Task Manager", href: "https://demo.viktokle.dev/task-manager" },
  { name: "Blog Platform", href: "https://demo.viktokle.dev/blog" },
];

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800 dark:border-slate-700">
      <Container>
        <div className="py-12 md:py-16">
          {/* Main Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Logo & Social Media */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="mb-6">
                <Logo />
              </div>
              <p className="text-gray-600 dark:text-slate-400 mb-6 max-w-sm">
                Fullstack Developer passionate about building modern web
                applications and sharing knowledge through technical writing.
              </p>
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={
                        social.href.startsWith("mailto") ? undefined : "_blank"
                      }
                      rel={
                        social.href.startsWith("mailto")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="text-gray-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Browse by Category */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-slate-200 mb-4">
                Categories
              </h4>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.name}>
                    <a
                      href={category.href}
                      className="text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* General Navigation */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-slate-200 mb-4">
                General
              </h4>
              <ul className="space-y-3">
                {generalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Portfolio / Live Demos */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-slate-200 mb-4">
                Portfolio
              </h4>
              <ul className="space-y-3">
                {portfolioLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm inline-flex items-center gap-1"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 dark:border-slate-700 mt-12 pt-8 text-center">
            <p className="text-gray-500 dark:text-slate-400 text-sm">
              © {new Date().getFullYear()} All rights reserved by Viktor Le (Le
              Vu Quoc Viet)
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
