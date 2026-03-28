"use client";

import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { MessageCircle, ChevronRight } from "lucide-react";

const services = [
  { id: "hair-unit", label: "Gents Hair Unit", tag: "Most Popular" },
  { id: "topper", label: "Ladies Hair Topper", tag: "For Women" },
  { id: "wig", label: "Premium Wig", tag: "Full Coverage" },
  { id: "styling", label: "Expert Styling", tag: "In-Studio" },
  { id: "consultation", label: "Free Consultation", tag: "First Timer" },
  { id: "maintenance", label: "Maintenance Service", tag: "Existing Clients" },
];

const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"];

const steps = [
  { num: "01", title: "Choose Your Service", desc: "Select from our range of premium hair restoration solutions." },
  { num: "02", title: "Pick a Time Slot", desc: "Find a convenient time at our Subhanpura studio." },
  { num: "03", title: "Share Your Details", desc: "Brief details so we can prepare for your arrival." },
  { num: "04", title: "Confirm & Visit", desc: "We'll confirm by call or WhatsApp. See you soon!" },
];

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="w-full bg-background overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <AnnouncementBar />
        <Navbar />
      </div>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-end pb-16 sm:pb-24 px-4 sm:px-6 lg:px-20 bg-background border-b border-accent/10 pt-32 sm:pt-40 md:pt-40">
        <div className="mx-auto max-w-7xl w-full">
          <Reveal delay={0.2} y={20}>
            <h4 className="text-xs sm:text-[11px] font-bold uppercase tracking-[0.5em] text-accent mb-6 sm:mb-8">Private Consultation</h4>
          </Reveal>
          <Reveal delay={0.4} y={40}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[8.5rem] font-playfair text-charcoal font-medium leading-tight md:leading-[0.88] tracking-tighter mb-6 sm:mb-8 lg:mb-12">
              Book Your<br /><span className="italic text-accent">Session</span>
            </h1>
          </Reveal>
          <Reveal delay={0.6} y={20}>
            <p className="text-charcoal/55 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light mb-8 sm:mb-12">
              Secure your exclusive time at our Vadodara studio. Our experts will guide you through a personalized hair transformation journey.
            </p>
          </Reveal>

          {/* Quick WhatsApp book */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
          >
            <Link
              href="https://wa.me/918799288809?text=Hi!%20I'd%20like%20to%20book%20an%20appointment%20at%20Eminence%20Hair."
              target="_blank"
              className="h-12 sm:h-14 px-6 sm:px-8 bg-charcoal text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-accent transition-all duration-500 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quick Book via WhatsApp</span>
            </Link>
            <p className="text-charcoal/30 text-xs text-center sm:text-left">or fill the form below →</p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-20 bg-secondary border-b border-accent/10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-accent/10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="bg-secondary p-6 sm:p-10 group hover:bg-background transition-colors duration-500"
              >
                <p className="text-2xl sm:text-4xl font-playfair text-accent/25 group-hover:text-accent/40 transition-colors mb-4 sm:mb-6 font-medium">{step.num}</p>
                <h3 className="text-xs sm:text-sm font-bold text-charcoal uppercase tracking-wider mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-charcoal/45 text-[11px] sm:text-[13px] leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Booking Form */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-20 bg-background">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">

          {/* Left: Info */}
          <div className="lg:col-span-4 space-y-8 sm:space-y-10">
            <Reveal delay={0.2} y={20}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair text-charcoal font-medium leading-tight">
                The <span className="italic text-accent">Eminence</span> Experience
              </h2>
            </Reveal>
            <Reveal delay={0.3} y={15}>
              <p className="text-charcoal/50 text-xs sm:text-[14px] leading-loose font-light">
                Every appointment starts with a personalized consultation to understand your unique concerns and expectations. Our specialists craft a solution tailored specifically for you.
              </p>
            </Reveal>
            <Reveal delay={0.4} y={15}>
              <div className="bg-secondary border border-accent/10 p-6 sm:p-8 rounded-sm space-y-6">
                <h4 className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.4em] text-accent">Studio Info</h4>
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-charcoal/60 font-light">
                  <p>📍 GF 7 Shrinath Complex, Subhanpura, Vadodara</p>
                  <p>📞 +91 87992 88809</p>
                  <p>✉️ eminencesalon0@gmail.com</p>
                  <p>🕐 Mon–Sat: 10 AM – 8 PM</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-secondary border border-accent/20 p-8 sm:p-12 lg:p-16 rounded-sm text-center shadow-2xl"
              >
                <p className="text-3xl sm:text-5xl mb-4 sm:mb-6">✨</p>
                <h3 className="text-xl sm:text-3xl font-playfair text-charcoal mb-3 sm:mb-4">Booking Received!</h3>
                <p className="text-charcoal/50 text-[12px] sm:text-[14px] leading-relaxed mb-8 sm:mb-10">
                  Thank you for reaching out. Our team will confirm your appointment within 24 hours via call or WhatsApp.
                </p>
                <Link
                  href="/"
                  className="h-12 sm:h-12 px-8 bg-charcoal text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-accent transition-all duration-500 inline-flex items-center justify-center"
                >
                  Back to Home
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-secondary border border-accent/10 p-6 sm:p-10 lg:p-14 rounded-sm shadow-xl relative space-y-8 sm:space-y-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/60 to-transparent" />

                {/* Step 1: Service */}
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl font-playfair text-charcoal border-b border-accent/10 pb-3 sm:pb-4">
                    <span className="text-accent text-xs sm:text-sm font-sans uppercase tracking-widest mr-2 sm:mr-3">01</span>
                    Select Service
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                    {services.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedService(s.id)}
                        className={`p-3 sm:p-4 border text-left transition-all duration-300 rounded-sm group ${
                          selectedService === s.id
                            ? "border-accent bg-accent/5 text-charcoal"
                            : "border-accent/15 text-charcoal/60 hover:border-accent/40"
                        }`}
                      >
                        <p className="text-[7px] sm:text-[9px] font-bold uppercase tracking-widest text-accent/60 mb-1 sm:mb-2">{s.tag}</p>
                        <p className="text-[10px] sm:text-[12px] font-bold uppercase tracking-wider">{s.label}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Time */}
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl font-playfair text-charcoal border-b border-accent/10 pb-3 sm:pb-4">
                    <span className="text-accent text-xs sm:text-sm font-sans uppercase tracking-widest mr-2 sm:mr-3">02</span>
                    Choose Time
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`min-h-10 sm:h-12 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border rounded-sm ${
                          selectedTime === t
                            ? "border-accent bg-accent/5 text-charcoal"
                            : "border-accent/15 text-charcoal/50 hover:border-accent/40"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Details */}
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl font-playfair text-charcoal border-b border-accent/10 pb-3 sm:pb-4">
                    <span className="text-accent text-xs sm:text-sm font-sans uppercase tracking-widest mr-2 sm:mr-3">03</span>
                    Personal Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-accent">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full bg-transparent border-b border-accent/20 py-2 sm:py-3 focus:border-charcoal outline-none transition-all duration-300 text-charcoal text-xs sm:text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-accent">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 00000 00000"
                        className="w-full bg-transparent border-b border-accent/20 py-2 sm:py-3 focus:border-charcoal outline-none transition-all duration-300 text-charcoal text-xs sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-accent">Email (Optional)</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-transparent border-b border-accent/20 py-2 sm:py-3 focus:border-charcoal outline-none transition-all duration-300 text-charcoal text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 sm:h-16 bg-charcoal text-white text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] hover:bg-accent transition-all duration-500 shadow-2xl flex items-center justify-center gap-3"
                >
                  Confirm Appointment
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
