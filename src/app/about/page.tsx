'use client';

import React from "react";
import { C, IMAGES_STORY, IMAGES_FAQ, body, serif } from "@/components/data";
import { Reveal, Eyebrow } from "@/components/ui";
import { ShowcaseCarousel } from "@/components/ShowcaseCarousel";


export default function AboutPage() {
  return (
    <main className="md-py-60" style={{ padding:"110px 0 100px", background:C.cream, minHeight:"100vh" }}>
      
      <div className="md-px-20" style={{ maxWidth:1380, margin:"0 auto", padding:"0 40px" }}>
        <Reveal>
          <div style={{ textAlign:"center", marginBottom:80 }}>
            <Eyebrow text="Who We Are" center />
            <h1 style={{ fontFamily:serif, fontSize:"clamp(44px,6vw,72px)", fontWeight:700, color:C.dark, marginBottom:16 }}>Eminence Hair Studio</h1>
            <p style={{ fontFamily:body, fontSize:22, color:C.mid, maxWidth:700, margin:"0 auto" }}>
              Vadodara's most-trusted destination for premium wigs, hair extensions, and instant hair transformation solutions — designed exclusively to restore your confidence.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="story-g" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", lineHeight:0 }}>
         {IMAGES_STORY.map((src, i) => (
            <img key={i} src={src} alt="Eminence Story" style={{ width:"100%", height:"100%", objectFit:"cover", aspectRatio:"4/3" }} />
         ))}
      </div>

      <ShowcaseCarousel />

      <div className="ab-g" style={{ maxWidth:1380, margin:"0 auto", padding:"140px 40px", display:"grid", gridTemplateColumns:"1fr 1.2fr", gap:100, alignItems:"center" }}>

        <Reveal y={40}>
          <div style={{ position:"relative" }}>
            <div style={{ background:`linear-gradient(145deg,${C.dark},${C.brown})`, borderRadius:4, padding:"72px 56px", position:"relative", overflow:"hidden", boxShadow:"0 20px 50px rgba(0,0,0,.2)" }}>
              <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 25% 75%, rgba(201,169,110,.16), transparent 65%)" }} />
              <img src="/images/cropped-EMINENCE-LOGO-BLACK-300x100.png" style={{ position:"absolute", bottom:30, right:30, width:180, opacity:0.1, filter:"invert(1)" }} alt="Logo Mark" />
              
              <div style={{ position:"relative", zIndex:1 }}>
                <div style={{ fontFamily:body, fontSize:12, fontWeight:700, letterSpacing:4, color:C.gold, textTransform:"uppercase", marginBottom:24 }}>Our Philosophy</div>
                <div style={{ fontFamily:serif, fontSize:32, fontStyle:"italic", color:C.white, lineHeight:1.6, marginBottom:40 }}>
                  "Where every wig is a work of art, and every client is treated like royalty."
                </div>
                <div style={{ fontFamily:body, fontSize:15, color:C.gold, letterSpacing:2.5, textTransform:"uppercase" }}>— Eminence Hair Studio</div>
              </div>
            </div>
            <div style={{ position:"absolute", top:-24, left:-24, width:"100%", height:"100%", border:`1px solid ${C.goldLt}`, zIndex:-1, borderRadius:4 }} />
          </div>
        </Reveal>

        <Reveal d={0.2} y={40}>
          <div>
            <Eyebrow text="Our Story" />
            <h2 style={{ fontFamily:serif, fontSize:"clamp(40px,4vw,56px)", fontWeight:700, color:C.dark, marginBottom:28, lineHeight:1.15 }}>A History of Elegance</h2>
            <p style={{ fontFamily:body, fontSize:22, lineHeight:1.8, color:C.mid, marginBottom:24 }}>
              Welcome to Eminence Hair — where your confidence and style come first. We offer a curated selection of high-quality wigs and expert styling to help you look and feel your best.
            </p>
            <p style={{ fontFamily:body, fontSize:22, lineHeight:1.8, color:C.mid, marginBottom:44 }}>
              Our experienced team is dedicated to personalised service. We invite you to experience the difference that dedication and passion can make — let us find the perfect solution that not only enhances your appearance but boosts your confidence.
            </p>
            
            <div className="feature-g" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
              {["High-Quality Wigs", "Expert Styling", "Immediate Solutions", "Bridal Specialist", "Free Assessment", "WhatsApp Booking"].map((p,i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:16, background:C.white, padding:"16px 20px", borderRadius:4, border:`1px solid ${C.goldLt}60` }}>
                  <div style={{ width:24, height:24, borderRadius:"50%", background:`linear-gradient(135deg,${C.gold},${C.goldDk})`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <span style={{ color:C.white, fontSize:12, fontWeight:700 }}>✓</span>
                  </div>
                  <span style={{ fontFamily:body, fontSize:18, fontWeight:600, color:C.dark }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="md-px-20" style={{ background:C.off, padding:"120px 0" }}>
        <div style={{ maxWidth:1380, margin:"0 auto", padding:"0 40px" }}>
          <Reveal>
             <div style={{ textAlign:"center", marginBottom:60 }}>
                <Eyebrow text="Common Guidelines" center />
                <h2 style={{ fontFamily:serif, fontSize:"clamp(40px,5vw,64px)", fontWeight:700, color:C.dark, marginBottom:16 }}>Care & F.A.Q.</h2>
                <p style={{ fontFamily:body, fontSize:22, color:C.mid }}>Essential guides for maintaining your premium hair extensions.</p>
             </div>
          </Reveal>
          <Reveal y={40}>
             <div style={{ display:"flex", gap:16, overflowX:"auto", paddingBottom:32, scrollSnapType:"x mandatory", maskImage:"linear-gradient(to right, transparent, black 1%, black 99%, transparent)" }}>
               {IMAGES_FAQ.map((src, i) => (
                 <img key={i} src={src} alt={`FAQ Frame ${i}`} style={{ height:"clamp(300px, 40vh, 500px)", width:"auto", borderRadius:4, border:`1px solid ${C.goldLt}`, scrollSnapAlign:"center", boxShadow:"0 12px 30px rgba(0,0,0,.08)" }} />
               ))}
             </div>
          </Reveal>
        </div>
      </div>

    </main>
  );
}
