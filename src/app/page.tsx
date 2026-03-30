'use client';

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { C, BRAND, STATS, SERVICES, TESTIMONIALS, IMAGES_BEFORE_AFTER, VIDEOS_TRANSFORM, body, serif } from "@/components/data";
import { Reveal, Eyebrow, Btn, Stars } from "@/components/ui";

/* ── HERO ── */
function Hero() {
  const [inn, setInn] = useState(false);
  useEffect(() => { setTimeout(() => setInn(true), 150); }, []);
  const a = (d: number) => ({ opacity: inn ? 1 : 0, transform: inn ? "translateY(0)" : "translateY(26px)", transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${d}s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${d}s` });

  return (
    <section style={{ position: "relative", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div className="md-mt-0" style={{ flex: 1, position: "relative", display: "flex", alignItems: "flex-start", overflow: "hidden", width: "100%", minHeight: "80vh" }}>

        {/* Dynamic Backgrounds */}
        <div style={{ position: "absolute", inset: 0, background: C.white }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 75% 30%, rgba(201,169,110,.05) 0%, transparent 60%)" }} />
        <img src="/images/EMINENCE/25.png" alt="Texture" style={{ position: "absolute", top: "-10%", right: "-5%", width: "50%", opacity: 0.05, mixBlendMode: "multiply", filter: "blur(4px)" }} />

        {/* Decor Lines */}
        {[70, 110, 155].map((r, i) => <div key={i} style={{ position: "absolute", right: `${r}px`, top: "8%", width: 1, height: "84%", background: `linear-gradient(to bottom, transparent, rgba(201,169,110,${.2 - i * .05}), transparent)` }} />)}

        <div className="hero-grid" style={{ maxWidth: 1380, margin: "0 auto", padding: "110px 40px 60px", width: "100%", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>

          <div style={{ maxWidth: 680 }}>
            <div className="md-mb-12" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, ...a(0) }}>
              <div style={{ width: 40, height: 1, background: C.gold }} />
              <span style={{ fontFamily: body, fontSize: 12, fontWeight: 700, letterSpacing: 6, color: C.mid, textTransform: "uppercase" }}>{BRAND.instagram}</span>
            </div>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(48px,6vw,84px)", fontWeight: 700, lineHeight: 1.05, color: C.dark, marginBottom: 4, ...a(.15) }}>Your Hair,</h1>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(48px,6vw,84px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.05, color: C.goldDk, marginBottom: 24, ...a(.25) }}>Reimagined.</h1>
            <p style={{ fontFamily: body, fontSize: 18, lineHeight: 1.6, color: C.mid, maxWidth: 480, marginBottom: 40, ...a(.35) }}>
              Vadodara's most-trusted destination for premium wigs, hair extensions, and instant hair transformation solutions — designed to restore your confidence.
            </p>
            <div className="buttons-row" style={{ display: "flex", gap: 16, flexWrap: "wrap", ...a(.45) }}>
              <Link href="/contact" style={{ textDecoration: "none" }}><Btn dark>Book Appointment</Btn></Link>
              <Link href="/services" style={{ textDecoration: "none" }}><Btn outline dark>Explore Services</Btn></Link>
            </div>
          </div>

          <div className="hero-img-stack" style={{ position: "relative", width: "100%", maxWidth: 420, marginLeft: "auto", ...a(.6) }}>
            <div style={{ position: "absolute", inset: "-30px", background: `linear-gradient(135deg,${C.gold}20, transparent)`, filter: "blur(40px)", borderRadius: "50%", zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 1, borderRadius: 12, overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,.1)", border: `1px solid rgba(201,169,110,.2)` }}>
              <img src="/images/EMINENCE/FEB_26/7.png" alt="Eminence Transformation" style={{ width: "100%", height: "auto", display: "block", maxHeight: "68vh", objectFit: "contain" }} />
            </div>

            <div style={{ position: "absolute", left: -20, bottom: -40, background: C.white, border: `1px solid rgba(201,169,110,.4)`, borderRadius: 8, padding: "20px 24px", textAlign: "center", zIndex: 2, boxShadow: "0 30px 60px rgba(0,0,0,.08)", transform: "scale(0.95)", transformOrigin: "bottom left" }}>
              <div style={{ fontFamily: serif, fontSize: 36, fontWeight: 700, color: C.goldDk, lineHeight: 1 }}>2000+</div>
              <div style={{ fontFamily: body, fontSize: 10, fontWeight: 700, letterSpacing: 3, color: C.mid, textTransform: "uppercase", marginTop: 8 }}>Lives Transformed</div>
              <div style={{ marginTop: 10 }}><Stars /></div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: C.cream, padding: "16px 40px", borderTop: `1px solid rgba(201,169,110,.15)`, borderBottom: `1px solid rgba(201,169,110,.15)`, flexShrink: 0 }}>
        <div className="stats-g" style={{ maxWidth: 1380, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1 }}>
          {STATS.map((s, i) => (
            <Reveal key={i} d={i * 0.1} y={20}>
              <div style={{ textAlign: "center", padding: "16px 12px", borderRight: i < 3 ? `1px solid rgba(201,169,110,.2)` : "none" }}>
                <div style={{ fontFamily: serif, fontSize: 38, fontWeight: 700, color: C.goldDk, lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
                <div style={{ fontFamily: body, fontSize: 12, fontWeight: 700, letterSpacing: 4, color: C.mid, textTransform: "uppercase" }}>{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SERVICES HUB ── */
function ServicesHub() {
  const [hov, setHov] = useState<number | null>(null);
  const subset = SERVICES.slice(0, 3);

  return (
    <section className="md-py-60" style={{ padding: "140px 40px", background: C.cream }}>
      <div style={{ maxWidth: 1380, margin: "0 auto" }}>
        <Reveal y={40}>
          <div className="md-col" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 60 }}>
            <div>
              <Eyebrow text="What We Offer" />
              <h2 style={{ fontFamily: serif, fontSize: "clamp(40px,5vw,64px)", fontWeight: 700, color: C.dark, marginBottom: 18 }}>Featured Services</h2>
            </div>
            <Link href="/services" style={{ textDecoration: "none", marginBottom: 16 }}><Btn outline dark>View All Services</Btn></Link>
          </div>
        </Reveal>

        <div className="srv-g" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, background: "rgba(0,0,0,.04)", border: `1px solid rgba(0,0,0,.04)` }}>
          {subset.map((s, i) => (
            <Reveal key={i} d={i * 0.1} y={30}>
              <div onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)} style={{ background: hov === i ? C.dark : C.white, padding: "56px 44px", position: "relative", overflow: "hidden", transition: "all .5s cubic-bezier(0.16, 1, 0.3, 1)", height: "100%" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg,${C.gold},${C.goldLt})`, transform: `scaleX(${hov === i ? 1 : 0})`, transformOrigin: "left", transition: "transform .5s cubic-bezier(0.16, 1, 0.3, 1)" }} />
                <div style={{ fontSize: 32, color: hov === i ? C.gold : "#E8D5B0", marginBottom: 28, transition: "color .5s" }}>{s.icon}</div>
                <h3 style={{ fontFamily: serif, fontSize: 28, fontWeight: 700, color: hov === i ? C.white : C.dark, marginBottom: 8, transition: "color .5s" }}>{s.title}</h3>
                <div style={{ fontFamily: body, fontSize: 12, fontWeight: 600, letterSpacing: 2.5, color: C.gold, textTransform: "uppercase", marginBottom: 20 }}>{s.subtitle}</div>
                <p style={{ fontFamily: body, fontSize: 18, lineHeight: 1.8, color: hov === i ? "rgba(255,255,255,.7)" : C.mid, transition: "color .5s" }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── TRANSFORMATIONS HUB ── */
function TransformationsHub() {
  return (
    <section className="md-py-60" style={{ padding: "140px 40px", background: C.off }}>
      <div style={{ maxWidth: 1380, margin: "0 auto" }}>
        <Reveal>
          <div className="md-col" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 60 }}>
            <div>
              <Eyebrow text="See the Results" />
              <h2 style={{ fontFamily: serif, fontSize: "clamp(40px,5vw,64px)", fontWeight: 700, color: C.dark, marginBottom: 16 }}>Before & After</h2>
            </div>
            <Link href="/transformations" style={{ textDecoration: "none", marginBottom: 16 }}><Btn outline dark>See Full Gallery</Btn></Link>
          </div>
        </Reveal>

        <div className="vids3-g" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {IMAGES_BEFORE_AFTER.map((src, i) => (
            <Reveal key={i} d={i * 0.1} y={40}>
              <div style={{ borderRadius: 4, overflow: "hidden", boxShadow: "0 12px 30px rgba(0,0,0,.08)", height: 400 }}>
                <img src={src} alt="Eminence Hair Before and After" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SPOTLIGHT REVIEW ── */
function ReviewHub() {
  const t = TESTIMONIALS[0];

  return (
    <section className="md-py-60 md-px-20" style={{ padding: "140px 40px", background: C.white, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,169,110,.05), transparent 65%)" }} />
      <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <Reveal>
          <div className="md-col-center" style={{ textAlign: "center", marginBottom: 60 }}>
            <Eyebrow text="Real Stories" center />
            <h2 style={{ fontFamily: serif, fontSize: "clamp(40px,5vw,64px)", fontWeight: 700, color: C.dark }}>Customer Experience</h2>
          </div>
        </Reveal>

        <Reveal y={40}>
          <div className="t-card" style={{ display: "flex", background: C.cream, border: `1px solid rgba(201,169,110,.4)`, borderRadius: 4, overflow: "hidden", marginBottom: 48, boxShadow: "0 30px 60px rgba(0,0,0,.08)" }}>
            <div style={{ flex: 1, padding: "72px 80px", position: "relative" }}>
              <div style={{ fontFamily: serif, fontSize: 120, lineHeight: .6, color: C.goldDk, opacity: .12, marginBottom: 16 }}>"</div>
              <p style={{ fontFamily: serif, fontSize: "clamp(24px,3vw,34px)", fontStyle: "italic", color: C.dark, lineHeight: 1.6, marginBottom: 40 }}>{t.text}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 600, color: C.dark, marginBottom: 4 }}>{t.name}</div>
                  <div style={{ fontFamily: body, fontSize: 14, color: C.gold, letterSpacing: 1.5, textTransform: "uppercase" }}>{t.location} · {t.service}</div>
                </div>
                <Stars n={t.rating} />
              </div>
            </div>
            <div className="t-img-box" style={{ width: 360, background: C.white, position: "relative", flexShrink: 0 }}>
              <img src={t.img} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 1 }} key={t.img} />
            </div>
          </div>
        </Reveal>

        <Reveal d={0.2} y={30}>
          <div style={{ textAlign: "center" }}>
            <Link href="/testimonials" style={{ textDecoration: "none" }}><Btn outline dark>Read All Reviews</Btn></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── ABOUT HUB ── */
function AboutHub() {
  return (
    <section style={{ padding: "140px 40px", background: C.cream }}>
      <div className="ab-g" style={{ maxWidth: 1380, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}>

        <Reveal y={40}>
          <div style={{ position: "relative" }}>
            <div style={{ background: `linear-gradient(145deg,${C.dark},${C.brown})`, borderRadius: 4, padding: "72px 56px", position: "relative", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.2)" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 25% 75%, rgba(201,169,110,.16), transparent 65%)" }} />
              <img src="/images/cropped-EMINENCE-LOGO-BLACK-300x100.png" style={{ position: "absolute", bottom: 30, right: 30, width: 180, opacity: 0.1, filter: "invert(1)" }} alt="Logo Mark" />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontFamily: body, fontSize: 12, fontWeight: 700, letterSpacing: 4, color: C.gold, textTransform: "uppercase", marginBottom: 24 }}>Our Philosophy</div>
                <div style={{ fontFamily: serif, fontSize: 32, fontStyle: "italic", color: C.white, lineHeight: 1.6, marginBottom: 40 }}>
                  "Where every wig is a work of art, and every client is treated like royalty."
                </div>
                <div style={{ fontFamily: body, fontSize: 15, color: C.gold, letterSpacing: 2.5, textTransform: "uppercase" }}>— Eminence Hair Studio</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal d={0.2} y={40}>
          <div>
            <Eyebrow text="Our Story" />
            <h2 style={{ fontFamily: serif, fontSize: "clamp(40px,4vw,56px)", fontWeight: 700, color: C.dark, marginBottom: 28, lineHeight: 1.15 }}>Vadodara's Premier Wig & Hair Studio</h2>
            <p style={{ fontFamily: body, fontSize: 22, lineHeight: 1.8, color: C.mid, marginBottom: 36 }}>
              Welcome to Eminence Hair — where your confidence and style come first. We offer a curated selection of high-quality wigs and expert styling to help you look and feel your best.
            </p>
            <Link href="/about" style={{ textDecoration: "none" }}><Btn outline dark>Learn More About Us</Btn></Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

/* ── ROOT PAGE ── */
export default function Home() {
  return (
    <>
      <style>{`
        .t-img-box { display: block; }
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding-top: 2px !important; }
          .hero-grid > div:first-child { 
            display: flex !important; 
            flex-direction: column !important; 
            align-items: center !important; 
            text-align: center !important; 
            max-width: 100% !important;
          }
          .hero-grid h1, .hero-grid p { text-align: center !important; margin-left: auto !important; margin-right: auto !important; }
          .buttons-row { justify-content: center !important; }
          .hero-grid div[style*="display: flex"] { justify-content: center !important; }
          .hero-img-stack { margin: 0 auto; max-width: 500px; }
          .ab-g { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
        @media (max-width: 768px) {
          .srv-g, .vids3-g { grid-template-columns: 1fr !important; }
          .stats-g { grid-template-columns: 1fr 1fr !important; }
          .t-card { flex-direction: column !important; min-height: auto !important; }
          .t-img-box { width: 100% !important; height: 300px !important; }
          .t-card > div:first-child { padding: 40px 30px !important; }
        }
      `}</style>
      <Hero />
      <ServicesHub />
      <TransformationsHub />
      <ReviewHub />
      <AboutHub />
    </>
  );
}
