import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "John Beckham",
    text: "The opportunity to get the latest thoughts from some of the industry's best.",
    highlight: "thoughts",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Salome Mikautadze",
    text: "Wardrobe has something for everyone and it is nice to have the option of visiting a store or shopping online.",
    highlight: "everyone",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Hennah",
    text: "The staff are always on hand to help and offer advice, unlike other stores where you can't find someone to save yourself.",
    highlight: "advice",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    name: "Roshan",
    text: "The Decor Summit is great for discussing ideas and hopefully turning them into action.",
    highlight: "action",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  }
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index) => {
    const diff = (index - activeIndex + testimonials.length) % testimonials.length;
    
    // Center card
    if (diff === 0) {
      return {
        transform: 'translateX(0) scale(1)',
        zIndex: 20,
        opacity: 1,
      };
    }
    // Right card
    if (diff === 1) {
      return {
        transform: 'translateX(65%) scale(0.9)',
        zIndex: 10,
        opacity: 1,
      };
    }
    // Left card
    if (diff === testimonials.length - 1) {
      return {
        transform: 'translateX(-65%) scale(0.9)',
        zIndex: 10,
        opacity: 1,
      };
    }
    // Hidden cards
    return {
      transform: 'translateX(0) scale(0.8)',
      zIndex: 0,
      opacity: 0,
      pointerEvents: 'none'
    };
  };

  return (
    <section data-theme="dark" className="relative w-full bg-[#13151a] py-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 z-30">
          <span className="bg-[#5a67d8] text-white text-[10px] font-bold tracking-[0.2em] px-3 py-1 uppercase">
            What it's like working with us
          </span>
          <h2 className="text-4xl font-serif text-white mt-6 font-bold tracking-wide">
            #How clients describe the work and the process.
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative w-full max-w-4xl h-[400px] flex justify-center items-center">
          
          {/* Decorative Elements */}
          <div className="absolute top-[-10%] left-[10%] w-32 h-32 rounded-full border-[30px] border-[#5a67d8] z-0 opacity-90"></div>
          <div className="absolute bottom-[-10%] right-[10%] w-40 h-40 rounded-full border-[40px] border-[#ff8a65] z-0 opacity-90"></div>

          {/* Large Number Background */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[12rem] font-serif font-black text-white z-30  opacity-50 leading-none">
            {String(activeIndex + 1).padStart(2, '0')}
          </div>

          {/* Cards */}
          {testimonials.map((testimonial, index) => {
            const isCenter = index === activeIndex;
            
            return (
              <div
                key={testimonial.id}
                className={`absolute w-full max-w-md transition-all duration-700 ease-in-out p-8 shadow-2xl
                  ${isCenter ? 'bg-[#7ecdbb] text-[#13151a]' : 'bg-white text-gray-700'}
                `}
                style={getCardStyle(index)}
              >
                {/* Quote Icon */}
                <div className={`absolute top-6 right-8 text-6xl font-serif leading-none opacity-40
                  ${isCenter ? 'text-white' : 'text-gray-300'}
                `}>
                  “
                </div>

                {/* Avatar */}
                <div className="mb-6">
                  <div className="w-16 h-16 overflow-hidden shadow-md">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Text */}
                <p className="text-lg font-medium leading-relaxed mb-8 pr-4">
                  {testimonial.text.split(new RegExp(`(${testimonial.highlight})`, 'gi')).map((part, i) => 
                    part.toLowerCase() === testimonial.highlight.toLowerCase() ? (
                      <span key={i} className={`${isCenter ? 'bg-white px-1' : 'font-bold'}`}>
                        {part}
                      </span>
                    ) : (
                      part
                    )
                  )}
                </p>

                {/* Author Info */}
                <div className="flex items-center mt-auto">
                  <div className={`w-8 h-[2px] mr-4 ${isCenter ? 'bg-[#13151a]' : 'bg-gray-300'}`}></div>
                  <h4 className="font-serif font-bold text-lg">
                    {testimonial.name}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dot Navigation */}
        <div className="flex gap-3 mt-12 z-30">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 border border-gray-500
                ${activeIndex === index 
                  ? 'w-3 h-3 bg-white rotate-45' 
                  : 'w-3 h-3 bg-transparent hover:bg-gray-500'
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSlider;
