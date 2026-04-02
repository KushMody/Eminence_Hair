'use client';

import React, { useState } from "react";
import { C, SERVICES, WIG_SOLUTIONS, body, serif } from "@/components/data";
import { Reveal, Eyebrow, Btn } from "@/components/ui";

export default function ServicesPage() {
  const [hov, setHov] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <main style={{ background: "#f2e8de", minHeight: "100vh" }}>
      <section className="md-pt-page" style={{
        height: "100dvh", // Locked to single viewport
        display: "flex",
        flexDirection: "column",
        paddingTop: 80, // Header height
        position: "relative",
        background: "#f2e8de",
        color: C.dark,
        overflow: "hidden"
      }}>
        <div style={{ flex: 1, display: "flex", width: "100%", maxWidth: 1580, margin: "0 auto", minHeight: 0 }} className="md-col">

          {/* Left Column: Full-Block Cinematic Visual */}
          <div style={{ flex: 1, position: "relative", overflow: "hidden", background: "#f2e8de", display: "flex", alignItems: "center", justifyContent: "center" }} className="md-w-full">
            {WIG_SOLUTIONS.map((item, idx) => (
              <div
                key={idx}
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: activeIdx === idx ? 1 : 0,
                  transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "clamp(10px, 3vh, 40px)" // Compacted for viewport stability
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>

          {/* Right Column: Narrative & Interaction */}
          <div style={{ flex: 1.4, display: "flex", flexDirection: "column", padding: "clamp(20px, 4vh, 60px) 40px", justifyContent: "center", background: "#f2e8de", minHeight: 0 }} className="md-w-full">

            {/* Interactive Menu Segment */}
            <div style={{ borderTop: `1px solid ${C.gold}33`, overflowY: "auto", overflowX: "hidden", paddingRight: 4 }} className="hide-scroll">
              {WIG_SOLUTIONS.map((item, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                  style={{
                    padding: "clamp(12px, 2.5vh, 24px) 0", // Reduced for a tighter, refined look
                    paddingRight: 32, // Added buffer to prevent arrow overflow
                    borderBottom: `1px solid ${C.gold}22`,
                    cursor: "default",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.3s ease",
                    opacity: activeIdx === idx ? 1 : 0.45,
                    transform: `translateX(${activeIdx === idx ? 12 : 0}px)`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 32, flex: 1 }}>
                    <span style={{ fontFamily: body, fontSize: 16, color: C.gold, fontWeight: 700, letterSpacing: 1.5 }}>
                      00{idx + 1}
                    </span>
                    <div>
                      <h4 style={{ fontFamily: serif, fontSize: "clamp(24px, 3.2vw, 44px)", fontWeight: 700, color: C.dark, marginBottom: 6, letterSpacing: "0.05em" }}>
                        {item.title}
                      </h4>
                      <div style={{ fontFamily: body, fontSize: 12, color: C.gold, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
                        {item.sub}
                      </div>
                    </div>
                  </div>

                  {/* Persistent Animated Arrow */}
                  <div style={{
                    opacity: activeIdx === idx ? 1 : 0.7,
                    transform: `translateX(${activeIdx === idx ? 15 : 0}px)`,
                    transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    color: C.gold,
                    display: "flex",
                    alignItems: "center",
                    pointerEvents: "none"
                  }}>
                    <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 8H46M46 8L39 1M46 8L39 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── REST OF PAGE ─── */}
      {/* ─── STABILIZED VERTICAL ACCORDION CATALOG (1-VIEWPORT) ─── */}
      <section style={{
        height: "100dvh",
        background: C.white,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }}>

        {/* Dedicated Section Header (Stabilized) */}
        <div style={{ padding: "100px 40px 40px", flexShrink: 0 }}>
          <Reveal y={10}>
            <div style={{ borderLeft: `5px solid ${C.gold}`, paddingLeft: 20 }}>
              <div style={{ fontFamily: body, fontSize: 13, fontWeight: 700, letterSpacing: 3, color: C.gold, textTransform: "uppercase", marginBottom: 6 }}>Service Catalog</div>
              <h2 style={{ fontFamily: serif, fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 700, color: C.dark }}>Bespoke <span style={{ color: C.gold }}>Solutions</span></h2>
            </div>
          </Reveal>
        </div>

        {/* The Accordion Container (Flexible Height) */}
        <div style={{ flex: 1, display: "flex", width: "100%", minHeight: 0 }} className="md-col">
          {SERVICES.map((s, i) => {
            const isActive = hov === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                className={`srv-panel ${isActive ? "is-active" : ""}`}
                style={{
                  flex: isActive ? 5 : 0.6,
                  height: "100%",
                  position: "relative",
                  background: isActive ? C.cream : (i % 2 === 0 ? C.white : "#FAF9F7"),
                  borderRight: `1px solid ${isActive ? C.gold : "rgba(0,0,0,0.06)"}`,
                  transition: "flex 3.0s cubic-bezier(0.19, 1, 0.22, 1), background 1.2s ease",
                  overflow: "hidden",
                  cursor: "default"
                }}
              >
                {/* Strictly Anchored Viewport Watermark */}
                <div className="v-num" style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: "-5vh", // Adjust this single value to slide the entire row up or down together
                  textAlign: "center", // Perfect horizontal centering without flexbox
                  fontFamily: serif,
                  fontSize: "85vh", // Scaled to fit nicely
                  lineHeight: 1, // Locks the bottom invisible bounding box flat
                  fontWeight: 900,
                  // lining-nums is the secret weapon here: it forces serif numbers to all be the exact same height and sit on the exact same flat baseline.
                  fontVariantNumeric: "lining-nums tabular-nums",
                  color: `${C.gold}44`,
                  opacity: isActive ? 0 : 1,
                  transition: "opacity 0.6s ease",
                  pointerEvents: "none",
                  zIndex: 0,
                  margin: 0
                }}>
                  {i + 1}
                </div>

                {/* Branded Logo - Elevated on Z-Index */}
                <div className="v-title" style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                  padding: "0 20px",
                  textAlign: "center",
                  opacity: isActive ? 0 : 1,
                  transition: "opacity 0.4s ease",
                  pointerEvents: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1
                }}>
                  {/* @ts-ignore */}
                  <img
                    src={s.logo.src}
                    alt={s.title}
                    style={{ width: "90%", maxHeight: 140, objectFit: "contain" }}
                  />
                </div>

                {/* Expanded Content (Active State) - Instant Disappear on inactive */}
                <div className="v-exp" style={{
                  height: "100%",
                  padding: "40px clamp(20px, 4vw, 60px)",
                  transform: `translateY(${isActive ? 0 : 20}px)`,
                  // Fade in smoothly, disappear instantly on hover leave
                  transition: isActive
                    ? "opacity 0.5s ease 0.2s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s"
                    : "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  maxWidth: 580,
                  margin: "0 auto"
                }}>
                  <div style={{ fontSize: "clamp(32px, 4vh, 48px)", color: C.gold, marginBottom: 20 }}>{s.icon}</div>
                  <h3 style={{ fontFamily: serif, fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: C.dark, marginBottom: 8, lineHeight: 1.1 }}>
                    {s.title}
                  </h3>
                  <div style={{ fontFamily: body, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: C.gold, textTransform: "uppercase", marginBottom: 20 }}>
                    {s.subtitle}
                  </div>
                  <p style={{ fontFamily: body, fontSize: "clamp(15px, 1.2vw, 17px)", lineHeight: 1.5, color: C.mid, marginBottom: 32 }}>
                    {s.desc}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                    <Btn dark onClick={() => window.location.href = '/contact'}>Enquire Now</Btn>
                    {s.badge && (
                      <span style={{ fontFamily: body, fontSize: 10, fontWeight: 800, letterSpacing: 1.5, color: C.gold, textTransform: "uppercase" }}>
                        • {s.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subtle Back Glow Overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(to bottom, transparent, ${C.gold}08)`,
                  opacity: isActive ? 1 : 0,
                  transition: "opacity 0.8s ease",
                  pointerEvents: "none"
                }} />
              </div>
            );
          })}
        </div>

        {/* Global Catalog Disclaimer (Optional/Minimal) */}
        <div style={{ position: "absolute", bottom: 24, right: 32, opacity: 0.4, pointerEvents: "none" }} className="md-hide">
          <p style={{ fontFamily: body, fontSize: 11, color: C.dark, letterSpacing: 1 }}>hover to explore bespoke solutions</p>
        </div>
      </section>
    </main>
  );
}
