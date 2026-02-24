"use client";

import { motion } from "framer-motion";
import { servicesData } from "../data/services";
import * as LucideIcons from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  const { heading, intro, closingLine, services } = servicesData;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="md:text-4xl text-3xl text-slate-900 font-bold mb-6 md:!leading-[45px] leading-[40px]"
            variants={itemVariants}
          >
            {heading.split("Build & Grow")[0]}
            <span className="text-blue-700 whitespace-nowrap">Build & Grow</span>
          </motion.h2>
          <motion.p
            className="text-slate-600 text-base leading-relaxed"
            variants={itemVariants}
          >
            {intro}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-md:max-w-lg mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => {
            const IconComponent = LucideIcons[service.icon] || LucideIcons.Star;

            return (
              <motion.div
                key={service.id}
                className="bg-purple-50 text-left border border-gray-300 rounded-3xl p-6 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="w-11 h-11 mb-6 text-blue-700">
                  <IconComponent className="w-full h-full" strokeWidth={1.5} />
                </div>
                <h3 className="text-slate-900 text-lg font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <a
                  href="javascript:void(0);"
                  className="text-[15px] inline-flex items-center font-medium hover:text-blue-700 mt-12 group"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1.5 fill-current transition-transform group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m23.564 11.235-7.56-7.56a1.08 1.08 0 0 0-1.528 1.528l5.717 5.716H1.2a1.08 1.08 0 0 0 0 2.16h18.993l-5.717 5.716a1.08 1.08 0 1 0 1.528 1.528l7.56-7.56a1.08 1.08 0 0 0 0-1.528z"
                      data-original="#000000"
                    />
                  </svg>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-slate-700 text-lg font-medium">
            {closingLine}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
