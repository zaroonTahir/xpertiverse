import React from "react";
import { HERO_CONTENT } from "../utils/constants/text";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link

const HeroSection = () => {
  return (
<section
  className="min-h-screen px-4 sm:px-6 lg:px-20 py-20 flex flex-col lg:flex-row lg:items-center text-white"
  style={{
    background: `radial-gradient(circle at center, #4D1D03, #000000 30%)`,
  }}
>



      <div className="container max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Left Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:w-1/2 flex flex-col items-start"
        >
          <p className="text-[#DC2828] mb-4 text-base font-medium border border-[#1E293B] rounded-2xl px-2.5 py-3">
            {HERO_CONTENT.badge}
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-white">
            {HERO_CONTENT.heading1}
          </h1>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold mb-4 leading-tight sm:leading-tight lg:leading-relaxed bg-linear-to-r from-[#F56716] to-[#EA4920] bg-clip-text text-transparent">
            {HERO_CONTENT.heading2}
          </h1>

          <p className="text-gray-400 text-lg mb-6">
            {HERO_CONTENT.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            {/* Primary Button - Link to Contact page */}
            <Link
              to="/contact"
              className="cursor-pointer bg-[#DC2828] text-white border border-transparent
              hover:border-[#DC2828] hover:text-[#DC2828] hover:bg-transparent
              transition px-6 py-2 rounded-md hover:opacity-90 w-full sm:w-auto text-center"
            >
              {HERO_CONTENT.buttons.primary}
            </Link>

            {/* Secondary Button */}
            <Link
              to="/aboutdetail"
              className="border border-[#DC2828] text-[#DC2828]
              hover:bg-[#DC2828] hover:cursor-pointer hover:text-gray-900
              transition px-6 py-2 rounded-md font-medium w-full sm:w-auto text-center"
            >
              {HERO_CONTENT.buttons.secondary}
             </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="lg:w-1/2 flex justify-center w-full"
        >
          <motion.img
            src={HERO_CONTENT.image}
            alt="AI Illustration"
            className="w-full max-w-lg pt-10 sm:max-w-md lg:max-w-xl object-contain max-h-[400px] sm:max-h-[500px] lg:max-h-full"
            whileHover={{ y: -20 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
