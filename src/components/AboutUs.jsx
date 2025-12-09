import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// ICONS
import { FaLightbulb, FaHandshake } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoMdTrophy } from "react-icons/io";
import { HiSparkles } from "react-icons/hi";

// CONSTANTS
import { ABOUT_INNOVATION } from "../utils/constants/text";

// COMPONENTS
import Counter from "./Counter";

// NEW PROFESSIONAL COLOR SCHEME - Sky Blue & Purple
const iconMap = {
  FaLightbulb: <FaLightbulb className="h-10 w-10 text-sky-400" />,
  FaHandshake: <FaHandshake className="h-10 w-10 text-purple-400" />,
  BsFillPersonCheckFill: <BsFillPersonCheckFill className="text-sky-400 text-xl" />,
  VscWorkspaceTrusted: <VscWorkspaceTrusted className="text-purple-400 text-xl" />,
  IoMdTrophy: <IoMdTrophy className="text-sky-400 text-xl" />,
};

const CombinedAboutInnovation = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4 sm:px-6 lg:px-20 py-24 lg:py-32 relative overflow-hidden"
    >
      {/* BACKGROUND GRID - Modern & Subtle */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* FLOATING GRADIENT ORBS - Sky Blue & Purple */}
      <motion.div
        className="absolute top-20 -left-20 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1.1, 1, 1.1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-sky-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 text-sky-400 bg-sky-500/10 border border-sky-500/30 text-sm font-semibold rounded-full px-6 py-2.5 backdrop-blur-sm mb-6 shadow-lg shadow-sky-500/20"
          >
            <HiSparkles className="text-lg" />
            {ABOUT_INNOVATION.badge}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="text-white drop-shadow-2xl">{ABOUT_INNOVATION.headingWhite}</span>
            <br />
            <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-2xl">
              {ABOUT_INNOVATION.headingGradient}
            </span>
          </h2>

          <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mt-6">
            {ABOUT_INNOVATION.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* IMAGE SECTION */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-lg">
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                  className="w-full rounded-3xl shadow-2xl relative z-10"
                  alt="Team collaboration"
                />

                {/* Gradient Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 rounded-3xl opacity-30 blur-xl"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 rounded-3xl opacity-50"></div>
              </motion.div>

              {/* SMALL IMAGE - Top Left */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                className="absolute -top-12 -left-8 lg:-left-12 z-20"
              >
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80"
                    className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-2xl border-4 border-slate-900 shadow-2xl"
                    alt="Innovation"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-purple-500 rounded-2xl opacity-50 blur-lg"></div>
                </div>
              </motion.div>

              {/* CLIENT BOX - Bottom Right */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="absolute -bottom-6 -right-6 lg:-right-10 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-sky-500/30 p-6 rounded-2xl shadow-2xl w-64 lg:w-72 z-20"
              >
                <div className="flex text-2xl items-center text-sky-400 gap-1 mb-3">
                  {ABOUT_INNOVATION.happyClientsBox.ratingStars}
                </div>

                <p className="text-white font-bold text-lg mb-3">{ABOUT_INNOVATION.happyClientsBox.title}</p>

                <div className="flex -space-x-2 mb-3">
                  {ABOUT_INNOVATION.happyClientsBox.clientImages.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      className="h-10 w-10 object-cover rounded-full border-2 border-slate-900 ring-2 ring-sky-400/40 hover:ring-purple-400/60 transition-all"
                      alt={`Client ${idx + 1}`}
                    />
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">{ABOUT_INNOVATION.happyClientsBox.description}</p>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* FEATURES SECTION */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* MAIN FEATURES */}
            <div className="space-y-5">
              {ABOUT_INNOVATION.features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="group flex items-start gap-4 p-5 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-sky-500/50 hover:bg-slate-800/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/10"
                >
                  <div className="p-3.5 bg-gradient-to-br from-sky-500/20 to-purple-500/20 rounded-xl group-hover:from-sky-500/30 group-hover:to-purple-500/30 transition-all duration-300 shadow-lg">
                    {iconMap[item.icon]}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* MINI FEATURES */}
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_INNOVATION.miniFeatures.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2.5 bg-slate-800/50 backdrop-blur-sm p-3.5 rounded-xl border border-slate-700/50 hover:border-purple-500/50 hover:bg-slate-800/70 transition-all duration-300 shadow-lg cursor-pointer"
                >
                  {iconMap[item.icon]}
                  <span className="text-sm text-white font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* COUNTERS */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-700/50">
              {ABOUT_INNOVATION.counters.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/30 hover:border-sky-500/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/20"
                >
                  <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    <Counter to={item.value} start={isInView} />
                    {item.isPercent ? "%" : "+"}
                  </p>
                  <p className="text-sky-400 font-semibold uppercase text-xs tracking-wider">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-2xl shadow-sky-500/30 hover:shadow-3xl hover:shadow-purple-500/40 transition-all duration-300 border border-white/10 relative overflow-hidden group"
              onClick={() => navigate("/aboutdetail")}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Learn More 
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
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CombinedAboutInnovation;