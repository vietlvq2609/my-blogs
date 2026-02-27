"use client";

import cn from "classnames";
import { Moon, Sun } from "lucide-react";
import { memo, useCallback, useEffect, useState } from "react";

type ColorSchemePreference = "dark" | "light";

const STORAGE_KEY = "viktor-le-personal-website-color-scheme-preference";
const TRANSITION_CLASS = "theme-transitioning";

/** function to be injected in script tag for avoiding FOUC */
export const NoFOUCScript = (storageKey: string) => {
  const DARK = "dark";
  const LIGHT = "light";

  const getSystemPreference = (): "dark" | "light" =>
    matchMedia(`(prefers-color-scheme: ${DARK})`).matches ? DARK : LIGHT;

  const applyTheme = (theme: "dark" | "light") => {
    const root = document.documentElement;
    root.classList.toggle(DARK, theme === DARK);
    root.setAttribute("data-theme", theme);
  };

  // Initialize theme
  const stored = localStorage.getItem(storageKey) as "dark" | "light" | null;
  const initialTheme = stored || getSystemPreference();

  if (!stored) {
    localStorage.setItem(storageKey, initialTheme);
  }

  applyTheme(initialTheme);
};

const Switch = () => {
  const [mode, setMode] = useState<ColorSchemePreference>("light");
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Apply theme to DOM
  const applyTheme = useCallback((theme: ColorSchemePreference) => {
    const root = document.documentElement;

    // Temporarily disable transitions
    root.classList.add(TRANSITION_CLASS);

    root.classList.toggle("dark", theme === "dark");
    root.setAttribute("data-theme", theme);

    // Re-enable transitions after a short delay
    requestAnimationFrame(() => {
      setTimeout(() => root.classList.remove(TRANSITION_CLASS), 1);
    });
  }, []);

  // Initialize on mount
  useEffect(() => {
    const stored = localStorage.getItem(
      STORAGE_KEY
    ) as ColorSchemePreference | null;
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialMode = stored || systemPreference;

    if (!stored) {
      localStorage.setItem(STORAGE_KEY, initialMode);
    }

    setMode(initialMode);
    setMounted(true);

    // Sync across tabs
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        const newMode = e.newValue as ColorSchemePreference;
        setMode(newMode);
        applyTheme(newMode);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [applyTheme]);

  // Handle theme toggle
  const handleToggle = useCallback(() => {
    setIsAnimating(true);
    const newMode: ColorSchemePreference = mode === "dark" ? "light" : "dark";

    setMode(newMode);
    localStorage.setItem(STORAGE_KEY, newMode);
    applyTheme(newMode);

    // Reset animation state
    setTimeout(() => setIsAnimating(false), 500);
  }, [mode, applyTheme]);

  // Render placeholder during SSR
  if (!mounted) {
    return <div className="w-10 h-10" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      className="p-2 focus:outline-none"
    >
      {mode === "dark" ? (
        <Sun
          className={cn("w-5 h-5 text-yellow-500", {
            "animate-[spin-in_0.5s_ease-out]": isAnimating,
          })}
        />
      ) : (
        <Moon
          className={cn("w-5 h-5 text-slate-700 dark:text-slate-300", {
            "animate-[spin-in_0.5s_ease-out]": isAnimating,
          })}
        />
      )}
    </button>
  );
};

const Script = memo(() => (
  <script
    // biome-ignore lint/security/noDangerouslySetInnerHtml: required for FOUC prevention
    dangerouslySetInnerHTML={{
      __html: `(${NoFOUCScript.toString()})('${STORAGE_KEY}')`,
    }}
  />
));

Script.displayName = "ThemeSwitcherScript";

export const ThemeSwitcher = () => {
  return (
    <>
      <Script />
      <Switch />
    </>
  );
};
