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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pixel2Tech
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Leading AI Powered Creative Agency from Pakistan serving clients worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <Link href="/about" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                About
              </Link>
              <Link href="/services" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                Services
              </Link>
              <Link href="/portfolio" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                Work
              </Link>
              <Link href="/blog" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
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
              Services
            </h4>
            <nav className="space-y-3">
              <Link href="/services" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                Branding
              </Link>
              <Link href="/services" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                Web Design
              </Link>
              <Link href="/services" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                UI UX
              </Link>
              <Link href="/services" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                Social Media
              </Link>
              <Link href="/services" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                AI Solutions
              </Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-6">
              Contact
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
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Pixel2Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
