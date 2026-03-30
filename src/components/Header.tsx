'use client';

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { C, serif, body } from "./data";
import { Btn } from "./ui";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  
  useEffect(() => { 
    const f = () => setScrolled(window.scrollY > 40); 
    window.addEventListener("scroll", f); 
    return () => window.removeEventListener("scroll", f); 
  }, []);

  const links = [
    ["Home", "/"],
    ["Services", "/services"],
    ["Transformations", "/transformations"],
    ["Reviews", "/testimonials"],
    ["About", "/about"],
    ["Contact", "/contact"]
  ];
  
  return (
    <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:1000, background: scrolled ? "rgba(255,255,255,.98)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? `1px solid ${C.cream}` : "none", transition:"all .5s cubic-bezier(0.16, 1, 0.3, 1)", padding:"0 40px", boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,.04)" : "none" }}>
      <div style={{ maxWidth:1380, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", height:80 }}>
        
        <Link href="/" style={{ textDecoration:"none", cursor:"pointer", transition:"transform .4s", transform: scrolled ? "scale(0.95)" : "none", transformOrigin:"left center" }}>
          <img src="/images/cropped-EMINENCE-LOGO-BLACK-300x100.png" alt="Eminence Hair Logo" style={{ height:46, width:"auto" }} />
        </Link>
        
        <div className="desk-nav" style={{ display:"flex", alignItems:"center", gap:32 }}>
          {links.map(([l,path]) => {
            const active = pathname === path;
            return (
              <Link key={path} href={path} className={`nav-link ${active ? 'active' : ''}`} style={{ textDecoration:"none", padding:0, background:"transparent", border:"none", fontFamily:body, fontSize:13, fontWeight:600, letterSpacing:1.5, color: active ? C.gold : C.dark, textTransform:"uppercase", cursor:"pointer" }}>
                {l}
              </Link>
            );
          })}
          <Link href="/contact" style={{ textDecoration:"none" }}>
            <Btn>Book Now</Btn>
          </Link>
        </div>
        
        <button className="ham" onClick={() => setOpen(!open)} style={{ display:"none", flexDirection:"column", gap:6, padding:8, background:"transparent", border:"none", cursor:"pointer" }}>
          {[0,1,2].map(i => <div key={i} style={{ display:"block", width:28, height:2, background: C.dark, transition:"transform .3s, opacity .3s", transform: open && i===0 ? "rotate(45deg) translateY(11.5px)" : open && i===2 ? "rotate(-45deg) translateY(-11.5px)" : "none", opacity: open && i===1 ? 0 : 1 }} />)}
        </button>
      </div>

      <div className={`mob-nav ${open ? 'open' : ''}`}>
        {links.map(([l,path], i) => {
          const active = pathname === path;
          return (
            <Link key={path} href={path} className={`mob-link ${active ? 'active' : ''}`} onClick={() => setOpen(false)} 
              style={{ display:"block", width:"100%", textAlign:"left", textDecoration:"none", fontFamily:body, fontSize:22, fontWeight:500, color: active ? C.gold : C.dark, padding:"18px 0", borderBottom:`1px solid ${C.cream}`, letterSpacing:1, background:"transparent", transitionDelay: `${i * 0.05}s` }}>
              {l}
            </Link>
          );
        })}
        <Link href="/contact" className="mob-link" style={{ textDecoration:"none", width: "100%", marginTop: 24, textAlign: "center", transitionDelay: `${links.length * 0.05}s` }} onClick={() => setOpen(false)}>
          <Btn large>Book Appointment</Btn>
        </Link>
      </div>
    </header>
  );
}
