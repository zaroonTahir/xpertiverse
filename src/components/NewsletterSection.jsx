import React from "react";
import { NEWSLETTER_CONTENT } from "../utils/constants/text";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

export default function NewsletterSection() {
  const navigate = useNavigate();
  const { heading, heading1, description, buttonText } = NEWSLETTER_CONTENT;

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <section
      ref={ref}
      className="bg-black text-white py-28 px-4 sm:px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Text */}
        <motion.div
          className="w-full md:w-3/4 text-center md:text-left space-y-6"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
         <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-white">
            {heading}
            </span><br />
          
           <span class="bg-linear-to-r from-[#F56716] to-[#EA4920] text-transparent bg-clip-text">
            {heading1}
            </span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
            {description}
          </p>
        </motion.div>

   <motion.button
  className="
    cursor-pointer
    bg-[#DC2828] text-white
    border border-transparent
    hover:bg-transparent hover:border-[#DC2828] hover:text-[#DC2828]
    transition 
    px-6 py-3 rounded-md text-lg font-medium 
    w-full sm:w-auto
  "
  initial="hidden"
  animate={controls}
  variants={buttonVariants}
  onClick={() => navigate("/contact")}
>
  {buttonText}
</motion.button>


      </div>
    </section>
  );
}
