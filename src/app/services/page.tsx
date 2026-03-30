'use client';

import React, { useState } from "react";
import { C, SERVICES, WIG_SOLUTIONS, body, serif } from "@/components/data";
import { Reveal, Eyebrow, Btn } from "@/components/ui";

export default function ServicesPage() {
  const [hov, setHov] = useState<number | null>(null);
  
  return (
    <main className="md-py-60 md-px-20" style={{ padding:"110px 40px 100px", background:C.cream, minHeight:"100vh" }}>
      <div style={{ maxWidth:1380, margin:"0 auto" }}>
        
        <Reveal y={40}>
          <div style={{ textAlign:"center", marginBottom:80 }}>
            <Eyebrow text="What We Offer" center />
            <h1 style={{ fontFamily:serif, fontSize:"clamp(44px,6vw,72px)", fontWeight:700, color:C.dark, marginBottom:20 }}>Unmatched Expertise</h1>
            <p style={{ fontFamily:body, fontSize:22, color:C.mid, maxWidth:680, margin:"0 auto" }}>
              Every client is treated like royalty — personalised solutions for your unique hair concerns, tailored strictly for your lifestyle.
            </p>
          </div>
        </Reveal>

        {/* New Wig Systems Technology Section */}
        <div style={{ marginBottom: 100 }}>
          <Reveal y={30}>
            <div style={{ marginBottom: 40, borderLeft: `4px solid ${C.gold}`, paddingLeft: 24 }}>
              <div style={{ fontFamily: body, fontSize: 14, fontWeight: 700, letterSpacing: 4, color: C.gold, textTransform: "uppercase", marginBottom: 8 }}>Technological Mastery</div>
              <h2 style={{ fontFamily: serif, fontSize: 32, fontWeight: 700, color: C.dark }}>Advanced Hair Systems</h2>
            </div>
          </Reveal>
          
          <div className="sol-grid">
            {WIG_SOLUTIONS.map((item, idx) => (
              <Reveal key={item.id} d={idx * 0.1} y={20}>
                <div className="sol-card" style={{ background: C.white, borderRadius: 8, overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", transition: "all 0.4s ease" }}>
                  <div style={{ padding: 20, borderBottom: `1px solid ${C.cream}` }}>
                    <h4 style={{ fontFamily: serif, fontSize: 18, fontWeight: 700, color: C.dark, marginBottom: 4 }}>{item.title}</h4>
                    <div style={{ fontFamily: body, fontSize: 13, color: C.gold, fontWeight: 600 }}>{item.sub}</div>
                  </div>
                  <div style={{ position: "relative", padding: "0 0 125% 0", overflow: "hidden" }}>
                    <img 
                      src={item.img} 
                      alt={item.title}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
                      className="hover-zoom"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal y={30}>
          <div style={{ marginBottom: 40, borderLeft: `4px solid ${C.gold}`, paddingLeft: 24 }}>
            <div style={{ fontFamily: body, fontSize: 14, fontWeight: 700, letterSpacing: 4, color: C.gold, textTransform: "uppercase", marginBottom: 8 }}>Service Catalog</div>
            <h2 style={{ fontFamily: serif, fontSize: 32, fontWeight: 700, color: C.dark }}>Bespoke Solutions</h2>
          </div>
        </Reveal>
        
        <div className="srv-g" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:2, background:"rgba(0,0,0,.04)", border:`1px solid rgba(0,0,0,.04)` }}>
          {SERVICES.map((s,i) => (
            <Reveal key={i} d={i*0.08} y={30}>
              <div onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
                style={{ background: hov===i ? C.dark : C.white, padding:"56px 44px", position:"relative", overflow:"hidden", transition:"all .5s cubic-bezier(0.16, 1, 0.3, 1)", height:"100%" }}>
                <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:`linear-gradient(90deg,${C.gold},${C.goldLt})`, transform:`scaleX(${hov===i?1:0})`, transformOrigin:"left", transition:"transform .5s cubic-bezier(0.16, 1, 0.3, 1)" }} />
                
                {s.badge && <div style={{ position:"absolute", top:24, right:24, background: hov===i ? C.gold : C.cream, color: hov===i ? C.white : C.dark, fontFamily:body, fontSize:10, fontWeight:700, letterSpacing:2, padding:"6px 14px", textTransform:"uppercase", borderRadius:2, transition:"all .5s" }}>{s.badge}</div>}
                
                <div style={{ fontSize:32, color: hov===i ? C.gold : "#E8D5B0", marginBottom:28, transition:"color .5s" }}>{s.icon}</div>
                <h3 style={{ fontFamily:serif, fontSize:28, fontWeight:700, color: hov===i ? C.white : C.dark, marginBottom:8, transition:"color .5s" }}>{s.title}</h3>
                <div style={{ fontFamily:body, fontSize:12, fontWeight:600, letterSpacing:2.5, color:C.gold, textTransform:"uppercase", marginBottom:20 }}>{s.subtitle}</div>
                <p style={{ fontFamily:body, fontSize:18, lineHeight:1.8, color: hov===i ? "rgba(255,255,255,.7)" : C.mid, marginBottom:32, transition:"color .5s" }}>{s.desc}</p>
                
                <div style={{ display:"flex", alignItems:"center", gap:10, color: hov===i ? C.gold : C.dark, fontFamily:body, fontSize:13, fontWeight:700, letterSpacing:2, textTransform:"uppercase", transition:"color .5s" }}>
                  <span>Enquire</span><span style={{ fontSize:18 }}>→</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        <Reveal d={0.2} y={30}>
          <div style={{ textAlign:"center", marginTop:80 }}>
            <Btn onClick={() => window.location.href='/contact'} dark large>Book a Consultation</Btn>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
