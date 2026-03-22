"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/SO_JEGGS",
    handle: "@SO_JEGGS",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@Sojeggsmusic",
    handle: "Sojeggsmusic",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/Sojeggsmusic",
    handle: "Sojeggsmusic",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const footerLinks = [
  {
    title: "Learn",
    links: [
      { label: "Courses", href: "#courses" },
      { label: "Curriculum", href: "#courses" },
      { label: "Pricing", href: "#pricing" },
      { label: "Free Resources", href: "#lead-magnet" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Philosophy", href: "#philosophy" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "#contact" },
      { label: "FAQ", href: "#faq" },
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-gray-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-orange/5 rounded-full blur-[150px] -translate-y-1/2" />

      {/* Contact Band */}
      <div className="relative border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Ready to start your <br />
                <span className="text-brand-orange">musical journey?</span>
              </h2>
              <p className="mt-4 text-lg text-white/40 max-w-md">
                Get in touch and let&apos;s find the perfect plan for your
                goals. Classes available Monday – Saturday, flexible scheduling.
              </p>

              {/* Polished Contact Cards */}
              <div className="mt-10 space-y-4">
                <a
                  href="tel:08033920224"
                  className="group flex items-center gap-5 rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 hover:border-brand-orange/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex-none h-12 w-12 rounded-xl bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-300">
                    <svg
                      className="h-5 w-5 text-brand-orange group-hover:text-white transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                      Call Us
                    </p>
                    <p className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                      0803 392 0224
                    </p>
                  </div>
                  <span className="ml-auto text-white/10 group-hover:text-brand-orange transition-colors">
                    →
                  </span>
                </a>

                <a
                  href="mailto:sojeggs101@gmail.com"
                  className="group flex items-center gap-5 rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 hover:border-brand-orange/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex-none h-12 w-12 rounded-xl bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-300">
                    <svg
                      className="h-5 w-5 text-brand-orange group-hover:text-white transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                      Email Us
                    </p>
                    <p className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                      sojeggs101@gmail.com
                    </p>
                  </div>
                  <span className="ml-auto text-white/10 group-hover:text-brand-orange transition-colors">
                    →
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Right: Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/30">
                Follow Us
              </p>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group cursor-pointer"
                >
                  <div className="flex-none h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-brand-orange group-hover:border-brand-orange/30 group-hover:bg-brand-orange/10 transition-all duration-300">
                    {social.icon}
                  </div>
                  <div>
                    <p className="text-base font-bold text-white group-hover:text-brand-orange transition-colors duration-300">
                      {social.name}
                    </p>
                    <p className="text-sm text-white/30">{social.handle}</p>
                  </div>
                  <span className="ml-auto text-white/10 group-hover:text-brand-orange transition-colors duration-300">
                    →
                  </span>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange text-white">
                <span className="text-xl font-bold">S</span>
              </div>
              <span className="text-xl font-bold text-white">
                SOJEGGS <span className="text-brand-orange">MUSIC</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-white/30 leading-relaxed max-w-xs">
              Online piano and music production training. From beginner to
              professional, one student at a time.
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white/50">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/30 hover:text-brand-orange transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/20">
            © {new Date().getFullYear()} Sojeggs Music. All rights reserved.
          </p>
          <p className="text-sm text-white/20">
            Built with 🎵 for music lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
