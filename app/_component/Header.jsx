"use client";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-[#1e1e1e] flex items-center justify-between px-6 py-4 shadow-md">
      {/* Logo & Slogan */}
      <Link href="/" className="flex flex-col leading-tight">
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          INKLINK 
        </h1>
        <p className="text-sm text-gray-300 -mt-1">Your Voice. Your Space.</p>
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-6 text-base font-medium text-white">
        <Link href="/" className="hover:text-indigo-500 transition-all">Home</Link>
        <Link href="/about" className="hover:text-indigo-500 transition-all">About</Link>
        <Link href="/contact" className="hover:text-indigo-500 transition-all">Contact</Link>
        <Link href="/blog" className="hover:text-indigo-500 transition-all">Blogs</Link>
      </nav>

      {/* Sign In Button */}
      <Link href="/login">
        <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 hover:scale-105 transition-all duration-300 ease-in-out">
          Sign In
        </button>
      </Link>
    </header>
  );
};

export default Header;
