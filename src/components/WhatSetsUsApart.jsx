import React from 'react';
import { motion } from 'framer-motion';

const WhatSetsUsApart = () => {
  // 6 cards data matching the mockup exactly
  const cardsData = [
    {
      number: '01',
      title: 'Strategy before Shutter',
      description: 'We spend the first part of every project asking why, not what. The visual comes after — sharper for the thinking that preceded it.',
    },
    {
      number: '02',
      title: 'Makers in the Room',
      description: 'Our strategists have production experience. Our directors understand brand positioning. The conversation between those two worlds is where the work gets good.',
    },
    {
      number: '03',
      title: 'No House Style',
      description: "We don't have a signature look. Your brand gets a visual language built for it, not borrowed from the last job we liked",
    },
    {
      number: '04',
      title: 'Fewer Clients , Deeper Work',
      description: "We stay selective. Not because we're precious, but because doing fewer things well produces better results — for you and for us",
    },
    {
      number: '05',
      title: 'One Team, Start to Finish',
      description: 'The team that presents the idea is the team that executes it. No handoffs. No lost nuance. No translation errors between concept and camera',
    },
    {
      number: '06',
      title: 'Honest About Fit',
      description: "If a project isn't right for us, we say so. The best work comes from genuine alignment — in ambition, in timeline, in what we both think success looks like",
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      },
    },
  };

  return (
    <section
      data-theme="light"
      className="relative w-full bg-[#f8f9fa] py-24 md:py-14 px-6 md:px-12 lg:px-20 overflow-hidden font-['Inter',sans-serif]"
    >
      <div className="max-w-full mx-auto w-full">

        {/* Top Area: Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 lg:mb-20">

          {/* Top Left Content */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <span className="text-sm 2xl:text-[22px] uppercase tracking-[0.25em] text-neutral-500 font-semibold mb-4 block">
              What Sets us Apart
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] 2xl:text-[68px] font-medium text-black leading-[1.1] tracking-[-0.03em] max-w-2xl select-none">
              Not everything<br />
              about us is <span className="text-neutral-400">different.</span><br />
              But this is.
            </h2>
          </div>

          {/* Top Right Content */}
          <div className="lg:col-span-4 flex lg:justify-end text-left lg:text-left mt-2 lg:mt-9">
            <p className="max-w-[400px] text-xs sm:text-sm 2xl:text-[22px] text-neutral-600 leading-relaxed font-normal">
              Most agencies separate strategy from production. We think that's where the problems start. When the people writing the brief are the same people holding the camera, something different happens
            </p>
          </div>

        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group bg-white rounded-2xl p-8 sm:p-10 shadow-[0_12px_36px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)] hover:-translate-y-3 transition-all duration-300 ease-out flex flex-col text-left h-full hover:bg-black"
              variants={cardVariants}
            >
              {/* Large Number */}
              <span className="text-4xl sm:text-5xl font-bold text-black group-hover:text-white tracking-tight leading-none mb-6 select-none transition-colors duration-300">
                {card.number}
              </span>

              {/* Bold Card Title */}
              <h3 className="text-lg sm:text-xl 2xl:text-2xl font-bold text-black group-hover:text-white mb-4 select-none transition-colors duration-300">
                {card.title}
              </h3>

              {/* Small Descriptive Paragraph */}
              <p className="text-xs sm:text-sm 2xl:text-xl text-neutral-600 group-hover:text-neutral-300 leading-relaxed font-normal transition-colors duration-300">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhatSetsUsApart;
