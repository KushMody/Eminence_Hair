"use client";

import VideoShowcase from "./VideoShowcase";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background Video */}
      <VideoShowcase
        src="/Videos/Reels/REEL-0.1.mp4"
        className="absolute inset-0 z-0 h-full w-full"
      />

      {/* Content Overlay */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-12 flex flex-col items-center text-center pt-32 sm:pt-40 md:pt-24 max-w-6xl w-full mx-auto">
        <Reveal delay={0.3} y={30}>
          <h4 className="text-xs sm:text-sm md:text-[15px] font-bold uppercase tracking-[0.4em] mb-4 text-accent">
            Eminence Hair Artistry
          </h4>
        </Reveal>

        <Reveal delay={0.5} y={50}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[7.5rem] font-playfair text-charcoal font-medium leading-[0.95] sm:leading-[0.92] md:leading-[0.9] mb-6 sm:mb-8 tracking-tighter">
            Feel the <br className="lg:hidden" />
            <span className="italic">transformation</span>
          </h1>
        </Reveal>

        <Reveal delay={0.7} y={20}>
          <p className="text-charcoal/60 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.3em] mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-bold">
            Where elegance meets excellence. <br className="hidden md:block" />
            Specialized in 100% human hair units and toppers.
          </p>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-0"
        >
          <Link href="/problem-solution" className="min-h-12 sm:min-h-16 w-full sm:w-64 bg-charcoal text-white text-xs sm:text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-accent transition-all duration-500 shadow-2xl flex items-center justify-center">
            Explore Solutions
          </Link>
          <Link href="/book-appointment" className="min-h-12 sm:min-h-16 w-full sm:w-64 bg-transparent border border-charcoal/30 text-charcoal text-xs sm:text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-charcoal hover:text-white transition-all duration-500 backdrop-blur-sm flex items-center justify-center">
            Book Appointment
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-charcoal/30 pointer-events-none">
        <span className="text-[9px] font-bold uppercase tracking-[0.4em]">
          Discover
        </span>
        <div className="h-12 w-px bg-gradient-to-b from-charcoal/30 to-transparent" />
      </div>
    </section>
  );
}
