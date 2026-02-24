'use client';

import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '../data/blogPosts';

export default function BlogSection() {
  return (
    <section className="bg-white p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-blue-600 uppercase mb-4 block">
            Latest Insights
          </span>
          <h2 className="text-3xl font-bold text-slate-900 text-center !leading-tight mb-4">
            Latest blog posts
          </h2>
          <p className="text-slate-600">
            Tips, trends, and thought leadership from the Pixel2Tech team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-12 max-lg:max-w-3xl max-md:max-w-md mx-auto">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-white cursor-pointer rounded-xl overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-30 hover:before:opacity-40 transition-all duration-300"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={566}
                height={320}
                className="w-full aspect-[283/160] object-cover group-hover:scale-110 transition-all duration-300"
              />
              <div className="bg-gradient-to-t from-black/70 via-black/70 to-transparent p-6 absolute bottom-0 left-0 right-0 z-20">
                <span className="text-sm block mb-2 text-slate-300 font-semibold">
                  {post.date} | {post.author}
                </span>
                <h3 className="text-base lg:text-xl font-semibold text-white">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
          >
            Read Our Articles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
          </Link>
        </div>
      </div>
    </section>
  );
}
