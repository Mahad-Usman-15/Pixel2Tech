'use client';

import React from 'react';

const brands = [
  'Figma',
  'Adobe',
  'Canva',
  'Notion',
  'Webflow',
  'Framer',
  'Shopify',
  'PayPal',
  'OpenAI',
  'Anthropic',
  'Hugging Face',
  'NVIDIA',
  'IBM',
  'Oracle',
  'SAP',
  'Atlassian',
  'Slack',
  'Discord',
  'GitHub',
  'Vercel',
  'Cloudflare',
];

function BrandTicker() {
  return (
    <section id="brands-section" className="w-full py-16 md:py-24 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 dark:text-gray-400 uppercase mb-3">
            Brands We Work With
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Brands That Trust Pixel2Tech
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We work with startups, businesses, and founders who want to grow faster. From Pakistan to the world.
          </p>
        </div>

        {/* Ticker Container */}
        <div className="relative overflow-hidden">
          {/* Top Ticker - Left to Right */}
          <div className="ticker-track mb-4">
            <div className="ticker-track-inner">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`top-${index}`}
                  className="ticker-item"
                >
                  <span className="brand-text">{brand}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Ticker - Right to Left */}
          <div className="ticker-track">
            <div className="ticker-track-inner reverse">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`bottom-${index}`}
                  className="ticker-item"
                >
                  <span className="brand-text">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inline Styles for Animation */}
      <style jsx>{`
        .ticker-track {
          position: relative;
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 4%,
            black 96%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 4%,
            black 96%,
            transparent
          );
        }

        .ticker-track-inner {
          display: flex;
          gap: 3rem;
          width: max-content;
          animation: scroll-left 40s linear infinite;
        }

        .ticker-track-inner.reverse {
          animation-direction: reverse;
        }

        .ticker-track:hover .ticker-track-inner,
        .ticker-track-inner:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .ticker-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          min-width: 140px;
        }

        .brand-text {
          font-size: 2rem;
          font-weight: 600;
          letter-spacing: 0.025em;
          background: linear-gradient(
            135deg,
            #9ca3af 0%,
            #6b7280 25%,
            #374151 50%,
            #1f2937 75%,
            #000000 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          opacity: 0.7;
          transition: opacity 0.3s ease, transform 0.3s ease;
          will-change: opacity;
        }

        .brand-text:hover {
          opacity: 1;
          transform: scale(1.05);
        }

        /* Dark mode gradient adjustment */
        @media (prefers-color-scheme: dark) {
          .brand-text {
            background: linear-gradient(
              135deg,
              #9ca3af 0%,
              #d1d5db 25%,
              #e5e7eb 50%,
              #f3f4f6 75%,
              #ffffff 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .ticker-track-inner {
            gap: 2rem;
            animation-duration: 30s;
          }

          .ticker-item {
            min-width: 110px;
            padding: 0.5rem 1rem;
          }

          .brand-text {
            font-size: 0.875rem;
          }
        }

        @media (max-width: 480px) {
          .ticker-track-inner {
            gap: 1.5rem;
            animation-duration: 25s;
          }

          .ticker-item {
            min-width: 90px;
            padding: 0.5rem 0.75rem;
          }

          .brand-text {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}

export default BrandTicker;
