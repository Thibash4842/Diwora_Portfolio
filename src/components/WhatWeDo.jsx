import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatWeDo = () => {
  // Services list with premium visual preview images
  const services = [
    {
      number: '01',
      name: 'Commercial Photography',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&auto=format&fit=crop&q=80'
    },
    {
      number: '02',
      name: 'Videography',
      image: 'https://i.pinimg.com/736x/9d/6c/cf/9d6ccf9d52f7c6163995c66ec5d46791.jpg'
    },
    {
      number: '03',
      name: 'Motion Graphics',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80'
    },
    {
      number: '04',
      name: 'Ideation & Scripting',
      image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&auto=format&fit=crop&q=80'
    },
    {
      number: '05',
      name: 'Creative Direction',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80'
    },
    {
      number: '06',
      name: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80'
    },
  ];

  // Mouse tracking state for cursor-following preview
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      },
    },
  };

  return (
    <section
      data-theme="light"
      className="relative w-full bg-[#f3f3f3] py-24 md:py-14 px-6 sm:px-12 lg:px-20 overflow-hidden font-['Inter',sans-serif]"
    >
      <div className="max-w-full mx-auto w-full">

        {/* Top Header: Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 lg:mb-24">

          {/* Top Left: Title */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-normal text-black tracking-tight select-none">
              What We Do
            </h2>
          </div>

          {/* Top Right: Description */}
          <div className="lg:col-span-4 flex lg:justify-end text-left lg:text-left mt-2 lg:mt-5">
            <p className="max-w-[340px] text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
              We work across the full arc of visual storytelling from the first idea to the finished frame and everything that gets it seen
            </p>
          </div>

        </div>

        {/* Stacked Services List */}
        <motion.div
          className="w-full flex flex-col relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                className={`group flex items-center justify-between w-full transition-all duration-300 ease-out cursor-pointer px-4 relative overflow-visible ${isHovered
                  ? 'bg-black text-white py-10 sm:py-12'
                  : 'bg-transparent text-black py-6 sm:py-8'
                  }`}
                variants={rowVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={handleMouseMove}
              >

                {/* Left Side: Number + Name */}
                <div className="flex items-center gap-6 sm:gap-12 md:gap-16 z-10">
                  {/* Large Number */}
                  <span className={`text-3xl sm:text-4xl lg:text-[40px] font-normal w-12 sm:w-16 select-none leading-none transition-colors duration-300 ${isHovered ? 'text-white/40' : 'text-black/35'
                    }`}>
                    {service.number}
                  </span>

                  {/* Service Name */}
                  <span className="text-lg sm:text-xl lg:text-[32px] font-normal leading-none tracking-tight group-hover:translate-x-2 transition-transform duration-300 ease-out select-none">
                    {service.name}
                  </span>
                </div>

                {/* Right Side: Circular Arrow Button */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center transition-all duration-300 ease-out z-10 shadow-[inset_0_4px_12px_rgba(0,0,0,0.15)] ${isHovered
                  ? 'border-white/10 bg-white text-black'
                  : 'border-black/5 bg-white text-black group-hover:bg-black group-hover:text-white'
                  }`}>
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 rotate-[0deg] transition-all duration-500 ease-out group-hover:rotate-[45deg]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>

                {/* Floating Cursor-Following Image Preview (Desktop Only) */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="pointer-events-none absolute z-20 w-48 h-32 md:w-60 md:h-40 rounded-xl overflow-hidden shadow-2xl bg-neutral-900 border border-white/10 hidden lg:block"
                      style={{
                        left: mousePos.x + 30,
                        top: mousePos.y - 80,
                      }}
                      initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotate: 2 }}
                      transition={{ type: 'spring', stiffness: 250, damping: 22 }}
                    >
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover select-none"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default WhatWeDo;
