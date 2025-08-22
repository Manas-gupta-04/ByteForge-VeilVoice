"use client";
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const complaintsData = [
  {
    id: 1,
    title: 'title',
    description:
      "Individual plan only. ₹139/month after. Open only to users who haven't already tried Premium. Clicking the button will log you into your Spotify account, where you can choose to accept this offer. Do not forward this email to anyone not authorized to access your account.",
    status: 'Pending',
    reply: 'We are looking into this issue and will resolve it within 24 hours.',
  },
  {
    id: 2,
    title: 'title',
    description:
      "Individual plan only. ₹139/month after. Open only to users who haven't already tried Premium. Clicking the button will log you into your Spotify account, where you can choose to accept this offer. Do not forward this email to anyone not authorized to access your account.",
    status: 'Pending',
    reply: 'Your request has been forwarded to the technical team.',
  },
  {
    id: 3,
    title: 'title',
    description:
      "Individual plan only. ₹139/month after. Open only to users who haven't already tried Premium. Clicking the button will log you into your Spotify account, where you can choose to accept this offer. Do not forward this email to anyone not authorized to access your account.",
    status: 'Pending',
  },
  {
    id: 4,
    title: 'title',
    description:
      "Individual plan only. ₹139/month after. Open only to users who haven't already tried Premium. Clicking the button will log you into your Spotify account, where you can choose to accept this offer. Do not forward this email to anyone not authorized to access your account.",
    status: 'Pending',
    reply: 'This issue will be resolved by our maintenance team this weekend.',
  },
  {
    id: 5,
    title: 'title',
    description:
      "Individual plan only. ₹139/month after. Open only to users who haven't already tried Premium. Clicking the button will log you into your Spotify account, where you can choose to accept this offer. Do not forward this email to anyone not authorized to access your account.",
    status: 'Completed',
    reply: 'This complaint has been resolved successfully. Thank you for your patience.',
  },
  {
    id: 6,
    title: 'title',
    description:
      "Individual plan only. ₹139/month after. Open only to users who haven't already tried Premium. Clicking the button will log you into your Spotify account, where you can choose to accept this offer. Do not forward this email to anyone not authorized to access your account.",
    status: 'Completed',
    reply: 'Issue resolved. Your account has been updated accordingly.',
  },
  {
    id: 7,
    title: 'title',
    description:
      "Individual plan only. ₹139/month after. Open only to users who haven't already tried Premium. Clicking the button will log you into your Spotify account, where you can choose to accept this offer. Do not forward this email to anyone not authorized to access your account.",
    status: 'Completed',
  },
  {
    id: 8,
    title: 'title',
    description:
      "Individual plan only. ₹139/month after. Open only to users who haven't already tried Premium. Clicking the button will log you into your Spotify account, where you can choose to accept this offer. Do not forward this email to anyone not authorized to access your account.",
    status: 'Completed',
    reply: 'Completed successfully. Please let us know if you need any further assistance.',
  },
];

function App() {
  const [openReplies, setOpenReplies] = useState(new Set());

  const toggleReply = (complaintId) => {
    const newOpenReplies = new Set(openReplies);
    if (newOpenReplies.has(complaintId)) {
      newOpenReplies.delete(complaintId);
    } else {
      newOpenReplies.add(complaintId);
    }
    setOpenReplies(newOpenReplies);
  };

  const unresolvedComplaints = complaintsData.filter((c) => c.status === 'Pending');
  const resolvedComplaints = complaintsData.filter((c) => c.status === 'Completed');

  const renderComplaint = (complaint) => (
    <div key={complaint.id} className="mb-4">
      <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>

        {/* Title */}
        <div className="flex-shrink-0">
          <span className="text-black font-medium text-sm">{complaint.title}</span>
        </div>

        {/* Description */}
        <div className="flex-1 bg-gray-100 rounded-lg p-3">
          <p className="text-sm text-gray-800 leading-relaxed">{complaint.description}</p>
        </div>

        {/* Actions and Status */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Message Button */}
          <button
            onClick={() => toggleReply(complaint.id)}
            className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-white" />
          </button>

          {/* Status Badge */}
          <span
            className={`px-4 py-1 rounded-full font-bold text-sm ${
              complaint.status === 'Pending'
                ? 'bg-red-300 text-red-800'
                : 'bg-green-300 text-green-800'
            }`}
          >
            {complaint.status}
          </span>
        </div>
      </div>

      {/* Reply Box */}
      {openReplies.has(complaint.id) && (
        <div className="mt-2 ml-16 mr-4 bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500 animate-in slide-in-from-top-2 duration-200">
          <div className="text-sm">
            <span className="font-semibold text-gray-700">Admin Reply:</span>
            <p className="text-gray-600 mt-1">{complaint.reply || 'No reply yet'}</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderSection = (title, complaints, titleColor) => (
    <div className="mb-12">
      {/* Section Header */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex-1 h-px bg-gray-300"></div>
        <h2 className={`mx-6 text-2xl font-bold ${titleColor}`}>{title}</h2>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* Complaints List */}
      <div className="space-y-4">{complaints.map(renderComplaint)}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        {renderSection('Unresolved complaints', unresolvedComplaints, 'text-red-600')}
        {renderSection('Resolved complaints', resolvedComplaints, 'text-red-600')}
      </div>
    </div>
  );
}

export default App;
