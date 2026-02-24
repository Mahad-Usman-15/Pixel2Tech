'use client';

import Image from 'next/image';

export default function PageBanner({ 
  heading, 
  subheading, 
  backgroundImage = "/images/about.jpg",
  overlayOpacity = "bg-black/70"
}) {
  return (
    <div className="w-full relative h-[400px] md:h-[500px]">
      {/* Background Image */}
      <Image 
        src={backgroundImage} 
        alt="Page Banner" 
        fill
        className="object-cover"
        priority
      />
      
      {/* Black Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`}></div>
      
      {/* Content - Centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 max-w-4xl leading-tight">
          {heading}
        </h1>
        {subheading && (
          <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl leading-relaxed">
            {subheading}
          </p>
        )}
      </div>
    </div>
  );
}
