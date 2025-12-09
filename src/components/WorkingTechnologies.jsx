import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../utils/constants/projectsdata";
import { projectSectionText } from "../utils/constants/text";
import { HiSparkles, HiArrowRight } from "react-icons/hi";

const WorkingTechnologies = () => {
  const [active, setActive] = useState("All");
  const navigate = useNavigate();

  const filteredProjects =
    active === "All"
      ? projectsData.slice(0, 3)
      : projectsData.filter((p) => p.category === active).slice(0, 3);

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      
      {/* Modern Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Animated Gradient Orbs - Sky & Purple */}
      <motion.div
        className="absolute top-32 -left-20 w-[500px] h-[500px] bg-sky-400/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-32 -right-20 w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
          x: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top Section */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-sky-500/30 rounded-full text-sky-600 text-sm font-bold bg-sky-50 backdrop-blur-sm shadow-lg shadow-sky-500/10"
          >
            <HiSparkles className="text-lg" />
            {projectSectionText.topButton}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
          </motion.button>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6"
        >
          <span className="text-slate-900 drop-shadow-sm">{projectSectionText.titleLine1}</span>
          <br />
          <span className="bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-sm">
            {projectSectionText.titleLine2}
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto"
        >
          {projectSectionText.description}
        </motion.p>
      </div>

      {/* Projects Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10"
      >
        {filteredProjects.map((p, index) => {
          // Different gradient for each card
          const gradients = [
            { from: 'from-sky-500', to: 'to-cyan-500', shadow: 'sky-500', badge: 'bg-sky-500' },
            { from: 'from-purple-500', to: 'to-fuchsia-500', shadow: 'purple-500', badge: 'bg-purple-500' },
            { from: 'from-pink-500', to: 'to-rose-500', shadow: 'pink-500', badge: 'bg-pink-500' }
          ];
          const gradient = gradients[index % 3];

          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden shadow-xl cursor-pointer group bg-white border border-slate-200 hover:border-sky-300 hover:shadow-2xl transition-all duration-300"
            >
              {/* Top Gradient Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient.from} ${gradient.to} z-10`}></div>

              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.8 }}
                />

                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full ${gradient.badge} text-white text-xs font-bold shadow-lg z-20`}>
                  {p.tag}
                </div>

                {/* Rating Badge - Top Right */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-lg z-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.955a1 1 0 00-.364-1.118L2.067 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.282-3.955z" />
                  </svg>
                  <span className="text-slate-900 font-bold text-sm">{p.rating}.0</span>
                </div>
              </div>

              {/* Content Section - Always Visible */}
              <div className="p-6 bg-white relative z-10">
                <h3 className="text-slate-900 text-xl sm:text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                  {p.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ${idx < p.rating ? "text-yellow-400" : "text-slate-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.955a1 1 0 00-.364-1.118L2.067 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.282-3.955z" />
                    </svg>
                  ))}
                  <span className="text-slate-500 text-xs ml-2">({p.rating}.0)</span>
                </div>

                {/* View Details Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/projects/${p.id}`)}
                  className={`
                    group/btn w-full flex items-center justify-center gap-2 
                    px-5 py-3 text-sm font-bold
                    bg-gradient-to-r ${gradient.from} ${gradient.to}
                    text-white rounded-xl
                    shadow-lg hover:shadow-xl hover:shadow-${gradient.shadow}/30
                    transition-all duration-300
                    border border-white/20
                    relative overflow-hidden
                  `}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {projectSectionText.viewDetailsBtn}
                    <HiArrowRight className="text-lg group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                  <span className={`absolute inset-0 bg-gradient-to-r ${gradient.to} ${gradient.from} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}></span>
                </motion.button>
              </div>

              {/* Bottom Corner Decoration */}
              <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${gradient.from}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Outer Glow */}
              <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r from-${gradient.shadow}/0 via-${gradient.shadow}/30 to-${gradient.shadow}/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`}></div>

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

      {/* View All Button */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-16 relative z-10"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/projects")}
          className="
            group inline-flex items-center gap-3 
            px-10 py-4 
            bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500
            text-white text-base font-bold 
            rounded-xl shadow-2xl shadow-sky-500/30 
            hover:shadow-3xl hover:shadow-purple-500/40
            transition-all duration-300
            border border-white/20
            relative overflow-hidden
          "
        >
          <span className="relative z-10 flex items-center gap-3">
            {projectSectionText.viewAllBtn}
            <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </motion.button>
      </motion.div>

      {/* Decorative Bottom Line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
        className="mt-20 w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"
      />
    </section>
  );
};

export default WorkingTechnologies;