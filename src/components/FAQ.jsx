import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What age group is this app designed for?",
      answer: "Our app is designed for kids aged 4–12 years."
    },
    {
      question: "Can parents track progress?",
      answer: "Yes! Parents can see progress and activities inside the Parent Hub."
    },

    {
        question:"Is it safe and ad-free?",
        answer:"Yes. We designed this for children. No external ads, clear privacy options, and parent controls."

    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 7-day free trial for all users."
    },
    
  ];

  return (
    <section id="faq" className="py-16  from-blue-50 via-purple-50 to-blue-50">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-8">❓ Frequently Asked Questions</h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-sm bg-white cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold flex justify-between items-center">
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </h3>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
