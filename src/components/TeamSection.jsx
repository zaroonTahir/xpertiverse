import React from "react";
import { motion } from "framer-motion";
import { TEAM_CONTENT } from "../utils/constants/text";
import { AppIcons } from "../components/ui/AppIcons"; 
import { useNavigate } from "react-router-dom";
import { HiUsers, HiArrowRight } from "react-icons/hi";

export default function TeamSection() {
  const navigate = useNavigate();
  const { sectionTag, heading, heading1, description, teamMembers } = TEAM_CONTENT;

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-32 px-4 sm:px-6 lg:px-20 relative overflow-hidden">
      
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
        className="absolute top-40 -left-20 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-40 -right-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 mb-6 px-6 py-2.5 border-2 border-sky-500/30 rounded-full text-sky-400 text-sm font-bold bg-sky-500/10 backdrop-blur-md shadow-lg shadow-sky-500/20"
          >
            <HiUsers className="text-lg" />
            {sectionTag}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-white drop-shadow-2xl">{heading}</span>
            <br />
            <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-2xl">
              {heading1}
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            {description}
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/all-team-members")}
            className="
              group inline-flex items-center gap-3 px-8 py-4 rounded-xl
              bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500
              text-white font-bold text-base
              shadow-2xl shadow-sky-500/30 hover:shadow-3xl hover:shadow-purple-500/40
              transition-all duration-300
              border border-white/10
              relative overflow-hidden
            "
          >
            <span className="relative z-10 flex items-center gap-3">
              View All Team
              <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        </motion.div>

        {/* Team Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.slice(0, 4).map((member, i) => {
            const { Fb, Twitter, Pinterest } = AppIcons;

            // Different gradient colors for each card
            const gradients = [
              { from: 'from-sky-500', to: 'to-cyan-500', shadow: 'sky-500' },
              { from: 'from-purple-500', to: 'to-fuchsia-500', shadow: 'purple-500' },
              { from: 'from-pink-500', to: 'to-rose-500', shadow: 'pink-500' },
              { from: 'from-indigo-500', to: 'to-blue-500', shadow: 'indigo-500' }
            ];
            const gradient = gradients[i % 4];

            return (
              <motion.div
                key={i}
                variants={cardVariant}
                whileHover={{ y: -12, scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-700/50 hover:border-sky-500/50 transition-all duration-300 shadow-2xl hover:shadow-3xl group"
              >
                {/* Top Gradient Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient.from} ${gradient.to} z-10`}></div>

                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />

                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                  {/* Animated Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500">
                    <motion.div
                      initial={{ y: 0 }}
                      className="transform transition-all duration-500 group-hover:-translate-y-2"
                    >
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                        {member.name}
                      </h3>
                      <p className={`text-${gradient.shadow} text-sm font-bold tracking-wide`}>
                        {member.role}
                      </p>
                    </motion.div>

                    {/* Social Icons */}
                    <div className="flex gap-3 mt-4 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      {[Fb, Twitter, Pinterest].map((Icon, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.3 }}
                          whileHover={{ scale: 1.2, rotate: 5, y: -3 }}
                          whileTap={{ scale: 0.9 }}
                          className={`w-10 h-10 rounded-full bg-gradient-to-r ${gradient.from} ${gradient.to} flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl hover:shadow-${gradient.shadow}/50 transition-all duration-300 border border-white/20`}
                        >
                          <Icon className="text-white text-base" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Corner Accent with Gradient */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${gradient.from}/20 ${gradient.to}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Floating Badge */}
                  <motion.div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${gradient.from} ${gradient.to} text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg`}
                    animate={{
                      y: [0, -5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Available
                  </motion.div>
                </div>

                {/* Bottom Gradient Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${gradient.shadow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Outer Glow */}
                <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-${gradient.shadow}/0 via-${gradient.shadow}/30 to-${gradient.shadow}/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`}></div>

                {/* Floating Particles */}
                {[...Array(3)].map((_, particleIdx) => (
                  <motion.div
                    key={particleIdx}
                    className={`absolute w-1 h-1 bg-${gradient.shadow} rounded-full opacity-0 group-hover:opacity-100`}
                    style={{
                      top: `${30 + particleIdx * 20}%`,
                      right: '8px',
                    }}
                    animate={{
                      x: [0, 15, 0],
                      y: [0, -10, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: particleIdx * 0.3,
                    }}
                  />
                ))}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 text-lg mb-4">
            Want to be part of our amazing team?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-slate-800/50 backdrop-blur-sm border border-sky-500/30 rounded-xl text-sky-400 font-semibold hover:bg-slate-800 hover:border-sky-500/50 transition-all duration-300"
          >
            Join Our Team →
          </motion.button>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}