"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Link from "next/link";



// Dummy complaint data
const complaintsData = {
  123456: {
    title: "Library AC not working",
    description: "The air conditioning system in the main library has been malfunctioning for the past 3 days. Students are unable to study comfortably due to excessive heat."
  },
  234567: {
    title: "Hostel water supply issue",
    description: "There is no water supply in Block A hostel since yesterday morning. Students are facing difficulties with basic daily activities."
  },
  345678: {
    title: "Mess food quality complaint",
    description: "The food served in the mess today was undercooked and of poor quality. Several students complained about the taste and hygiene standards."
  },
  456789: {
    title: "Classroom projector not working",
    description: "The projector in Room 301 is not functioning properly, affecting the ongoing lectures and presentations."
  },
  567890: {
    title: "Wi-Fi connectivity issues",
    description: "The campus Wi-Fi has been extremely slow and frequently disconnecting, hampering online classes and research work."
  }
};

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">

      <div className="bg-white rounded-lg p-6 max-w-md mx-4 transform transition-transform duration-300 scale-100">
        <h3 className="text-lg font-bold mb-3 text-gray-800">
          {content.title || "Search Result"}
        </h3>
        <p className="text-gray-600 mb-4">
          {content.description}
        </p>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};


function App() {
  const [searchCode, setSearchCode] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

  const handleSearchInput = (e) => {
    const value = e.target.value;
    // Only allow numbers and limit to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setSearchCode(value);
    }
  };

  const handleSearch = () => {
    if (searchCode.length === 6) {
      const complaint = complaintsData[searchCode];
      if (complaint) {
        setModalContent({
          title: complaint.title,
          description: complaint.description
        });
      } else {
        setModalContent({
          title: "No Result Found",
          description: "No complaint found for this code"
        });
      }
      setIsModalOpen(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const categories = [
    {
      title: "Student",
      description: "Track complaints related to academics, examinations, schedules, and student support services"
    },
    {
      title: "Faculty",
      description: "Track complaints related to academics, examinations, schedules, and student support services"
    },
    {
      title: "Hostel",
      description: "Track complaints related to academics, examinations, schedules, and student support services"
    },
    {
      title: "Mess",
      description: "Track complaints related to academics, examinations, schedules, and student support services"
    },
    {
      title: "Infrastructure",
      description: "Track complaints related to academics, examinations, schedules, and student support services"
    },
    {
      title: "other",
      description: "Track complaints related to academics, examinations, schedules, and student support services"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-yellow-400 px-6 py-4 flex justify-between items-center">
         <div className="flex flex-col leading-tight">
          <span className="text-xl md:text-2xl font-bold tracking-wide">
            Shri Shankaracharya
          </span>
          <span className="text-lg md:text-2xl font-semibold tracking-wide text-blue-500">
            Technical Campus
          </span>
        </div>
        <button className="bg-purple-200 text-purple-800 px-4 py-2 rounded font-medium hover:bg-purple-300 transition-colors">
          Login
        </button>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background circles */}
        <div className="absolute left-0 top-0 opacity-10">
          <div className="w-96 h-96 border-4 border-gray-300 rounded-full"></div>
          <div className="w-80 h-80 border-4 border-gray-300 rounded-full absolute top-8 left-8"></div>
          <div className="w-64 h-64 border-4 border-gray-300 rounded-full absolute top-16 left-16"></div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10 ml-20">
              <h1 className="text-4xl lg:text-5xl font-bold text-red-500 leading-tight mb-4">
                Problem spotted,<br />
                Report it here,<br />
                we'll sort it out
              </h1>
              <p className="text-sm text-gray-600 mb-6 max-w-md">
                Problems can happen, but solutions are always here.<br />
                Tell us what's bothering you by raising a complaint.<br />
                We're here to help and resolve it quickly.
              </p>
              <div className="flex items-center space-x-8 text-black">
                <div>
                  <div className="text-2xl font-bold">120k+</div>
                  <div className="text-sm">problem solved</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <div className="text-2xl font-bold">60k+</div>
                  <div className="text-sm">Reports</div>
                </div>
              </div>
            </div>

            {/* Right Images */}
            <div className="relative flex justify-center items-center">
              <div className="relative">
                {/* Main illustration */}
                <div className="w-80 h-64 bg-blue-400 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-yellow-400 rounded-full"></div>
                  <div className="text-white text-6xl">👨‍💼</div>
                </div>

                {/* Top right yellow box */}
                <div className="absolute -top-4 -right-8 w-32 h-24 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <div className="text-2xl">📱</div>
                </div>

                {/* Bottom right green box */}
                <div className="absolute -bottom-8 -right-12 w-36 h-32 bg-green-400 rounded-lg flex flex-col items-center justify-center">
                  <div className="text-2xl mb-2">🏥</div>
                  <div className="text-xs text-white text-center">Health Support</div>
                </div>

                {/* Bottom left yellow accent */}
                <div className="absolute -bottom-4 -left-8 w-20 h-12 bg-yellow-300 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mt-12 relative z-10">
  <div className="flex items-center">
    <input
      type="text"
      value={searchCode}
      onChange={handleSearchInput}
      onKeyPress={handleKeyPress}
      placeholder="Search by code"
      className="bg-yellow-400 text-black placeholder-black px-6 py-3 rounded-l-full w-80 focus:outline-none focus:ring-2 focus:ring-yellow-500"
    />
    <button
      onClick={handleSearch}
      className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-r-full transition-colors duration-200"
    >
      <Search size={20} />
    </button>
  </div>
</div>

        </div>
      </div>

      {/* Category Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-red-500 text-center mb-12">Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div key={index} className="bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-black mb-4">{category.title}</h3>
              <p className="text-sm text-gray-800 mb-6 leading-relaxed">
                {category.description}
              </p>
              <div className="flex justify-center">
              <Link href="\raise">
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-medium transition-colors duration-200">
        Raise an issue
      </button>
    </Link>
</div>

            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={modalContent}
      />
    </div>
  );
}

export default App;