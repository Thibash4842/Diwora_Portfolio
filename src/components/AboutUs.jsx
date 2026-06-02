import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';
import founderImg from '../assets/about/About-us.png';
import CinematicStats from './CinematicStats';
import WhatSetsUsApart from './WhatSetsUsApart';
import WhatWeDo from './WhatWeDo';

const AboutUs = () => {
  // Red dots position matching the reference image layout
  const redDots = [
    { left: '31%', top: '4%', delay: 0 },
    { left: '58%', top: '20%', delay: 0.8 },
    { left: '82%', top: '43%', delay: 1.6 },
    { left: '27%', top: '75%', delay: 0.4 },
    { left: '90%', top: '75%', delay: 1.2 },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#f5f5f7] overflow-x-hidden font-['Inter',sans-serif]">
      {/* Navbar wrapper */}
      <Navbar />

      {/* Hero Section Container */}
      <section
        data-theme="light"
        className="relative min-h-screen w-full overflow-hidden bg-[#f5f5f7] flex flex-col items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-8"
      >
        {/* Subtle Grid Pattern Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="aboutHeroGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path
                  d="M 80 0 L 0 0 0 80"
                  fill="none"
                  stroke="rgba(0, 0, 0, 0.08)"
                  strokeWidth="0.75"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#aboutHeroGrid)" />
          </svg>
        </div>

        {/* Pulsing Red Dots on Grid Intersections */}
        {redDots.map((dot, index) => (
          <div
            key={index}
            className="absolute z-10 pointer-events-none"
            style={{ left: dot.left, top: dot.top }}
          >
            <motion.div
              className="w-[3px] h-[3px] bg-[#e10022] rounded-sm"
              initial={{ opacity: 0.3, scale: 0.8 }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.9, 1.2, 0.9],
                boxShadow: [
                  '0 0 0px rgba(225, 0, 34, 0)',
                  '0 0 6px rgba(225, 0, 34, 0.9)',
                  '0 0 0px rgba(225, 0, 34, 0)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: dot.delay,
                ease: 'easeInOut',
              }}
            />
          </div>
        ))}

        {/* Hero Content Container - Matches Hero.jsx exact structure */}
        <div className="relative z-10 max-w-full mx-auto px-6 md:px-12 lg:px-20 w-full flex flex-col justify-center min-h-[calc(100vh-140px)]">

          {/* Title - Occupies full width, large, bold all-caps */}
          <motion.div
            className="w-full mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-[80px] font-poppins font-bold text-black leading-[1.08] tracking-tight uppercase max-w-5xl">
              WE MAKE<br />
              BRANDS FEEL<br />
              LIKE <span className="text-[#e10022]">SOMETHING</span>
            </h1>
          </motion.div>

          {/* Bottom row: Description on right, left column empty matching Hero.jsx */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-start justify-between w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <div className="lg:col-span-8" />
            <div className="lg:col-span-4 flex flex-col gap-2 max-w-xl lg:ml-auto">
              <p className="text-[14px] md:text-[15px] text-neutral-500 font-normal leading-relaxed">
                A creative and digital agency working at the intersection of image, motion, and meaning building visual worlds for brands that want to be genuinely remembered.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Founder Story Section */}
      <section
        data-theme="light"
        className="relative w-full bg-[#ffffff] py-14 md:py-12 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        <div className="max-w-full mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left Side: Graphic Composition */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] flex items-center justify-center">
                {/* Grayscale Founder Image Cutout with Multiply Blend & Soft Shadow */}
                <motion.div
                  className="absolute bottom-0 w-full h-full z-10 flex items-end justify-center overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src={founderImg}
                    alt="Diwora Founder"
                    className="w-full h-full object-contain select-none mix-blend-multiply"
                  />
                </motion.div>

              </div>
            </div>

            {/* Right Side: Typography & Story Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Bold Heading */}
              <motion.h2
                className="text-3xl sm:text-4xl md:text-[44px] font-medium text-black leading-[1.1] tracking-[-0.03em] mb-10 text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Built on the belief<br />
                that clarity is the rarest form<br />
                of creativity
              </motion.h2>

              {/* Story Content Paragraphs */}
              <motion.div
                className="space-y-6 text-sm sm:text-[15px] text-neutral-600 leading-relaxed font-normal text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <p>
                  <strong className="font-bold text-black">DIWORA</strong> was founded by someone tired of watching good brands get lost in noise not because they lacked ambition, but because nobody helped them speak with precision and feeling at the same time.
                </p>

                <p>
                  We started small: a camera, a script, a conviction that visual storytelling could do more than look good. It could build trust. It could change how a business was understood — by its customers, its team, the world watching.
                </p>

                <p>
                  Today, <strong className="font-bold text-black">DIWORA</strong> is a full creative and digital studio. We work with brands across photography, film, motion, and digital — not because we do everything, but because real stories rarely live in one medium.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Cinematic Stats Section */}
      <CinematicStats />

      {/* What Sets Us Apart Section */}
      <WhatSetsUsApart />

      {/* What We Do Section */}
      <WhatWeDo />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AboutUs;
