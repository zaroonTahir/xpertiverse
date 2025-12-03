import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// ICON IMPORTS
import { FaLightbulb, FaHandshake } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoMdTrophy } from "react-icons/io";

// CONSTANTS
import { ABOUT_INNOVATION } from "../utils/constants/text";

// COMPONENTS
import Counter from "./Counter";

// ICON MAP
const iconMap = {
  FaLightbulb: <FaLightbulb className="h-10 w-10 text-[#DC2828]" />,
  FaHandshake: <FaHandshake className="h-10 w-10 text-[#DC2828]" />,
  BsFillPersonCheckFill: (
    <BsFillPersonCheckFill className="text-red-500 text-xl" />
  ),
  VscWorkspaceTrusted: <VscWorkspaceTrusted className="text-red-500 text-xl" />,
  IoMdTrophy: <IoMdTrophy className="text-red-500 text-xl" />,
};

const CombinedAboutInnovation = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white px-4 sm:px-6 lg:px-20 py-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT IMAGES SECTION */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* MAIN IMAGE */}
          <img
            src={ABOUT_INNOVATION.mainImages.ai}
            alt="AI Illustration"
            className="w-full max-w-md object-contain"
          />

          {/* SMALL OVERLAY IMAGE */}
          <img
            src={ABOUT_INNOVATION.mainImages.overlay}
            className="absolute -top-20 left-6 w-40 opacity-80"
            alt="Overlay"
          />

          {/* CLIENT BADGE */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="absolute bottom-0 right-0 bg-black/40 backdrop-blur-xl border border-gray-700 p-4 rounded-2xl w-64"
          >
            <div className="flex text-xl items-center text-[#DC2828]">
              {ABOUT_INNOVATION.happyClientsBox.ratingStars}
            </div>

            <p className="text-white font-semibold mt-2">
              {ABOUT_INNOVATION.happyClientsBox.title}
            </p>

            <div className="flex space-x-2 mt-3">
              {ABOUT_INNOVATION.happyClientsBox.clientImages.map(
                (src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    className="h-9 w-9 object-cover rounded-full"
                    alt="Client"
                  />
                )
              )}
            </div>

            <p className="text-xs text-gray-400 mt-2">
              {ABOUT_INNOVATION.happyClientsBox.description}
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT TEXT SECTION */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="space-y-8"
        >
          <button className="text-[#DC2828] border border-[#1E293B] text-sm xl:text-lg font-semibold rounded-lg px-5 py-1">
            {ABOUT_INNOVATION.badge}
          </button>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-white">{ABOUT_INNOVATION.headingWhite}</span>
            <br />
            <span className="bg-linear-to-r from-[#F56716] to-[#EA4920] text-transparent bg-clip-text">
              {ABOUT_INNOVATION.headingGradient}
            </span>
          </h2>

          <p className="text-gray-300 text-lg max-w-xl">
            {ABOUT_INNOVATION.description}
          </p>

          {/* MAIN FEATURES */}
          <div className="space-y-6 pt-2">
            {ABOUT_INNOVATION.features.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                {iconMap[item.icon]}
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* MINI FEATURES */}
          <div className="grid grid-cols-2 gap-4 text-gray-300 pt-2">
            {ABOUT_INNOVATION.miniFeatures.map((item, i) => (
              <div key={i} className="flex items-center gap-2 font-semibold">
                {iconMap[item.icon]}
                {item.text}
              </div>
            ))}
          </div>

          {/* COUNTERS */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            {ABOUT_INNOVATION.counters.map((item, i) => (
              <div key={i}>
                <p className="text-4xl font-bold">
                  <Counter to={item.value} start={isInView} />
                  {item.isPercent ? "%" : "+"}
                </p>
                <p className="text-[#DC2828]">{item.label}</p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="pt-3">
            <button
              className="px-6 py-3 bg-[#DC2828]
                text-white hover:bg-transparent border border-[#DC2828] hover:text-[#DC2828] 
                transition rounded-lg font-semibold"
              onClick={() => navigate("/aboutdetail")}
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CombinedAboutInnovation;
