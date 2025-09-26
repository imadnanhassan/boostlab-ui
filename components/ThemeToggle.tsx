"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setMounted(true);
    const saved = (localStorage.getItem("theme") as "dark" | "light") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="rounded-md border border-default px-3 py-2 text-xs transition"
      style={{ color: "var(--muted-foreground)" }}
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}