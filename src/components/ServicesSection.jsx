import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HiSparkles, HiArrowRight } from "react-icons/hi";
import { SERVICES_CONTENT } from "../utils/constants/text";

export default function ServicesSection() {
  const { sectionTag, heading, heading1, description, cards } = SERVICES_CONTENT;
  const navigate = useNavigate();

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

  const cardVariant = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <section className="w-full bg-black text-white py-20 lg:py-32 px-4 sm:px-6 lg:px-20 relative overflow-hidden">

      {/* Background Pattern - Cyan Dots */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #00CED1 1px, transparent 1px)`,
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* Cyan Animated Orbs */}
      <motion.div
        className="absolute top-40 left-20 w-[420px] h-[420px] bg-[#00CED1]/15 rounded-full blur-3xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-[420px] h-[420px] bg-[#40E0D0]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
            className="inline-flex items-center gap-2 mb-6 px-5 py-2 border border-[#00CED1]/40 rounded-full text-[#00CED1] text-sm font-semibold bg-[#00B4D8]/30 backdrop-blur-sm"
          >
            <HiSparkles className="text-lg" />
            {sectionTag}
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">{heading}</span>
            <br />
            <span className="bg-gradient-to-r from-[#00B4D8] via-[#00CED1] to-[#40E0D0] text-transparent bg-clip-text">
              {heading1}
            </span>
          </h2>

          <p className="text-[#80FFF7] text-lg leading-relaxed max-w-3xl mx-auto">
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
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group h-full"
            >
              <div className="relative h-full p-8 rounded-2xl 
                bg-gradient-to-b from-white/[0.08] to-white/[0.02] 
                border border-white/10 hover:border-[#00CED1]/50 
                transition-all duration-300 backdrop-blur-sm 
                shadow-xl hover:shadow-2xl hover:shadow-[#40E0D0]/30 
                flex flex-col"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 
                  bg-gradient-to-r from-transparent via-[#00CED1] to-transparent rounded-full">
                </div>

                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl 
                    bg-gradient-to-br from-[#00B4D8] to-[#00CED1] 
                    flex items-center justify-center text-white 
                    shadow-lg shadow-[#00CED1]/40"
                >
                  {React.createElement(card.icon, { size: 36 })}
                </motion.div>

                {/* Content */}
                <div className="text-center flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {card.title}
                  </h3>

                  <p className="text-[#80FFF7] text-base leading-relaxed mb-6 flex-1">
                    {card.desc}
                  </p>

                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate(`/service/${i}`)}
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                      bg-gradient-to-r from-[#00B4D8] to-[#00CED1]
                      text-white font-semibold text-sm
                      shadow-lg shadow-[#00CED1]/30 hover:shadow-2xl hover:shadow-[#00CED1]/50
                      transition-all duration-300
                      border border-[#00CED1]/40 hover:border-[#00CED1]"
                  >
                    View Details
                    <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Glow Hover Layer */}
                <div className="absolute inset-0 rounded-2xl 
                  bg-gradient-to-t from-[#00CED1]/15 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                </div>
              </div>

              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r 
                from-[#00CED1]/0 via-[#00CED1]/20 to-[#00CED1]/0 
                opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10">
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Bottom Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 lg:mt-20 w-full max-w-md mx-auto h-px 
            bg-gradient-to-r from-transparent via-[#00CED1]/50 to-transparent"
        />
      </div>
    </section>
  );
}
