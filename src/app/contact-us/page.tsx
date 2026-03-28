"use client";

import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 87992 88809",
    href: "tel:+918799288809",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/918799288809",
  },
  {
    icon: Mail,
    label: "Email",
    value: "eminencesalon0@gmail.com",
    href: "mailto:eminencesalon0@gmail.com",
  },
  {
    icon: MapPin,
    label: "Studio Address",
    value: "GF 7 Shrinath Complex, Nr Jio Petrol Pump, High Tension Road, Subhanpura, Vadodara",
    href: "https://maps.google.com/?q=Subhanpura,Vadodara",
  },
  {
    icon: Clock,
    label: "Studio Hours",
    value: "Mon–Sat: 10:00 AM – 8:00 PM",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main className="w-full bg-background overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <AnnouncementBar />
        <Navbar />
      </div>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-end pb-16 sm:pb-24 px-4 sm:px-6 lg:px-20 bg-background border-b border-accent/10 pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl w-full">
          <Reveal delay={0.2} y={20}>
            <h4 className="text-xs sm:text-[11px] font-bold uppercase tracking-[0.5em] text-accent mb-6 sm:mb-8">Connect With Us</h4>
          </Reveal>
          <Reveal delay={0.4} y={40}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[8.5rem] font-playfair text-charcoal font-medium leading-tight md:leading-[0.88] tracking-tighter mb-6 sm:mb-8 lg:mb-12">
              Get in<br /><span className="italic text-accent">Touch</span>
            </h1>
          </Reveal>
          <Reveal delay={0.6} y={20}>
            <p className="text-charcoal/55 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light mb-8 sm:mb-12">
              Visit our Vadodara studio for a personalized consultation, or reach us instantly via phone and WhatsApp. We're here to help you every step of the way.
            </p>
          </Reveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-2 sm:gap-4 flex-wrap"
          >
            <Link
              href="https://wa.me/918799288809"
              target="_blank"
              className="h-11 sm:h-14 px-6 sm:px-10 bg-charcoal text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-accent transition-all duration-500 flex items-center justify-center gap-2 sm:gap-3"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </Link>
            <Link
              href="tel:+918799288809"
              className="h-11 sm:h-14 px-6 sm:px-10 border border-charcoal/20 text-charcoal text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] hover:border-accent hover:text-accent transition-all duration-500 flex items-center justify-center gap-2 sm:gap-3"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-20 bg-background">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-12 sm:gap-16 items-start">

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-10">
            <Reveal delay={0.2} y={20}>
              <h2 className="text-2xl sm:text-3xl font-playfair text-charcoal font-medium">Studio Information</h2>
            </Reveal>
            {contactDetails.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex gap-3 sm:gap-5 items-start group"
              >
                <div className="h-9 sm:h-10 w-9 sm:w-10 flex-shrink-0 flex items-center justify-center border border-accent/20 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                  <item.icon className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-accent group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.4em] text-charcoal/30 mb-1">{item.label}</p>
                  {item.href ? (
                    <Link
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      className="text-charcoal text-xs sm:text-sm leading-relaxed hover:text-accent transition-colors duration-300"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="text-charcoal text-xs sm:text-sm leading-relaxed">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="aspect-video rounded-sm overflow-hidden border border-accent/10 shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.246282222906!2d73.18!3d22.3101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf10aceae761%3A0x9b6e3a3f2e1b7be3!2sSubhanpura%2C%20Vadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1680000000000"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/30 mt-3 sm:mt-4 text-center">
              GF 7 Shrinath Complex, Subhanpura, Vadodara
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-20 bg-secondary border-t border-accent/10">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12 sm:mb-16">
            <Reveal delay={0.2} y={20} width="100%">
              <h4 className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-3 sm:mb-4">Drop a Message</h4>
            </Reveal>
            <Reveal delay={0.3} y={30} width="100%">
              <h2 className="text-2xl sm:text-4xl font-playfair text-charcoal font-medium">Send an Inquiry</h2>
            </Reveal>
            <Reveal delay={0.4} y={15} width="100%">
              <p className="text-charcoal/40 text-[10px] sm:text-sm mt-3 sm:mt-4 uppercase tracking-widest">Our experts typically respond within 24 hours.</p>
            </Reveal>
          </div>

          <Reveal delay={0.5} width="100%">
            <div className="bg-background p-6 sm:p-10 lg:p-14 border border-accent/10 shadow-xl rounded-sm">
              <form className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                  <div className="space-y-2">
                    <label className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-accent">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full h-11 sm:h-13 bg-transparent border-b border-accent/20 px-0 py-2 sm:py-3 focus:border-charcoal outline-none transition-all duration-300 text-charcoal text-xs sm:text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-accent">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full h-11 sm:h-13 bg-transparent border-b border-accent/20 px-0 py-2 sm:py-3 focus:border-charcoal outline-none transition-all duration-300 text-charcoal text-xs sm:text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-accent">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-accent/20 px-0 py-2 sm:py-3 focus:border-charcoal outline-none transition-all duration-300 text-charcoal text-xs sm:text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-accent">Your Message</label>
                  <textarea
                    placeholder="Tell us about your hair concern..."
                    rows={4}
                    className="w-full bg-transparent border-b border-accent/20 px-0 py-2 sm:py-3 focus:border-charcoal outline-none transition-all duration-300 resize-none text-charcoal text-xs sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-11 sm:h-14 bg-charcoal text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-accent transition-all duration-500 shadow-lg"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
