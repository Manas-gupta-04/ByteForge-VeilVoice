"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-amber-400 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* College Name */}
        <div className="flex flex-col leading-tight">
          <span className="text-xl md:text-2xl font-bold tracking-wide">
            Shri Shankaracharya
          </span>
          <span className="text-lg md:text-2xl font-semibold tracking-wide text-blue-500">
            Technical Campus
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-sm md:text-base font-medium">
            <li>
              <a href="/" className="hover:text-blue-400 transition">Home</a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-400 transition">About</a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-400 transition">Departments</a>
            </li>
            <li className="relative">
              <a href="/complain" className="hover:text-blue-400 transition relative inline-block">
                Complaints
                <span className="absolute -top-4 -right-5 text-[10px] px-2 py-[2px] rounded-full 
                                bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 
                                text-white font-bold animate-shine">
                  NEW
                </span>
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-400 transition">Admissions</a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-400 transition">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-amber-400 text-white">
          <ul className="flex flex-col gap-4 p-4 text-sm font-medium">
            <li>
              <a href="/" className="hover:text-blue-200 transition">Home</a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-200 transition">About</a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-200 transition">Departments</a>
            </li>
            <li className="relative">
              <a href="/admin" className="hover:text-blue-200 transition relative inline-block">
                Complaints
                <span className="absolute -top-4 -right-10 text-[10px] px-2 py-[2px] rounded-full 
                                bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 
                                text-white font-bold animate-shine">
                  NEW
                </span>
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-200 transition">Admissions</a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-200 transition">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
