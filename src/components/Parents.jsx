// ParentTeacherHub.jsx
import { motion } from "framer-motion";
import { FileText, Calendar, BookOpen } from "lucide-react";

export default function ParentTeacherHub() {
  const resources = [
    {
      title: "Download Starter Kit (PDF)",
      icon: <FileText className="w-10 h-10 text-indigo-500" />,
    },
    {
      title: "7-Day Calm Plan",
      icon: <Calendar className="w-10 h-10 text-pink-500" />,
    },
    {
      title: "Classroom Pack",
      icon: <BookOpen className="w-10 h-10 text-green-500" />,
    },
  ];

  return (
    <section id="Parents" className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-indigo-50 to-pink-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Parent & Teacher Hub
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Practical guides, printable routines, and progress insights so you can support 
          mindfulness at home and school.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {resources.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-md hover:shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-1"
            >
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-700 mt-4">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
