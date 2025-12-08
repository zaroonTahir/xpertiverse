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

// NEW COLOR SCHEME
const iconMap = {
  FaLightbulb: <FaLightbulb className="h-10 w-10 text-[#B026FF]" />,
  FaHandshake: <FaHandshake className="h-10 w-10 text-[#B026FF]" />,
  BsFillPersonCheckFill: <BsFillPersonCheckFill className="text-[#B026FF] text-xl" />,
  VscWorkspaceTrusted: <VscWorkspaceTrusted className="text-[#B026FF] text-xl" />,
  IoMdTrophy: <IoMdTrophy className="text-[#B026FF] text-xl" />,
};

const CombinedAboutInnovation = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-[#0A0412] via-[#130325] to-[#1A0033] text-white px-4 sm:px-6 lg:px-20 py-24 lg:py-32 relative overflow-hidden"
    >
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #5D3FD3 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* FLOATING PURPLE/MAGENTA ORBS */}
      <motion.div
        className="absolute top-20 -left-20 w-96 h-96 bg-[#8A2BE2]/20 rounded-full blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 -right-20 w-96 h-96 bg-[#FF00F5]/20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 15, repeat: Infinity }}
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
            className="inline-flex items-center gap-2 text-[#B026FF] bg-[#B026FF]/10 border border-[#B026FF]/30 text-sm font-semibold rounded-full px-6 py-2.5 backdrop-blur-sm mb-6"
          >
            <HiSparkles className="text-lg" />
            {ABOUT_INNOVATION.badge}
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span>{ABOUT_INNOVATION.headingWhite}</span>
            <br />
            <span className="bg-gradient-to-r from-[#8A2BE2] via-[#B026FF] to-[#FF00F5] text-transparent bg-clip-text">
              {ABOUT_INNOVATION.headingGradient}
            </span>
          </h2>

          <p className="text-[#E9D9FF] text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mt-6">
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
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                  className="w-full rounded-3xl shadow-2xl"
                />

                <div className="absolute -inset-4 border-2 border-transparent bg-gradient-to-r from-[#8A2BE2]/30 via-[#B026FF]/30 to-[#FF00F5]/30 rounded-3xl -z-10 blur-sm"></div>
              </motion.div>

              {/* SMALL IMAGE */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -top-12 -left-8 lg:-left-12"
              >
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80"
                  className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-2xl border-4 border-black shadow-2xl"
                />
              </motion.div>

              {/* CLIENT BOX */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ y: -5 }}
                className="absolute -bottom-6 -right-6 lg:-right-10 bg-gradient-to-br from-black/95 to-black/80 backdrop-blur-xl border border-[#5D3FD3] p-6 rounded-2xl shadow-2xl w-64 lg:w-72"
              >
                <div className="flex text-2xl items-center text-[#B026FF] gap-1 mb-3">
                  {ABOUT_INNOVATION.happyClientsBox.ratingStars}
                </div>

                <p className="text-white font-bold">{ABOUT_INNOVATION.happyClientsBox.title}</p>

                <div className="flex -space-x-2 mb-3">
                  {ABOUT_INNOVATION.happyClientsBox.clientImages.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      className="h-10 w-10 object-cover rounded-full border-2 border-black ring-2 ring-[#B026FF]/40"
                    />
                  ))}
                </div>

                <p className="text-[#E9D9FF] text-sm">{ABOUT_INNOVATION.happyClientsBox.description}</p>
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
                  className="flex items-start gap-4 p-5 bg-white/[0.05] rounded-2xl border border-[#5D3FD3] hover:border-[#B026FF]/40 transition-all"
                >
                  <div className="p-3.5 bg-[#B026FF]/20 rounded-xl">
                    {iconMap[item.icon]}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#B026FF] transition">
                      {item.title}
                    </h3>
                    <p className="text-[#E9D9FF]">{item.desc}</p>
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
                  className="flex items-center gap-2.5 bg-[#1A0033] p-3.5 rounded-xl border border-[#5D3FD3] hover:border-[#B026FF] transition"
                >
                  {iconMap[item.icon]}
                  <span className="text-sm text-white">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* COUNTERS */}
            <div className="grid grid-cols-3 gap-8 pt-6 border-t border-[#5D3FD3]">
              {ABOUT_INNOVATION.counters.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-white/[0.04]"
                >
                  <p className="text-5xl font-bold bg-gradient-to-r from-white to-[#B026FF] bg-clip-text text-transparent">
                    <Counter to={item.value} start={isInView} />
                    {item.isPercent ? "%" : "+"}
                  </p>
                  <p className="text-[#B026FF] font-semibold uppercase text-sm tracking-wider">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#8A2BE2] via-[#B026FF] to-[#FF00F5] text-white font-bold rounded-xl shadow-xl"
              onClick={() => navigate("/aboutdetail")}
            >
              Learn More →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CombinedAboutInnovation;
