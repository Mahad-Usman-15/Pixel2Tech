"use client";

import React from "react";
import { motion } from "framer-motion";
import { processSteps } from "../data/process";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const Process = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-zinc-50 py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 blur-[100px] rounded-full -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 blur-[100px] rounded-full -ml-48 -mb-48 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Sparkles className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs">
              Workflow Excellence
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 mb-8 tracking-tight flex flex-col md:flex-row items-center justify-center gap-x-4">
            Our Strategic 
            <span className="relative inline-block">
              <span className="text-blue-600 italic">Process</span>
              <motion.svg 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -bottom-2 left-0 h-2 text-blue-200/50" 
                viewBox="0 0 100 10" 
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
              </motion.svg>
            </span>
          </h2>
          
          <p className="text-zinc-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            We've refined our methodology to ensure precision, transparency, and 
            outstanding results for every project we undertake.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16"
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="group flex flex-col items-start"
              >
                <div className="relative mb-8">
                  <div className={`w-20 h-20 rounded-[2rem] ${step.color} flex items-center justify-center relative z-10 group-hover:rotate-6 transition-transform duration-500 shadow-lg group-hover:shadow-blue-200`}>
                    <Icon className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -inset-2 bg-white rounded-[2.5rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl"></div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center text-xs font-bold border-4 border-zinc-50 z-20">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-blue-600 transition-colors flex items-center gap-3">
                  {step.title}
                </h3>
                
                <p className="text-zinc-500 leading-relaxed mb-6 font-medium">
                  {step.description}
                </p>

                <div className="w-0 group-hover:w-full h-0.5 bg-blue-600 transition-all duration-500 ease-out mb-4"></div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center text-zinc-400 group-hover:text-blue-600 transition-colors cursor-pointer text-[10px] font-black uppercase tracking-[0.25em]"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>


      </div>
    </section>
  );
};

export default Process;
