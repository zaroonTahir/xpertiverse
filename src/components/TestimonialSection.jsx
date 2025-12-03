import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TESTIMONIALS_CONTENT } from "../utils/constants/text";

export default function TestimonialsSection() {
  const { sectionTag, heading, heading1, testimonials } = TESTIMONIALS_CONTENT;

  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(350);
  const [offset, setOffset] = useState(0);
  const gap = 24;

  // ---------- Calculate Perfect Card Width ----------
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

  // ---------- Auto Sliding ----------
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
    }, 3000); // faster auto-slide

    return () => clearInterval(interval);
  }, [offset, cardWidth, gap, testimonials.length]);

  // ---------- Manual Slide ----------
  const moveSlider = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    let newOffset = offset;

    if (direction === "left") {
      newOffset -= cardWidth + gap;
      if (newOffset < 0) {
        newOffset = (testimonials.length - 1) * (cardWidth + gap);
      }
    } else {
      newOffset += cardWidth + gap;
      if (newOffset >= (cardWidth + gap) * testimonials.length) {
        newOffset = 0;
      }
    }

    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(-${newOffset}px)`;
    setOffset(newOffset);
  };

  return (
    <section className="w-full bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">

        {/* Heading */}
        <motion.div
          className="space-y-5 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <button className="px-8 py-2 font-semibold text-[#DC2828] rounded-lg border border-gray-700 text-sm xl:text-lg">
            {sectionTag}
          </button>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-white">
            {heading}
            </span><br />
          
           <span class="bg-linear-to-r from-[#F56716] to-[#EA4920] text-transparent bg-clip-text">
            {heading1}
            </span>
          </h2>
        </motion.div>

        {/* Slider with Arrows */}
        <div className="relative w-full">
          {/* Left Arrow */}
          <button
            onClick={() => moveSlider("left")}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-[#DC2828] hover:bg-[#1E293B] p-3 rounded-full text-white z-20 shadow-lg"
          >
            <FaArrowLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => moveSlider("right")}
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-[#DC2828] hover:bg-[#1E293B] p-3 rounded-full text-white z-20 shadow-lg"
          >
            <FaArrowRight />
          </button>

          {/* Slider */}
          <div className="w-full overflow-hidden" ref={containerRef}>
            <div ref={sliderRef} className="flex" style={{ gap: `${gap}px` }}>
              {loopedTestimonials.map((t, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[#1E293B] hover:border-[#334155] transition flex-none flex flex-col bg-[#121721] p-8"
                  style={{ width: `${cardWidth}px` }}
                >
                  <p className="text-gray-300 mb-6 text-sm lg:text-base leading-relaxed flex-1">
                    {t.text}
                  </p>

                  <div className="w-12 h-0.5 bg-[#DC2828] mb-4"></div>

                   {/* ⭐ Star Ratings */}
                  <div className="flex space-x-1 mt-auto justify-center pb-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span key={idx} className="text-yellow-400 text-2xl">
                        {idx < (t.rating || 5) ? "★" : "☆"}
                      </span>
                    ))}
                  </div>

                  {/* Name + Image */}
                  <div className="flex items-center mb-4">
                    {t.image && (
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                    )}
                    <div className="text-left">
                      <h3 className="text-lg lg:text-xl font-semibold">{t.name}</h3>
                      <p className="text-[#DC2828] text-sm font-semibold">{t.role}</p>
                    </div>
                  </div>

                 
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
