// Why Section

import girl from "../assets/girl.webp"
import kid from "../assets/kid2.avif"
import pic3 from "../assets/pic3.webp"
import { motion } from "framer-motion";
import { Star, Moon, Users, Download, Shield, Award } from "lucide-react";


export function WhySection() {
  return (
    <section id="why" className="py-20 bg-white px-6 sm:px-10 lg:px-20">
  {/* Section Header */}
  <h2 className="text-3xl font-bold mb-3">Why Mindery Kids?</h2>
  <p className="max-w-2xl text-gray-600 mb-8">
    Children learn best through play and stories. Our sessions blend gentle breathing, guided imagery, and music to make mindfulness enjoyable and effective.
  </p>

  {/* Three Feature Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    
    {/* Card 1 */}
    <div className="bg-white rounded-xl  shadow-lg p-3  flex-col gap-2 w-full transform transition duration-300 hover:scale-102 ">
      
      <div className="bg-green-100 border border-green-300 px-2 py-1 mb-1 rounded-full text-sm text-green-800 inline-block">Story Meditations</div>
      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-1">Guided Adventures</h3>
        <p className="text-sm text-neutral-600">
          Short, age-wise journeys that help kids calm their bodies and name their feelings.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-xl shadow-lg p-3  flex-col gap-2 w-full transform transition duration-300 hover:scale-102 ">
      <div className="bg-green-100 border border-green-300 px-2 py-1 mb-1 rounded-full text-sm text-green-800 inline-block">Anytime Calm</div>
      
      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-1">Tools for Big Feelings</h3>
        <p className="text-sm text-neutral-600">
 
          Quick "reset" audios for anger, worry, pre-exam jitters, and bedtime battles.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-xl shadow-lg p-3  flex-col gap-2 w-full transform transition duration-300 hover:scale-102">
      <div className="bg-green-100 border border-green-300 px-2 py-1 mb-1 rounded-full text-sm text-green-800 inline-block">Parent Hub</div>
      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-1">Guides & Routines</h3>
        <p className="text-sm text-neutral-600">
         
          Weekly tips, printable charts, and simple routines you can use at home or school.
        </p>
      </div>
    </div>

  </div>
</section>

  );
}

// Programs Section
export function Programs() {
  return (
    <section id="programs" className="py-12 bg-gray-50 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-3">Programs for Every Age</h2>
      <p className="text-neutral-700 text-sm mb-6">
        Pick a track or mix and match. Each program grows with your child.
      </p>

      {/* Program 1 */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <motion.img
  className="rounded-xl w-full md:w-[460px] object-cover"
  src={girl}
  alt="Little Explorer"
  initial={{ opacity: 0, rotateY: 90 }}
  whileInView={{ opacity: 1, rotateY: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
/>

        <div>
          <h1 className="text-lg font-semibold">Little Explorer (4-6)</h1>
          <p className="text-neutral-600 mt-2">
            Three to five-minute stories with animal friends that teach
            belly-breathing, noticing sounds, and gentle stretching.
          </p>

          <div className="flex flex-wrap gap-2 mt-3">
            <h3 className="font-semibold border rounded-full px-3 py-1 text-sm text-gray-800 border-neutral-300 transform transition duration-300 hover:scale-105">
              🛋️ Cozy Corner
            </h3>
            <h3 className="font-semibold border rounded-full px-3 py-1 text-sm text-gray-800 border-neutral-300 transform transition duration-300 hover:scale-105">
              🎵 Calm Music
            </h3>
            <h3 className="font-semibold border rounded-full px-3 py-1 text-sm text-gray-800 border-neutral-300 transform transition duration-300 hover:scale-105">
              🏆 Sticker Badges
            </h3>
          </div>
        </div>
      </div>

      {/* Program 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-6 mb-12">
        <div>
          <h1 className="text-lg font-semibold">Brave Thinkers (7-10)</h1>
          <p className="text-neutral-600 mt-2">
            Mindset stories, focus timers, and kindness practices that build
            confidence and classroom readiness.
          </p>

          <div className="flex flex-wrap gap-2 mt-3">
            <h3 className="font-semibold border rounded-full px-3 py-1 text-sm text-gray-800 border-neutral-300 transform transition duration-300 hover:scale-105">
              ⏱️ Focus Timer
            </h3>
            <h3 className="font-semibold border rounded-full px-3 py-1 text-sm text-gray-800 border-neutral-300 transform transition duration-300 hover:scale-105">
              📓 Gratitude Notes
            </h3>
            <h3 className="font-semibold border rounded-full px-3 py-1 text-sm text-gray-800 border-neutral-300 transform transition duration-300 hover:scale-105">
              🔥 Streak Rewards
            </h3>
          </div>
        </div>

       {/* Image 2 */}
      


      <motion.img
  className="rounded-xl w-full md:w-[460px] object-cover"
  src={kid}
  alt="Brave Thinkers"
  initial={{ opacity: 0, rotateY: 90 }}
  whileInView={{ opacity: 1, rotateY: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
/>

      </div>

      {/* Program 3 */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <motion.img
      className="rounded-xl w-full md:w-[460px] object-cover shadow-lg"
      src={pic3}
      alt="Calm & Curious"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05, rotate: 1 }}
    />

        <div>
          <h1 className="text-lg font-semibold">Calm & Curious (11-14)</h1>
          <p className="text-neutral-600 mt-2">
            Longer meditations, reframing thoughts, and sleep stories for deeper
            rest and emotional balance.
          </p>

          <div className="flex flex-wrap gap-2 mt-3">
            <h3 className="font-semibold border rounded-full px-3 py-1 text-sm text-gray-800 border-neutral-300 transform transition duration-300 hover:scale-105">
              💡 Mindset Minis
            </h3>
            <h3 className="font-semibold border rounded-full px-3 py-1 text-sm text-gray-800 border-neutral-300 transform transition duration-300 hover:scale-105">
              🌙 Sleep Stories
            </h3>
            <h3 className="font-semibold border rounded-full px-3 py-1 text-sm text-gray-800 border-neutral-300 transform transition duration-300 hover:scale-105">
              🎯 Goal Cards
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}


// Features Section
export function Features() {
  return (
  <section id="features" className="py-20 bg-white px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-6 ">
        Built for Kids, Loved by Parents
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Ad-Free & Safe",
            desc: "Child-first design with privacy controls and no external ads.",
          },
          {
            title: "Rewards that Motivate",
            desc: "Stars, badges, and gentle streaks encourage healthy habits with no pressure.",
          },
          {
            title: "Offline Access",
            desc: "Download favorite sessions for calm on the go.",
          },
          {
            title: "Sleep Mode",
            desc: "Fade-out music and dim visuals help kids drift off peacefully.",
          },
          {
            title: "Classroom Friendly",
            desc: "Teacher packs with 5-minute start-of-class resets and posters.",
          },
          {
            title: "Multi-Child Profiles",
            desc: "Personalized tracks for each child in the family.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 bg-white"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Parent Hub Section
export function ParentHub() {
  return (
  //  <section id="Parents" className="py-16 bg-gray-50">
  {/* <h2 className="text-3xl font-bold text-center mb-6">Parent & Teacher Hub</h2>
  <p className="text-center text-gray-600 mb-8">
    Practical guides, printable routines, and progress insights so you can support mindfulness at home and school.
  </p>
  <div className="flex justify-center space-x-6">
    <a href="/starter-kit.pdf" className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow">
      Download Starter Kit (PDF)
    </a>
    <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow">7-Day Calm Plan</button>
    <button className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow">Classroom Pack</button>
  </div> */}
// </section>

  );
}

// FAQ Section
// export function FAQ() {
//   return (
//     // <section id="faq" className="py-20 bg-white text-center">
//     //   <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
//     //   FAQ items here
//     // </section>
//   );
// }




