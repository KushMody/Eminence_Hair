"use client";

import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

// All text sourced verbatim from https://eminencehair.com/about-us/
const storyParagraphs = [
  "Welcome to Heir Wig Salon, where your confidence and style come first. We offer a curated selection of high-quality wigs and expert styling to help you look and feel your best. Our experienced team is dedicated to personalized service and ensuring your satisfaction with every visit. Discover the perfect wig that suits your unique style at Heir Wig Salon — where elegance meets excellence.",
  "We invite you to visit Heir Wig Salon and experience the difference that dedication and passion can make. Let us help you find the perfect wig that not only enhances your appearance but also boosts your confidence.",
  "Thank you for choosing Heir Wig Salon – where every wig is a work of art, and every client is treated like royalty.",
];

const contactDetails = [
  { icon: Mail, label: "Email", value: "eminencesalon0@gmail.com", href: "mailto:eminencesalon0@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 87992 88809", href: "tel:+918799288809" },
  { icon: MapPin, label: "Address", value: "GF 7 Shrinath Complex, Nr Jio Petrol Pump, High Tension Road, Subhanpura, Vadodara", href: "https://maps.google.com/?q=Subhanpura,Vadodara" },
];

const values = [
  { number: "01", title: "Artisanal Quality", desc: "Every hair unit and topper is crafted from 100% ethically sourced human hair. No shortcuts, no compromises — only the finest craftsmanship." },
  { number: "02", title: "Dedicated Expertise", desc: "Our experienced team is dedicated to personalized service ensuring your satisfaction with every single visit to our studio." },
  { number: "03", title: "Client Royalty", desc: "Every client is treated like royalty. From consultation to styling, we create a welcoming atmosphere focused entirely on you." },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-background overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <AnnouncementBar />
        <Navbar />
      </div>

      {/* Hero — Full Viewport */}
      <section className="min-h-screen flex flex-col justify-end pb-24 px-6 lg:px-20 bg-background border-b border-accent/10 pt-40">
        <div className="mx-auto max-w-7xl w-full">
          <Reveal delay={0.2} y={20}>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.5em] text-accent mb-8">About Us</h4>
          </Reveal>
          <Reveal delay={0.4} y={40}>
            <h1 className="text-5xl md:text-7xl lg:text-[8.5rem] font-playfair text-charcoal font-medium leading-[0.88] tracking-tighter mb-12">
              Heir Wig<br />
              <span className="italic text-accent">Salon</span>
            </h1>
          </Reveal>
          <Reveal delay={0.6} y={20}>
            <p className="text-charcoal/55 text-lg max-w-2xl leading-relaxed font-light">
              Where your confidence and style come first. We offer a curated selection of high-quality wigs and expert styling to help you look and feel your best.
            </p>
          </Reveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center gap-8 mt-12"
          >
            <Link href="/book-appointment" className="h-14 px-10 bg-charcoal text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-accent transition-all duration-500 flex items-center justify-center">
              Book a Consultation
            </Link>
            <Link href="/contact-us" className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/40 hover:text-accent transition-colors duration-300 border-b border-charcoal/20 pb-1">
              Visit Our Studio →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Story — verbatim from eminencehair.com/about-us */}
      <section className="min-h-screen flex items-center py-24 px-6 lg:px-20 bg-background">
        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <Reveal delay={0.2} y={20}>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-6">Who We Are</h4>
            </Reveal>
            <Reveal delay={0.3} y={30}>
              <h2 className="text-4xl lg:text-6xl font-playfair text-charcoal leading-tight mb-10 tracking-tight">
                Where <span className="italic text-accent">elegance</span><br />meets excellence
              </h2>
            </Reveal>
            <div className="space-y-6 text-charcoal/60 text-[15px] leading-loose font-light">
              {storyParagraphs.map((para, idx) => (
                <Reveal key={idx} delay={0.4 + idx * 0.1} y={15}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="bg-secondary border border-accent/10 p-12 lg:p-16 rounded-sm shadow-2xl">
              <blockquote className="text-2xl lg:text-3xl font-playfair text-charcoal/80 leading-snug italic mb-12 border-l-4 border-accent pl-8">
                "Where every wig is a work of art, and every client is treated like <span className="text-accent">royalty</span>."
              </blockquote>
              <div className="grid grid-cols-3 gap-8 border-t border-accent/10 pt-10">
                <div className="text-center">
                  <p className="text-3xl lg:text-4xl font-playfair text-accent font-medium">10+</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-charcoal/40 mt-2">Years Active</p>
                </div>
                <div className="text-center border-x border-accent/10">
                  <p className="text-3xl lg:text-4xl font-playfair text-accent font-medium">5K+</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-charcoal/40 mt-2">Clients Served</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl lg:text-4xl font-playfair text-accent font-medium">100%</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-charcoal/40 mt-2">Human Hair</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="min-h-screen flex items-center py-24 px-6 lg:px-20 bg-secondary border-y border-accent/10">
        <div className="mx-auto max-w-7xl w-full">
          <div className="mb-20">
            <Reveal delay={0.2} y={20} width="100%">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-6">What Drives Us</h4>
            </Reveal>
            <Reveal delay={0.3} y={30} width="100%">
              <h2 className="text-4xl lg:text-7xl font-playfair text-charcoal font-medium tracking-tight">
                Our <span className="italic">Core Values</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-accent/10">
            {values.map((v, idx) => (
              <motion.div
                key={v.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="bg-secondary p-12 lg:p-16 group hover:bg-background transition-colors duration-500"
              >
                <p className="text-5xl font-playfair text-accent/20 group-hover:text-accent/40 transition-colors duration-500 mb-10 font-medium">{v.number}</p>
                <h3 className="text-xl font-playfair text-charcoal font-semibold mb-6 tracking-tight">{v.title}</h3>
                <p className="text-charcoal/50 text-[14px] leading-relaxed font-light">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info sourced from eminencehair.com/about-us */}
      <section className="py-24 px-6 lg:px-20 bg-background border-b border-accent/10">
        <div className="mx-auto max-w-7xl w-full">
          <div className="mb-16">
            <Reveal delay={0.2} y={20} width="100%">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-6">Reach Us</h4>
            </Reveal>
            <Reveal delay={0.3} y={30} width="100%">
              <h2 className="text-4xl lg:text-6xl font-playfair text-charcoal font-medium tracking-tight">
                Visit Our <span className="italic text-accent">Studio</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactDetails.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="group border border-accent/10 p-10 hover:border-accent/30 hover:shadow-xl transition-all duration-500 rounded-sm"
              >
                <div className="h-12 w-12 flex items-center justify-center border border-accent/20 group-hover:bg-accent group-hover:border-accent transition-all duration-500 mb-8">
                  <item.icon className="w-4 h-4 text-accent group-hover:text-white transition-colors duration-500" />
                </div>
                <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-charcoal/30 mb-3">{item.label}</p>
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  className="text-charcoal text-sm leading-relaxed hover:text-accent transition-colors duration-300 font-light"
                >
                  {item.value}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-32 px-6 lg:px-20 bg-charcoal text-white">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10">
          <Reveal delay={0.2} y={20}>
            <div>
              <h2 className="text-3xl lg:text-5xl font-playfair font-medium mb-4">
                Ready to <span className="italic text-accent">transform</span>?
              </h2>
              <p className="text-white/40 text-sm font-light">Walk-ins welcome. Subhanpura, Vadodara.</p>
            </div>
          </Reveal>
          <Reveal delay={0.4} y={20}>
            <div className="flex gap-6 flex-wrap">
              <Link href="/book-appointment" className="h-14 px-10 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-charcoal transition-all duration-500 flex items-center justify-center">
                Book Now
              </Link>
              <Link href="/contact-us" className="h-14 px-10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:border-accent hover:text-accent transition-all duration-500 flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
