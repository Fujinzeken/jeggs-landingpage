"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Self-Paced Course",
    price: "₦10,000",
    period: "one-time",
    description:
      "Pre-recorded video lessons you can watch anytime, anywhere. Perfect for getting started at your own speed.",
    features: [
      "Full access to beginner video modules",
      "Watch at your own pace",
      "Downloadable practice sheets",
      "Lifetime access to content",
    ],
    cta: "Get the Course",
    href: "#selar", // Will be replaced with real Selar link
    highlighted: false,
    accent: "border-gray-200",
    badge: null,
  },
  {
    name: "Live Lessons",
    price: "₦15,000",
    period: "per session",
    description:
      "Personal 1-on-1 coaching via Zoom or Google Meet. Get real-time feedback and accelerate your progress.",
    features: [
      "1-on-1 live sessions (Zoom / Google Meet)",
      "Personalized lesson plans",
      "Real-time feedback & correction",
      "Monthly plans available (₦60K–90K/4 sessions)",
      "Flexible scheduling (Mon–Sat)",
    ],
    cta: "Book a Session",
    href: "#contact",
    highlighted: true,
    accent: "border-brand-orange",
    badge: "Most Popular",
  },
  {
    name: "Premium Mentorship",
    price: "₦150,000",
    period: "and above",
    description:
      "Advanced training, studio production sessions, and ongoing mentorship to take you to professional level.",
    features: [
      "Everything in Live Lessons",
      "Advanced harmony & improvisation",
      "Studio recording sessions",
      "Music production training (DAWs)",
      "Performance coaching & career guidance",
    ],
    cta: "Apply for Mentorship",
    href: "#contact",
    highlighted: false,
    accent: "border-gray-200",
    badge: "Premium",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-28 sm:py-36 bg-white overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />

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
            Investment in Your Future
          </p>
          <h2 className="mt-4 text-5xl sm:text-6xl font-black tracking-tight text-gray-900">
            Choose your <span className="text-brand-orange">path.</span>
          </h2>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed">
            Whether you want to learn on your own or get hands-on mentorship,
            there&apos;s a plan that fits.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-3xl bg-white border-2 ${plan.accent} p-10 flex flex-col ${
                plan.highlighted
                  ? "shadow-2xl shadow-brand-orange/10 scale-[1.02] lg:scale-105"
                  : "shadow-sm hover:shadow-xl"
              } transition-all duration-500`}
            >
              {/* Badge */}
              {plan.badge && (
                <span
                  className={`absolute -top-4 left-8 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white ${
                    plan.highlighted ? "bg-brand-orange" : "bg-gray-900"
                  }`}
                >
                  {plan.badge}
                </span>
              )}

              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-black text-gray-900 tracking-tight">
                  {plan.price}
                </span>
                <span className="text-base text-gray-400 font-medium">
                  {plan.period}
                </span>
              </div>
              <p className="mt-4 text-base text-gray-500 leading-relaxed">
                {plan.description}
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-gray-100" />

              {/* Features */}
              <ul className="space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="flex-none h-5 w-5 text-brand-orange mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.href}
                className={`mt-10 block w-full rounded-full py-4 text-center text-base font-bold transition-all duration-300 cursor-pointer ${
                  plan.highlighted
                    ? "bg-brand-orange text-white hover:bg-brand-orange/90 shadow-lg shadow-brand-orange/20"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Requirements Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-sm text-gray-400 max-w-xl mx-auto"
        >
          <strong className="text-gray-600">Requirements:</strong> A piano or
          MIDI keyboard, a laptop, and an internet connection. For production
          classes, a DAW (Logic, FL Studio, or Cubase) is recommended.
        </motion.p>
      </div>
    </section>
  );
}
