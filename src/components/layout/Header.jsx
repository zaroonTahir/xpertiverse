import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "../../assets/images/logo1.png";
import { HEADER_CONTENT } from "../../utils/constants/text";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const { logo, tagline, mainMenu, buttonText } = HEADER_CONTENT;

  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll or redirect logic
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
          window.scrollTo({
            top: section.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }, 300);
    } else {
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }

    setMobileMenu(false);
  };

  // Close mobile on outside click
  useEffect(() => {
    const handler = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`w-full px-4 sm:px-6 lg:px-20 text-white fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-900/95 backdrop-blur-lg shadow-xl border-b border-white/10" 
          : "bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-md"
      }`}
    >
      <nav className="container max-w-7xl mx-auto flex justify-between items-center py-4">

        {/* Logo */}
        <motion.div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative">
            <img 
              src={Logo} 
              className="w-20 h-12 object-contain drop-shadow-2xl" 
              alt="Xpertiverse Logo"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-purple-500/20 blur-xl -z-10"></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
              {logo}
            </h2>
            <p className="text-xs font-medium bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent tracking-wider">
              {tagline}
            </p>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {mainMenu.map((item, i) => (
            <motion.li
              key={i}
              className="cursor-pointer relative group"
              onClick={() => handleNavigation(item.id)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10 text-gray-200 group-hover:text-white transition-colors duration-300">
                {item.label}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-purple-500 
                             group-hover:w-full transition-all duration-300 rounded-full"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-sky-500/0 to-purple-500/0 
                             group-hover:from-sky-500/10 group-hover:to-purple-500/10 
                             rounded-lg blur-xl transition-all duration-300"></span>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Button */}
        <motion.button
          onClick={() => navigate("/contact")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-xl 
                   bg-gradient-to-r from-sky-500 to-purple-600
                   text-white font-semibold shadow-lg shadow-sky-500/30
                   hover:shadow-xl hover:shadow-purple-500/40
                   transition-all duration-300 border border-white/10
                   relative overflow-hidden group"
        >
          <span className="relative z-10">{buttonText}</span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-sky-500 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </motion.button>

        {/* Mobile Menu Icon */}
        <motion.button 
          className="lg:hidden text-sky-400 text-2xl relative"
          onClick={() => setMobileMenu(true)}
          whileTap={{ scale: 0.9 }}
        >
          <FaBars />
          <span className="absolute inset-0 bg-sky-400/20 blur-lg"></span>
        </motion.button>
      </nav>

      {/* Mobile Slide Menu */}
      <motion.div
        ref={mobileMenuRef}
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: mobileMenu ? 0 : 500, opacity: mobileMenu ? 1 : 0 }}
        transition={{ duration: 0.3, type: "spring", damping: 25 }}
        className="fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
                 z-50 shadow-2xl px-6 py-6 border-l border-white/10"
      >
        {/* Close Button */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-xl font-bold bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
            Menu
          </div>
          <motion.button
            whileHover={{ rotate: 90, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <FaTimes 
              size={24} 
              className="cursor-pointer text-sky-400 drop-shadow-lg" 
              onClick={() => setMobileMenu(false)} 
            />
          </motion.button>
        </div>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col gap-4">
          {mainMenu.map((item, i) => (
            <motion.li
              key={i}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="cursor-pointer p-4 rounded-xl hover:bg-white/5 
                       transition-all duration-300 border border-transparent
                       hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/10
                       group"
              onClick={() => handleNavigation(item.id)}
            >
              <span className="text-gray-200 group-hover:text-white transition-colors duration-300 font-medium">
                {item.label}
              </span>
            </motion.li>
          ))}

          {/* Mobile Contact Button */}
          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: mainMenu.length * 0.1 + 0.2 }}
            onClick={() => {
              navigate("/contact");
              setMobileMenu(false);
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3.5 rounded-xl 
                     bg-gradient-to-r from-sky-500 to-purple-600
                     text-white font-semibold shadow-lg shadow-sky-500/30
                     hover:shadow-xl hover:shadow-purple-500/40
                     transition-all duration-300 border border-white/10"
          >
            {buttonText}
          </motion.button>
        </ul>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-500/10 to-transparent pointer-events-none"></div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>
      </motion.div>

      {/* Backdrop for mobile menu */}
      {mobileMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenu(false)}
        />
      )}
    </motion.header>
  );
};

export default Header;