"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const levels = [
  {
    id: "beginner",
    label: "Beginner",
    tagline: "Start from zero. Play your first song in 30 days.",
    topics: [
      "Piano basics and keyboard layout",
      "Finger exercises and hand coordination",
      "Major and minor scales",
      "Basic chords and chord progressions",
      "Playing simple songs from scratch",
    ],
    accent: "from-brand-orange to-amber-400",
    icon: "🌱",
  },
  {
    id: "intermediate",
    label: "Intermediate",
    tagline: "Level up. Play by ear and arrange your own songs.",
    topics: [
      "Advanced chord structures",
      "Chord inversions and voicings",
      "Playing by ear techniques",
      "Worship and gospel piano techniques",
      "Song arrangement and interpretation",
    ],
    accent: "from-brand-teal to-emerald-400",
    icon: "🎵",
  },
  {
    id: "advanced",
    label: "Advanced",
    tagline: "Go pro. Record, produce, and perform with confidence.",
    topics: [
      "Jazz and gospel harmony",
      "Improvisation and creative expression",
      "Studio recording techniques",
      "Music production basics (Logic, FL Studio, Cubase)",
      "Live performance and stage skills",
    ],
    accent: "from-purple-500 to-violet-400",
    icon: "🚀",
  },
];

const formats = [
  {
    icon: "💻",
    title: "1-on-1 Online Lessons",
    desc: "Personal coaching via Zoom or Google Meet, tailored to your pace.",
  },
  {
    icon: "👥",
    title: "Group Masterclasses",
    desc: "Learn alongside other students in focused, interactive sessions.",
  },
  {
    icon: "🎬",
    title: "Pre-recorded Courses",
    desc: "Learn at your own speed with on-demand video lessons on Selar.",
  },
  {
    icon: "🎛️",
    title: "Practical Studio Training",
    desc: "Hands-on experience with real studio equipment and software.",
  },
];

export default function Curriculum() {
  const [activeLevel, setActiveLevel] = useState(0);

  return (
    <section
      id="courses"
      className="relative py-28 sm:py-36 bg-gray-50 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-orange">
            What You&apos;ll Learn
          </p>
          <h2 className="mt-4 text-5xl sm:text-6xl font-black tracking-tight text-gray-900">
            A curriculum built for{" "}
            <span className="text-brand-orange">real musicians.</span>
          </h2>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed">
            From your first chord to your first studio recording — every lesson
            is designed to build confidence, skill, and musicality.
          </p>
        </motion.div>

        {/* Level Tabs */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex rounded-2xl bg-white p-2 shadow-lg shadow-gray-200/50">
            {levels.map((level, idx) => (
              <button
                key={level.id}
                onClick={() => setActiveLevel(idx)}
                className={`relative rounded-xl px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeLevel === idx
                    ? "bg-gray-900 text-white shadow-xl"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <span className="mr-2">{level.icon}</span>
                {level.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Level Content */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLevel}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left: Topic List */}
              <div>
                <p className="text-lg font-bold text-gray-400 italic">
                  {levels[activeLevel].tagline}
                </p>
                <ul className="mt-8 space-y-5">
                  {levels[activeLevel].topics.map((topic, i) => (
                    <motion.li
                      key={topic}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-start gap-4 group"
                    >
                      <span
                        className={`flex-none mt-1 h-6 w-6 rounded-full bg-gradient-to-br ${levels[activeLevel].accent} flex items-center justify-center`}
                      >
                        <svg
                          className="h-3.5 w-3.5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                        {topic}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right: Visual Card */}
              <div
                className={`relative rounded-3xl bg-gradient-to-br ${levels[activeLevel].accent} p-12 sm:p-16 text-white overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />

                <span className="text-7xl">{levels[activeLevel].icon}</span>
                <h3 className="mt-6 text-4xl font-black">
                  {levels[activeLevel].label} Level
                </h3>
                <p className="mt-4 text-xl text-white/80 leading-relaxed">
                  {levels[activeLevel].tagline}
                </p>
                <p className="mt-2 text-sm text-white/50 font-bold uppercase tracking-wider">
                  {levels[activeLevel].topics.length} core modules
                </p>
                <button className="mt-8 rounded-full bg-white px-8 py-4 text-sm font-bold text-gray-900 hover:bg-white/90 transition-colors cursor-pointer shadow-xl">
                  Get Started →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Lesson Formats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28"
        >
          <h3 className="text-center text-3xl sm:text-4xl font-black text-gray-900">
            Learn <span className="text-brand-orange">your</span> way.
          </h3>
          <p className="mt-4 text-center text-lg text-gray-500 max-w-xl mx-auto">
            Choose the format that fits your lifestyle — from live coaching to
            self-paced courses.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((fmt, i) => (
              <motion.div
                key={fmt.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-brand-orange/20 transition-all duration-500"
              >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300 inline-block">
                  {fmt.icon}
                </span>
                <h4 className="mt-5 text-lg font-bold text-gray-900 group-hover:text-brand-orange transition-colors duration-300">
                  {fmt.title}
                </h4>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {fmt.desc}
                </p>
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
