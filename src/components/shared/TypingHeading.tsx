import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteData } from "@/data/mockData";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const titles = [
  "Building tactile digital products",
  "Designing developer-first experiences",
  "Crafting polished frontend systems",
];

const TypingHeading = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % titles.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <motion.div variants={fadeInUp} className="space-y-2">
      <span className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/70 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.32em] text-sky-800 shadow-[0_8px_24px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.04] dark:text-sky-200/80 dark:shadow-none">
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(74,222,128,0.12)]" />
        Available for product-focused frontend roles
      </span>
      <h1 className="text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.07em] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.75rem] dark:text-white">
        <span className="block bg-gradient-to-r from-slate-950 via-slate-800 to-slate-600 bg-clip-text text-transparent dark:from-white dark:via-slate-100 dark:to-slate-300">
          {siteData.personal.greeting}
        </span>
        <span className="mt-2 block bg-gradient-to-r from-sky-700 via-slate-900 to-violet-700 bg-clip-text text-transparent dark:from-sky-300 dark:via-white dark:to-violet-300">
          {siteData.personal.fullName}
        </span>
      </h1>
      <div className="min-h-[2rem] text-lg text-foreground/72 dark:text-slate-300 sm:text-xl">
        <AnimatePresence mode="wait">
          <motion.p
            key={titles[phraseIndex]}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance"
          >
            {titles[phraseIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default TypingHeading;
