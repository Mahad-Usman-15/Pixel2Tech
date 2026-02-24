'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import { workCategories } from '../data/work';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
const WorkMarquee = () => {
  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-blue-600 dark:text-blue-400 uppercase mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
            Work That Helps{' '}
            <span className="text-blue-600 italic">Brands Grow</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We focus on results, not just design. Every project is built to
            increase visibility, trust, and sales.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full">
        {/* Gradient Masks for smooth fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-20 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-zinc-950 dark:via-zinc-900/80 dark:to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-20 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-zinc-950 dark:via-zinc-900/80 dark:to-transparent pointer-events-none" />

        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          pauseOnClick={true}
          direction="left"
          delay={0}
          className="py-4"
        >
          {workCategories.map((category, index) => (
            <WorkCard key={category.id} category={category} index={index} />
          ))}
        </Marquee>


      </div>
    </section>
  );
};

const WorkCard = ({ category, index }) => {
  return (
    <Link href={`/portfolio`} className="mx-4 md:mx-6 inline-block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: 'easeOut',
        }}
        className="group relative w-72 md:w-80 lg:w-96 h-80 md:h-96 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ease-out bg-white dark:bg-zinc-800"
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={category.image}
            alt={category.title}
            fill
            sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px, 500px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
          {/* Top Section - Category Title */}
          <div className="transform translate-y-0 group-hover:translate-y-[-8px] transition-transform duration-500 ease-out">
            <h3 className="text-xl md:text-2xl font-bold text-white italic tracking-wide drop-shadow-lg">
              {category.title}
            </h3>
          </div>

          {/* Bottom Section - Subcategories (revealed on hover) */}
          <div className="relative overflow-hidden">
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="absolute bottom-0 left-0 right-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-xl"
            >
              <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">
                What We Do
              </p>
              <ul className="space-y-2">
                {category.subcategories.map((sub, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 5, opacity: 1 }}
                    transition={{ delay: idx * 0.05, duration: 0.2 }}
                    className="text-sm md:text-base text-zinc-800 dark:text-zinc-200 font-medium flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    {sub}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Link */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700"
              >
                <span className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2 gap-1 transition-all duration-300">
                  View Projects
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </motion.div>
            </motion.div>

            {/* Default bottom content (visible when not hovering) */}
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              whileHover={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="text-white"
            >
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed line-clamp-3">
                Explore our portfolio of {category.title.toLowerCase()} projects
                that have helped brands achieve their goals.
              </p>
              <div className="mt-4 flex items-center text-white/90 text-sm font-medium">
                <span>Discover More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Border on Hover */}
        <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-blue-500/50 transition-colors duration-500 pointer-events-none" />

        {/* Shine Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700 pointer-events-none" />
      </motion.div>
    </Link>
  );
};

export default WorkMarquee;
