"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleTransition = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleTransition);
    return () => window.removeEventListener("scroll", toggleTransition);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[100] h-14 w-14 bg-charcoal text-white rounded-full flex items-center justify-center shadow-2xl border border-accent/20 group hover:bg-accent transition-colors duration-500"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-500" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
