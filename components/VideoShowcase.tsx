"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

const videos = [
  {
    id: "main",
    title: "See a Live Class in Action",
    description:
      "Watch how Samuel breaks down complex musical concepts into simple, practical steps that anyone can follow.",
    thumbnail: "/images/panagiotis-falcos-GgjNItqNiok-unsplash.jpg",
    videoUrl: "https://assets.articlerank.pro/freelance/studio-session.mp4",
  },
  {
    id: "student1",
    title: "Student Performance",
    description: "Watch our students play after just weeks of training.",
    thumbnail: "/images/dylan-mcleod-VRdZBLqnoMU-unsplash.jpg",
    videoUrl: "https://assets.articlerank.pro/freelance/session2.mp4",
  },
  {
    id: "student2",
    title: "Studio Session",
    description: "A peek inside our hands-on production sessions.",
    thumbnail: "/images/tanner-boriack-hxnBkzz9iL4-unsplash.jpg",
    videoUrl: "https://assets.articlerank.pro/freelance/session-3.mp4",
  },
];

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative py-28 sm:py-36 bg-gray-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[200px]" />

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
            See How We Work
          </p>
          <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Don&apos;t take our word for it.
            <br />
            <span className="text-brand-orange">Watch.</span>
          </h2>
          <p className="mt-6 text-xl text-white/50 leading-relaxed">
            Get a feel for our classes before you commit. Real lessons, real
            results, real transformation.
          </p>
        </motion.div>

        {/* Main Video Player */}
        <div className="mt-12 sm:mt-16 relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-900 shadow-2xl shadow-black/50 group">
          {isPlaying ? (
            <video
              ref={videoRef}
              src={videos[activeVideo].videoUrl}
              className="absolute inset-0 w-full h-full object-contain bg-black"
              controls
              autoPlay
              playsInline
            />
          ) : (
            <>
              {/* Thumbnail */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${videos[activeVideo].thumbnail})`,
                }}
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Play Button */}
              <button
                onClick={() => {
                  setIsPlaying(true);
                }}
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 rounded-full bg-brand-orange/30 animate-ping" />
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-brand-orange flex items-center justify-center shadow-2xl shadow-brand-orange/30">
                    <svg
                      className="h-8 w-8 sm:h-10 sm:w-10 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </motion.div>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-white/70">
                  Play Video
                </p>
              </button>

              {/* Video Info Overlay - Hidden on mobile */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 hidden sm:block">
                <h3 className="text-lg sm:text-2xl font-black text-white">
                  {videos[activeVideo].title}
                </h3>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-white/60 max-w-lg">
                  {videos[activeVideo].description}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Thumbnail Selector */}
        <div className="mt-4 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4">
          {videos.map((video, i) => (
            <button
              key={video.id}
              onClick={() => {
                setActiveVideo(i);
                setIsPlaying(false);
              }}
              className={`relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 ${
                i === activeVideo
                  ? "ring-2 ring-brand-orange ring-offset-2 ring-offset-gray-950"
                  : "opacity-50 hover:opacity-80"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${video.thumbnail})` }}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
                <p className="text-[10px] sm:text-xs font-bold text-white truncate">
                  {video.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
