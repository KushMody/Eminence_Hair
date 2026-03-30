'use client';

import React, { useState } from "react";
import { C, BRAND, TIME_SLOTS, body, serif } from "@/components/data";
import { Reveal, Eyebrow, Btn } from "@/components/ui";

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", wa:"", date:"", slot:"" });
  const [done, setDone] = useState(false);
  const [cf, setCf] = useState({ name:"", email:"", subject:"", message:"" });
  const [focus, setFocus] = useState<string | null>(null);

  const inp = (f: string, dark?: boolean) => ({ width:"100%", padding:"16px 20px", background: dark ? "rgba(255,255,255,.03)" : C.white, border:`1px solid ${focus===f ? C.gold : (dark ? "rgba(255,255,255,.1)" : C.goldLt)}`, borderRadius:4, fontSize:18, outline:"none", fontFamily:body, color: dark ? C.white : C.dark, transition:"all .3s", boxShadow: focus===f ? `0 0 0 3px ${dark ? C.gold+"20" : C.cream}` : "none" });
  const lbl = (dark?: boolean): React.CSSProperties => ({ display:"block", fontFamily:body, fontSize:12, fontWeight:600, letterSpacing:3, color: dark ? C.gold : C.mid, textTransform:"uppercase", marginBottom:10 });

  const submitBooking = (e: React.FormEvent) => { e.preventDefault(); if(!form.name||!form.wa||!form.date||!form.slot) return alert("Please fill in all fields."); setDone(true); };
  const submitMessage = (e: React.FormEvent) => { e.preventDefault(); alert("Message sent! We'll get back to you soon."); };

  return (
    <main style={{ minHeight:"100vh" }}>
      
      {/* ── BOOKING SECTION ── */}
      <section className="md-py-60 md-px-20" style={{ padding:"110px 40px 140px", background:C.off }}>
        <div style={{ maxWidth:920, margin:"0 auto" }}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:64 }}>
              <Eyebrow text="Reserve Your Spot" center />
              <h1 style={{ fontFamily:serif, fontSize:"clamp(40px,5vw,64px)", fontWeight:700, color:C.dark, marginBottom:18 }}>Book Appointment</h1>
              <p style={{ fontFamily:body, fontSize:22, color:C.mid, maxWidth:520, margin:"0 auto" }}>Easily schedule via our form — we'll confirm on WhatsApp within 2 hours. Hassle-free.</p>
            </div>
          </Reveal>

          <Reveal y={40}>
            <a href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20Eminence%20Hair!%20I%27d%20like%20to%20book%20an%20appointment.`} target="_blank" rel="noreferrer"
              style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:16, background:C.cream, border:`1px solid ${C.goldLt}`, borderRadius:4, padding:"20px 32px", marginBottom:48, textDecoration:"none", transition:"all .3s ease", boxShadow:"0 10px 30px rgba(0,0,0,.04)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.goldLt; e.currentTarget.style.transform = "translateY(0)"; }}>
              <span style={{ fontSize:26, filter: "sepia(1) saturate(5) hue-rotate(-10deg)" }}>💬</span>
              <span style={{ fontFamily:body, fontSize:18, fontWeight:600, color:C.dark, letterSpacing:1.5 }}>Or book instantly on WhatsApp · {BRAND.phone}</span>
            </a>
            
            {!done ? (
              <form onSubmit={submitBooking} className="bk-inner" style={{ background:C.white, border:`1px solid ${C.cream}`, borderRadius:4, padding:"64px 72px", boxShadow:"0 30px 60px rgba(0,0,0,.04)" }}>
                <div className="f2c" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:28, marginBottom:28 }}>
                  <div>
                    <label style={lbl()}>Full Name *</label>
                    <input value={form.name} onChange={e => setForm({...form,name:e.target.value})} onFocus={() => setFocus("n1")} onBlur={() => setFocus(null)} placeholder="Your full name" style={inp("n1")} required />
                  </div>
                  <div>
                    <label style={lbl()}>WhatsApp Number *</label>
                    <input value={form.wa} onChange={e => setForm({...form,wa:e.target.value})} onFocus={() => setFocus("w")} onBlur={() => setFocus(null)} placeholder="+91 XXXXX XXXXX" style={inp("w")} required />
                  </div>
                  <div style={{ gridColumn:"1/-1" }}>
                    <label style={lbl()}>Preferred Date *</label>
                    <input type="date" value={form.date} onChange={e => setForm({...form,date:e.target.value})} onFocus={() => setFocus("d")} onBlur={() => setFocus(null)} min={new Date().toISOString().split("T")[0]} style={inp("d") as any} required />
                  </div>
                </div>
                <div style={{ marginBottom:48 }}>
                  <label style={lbl()}>Preferred Time Slot *</label>
                  <div className="slots-g" style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:12 }}>
                    {TIME_SLOTS.map(s => (
                      <div key={s.id} onClick={() => setForm({...form,slot:s.id})} style={{ padding:"18px 12px", textAlign:"center", background: form.slot===s.id ? `linear-gradient(135deg,${C.gold},${C.goldDk})` : C.cream, border:`1px solid ${form.slot===s.id ? C.gold : "rgba(0,0,0,.08)"}`, borderRadius:4, transition:"all .3s ease", cursor:"pointer" }}>
                        <div style={{ fontFamily:body, fontSize:15, fontWeight:700, color: form.slot===s.id ? C.white : C.dark, marginBottom:4 }}>{s.label}</div>
                        <div style={{ fontFamily:body, fontSize:11, fontWeight:600, letterSpacing:2.5, color: form.slot===s.id ? "rgba(255,255,255,.85)" : C.mid, textTransform:"uppercase" }}>{s.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:32, flexWrap:"wrap" }}>
                  <Btn type="submit" large dark>Confirm Booking</Btn>
                  <div style={{ fontFamily:body, fontSize:16, color:C.mid, lineHeight:1.7 }}>Confirmed via WhatsApp<br />within 2 hours of booking.</div>
                </div>
              </form>
            ) : (
              <div style={{ background:C.white, border:`1px solid ${C.goldLt}`, borderRadius:4, padding:"80px 56px", textAlign:"center", boxShadow:"0 20px 50px rgba(0,0,0,.04)" }}>
                <div style={{ width:88, height:88, borderRadius:"50%", background:`linear-gradient(135deg,${C.gold},${C.goldDk})`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 36px", fontSize:32, color:C.white, boxShadow:"0 16px 32px rgba(201,169,110,.25)" }}>✓</div>
                <h3 style={{ fontFamily:serif, fontSize:40, color:C.dark, marginBottom:16 }}>Booking Received!</h3>
                <p style={{ fontFamily:body, fontSize:20, color:C.mid, marginBottom:8 }}>Thank you, {form.name}. We'll confirm via WhatsApp shortly.</p>
                <button onClick={() => { setDone(false); setForm({name:"",wa:"",date:"",slot:""}); }} style={{ marginTop:36, background:"transparent", border:`1px solid ${C.gold}`, borderRadius:4, padding:"14px 32px", fontFamily:body, fontSize:13, fontWeight:700, color:C.goldDk, letterSpacing:2.5, textTransform:"uppercase", cursor:"pointer" }}>Book Another</button>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="md-py-60 md-px-20" style={{ padding:"140px 40px", background:C.cream }}>
        <div style={{ maxWidth:1380, margin:"0 auto" }}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:70 }}>
              <Eyebrow text="Get In Touch" center />
              <h2 style={{ fontFamily:serif, fontSize:"clamp(40px,5vw,64px)", fontWeight:700, color:C.dark }}>Contact Details</h2>
            </div>
          </Reveal>

          <div className="ct-g" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"start" }}>
            <Reveal y={40}>
              <div>
                {[
                  { icon:"📍", title:"Visit Us", body:BRAND.address },
                  { icon:"📞", title:"Call / WhatsApp", body:BRAND.phone },
                  { icon:"✉️", title:"Email Us", body:BRAND.email },
                  { icon:"🕐", title:"Studio Hours", body:"Monday – Saturday\n10:00 AM – 8:00 PM" },
                ].map((c,i) => (
                  <div key={i} style={{ display:"flex", gap:24, marginBottom:40 }}>
                    <div style={{ fontSize:26, flexShrink:0, marginTop:2 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontFamily:serif, fontSize:22, fontWeight:700, color:C.dark, marginBottom:8 }}>{c.title}</div>
                      {c.body.split("\n").map((l,j) => <div key={j} style={{ fontFamily:body, fontSize:19, color:C.mid, lineHeight:1.7 }}>{l}</div>)}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal d={0.2} y={40}>
              <form onSubmit={submitMessage} className="ct-f" style={{ background:C.white, borderRadius:4, padding:"64px 56px", border:`1px solid ${C.goldLt}`, boxShadow:"0 20px 50px rgba(0,0,0,.04)" }}>
                <h3 style={{ fontFamily:serif, fontSize:30, fontWeight:700, color:C.dark, marginBottom:36 }}>Send a Message</h3>
                <div className="f2c" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20, marginBottom:20 }}>
                  <div><label style={lbl()}>Your Name</label><input value={cf.name} onChange={e => setCf({...cf,name:e.target.value})} onFocus={() => setFocus("n2")} onBlur={() => setFocus(null)} placeholder="Full name" style={inp("n2")} required /></div>
                  <div><label style={lbl()}>Email</label><input type="email" value={cf.email} onChange={e => setCf({...cf,email:e.target.value})} onFocus={() => setFocus("e")} onBlur={() => setFocus(null)} placeholder="your@email.com" style={inp("e")} required /></div>
                </div>
                <div style={{ marginBottom:20 }}><label style={lbl()}>Subject</label><input value={cf.subject} onChange={e => setCf({...cf,subject:e.target.value})} onFocus={() => setFocus("s")} onBlur={() => setFocus(null)} placeholder="How can we help?" style={inp("s")} required /></div>
                <div style={{ marginBottom:40 }}><label style={lbl()}>Message</label><textarea value={cf.message} onChange={e => setCf({...cf,message:e.target.value})} onFocus={() => setFocus("m")} onBlur={() => setFocus(null)} placeholder="Your message..." rows={4} style={{ ...inp("m"), resize:"vertical", minHeight:120 } as any} required /></div>
                <Btn type="submit" large dark>Send Message</Btn>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

    </main>
  );
}
