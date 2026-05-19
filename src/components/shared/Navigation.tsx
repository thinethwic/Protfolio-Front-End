import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { cn } from "@/lib/utils";
import { siteData } from "@/data/mockData";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="section-shell max-w-6xl px-0">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "glass-panel glow-ring relative mx-auto flex min-h-18 items-center justify-between rounded-[28px] px-4 py-3 transition-all sm:px-5",
            scrolled
              ? "bg-white/86 shadow-[0_16px_60px_rgba(15,23,42,0.14)] dark:bg-slate-950/78 dark:shadow-[0_16px_60px_rgba(2,6,23,0.42)]"
              : "bg-white/72 dark:bg-slate-950/58"
          )}
        >
          <Link to="/" className="group relative flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/8 bg-gradient-to-br from-sky-500/16 to-violet-500/16 font-semibold text-slate-900 dark:border-white/10 dark:text-white">
              {siteData.personal.initials}
            </span>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-[-0.03em] text-foreground dark:text-white">
                {siteData.personal.brandName}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                Product-minded engineer
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {siteData.navigation.map((item) => {
              const active = location.pathname === item.href;

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "group relative rounded-full px-4 py-2.5 text-sm font-medium text-foreground/72 transition-colors hover:text-foreground dark:text-slate-300 dark:hover:text-white",
                    active && "text-foreground dark:text-white"
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full border border-black/8 bg-black/[0.04] dark:border-white/10 dark:bg-white/[0.06]"
                      transition={{ type: "spring", stiffness: 360, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-300 to-transparent transition-all duration-300 group-hover:w-10" />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/8 bg-white/72 text-foreground transition-colors hover:bg-white lg:hidden dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/[0.08]"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -8 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-3 top-[calc(100%+0.75rem)] overflow-hidden rounded-[24px] border border-black/8 bg-white/92 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.16)] backdrop-blur-2xl lg:hidden dark:border-white/10 dark:bg-slate-950/92 dark:shadow-[0_24px_80px_rgba(2,6,23,0.5)]"
              >
                <div className="space-y-1">
                  {siteData.navigation.map((item) => {
                    const active = location.pathname === item.href;

                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={cn(
                          "block rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                          active
                            ? "bg-black/[0.05] text-foreground dark:bg-white/[0.08] dark:text-white"
                            : "text-foreground/78 hover:bg-black/[0.03] hover:text-foreground dark:text-slate-300 dark:hover:bg-white/[0.05] dark:hover:text-white"
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
}

export default Navigation;
