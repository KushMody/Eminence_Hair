export const BRAND = {
  name: "Eminence Hair",
  email: "eminencesalon0@gmail.com",
  phone: "+91 87992 88809",
  address: "GF 7 Shrinath Complex, Nr Jio Petrol Pump,\nHigh Tension Road, Subhanpura,\nVadodara",
  whatsapp: "918799288809",
  instagram: "@eminencehair",
};

export const TIME_SLOTS = [
  { id: "morning", label: "10 AM – 12 PM", sub: "Morning" },
  { id: "noon", label: "12 PM – 2 PM", sub: "Noon" },
  { id: "afternoon", label: "2 PM – 4 PM", sub: "Afternoon" },
  { id: "early-evening", label: "4 PM – 6 PM", sub: "Early Evening" },
  { id: "evening", label: "6 PM – 8 PM", sub: "Evening" },
] as const;

import logo1 from "@/images/logos/1.png";
import logo2 from "@/images/logos/2.png";
import logo3 from "@/images/logos/3.png";
import logo4 from "@/images/logos/4.png";
import logo5 from "@/images/logos/5.png";
import logo6 from "@/images/logos/6.png";

export const SERVICES = [
  { id: "custom-wigs", logo: logo1, icon: "◈", title: "Custom Wigs", subtitle: "Full Head · Half Head · V-Part", desc: "A curated selection of high-quality wigs crafted to match your natural look. Every wig is a work of art — fitted and styled by our expert team.", badge: "Signature" },
  { id: "transformations", logo: logo2, icon: "✦", title: "Hair Transformations", subtitle: "Extensions · Toppers · Patches", desc: "Immediate, visible transformation. We seamlessly blend premium hair with your natural hair for a result that surprises even you.", badge: "Most Popular" },
  { id: "problem-solutions", logo: logo3, icon: "❋", title: "Problem Solutions", subtitle: "Thinning · Bald Patches · Hair Loss", desc: "Expert consultations and immediate solutions for hair loss, thinning crowns, receding hairlines, and post-medical hair concerns.", badge: "" },
  { id: "styling", logo: logo4, icon: "◉", title: "Expert Styling", subtitle: "Wash · Set · Blowout", desc: "Professional wig styling and finishing services. Walk in with your wig or try one of ours — walk out looking extraordinary.", badge: "" },
  { id: "consultation", logo: logo5, icon: "◇", title: "Free Consultation", subtitle: "Personalised Assessment", desc: "Not sure what you need? Book a free one-on-one consultation. Our team will assess your concerns and recommend the best solution.", badge: "Free" },
  { id: "bridal", logo: logo6, icon: "✿", title: "Bridal & Occasions", subtitle: "Bridal · Party · Events", desc: "Look breathtaking on your most special days. Complete bridal hair experiences from trial fittings to the day-of glamour.", badge: "Limited Slots" },
];

export const WIG_SOLUTIONS = [
  { id: "overview", title: "Core Technology", sub: "Types of Non-Surgical Systems", img: "/images/EMINENCE/32.png" },
  { id: "full-lace", title: "Full Lace Luxury", sub: "Complete Coverage & Styling", img: "/images/EMINENCE/34.png" },
  { id: "front-lace", title: "Front Lace System", sub: "Realistic & Seamless Hairline", img: "/images/EMINENCE/35.png" },
  { id: "mono-base", title: "Mono Base System", sub: "Durable & Natural Growth Look", img: "/images/EMINENCE/37.png" },
  { id: "poly-skin", title: "Poly Skin Base", sub: "Clean, Undetectable Scalp Finish", img: "/images/EMINENCE/38.png" },
];

export const TESTIMONIALS = [
  { name: "Rajesh Solanki", location: "Vadodara", service: "Custom Wig", text: "I had been struggling with hair thinning for years and was too embarrassed to attend meetings. Eminence Hair gave me back my confidence. The solution looks so natural — nobody can tell!", img: "/images/customers/EMINENCE_20240510_111312_0000.png", rating: 5 },
  { name: "Amit Panchal", location: "Vadodara", service: "Hair Transformation", text: "The team understood exactly the look I wanted. My hair transformation was done so professionally — my family couldn't believe how much younger I looked. Truly life-changing experience.", img: "/images/customers/EMINENCE_20240531_121345_0000.png", rating: 5 },
  { name: "Vikram Singh", location: "Baroda", service: "Problem Solution", text: "After losing my hair, I felt I lost my personality. Eminence Hair not only solved my concern but made me feel so dignified and cared for throughout the whole process. Truly exceptional service.", img: "/images/customers/EMINENCE_20240630_174903_0000.png", rating: 5 },
  { name: "Sameer Dave", location: "Vadodara", service: "Wig Maintenance", text: "The quality of work here is unmatched. My hair patch stays flawless even after long days at work. Everyone asks me the secret to my hair — I've already referred many colleagues!", img: "/images/customers/EMINENCE_20240630_175931_0000.png", rating: 5 },
  { name: "Arjun Rawat", location: "Vadodara", service: "Free Consultation", text: "Just the consultation alone changed my perspective. The team was warm, patient and knowledgeable. They never pushed me to buy anything — just genuinely wanted to find the best fit for me.", img: "/images/customers/EMINENCE_20240510_111312_0000.png", rating: 5 },
];

export const STATS = [
  { value: "2000+", label: "Happy Clients" },
  { value: "5 ★", label: "Average Rating" },
  { value: "100%", label: "Human Hair" },
  { value: "Same Day", label: "Solutions Available" },
];

export const VIDEOS_TRANSFORM = [
  "/Videos/VID-20240510-WA0028.mp4",
  "/Videos/VN20240606_130757.mp4",
  "/Videos/WhatsApp-Video-2024-09-09-at-16.38.18_4cb68b69.mp4",
  "/Videos/VID-20240724-WA0020.mp4",
];
export const TRANSFORM_PAIRS = [
  { 
    before: "/images/Transformations/before after-2.png", 
    after: "/images/Transformations/before after-3.png", 
    title: "Crown Transformation", 
    desc: "Complete restoration of the crown area with a seamless hair system." 
  },
  { 
    before: "/images/Transformations/11.png", 
    after: "/images/Transformations/12.png", 
    title: "Frontal Hairline", 
    desc: "Redefining the frontal hairline for a more youthful and natural look." 
  },
  { 
    before: "/images/Transformations/before after 2.png", 
    after: "/images/Transformations/before after 3.png", 
    title: "Volume Enhancement", 
    desc: "Adding significant volume and density to thinning hair." 
  },
];

export const TRANSFORM_COMPOSITES = [
  "/images/Transformations/before after post -1.png",
  "/images/Transformations/before after 1.png",
  "/images/Transformations/10.png",
];

export const IMAGES_BEFORE_AFTER = [
  "/images/Transformations/before after post -1.png",
  "/images/Transformations/before after-2.png",
  "/images/Transformations/before after-3.png",
];
export const VIDEOS_FEEDBACK = [
  "/Videos/videoplayback-1.mp4",
  "/Videos/videoplayback-1-1.mp4",
  "/Videos/VID-20240724-WA0021.mp4",
];
export const IMAGES_STORY = [
  "/images/EMINENCE/story behind eminence carousal-1_01.jpg",
  "/images/EMINENCE/story behind eminence carousal-1_2.jpg",
  "/images/EMINENCE/mission and vision carousal-2_01.jpg",
  "/images/EMINENCE/mission and vision carousal-2_02.jpg"
];
export const IMAGES_FAQ = [
  "/images/EMINENCE/F A Q POST 1.jpg",
  "/images/EMINENCE/F A Q POST 2.jpg",
  "/images/EMINENCE/F A Q POST 3.jpg",
  "/images/EMINENCE/F A Q POST 4.jpg",
  "/images/EMINENCE/F A Q POST 5.jpg",
];
export const IMAGES_UNUSED = [
  "/images/11.png",
  "/images/13.png",
  "/images/14.png",
  "/images/19.png",
  "/images/23.png",
  "/images/24.png",
  "/images/26.png",
];



export const C = { cream: "#FAF6F1", gold: "#C9A96E", goldDk: "#B8924A", goldLt: "#E8D5B0", dark: "#130B04", brown: "#2E1A0E", mid: "#5C3D2A", white: "#FFFFFF", off: "#F5EFE8" };
export const serif = "'Playfair Display', Georgia, serif";
export const body = "'Cormorant Garamond', Georgia, serif";
