import { Star } from "lucide-react";

export default function FamiliesSay() {
  const testimonials = [
    {
      quote:
        "Bedtime is finally peaceful. My 6-year-old asks for the Star Boat story every night.",
      name: "-Priya, Mom of 6-year-old",
      stars: 5,
    },
    {
      quote:
        "The 5-minute 'reset' before homework has been a game changer for focus.",
      name: "-Ravi, Dad of 10-year-old",
      stars: 4,
    },
    {
      quote:
        "Our class uses the breathing games after lunch. Kids come back calm and ready.",
      name: "-Anika, Grade 4 Teacher",
      stars: 5,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white" id="families-say">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          What Families Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center"
            >
              <p className="text-gray-600 italic mb-4">"{item.quote}"</p>
              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < item.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-700">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
