"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

interface Concern {
  id: string;
  title: string;
  image: string;
  slug: string;
}

const concerns: Concern[] = [
  {
    id: "1",
    title: "Scalp Coverage",
    image: "/images/customers/EMINENCE_20240510_111312_0000.png",
    slug: "scalp-coverage",
  },
  {
    id: "2",
    title: "Volume & Length",
    image: "/images/customers/EMINENCE_20240531_121345_0000.png",
    slug: "volume-length",
  },
  {
    id: "3",
    title: "Hair Fillers",
    image: "/images/customers/EMINENCE_20240630_174903_0000.png",
    slug: "hair-fillers",
  },
  {
    id: "4",
    title: "Receding Hairline",
    image: "/images/customers/EMINENCE_20240630_175931_0000.png",
    slug: "receding-hairline",
  },
];

export default function MosaicGrid() {
  return (
    <section className="bg-background min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-t border-accent/10">
      <div className="mx-auto max-w-7xl w-full">
        <div className="mb-12 sm:mb-16 text-center">
          <Reveal delay={0.2} y={20} width="100%">
            <h4 className="text-xs sm:text-[11px] font-bold uppercase tracking-[0.5em] text-accent mb-4 sm:mb-6">
              Personalized Hair Solutions
            </h4>
          </Reveal>
          <Reveal delay={0.4} y={30} width="100%">
            <h2 className="text-2xl sm:text-4xl lg:text-7xl font-playfair text-charcoal font-medium tracking-tight">
              Choose Your <span className="italic">Concern</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {concerns.map((concern, index) => (
            <motion.div
              key={concern.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <Link
                href={`/problem-solution?concern=${concern.slug}`}
                className="mosaic-item relative h-96 sm:h-[450px] lg:h-[520px] border border-accent/10 block overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 rounded-sm group"
              >
              <Image
                src={concern.image}
                alt={concern.title}
                fill
                className="object-cover transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <h3 className="text-lg sm:text-2xl font-playfair text-white mb-4 sm:mb-6">
                  {concern.title}
                </h3>
                <button className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] py-2.5 sm:py-3.5 px-6 sm:px-8 bg-white text-black hover:bg-accent hover:text-white transition-all duration-500 border border-white">
                  View Solution
                </button>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
