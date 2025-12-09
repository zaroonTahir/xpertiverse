import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HiSparkles, HiArrowRight } from "react-icons/hi";
import { SERVICES_CONTENT } from "../utils/constants/text";

export default function ServicesSection() {
  const { sectionTag, heading, heading1, description, cards } = SERVICES_CONTENT;
  const navigate = useNavigate();

  const container = { 
    hidden: {}, 
    visible: { transition: { staggerChildren: 0.12 } } 
  };

  const cardVariant = { 
    hidden: { opacity: 0, y: 50, scale: 0.9 }, 
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } } 
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 py-20 lg:py-32 px-4 sm:px-6 lg:px-20 relative overflow-hidden">

      {/* Background Pattern - Modern Grid */}
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

      {/* Floating Gradient Orbs - Sky Blue & Purple */}
      <motion.div
        className="absolute top-40 -left-20 w-[500px] h-[500px] bg-sky-400/15 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.15, 0.25, 0.15],
          x: [0, 30, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 -right-20 w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2], 
          opacity: [0.15, 0.25, 0.15],
          x: [0, -30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center Accent Orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-sky-400/10 to-purple-400/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.15, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Centered Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 mb-6 px-6 py-2.5 border-2 border-sky-500/30 rounded-full text-sky-600 text-sm font-bold bg-sky-50 backdrop-blur-sm shadow-lg shadow-sky-500/10"
          >
            <HiSparkles className="text-lg" />
            {sectionTag}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-slate-900 drop-shadow-sm">{heading}</span>
            <br />
            <span className="bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-sm">
              {heading1}
            </span>
          </h2>

          <p className="text-slate-600 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative group h-full"
            >
              <div className="relative h-full p-8 rounded-2xl 
                bg-white
                border border-slate-200 hover:border-sky-300
                transition-all duration-300
                shadow-lg hover:shadow-2xl hover:shadow-sky-500/20
                flex flex-col overflow-hidden"
              >
                {/* Top Gradient Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 
                  bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500
                  transform origin-left scale-x-0 group-hover:scale-x-100
                  transition-transform duration-500">
                </div>

                {/* Icon Container with Gradient Background */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl 
                    bg-gradient-to-br from-sky-500 to-purple-600
                    flex items-center justify-center text-white 
                    shadow-xl shadow-sky-500/30
                    group-hover:shadow-2xl group-hover:shadow-purple-500/40
                    transition-all duration-300
                    relative overflow-hidden"
                >
                  {React.createElement(card.icon, { size: 36 })}
                  
                  {/* Animated Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>

                {/* Content */}
                <div className="text-center flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed mb-6 flex-1">
                    {card.desc}
                  </p>

                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate(`/service/${i}`)}
                    className="group/btn relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
                      bg-gradient-to-r from-sky-500 to-purple-600
                      text-white font-bold text-sm
                      shadow-lg shadow-sky-500/30 hover:shadow-2xl hover:shadow-purple-500/40
                      transition-all duration-300
                      border border-white/20
                      overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      View Details
                      <HiArrowRight className="text-lg group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                    
                    {/* Hover Gradient Overlay */}
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                  </motion.button>
                </div>

                {/* Bottom Gradient on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-24
                  bg-gradient-to-t from-sky-50/50 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-purple-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent"></div>
                </div>
              </div>

              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r 
                from-sky-500/0 via-sky-500/30 to-purple-500/0 
                opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10">
              </div>

              {/* Floating Particles on Hover */}
              {[...Array(3)].map((_, idx) => (
                <motion.div
                  key={idx}
                  className="absolute w-1 h-1 bg-sky-400 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    top: `${30 + idx * 20}%`,
                    right: '-10px',
                  }}
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -10, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.3,
                  }}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Need a Custom Solution?
            </h3>
            <p className="text-slate-600 mb-6 max-w-md">
              Our team is ready to create a tailored solution that perfectly fits your unique requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-sky-500 to-purple-600 text-white font-bold rounded-xl shadow-xl shadow-sky-500/30 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300"
            >
              Let's Talk →
            </motion.button>
          </div>
        </motion.div>

        {/* Decorative Bottom Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 lg:mt-20 w-full max-w-md mx-auto h-px 
            bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"
        />
      </div>
    </section>
  );
}