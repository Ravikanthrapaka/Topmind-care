// src/WhyChooseSection.jsx
import { motion } from "framer-motion";

export default function WhyChooseSection() {
  const data = [
    {
      feature: "Child-Friendly Guided Meditations",
      mindery: "✅Story-based, fun & short",
      others: "❌ Generic adult content",
    },
    {
      feature: "Safe & Ad-Free Environment",
      mindery: "✅100% secure for kids",
      others: "❌ Ads & distractions",
    },
    {
      feature: "Age-Specific Programs",
      mindery: "✅Tailored for 4-14",
      others: "❌ One-size-fits-all",
    },
    {
      feature: "Parent & Teacher Support",
      mindery: "✅Guides, printables, progress insights",
      others: "❌ Limited or none",
    },
  ];

  return (
    <section className="py-12  bg-gradient-to-b from-purple-50 to-white px-20">
      <div className="max-w-5xl  mb-10">
        <motion.h2
          className="text-3xl font-bold text-purple-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="text-purple-600">Mindery Kids</span> Over Others?
        </motion.h2>
      </div>

      <div className="overflow-x-auto">
        <motion.table
          className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <thead>
            <tr className="bg-purple-100 text-purple-800 text-left">
              <th className="p-4 font-semibold">Feature</th>
              <th className="p-4 font-semibold">Mindery Kids</th>
              <th className="p-4 font-semibold">Other Apps</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="border-t hover:bg-purple-50 transition-colors"
              >
                <td className="p-4 font-medium text-gray-700">{row.feature}</td>
                <td className="p-4 text-green-600 font-semibold">{row.mindery}</td>
                <td className="p-4 text-red-500">{row.others}</td>
              </tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </section>
  );
}
