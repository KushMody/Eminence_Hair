"use client";

import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import VideoShowcase from "@/components/VideoShowcase";
import Link from "next/link";
import { useState } from "react";

// Hair Transformation — mirrors https://eminencehair.com/hair-transformation/
// All transformation reels showing before/after hair unit results
const reels = [
  { id: "ht-1", src: "/Videos/Reels/REEL-1.mp4", label: "Complete Hair Restoration", tag: "Gents Unit" },
  { id: "ht-2", src: "/Videos/Reels/REEL-2.mp4", label: "Natural Hair Growth Look", tag: "Topper" },
  { id: "ht-3", src: "/Videos/Reels/REEL-3.mp4", label: "Full Volume Transformation", tag: "Wig" },
  { id: "ht-4", src: "/Videos/Reels/REEL-4.mp4", label: "Celebrity Style Result", tag: "Premium" },
  { id: "ht-5", src: "/Videos/Reels/REEL-0.1.mp4", label: "Before & After Reveal", tag: "Transformation" },
  { id: "ht-6", src: "/Videos/VID-20240510-WA0028.mp4", label: "Instant Confidence Boost", tag: "Hair Unit" },
];

export default function HairTransformationPage() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <main className="w-full bg-background overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <AnnouncementBar />
        <Navbar />
      </div>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-end pb-24 px-6 lg:px-20 bg-background border-b border-accent/10 pt-40">
        <div className="mx-auto max-w-7xl w-full">
          <Reveal delay={0.2} y={20}>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.5em] text-accent mb-8">Our Portfolio</h4>
          </Reveal>
          <Reveal delay={0.4} y={40}>
            <h1 className="text-5xl md:text-7xl lg:text-[8.5rem] font-playfair text-charcoal font-medium leading-[0.88] tracking-tighter mb-12">
              Hair<br /><span className="italic text-accent">Transformations</span>
            </h1>
          </Reveal>
          <Reveal delay={0.6} y={20}>
            <p className="text-charcoal/55 text-lg max-w-2xl leading-relaxed font-light">
              Witness the power of artistic restoration. Every video represents a life changed and confidence restored at our Vadodara studio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-24 px-6 lg:px-20 bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reels.map((reel, idx) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group relative flex flex-col gap-4"
              >
                <div className="relative aspect-[9/16] rounded-sm overflow-hidden border border-accent/10 shadow-xl bg-secondary">
                  {/* Tag badge */}
                  <div className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-accent">{reel.tag}</span>
                  </div>
                  <VideoShowcase
                    src={reel.src}
                    id={reel.id}
                    onPlay={setActiveVideoId}
                    activeId={activeVideoId}
                    overlay={false}
                    autoPlay={false}
                    muted={false}
                    controls={true}
                  />
                </div>
                <div className="px-1 flex items-center justify-between">
                  <p className="text-charcoal text-sm font-playfair font-semibold">{reel.label}</p>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-charcoal/25">{`0${idx + 1}`}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-20 bg-secondary border-t border-accent/10">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal delay={0.2} y={20} width="100%">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-6">Your Turn</h4>
          </Reveal>
          <Reveal delay={0.3} y={30} width="100%">
            <h2 className="text-4xl lg:text-6xl font-playfair text-charcoal font-medium tracking-tight mb-8">
              Ready for <span className="italic text-accent">your</span> transformation?
            </h2>
          </Reveal>
          <Reveal delay={0.5} y={15} width="100%">
            <p className="text-charcoal/50 text-base font-light mb-12 max-w-xl mx-auto leading-relaxed">
              Book a private consultation at our Subhanpura studio and experience the Eminence Hair difference firsthand.
            </p>
          </Reveal>
          <Reveal delay={0.6} y={20} width="100%">
            <Link href="/book-appointment" className="inline-flex h-14 px-12 bg-charcoal text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-accent transition-all duration-500 items-center justify-center shadow-xl">
              Book Appointment
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
