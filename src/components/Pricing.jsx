



// src/components/PricingPlans.jsx
import { motion } from "framer-motion";

const plans = [
  {
    title: "Starter",
    desc: "Perfect for new explorers",
    price: "Free",
    features: [
      "5 guided meditations",
      "2 sleep stories",
      "Parent starter kit",
    ],
    button: "Get Started",
  },
  {
    title: "Premium",
    desc: "Unlock full potential",
    price: "₹299/mo",
    features: [
      "Unlimited meditations",
      "Sleep stories & calming music",
      "Printable guides for parents",
    ],
    button: "Upgrade Now",
  },
  {
    title: "Family",
    desc: "For multiple kids",
    price: "₹499/mo",
    features: [
      "4 child profiles",
      "Rewards & streaks",
      "Classroom meditation pack",
    ],
    button: "Get Family Plan",
  },
];

export default function PricingPlans() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Choose Your Plan
        </h2>
        <p className="text-gray-600 mb-12">
          Start free, cancel anytime. No hidden charges.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-purple-600">
                  {plan.title}
                </h3>
                <p className="text-gray-500 mb-4">{plan.desc}</p>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>

                <ul className="text-gray-600 space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      ✅ <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition">
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
