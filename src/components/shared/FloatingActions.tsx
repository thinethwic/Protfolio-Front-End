import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { siteData } from "@/data/mockData";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.05 4.94A9.9 9.9 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.76.46 3.48 1.33 5L2 22l5.13-1.3A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.67-1.04-5.18-2.95-7.06ZM12 20.2a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.04.77.81-2.97-.2-.31A8.13 8.13 0 0 1 3.8 12c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.24.85 5.79 2.4a8.12 8.12 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.19 8.2Zm4.5-6.14c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.12-.56.12-.16.24-.64.8-.78.96-.14.16-.29.18-.54.06-.25-.13-1.04-.38-1.98-1.21-.73-.66-1.22-1.47-1.36-1.72-.14-.24-.01-.37.11-.49.11-.11.25-.29.37-.43.12-.14.16-.24.25-.4.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.77-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.24-.87.85-.87 2.07s.9 2.4 1.02 2.57c.12.16 1.76 2.69 4.26 3.77.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  );
}

function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 360);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = useMemo(() => {
    const phoneNumber = siteData.personal.phone.replace(/\D/g, "");
    return `https://wa.me/${phoneNumber}`;
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pointer-events-none fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-6">
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500 px-4 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(34,197,94,0.32)] transition-all hover:-translate-y-0.5 hover:bg-emerald-600"
        aria-label="Chat on WhatsApp"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/16">
          <WhatsAppIcon />
        </span>
        <span className="hidden sm:inline">WhatsApp</span>
      </motion.a>

      <motion.button
        type="button"
        onClick={scrollToTop}
        initial={false}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 12,
          scale: showScrollTop ? 1 : 0.92,
          pointerEvents: showScrollTop ? "auto" : "none",
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/8 bg-white/82 text-foreground shadow-[0_16px_36px_rgba(15,23,42,0.14)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/[0.08] dark:text-white dark:shadow-[0_16px_36px_rgba(2,6,23,0.34)] dark:hover:bg-white/[0.14]"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </div>
  );
}

export default FloatingActions;
