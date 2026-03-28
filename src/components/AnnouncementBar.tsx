"use client";

export default function AnnouncementBar() {
  const announcements = [
    "Feel the transformation",
    "Where elegance meets excellence",
    "Immediate Solution for Hair Loss",
    "Call us: +91 87992 88809",
    "Location: Subhanpura, Vadodara",
    "Premium Hair Units & Toppers",
  ];

  return (
    <div className="w-full overflow-hidden bg-charcoal py-2 sm:py-2.5 text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-accent/90 border-b border-accent/20">
      <div className="animate-marquee whitespace-nowrap">
        {/* Duplicate content to ensure seamless loop */}
        {[...announcements, ...announcements].map((text, index) => (
          <span key={index} className="mx-4 sm:mx-8">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
