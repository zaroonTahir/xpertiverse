import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SERVICES_CONTENT } from "../utils/constants/text";
import { motion } from "framer-motion";
import { HiArrowLeft, HiCheckCircle, HiLightBulb, HiCog, HiChatAlt2, HiQuestionMarkCircle, HiCurrencyDollar, HiMail, HiStar, HiSparkles } from "react-icons/hi";

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICES_CONTENT.cards[id];

  if (!service) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">Service not found!</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-gradient-to-r from-sky-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
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
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 py-20 lg:py-32 px-4 sm:px-6 lg:px-20 relative overflow-hidden">

      {/* Modern Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div style={{ 
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
          `, 
          backgroundSize: '60px 60px' 
        }} className="absolute inset-0"/>
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-sky-400/15 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15], x: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15], x: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div className="max-w-6xl mx-auto relative z-10" initial="hidden" animate="visible" variants={fadeUp}>

        {/* Back Button */}
        <motion.button
          variants={fadeUp}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="mb-10 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all"
        >
          <HiArrowLeft className="text-lg" />
          Back to Services
        </motion.button>

        {/* Header Card */}
        <motion.div variants={fadeUp} className="mb-16 p-10 lg:p-16 rounded-3xl bg-white border border-slate-200 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500"></div>
          
          <div className="text-center space-y-6">
            <motion.div 
              initial={{ scale: 0, rotate: -180 }} 
              animate={{ scale: 1, rotate: 0 }} 
              transition={{ duration: 0.8, type: "spring" }} 
              className="relative w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-sky-500 to-purple-600 flex items-center justify-center text-white shadow-2xl shadow-sky-500/50"
            >
              {React.createElement(service.icon, { size: 48 })}
              <div className="absolute -inset-1 bg-gradient-to-br from-sky-500 to-purple-600 rounded-2xl opacity-50 blur-xl"></div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-slate-900 drop-shadow-sm">{service.heading1} </span>
              <span className="bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-sm">{service.heading2}</span>
            </h1>

            <p className="text-slate-600 text-xl leading-relaxed max-w-3xl mx-auto">{service.desc}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded-full mx-auto my-6"></div>
            <p className="text-slate-600 text-lg leading-relaxed max-w-4xl mx-auto">{longDesc}</p>
          </div>
        </motion.div>

        {/* Images Gallery */}
        {images?.length > 0 && (
          <motion.div variants={fadeUp} className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-10">
              <HiSparkles className="text-sky-500 text-3xl" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Gallery</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: idx * 0.1 }} 
                  whileHover={{ scale: 1.05, y: -5 }} 
                  className="relative group overflow-hidden rounded-2xl border-2 border-slate-200 hover:border-sky-300 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-sky-500/20"
                >
                  <img src={img} alt={service.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Features */}
        <motion.div variants={fadeUp} className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-10">
            <HiLightBulb className="text-purple-500 text-3xl" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Key Features</h2>
          </div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={cardVariant} 
                whileHover={{ y: -5, scale: 1.02 }} 
                className="relative group p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <HiCheckCircle className="text-white text-xl" />
                  </div>
                  <p className="text-slate-700 text-base leading-relaxed">{feature}</p>
                </div>
                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-100 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Benefits */}
        <motion.div variants={fadeUp} className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-10">
            <HiCheckCircle className="text-sky-500 text-3xl" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Benefits</h2>
          </div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {benefits.map((benefit, idx) => {
              const gradients = [
                "from-sky-500 to-cyan-600",
                "from-purple-500 to-fuchsia-600",
                "from-pink-500 to-rose-600"
              ];
              const gradient = gradients[idx % 3];
              
              return (
                <motion.div 
                  key={idx} 
                  variants={cardVariant} 
                  whileHover={{ y: -5, scale: 1.02 }} 
                  className="relative group p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/20"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <span className="text-white font-bold text-sm">{idx + 1}</span>
                    </div>
                    <p className="text-slate-700 text-base leading-relaxed">{benefit}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div variants={fadeUp} className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-10">
            <HiCog className="text-pink-500 text-3xl" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Tools & Technologies</h2>
          </div>
          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {tools.map((tool, idx) => {
              const gradients = [
                "from-sky-500 to-cyan-500",
                "from-purple-500 to-fuchsia-500",
                "from-pink-500 to-rose-500"
              ];
              const gradient = gradients[idx % 3];
              
              return (
                <motion.span 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.4, delay: idx * 0.05 }} 
                  whileHover={{ scale: 1.1, y: -3 }} 
                  className={`px-6 py-3 bg-gradient-to-r ${gradient} border border-white/20 text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  {tool}
                </motion.span>
              );
            })}
          </div>
        </motion.div>

        {/* Testimonials */}
        {testimonials?.length > 0 && (
          <motion.div variants={fadeUp} className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-10">
              <HiChatAlt2 className="text-purple-500 text-3xl" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Client Testimonials</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {testimonials.map((t, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: idx * 0.1 }} 
                  whileHover={{ y: -5 }} 
                  className="relative group p-8 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 text-6xl text-purple-100 opacity-50">"</div>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="text-yellow-400 text-lg" />
                    ))}
                  </div>
                  
                  <p className="text-slate-700 text-lg leading-relaxed mb-6 relative z-10">"{t.feedback}"</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4"></div>
                  <h4 className="text-slate-900 font-bold text-lg">{t.name}</h4>
                  <p className="text-slate-500 text-sm">Verified Client</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* FAQ */}
        {faq?.length > 0 && (
          <motion.div variants={fadeUp} className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-10">
              <HiQuestionMarkCircle className="text-sky-500 text-3xl" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4 max-w-3xl mx-auto">
              {faq.map((item, idx) => (
                <motion.details 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: idx * 0.1 }} 
                  className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 transition-all duration-300 shadow-lg"
                >
                  <summary className="font-bold text-lg cursor-pointer text-slate-900 flex items-center gap-3 hover:text-sky-600 transition-colors">
                    <span className="text-2xl text-sky-500">Q:</span>
                    {item.question}
                  </summary>
                  <p className="mt-4 text-slate-600 leading-relaxed pl-10 border-l-2 border-sky-200">{item.answer}</p>
                </motion.details>
              ))}
            </div>
          </motion.div>
        )}

        {/* Pricing */}
        {pricing?.length > 0 && (
          <motion.div variants={fadeUp} className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-10">
              <HiCurrencyDollar className="text-purple-500 text-3xl" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Pricing Plans</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricing.map((p, idx) => {
                const gradients = [
                  { bg: "from-sky-500 to-cyan-600", border: "sky-300" },
                  { bg: "from-purple-500 to-fuchsia-600", border: "purple-300" },
                  { bg: "from-pink-500 to-rose-600", border: "pink-300" }
                ];
                const gradient = gradients[idx % 3];
                
                return (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.5, delay: idx * 0.1 }} 
                    whileHover={{ y: -10, scale: 1.02 }} 
                    className={`relative group p-8 rounded-2xl bg-white border-2 border-${gradient.border} transition-all duration-300 shadow-xl hover:shadow-2xl`}
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient.bg}`}></div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">{p.plan}</h3>
                    <p className="text-slate-600 text-base text-center mb-6">{p.desc}</p>
                    <div className={`text-center text-5xl font-extrabold bg-gradient-to-r ${gradient.bg} bg-clip-text text-transparent mb-6`}>{p.price}</div>
                    
                    <motion.a 
                      href={p.ctaLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`block w-full px-6 py-4 text-center bg-gradient-to-r ${gradient.bg} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      {p.ctaText}
                    </motion.a>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Final CTA */}
        <motion.div variants={fadeUp} className="mt-20 text-center max-w-2xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-gray-300 mb-8 text-lg">Contact us today and take your business to the next level.</p>
            
            <motion.a 
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-2xl shadow-sky-500/30 hover:shadow-3xl hover:shadow-purple-500/40 transition-all duration-300 border border-white/10"
            >
              Get in Touch
              <HiMail className="text-2xl"/>
            </motion.a>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500"></div>
        </motion.div>

      </motion.div>
    </section>
  );
}