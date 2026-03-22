"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    image: "/images/panagiotis-falcos-GgjNItqNiok-unsplash.jpg",
    tag: "Online Piano Training",
    heading: "Master Piano & Music Production in 30 Days!",
    subtext:
      "Start playing your first song within 30 days using simple practical techniques. Professional training for all levels.",
  },
  {
    image: "/images/dylan-mcleod-VRdZBLqnoMU-unsplash.jpg",
    tag: "Professional Production",
    heading: "Create Professional Music with Expert Guidance.",
    subtext:
      "From basic chords to advanced studio recording techniques. Learn the DAWs used by pros like Logic and FL Studio.",
  },
  {
    image: "/images/tanner-boriack-hxnBkzz9iL4-unsplash.jpg",
    tag: "Expert Mentorship",
    heading: "Over 20 Years of Musical Excellence.",
    subtext:
      "Join Samuel Jegede Olayinka and replace fear with confidence and creativity. Real playing, real songs, real understanding.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={SLIDES[index].image}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={SLIDES[index].image}
            alt="Music Training Background"
            fill
            className="object-cover transition-transform duration-7000 ease-linear"
            priority
          />
          {/* Slick Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 pt-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-orange backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
                {SLIDES[index].tag}
              </div>

              <h1 className="mt-6 text-5xl font-black leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl">
                {SLIDES[index].heading.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={
                      word.toLowerCase().includes("30") ||
                      word.toLowerCase().includes("playing") ||
                      word.toLowerCase().includes("excellence")
                        ? "text-brand-orange"
                        : ""
                    }
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-200/90 sm:text-xl">
                {SLIDES[index].subtext}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-brand-orange px-8 py-4 text-base font-bold text-white shadow-2xl shadow-brand-orange/20 transition-all hover:bg-brand-orange/90 cursor-pointer"
                >
                  Book a Trial Session ↗
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-xl transition-all hover:bg-white/15 cursor-pointer"
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Indicators - Center on mobile, Right on desktop */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:bottom-12 sm:right-12 flex items-end gap-3 sm:gap-4 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group relative h-8 w-12 sm:h-12 sm:w-20 cursor-pointer overflow-hidden"
            aria-label={`Go to slide ${i + 1}`}
          >
            {/* Background Line */}
            <div
              className={`absolute bottom-0 h-1 w-full rounded-full transition-colors duration-300 ${i === index ? "bg-transparent" : "bg-white/20 hover:bg-white/40"}`}
            />

            {/* Active Progress Bar */}
            {i === index && (
              <motion.div
                layoutId="activeBar"
                className="absolute bottom-0 h-1 w-full bg-brand-orange"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 7, ease: "linear" }}
              />
            )}

            {/* Slide Number - Hidden on mobile */}
            <span
              className={`absolute bottom-4 left-0 text-xs font-bold transition-all duration-300 hidden sm:block ${i === index ? "text-brand-orange translate-y-0 opacity-100" : "text-white/40 translate-y-2 opacity-0 group-hover:opacity-100"}`}
            >
              0{i + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Decorative vertical scroll bar - Adjusted position to avoid overlap */}
      <div className="absolute bottom-32 right-12 hidden lg:flex flex-col items-center gap-4 text-white/40 z-20">
        <span className="text-[10px] uppercase tracking-[0.4em] [writing-mode:vertical-rl] font-bold">
          Scroll Down
        </span>
        <div className="h-24 w-px bg-linear-to-b from-white/40 via-white/10 to-transparent" />
      </div>
    </section>
  );
}
