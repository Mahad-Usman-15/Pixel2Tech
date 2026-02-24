'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, X } from 'lucide-react';

// Portfolio data for the marquee
const portfolioItems = [
  {
    id: 1,
    title: 'Brand Identity Redesign',
    category: 'Branding',
    image: '/images/portfolio-1.jpg',
    description: 'Complete brand transformation for a tech startup, including logo design, color palette, typography, and brand guidelines.',
    images: ['/images/portfolio-1.jpg', '/images/portfolio-2.jpg', '/images/portfolio-3.jpg', '/images/portfolio-4.jpg'],
  },
  {
    id: 2,
    title: 'E-commerce Platform UI',
    category: 'Web Design',
    image: '/images/ecommerce.jpg',
    description: 'Modern e-commerce interface with seamless checkout flow, product discovery, and mobile-first responsive design.',
    images: ['/images/ecommerce.jpg', '/images/portfolio-2.jpg', '/images/portfolio-3.jpg', '/images/website.jpg'],
  },
  {
    id: 3,
    title: 'AI Dashboard Interface',
    category: 'UI/UX',
    image: '/images/ai.jpg',
    description: 'Intelligent dashboard for AI-powered analytics with real-time data visualization and intuitive controls.',
    images: ['/images/ai.jpg', '/images/portfolio-1.jpg', '/images/portfolio-4.jpg', '/images/uiux.jpg'],
  },
  {
    id: 4,
    title: 'Social Media Campaign',
    category: 'Marketing',
    image: '/images/social.jpg',
    description: 'Comprehensive social media strategy with engaging visuals, content calendars, and performance tracking.',
    images: ['/images/social.jpg', '/images/blog-1.jpg', '/images/blog-2.jpg', '/images/portfolio-3.jpg'],
  },
  {
    id: 5,
    title: 'Mobile App Design',
    category: 'UI/UX',
    image: '/images/portfolio-5.jpg',
    description: 'Native mobile application design with focus on user experience, accessibility, and modern interaction patterns.',
    images: ['/images/portfolio-5.jpg', '/images/portfolio-6.jpg', '/images/uiux.jpg', '/images/website.jpg'],
  },
  {
    id: 6,
    title: 'Corporate Website',
    category: 'Web Design',
    image: '/images/website.jpg',
    description: 'Professional corporate website with clean design, fast performance, and SEO-optimized structure.',
    images: ['/images/website.jpg', '/images/portfolio-1.jpg', '/images/portfolio-2.jpg', '/images/blog-3.jpg'],
  },
];

// Custom cursor component
function CustomCursor({ mode, position }) {
  return (
    <AnimatePresence>
      {mode && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, x: position.x, y: position.y }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="fixed z-[100] pointer-events-none"
          style={{ left: 0, top: 0 }}
        >
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-blue-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <span className="text-white text-xs font-semibold whitespace-nowrap">
                {mode}
              </span>
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-ping" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Project Overlay Component
function ProjectOverlay({ project, onClose }) {
  const [cursorMode, setCursorMode] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <CustomCursor mode={cursorMode} position={cursorPosition} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen"
        onClick={handleOverlayClick}
      >
        {/* Blurred Background - Full Screen */}
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl" />

        {/* Close button - Top Right Corner */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onMouseEnter={() => setCursorMode('Close')}
          onMouseLeave={() => setCursorMode(null)}
          onClick={onClose}
          className="absolute top-8 right-8 z-50 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
        >
          <X className="w-7 h-7" />
        </motion.button>

        {/* Full Screen Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-50 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-y-auto"
        >
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-full flex flex-col">
            {/* Header - Full Width */}
            <div className="p-8 md:p-12 border-b border-white/10 flex-shrink-0">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <span className="inline-block px-5 py-2 rounded-full bg-blue-600/30 text-blue-300 text-sm font-semibold uppercase tracking-wider mb-4 border border-blue-500/30">
                    {project.category}
                  </span>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {project.title}
                  </h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:flex px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live
                </motion.button>
              </div>
            </div>

            {/* Images Grid - Full Width */}
            <div className="p-8 md:p-12 flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-medium">Project Preview {index + 1}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Description - Scrollable Content */}
            <div className="px-8 md:px-12 pb-8 md:pb-12 flex-grow">
              <div className="max-w-4xl mx-auto space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Project Overview</h3>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Additional Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
                  <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-3xl font-bold text-blue-400">100%</p>
                    <p className="text-slate-400 text-sm mt-1">Client Satisfaction</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-3xl font-bold text-cyan-400">2x</p>
                    <p className="text-slate-400 text-sm mt-1">Faster Delivery</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-3xl font-bold text-purple-400">5.0</p>
                    <p className="text-slate-400 text-sm mt-1">Average Rating</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-3xl font-bold text-green-400">24/7</p>
                    <p className="text-slate-400 text-sm mt-1">Support</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2"
                  >
                    Start Similar Project
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="flex-1 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold text-lg transition-colors backdrop-blur-sm"
                  >
                    Close Preview
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

// Marquee Item Component
function MarqueeItem({ item, onClick, onHoverChange }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => onHoverChange('Expand+')}
      onMouseLeave={() => onHoverChange(null)}
      onClick={() => onClick(item)}
      className="relative w-64 md:w-72 lg:w-80 flex-shrink-0 cursor-pointer group"
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-lg">
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
            {item.category}
          </span>
          <h3 className="text-white font-semibold mt-1 line-clamp-2">
            {item.title}
          </h3>
        </div>

        {/* Hover Indicator */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
      </div>
    </motion.div>
  );
}

// Vertical Marquee Column Component
function VerticalMarqueeColumn({ items, direction, onItemHover, onItemClick, delay = 0 }) {
  return (
    <div className="flex flex-col gap-6">
      <motion.div
        initial={{ y: direction === 'up' ? 0 : -50 }}
        animate={{ y: direction === 'up' ? '-50%' : 0 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          delay: delay,
        }}
        className="flex flex-col gap-6"
      >
        {[...items, ...items].map((item, index) => (
          <MarqueeItem
            key={`${item.id}-${index}`}
            item={item}
            onClick={onItemClick}
            onHoverChange={onItemHover}
          />
        ))}
      </motion.div>
    </div>
  );
}

// Horizontal Marquee for Mobile (Single Row)
function HorizontalMarquee({ items, onItemHover, onItemClick, direction = 'left' }) {
  return (
    <div className="flex gap-6 overflow-hidden">
      <motion.div
        initial={{ x: direction === 'left' ? 0 : '-50%' }}
        animate={{ x: direction === 'left' ? '-50%' : 0 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
        className="flex gap-6"
      >
        {[...items, ...items].map((item, index) => (
          <MarqueeItem
            key={`${item.id}-mobile-${direction}-${index}`}
            item={item}
            onClick={onItemClick}
            onHoverChange={onItemHover}
          />
        ))}
      </motion.div>
    </div>
  );
}

// Two-Row Horizontal Marquee for Mobile
function TwoRowHorizontalMarquee({ items, onItemHover, onItemClick }) {
  const row1Items = items.filter((_, i) => i % 2 === 0);
  const row2Items = items.filter((_, i) => i % 2 === 1);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Top Row - Scroll Left */}
      <div className="overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
          className="flex gap-4"
        >
          {[...row1Items, ...row1Items].map((item, index) => (
            <motion.div
              key={`${item.id}-row1-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => onHoverChange('Expand+')}
              onMouseLeave={() => onHoverChange(null)}
              onClick={() => onItemClick(item)}
              className="relative w-56 sm:w-64 flex-shrink-0 cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-white font-semibold mt-1 text-sm line-clamp-2">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-blue-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Row - Scroll Right */}
      <div className="overflow-hidden">
        <motion.div
          initial={{ x: '-50%' }}
          animate={{ x: 0 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
          className="flex gap-4"
        >
          {[...row2Items, ...row2Items].map((item, index) => (
            <motion.div
              key={`${item.id}-row2-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => onHoverChange('Expand+')}
              onMouseLeave={() => onHoverChange(null)}
              onClick={() => onItemClick(item)}
              className="relative w-56 sm:w-64 flex-shrink-0 cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-white font-semibold mt-1 text-sm line-clamp-2">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-blue-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// Main Hero Section Component
export default function HeroSection() {
  const [cursorMode, setCursorMode] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseOverlay = () => {
    setSelectedProject(null);
  };

  // Split items for 3 columns (desktop) and 2 rows (mobile)
  const column1Items = portfolioItems.filter((_, i) => i % 3 === 0);
  const column2Items = portfolioItems.filter((_, i) => i % 3 === 1);
  const column3Items = portfolioItems.filter((_, i) => i % 3 === 2);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Custom Cursor */}
      {/* <CustomCursor mode={cursorMode} position={cursorPosition} /> */}

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-rule='nonzero'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-400 text-sm font-medium">
                  AI-Powered Creative Agency
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
              >
                Leading{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
                  AI Powered
                </span>{' '}
                Creative Agency for the Modern Era
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl"
              >
                We help founders and brands grow with strong branding, powerful
                websites, and smart creative strategy. Based in Pakistan. Working
                with clients worldwide.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setCursorMode('Book Call')}
                  onMouseLeave={() => setCursorMode(null)}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Book a Free Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setCursorMode('View Work')}
                  onMouseLeave={() => setCursorMode(null)}
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold text-lg backdrop-blur-sm transition-all duration-300"
                >
                  View Our Work
                </motion.button>
              </motion.div>

              {/* Trust Line */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-4 pt-4"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-sm">
                  <span className="text-white font-semibold">Trusted by 100+</span>{' '}
                  founders across multiple countries.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Portfolio Marquee */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="relative h-[600px] lg:h-[700px] overflow-hidden"
            >
              {/* Desktop: 3 Vertical Columns */}
              <div className="hidden lg:flex h-full gap-6">
                <VerticalMarqueeColumn
                  items={column1Items}
                  direction="up"
                  delay={0}
                  onItemHover={setCursorMode}
                  onItemClick={handleProjectClick}
                />
                <VerticalMarqueeColumn
                  items={column2Items}
                  direction="down"
                  delay={-10}
                  onItemHover={setCursorMode}
                  onItemClick={handleProjectClick}
                />
                <VerticalMarqueeColumn
                  items={column3Items}
                  direction="up"
                  delay={-5}
                  onItemHover={setCursorMode}
                  onItemClick={handleProjectClick}
                />
              </div>

              {/* Mobile/Tablet: Two-Row Horizontal Marquee */}
              <div className="lg:hidden h-full flex items-center px-4">
                <TwoRowHorizontalMarquee
                  items={portfolioItems}
                  onItemHover={setCursorMode}
                  onItemClick={handleProjectClick}
                />
              </div>

              {/* Gradient Masks */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none lg:block hidden" />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none lg:block hidden" />
              
              {/* Mobile Gradient Masks - Horizontal */}
              <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none lg:hidden block" />
              <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none lg:hidden block" />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Project Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectOverlay
            project={selectedProject}
            onClose={handleCloseOverlay}
          />
        )}
      </AnimatePresence>
    </>
  );
}
