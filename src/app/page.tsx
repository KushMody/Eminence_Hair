"use client";

import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Hero from "@/components/Hero";
import MosaicGrid from "@/components/MosaicGrid";
import VideoShowcase from "@/components/VideoShowcase";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Star } from "lucide-react";

// Mirrors eminencehair.com structure:
// Home → Hair Transformations → Problem Solutions → Customer Feedback → Book Appointment

const feedbackVideos = [
  {
    id: "fb-1",
    src: "/Videos/Feedback/videoplayback-1.mp4",
    name: "Rahul S.",
    service: "Hair Unit",
    rating: 5,
    quote: "Natural look, undetectable. Life-changing!",
  },
  {
    id: "fb-2",
    src: "/Videos/Feedback/videoplayback-1-1.mp4",
    name: "Priya M.",
    service: "Hair Topper",
    rating: 5,
    quote: "Amazing confidence boost, couldn't be happier.",
  },
  {
    id: "fb-3",
    src: "/Videos/Feedback/VID-20240724-WA0020.mp4",
    name: "Suresh P.",
    service: "Full Unit",
    rating: 5,
    quote: "Best decision of my life. Truly professional team.",
  },
  {
    id: "fb-4",
    src: "/Videos/Feedback/VID-20240724-WA0021.mp4",
    name: "Anjali K.",
    service: "Styling",
    rating: 5,
    quote: "Even during sports, it stays perfect. Incredible!",
  },
];

export default function Home() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <main className="min-h-screen w-full bg-background overflow-x-hidden">
      {/* Fixed top navigation */}
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <AnnouncementBar />
        <Navbar />
      </div>

      {/* ① HERO */}
      <Hero />

      {/* ② HAIR TRANSFORMATIONS — mirrors eminencehair.com/hair-transformation */}
      <section className="bg-secondary min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-y border-accent/10">
        <div className="mx-auto max-w-7xl w-full">
          <div className="mb-12 sm:mb-16 text-center">
            <Reveal width="100%" delay={0.2} y={20}>
              <h4 className="text-xs sm:text-[11px] font-bold uppercase tracking-[0.4em] text-accent mb-4 sm:mb-6">
                Hair Transformations
              </h4>
            </Reveal>
            <Reveal width="100%" delay={0.4} y={30}>
              <h2 className="text-2xl sm:text-4xl lg:text-7xl font-playfair text-charcoal font-medium tracking-tight">
                Evidence of <span className="italic">Artistry</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 lg:gap-16">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="aspect-[9/16] bg-accent/5 rounded-sm overflow-hidden border border-accent/10 shadow-lg">
              <VideoShowcase src="/Videos/Reels/REEL-1.mp4" id="reel-1" onPlay={setActiveVideoId} activeId={activeVideoId} overlay={false} autoPlay={false} muted={false} controls={true} />
            </motion.div>
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 lg:gap-16">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="aspect-square bg-accent/5 rounded-sm overflow-hidden border border-accent/10 shadow-lg">
                <VideoShowcase src="/Videos/Reels/REEL-2.mp4" id="reel-2" onPlay={setActiveVideoId} activeId={activeVideoId} overlay={false} autoPlay={false} muted={false} controls={true} />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} className="aspect-square bg-accent/5 rounded-sm overflow-hidden border border-accent/10 shadow-lg">
                <VideoShowcase src="/Videos/Reels/REEL-3.mp4" id="reel-3" onPlay={setActiveVideoId} activeId={activeVideoId} overlay={false} autoPlay={false} muted={false} controls={true} />
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }} className="aspect-[9/16] bg-accent/5 rounded-sm overflow-hidden border border-accent/10 shadow-lg">
              <VideoShowcase src="/Videos/Reels/REEL-4.mp4" id="reel-4" onPlay={setActiveVideoId} activeId={activeVideoId} overlay={false} autoPlay={false} muted={false} controls={true} />
            </motion.div>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <Reveal delay={0.3} y={15} width="100%">
              <Link href="/hair-transformation" className="inline-flex h-10 sm:h-12 px-6 sm:px-10 border border-charcoal/20 text-charcoal text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-charcoal hover:text-white transition-all duration-500 items-center justify-center">
                View More →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ③ PROBLEM SOLUTIONS — mirrors eminencehair.com/problem-solution */}
      <section className="bg-background min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl w-full">
          <div className="mb-12 sm:mb-16 text-center">
            <Reveal width="100%" delay={0.2} y={20}>
              <h4 className="text-xs sm:text-[11px] font-bold uppercase tracking-[0.4em] text-accent mb-4 sm:mb-6">
                Problem Solutions
              </h4>
            </Reveal>
            <Reveal width="100%" delay={0.4} y={30}>
              <h2 className="text-2xl sm:text-4xl lg:text-7xl font-playfair text-charcoal font-medium tracking-tight">
                Signature <span className="italic uppercase">Excellence</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {[
              { name: "Gents Hair Units", tag: "Immediate Solution", img: "/images/customers/EMINENCE_20240510_111312_0000.png", href: "/problem-solution" },
              { name: "Ladies Hair Toppers", tag: "Seamless Coverage", img: "/images/customers/EMINENCE_20240531_121345_0000.png", href: "/problem-solution" },
              { name: "High-Quality Wigs", tag: "Artisanal Crafted", img: "/images/customers/EMINENCE_20240630_174903_0000.png", href: "/problem-solution" },
              { name: "Expert Styling", tag: "Professional Finish", img: "/images/customers/EMINENCE_20240630_175931_0000.png", href: "/problem-solution" },
            ].map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="group cursor-pointer"
              >
                <Link href={product.href}>
                  <div className="relative aspect-[3/4] overflow-hidden bg-accent/5 rounded-sm mb-4 sm:mb-6 border border-accent/10 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.4em] bg-white text-black py-3 sm:py-4 px-6 sm:px-10 shadow-2xl hover:bg-accent hover:text-white transition-all duration-500">Explore</span>
                    </div>
                  </div>
                  <h3 className="text-charcoal text-base sm:text-lg lg:text-xl font-playfair font-semibold mb-2 tracking-tight">{product.name}</h3>
                  <p className="text-accent text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em]">{product.tag}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <Reveal delay={0.3} y={15} width="100%">
              <Link href="/problem-solution" className="inline-flex h-10 sm:h-12 px-6 sm:px-10 border border-charcoal/20 text-charcoal text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-charcoal hover:text-white transition-all duration-500 items-center justify-center">
                View More →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ④ CUSTOMER FEEDBACK — mirrors eminencehair.com/customer-solution — using Feedback videos */}
      <section className="bg-secondary min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-t border-accent/10">
        <div className="mx-auto max-w-7xl w-full">
          <div className="mb-12 sm:mb-16 text-center">
            <Reveal width="100%" delay={0.2} y={20}>
              <h4 className="text-xs sm:text-[11px] font-bold uppercase tracking-[0.4em] text-accent mb-4 sm:mb-6">
                Customer Feedback
              </h4>
            </Reveal>
            <Reveal width="100%" delay={0.4} y={30}>
              <h2 className="text-2xl sm:text-4xl lg:text-7xl font-playfair text-charcoal font-medium tracking-tight">
                Real <span className="italic">Stories</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {feedbackVideos.map((fb, idx) => (
              <motion.div
                key={fb.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
                className="flex flex-col gap-3 sm:gap-4"
              >
                <div className="aspect-[9/16] rounded-sm overflow-hidden border border-accent/10 shadow-xl bg-background">
                  <VideoShowcase
                    src={fb.src}
                    id={fb.id}
                    onPlay={setActiveVideoId}
                    activeId={activeVideoId}
                    overlay={false}
                    autoPlay={false}
                    muted={false}
                    controls={true}
                  />
                </div>
                <div className="px-1">
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: fb.rating }).map((_, i) => (
                      <Star key={i} className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-charcoal/60 text-xs sm:text-[13px] italic font-light mb-2 sm:mb-3 leading-snug">"{fb.quote}"</p>
                  <p className="text-charcoal font-playfair font-semibold text-xs sm:text-sm">{fb.name}</p>
                  <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.3em] text-accent/60">{fb.service}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <Reveal delay={0.3} y={15} width="100%">
              <Link href="/customer-solution" className="inline-flex h-10 sm:h-12 px-6 sm:px-10 border border-charcoal/20 text-charcoal text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-charcoal hover:text-white transition-all duration-500 items-center justify-center">
                View More →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ⑤ BOOK APPOINTMENT CTA — mirrors eminencehair.com booking CTA */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-charcoal text-white">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal delay={0.2} y={20} width="100%">
            <h4 className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-4 sm:mb-6">Book Your Appointment</h4>
          </Reveal>
          <Reveal delay={0.3} y={30} width="100%">
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-playfair font-medium mb-4 sm:mb-6">
              Easily schedule<br />on <span className="italic text-accent">WhatsApp</span>
            </h2>
          </Reveal>
          <Reveal delay={0.4} y={15} width="100%">
            <p className="text-white/40 text-xs sm:text-base font-light mb-8 sm:mb-12 max-w-xl mx-auto leading-relaxed">
              Select a time, book instantly, and receive reminders for a hassle-free experience. Our user-friendly booking makes it simple.
            </p>
          </Reveal>
          <Reveal delay={0.6} y={20} width="100%">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/book-appointment"
                className="h-11 sm:h-14 px-8 sm:px-12 bg-accent text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-charcoal transition-all duration-500 flex items-center justify-center"
              >
                Book Appointment
              </Link>
              <Link
                href="https://wa.me/918799288809"
                target="_blank"
                className="h-11 sm:h-14 px-8 sm:px-12 border border-white/20 text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] hover:border-accent hover:text-accent transition-all duration-500 flex items-center justify-center"
              >
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
