"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Drawer } from "./drawer";
import Logo from "./logo";
import { ThemeSwitcher } from "./theme-switcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-950 backdrop-blur-sm bg-opacity-95">
        <div className="container mx-auto px-5 flex justify-between items-center py-6 gap-x-2">
          <Link href="/">
            <Logo />
          </Link>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <nav className="hidden lg:flex items-center gap-4 text-md">
              <Link
                href="/about"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/blogs"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Blogs
              </Link>
            </nav>
            <ThemeSwitcher />

            {/* Hamburger Button - Visible on mobile/tablet */}
            <button
              type="button"
              onClick={toggleMenu}
              aria-label="Open menu"
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer - Now outside header */}
      <Drawer isOpen={isMenuOpen} onClose={toggleMenu}>
        <nav className="flex flex-col p-4">
          <Link
            href="/blogs"
            onClick={toggleMenu}
            className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors py-4 px-4 rounded-lg border-b border-slate-100 dark:border-slate-800"
          >
            Blogs
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors py-4 px-4 rounded-lg border-b border-slate-100 dark:border-slate-800"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors py-4 px-4 rounded-lg"
          >
            Contact
          </Link>
        </nav>
      </Drawer>
    </>
  );
};

export default Header;
