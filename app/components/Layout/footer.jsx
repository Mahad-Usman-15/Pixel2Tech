"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                Pixel2Tech
              </h3>
            </Link>
            <p className="text-gray-600 text-base leading-relaxed">
              Leading AI Powered Creative Agency from Pakistan serving clients worldwide. 
              We specialize in web development, branding, UI/UX design, and digital marketing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                Home
              </Link>
              <Link href="/about" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                About Us
              </Link>
              <Link href="/services" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                Services
              </Link>
              <Link href="/portfolio" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                Portfolio
              </Link>
              <Link href="/blogs" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-6">
              Our Services
            </h4>
            <nav className="space-y-3">
              <Link href="/services" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                Branding & Identity
              </Link>
              <Link href="/services" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                Web Design & Development
              </Link>
              <Link href="/services" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                UI/UX Design
              </Link>
              <Link href="/services" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                Social Media Marketing
              </Link>
              <Link href="/services" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                AI Solutions
              </Link>
              <Link href="/contact" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                Get a Quote
              </Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-6">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@pixel2tech.com"
                className="block text-gray-700 hover:text-blue-700 transition-colors duration-200"
              >
                hello@pixel2tech.com
              </a>
              <p className="text-gray-600">
                Pakistan Based, Serving Worldwide
              </p>
              <Link 
                href="/contact" 
                className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-gray-500 text-sm">
              © {currentYear} Pixel2Tech. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/about" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
