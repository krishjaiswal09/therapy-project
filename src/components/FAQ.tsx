import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, I do not accept insurance directly. However, I provide a superbill for each session that you can submit to your insurance provider for potential reimbursement. Many insurance plans offer partial coverage for out-of-network mental health services."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes, I offer virtual sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM. Virtual sessions are just as effective as in-person therapy and provide the convenience of receiving care from the comfort of your own space."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I require 24-hour notice for cancellations. If you need to cancel or reschedule your appointment, please contact me at least 24 hours in advance. Late cancellations or no-shows may be subject to the full session fee."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Individual therapy sessions are 50 minutes long, while couples therapy sessions are 75 minutes. This allows adequate time to explore your concerns and work toward your therapeutic goals."
    },
    {
      question: "How often should I attend sessions?",
      answer: "The frequency of sessions depends on your individual needs and goals. Initially, I often recommend weekly sessions to establish momentum and build therapeutic rapport. As you progress, we may adjust to bi-weekly or monthly sessions."
    },
    {
      question: "What should I expect in my first session?",
      answer: "Your first session will focus on getting to know you, understanding your concerns, and discussing your goals for therapy. We'll review your history, current challenges, and begin developing a treatment plan tailored to your needs."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-slate-800">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600">
            Find answers to common questions about therapy and my practice
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-100 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-slate-800">{faq.question}</span>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-600" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Have a question that's not answered here?</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;