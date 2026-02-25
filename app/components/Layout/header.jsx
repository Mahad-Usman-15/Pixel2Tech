'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Navigation items configuration
const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isSticky, setIsSticky] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Theme toggle
  useEffect(() => {
    if (mounted) {
      setIsDark(document.documentElement.classList.contains('dark'));
    }
  }, [mounted]);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Scroll detection - become sticky at brands section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Get brands section position
      const brandsSection = document.getElementById('brands-section');

      if (brandsSection) {
        const brandsTop = brandsSection.offsetTop - 100;
        // Become sticky when reaching brands section
        setIsSticky(scrollY >= brandsTop);
      } else {
        // Fallback: become sticky after 600px
        setIsSticky(scrollY >= 600);
      }

      // Detect active section
      const sections = NAV_ITEMS.map((item) => item.label.toLowerCase());
      const scrollPosition = scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileNavOpen]);

  const handleNavClick = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <>
      {/* Header - Fixed Position, Not Sticky Initially */}
      <motion.header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isSticky ? 'top-0' : 'top-4'
        }`}
      >
        {/* Glassmorphism Container */}
        <div
          className={`mx-auto max-w-[calc(100%-2rem)] w-full rounded-2xl border transition-all duration-500 ${
            isSticky
              ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-xl shadow-slate-900/15 border-slate-200/60 dark:border-slate-700/60'
              : 'bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-slate-200/40 dark:border-slate-700/40'
          }`}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-4">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Left: Mobile Menu Icon */}
              <div className="lg:hidden flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileNavOpen(true)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </motion.button>
              </div>

              {/* Center: Logo */}
              <Link href="/" className="flex-shrink-0 mx-2">
                <h1 className='text-xl sm:text-2xl font-bold bg-linear-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text text-transparent'>Pixel2Tech</h1>
              </Link>

              {/* Center: Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {NAV_ITEMS.map((item) => (
                  <DesktopNavItem
                    key={item.label}
                    item={item}
                    isActive={activeSection === item.label.toLowerCase()}
                  />
                ))}
              </nav>

              {/* Right: Theme Toggle + CTA */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {/* Theme Toggle */}
                {mounted && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleTheme}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    aria-label="Toggle theme"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={isDark ? 'moon' : 'sun'}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {isDark ? (
                          <Moon className="w-5 h-5 text-blue-400" />
                        ) : (
                          <Sun className="w-5 h-5 text-amber-500" />
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </motion.button>
                )}

                {/* Desktop CTA Button */}
                <Link
                  href="/contact"
                  className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-medium text-sm transition-all shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/30"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Slide-in Panel */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={handleNavClick}
            />

            {/* Slide-in Navigation Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 200,
                duration: 0.4,
              }}
              className="fixed top-0 left-0 h-full w-72 sm:w-80 max-w-[85vw] bg-white dark:bg-slate-900 z-50 lg:hidden shadow-2xl overflow-y-auto"
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
                <h2 className='text-xl font-bold bg-linear-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text text-transparent'>Pixel2Tech</h2>
                <button
                  onClick={handleNavClick}
                  className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex-shrink-0"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex flex-col p-4 gap-2">
                {NAV_ITEMS.map((item, index) => (
                  <MobileNavItem
                    key={item.label}
                    item={item}
                    index={index}
                    isActive={activeSection === item.label.toLowerCase()}
                    onClick={handleNavClick}
                  />
                ))}
              </nav>

              {/* CTA Button at Bottom */}
              <div className="absolute bottom-6 left-4 right-4">
                <Link
                  href="/contact"
                  onClick={handleNavClick}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/25"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Desktop Nav Item with Animated Underline
function DesktopNavItem({ item, isActive }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={item.href}
      className="relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Item Label */}
      <span className="relative z-10">{item.label}</span>

      {/* Animated Underline */}
      <motion.span
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: isHovered || isActive ? 1 : 0,
          opacity: isHovered || isActive ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
      />

      {/* Subtle Background Glow on Hover */}
      <motion.span
        className="absolute inset-0 bg-blue-600/5 rounded-lg -z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  );
}

// Mobile Nav Item with Stagger Animation
function MobileNavItem({ item, index, isActive, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: index * 0.08,
        duration: 0.3,
      }}
    >
      <Link
        href={item.href}
        onClick={onClick}
        className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
          isActive
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        }`}
      >
        {item.label}
      </Link>
    </motion.div>
  );
}
