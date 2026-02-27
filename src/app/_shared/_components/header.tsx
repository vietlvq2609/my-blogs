import Link from "next/link";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 mb-12">
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <Link
          href="/blogs"
          className="text-lg font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Blogs
        </Link>
      </nav>
    </header>
  );
};

export default Header;
