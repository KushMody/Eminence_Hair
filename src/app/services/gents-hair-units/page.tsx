"use client";

import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const features = [
  { title: "100% Human Hair", desc: "Ethically sourced Remy human hair that looks, feels, and behaves exactly like natural hair." },
  { title: "Custom Hair Line", desc: "Hand-tied front hairline for a completely undetectable, natural appearance from every angle." },
  { title: "Breathable Base", desc: "Lightweight, ultra-thin base material that sits comfortably on the scalp without irritation." },
  { title: "Sport-Proof Hold", desc: "Advanced adhesive systems keep your unit secure during gym, swimming, and outdoor activities." },
  { title: "Custom Color Match", desc: "Expert color blending to perfectly match your existing hair for a seamless, invisible integration." },
  { title: "Ongoing Maintenance", desc: "Regular in-studio maintenance sessions to keep your unit looking fresh and natural for longer." },
];

export default function GentsHairUnitsPage() {
  return (
    <main className="w-full bg-background overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <AnnouncementBar />
        <Navbar />
      </div>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-end pb-24 px-6 lg:px-20 bg-background border-b border-accent/10 pt-40">
        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div>
            <Reveal delay={0.2} y={20}>
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-6">For Men</p>
            </Reveal>
            <Reveal delay={0.4} y={40}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair text-charcoal font-medium leading-[0.9] tracking-tighter mb-10">
                Gents<br /><span className="italic text-accent">Hair Units</span>
              </h1>
            </Reveal>
            <Reveal delay={0.6} y={20}>
              <p className="text-charcoal/55 text-lg leading-relaxed font-light mb-12 max-w-xl">
                The most advanced non-surgical hair restoration available today. Our precision-crafted hair units are the gold standard for men seeking an immediate, undetectable solution to hair loss.
              </p>
            </Reveal>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="flex gap-4 flex-wrap">
              <Link href="/book-appointment" className="h-14 px-10 bg-charcoal text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-accent transition-all duration-500 flex items-center justify-center">
                Book Consultation
              </Link>
              <Link href="https://wa.me/918799288809?text=Hi!%20I'm%20interested%20in%20Gents%20Hair%20Units." target="_blank" className="h-14 px-10 border border-charcoal/20 text-charcoal text-[10px] font-bold uppercase tracking-[0.3em] hover:border-accent hover:text-accent transition-all duration-500 flex items-center justify-center">
                WhatsApp Enquiry
              </Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className="relative aspect-[4/5] rounded-sm overflow-hidden border border-accent/10 shadow-2xl">
            <Image src="/images/customers/EMINENCE_20240510_111312_0000.png" alt="Gents Hair Unit" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 lg:px-20 bg-secondary border-b border-accent/10">
        <div className="mx-auto max-w-7xl">
          <Reveal delay={0.2} y={20} width="100%">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-4">What's Included</h4>
          </Reveal>
          <Reveal delay={0.3} y={30} width="100%">
            <h2 className="text-4xl lg:text-6xl font-playfair text-charcoal mb-16 tracking-tight font-medium">
              Why Our <span className="italic text-accent">Units Stand Out</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-accent/10">
            {features.map((f, idx) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-secondary p-10 hover:bg-background transition-colors duration-500 group"
              >
                <div className="h-1 w-8 bg-accent mb-8 group-hover:w-16 transition-all duration-500" />
                <h3 className="text-lg font-playfair text-charcoal font-semibold mb-4">{f.title}</h3>
                <p className="text-charcoal/50 text-[13px] leading-relaxed font-light">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 lg:px-20 bg-background">
        <div className="mx-auto max-w-7xl">
          <Reveal delay={0.2} y={20} width="100%">
            <h2 className="text-4xl lg:text-6xl font-playfair text-charcoal mb-16 text-center tracking-tight font-medium">
              The <span className="italic text-accent">Process</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-accent/10">
            {["Free Consultation", "Custom Fitting", "Expert Styling", "Ongoing Care"].map((step, idx) => (
              <motion.div key={step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.12 }} className="bg-background p-10 text-center group hover:bg-secondary transition-colors duration-500">
                <p className="text-5xl font-playfair text-accent/20 group-hover:text-accent/40 transition-colors mb-6 font-medium">{`0${idx + 1}`}</p>
                <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal">{step}</h3>
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
              Ready to <span className="italic text-accent">get started?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.4} y={20} width="100%">
            <p className="text-white/40 text-base font-light mb-12 max-w-lg mx-auto">Book your free consultation at our Subhanpura, Vadodara studio. No commitment required.</p>
          </Reveal>
          <Reveal delay={0.6} y={20} width="100%">
            <Link href="/book-appointment" className="inline-flex h-14 px-12 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-charcoal transition-all duration-500 items-center justify-center">
              Book Appointment
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
