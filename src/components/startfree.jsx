



import React, { useState } from "react";

const StartFreeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    className: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // 👉 here you can integrate API / backend call
    alert("✅ Thanks! Your free trial request has been submitted.");
    setIsOpen(false);
    setFormData({ name: "", email: "", phone: "", className: "", message: "" });
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-violet-500 hover:bg-green-600 text-white px-6 py-2 font-semibold shadow rounded-md"
      >
        Start Free Trial
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md relative">
            <h2 className="text-xl font-bold mb-4">🚀 Start Free Trial</h2>
            <p className="text-gray-600 mb-6">
              Fill in your details to get started.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border px-3 py-2 rounded  focus:outline-purple-200 focus:outline-3"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border px-3 py-2 rounded focus:outline-purple-200 focus:outline-3"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full border px-3 py-2 rounded focus:outline-purple-200 focus:outline-3"
              />
              <input
                type="text"
                name="className"
                value={formData.className}
                onChange={handleChange}
                placeholder="Class (e.g., Grade 6)"
                required
                className="w-full border px-3 py-2 rounded focus:outline-purple-200 focus:outline-3"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="3"
                className="w-full border px-3 py-2 rounded focus:outline-purple-200 focus:outline-3"
              />

              <button
                type="submit"
                className="w-full bg-violet-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold"
              >
                Submit
              </button>
            </form>

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
