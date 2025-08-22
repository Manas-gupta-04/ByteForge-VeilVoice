"use client";
import { useState } from "react";
import { FaHome, FaUserGraduate, FaUsers, FaBuilding, FaUtensils, FaUniversity } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";

export default function Dashboard() {
  const [reports, setReports] = useState([
    { id: 1, type: "Student", text: "The teaching style of some faculty members is too fast and hard to understand.", status: "pending" },
    { id: 2, type: "Faculty", text: "Some faculty members are rude while addressing student queries.", status: "pending" },
    { id: 3, type: "Mess", text: "Faculty does not provide proper guidance for project work and internships.", status: "pending" },
    { id: 4, type: "Hostel", text: "Teachers are often unavailable during scheduled office hours.", status: "pending" },
  ]);

  const updateStatus = (id, status) => {
    setReports(reports.map(r => (r.id === id ? { ...r, status } : r)));
  };

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <div className="w-60 bg-white shadow-md">
        <h1 className="bg-yellow-600 text-black font-bold text-3xl p-4">SSTC</h1>
        <ul className="p-4 space-y-4 font-semibold text-black">
          <li className="flex items-center space-x-2  cursor-pointer hover:text-yellow-600">
            <FaHome /> <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-yellow-600">
            <FaUserGraduate /> <span>Students</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-yellow-600">
            <FaUsers /> <span>Faculty</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-yellow-600">
            <FaBuilding /> <span>Hostal</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-yellow-600">
            <FaUtensils /> <span>Mess</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-yellow-600">
            <FaUniversity /> <span>Infrastructure</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="bg-yellow-600 flex justify-end items-center p-4">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-xl">👤</span>
          </div>
        </div>

        {/* Reports Section */}
        <div className="p-6">
          <h2 className="font-semibold text-lg mb-4">Reports</h2>
          <div className="space-y-4">
            {reports.map((r) => (
              <div key={r.id} className="flex justify-between items-center text-black bg-gray-200 p-4 rounded-lg">
                <div>
                  <p className="font-bold">{r.type}</p>
                  <p className="text-sm">{r.text}</p>
                  <p className={`text-xs mt-1 ${r.status === "solved" ? "text-green-600" : "text-red-600"}`}>
                    Status: {r.status}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => updateStatus(r.id, "pending")}
                    className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800"
                  >
                    <AiOutlinePlus size={20} />
                  </button>
                  <button
                    onClick={() => updateStatus(r.id, "solved")}
                    className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800"
                  >
                    <AiOutlineCheck size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
