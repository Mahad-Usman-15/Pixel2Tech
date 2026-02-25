'use client';

import Image from "next/image";
import Link from "next/link";
import teamMembers from "../data/teamMembers";

export default function TeamSection() {
  return (
    <section className="w-full bg-[#f3f3f3] py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-500 mb-6">
              Our Avengers
            </p>

            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-8">
              A Remote Team with <br /> Global Vision
            </h2>

            {/* Tabs */}
            <div className="flex items-center gap-6 mb-6">
              <button className="text-sm font-medium border-b-2 border-black pb-1">
                DESIGN TEAM
              </button>
              <button className="text-sm text-gray-400">
                DEVELOPMENT TEAM
              </button>
            </div>

            <p className="text-gray-600 max-w-md mb-8">
              Our team works remotely from Pakistan with clients around the world.
              Designers, developers, strategists, and creative thinkers working together to deliver high-quality results.
              We move fast. We think smart. We focus on growth.
            </p>

            {/* Join Button */}
            <Link
              href="#"
              className="inline-flex items-center gap-3 text-sm font-medium"
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white text-lg">
                +
              </span>
              JOIN WITH US
            </Link>
          </div>

          {/* Bottom Image */}
          <div className="mt-12">
            <div className="relative w-full h-[260px] rounded-2xl overflow-hidden">
              <Image
                src="/images/team-group.jpg"
                alt="Pixel2Tech remote team collaborating on digital projects"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT TEAM GRID */}
        <div className="grid sm:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="relative w-full h-[240px] rounded-xl overflow-hidden mb-5">
                <Image
                  src={member.image}
                  alt={member.alt || `${member.name} - ${member.role} at Pixel2Tech`}
                  fill
                  sizes="(max-width: 768px) 200px, 250px"
                  className="object-cover"
                />
              </div>

              <h3 className="font-semibold text-base">
                {member.name}
              </h3>

              <p className="text-xs text-gray-500 uppercase mt-1 mb-4">
                {member.role}
              </p>

              {/* Social Icons */}
              <div className="flex gap-3 text-sm text-gray-600">
                <Link href="#" className="hover:text-black">f</Link>
                <Link href="#" className="hover:text-black">t</Link>
                <Link href="#" className="hover:text-black">in</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
