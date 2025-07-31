"use client";
import React, { useState } from "react";

function BlogForm() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (No backend connected)");
    // Just for UI demonstration
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black text-white p-6 rounded-lg shadow-md space-y-4 max-w-xl mx-auto"
    >
      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 text-white"
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 text-white"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 h-40 text-white"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="w-full border border-gray-300 rounded px-3 py-2 text-white file:text-white file:bg-blue-600 file:border-none file:px-4 file:py-2 file:rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all"
      >
        Publish your Blog
      </button>
    </form>
  );
}

export default BlogForm;
