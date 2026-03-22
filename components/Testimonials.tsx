"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Adewale O.",
    role: "Beginner Student",
    quote:
      "I couldn't play a single chord before joining Sojeggs Music. Within 3 weeks, I was playing worship songs in church. Samuel's teaching style makes everything click.",
    avatar: "AO",
    rating: 5,
  },
  {
    name: "Chidera N.",
    role: "Intermediate Student",
    quote:
      "The way Samuel teaches chord inversions and playing by ear changed everything for me. I went from reading sheet music to improvising on the spot.",
    avatar: "CN",
    rating: 5,
  },
  {
    name: "Funke A.",
    role: "Music Production Student",
    quote:
      "I always wanted to produce my own music but the software felt overwhelming. Samuel walked me through FL Studio step by step — now I'm recording my own tracks.",
    avatar: "FA",
    rating: 5,
  },
  {
    name: "Tunde M.",
    role: "Advanced / Mentorship",
    quote:
      "The mentorship programme pushed me beyond what I thought was possible. Studio sessions, jazz harmony, improvisation — Samuel is the real deal.",
    avatar: "TM",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 sm:py-36 bg-brand-cream/40 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-orange">
            Student Stories
          </p>
          <h2 className="mt-4 text-5xl sm:text-6xl font-black tracking-tight text-gray-900">
            Real students.{" "}
            <span className="text-brand-orange">Real results.</span>
          </h2>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed">
            Don&apos;t just take our word for it — hear from students who
            transformed their musical journey with Sojeggs Music.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl bg-white p-10 shadow-sm hover:shadow-xl border border-gray-100 hover:border-brand-orange/20 transition-all duration-500"
            >
              {/* Quote Icon */}
              <svg
                className="absolute top-8 right-8 h-10 w-10 text-brand-orange/10 group-hover:text-brand-orange/20 transition-colors duration-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg
                    key={j}
                    className="h-5 w-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-6 text-lg leading-relaxed text-gray-600 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-orange to-amber-400 flex items-center justify-center text-white font-black text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
