"use client";

import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    tag: "For Men",
    title: "Gents Hair Units",
    subtitle: "The gold standard for male hair restoration",
    desc: "Precision-crafted hair units designed for male pattern baldness and thinning. Each unit is hand-tied with 100% human hair for an undetectable, natural-looking result.",
    img: "/images/customers/EMINENCE_20240510_111312_0000.png",
    href: "/services/gents-hair-units",
    highlights: ["Undetectable Hairline", "Custom Density", "Sport-Proof Hold"],
  },
  {
    tag: "For Women",
    title: "Ladies Hair Toppers",
    subtitle: "Lightweight coverage for thinning crowns",
    desc: "Lightweight, breathable toppers that integrate seamlessly with your existing hair to cover thinning crowns and instantly add volume where you need it most.",
    img: "/images/customers/EMINENCE_20240531_121345_0000.png",
    href: "/services/ladies-hair-toppers",
    highlights: ["Seamless Blend", "Volume & Coverage", "Lightweight Base"],
  },
  {
    tag: "Total Coverage",
    title: "High-Quality Wigs",
    subtitle: "Full coverage for complete transformation",
    desc: "Full-coverage wigs made from ethically sourced human hair for those seeking complete transformation. Constructed for durability, comfort, and a scalp-like appearance.",
    img: "/images/customers/EMINENCE_20240630_174903_0000.png",
    href: "/services/wigs",
    highlights: ["Full Coverage", "Comfortable Fit", "Medical-Grade"],
  },
  {
    tag: "In-Studio",
    title: "Expert Styling",
    subtitle: "Professional maintenance & customization",
    desc: "From initial fitting and cutting to color-matching and routine care, our in-house styling and maintenance team ensures your unit always looks its absolute best.",
    img: "/images/customers/EMINENCE_20240630_175931_0000.png",
    href: "/services/expert-styling",
    highlights: ["Custom Fitting", "Color Matching", "Ongoing Care"],
  },
];

export default function ServicesPage() {
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
            <h4 className="text-[11px] font-bold uppercase tracking-[0.5em] text-accent mb-8">Premium Solutions</h4>
          </Reveal>
          <Reveal delay={0.4} y={40}>
            <h1 className="text-5xl md:text-7xl lg:text-[8.5rem] font-playfair text-charcoal font-medium leading-[0.88] tracking-tighter mb-12">
              Our <br /><span className="italic text-accent">Services</span>
            </h1>
          </Reveal>
          <Reveal delay={0.6} y={20}>
            <p className="text-charcoal/55 text-lg max-w-2xl leading-relaxed font-light">
              We provide targeted, artisanal solutions for all types of hair challenges. Every service is delivered with personal care, 100% human hair, and the expertise of our specialist team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services — Alternating Layout */}
      {services.map((s, idx) => (
        <section
          key={s.href}
          className="min-h-screen flex items-center py-24 px-6 lg:px-20 border-b border-accent/10"
          style={{ background: idx % 2 === 0 ? "var(--background)" : "var(--secondary)" }}
        >
          <div className="mx-auto max-w-7xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1 }}
              className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 lg:gap-24 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <Link href={s.href} className="block relative aspect-square rounded-sm overflow-hidden border border-accent/10 shadow-2xl group">
                  <Image src={s.img} alt={s.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-6 left-6 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-sm">
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-accent">{s.tag}</span>
                  </div>
                </Link>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-3">{s.tag}</p>
                  <h2 className="text-4xl lg:text-5xl font-playfair text-charcoal font-medium leading-tight tracking-tight mb-2">{s.title}</h2>
                  <p className="text-charcoal/40 text-sm font-light italic">{s.subtitle}</p>
                </div>
                <p className="text-charcoal/55 text-[15px] leading-loose font-light">{s.desc}</p>
                <ul className="space-y-3">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-charcoal/50">
                      <span className="h-1 w-4 bg-accent flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href={s.href}
                  className="inline-flex h-14 px-8 bg-charcoal text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-accent transition-all duration-500 shadow-xl items-center justify-center gap-3 group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-32 px-6 lg:px-20 bg-charcoal text-white">
        <div className="mx-auto max-w-5xl flex flex-col lg:flex-row items-center justify-between gap-10">
          <Reveal delay={0.2} y={20}>
            <div>
              <h2 className="text-3xl lg:text-5xl font-playfair font-medium mb-4">Not sure which service is right?</h2>
              <p className="text-white/40 text-sm font-light">Book a free consultation — we'll guide you to the perfect solution.</p>
            </div>
          </Reveal>
          <Reveal delay={0.4} y={20}>
            <Link href="/book-appointment" className="flex-shrink-0 h-14 px-12 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-charcoal transition-all duration-500 flex items-center justify-center">
              Book Free Consultation
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
