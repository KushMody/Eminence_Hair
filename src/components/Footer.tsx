'use client';

import React from 'react';
import Link from 'next/link';
import { C, BRAND, body, serif } from './data';
import { Reveal } from './ui';

export default function Footer() {
  return (
    <footer className="md-py-60 md-px-20" style={{ minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", background: C.dark, padding: "80px 40px 32px", borderTop: `1px solid rgba(201,169,110,.16)` }}>
      <div style={{ maxWidth: 1380, margin: "0 auto" }}>
        <Reveal>
          <div className="md-col" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 48, marginBottom: 60 }}>
            <div>
              <img src="/images/cropped-EMINENCE-LOGO-BLACK-300x100.png" alt="Logo" style={{ height: 50, filter: "invert(1)", marginBottom: 20 }} />
              <div style={{ fontFamily: body, fontSize: 17, color: "rgba(255,255,255,.5)", lineHeight: 1.9, maxWidth: 320 }}>
                {BRAND.email}<br />{BRAND.phone}<br />{BRAND.address}
              </div>
            </div>

            <div>
              <div style={{ fontFamily: body, fontSize: 13, fontWeight: 700, letterSpacing: 3, color: C.gold, textTransform: "uppercase", marginBottom: 24 }}>Quick Links</div>
              {[
                ["Services", "/services"],
                ["Transformations", "/transformations"],
                ["Testimonials", "/testimonials"],
                ["About Us", "/about"],
                ["Book Appointment", "/contact"]
              ].map(([l, path]) => (
                <Link key={path} href={path} style={{ display: "block", textDecoration: "none", textAlign: "left", fontFamily: body, fontSize: 17, fontWeight: 600, color: "rgba(255,255,255,.5)", padding: "6px 0", letterSpacing: .5, background: "transparent", border: "none", transition: "color .3s" }}>
                  {l}
                </Link>
              ))}
            </div>

            <div>
              <div style={{ fontFamily: body, fontSize: 13, fontWeight: 700, letterSpacing: 3, color: C.gold, textTransform: "uppercase", marginBottom: 24 }}>Connect</div>
              <div style={{ fontFamily: body, fontSize: 17, color: "rgba(255,255,255,.5)", marginBottom: 8 }}>{BRAND.instagram}</div>
              <div style={{ fontFamily: body, fontSize: 17, color: "rgba(255,255,255,.5)", marginBottom: 24 }}>Facebook · Youtube</div>
              <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noreferrer"
                style={{ display: "inline-block", background: `linear-gradient(135deg,${C.gold},${C.goldDk})`, borderRadius: 4, padding: "12px 26px", textDecoration: "none", fontFamily: body, fontSize: 13, fontWeight: 700, letterSpacing: 2.5, color: C.white, textTransform: "uppercase", boxShadow: "0 10px 20px rgba(201,169,110,.25)" }}>
                WhatsApp Us
              </a>
            </div>
          </div>
        </Reveal>

        <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: 28, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: body, fontSize: 14, color: "rgba(255,255,255,.3)" }}>© 2026 Eminence Hair. All rights reserved.</span>
          <span style={{ fontFamily: body, fontSize: 14, color: "rgba(255,255,255,.3)" }}>Designed for Elegance</span>
        </div>
      </div>
    </footer>
  );
}
