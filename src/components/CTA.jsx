import React from "react";

const CTA = () => {
  return (
    <section className="my-2">
      <div className="w-3/4 mx-auto bg-gradient-to-r shadow-lg  from-blue-50 via-purple-50 to-blue-50 rounded-xl p-10 ">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Start Your Child's Mindfulness Journey
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Try it free. Build calm, focus, and kindness — one small practice a day.
        </p>
        <div className="flex flex-wrap justify-start gap-4">
          <button className="bg-violet-500 hover:bg-violet-600 text-white px-6 py-2 rounded-lg font-semibold shadow">
            Create Account
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow">
            Download App
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
