import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SERVICES_CONTENT } from "../utils/constants/text";
import { motion } from "framer-motion";
import { HiArrowLeft, HiCheckCircle, HiLightBulb, HiCog, HiChatAlt2, HiQuestionMarkCircle, HiCurrencyDollar, HiMail } from "react-icons/hi";

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICES_CONTENT.cards[id];

  if (!service) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1E1B2B] via-[#2D2643] to-[#1E1B2B] text-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#B250C6]">Service not found!</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-gradient-to-r from-[#4C1E4F] to-[#B250C6] text-white rounded-xl font-semibold"
        >
          Go Back
        </button>
      </div>
    </div>
  );

  const { longDesc, features, benefits, tools, images, testimonials, faq, pricing } = service.details;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#1E1B2B] via-[#2D2643] to-[#1E1B2B] text-white py-20 lg:py-32 px-4 sm:px-6 lg:px-20 relative overflow-hidden">

      {/* Background Dots */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div style={{ backgroundImage: `radial-gradient(circle, #B250C6 1px, transparent 1px)`, backgroundSize: '50px 50px' }} className="absolute inset-0"/>
      </div>

      {/* Animated Orbs */}
      <motion.div className="absolute top-20 left-20 w-96 h-96 bg-[#B250C6]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="absolute bottom-20 right-20 w-96 h-96 bg-[#E8C3F7]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div className="max-w-6xl mx-auto relative z-10" initial="hidden" animate="visible" variants={fadeUp}>

        {/* Back Button */}
        <motion.button
          variants={fadeUp}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="mb-10 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4C1E4F] to-[#B250C6] text-white rounded-xl font-semibold shadow-lg shadow-[#B250C6]/30 hover:shadow-2xl"
        >
          <HiArrowLeft className="text-lg" />
          Back to Services
        </motion.button>

        {/* Header Card */}
        <motion.div variants={fadeUp} className="mb-16 p-10 lg:p-16 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-[#B250C6] to-transparent rounded-full"></div>
          <div className="text-center space-y-6">
            <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.8, type: "spring" }} className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-[#4C1E4F] to-[#B250C6] flex items-center justify-center text-white shadow-2xl shadow-[#B250C6]/50">
              {React.createElement(service.icon, { size: 48 })}
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">{service.heading1} </span>
              <span className="bg-gradient-to-r from-[#4C1E4F] via-[#B250C6] to-[#E8C3F7] text-transparent bg-clip-text">{service.heading2}</span>
            </h1>

            <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">{service.desc}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4C1E4F] to-[#B250C6] rounded-full mx-auto my-6"></div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto">{longDesc}</p>
          </div>
        </motion.div>

        {/* Images */}
        {images?.length > 0 && (
          <motion.div variants={fadeUp} className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ scale: 1.05, y: -5 }} className="relative group overflow-hidden rounded-2xl border border-white/10 hover:border-[#B250C6]/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#B250C6]/20">
                <img src={img} alt={service.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Features */}
        <motion.div variants={fadeUp} className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-10">
            <HiLightBulb className="text-[#B250C6] text-3xl" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Key Features</h2>
          </div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {features.map((feature, idx) => (
              <motion.div key={idx} variants={cardVariant} whileHover={{ y: -5, scale: 1.02 }} className="relative group p-6 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#B250C6]/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-[#B250C6]/20">
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="text-[#B250C6] text-2xl flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-base leading-relaxed">{feature}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Benefits */}
        <motion.div variants={fadeUp} className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-10">
            <HiCheckCircle className="text-[#B250C6] text-3xl" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Benefits</h2>
          </div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {benefits.map((benefit, idx) => (
              <motion.div key={idx} variants={cardVariant} whileHover={{ y: -5, scale: 1.02 }} className="relative group p-6 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#B250C6]/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-[#B250C6]/20">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4C1E4F] to-[#B250C6] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{idx + 1}</span>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Tools */}
        <motion.div variants={fadeUp} className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-10">
            <HiCog className="text-[#B250C6] text-3xl" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Tools & Technologies</h2>
          </div>
          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {tools.map((tool, idx) => (
              <motion.span key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} whileHover={{ scale: 1.1, y: -3 }} className="px-6 py-3 bg-gradient-to-r from-white/[0.1] to-white/[0.05] border border-white/20 hover:border-[#B250C6]/50 text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-[#B250C6]/30 transition-all duration-300">{tool}</motion.span>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        {testimonials?.length > 0 && (
          <motion.div variants={fadeUp} className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-10">
              <HiChatAlt2 className="text-[#B250C6] text-3xl" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Client Testimonials</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {testimonials.map((t, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -5 }} className="relative group p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#B250C6]/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-[#B250C6]/20">
                  <p className="text-gray-300 italic text-lg leading-relaxed mb-4">"{t.feedback}"</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#4C1E4F] to-[#B250C6] rounded-full mb-4"></div>
                  <h4 className="text-white font-bold text-lg">{t.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* FAQ */}
        {faq?.length > 0 && (
          <motion.div variants={fadeUp} className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-10">
              <HiQuestionMarkCircle className="text-[#B250C6] text-3xl" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4 max-w-3xl mx-auto">
              {faq.map((item, idx) => (
                <motion.details key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="group p-6 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#B250C6]/50 transition-all duration-300 backdrop-blur-sm shadow-lg">
                  <summary className="font-bold text-lg cursor-pointer text-white flex items-center gap-3">
                    <span className="text-[#B250C6]">Q:</span>{item.question}
                  </summary>
                  <p className="mt-4 text-gray-400 leading-relaxed pl-6">{item.answer}</p>
                </motion.details>
              ))}
            </div>
          </motion.div>
        )}

        {/* Pricing */}
        {pricing?.length > 0 && (
          <motion.div variants={fadeUp} className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-10">
              <HiCurrencyDollar className="text-[#B250C6] text-3xl" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Pricing Plans</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricing.map((p, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -10, scale: 1.02 }} className="relative group p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#B250C6]/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-[#B250C6]/30">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#B250C6] to-transparent rounded-full"></div>
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">{p.plan}</h3>
                  <p className="text-gray-300 text-lg text-center mb-4">{p.desc}</p>
                  <div className="text-center text-4xl font-extrabold text-white mb-6">{p.price}</div>
                  <a href={p.ctaLink} className="inline-block w-full px-6 py-3 text-center bg-gradient-to-r from-[#4C1E4F] to-[#B250C6] text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">{p.ctaText}</a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div variants={fadeUp} className="mt-20 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to get started?</h2>
          <p className="text-gray-300 mb-8">Contact us today and take your business to the next level.</p>
          <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-[#4C1E4F] to-[#B250C6] text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            Get in Touch <HiMail className="inline ml-2 text-xl"/>
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}
