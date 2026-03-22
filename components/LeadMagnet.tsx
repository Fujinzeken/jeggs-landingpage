"use client";

import { motion } from "framer-motion";

export default function LeadMagnet() {
  return (
    <section className="relative py-28 sm:py-36 bg-gray-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-teal/10 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4" />
      </div>

      {/* Musical Note Pattern (subtle) */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-20 text-8xl rotate-12">♪</div>
        <div className="absolute top-40 right-32 text-6xl -rotate-6">♫</div>
        <div className="absolute bottom-32 left-1/3 text-7xl rotate-45">♬</div>
        <div className="absolute bottom-20 right-20 text-9xl -rotate-12">
          🎵
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-brand-orange backdrop-blur-sm">
            📘 Free Resource
          </span>

          <h2 className="mt-8 text-5xl sm:text-7xl font-black tracking-tight text-white leading-tight">
            Start playing <span className="text-brand-orange">today.</span>
            <br />
            For free.
          </h2>

          <p className="mt-6 text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
            Download our free guide —{" "}
            <strong className="text-white/80">
              &ldquo;Top 5 Piano Scales Every Beginner Must Know&rdquo;
            </strong>{" "}
            — and take your first step toward musical confidence, even if
            you&apos;ve never touched a piano.
          </p>

          {/* Email Form */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-full bg-white/10 border border-white/10 px-8 py-5 text-base text-white placeholder:text-white/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto whitespace-nowrap rounded-full bg-brand-orange px-10 py-5 text-base font-bold text-white shadow-2xl shadow-brand-orange/30 hover:bg-brand-orange/90 transition-all cursor-pointer"
            >
              Get Free Guide →
            </motion.button>
          </div>

          <p className="mt-6 text-sm text-white/30">
            No spam. Just music. Unsubscribe anytime.
          </p>
        </motion.div>

        {/* Alternative Offer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <div className="h-px w-16 bg-white/10" />
          <span className="text-sm text-white/30 uppercase tracking-widest font-bold">
            Or
          </span>
          <div className="h-px w-16 bg-white/10" />
        </motion.div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 inline-flex items-center gap-3 text-brand-orange hover:text-white transition-colors duration-300 font-bold text-lg cursor-pointer"
        >
          🎥 Watch a Free 10-Minute Piano Starter Lesson
          <span>→</span>
        </motion.a>
      </div>
    </section>
  );
}
