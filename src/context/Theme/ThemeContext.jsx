import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    let isDarkMode = localStorage.getItem("darkMode");

    if (!isDarkMode) {
      isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return JSON.parse(isDarkMode);
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeContextProvider, useTheme };
