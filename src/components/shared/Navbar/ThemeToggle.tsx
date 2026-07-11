"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export default function ThemeToggle() {
const { resolvedTheme, setTheme } = useTheme();
const isDark = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-800" />
    );
  }



  return (
    <button
      type="button"
      aria-label="Toggle Theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-xl text-zinc-700 transition-all duration-300 hover:border-violet-600 hover:text-violet-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
    >
      {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
    </button>
  );
}