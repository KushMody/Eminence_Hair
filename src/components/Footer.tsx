"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const links = {
    services: [
      { name: "Gents Hair Units", href: "/problem-solution" },
      { name: "Ladies Hair Toppers", href: "/problem-solution" },
      { name: "High-Quality Wigs", href: "/problem-solution" },
      { name: "Expert Styling", href: "/problem-solution" },
    ],
    company: [
      { name: "About Us", href: "/about-us" },
      { name: "Transformations", href: "/hair-transformation" },
      { name: "Customer Feedback", href: "/customer-solution" },
      { name: "Contact Us", href: "/contact-us" },
    ],
    social: [
      { name: "Instagram", href: "https://www.instagram.com/eminence_hair_/?hl=en" },
      { name: "Facebook", href: "#" },
      { name: "YouTube", href: "#" },
      { name: "WhatsApp", href: "https://wa.me/918799288809" },
    ],
  };

  return (
    <footer className="bg-charcoal text-white py-16 sm:py-24 border-t border-accent/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-8 mb-16 sm:mb-20">
          {/* Brand Col */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <Image
              src="/images/cropped-EMINENCE-LOGO-BLACK-300x100.png"
              alt="Eminence Hair Logo"
              width={160}
              height={53}
              className="invert brightness-200 object-contain"
            />
            <div className="space-y-4">
              <p className="text-white/60 text-xs sm:text-[13px] leading-relaxed italic">
                "Feel the transformation"
              </p>
              <p className="text-white/40 text-[11px] sm:text-[12px] leading-relaxed">
                GF 7 Shrinath Complex, Nr Jio Petrol Pump, High Tension Road, Subhanpura, Vadodara.
              </p>
              <p className="text-accent text-xs sm:text-[13px] font-medium">+91 87992 88809</p>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] mb-6 sm:mb-8">Solutions</h4>
            <ul className="flex flex-col gap-3 sm:gap-4">
              {links.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/40 hover:text-white transition-colors text-xs sm:text-[13px]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] mb-6 sm:mb-8">Eminence</h4>
            <ul className="flex flex-col gap-3 sm:gap-4">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/40 hover:text-white transition-colors text-xs sm:text-[13px]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Col */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] mb-6 sm:mb-8">Follow Us</h4>
            <ul className="flex flex-col gap-3 sm:gap-4">
              {links.social.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/40 hover:text-white transition-colors text-xs sm:text-[13px]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-white/20 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-center sm:text-left">
            © {new Date().getFullYear()} Eminence Hair. Designed for Excellence.
          </p>
          <div className="flex gap-8 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/20">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
