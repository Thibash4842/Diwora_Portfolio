import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Reusable CountUp component that triggers when in view
const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime = null;
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            // Ease out cubic: 1 - Math.pow(1 - t, 3)
            let t = Math.min(progress / duration, 1);
            let easeOutProgress = 1 - Math.pow(1 - t, 3);

            setCount(Math.floor(easeOutProgress * end));

            if (progress < duration) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
};

const CinematicStats = () => {
  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
    <motion.section
      className="relative w-full bg-black py-24 md:py-14 px-6 overflow-hidden flex flex-col items-center justify-center font-['Inter',sans-serif]"
      initial="hidden"
      whileInView="visible"
      data-theme="dark"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10">

        {/* Large Bold Uppercase Headline with Mixed Opacity */}
        <motion.h2
          className="text-4xl sm:text-6xl lg:text-[68px] font-normal leading-[1.08] tracking-tight uppercase mb-12 sm:mb-16 select-none"
          variants={itemVariants}
        >
          <span className="text-white">ATTENTION</span>{' '}
          <span className="text-white/30">IS THE</span>
          <br />
          <span className="text-white/50 block mt-1">ONLY CURRENCY</span>
          <span className="text-white/50 block mt-1">THAT MATTERS NOW</span>
        </motion.h2>

        {/* Constrained Description Area */}
        <motion.div
          className="max-w-[640px] text-xs sm:text-[14px] md:text-[15px] text-white/70 leading-relaxed font-normal mb-16 sm:mb-20 space-y-2.5"
          variants={itemVariants}
        >
          <p>We live in an era of relentless visual noise.</p>
          <p>Brands that cut through aren't louder they're clearer.</p>
          <p>They know what they're saying, and they find the exact image, frame, and story to say it.</p>
          <p>That's what we help with.</p>
          <p>Not content for content's sake.</p>
          <p>Work that holds attention because it deserves to.</p>
        </motion.div>

        {/* Horizontal Stats Row */}
        <motion.div
          className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16 w-full"
          variants={itemVariants}
        >
          {/* Stat 1: Projects Completed */}
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight leading-none mb-2.5">
              <CountUp end={50} />+
            </span>
            <span className="text-xs sm:text-sm text-neutral-400 font-medium tracking-wide">
              Projects Completed
            </span>
          </div>

          {/* Thin Vertical Divider */}
          <div className="w-[1px] h-14 sm:h-20 bg-white/20 self-center" />

          {/* Stat 2: Happy Clients */}
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight leading-none mb-2.5">
              <CountUp end={25} />+
            </span>
            <span className="text-xs sm:text-sm text-neutral-400 font-medium tracking-wide">
              Happy Clients
            </span>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default CinematicStats;
