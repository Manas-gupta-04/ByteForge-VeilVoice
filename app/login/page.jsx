"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [phone, setPhone] = useState("");

  const handlePhoneSubmit = () => {
    alert(`OTP sent to ${phone} (UI only)`); // No backend integration
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 text-white rounded-2xl shadow-2xl p-10 max-w-md w-full"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Login to Continue</h2>

        <div className="flex flex-col gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert("Google Login Clicked (UI only)")}
            className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-white font-medium px-4 py-3 rounded-xl transition-colors duration-200"
          >
            <FaGoogle className="text-xl" />
            <span>Continue with Google</span>
          </motion.button>

          <OAuthButton
            icon={<FaPhone />}
            text="Continue with Phone"
            onClick={() => setShowPhoneInput(true)}
          />
        </div>

        {showPhoneInput && (
          <div className="mt-6 p-4 bg-gray-800 rounded-xl">
            <label className="block text-sm text-gray-300 mb-2">
              Enter Phone Number:
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="+91 9876543210"
            />
            <button
              onClick={handlePhoneSubmit}
              className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg"
            >
              Send OTP
            </button>
          </div>
        )}

        <p className="text-sm text-center mt-6 text-gray-400">
          By continuing, you agree to our{" "}
          <span className="underline">Terms</span> &{" "}
          <span className="underline">Privacy Policy</span>
        </p>
      </motion.div>
    </div>
  );
}

function OAuthButton({ icon, text, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white font-medium px-4 py-3 rounded-xl transition-colors duration-200"
    >
      <span className="text-xl">{icon}</span>
      <span>{text}</span>
    </motion.button>
  );
}
