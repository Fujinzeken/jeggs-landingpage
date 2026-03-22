"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Animated Counter Hook ───────────────────────────────────── */
function useCounter(end: number, duration: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration * 60); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration, inView]);
  return count;
}

/* ── Data ────────────────────────────────────────────────────── */
const pillars = [
  {
    number: "01",
    title: "Simple",
    body: "No jargon. No confusion. Just clear, step-by-step guidance that makes sense from day one.",
  },
  {
    number: "02",
    title: "Practical",
    body: "Every lesson is built around real songs and real techniques — not abstract theory you'll never use.",
  },
  {
    number: "03",
    title: "Inspiring",
    body: "We don't just teach notes. We ignite the musician inside you and build unshakeable confidence.",
  },
];

export default function StatsAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const years = useCounter(20, 1.5, isInView);
  const students = useCounter(1000, 2, isInView);

  return (
    <>
      {/* ═══════════════ STATS BANNER ═══════════════ */}
      <section ref={ref} className="relative bg-gray-950 overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-brand-teal/10 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-0 sm:divide-x sm:divide-white/10">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0 }}
              className="flex flex-col items-center text-center px-8"
            >
              <span className="text-8xl sm:text-9xl font-black text-white tracking-tighter leading-none">
                {years}
                <span className="text-brand-orange">+</span>
              </span>
              <span className="mt-4 text-sm uppercase tracking-[0.3em] text-white/50 font-bold">
                Years of Excellence
              </span>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col items-center text-center px-8"
            >
              <span className="text-8xl sm:text-9xl font-black text-white tracking-tighter leading-none">
                {students}
                <span className="text-brand-orange">+</span>
              </span>
              <span className="mt-4 text-sm uppercase tracking-[0.3em] text-white/50 font-bold">
                Students Transformed
              </span>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col items-center text-center px-8"
            >
              <span className="text-8xl sm:text-9xl font-black text-white tracking-tighter leading-none">
                100<span className="text-brand-orange">%</span>
              </span>
              <span className="mt-4 text-sm uppercase tracking-[0.3em] text-white/50 font-bold">
                Hands-On Training
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PHILOSOPHY SECTION ═══════════════ */}
      <section className="relative bg-white py-28 sm:py-36 overflow-hidden">
        {/* Faint background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none hidden md:block">
          <span className="text-[10rem] lg:text-[20rem] font-black text-gray-50 leading-none whitespace-nowrap">
            MUSIC
          </span>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-orange">
              Our Philosophy
            </p>
            <h2 className="mt-4 text-5xl sm:text-7xl font-black tracking-tight text-gray-900 leading-[1.05]">
              Music is a powerful language. <br />
              <span className="text-brand-orange italic">Anyone</span> can learn
              it.
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-gray-500 max-w-2xl">
              At Sojeggs Music, we don&apos;t just teach you notes on a page. We
              transform how you hear, feel, and create music — building a skill
              that stays with you for life.
            </p>
          </motion.div>

          {/* Three Pillars */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 border-t border-gray-200">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative border-b md:border-b-0 md:border-r last:border-r-0 border-gray-200 py-12 px-8 hover:bg-gray-50 transition-colors duration-500"
              >
                <span className="text-6xl font-black text-gray-100 group-hover:text-brand-orange/20 transition-colors duration-500">
                  {pillar.number}
                </span>
                <h3 className="mt-4 text-2xl font-black text-gray-900 group-hover:text-brand-orange transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-500">
                  {pillar.body}
                </p>
                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-orange group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Pull Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 relative rounded-3xl bg-gradient-to-br from-brand-orange to-amber-500 p-12 sm:p-16 text-white overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />
            <blockquote className="relative text-3xl sm:text-4xl font-black leading-snug max-w-4xl italic">
              &ldquo;My mission is to help students remove fear from learning
              music and replace it with confidence and creativity.&rdquo;
            </blockquote>
            <p className="relative mt-6 text-white/80 font-bold uppercase tracking-widest text-sm">
              — Jegede Samuel Olayinka, Founder
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
