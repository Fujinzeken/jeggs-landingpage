"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const timeline = [
  {
    year: "2004",
    event: "Began performing and teaching music professionally.",
  },
  {
    year: "2012",
    event: "Joined Tenstrings Music Institute — one of Nigeria's finest.",
  },
  {
    year: "2020",
    event: "Launched Sojeggs Music for online piano & production training.",
  },
  {
    year: "2025",
    event: "Expanded to global 1-on-1 mentorship & masterclasses.",
  },
];

const expertise = [
  { icon: "🎹", label: "Piano" },
  { icon: "🎧", label: "Production" },
  { icon: "🎼", label: "Arrangement" },
  { icon: "🎤", label: "Vocal Coaching" },
  { icon: "⛪", label: "Choir Training" },
  { icon: "🎵", label: "Live Performance" },
];

export default function AboutFounder() {
  return (
    <section className="relative overflow-hidden">
      {/* ═══════════════ SPLIT SCREEN ═══════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left: Immersive Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative bg-gray-900 overflow-hidden"
        >
          <Image
            src="/hero-instructor.png"
            alt="Jegede Samuel Olayinka — Founder of Sojeggs Music"
            fill
            className="object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-950/80 hidden lg:block" />

          {/* Floating Name Card */}
          <div className="absolute bottom-12 left-8 right-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-brand-orange text-xs font-bold uppercase tracking-[0.4em]">
                Founder & Lead Instructor
              </p>
              <h3 className="mt-2 text-4xl sm:text-5xl font-black text-white leading-tight">
                Jegede Samuel
                <br />
                <span className="text-brand-orange">Olayinka</span>
              </h3>

              {/* Expertise Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {expertise.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 hover:bg-brand-orange/20 hover:border-brand-orange/30 transition-all duration-300 cursor-default"
                  >
                    {item.icon} {item.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Story & Timeline */}
        <div className="relative bg-gray-950 text-white px-8 py-20 sm:px-16 lg:px-20 flex flex-col justify-center">
          {/* Decorative accent */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-orange via-brand-orange/20 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-teal">
              The Journey
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-black leading-tight">
              From Passion to <br />
              <span className="bg-gradient-to-r from-brand-orange to-amber-400 bg-clip-text text-transparent">
                Purpose.
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-lg">
              Over two decades of performing, teaching, and mentoring have
              shaped a simple belief: music isn&apos;t reserved for the
              &ldquo;talented&rdquo; — it&apos;s for anyone willing to learn.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="mt-14 space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex gap-6 py-5 border-b border-white/5 hover:border-brand-orange/30 transition-colors duration-500"
              >
                <span className="text-3xl font-black text-white/10 group-hover:text-brand-orange transition-colors duration-500 tabular-nums min-w-[5rem]">
                  {item.year}
                </span>
                <p className="text-white/50 group-hover:text-white/90 transition-colors duration-500 text-base leading-relaxed pt-1">
                  {item.event}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#courses"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-orange hover:text-white transition-colors duration-300 cursor-pointer group"
          >
            <span>Start Your Journey</span>
            <span className="h-px w-8 bg-brand-orange group-hover:w-16 transition-all duration-500" />
            <span>→</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
