'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Zap, Globe, TrendingUp, Users, Brain } from 'lucide-react';

const reasons = [
  {
    icon: Globe,
    title: "Fully remote and fast working team",
  },
  {
    icon: Brain,
    title: "AI powered tools for smarter results",
  },
  {
    icon: CheckCircle,
    title: "Complete branding, marketing, and web solutions",
  },
  {
    icon: TrendingUp,
    title: "Focused on growth, not just design",
  },
  {
    icon: Globe,
    title: "Based in Pakistan, working globally",
  },
  {
    icon: Users,
    title: "Trusted by ambitious founders and companies",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-blue-600 uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Choose Pixel2Tech
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                </div>
                <p className="text-base font-medium text-slate-700 leading-relaxed pt-2">
                  {reason.title}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-block px-8 py-4 bg-blue-50 rounded-2xl">
            <p className="text-lg md:text-xl font-medium text-slate-700">
              We act like your in-house creative department without the high cost.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
