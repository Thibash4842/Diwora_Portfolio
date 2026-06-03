import React from 'react';
import { motion } from 'framer-motion';

export const GlowDot = ({ className, delay = 0, size = 20 }) => (
  <motion.div
    className={`absolute flex items-center justify-center pointer-events-none ${className}`}
    style={{ width: size, height: size }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay, duration: 1 }}
  >
    {/* Outer pulsing ring */}
    <motion.div
      className="absolute w-full h-full rounded-full border border-red-500/30"
      animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.2, 0.8, 0.2] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay }}
    />
    {/* Inner solid dot */}
    <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_2px_rgba(239,68,68,0.6)]" />
  </motion.div>
);

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Grid Pattern Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      {/* SVG Connector Lines */}
      <div className="absolute inset-0 hidden lg:block opacity-60">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Line 1 (Top Left) */}
          <path
            d="M 120 0 L 120 60 L 180 60 L 180 120 L 300 120"
            stroke="#ffffff" strokeWidth="1" fill="none" className="opacity-15"
            vectorEffect="non-scaling-stroke"
          />
          <motion.path
            d="M 120 0 L 120 60 L 180 60 L 180 120 L 300 120"
            stroke="#fff" strokeWidth="3" fill="none" className="opacity-40 blur-[2px]"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="40 160"
            animate={{ strokeDashoffset: [0, -200] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 120 0 L 120 60 L 180 60 L 180 120 L 300 120"
            stroke="#ef4444" strokeWidth="1.5" fill="none" className="opacity-80"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="40 160"
            animate={{ strokeDashoffset: [0, -200] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* Line 2 (Bottom Left) */}
          <path
            d="M 240 660 L 180 660 L 180 960"
            stroke="#ffffff" strokeWidth="1" fill="none" className="opacity-15"
            vectorEffect="non-scaling-stroke"
          />
          <motion.path
            d="M 240 660 L 180 660 L 180 960"
            stroke="#fff" strokeWidth="3" fill="none" className="opacity-40 blur-[2px]"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="40 160"
            animate={{ strokeDashoffset: [0, -200] }}
            transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 240 660 L 180 660 L 180 960"
            stroke="#ef4444" strokeWidth="1.5" fill="none" className="opacity-80"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="40 160"
            animate={{ strokeDashoffset: [0, -200] }}
            transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "linear" }}
          />

          {/* Line 3 (Top Right) */}
          <path
            d="M 660 60 L 660 300 L 600 300 L 600 540"
            stroke="#ffffff" strokeWidth="1" fill="none" className="opacity-15"
            vectorEffect="non-scaling-stroke"
          />
          <motion.path
            d="M 660 60 L 660 300 L 600 300 L 600 540"
            stroke="#fff" strokeWidth="3" fill="none" className="opacity-40 blur-[2px]"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="45 180"
            animate={{ strokeDashoffset: [0, -225] }}
            transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 660 60 L 660 300 L 600 300 L 600 540"
            stroke="#ef4444" strokeWidth="1.5" fill="none" className="opacity-80"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="45 180"
            animate={{ strokeDashoffset: [0, -225] }}
            transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "linear" }}
          />

          {/* Line 4 (Middle Right) */}
          <path
            d="M 900 240 L 960 240 L 960 120 L 1080 120"
            stroke="#ffffff" strokeWidth="1" fill="none" className="opacity-15"
            vectorEffect="non-scaling-stroke"
          />
          <motion.path
            d="M 900 240 L 960 240 L 960 120 L 1080 120"
            stroke="#fff" strokeWidth="3" fill="none" className="opacity-40 blur-[2px]"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="35 140"
            animate={{ strokeDashoffset: [0, -175] }}
            transition={{ duration: 3.5, delay: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 900 240 L 960 240 L 960 120 L 1080 120"
            stroke="#ef4444" strokeWidth="1.5" fill="none" className="opacity-80"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="35 140"
            animate={{ strokeDashoffset: [0, -175] }}
            transition={{ duration: 3.5, delay: 1.5, repeat: Infinity, ease: "linear" }}
          />

          {/* Line 5 (Far Right) */}
          <path
            d="M 1320 180 L 1320 300 L 1440 300 L 1440 480"
            stroke="#ffffff" strokeWidth="1" fill="none" className="opacity-15"
            vectorEffect="non-scaling-stroke"
          />
          <motion.path
            d="M 1320 180 L 1320 300 L 1440 300 L 1440 480"
            stroke="#fff" strokeWidth="3" fill="none" className="opacity-40 blur-[2px]"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="45 180"
            animate={{ strokeDashoffset: [0, -225] }}
            transition={{ duration: 4.5, delay: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 1320 180 L 1320 300 L 1440 300 L 1440 480"
            stroke="#ef4444" strokeWidth="1.5" fill="none" className="opacity-80"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="45 180"
            animate={{ strokeDashoffset: [0, -225] }}
            transition={{ duration: 4.5, delay: 2, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Background Glow Dots */}
      <div className="absolute inset-0 pointer-events-none">
        <GlowDot className="left-[17%] top-[15%]" delay={0.2} size={26} />
        <GlowDot className="left-[31%] top-[80%]" delay={0.4} size={28} />
        <GlowDot className="left-[58%] top-[24%]" delay={0.6} size={24} />
        <GlowDot className="left-[40%] top-[50%]" delay={0.8} size={22} />
        <GlowDot className="left-[12%] top-[32%]" delay={1.0} size={20} />
        <GlowDot className="left-[58%] top-[62%]" delay={1.2} size={20} />
        <GlowDot className="left-[12%] top-[73%]" delay={1.4} size={24} />
        <GlowDot className="left-[81%] top-[53%]" delay={1.6} size={24} />
        <GlowDot className="left-[89%] top-[92%]" delay={1.8} size={26} />
      </div>
    </div>
  );
};

export default HeroBackground;
