'use client';

import React, { useState, useEffect } from "react";
import { C, IMAGES_UNUSED, serif, body } from "./data";
import { Reveal, Eyebrow } from "./ui";

export function ShowcaseCarousel() {
   const images = IMAGES_UNUSED;
   const [activeImg, setActiveImg] = useState<string | null>(null);

   // Prevent background scroll when reading a graphic in fullscreen
   useEffect(() => {
     if (activeImg) document.body.style.overflow = 'hidden';
     else document.body.style.overflow = 'unset';
     return () => { document.body.style.overflow = 'unset'; }
   }, [activeImg]);

   const Card = ({ src, w, h }: { src: string, w: number, h: number }) => {
      const [hover, setHover] = useState(false);
      return (
         <div 
           onClick={() => setActiveImg(src)}
           onMouseEnter={() => setHover(true)}
           onMouseLeave={() => setHover(false)}
           style={{ 
             width: w, height: h, borderRadius: 24, overflow: "hidden", flexShrink: 0, 
             boxShadow: hover ? "0 15px 40px rgba(0,0,0,.15)" : "0 4px 20px rgba(0,0,0,.05)", 
             backgroundColor: C.cream,
             cursor: "zoom-in",
             transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
             transform: hover ? "scale(1.03)" : "scale(1)"
           }}
         >
            <img src={src} alt="Expertise Graphic" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
         </div>
      );
   };

   return (
      <section style={{ padding: "120px 0", background: "#FDFBF9", overflow: "hidden", position: "relative" }}>
         
         {/* Fullscreen Lightbox for Reading Text */}
         {activeImg && (
            <div 
               onClick={() => setActiveImg(null)}
               style={{
                  position: "fixed", inset: 0, zIndex: 99999, background: "rgba(0,0,0,0.85)", backdropFilter: "blur(4px)",
                  display: "flex", alignItems: "center", justifyContent: "center", cursor: "zoom-out", padding: 40
               }}
            >
               <img src={activeImg} alt="Enlarged Expertise" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: 16, boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }} />
            </div>
         )}

         <div style={{ maxWidth: 1380, margin: "0 auto", padding: "0 40px" }}>

            <Reveal>
               <div style={{ textAlign: "center", marginBottom: 80 }}>
                  <Eyebrow text="Explore Our Solutions" center />
                  <h2 style={{ fontFamily: serif, fontSize: "clamp(34px,5vw,56px)", fontWeight: 700, color: C.dark, lineHeight: 1.15 }}>Transformative Expertise</h2>
                  <p style={{ fontFamily: body, fontSize: 18, color: C.mid, marginTop: 16 }}>From maintenance to complete replacement systems.</p>
                  <p style={{ fontFamily: body, fontSize: 13, color: C.goldDk, marginTop: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}>Click any card to read</p>
               </div>
            </Reveal>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflowX: "hidden", padding: "20px 0" }}>
               <div style={{ display: "flex", alignItems: "center", gap: 24, minWidth: 900 }}>

                  {/* Column 1: Far Left */}
                  <Card src={images[0]} w={184} h={230} />

                  {/* Column 2: Inner Left */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 20, flexShrink: 0 }}>
                     <Card src={images[1]} w={160} h={200} />
                     <Card src={images[2]} w={160} h={200} />
                  </div>

                  {/* Column 3: Center (Largest Focus) */}
                  <Reveal scale={0.95}>
                     <Card src={images[3]} w={336} h={420} />
                  </Reveal>

                  {/* Column 4: Inner Right */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 20, flexShrink: 0 }}>
                     <Card src={images[4]} w={160} h={200} />
                     <Card src={images[5]} w={160} h={200} />
                  </div>

                  {/* Column 5: Far Right */}
                  <Card src={images[6]} w={184} h={230} />

               </div>
            </div>
         </div>
      </section>
   );
}

