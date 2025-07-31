"use client";
import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    title: "How to Start Writing Your Thoughts",
    date: "2025-07-30",
    desc: "Start journaling your daily ideas, emotions, and lessons. Expressing yourself in writing can be healing and powerful...",
    image: "/nimbu.jpg",
    slug: "how-to-start-writing-your-thoughts",
  },
  {
    title: "The Art of Slow Living",
    date: "2025-07-28",
    desc: "In a fast-paced world, choosing to slow down can make all the difference. Let’s explore how you can slow down your life.",
    image: "/nimbu2.jpg",
    slug: "the-art-of-slow-living",
  },
  {
    title: "Minimalism in Everyday Life",
    date: "2025-07-20",
    desc: "Declutter your life and your mind by embracing minimalism.",
    image: "/nimbu.jpg",
    slug: "minimalism-in-everyday-life",
  },
  {
    title: "Benefits of Writing at Night",
    date: "2025-07-19",
    desc: "Night journaling helps in better reflection and peaceful sleep.",
    image: "/nimbu2.jpg",
    slug: "writing-at-night",
  },
  {
    title: "Why You Should Write Every Morning",
    date: "2025-07-18",
    desc: "Writing every morning clears your head and sets the tone for the day.",
    image: "/nimbu.jpg",
    slug: "write-every-morning",
  },
  {
    title: "How to Build a Writing Habit",
    date: "2025-07-17",
    desc: "Consistency is key. Here are simple steps to build your writing habit.",
    image: "/nimbu2.jpg",
    slug: "build-writing-habit",
  },
  {
    title: "Digital Detox Journaling",
    date: "2025-07-16",
    desc: "Replace screen time with pen and paper. Experience the magic of a digital break.",
    image: "/nimbu.jpg",
    slug: "digital-detox-journaling",
  },
  {
    title: "Capturing Emotions in Words",
    date: "2025-07-15",
    desc: "Words are powerful. Learn how to channel your emotions through writing.",
    image: "/nimbu2.jpg",
    slug: "capturing-emotions-in-words",
  },
  {
    title: "Writing for Self-Discovery",
    date: "2025-07-14",
    desc: "Explore your thoughts, beliefs, and identity through writing.",
    image: "/nimbu.jpg",
    slug: "writing-for-self-discovery",
  },
  {
    title: "Why Write Letters You Never Send",
    date: "2025-07-13",
    desc: "Unsent letters can be a powerful form of healing and release.",
    image: "/nimbu2.jpg",
    slug: "letters-you-never-send",
  },
  {
    title: "The Silence Between the Lines",
    date: "2025-07-12",
    desc: "Sometimes what’s unsaid is just as powerful. Learn the art of subtext.",
    image: "/nimbu.jpg",
    slug: "silence-between-lines",
  },
  {
    title: "Writing for Clarity",
    date: "2025-07-11",
    desc: "Organize your thoughts, make better decisions, and feel lighter.",
    image: "/nimbu2.jpg",
    slug: "writing-for-clarity",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#fafafa] min-h-screen py-12 px-4">
      

      <section>
        <h2 className="text-2xl text-black font-bold mb-8 text-center flex justify-center items-center gap-2">
          <span>📚</span> All Blog Posts
        </h2>

        {/* 🧱 4 rows x 3 columns grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {blogPosts.map((post, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between h-full"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              )}

              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                <p className="text-sm text-gray-700 line-clamp-3">{post.desc}</p>
              </div>

              <Link
                href={`/blogs/${post.slug}`}
                className="text-sm text-blue-600 hover:underline font-medium mt-4"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
