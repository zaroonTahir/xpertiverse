import React from "react";
import { HERO_CONTENT } from "../utils/constants/text";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bgVideo from "../assets/videos/bg5.mov";

const HeroSection = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-20 py-24 flex items-center justify-center text-white relative overflow-hidden">

      {/* Background Layer with Video */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Video */}
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlays for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-800/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        {/* OVERLAY OPTIONS - Choose One */}
        
        {/* Option 1: Animated Mesh Overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
            `,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Option 2: Noise/Grain Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Option 3: Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at center, transparent 0%, rgba(15, 23, 42, 0.6) 100%)
            `,
          }}
        />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-sky-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 max-w-6xl w-full mx-auto text-center">

        {/* Animated Badge */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-block"
        >
          <div className="relative group">
            <motion.p
              className="text-sky-400 text-sm md:text-base font-bold border-2 border-sky-500/50 
                       rounded-full px-6 py-2.5 inline-flex items-center gap-3
                       backdrop-blur-xl bg-slate-900/60
                       shadow-lg shadow-sky-500/20 tracking-wider uppercase
                       hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/40
                       transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              {HERO_CONTENT.badge}
            </motion.p>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-purple-500/20 blur-xl group-hover:blur-2xl transition-all duration-300 rounded-full -z-10"></div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                   font-extrabold text-white leading-tight mb-3
                   drop-shadow-2xl"
        >
          {HERO_CONTENT.heading1}
        </motion.h1>

        {/* Gradient Heading */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                   font-extrabold mb-8 leading-tight
                   bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 
                   bg-clip-text text-transparent
                   drop-shadow-2xl"
        >
          {HERO_CONTENT.heading2}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 text-lg md:text-xl lg:text-2xl mb-12 
                   max-w-4xl mx-auto font-light leading-relaxed
                   drop-shadow-lg"
        >
          {HERO_CONTENT.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          {/* Primary Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center 
                       px-10 py-4 md:px-12 md:py-5 
                       text-lg md:text-xl font-bold text-white
                       bg-gradient-to-r from-sky-500 to-purple-600
                       rounded-2xl overflow-hidden
                       shadow-2xl shadow-sky-500/50
                       hover:shadow-3xl hover:shadow-purple-500/60
                       transition-all duration-300
                       border border-white/20"
            >
              <span className="relative z-10 flex items-center gap-3">
                {HERO_CONTENT.buttons.primary}
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-sky-500 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 
                            blur-xl transition-opacity duration-300"></div>
            </Link>
          </motion.div>

          {/* Secondary Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/aboutdetail"
              className="group relative inline-flex items-center justify-center 
                       px-10 py-4 md:px-12 md:py-5
                       text-lg md:text-xl font-bold
                       text-sky-400 hover:text-white
                       bg-slate-900/60 backdrop-blur-xl
                       rounded-2xl overflow-hidden
                       border-2 border-sky-500/50 hover:border-sky-400
                       shadow-lg shadow-sky-500/20 hover:shadow-2xl hover:shadow-sky-500/40
                       transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                {HERO_CONTENT.buttons.secondary}
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-sky-500/0 to-purple-500/0 
                             group-hover:from-sky-500/20 group-hover:to-purple-500/20 
                             transition-all duration-300"></span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats or Features */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[{ number: "500+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }].map((stat, i) => (
            <motion.div
              key={i}
              className="backdrop-blur-xl bg-slate-900/40 rounded-2xl p-6 
                       border border-white/10 hover:border-sky-500/50
                       shadow-lg hover:shadow-xl hover:shadow-sky-500/20
                       transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-purple-400 
                            bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            const nextSection = document.getElementById("about");
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <span className="text-gray-400 text-xs uppercase tracking-wider">Scroll Down</span>
          <svg 
            className="w-6 h-6 text-sky-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
