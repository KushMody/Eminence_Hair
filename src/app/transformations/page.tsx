'use client';

import React from "react";
import { C, IMAGES_BEFORE_AFTER, VIDEOS_TRANSFORM, body, serif } from "@/components/data";
import { Reveal, Eyebrow, VideoPlayer } from "@/components/ui";

export default function TransformationsPage() {
  return (
    <main className="md-py-60 md-px-20" style={{ padding: "110px 40px 100px", background: C.off, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1380, margin: "0 auto" }}>

        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <Eyebrow text="See the Results" center />
            <h1 style={{ fontFamily: serif, fontSize: "clamp(44px,6vw,72px)", fontWeight: 700, color: C.dark, marginBottom: 16 }}>Before & After</h1>
            <p style={{ fontFamily: body, fontSize: 22, color: C.mid }}>Real clients. Real transformations. See what's possible in a single session.</p>
          </div>
        </Reveal>

        {/* Highlight Image Gallery */}
        <div className="vids3-g" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginBottom: 100 }}>
          {IMAGES_BEFORE_AFTER.map((src, i) => (
            <Reveal key={i} d={i * 0.1} y={40}>
              <div style={{ borderRadius: 4, overflow: "hidden", boxShadow: "0 12px 30px rgba(0,0,0,.08)", height: 500 }}>
                <img src={src} alt="Eminence Hair Before and After" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Video Gallery */}
        <Reveal y={40}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(34px,4vw,52px)", fontWeight: 700, color: C.dark }}>Transformation Sessions</h2>
            <div style={{ width: 60, height: 2, background: C.gold, margin: "20px auto 30px" }} />
          </div>
        </Reveal>
        <Reveal y={40} d={0.2}>
          <div className="vids-g" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {VIDEOS_TRANSFORM.map((src, i) => (
              <div key={i} style={{ background: C.white, padding: 12, borderRadius: 12, border: `1px solid ${C.goldLt}`, boxShadow: "0 16px 40px rgba(0,0,0,.06)" }}>
                <div style={{ borderRadius: 6, overflow: "hidden", background: C.dark, aspectRatio: "9/16", width: "100%" }}>
                  <VideoPlayer src={src} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </main>
  );
}
