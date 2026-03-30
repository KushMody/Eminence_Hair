'use client';

import React, { useState } from "react";
import { C, TESTIMONIALS, VIDEOS_FEEDBACK, body, serif } from "@/components/data";
import { Reveal, Eyebrow, Stars, VideoPlayer } from "@/components/ui";

export default function TestimonialsPage() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <main className="md-py-60 md-px-20" style={{ padding:"110px 40px 100px", background:C.white, position:"relative", minHeight:"100vh" }}>
      <div style={{ position:"absolute", top:0, right:0, width:600, height:600, borderRadius:"50%", background:"radial-gradient(circle, rgba(201,169,110,.05), transparent 65%)", zIndex:0 }} />
      <div style={{ position:"absolute", bottom:0, left:0, width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle, rgba(201,169,110,.03), transparent 65%)", zIndex:0 }} />
      
      <div style={{ maxWidth:1180, margin:"0 auto", position:"relative", zIndex:1 }}>
        <Reveal>
          <div style={{ textAlign:"center", marginBottom:80 }}>
            <Eyebrow text="Real Stories" center />
            <h1 style={{ fontFamily:serif, fontSize:"clamp(44px,6vw,72px)", fontWeight:700, color:C.dark, marginBottom:16 }}>Customer Experience</h1>
            <p style={{ fontFamily:body, fontSize:22, color:C.mid }}>Over 2,000 transformations — each one a story worth telling.</p>
          </div>
        </Reveal>

        <Reveal y={40}>
          <div className="t-card" style={{ display:"flex", background:C.cream, border:`1px solid rgba(201,169,110,.4)`, borderRadius:4, overflow:"hidden", marginBottom:48, boxShadow:"0 30px 60px rgba(0,0,0,.08)", minHeight:380 }}>
            <div style={{ flex:1, padding:"72px 80px", position:"relative" }}>
               <div style={{ fontFamily:serif, fontSize:120, lineHeight:.6, color:C.goldDk, opacity:.12, marginBottom:16 }}>"</div>
               <p style={{ fontFamily:serif, fontSize:"clamp(24px,3vw,34px)", fontStyle:"italic", color:C.dark, lineHeight:1.6, marginBottom:40 }}>{t.text}</p>
               <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                  <div>
                    <div style={{ fontFamily:serif, fontSize:22, fontWeight:600, color:C.dark, marginBottom:4 }}>{t.name}</div>
                    <div style={{ fontFamily:body, fontSize:14, color:C.gold, letterSpacing:1.5, textTransform:"uppercase" }}>{t.location} · {t.service}</div>
                  </div>
                  <Stars n={t.rating} />
               </div>
            </div>
            
            <div className="t-img-box" style={{ width: 440, background:C.white, position:"relative", flexShrink:0 }}>
              <img src={t.img} alt={t.name} style={{ width:"100%", height:"100%", objectFit:"cover", opacity: 1 }} key={t.img} />
            </div>
          </div>
        </Reveal>

        {/* Selectors */}
        <Reveal y={20} d={0.2}>
          <div className="mini-row" style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:16, marginBottom:100 }}>
            {TESTIMONIALS.map((tt,i) => (
              <button key={i} onClick={() => setActive(i)} style={{ display:"flex", alignItems:"center", gap:16, background: active===i ? C.cream : C.white, border:`1px solid ${active===i ? C.gold+"60" : "rgba(0,0,0,.06)"}`, borderRadius:4, padding:"18px 20px", textAlign:"left", transition:"all .4s ease" }}>
                <img src={tt.img} alt={tt.name} style={{ width:44, height:44, borderRadius:4, objectFit:"cover", border:`1px solid ${C.gold}40` }} />
                <div>
                  <div style={{ fontFamily:body, fontSize:15, fontWeight:600, color: active===i ? C.dark : C.mid }}>{tt.name}</div>
                  <div style={{ color:C.gold, fontSize:10, marginTop:4 }}><Stars n={5} /></div>
                </div>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Video Feedback */}
        <Reveal y={40} d={0.3}>
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <div style={{ fontFamily:body, fontSize:14, letterSpacing:4, color:C.goldDk, textTransform:"uppercase", marginBottom:12 }}>Watch Reviews</div>
            <h2 style={{ fontFamily:serif, fontSize:"clamp(34px,4vw,52px)", fontWeight:700, color:C.dark }}>Video Testimonials</h2>
            <div style={{ width:60, height:2, background:C.gold, margin:"20px auto 30px" }} />
          </div>
          <div className="vids3-g" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
            {VIDEOS_FEEDBACK.map((src,i) => (
              <div key={i} style={{ background:C.white, padding:12, borderRadius:12, border:`1px solid ${C.goldLt}`, boxShadow:"0 16px 40px rgba(0,0,0,.06)" }}>
                <div style={{ borderRadius:6, overflow:"hidden", background:C.dark, aspectRatio:"9/16", width:"100%" }}>
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
