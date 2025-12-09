import { PERFORMANCE_TEXT } from "../utils/constants/text";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiTrendingUp } from "react-icons/hi";

export default function PerformanceSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  const statsVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } }
  };

  const statItem = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } 
    }
  };

  return (
    <section 
      ref={ref} 
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-200 py-20 lg:py-32 px-4 sm:px-6 lg:px-20 relative overflow-hidden"
    >
      {/* Modern Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Animated Gradient Orbs - Sky & Purple */}
      <motion.div
        className="absolute top-20 -left-20 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Center Rotating Gradient */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Centered Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Badge */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 mb-6 px-6 py-2.5 border-2 border-sky-500/30 rounded-full text-sky-400 text-sm font-bold bg-sky-500/10 backdrop-blur-md shadow-lg shadow-sky-500/20"
          >
            <HiTrendingUp className="text-lg" />
            Our Performance
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-white drop-shadow-2xl">{PERFORMANCE_TEXT.heading}</span>
            <br />
            <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-2xl">
              {PERFORMANCE_TEXT.heading1}
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            {PERFORMANCE_TEXT.description}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={statsVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto"
        >
          {PERFORMANCE_TEXT.stats.slice(0, 3).map((item, index) => {
            const numericValue = parseInt(item.number.replace(/\D/g, ""), 10);
            const symbol = item.number.replace(/\d/g, "");

            // Gradient colors for each stat
            const gradients = [
              { from: 'from-sky-400', via: 'via-sky-300', to: 'to-cyan-300', glow: 'sky-500' },
              { from: 'from-purple-400', via: 'via-purple-300', to: 'to-fuchsia-300', glow: 'purple-500' },
              { from: 'from-pink-400', via: 'via-pink-300', to: 'to-rose-300', glow: 'pink-500' }
            ];
            const gradient = gradients[index];

            return (
              <motion.div
                key={index}
                variants={statItem}
                whileHover={{ y: -12, scale: 1.05, transition: { duration: 0.3 } }}
                className="relative group"
              >
                <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-sky-500/50 transition-all duration-300 backdrop-blur-xl shadow-2xl hover:shadow-3xl overflow-hidden">
                  
                  {/* Animated Top Gradient Bar */}
                  <motion.div 
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient.from} ${gradient.via} ${gradient.to}`}
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
                  />

                  {/* Icon Background Circle */}
                  <motion.div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br ${gradient.from} ${gradient.to} opacity-10 rounded-full blur-2xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  />

                  {/* Number with Enhanced Styling */}
                  <div className="relative text-center mb-4">
                    <motion.h3 
                      className={`text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-br ${gradient.from} ${gradient.via} ${gradient.to} bg-clip-text text-transparent drop-shadow-2xl`}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.2, type: "spring" }}
                    >
                      {startCount ? <CountUp end={numericValue} duration={3} /> : 0}{symbol}
                    </motion.h3>
                    
                    {/* Subtle Glow Behind Number */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-${gradient.glow}/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>

                  {/* Label with Enhanced Styling */}
                  <p className={`text-${gradient.glow} font-bold text-base lg:text-lg uppercase tracking-widest text-center relative z-10`}>
                    {item.label}
                  </p>

                  {/* Animated Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Bottom Gradient Glow on Hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-t from-${gradient.glow}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>

                  {/* Decorative Corner Accent */}
                  <div className={`absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-${gradient.glow}/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                  {/* Floating Icon */}
                  <motion.div
                    className={`absolute top-4 right-4 text-${gradient.glow}/40 opacity-0 group-hover:opacity-100`}
                    animate={{
                      y: [0, -5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <HiTrendingUp className="text-2xl" />
                  </motion.div>
                </div>

                {/* Outer Glow with Enhanced Blur */}
                <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r from-${gradient.glow}/0 via-${gradient.glow}/30 to-${gradient.glow}/0 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 -z-10`}></div>

                {/* Floating Particles */}
                {[...Array(3)].map((_, particleIdx) => (
                  <motion.div
                    key={particleIdx}
                    className={`absolute w-1 h-1 bg-${gradient.glow} rounded-full opacity-0 group-hover:opacity-100`}
                    style={{
                      top: `${20 + particleIdx * 25}%`,
                      right: '-8px',
                    }}
                    animate={{
                      x: [0, 20, 0],
                      y: [0, -15, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: particleIdx * 0.4,
                    }}
                  />
                ))}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 text-lg mb-4">
            Join thousands of satisfied clients worldwide
          </p>
          
          {/* Decorative Line with Gradient */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-sky-500/50 via-purple-500/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}