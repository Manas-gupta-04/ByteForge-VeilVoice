"use client";

import React, { useEffect, useState } from "react";

export default function ComplaintPage() {
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [lastCode, setLastCode] = useState("");
  const [error, setError] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);

  // Copy feedback
  const [copied, setCopied] = useState(false);

  // Optional: keep a tiny recent list (local only)
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("complaints") || "[]");
      setRecent(saved.slice(-5).reverse()); // show last 5
    } catch {
      // ignore
    }
  }, []);

  const generateCode = () => {
    // ensures 6 digits including leading zeros
    return Math.floor(Math.random() * 1_000_000).toString().padStart(6, "0");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessOpen(false);

    if (!message.trim()) {
      setError("Please enter your complaint message.");
      return;
    }

    try {
      setSaving(true);
      const code = generateCode();

      const newEntry = {
        code,
        message: message.trim(),
        createdAt: new Date().toISOString(),
        status: "pending",
      };

      // Save to localStorage (demo)
      const existing = JSON.parse(localStorage.getItem("complaints") || "[]");
      existing.push(newEntry);
      localStorage.setItem("complaints", JSON.stringify(existing));

      setLastCode(code);
      setMessage("");
      setSuccessOpen(true);
      setRecent([newEntry, ...recent].slice(0, 5));
    } catch (err) {
      setError("Something went wrong while saving your complaint.");
    } finally {
      setSaving(false);
    }
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(lastCode);
      setCopied(true);

      // reset after 2 sec
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // fallback: do nothing
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-amber-400 to-red-500 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Submit a Complaint
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4 md:p-6 space-y-4 shadow-lg"
        >
          <label className="block text-sm text-neutral-300">
            Complaint Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your complaint message here..."
            className="w-full min-h-32 bg-neutral-950 border border-neutral-800 focus:border-neutral-600 outline-none rounded-xl p-3 text-neutral-100"
          />

          {error ? (
            <p className="text-red-400 text-sm">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={saving}
            className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-500 disabled:opacity-60 transition font-medium"
          >
            {saving ? "Submitting..." : "Submit"}
          </button>

          {successOpen && lastCode && (
            <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-900 p-4">
              <p className="text-sm text-neutral-300">Your 6-digit code:</p>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-2xl font-bold tracking-widest">
                  {lastCode}
                </span>
                <button
                  type="button"
                  onClick={copyCode}
                  className="px-3 py-1 rounded-lg border border-neutral-700 hover:border-neutral-500 text-sm transition"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <p className="mt-3 text-xs text-neutral-400">
                Please save this code. It is assigned to your complaint.
              </p>
            </div>
          )}
        </form>

        {/* Optional: show a tiny recent list from localStorage for reference */}
        {recent.length > 0 && (
          <div className="mt-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4">
            <h2 className="text-sm text-neutral-300 mb-3">
              Recent (local) submissions
            </h2>
            <ul className="space-y-3">
              {recent.map((r) => (
                <li
                  key={r.createdAt + r.code}
                  className="p-3 rounded-lg bg-neutral-950 border border-neutral-800"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-400">
                      {new Date(r.createdAt).toLocaleString()}
                    </span>
                    <span className="text-sm font-mono">{r.code}</span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-200 line-clamp-3">
                    {r.message}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
