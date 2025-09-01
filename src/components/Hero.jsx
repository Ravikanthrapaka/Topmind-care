import React from "react";
import kids from "../assets/kids-meditation.png";
import { motion } from "framer-motion";

function Hero() {
  // Variants for the main text
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  // Variant for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
    visible: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  // Variant for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-10 px-6 pt-24 bg-gradient-to-r from-purple-100 to-blue-100"
    >
      {/* Left side (text content) */}
      <motion.div
        className="flex-1 text-center md:text-left md:mx-20"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <p className="p-2 sm:px-4 sm:py-2 bg-violet-200 rounded-full text-violet-800 text-sm sm:text-base sm:w- inline-block">
          🌈 Calm Minds, Happy Hearts
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
          Mindfulness & Meditation <br className="hidden sm:block" /> for Kids (4–14)
        </h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
          Fun, story-based meditations that build focus, kindness, and confidence.
          Safe, ad-free, and crafted with child-development experts.
        </p>

        {/* CTA buttons */}
        <div className="mt-6 flex gap-3 ">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-green-700 cursor-pointer w-full sm:w-auto md:w-auto">
            Start Free
          </button>
          <button className="px-4 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-purple-700 cursor-pointer w-full sm:w-auto md:w-auto">
            Explore Programs
          </button>
        </div>

        {/* Feature Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {[
            { icon: "🧠", title: "Focus", desc: "Improves" },
            { icon: "🌿", title: "Stress", desc: "Reduces" },
            { icon: "😴", title: "Sleep", desc: "Better" },
            { icon: "💖", title: "Empathy", desc: "Builds" },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-lg p-3 flex gap-2 items-center w-full transform transition duration-300 md:hover:scale-105 md:hover:rotate-2"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <div className="text-2xl mb-2">{card.icon}</div>
              <div>
                <p className="text-sm">{card.desc}</p>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{card.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right side (image) */}
      <motion.div
        className="flex-1 flex relative justify-center"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <motion.img
          className="rounded-xl w-full md:w-[460px] object-cover"
          src={kids}
          alt="Little Explorer"
        />

        {/* Floating card */}
        <motion.div
          className="absolute bottom-4 left-[-28px] sm:left-2 md:left-4 bg-white rounded-xl shadow-lg p-4 w-56 sm:w-48 md:w-56
                      transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h3 className="font-semibold text-gray-800">Today's Journey</h3>
          <p className="text-sm text-gray-600">Start your meditation practice with a calm mind 🌿</p>
          <p className="text-sm text-gray-600">Dragon Breath (3 min)</p>
          <p className="text-sm text-gray-600">Sleep Story: Star Boat (7 min)</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
