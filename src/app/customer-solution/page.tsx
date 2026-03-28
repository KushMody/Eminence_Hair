"use client";

import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import VideoShowcase from "@/components/VideoShowcase";
import Link from "next/link";
import { useState } from "react";
import { Star } from "lucide-react";

// Customer Feedback — mirrors https://eminencehair.com/customer-solution/
// Uses real Feedback videos from /Videos/Feedback/
const feedbacks = [
  {
    id: "cf-1",
    src: "/Videos/Feedback/videoplayback-1.mp4",
    name: "Rahul S.",
    location: "Vadodara",
    service: "Hair Unit",
    rating: 5,
    quote: "Natural look, undetectable. Life-changing experience!",
  },
  {
    id: "cf-2",
    src: "/Videos/Feedback/videoplayback-1-1.mp4",
    name: "Priya M.",
    location: "Ahmedabad",
    service: "Hair Topper",
    rating: 5,
    quote: "Best decision of my life. Completely boosted my confidence.",
  },
  {
    id: "cf-3",
    src: "/Videos/Feedback/VID-20240724-WA0020.mp4",
    name: "Suresh P.",
    location: "Vadodara",
    service: "Full Unit",
    rating: 5,
    quote: "Professional team and genuinely high-quality results. Highly recommend.",
  },
  {
    id: "cf-4",
    src: "/Videos/Feedback/VID-20240724-WA0021.mp4",
    name: "Anjali K.",
    location: "Surat",
    service: "Styling",
    rating: 5,
    quote: "Even during sports it stays perfect. I can't believe how natural it looks!",
  },
];

const stats = [
  { value: "5000+", label: "Happy Clients" },
  { value: "4.9★", label: "Average Rating" },
  { value: "10+", label: "Years of Trust" },
];

export default function CustomerSolutionPage() {
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
            <h4 className="text-[11px] font-bold uppercase tracking-[0.5em] text-accent mb-8">Client Chronicles</h4>
          </Reveal>
          <Reveal delay={0.4} y={40}>
            <h1 className="text-5xl md:text-7xl lg:text-[8.5rem] font-playfair text-charcoal font-medium leading-[0.88] tracking-tighter mb-12">
              Customer<br /><span className="italic text-accent">Feedback</span>
            </h1>
          </Reveal>
          <Reveal delay={0.6} y={20}>
            <p className="text-charcoal/55 text-lg max-w-2xl leading-relaxed font-light">
              Hear directly from those who have transformed their lives with Eminence Hair. Real clients, real stories, real confidence.
            </p>
          </Reveal>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-12 mt-16 pt-12 border-t border-accent/10"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-playfair text-accent font-medium">{s.value}</p>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-charcoal/40 mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feedback Videos */}
      <section className="py-24 px-6 lg:px-20 bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {feedbacks.map((fb, idx) => (
              <motion.div
                key={fb.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
                className="flex flex-col gap-5"
              >
                {/* Video */}
                <div className="aspect-[9/16] rounded-sm overflow-hidden border border-accent/10 shadow-xl bg-secondary">
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

                {/* Card info */}
                <div className="px-1 space-y-2">
                  <div className="flex gap-1">
                    {Array.from({ length: fb.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-charcoal/60 text-[13px] italic font-light leading-snug">"{fb.quote}"</p>
                  <div className="pt-2 border-t border-accent/10">
                    <p className="text-charcoal font-playfair font-semibold text-sm">{fb.name}</p>
                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent/50">{fb.service} · {fb.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-20 bg-charcoal text-white">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal delay={0.2} y={20} width="100%">
            <h2 className="text-4xl lg:text-6xl font-playfair font-medium mb-6">
              Be Our Next <span className="italic text-accent">Success Story</span>
            </h2>
          </Reveal>
          <Reveal delay={0.4} y={20} width="100%">
            <p className="text-white/40 text-base font-light mb-12 max-w-xl mx-auto leading-relaxed">
              Join thousands of clients who have transformed their lives with Eminence Hair. Your journey starts with a single appointment.
            </p>
          </Reveal>
          <Reveal delay={0.6} y={20} width="100%">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-appointment" className="h-14 px-12 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-charcoal transition-all duration-500 flex items-center justify-center">
                Book Appointment
              </Link>
              <Link href="https://wa.me/918799288809" target="_blank" className="h-14 px-12 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:border-accent hover:text-accent transition-all duration-500 flex items-center justify-center">
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
