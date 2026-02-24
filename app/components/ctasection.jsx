"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background with a subtle gradient and pattern */}
      <div className="absolute inset-0 bg-linear-to-b from-zinc-50 to-white -z-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-[0.03] pointer-events-none -z-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
            Let's Collaborate
          </span>
          
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 mb-8 tracking-tight !leading-tight">
            Ready to <span className="text-blue-600">Get Started</span>
          </h2>
          
          <p className="text-lg md:text-xl text-zinc-600 mb-12 max-w-2xl mx-auto font-medium">
            Contact us today and let's discuss how we can help grow your brand. 
            We're excited to hear about your vision.
          </p>
        </motion.div>

        {/* Contact Information Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 p-6 bg-white border border-zinc-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-2xl">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Email Us</p>
              <a href="mailto:info@pixel2tech.com" className="text-zinc-900 font-bold hover:text-blue-600 transition-colors">
                info@pixel2tech.com
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 p-6 bg-white border border-zinc-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center bg-green-50 text-green-600 rounded-2xl">
              <Phone className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Call Us</p>
              <a href="tel:03177475212" className="text-zinc-900 font-bold hover:text-blue-600 transition-colors">
                0317 7475212
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button 
            type="button"
            className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-black text-white bg-blue-600 rounded-[60px] hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-200 hover:scale-105 active:scale-95"
          >
            Contact Us
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
