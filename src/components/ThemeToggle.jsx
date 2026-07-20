import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ isDark, onToggle }) {
  const label = isDark ? "Dark theme active — click for light theme" : "Light theme active — click for dark theme";

  return (
    <button
      type="button"
      onClick={onToggle}
      title={label}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
    >
      {isDark ? <Moon size={18} strokeWidth={2} /> : <Sun size={18} strokeWidth={2} />}
    </button>
  );
}
