"use client"; // Ensure this runs on the client side
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Check localStorage for theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      // If no theme is saved, set the system preference
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = systemPrefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.classList.add(initialTheme);
    }
  }, []);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Update localStorage
    localStorage.setItem("theme", newTheme);

    // Update HTML class for Tailwind
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div className="absolute top-4 right-4 z-50">
      <motion.button
        onClick={toggleTheme}
        whileTap={{ scale: 0.9 }}
        className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg transition-transform transform hover:scale-105"
      >
        <AnimatePresence mode="wait">
          {theme === "light" ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <FiMoon className="text-gray-800 dark:text-gray-100 text-2xl" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.3 }}
            >
              <FiSun className="text-yellow-400 text-2xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}