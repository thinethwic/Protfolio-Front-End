import { motion } from "framer-motion";
import { Moon, Sparkles, SunMedium } from "lucide-react";
import { useTheme } from "@/contexts/theme.context";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group relative inline-flex h-11 w-20 items-center rounded-full border border-black/8 bg-white/72 p-1 shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-colors hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_10px_30px_rgba(2,6,23,0.28)] dark:hover:bg-white/[0.08]"
      aria-label="Toggle theme"
      aria-pressed={isDark}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/10 via-transparent to-violet-500/10" />
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 360, damping: 28 }}
        className="absolute z-0 h-9 w-9 rounded-full bg-slate-950 shadow-[0_6px_22px_rgba(15,23,42,0.16)] dark:bg-slate-950 dark:shadow-[0_6px_22px_rgba(255,255,255,0.18)]"
        animate={{ x: isDark ? 36 : 0 }}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-1">
          <SunMedium
          className={`h-4 w-4 transition-colors ${
            isDark ? "text-slate-500" : "text-white"
          }`}
        />
        <span className="relative">
          <Moon
            className={`h-4 w-4 transition-colors ${
              isDark ? "text-sky-300" : "text-slate-500"
            }`}
          />
          {isDark ? (
            <Sparkles className="absolute -right-2 -top-2 h-3 w-3 text-sky-300" />
          ) : null}
        </span>
      </span>
    </button>
  );
};
