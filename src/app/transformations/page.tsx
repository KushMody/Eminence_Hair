'use client';

import React from "react";
import { C, TRANSFORM_PAIRS, TRANSFORM_COMPOSITES, VIDEOS_TRANSFORM, body, serif } from "@/components/data";
import { Reveal, Eyebrow, VideoPlayer, ComparisonSlider, RevealCard } from "@/components/ui";

export default function TransformationsPage() {
  const featured = TRANSFORM_PAIRS[0];
  const others = TRANSFORM_PAIRS.slice(1);

  return (
    <main style={{ background: C.off, minHeight: "100vh" }}>
      {/* First Viewport Section */}
      <div style={{
        minHeight: "100vh", // Changed to minHeight for better overflow handling
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 15,
        maxWidth: 1400,
        margin: "0 auto",
        padding: "80px 40px 40px", 
        position: "relative"
      }}>
        {/* Compact Header */}
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 0 }}>
            <Eyebrow text="The Art of Restoration" center style={{ marginBottom: 0 }} />
            <h1 style={{ fontFamily: serif, fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 700, color: C.dark, marginBottom: 8, letterSpacing: "-0.02em" }}>
              Eminence <span style={{ color: C.gold }}>Reveals</span>
            </h1>
            <p style={{ fontFamily: body, fontSize: "clamp(16px, 1.5vw, 18px)", color: C.mid, maxWidth: 600, margin: "0 auto", lineHeight: 1.4 }}>
              Experience the transition from thinning hair to absolute confidence. Swipe to see the magic.
            </p>
          </div>
        </Reveal>

        {/* Featured Transformation Slider - Viewport Optimized */}
        <section style={{ height: "calc(100vh - 280px)", maxHeight: 650, minHeight: 400 }}>
          <Reveal y={30}>
            <div style={{ background: C.white, padding: "16px", borderRadius: 32, boxShadow: "0 40px 100px rgba(0,0,0,0.08)", height: "100%", display: "flex", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 40, alignItems: "center", width: "100%" }}>
                <div style={{ height: "100%", borderRadius: 24, overflow: "hidden" }}>
                  <ComparisonSlider before={featured.before} after={featured.after} />
                </div>
                <div style={{ paddingRight: 40 }}>
                  <div style={{ color: C.gold, fontSize: 10, fontWeight: 700, letterSpacing: 4, marginBottom: 12 }}>FEATURED TRANSFORMATION</div>
                  <h2 style={{ fontFamily: serif, fontSize: "clamp(24px, 3vw, 36px)", color: C.dark, marginBottom: 16, lineHeight: 1.1 }}>{featured.title}</h2>
                  <p style={{ fontFamily: body, fontSize: 16, color: C.mid, lineHeight: 1.6, marginBottom: 24 }}>{featured.desc}</p>
                  <div style={{ height: 1, width: 60, background: C.goldLt, marginBottom: 24 }} />
                  <div style={{ display: "flex", gap: 30 }}>
                    <div>
                      <div style={{ fontSize: 9, color: C.mid, letterSpacing: 2, marginBottom: 4 }}>TECHNIQUE</div>
                      <div style={{ fontFamily: body, fontSize: 14, fontWeight: 700 }}>Swiss Lace</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 9, color: C.mid, letterSpacing: 2, marginBottom: 4 }}>DURATION</div>
                      <div style={{ fontFamily: body, fontSize: 14, fontWeight: 700 }}>90 Mins</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "120px 40px" }}>
        {/* Reveal Grid */}
        <section style={{ marginBottom: 160, position: "relative", zIndex: 5 }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 60 }}>
              <div>
                <Eyebrow text="Interactive Gallery" style={{ marginBottom: 0 }} />
                <h2 style={{ fontFamily: serif, fontSize: 44, color: C.dark }}>Hover to Reveal</h2>
              </div>
              <p style={{ fontFamily: body, fontSize: 18, color: C.mid, maxWidth: 400 }}>Explore more life-changing results from our satisfied clients across Vadodara.</p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 40 }}>
            {others.map((pair, i) => (
              <RevealCard key={i} {...pair} delay={i * 0.15} />
            ))}
          </div>
        </section>

        {/* Composite Designs Section */}
        <section style={{ marginBottom: 120 }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <h2 style={{ fontFamily: serif, fontSize: 44, color: C.dark }}>Editorial Showcase</h2>
              <div style={{ width: 60, height: 2, background: C.gold, margin: "24px auto" }} />
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 30 }}>
            {TRANSFORM_COMPOSITES.map((src, i) => (
              <Reveal key={i} d={i * 0.1} y={30}>
                <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.1)", aspectRatio: "1/1.2" }}>
                  <img src={src} alt="Eminence Transformation" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Video Gallery */}
        <section>
          <Reveal y={40}>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <Eyebrow text="Behind the Scenes" center style={{ marginBottom: 0 }} />
              <h2 style={{ fontFamily: serif, fontSize: 48, fontWeight: 700, color: C.dark }}>Transformation Sessions</h2>
            </div>
          </Reveal>
          <div className="vids-g" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {VIDEOS_TRANSFORM.map((src, i) => (
              <Reveal key={i} d={i * 0.15} y={40}>
                <div style={{ background: C.white, padding: 12, borderRadius: 24, boxShadow: "0 20px 50px rgba(0,0,0,.08)", border: `1px solid ${C.goldLt}` }}>
                  <div style={{ borderRadius: 16, overflow: "hidden", background: C.dark, aspectRatio: "9/16", width: "100%" }}>
                    <VideoPlayer src={src} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
