"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Initialize theme
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;

    if (saved) {
      document.documentElement.setAttribute("data-theme", saved);
      setTheme(saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = prefersDark ? "dark" : "light";

      document.documentElement.setAttribute("data-theme", defaultTheme);
      setTheme(defaultTheme);
    }
  }, []);

  // Toggle function
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}