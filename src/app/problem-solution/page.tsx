"use client";

import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import VideoShowcase from "@/components/VideoShowcase";
import Link from "next/link";
import { useState } from "react";

// Problem Solution — mirrors https://eminencehair.com/problem-solution/
// Real topics visible on the live website:
// Celebrity hair stylist · Natural look kaise? · While sports? · Price zyada hai?
const solutions = [
  {
    id: "ps-1",
    src: "/Videos/Reels/REEL-1.mp4",
    title: "Celebrity Hair Stylist",
    desc: "Looking for a look fit for the spotlight? Our premium hair units give you the celebrity look — natural, seamless, and stunning.",
    tag: "Styling",
  },
  {
    id: "ps-2",
    src: "/Videos/Reels/REEL-2.mp4",
    title: "Natural Look Kaise?",
    desc: "Achieving a completely natural look is our specialty. See how our human hair units blend so perfectly that nobody can tell.",
    tag: "Natural Look",
  },
  {
    id: "ps-3",
    src: "/Videos/Reels/REEL-3.mp4",
    title: "While Sports?",
    desc: "Worried your hair unit will shift during physical activity? Our units are engineered to stay locked in — gym, cricket, even swimming.",
    tag: "Active Lifestyle",
  },
  {
    id: "ps-4",
    src: "/Videos/Reels/REEL-4.mp4",
    title: "Price Zyada Hai?",
    desc: "Quality doesn't have to cost a fortune. We offer flexible options for every budget without compromising on natural look and durability.",
    tag: "Affordable",
  },
  {
    id: "ps-5",
    src: "/Videos/VN20240606_130757.mp4",
    title: "Thinning Crown Solution",
    desc: "Ladies hair toppers that seamlessly cover thinning areas for instant volume and confidence. Lightweight and completely undetectable.",
    tag: "Ladies Topper",
  },
  {
    id: "ps-6",
    src: "/Videos/WhatsApp-Video-2024-09-09-at-16.38.18_4cb68b69.mp4",
    title: "Total Baldness Solution",
    desc: "For complete hair loss, our premium full units are designed to restore your full head of hair with a natural front hairline.",
    tag: "Full Unit",
  },
];

export default function ProblemSolutionPage() {
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
            <h4 className="text-[11px] font-bold uppercase tracking-[0.5em] text-accent mb-8">Every Concern Addressed</h4>
          </Reveal>
          <Reveal delay={0.4} y={40}>
            <h1 className="text-5xl md:text-7xl lg:text-[8.5rem] font-playfair text-charcoal font-medium leading-[0.88] tracking-tighter mb-12">
              Problem<br /><span className="italic text-accent">Solutions</span>
            </h1>
          </Reveal>
          <Reveal delay={0.6} y={20}>
            <p className="text-charcoal/55 text-lg max-w-2xl leading-relaxed font-light">
              Whether it's achieving a natural look, staying active, or finding an affordable solution — we have the answer for every hair concern.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Solutions Grid — Video + Label + Description */}
      <section className="py-24 px-6 lg:px-20 bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {solutions.map((s, idx) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="flex flex-col gap-5 group"
              >
                <div className="relative aspect-[9/16] rounded-sm overflow-hidden border border-accent/10 shadow-xl bg-secondary">
                  <div className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-accent">{s.tag}</span>
                  </div>
                  <VideoShowcase
                    src={s.src}
                    id={s.id}
                    onPlay={setActiveVideoId}
                    activeId={activeVideoId}
                    overlay={false}
                    autoPlay={false}
                    muted={false}
                    controls={true}
                  />
                </div>
                <div className="px-1 space-y-3">
                  <h3 className="text-charcoal text-xl font-playfair font-semibold tracking-tight group-hover:text-accent transition-colors duration-300">{s.title}</h3>
                  <p className="text-charcoal/50 text-[13px] leading-relaxed font-light">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-20 bg-charcoal text-white">
        <div className="mx-auto max-w-5xl flex flex-col lg:flex-row items-center justify-between gap-10">
          <Reveal delay={0.2} y={20}>
            <div>
              <h2 className="text-3xl lg:text-5xl font-playfair font-medium mb-4">
                Not sure which <span className="italic text-accent">solution</span> is right?
              </h2>
              <p className="text-white/40 text-sm font-light">Book a free consultation. Our experts will guide you.</p>
            </div>
          </Reveal>
          <Reveal delay={0.4} y={20}>
            <div className="flex gap-4 flex-wrap">
              <Link href="/book-appointment" className="h-14 px-10 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-charcoal transition-all duration-500 flex items-center justify-center">
                Book Consultation
              </Link>
              <Link href="https://wa.me/918799288809" target="_blank" className="h-14 px-10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:border-accent hover:text-accent transition-all duration-500 flex items-center justify-center">
                WhatsApp Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
