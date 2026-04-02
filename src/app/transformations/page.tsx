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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 15,
        maxWidth: 1400,
        margin: "0 auto",
        padding: "90px 40px 20px",
        position: "relative"
      }}>
        {/* Compact Editorial Header */}
        <Reveal>
          <div style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            width: "100%",
            marginBottom: 10,
            paddingBottom: 12,
            borderBottom: `1px solid rgba(201,169,110,0.15)`
          }}>
            <div style={{ textAlign: "left" }}>
              <Eyebrow text="The Art of Restoration" style={{ marginBottom: 0 }} />
              <h1 style={{ fontFamily: serif, fontSize: "clamp(24px, 3.5vw, 44px)", fontWeight: 700, color: C.dark, marginBottom: 0, letterSpacing: "-0.02em", lineHeight: 1 }}>
                Eminence <span style={{ color: C.gold }}>Reveals</span>
              </h1>
            </div>
          </div>
        </Reveal>

        {/* Featured Transformation Slider - Optimized for Hair Focus */}
        <section style={{ height: "calc(100vh - 220px)", maxHeight: 780, minHeight: 500 }}>
          <Reveal y={30}>
            <div style={{ background: C.white, padding: "24px", borderRadius: 32, boxShadow: "0 40px 100px rgba(0,0,0,0.1)", height: "100%", display: "flex", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 60, alignItems: "center", width: "100%" }}>
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

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px" }}>
        {/* Reveal Grid - One Viewport Optimized */}
        <section style={{ 
          minHeight: "100vh", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          padding: "80px 0",
          position: "relative", 
          zIndex: 5 
        }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40 }}>
              <div>
                <Eyebrow text="Interactive Gallery" style={{ marginBottom: 4 }} />
                <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 44px)", color: C.dark, margin: 0 }}>Hover to Reveal</h2>
              </div>
              <p style={{ fontFamily: body, fontSize: "clamp(15px, 1.2vw, 17px)", color: C.mid, maxWidth: 380, margin: 0, textAlign: "right" }}>Explore more life-changing results from our satisfied clients across Vadodara.</p>
            </div>
          </Reveal>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(2, 1fr)", 
            gap: 30,
            maxHeight: "calc(100vh - 250px)",
          }}>
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
