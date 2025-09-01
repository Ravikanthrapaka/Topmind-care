import { useState } from "react";

export default function PopupForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl w-96 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4">Start Free Trial</h2>
        <form className="space-y-3">
          <input type="text" placeholder="Name" className="w-full p-2 border rounded" required />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
          <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" required />
          <input type="text" placeholder="Class" className="w-full p-2 border rounded" />
          <textarea placeholder="Message" className="w-full p-2 border rounded"></textarea>
          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
