import React, { useState } from "react";

const StartFreeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-violet-500 hover:bg-green-600 text-white px-6 py-2 font-semibold shadow rounded-md"
      >
        Start Free
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96 relative">
            <h2 className="text-xl font-bold mb-4">🚀 Start Free Trial</h2>
            <p className="text-gray-600 mb-6">
              Sign up now to explore all premium features for free.
            </p>

            {/* Example form */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border px-3 py-2 rounded mb-4"
            />
            <button className="w-full bg-violet-500 hover:bg-green-600 text-white py-2 rounded-md">
              Get Started
            </button>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default StartFreeModal;
