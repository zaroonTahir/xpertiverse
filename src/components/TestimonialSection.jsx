import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { HiStar } from "react-icons/hi";
import { TESTIMONIALS_CONTENT } from "../utils/constants/text";

export default function TestimonialsSection() {
  const { sectionTag, heading, heading1, testimonials } = TESTIMONIALS_CONTENT;

  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(350);
  const [offset, setOffset] = useState(0);
  const gap = 24;

  useEffect(() => {
    const updateSizes = () => {
      const screen = window.innerWidth;
      let count = 3;
      if (screen < 480) count = 1;
      else if (screen < 768) count = 1;
      else if (screen < 1024) count = 2;
      else if (screen < 1440) count = 3;
      else count = 4;

      setVisibleCards(count);

      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const totalGaps = gap * (count - 1);
        const width = (containerWidth - totalGaps) / count;
        setCardWidth(width);
      }
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  const loopedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      let newOffset = offset + cardWidth + gap;
      if (newOffset >= (cardWidth + gap) * testimonials.length) {
        newOffset = 0;
        slider.style.transition = "none";
      } else {
        slider.style.transition = "transform 0.5s ease";
      }

      slider.style.transform = `translateX(-${newOffset}px)`;
      setOffset(newOffset);
    }, 4000);

    return () => clearInterval(interval);
  }, [offset, cardWidth, gap, testimonials.length]);

  const moveSlider = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    let newOffset = offset;

    if (direction === "left") {
      newOffset -= cardWidth + gap;
      if (newOffset < 0) newOffset = (testimonials.length - 1) * (cardWidth + gap);
    } else {
      newOffset += cardWidth + gap;
      if (newOffset >= (cardWidth + gap) * testimonials.length) newOffset = 0;
    }

    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(-${newOffset}px)`;
    setOffset(newOffset);
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 py-20 lg:py-32 px-4 sm:px-6 lg:px-20 relative overflow-hidden">
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
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-400/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
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
            <HiStar className="text-lg" />
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
            Don't just take our word for it. Here's what our clients have to say about their experience.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Left Arrow */}
          <motion.button
            whileHover={{ scale: 1.15, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => moveSlider("left")}
            className="absolute top-1/2 -left-4 lg:-left-6 transform -translate-y-1/2 bg-gradient-to-r from-sky-500 to-purple-600 hover:shadow-2xl hover:shadow-sky-500/40 p-4 rounded-full text-white z-20 shadow-lg transition-all duration-300 border border-white/20 group"
          >
            <FaArrowLeft className="text-lg group-hover:-translate-x-0.5 transition-transform" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            whileHover={{ scale: 1.15, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => moveSlider("right")}
            className="absolute top-1/2 -right-4 lg:-right-6 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-600 hover:shadow-2xl hover:shadow-purple-500/40 p-4 rounded-full text-white z-20 shadow-lg transition-all duration-300 border border-white/20 group"
          >
            <FaArrowRight className="text-lg group-hover:translate-x-0.5 transition-transform" />
          </motion.button>

          <div className="w-full overflow-hidden" ref={containerRef}>
            <div ref={sliderRef} className="flex" style={{ gap: `${gap}px` }}>
              {loopedTestimonials.map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -12, scale: 1.03 }}
                  className="rounded-3xl border border-slate-200 hover:border-sky-300 transition-all duration-300 flex-none flex flex-col bg-white backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-sky-500/20 p-8 relative overflow-hidden group"
                  style={{ width: `${cardWidth}px` }}
                >
                  {/* Top Gradient Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500"></div>

                  {/* Large Quote Icon Background */}
                  <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <FaQuoteLeft className="text-8xl text-sky-500" />
                  </div>

                  {/* Animated Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-200/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Star Rating */}
                  <div className="flex space-x-1 mb-6 relative z-10">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                      >
                        <HiStar 
                          className={`text-2xl ${idx < (t.rating || 5) ? "text-sky-500" : "text-slate-300"}`}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-700 mb-6 text-base leading-relaxed flex-1 relative z-10">
                    <span className="text-sky-500 text-2xl font-bold mr-1">"</span>
                    {t.text}
                    <span className="text-sky-500 text-2xl font-bold ml-1">"</span>
                  </p>

                  {/* Divider */}
                  <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full mb-6 group-hover:w-24 transition-all duration-300"></div>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 relative z-10">
                    {t.image && (
                      <div className="relative">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-sky-500/30 ring-4 ring-sky-100 group-hover:ring-sky-200 transition-all"
                        />
                        {/* Animated Ping Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-sky-400 opacity-0 group-hover:opacity-100 animate-ping"></div>
                        {/* Gradient Overlay on Avatar */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    )}
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                        {t.name}
                      </h3>
                      <p className="text-sky-600 text-sm font-semibold">{t.role}</p>
                    </div>
                  </div>

                  {/* Bottom Corner Gradient */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-sky-100/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Decorative Corner Border */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-sky-400/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Floating Particles */}
                  {[...Array(3)].map((_, particleIdx) => (
                    <motion.div
                      key={particleIdx}
                      className="absolute w-1 h-1 bg-sky-400 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        top: `${20 + particleIdx * 25}%`,
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
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-center"
        >
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent mb-1">
              500+
            </div>
            <div className="text-slate-600 text-sm font-medium">Happy Clients</div>
          </div>

          <div className="w-px h-12 bg-slate-300"></div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 mb-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <HiStar key={idx} className="text-2xl text-sky-500" />
              ))}
            </div>
            <div className="text-slate-600 text-sm font-medium">5-Star Reviews</div>
          </div>

          <div className="w-px h-12 bg-slate-300"></div>

          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-1">
              98%
            </div>
            <div className="text-slate-600 text-sm font-medium">Satisfaction Rate</div>
          </div>
        </motion.div>

        {/* Decorative Bottom Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"
        />
      </div>
    </section>
  );
}