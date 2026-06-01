import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const faqData = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of digital services including web design, custom web development, UI/UX design, and SEO optimization tailored to your specific business needs."
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on the scope and complexity. A standard website usually takes 4-6 weeks from initial consultation to launch, while more complex applications may take longer."
  },
  {
    id: 3,
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer ongoing maintenance and support packages to ensure your digital products remain up-to-date, secure, and perform optimally over time."
  },
  {
    id: 4,
    question: "What is your pricing model?",
    answer: "We typically work on a project-based pricing model, providing a detailed proposal and quote after our initial discovery phase to understand your specific requirements."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        gsap.fromTo(card,
          {
            opacity: 0.4,
            filter: "blur(10px)",
            y: 50,
            scale: 0.95
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <section ref={containerRef} data-theme="light" className="w-full bg-white py-14 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">

        {/* Left Column */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            <span className="text-sm font-semibold uppercase tracking-wider text-black">FAQs</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold text-black leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Right Column (Accordion) */}
        <div className="flex flex-col gap-4">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="border border-gray-200 rounded-lg bg-white overflow-hidden transition-all duration-300 hover:shadow-md hover:border-gray-300 cursor-pointer group"
              onClick={() => toggleAccordion(faq.id)}
            >
              <div className="flex justify-between items-center p-6">
                <h3 className="text-lg font-medium text-black group-hover:text-gray-700 transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className={`transform transition-transform duration-300 text-black group-hover:text-gray-700 ${openId === faq.id ? 'rotate-180' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div
                className={`grid transition-all duration-300 ease-in-out ${openId === faq.id
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
                  }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
