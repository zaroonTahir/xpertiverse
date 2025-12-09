import React from "react";
import { FOOTER_CONTENT } from "../../utils/constants/text";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker, HiArrowUp } from "react-icons/hi";

export default function FooterSection() {
  const { logo, tagline, description, copyright, navigation, quickLinks, policies } =
    FOOTER_CONTENT;

  const navigate = useNavigate();
  const location = useLocation();

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.footer
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
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

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top Gradient Accent Line */}
      <div className="w-full h-1 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
            
            {/* Company Info */}
            <motion.div variants={item} className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="text-4xl">🔗</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-purple-500/20 blur-xl"></div>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {logo}
                </h3>
              </div>
              <p className="text-xl font-semibold text-gray-300 mb-4 bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                {tagline}
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">{description}</p>
              
              {/* Social Icons with unique colors */}
              <div className="flex gap-4">
                {[
                  { icon: FaFacebookF, gradient: "from-sky-500 to-cyan-500", hover: "sky-500" },
                  { icon: FaTwitter, gradient: "from-purple-500 to-fuchsia-500", hover: "purple-500" },
                  { icon: FaLinkedinIn, gradient: "from-pink-500 to-rose-500", hover: "pink-500" },
                  { icon: FaInstagram, gradient: "from-indigo-500 to-blue-500", hover: "indigo-500" },
                  { icon: FaGithub, gradient: "from-slate-500 to-slate-600", hover: "slate-500" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 5, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${social.gradient}
                      flex items-center justify-center
                      shadow-lg hover:shadow-xl hover:shadow-${social.hover}/30
                      transition-all duration-300 group border border-white/10`}
                  >
                    <social.icon className="text-white text-base" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div variants={item}>
              <h4 className="text-xl font-bold mb-6 text-white relative inline-block">
                Navigation
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {navigation.map((navItem, index) => {
                  let id = navItem.toLowerCase().replace(" ", "");
                  return (
                    <motion.li 
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <button
                        onClick={() => handleNavigation(id)}
                        className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-sky-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300 
                          flex items-center gap-2 group"
                      >
                        <span className="w-0 h-0.5 bg-gradient-to-r from-sky-500 to-purple-500 group-hover:w-4 transition-all duration-300 rounded-full"></span>
                        {navItem}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={item}>
              <h4 className="text-xl font-bold mb-6 text-white relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((quickLink, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => handleNavigation("contact")}
                      className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all duration-300 
                        flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-4 transition-all duration-300 rounded-full"></span>
                      {quickLink}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={item}>
              <h4 className="text-xl font-bold mb-6 text-white relative inline-block">
                Get In Touch
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></span>
              </h4>
              <div className="space-y-5">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 text-gray-400 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-sky-500/30 flex items-center justify-center flex-shrink-0 group-hover:border-sky-500/50 transition-all">
                    <HiMail className="text-sky-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:info@company.com" className="hover:text-sky-400 transition-colors font-medium">
                      info@company.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 text-gray-400 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:border-purple-500/50 transition-all">
                    <HiPhone className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+1234567890" className="hover:text-purple-400 transition-colors font-medium">
                      +1 (234) 567-890
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 text-gray-400 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/30 flex items-center justify-center flex-shrink-0 group-hover:border-pink-500/50 transition-all">
                    <HiLocationMarker className="text-pink-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Location</p>
                    <p className="font-medium">123 Business Ave, Suite 100<br />New York, NY 10001</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Divider with gradient */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-sky-500/30 via-purple-500/30 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <motion.div 
            variants={item}
            className="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm mb-1">{copyright}</p>
              <p className="text-gray-500 text-xs">
                Built with ❤️ using React & Tailwind CSS
              </p>
            </div>

            {/* Policies */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {policies.map((policy, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-sky-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300"
                >
                  {policy}
                </motion.button>
              ))}
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-purple-600 
                flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-sky-500/30
                transition-all duration-300 border border-white/10 group"
            >
              <HiArrowUp className="text-white text-xl group-hover:animate-bounce" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Accent Line */}
      <div className="w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500"></div>

      {/* Decorative Corner Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-sky-500/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/10 to-transparent pointer-events-none"></div>
    </motion.footer>
  );
}