import Link from "next/link";
import { AUTHOR_SHORT_NAME } from "@/lib/constants";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 mb-12 border-b border-gray-200 dark:border-slate-700">
      <Link href="/" className="flex items-center group">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
            V
          </div>
          <span className="text-2xl font-bold dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {AUTHOR_SHORT_NAME}
          </span>
        </div>
      </Link>
      <nav>
        <Link
          href="/blogs"
          className="text-lg font-semibold text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Blogs
        </Link>
      </nav>
    </header>
  );
};

export default Header;
