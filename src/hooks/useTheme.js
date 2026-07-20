import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme-preference";

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyIsDark(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
}

/**
 * Light / Dark theme state, backed by localStorage.
 *
 * There is no visible "system" option — the toggle only ever shows Light or
 * Dark. But until the visitor clicks it for the first time, the effective
 * theme follows their OS setting live (and updates if they change it at the
 * OS level). The moment they click, that becomes an explicit, remembered
 * choice and stops following the OS.
 */
export function useTheme() {
  const [explicit, setExplicit] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY); // "light" | "dark" | null
    } catch {
      return null;
    }
  });

  const [isDark, setIsDark] = useState(() =>
    explicit ? explicit === "dark" : systemPrefersDark()
  );

  useEffect(() => {
    if (explicit) {
      setIsDark(explicit === "dark");
      return;
    }

    // No explicit choice yet — track the OS setting live.
    setIsDark(systemPrefersDark());
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => setIsDark(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [explicit]);

  useEffect(() => {
    applyIsDark(isDark);
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    setIsDark((prevIsDark) => {
      const next = !prevIsDark;
      try {
        localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
      } catch {
        /* localStorage unavailable — theme just won't persist */
      }
      setExplicit(next ? "dark" : "light");
      return next;
    });
  }, []);

  return { isDark, toggleTheme };
}
