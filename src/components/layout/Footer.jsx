import React from "react";
import { FOOTER_CONTENT } from "../../utils/constants/text";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

export default function FooterSection() {
  const { logo, tagline, description, copyright, navigation, quickLinks, policies } =
    FOOTER_CONTENT;

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll or navigate logic
  const handleNavigation = (id) => {
    if (id === "contact") {
      navigate("/contact");
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
        }
      }, 300);
    } else {
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
      }
    }
  };

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.footer
      className="bg-black text-white py-16 px-4 sm:px-6 lg:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-14 lg:gap-20 justify-between">
        {/* Logo & Description */}
        <motion.div className="w-full lg:w-auto" variants={item}>
          <div className="flex items-center gap-3 mb-4">
            <div className="text-3xl">🔗</div>
            <h3 className="text-2xl font-semibold">{logo}</h3>
          </div>
          <h3 className="text-2xl">{tagline}</h3>
          <p className="text-gray-400 pt-4 max-w-sm">{description}</p>
          <div className="mt-12 pt-6 text-sm">{copyright}</div>
        </motion.div>

        {/* Links Section */}
        <motion.div className="w-full lg:w-auto" variants={item}>
          <div className="flex flex-col sm:flex-row gap-10 lg:gap-20">
            {/* Navigation Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-400 cursor-pointer">
                {navigation.map((item, index) => {
                  // Map footer navigation to section IDs
                  let id = item.toLowerCase().replace(" ", "");
                  return (
                    <li key={index} onClick={() => handleNavigation(id)}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 cursor-pointer">
                {quickLinks
                  .filter((item) => item === "Contact") // only keep Contact
                  .map((item, index) => (
                    <li key={index} onClick={() => handleNavigation("contact")}>
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Policies */}
          <div className="flex flex-wrap gap-5 sm:gap-10 pt-11 text-gray-400">
            {policies.map((policy, index) => (
              <p key={index}>{policy}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
