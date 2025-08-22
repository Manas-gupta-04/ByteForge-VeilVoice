"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto mt-3 flex flex-col md:flex-row items-center justify-between">
        
        
      <div className="flex flex-col leading-tight ml-5">
          <span className="text-2xl md:text-2xl font-bold tracking-wide">
            Shri Shankaracharya
          </span>
          <span className="text-xl md:text-2xl font-semibold tracking-wide text-blue-300">
            Technical Campus
          </span>
        </div>

        
        <div className="text-center mb-3 md:mb-0">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        
        <div className="flex space-x-4 mr-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
