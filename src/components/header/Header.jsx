import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "../../context/Theme/ThemeContext";

function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-purple-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/10 dark:border-zinc-500">
      <div className="flex h-16 items-center justify-between px-4 md:px-8">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-purple-500 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.29 7 12 12 20.71 7" />
              <line x1="12" y1="22" x2="12" y2="12" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-purple-700 dark:text-purple-200">
              Jeddah Traders
            </h1>
            <p className="text-xs text-gray-500 dark:text-zinc-300">General Order Supplier</p>
          </div>
        </a>
        <div className="flex items-center gap-4">
          <Button
            className="flex cursor-pointer h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-700 duration-200 hover:bg-purple-200 hover:shadow-md"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <Sun className="!h-5 !w-5" />
            ) : (
              <Moon className="!h-5 !w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
