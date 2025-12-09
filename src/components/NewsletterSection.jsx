import React from "react";
import { NEWSLETTER_CONTENT } from "../utils/constants/text";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { HiSparkles, HiArrowRight, HiMail, HiShieldCheck, HiUserGroup } from "react-icons/hi";

export default function NewsletterSection() {
  const navigate = useNavigate();
  const { heading, heading1, description, buttonText } = NEWSLETTER_CONTENT;

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } 
    },
  };

  return (
    <section
      ref={ref}
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-32 px-4 sm:px-6 lg:px-20 relative overflow-hidden"
    >
      {/* Modern Background Grid */}
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
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
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
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Center rotating gradient */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-sky-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Center Card */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="relative p-10 lg:p-16 rounded-3xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          {/* Top Gradient Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500"></div>

          {/* Corner Decorative Gradients */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-sky-500/15 to-transparent rounded-3xl blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-purple-500/15 to-transparent rounded-3xl blur-2xl"></div>

          {/* Animated Background Pattern */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)`
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center space-y-8">
            
            {/* Badge */}
            <motion.div 
              variants={textVariants}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-sky-500/30 rounded-full text-sky-400 text-sm font-bold bg-sky-500/10 backdrop-blur-md shadow-lg shadow-sky-500/20"
            >
              <HiSparkles className="text-lg" />
              Join Our Community
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2 
              variants={textVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight"
            >
              <span className="text-white drop-shadow-2xl">{heading}</span>
              <br />
              <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-2xl">
                {heading1}
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={textVariants}
              className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto"
            >
              {description}
            </motion.p>

            {/* Button */}
            <motion.div variants={buttonVariants} className="flex justify-center pt-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="
                  group inline-flex items-center gap-3 
                  px-10 py-5 rounded-xl
                  bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500
                  text-white font-bold text-lg
                  shadow-2xl shadow-sky-500/30 hover:shadow-3xl hover:shadow-purple-500/40
                  transition-all duration-300
                  border border-white/10
                  relative overflow-hidden
                "
                onClick={() => navigate('/contact')}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {buttonText}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <HiArrowRight className="text-2xl" />
                  </motion.span>
                </span>

                {/* Gradient overlay on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
              </motion.button>
            </motion.div>

            {/* Trust Badges with Icons */}
            <motion.div
              variants={textVariants}
              className="flex flex-wrap items-center justify-center gap-8 pt-8"
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50"
              >
                <HiShieldCheck className="text-sky-400 text-xl" />
                <span className="text-gray-300 text-sm font-medium">No spam, ever</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50"
              >
                <HiMail className="text-purple-400 text-xl" />
                <span className="text-gray-300 text-sm font-medium">Unsubscribe anytime</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50"
              >
                <HiUserGroup className="text-pink-400 text-xl" />
                <span className="text-gray-300 text-sm font-medium">10,000+ subscribers</span>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={textVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto"
            >
              {[
                { number: "10K+", label: "Active Subscribers", gradient: "from-sky-400 to-cyan-400" },
                { number: "98%", label: "Open Rate", gradient: "from-purple-400 to-fuchsia-400" },
                { number: "5★", label: "Average Rating", gradient: "from-pink-400 to-rose-400" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-sky-500/50 transition-all duration-300"
                >
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Gradient Accent Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500"></div>

          {/* Floating Decorative Elements */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-sky-400/40 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-sky-500/50 via-purple-500/50 to-transparent"
        />
      </div>
    </section>
  );
}