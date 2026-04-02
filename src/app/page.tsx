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

          <div className="hero-img-stack" style={{ position: "relative", width: "100%", maxWidth: 540, marginLeft: "auto", ...a(.6) }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(2, 1fr)", gap: 0, position: "relative", width: "100%", aspectRatio: "1/1" }}>

              {/* Before Image - Top Left */}
              <div style={{ position: "relative", gridColumn: "1", gridRow: "1", zIndex: 2, transform: "scale(1.1) rotate(-2deg)", marginTop: 20 }}>
                <div style={{ position: "absolute", top: -12, left: -12, fontFamily: serif, fontSize: 10, fontWeight: 700, color: C.gold, letterSpacing: 2.5, background: C.white, padding: "5px 12px", borderRadius: 40, boxShadow: "0 4px 12px rgba(0,0,0,.05)", zIndex: 10, border: `1px solid ${C.goldLt}` }}>BEFORE</div>
                <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.1)", border: `6px solid ${C.white}`, background: C.white }}>
                  <img src="/images/EMINENCE/FEB_26/7_1.png" alt="Before" style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }} />
                </div>
              </div>

              {/* Decorative Frame Line */}
              <div style={{ position: "absolute", top: "10%", left: "10%", width: "80%", height: "80%", border: `1px dashed ${C.gold}45`, borderRadius: 24, zIndex: 0 }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%) rotate(-45deg)", width: "70%", height: 1, background: C.goldLt, zIndex: 1, opacity: 0.3 }} />

              {/* After Image - Bottom Right */}
              <div style={{ position: "relative", gridColumn: "2", gridRow: "2", zIndex: 3, transform: "scale(1.15) rotate(1deg)", marginTop: -30, marginLeft: -30 }}>
                <div style={{ position: "absolute", bottom: 10, right: 10, fontFamily: serif, fontSize: 11, fontWeight: 700, color: C.white, letterSpacing: 3, background: C.gold, padding: "8px 18px", borderRadius: 40, boxShadow: "0 8px 20px rgba(0,0,0,.15)", zIndex: 10 }}>AFTER</div>
                <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 30px 70px rgba(0,0,0,.15)", border: `8px solid ${C.white}`, background: C.white }}>
                  <img src="/images/EMINENCE/FEB_26/7.png" alt="After" style={{ width: "100%", height: "100%", display: "block" }} />
                </div>
              </div>



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
    <section className="md-py-40" style={{ padding: "40px 20px", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "100vh", background: C.cream, position: "relative", overflow: "hidden" }}>
      {/* Decorative fluid background gradients */}
      <div style={{ position: "absolute", top: "-10%", left: "-10%", width: 600, height: 600, background: "radial-gradient(circle, rgba(201,169,110,.08), transparent 70%)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: "-10%", right: "-10%", width: 700, height: 700, background: "radial-gradient(circle, rgba(201,169,110,.06), transparent 70%)", borderRadius: "50%" }} />

      <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div className="md-col-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 40 }}>
            <Eyebrow text="What We Offer" center />
            <h2 style={{ fontFamily: serif, fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, color: C.dark, marginBottom: 16, letterSpacing: "-0.5px" }}>Featured Services</h2>
            <Link href="/services" style={{ textDecoration: "none" }}><Btn outline dark>Explore All Services</Btn></Link>
          </div>
        </Reveal>

        <div className="srv-creative-g" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {subset.map((s, i) => (
            <Reveal key={i} d={i * 0.1} y={20}>
              <div
                className={`srv-arch-card ${i === 1 ? 'stagger' : ''}`}
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                style={{
                  background: C.white,
                  padding: "40px 24px 30px",
                  position: "relative",
                  transition: "all .5s cubic-bezier(0.25, 1, 0.5, 1)",
                  height: "100%",
                  borderRadius: "140px 140px 12px 12px",
                  border: `1px solid ${hov === i ? 'rgba(201,169,110,.5)' : 'rgba(201,169,110,.25)'}`,
                  boxShadow: hov === i ? "0 20px 40px rgba(201,169,110,.15)" : "0 8px 24px rgba(0,0,0,.04)",
                  transform: hov === i ? "translateY(-8px)" : "translateY(0)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center"
                }}
              >
                {/* Golden Halo around Icon */}
                <div style={{
                  width: 56, height: 56,
                  borderRadius: "50%",
                  background: hov === i ? "rgba(201,169,110,.15)" : "rgba(201,169,110,.05)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20, color: C.goldDk, marginBottom: 20,
                  transition: "all .4s ease"
                }}>
                  <span style={{ transform: hov === i ? "scale(1.15) rotate(10deg)" : "scale(1)", transition: "all .4s ease" }}>{s.icon}</span>
                </div>

                <h3 style={{ fontFamily: serif, fontSize: 24, fontWeight: 700, color: C.dark, marginBottom: 8, transition: "color .4s ease" }}>{s.title}</h3>
                <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, letterSpacing: 2, color: C.goldDk, textTransform: "uppercase", marginBottom: 12, transition: "color .4s ease" }}>{s.subtitle}</div>
                <p style={{ fontFamily: body, fontSize: 15, lineHeight: 1.5, color: C.mid, transition: "color .4s ease" }}>{s.desc}</p>

                {/* Decorative bottom element */}
                <div style={{ marginTop: "auto", paddingTop: 20 }}>
                  <div style={{ width: hov === i ? 60 : 30, height: 1, background: hov === i ? "rgba(201,169,110,.6)" : "rgba(201,169,110,.3)", transition: "all .4s ease" }} />
                </div>
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
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section className="md-py-40" style={{ padding: "10px 20px", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "100vh", background: C.white, position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div className="trans-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 32, borderBottom: `1px solid rgba(201,169,110,.15)`, paddingBottom: 16 }}>
            <div style={{ flex: "1 1 450px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 32, height: 1, background: C.gold }} />
                <span style={{ fontFamily: body, fontSize: 11, letterSpacing: 4, color: C.goldDk, textTransform: "uppercase" }}>Visual Evidence</span>
              </div>
              <h2 style={{ fontFamily: serif, fontSize: "clamp(30px,4.5vw,48px)", fontWeight: 700, color: C.dark, lineHeight: 1, letterSpacing: "-0.5px", margin: 0 }}>
                Before & <span style={{ color: C.goldDk, fontStyle: "italic", fontWeight: 400 }}>After</span>
              </h2>
            </div>
            <div className="trans-desc-box" style={{ flex: "0 1 420px", display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
              {/* <p style={{ fontFamily: body, fontSize: 13, lineHeight: 1.5, color: C.mid, marginBottom: 16 }}>
                A natural looking hair system doesn't change who you are. It brings back the version of you that you've missed. Real transformations, real confidence.
              </p> */}
              <Link href="/transformations" style={{ textDecoration: "none" }}><Btn outline dark>Explore Full Gallery</Btn></Link>
            </div>
          </div>
        </Reveal>

        {/* 3-Column Immersive Grid */}
        <div className="trans-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {IMAGES_BEFORE_AFTER.map((src, i) => {
            const isHovered = hov === i;

            return (
              <div key={i} className="trans-grid-item">
                <Reveal d={i * 0.1} y={15}>
                  <div
                    onMouseEnter={() => setHov(i)}
                    onMouseLeave={() => setHov(null)}
                    style={{
                      position: "relative",
                      borderRadius: "12px",
                      overflow: "hidden",
                      background: C.off,
                      boxShadow: isHovered ? "0 24px 50px rgba(0,0,0,.15)" : "0 8px 24px rgba(0,0,0,.04)",
                      transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                      transition: "all .5s cubic-bezier(0.25, 1, 0.5, 1)",
                      cursor: "pointer",
                      border: `1px solid rgba(201,169,110,.15)`,
                    }}
                  >
                    {/* CRITICAL GEOMETRY: Viewport height clamping to guarantee it fits on short 13" laptop screens securely. */}
                    <div style={{ position: "relative", width: "100%", aspectRatio: "4/5", maxHeight: "calc(100vh - 220px)", minHeight: "260px" }}>
                      <img
                        src={src}
                        alt="Eminence Hair Before and After"
                        style={{
                          width: "100%", height: "100%",
                          /* Object fit contain secures text on aggressive clamping */
                          objectFit: "contain",
                          display: "block",
                          transform: isHovered ? "scale(1.05)" : "scale(1)",
                          transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      />
                      {/* Shadow grounding overlay */}
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.08) 0%, transparent 20%)", pointerEvents: "none" }} />
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── SPOTLIGHT REVIEW ── */
function ReviewHub() {
  const t = TESTIMONIALS[0];

  return (
    <section className="md-py-40 md-px-20" style={{ padding: "10px 20px", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "100vh", background: C.white, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,169,110,.05), transparent 65%)" }} />
      <div style={{ maxWidth: 1180, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>

        <Reveal>
          <div className="md-col-center" style={{ textAlign: "center", marginBottom: 24 }}>
            <Eyebrow text="Real Stories" center />
            <h2 style={{ fontFamily: serif, fontSize: "clamp(32px,5vw,56px)", fontWeight: 700, color: C.dark }}>Customer Experience</h2>
          </div>
        </Reveal>

        <Reveal y={20}>
          <div className="t-card" style={{ display: "flex", background: C.cream, border: `1px solid rgba(201,169,110,.4)`, borderRadius: 12, overflow: "hidden", marginBottom: 24, boxShadow: "0 24px 50px rgba(0,0,0,.08)" }}>
            <div style={{ flex: 1, padding: "40px 48px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              {/* Float the huge quote mark out of the DOM geometry to save 80px+ of absolute height instantly! */}
              <div style={{ position: "absolute", top: 16, left: 24, fontFamily: serif, fontSize: 160, lineHeight: 1, color: C.goldDk, opacity: 0.08, pointerEvents: "none" }}>"</div>

              <p style={{ position: "relative", zIndex: 1, fontFamily: serif, fontSize: "clamp(20px,3vw,26px)", fontStyle: "italic", color: C.dark, lineHeight: 1.5, marginBottom: 24 }}>{t.text}</p>

              <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontFamily: serif, fontSize: 20, fontWeight: 600, color: C.dark, marginBottom: 4 }}>{t.name}</div>
                  <div style={{ fontFamily: body, fontSize: 12, color: C.gold, letterSpacing: 1.5, textTransform: "uppercase" }}>{t.location} · {t.service}</div>
                </div>
                <Stars n={t.rating} />
              </div>
            </div>
            {/* Expanding width slightly and using objectFit: contain eliminates the horizontal Canva poster text cropping. Background seamlessly blends with Canva beige edges. */}
            <div className="t-img-box" style={{ width: 440, background: C.off, position: "relative", flexShrink: 0, borderLeft: `1px solid rgba(201,169,110,.2)` }}>
              <img src={t.img} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "contain", opacity: 1 }} key={t.img} />
            </div>
          </div>
        </Reveal>

        <Reveal d={0.1} y={15}>
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
    <section className="md-py-40" style={{ padding: "40px 40px", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "100vh", background: C.white, position: "relative", overflow: "hidden" }}>
      {/* Decorative background elements */}
      <div style={{ position: "absolute", top: "20%", left: "-5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(201,169,110,.05), transparent 70%)", borderRadius: "50%" }} />

      <div className="ab-g" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 1 }}>

        {/* Left Side: Creative Image Composition */}
        <Reveal y={40}>
          <div className="ab-img-wrapper" style={{ position: "relative", paddingRight: 40, paddingBottom: 40 }}>
            {/* Arched Studio Image */}
            <div
              className="ab-arch-frame"
              style={{
                width: "500px", // increase this
                borderRadius: "240px 240px 24px 24px",
                overflow: "hidden",
                boxShadow: "0 40px 100px rgba(0,0,0,.1)",
                border: `1px solid rgba(201,169,110,.2)`,
                aspectRatio: "4/5",
                maxHeight: "calc(100vh - 160px)",
                position: "relative"
              }}
            >
              <img src="/images/about/studio.png" alt="Eminence Hair Studio" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 40%)" }} />
            </div>

            {/* Overlapping Philosophy Card (Minimized & Bottom-Right) */}
            <div className="ab-philosophy-card" style={{
              position: "absolute",
              bottom: "10px",
              right: "48px",
              width: "55%",
              background: `linear-gradient(135deg,${C.dark}EE,${C.brown}EE)`,
              borderRadius: 12,
              padding: "24px 28px",
              boxShadow: "0 20px 40px rgba(0,0,0,.25)",
              zIndex: 10,
              border: `1px solid rgba(255,255,255,.08)`,
              backdropFilter: "blur(8px)"
            }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at top left, rgba(201,169,110,.15), transparent 70%)" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontFamily: body, fontSize: 8.5, fontWeight: 700, letterSpacing: 3, color: C.gold, textTransform: "uppercase", marginBottom: 10 }}>Our Philosophy</div>
                <div style={{ fontFamily: serif, fontSize: 18, fontStyle: "italic", color: C.white, lineHeight: 1.4, marginBottom: 14 }}>
                  "Where every wig is a work of art, and every client is treated like royalty."
                </div>
                <div style={{ fontFamily: body, fontSize: 10, color: C.goldLt, letterSpacing: 1.5, textTransform: "uppercase", opacity: 0.7 }}>— Eminence Hair Studio</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Side: Content */}
        <Reveal d={0.2} y={40}>
          <div>
            <Eyebrow text="The Eminence Standard" />
            <h2 style={{ fontFamily: serif, fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, color: C.dark, marginBottom: 20, lineHeight: 1.1 }}>Vadodara's Premier <br /><span style={{ color: C.goldDk, fontWeight: 400, fontStyle: "italic" }}>Wig & Hair Studio</span></h2>
            <p style={{ fontFamily: body, fontSize: "clamp(15px,1.8vh,18px)", lineHeight: 1.7, color: C.mid, marginBottom: 16 }}>
              Welcome to Eminence Hair — where your confidence and style come first. We specialize in non-surgical hair replacement and premium extensions that seamlessly blend with your lifestyle. Each piece is meticulously curated and styled to ensure a natural look that restores the version of you that you've missed. At Eminence, we don't just provide hair; we provide a renewed sense of self.
            </p>
            <Link href="/about" style={{ textDecoration: "none" }}><Btn outline dark>Discover Our Story</Btn></Link>
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
        .srv-arch-card.stagger { margin-top: 24px; }
        @media (max-width: 1024px) {
          .md-grid-split { grid-template-columns: 1fr !important; gap: 50px !important; }
          .split-text-col { max-width: 100% !important; text-align: center !important; display: flex; flex-direction: column; align-items: center; }
          .split-text-col > div, .split-text-col a { justify-content: center; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 60px !important; padding-top: 80px !important; }
          .hero-grid > div:first-child { 
            display: flex !important; 
            flex-direction: column !important; 
            align-items: center !important; 
            text-align: center !important; 
            max-width: 100% !important;
          }
          .hero-grid h1, .hero-grid p { text-align: center !important; margin-left: auto !important; margin-right: auto !important; }
          .buttons-row { justify-content: center !important; }
          .hero-img-stack { margin: 40px auto 0; max-width: 480px; width: 100%; }
          .ab-g { grid-template-columns: 1fr !important; gap: 60px !important; }
          .ab-img-wrapper { padding: 0 !important; margin-bottom: 40px !important; display: flex; flex-direction: column; align-items: center; }
          .ab-arch-frame { width: 100% !important; max-width: 440px !important; }
          .ab-philosophy-card { position: relative !important; width: 90% !important; right: auto !important; left: auto !important; bottom: auto !important; margin-top: -40px !important; padding: 24px 20px !important; text-align: center; }
          .ab-philosophy-card div:first-child { align-items: center !important; }
          .srv-creative-g { gap: 20px !important; }
          .srv-arch-card { padding: 60px 24px 40px !important; border-radius: 120px 120px 16px 16px !important; }
          section { min-height: auto !important; padding: 60px 20px !important; display: block !important; }
          .trans-header { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 16px !important; border-bottom: none !important; height: auto !important; margin-bottom: 32px !important; }
          .trans-header > div:first-child { flex: 1 1 auto !important; width: 100% !important; display: flex; flex-direction: column; align-items: center; }
          .trans-desc-box { flex: 1 1 auto !important; width: 100% !important; text-align: center !important; max-width: 100% !important; border-bottom: 1px solid rgba(201,169,110,0.15); padding-bottom: 24px; height: auto !important; margin: 0 !important; }
          .trans-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 768px) {
          .srv-creative-g, .vids3-g { grid-template-columns: 1fr !important; }
          .srv-arch-card.stagger { margin-top: 0 !important; }
          .srv-arch-card { border-radius: 160px 160px 16px 16px !important; }
          .stats-g { grid-template-columns: 1fr 1fr !important; }
          .t-card { flex-direction: column !important; min-height: auto !important; }
          .t-img-box { width: 100% !important; height: auto !important; aspect-ratio: 4/5 !important; border-top: 1px solid rgba(201,169,110,0.1); }
          .t-card > div:first-child { padding: 40px 24px !important; }
          .md-col-center { text-align: center !important; align-items: center !important; }
          section { padding: 60px 20px !important; }
          .trans-grid { gap: 32px !important; }
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
