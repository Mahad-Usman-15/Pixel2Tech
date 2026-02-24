'use client';

import Image from 'next/image';
import Link from 'next/link';
import { heroData, floatingCards } from '../data/about';

export default function AboutSection() {
  return (
    <section className="px-4 sm:px-10 py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-screen-xl max-lg:max-w-3xl mx-auto">
        <div className="grid lg:grid-cols-2 items-center gap-x-12 gap-y-16">
          {/* Left Content */}
          <div className="max-lg:text-center">
            <h1 className="md:text-5xl text-4xl !leading-tight font-bold text-slate-900 mb-6">
              {heroData.heading.split("for the")[0]}
              <span className="text-blue-600">for the</span>
              {" "}{heroData.heading.split("for the")[1]}
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              {heroData.content}
            </p>
            <div className="mt-12 flex flex-wrap max-lg:justify-center gap-4">
              <Link
                href="/about"
                className="px-6 py-3 text-base font-semibold text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 rounded-full transition-all focus:outline-none"
              >
                {heroData.primaryButton}
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 text-base font-semibold text-blue-700 border border-blue-600 rounded-full hover:bg-gray-100 transition-all focus:outline-none"
              >
                {heroData.secondaryButton}
              </Link>
            </div>
          </div>

          {/* Right Image with Floating Cards */}
          <div className="w-full aspect-[12/9] relative">
            {/* Main Hero Image */}
            <Image
              src="/images/ai.jpg"
              className="w-full h-full object-cover rounded-lg shadow-xl"
              alt="hero-img"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />

            {/* Floating Cards */}
            <div className="absolute inset-0 pointer-events-none">
              {floatingCards.map((card) => (
                <div
                  key={card.id}
                  className={`absolute ${getPositionClass(card.position)} ${card.rotation} ${getAnimationClass(card.animation)} shadow-2xl rounded-xl overflow-hidden bg-white`}
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={160}
                    height={120}
                    className="w-30 h-26 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for floating animations */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% {
            transform: translateY(0px) rotate(-6deg);
          }
          50% {
            transform: translateY(-15px) rotate(-6deg);
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translateY(0px) rotate(6deg);
          }
          50% {
            transform: translateY(-12px) rotate(6deg);
          }
        }

        @keyframes float3 {
          0%, 100% {
            transform: translateY(0px) rotate(3deg);
          }
          50% {
            transform: translateY(-18px) rotate(3deg);
          }
        }

        .float-1 {
          animation: float1 4s ease-in-out infinite;
        }

        .float-2 {
          animation: float2 5s ease-in-out infinite;
        }

        .float-3 {
          animation: float3 4.5s ease-in-out infinite;
        }

        /* Responsive positioning */
        @media (max-width: 1024px) {
          .floating-card {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

// Helper function to get position class
function getPositionClass(position) {
  switch (position) {
    case 'top-left':
      return 'top-[-20px] left-[-30px]';
    case 'bottom-right':
      return 'bottom-[-20px] right-[-10px]';
    case 'top-right':
      return 'top-[-10px] right-[-30px]';
    default:
      return '';
  }
}

// Helper function to get animation class
function getAnimationClass(animation) {
  return animation;
}
