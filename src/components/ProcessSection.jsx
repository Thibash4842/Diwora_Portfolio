import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

/* ──────────────────────────────────────────────
   Process step data matching the reference design
   ────────────────────────────────────────────── */
const STEPS = [
  {
    id: 'audit',
    title: 'Audit and strategy',
    description:
      'We analyze your business, competitors, and market to build a foundation for growth.',
  },
  {
    id: 'execution',
    title: 'Execution & Launch',
    description:
      'We build and launch high-performing campaigns across the right channels with precision targeting.',
  },
  {
    id: 'optimization',
    title: 'Optimization & Testing',
    description:
      'Continuous A/B testing, creative iteration, and data analysis to maximize every rupee spent.',
  },
  {
    id: 'scaling',
    title: 'Scaling What Works',
    description:
      'We double down on winning strategies, expand to new audiences, and compound your results over time.',
  },
];

/* ──────────────────────────────────────────────
   Inline SVG Illustrations for each step
   ────────────────────────────────────────────── */
const AuditIllustration = () => (
  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="auditGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </radialGradient>
      <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e5e5e5" />
        <stop offset="100%" stopColor="#737373" />
      </linearGradient>
      <linearGradient id="lensGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#404040" />
        <stop offset="100%" stopColor="#1a1a1a" />
      </linearGradient>
    </defs>
    <circle cx="200" cy="200" r="180" fill="url(#auditGlow)" />
    {/* Magnifying glass lens */}
    <circle cx="185" cy="175" r="100" stroke="#525252" strokeWidth="6" fill="url(#lensGrad)" opacity="0.9" />
    <circle cx="185" cy="175" r="95" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
    {/* Bar chart inside lens */}
    <motion.rect x="130" y="195" width="18" height="50" rx="3" fill="url(#barGrad)" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.6, delay: 0.1 }} style={{ originY: 1, originX: 0.5 }} />
    <motion.rect x="155" y="165" width="18" height="80" rx="3" fill="url(#barGrad)" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ originY: 1, originX: 0.5 }} />
    <motion.rect x="180" y="140" width="18" height="105" rx="3" fill="#ffffff" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.6, delay: 0.3 }} style={{ originY: 1, originX: 0.5 }} />
    <motion.rect x="205" y="175" width="18" height="70" rx="3" fill="url(#barGrad)" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.6, delay: 0.4 }} style={{ originY: 1, originX: 0.5 }} />
    <motion.rect x="230" y="155" width="18" height="90" rx="3" fill="url(#barGrad)" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.6, delay: 0.5 }} style={{ originY: 1, originX: 0.5 }} />
    {/* Handle */}
    <line x1="260" y1="250" x2="320" y2="320" stroke="#525252" strokeWidth="14" strokeLinecap="round" />
    <line x1="260" y1="250" x2="320" y2="320" stroke="#404040" strokeWidth="10" strokeLinecap="round" />
    {/* Lens reflection */}
    <ellipse cx="155" cy="135" rx="30" ry="8" fill="rgba(255,255,255,0.06)" transform="rotate(-20 155 135)" />
  </svg>
);

const ExecutionIllustration = () => (
  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="execGlow" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </radialGradient>
      <linearGradient id="rocketBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#a3a3a3" />
      </linearGradient>
      <linearGradient id="flameGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f97316" />
        <stop offset="50%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#dc2626" />
      </linearGradient>
    </defs>
    <circle cx="200" cy="200" r="180" fill="url(#execGlow)" />
    {/* Rocket body */}
    <motion.g initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
      <path d="M200 80 C200 80, 230 130, 230 200 L230 260 L170 260 L170 200 C170 130, 200 80, 200 80Z" fill="url(#rocketBody)" />
      {/* Nose cone */}
      <path d="M200 80 C195 100, 185 130, 180 160 L220 160 C215 130, 205 100, 200 80Z" fill="#e5e5e5" />
      {/* Window */}
      <circle cx="200" cy="180" r="16" fill="#1a1a1a" stroke="#525252" strokeWidth="3" />
      <circle cx="200" cy="180" r="10" fill="#262626" />
      <ellipse cx="196" cy="176" rx="3" ry="2" fill="rgba(255,255,255,0.3)" />
      {/* Fins */}
      <path d="M170 230 L145 275 L170 260Z" fill="#737373" />
      <path d="M230 230 L255 275 L230 260Z" fill="#737373" />
      {/* Flame */}
      <motion.g animate={{ scaleY: [1, 1.15, 0.95, 1.1, 1], opacity: [0.9, 1, 0.85, 1, 0.9] }} transition={{ duration: 0.8, repeat: Infinity }}>
        <path d="M185 260 L200 330 L215 260Z" fill="url(#flameGrad)" opacity="0.9" />
        <path d="M190 260 L200 310 L210 260Z" fill="#fbbf24" opacity="0.7" />
      </motion.g>
    </motion.g>
    {/* Speed lines */}
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: [0, 0.3, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}>
      <line x1="155" y1="300" x2="155" y2="350" stroke="#525252" strokeWidth="2" strokeLinecap="round" />
      <line x1="245" y1="295" x2="245" y2="340" stroke="#525252" strokeWidth="2" strokeLinecap="round" />
      <line x1="130" y1="280" x2="130" y2="315" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="270" y1="285" x2="270" y2="320" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" />
    </motion.g>
  </svg>
);

const OptimizationIllustration = () => (
  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="optGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </radialGradient>
      <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#404040" />
        <stop offset="100%" stopColor="#262626" />
      </linearGradient>
    </defs>
    <circle cx="200" cy="200" r="180" fill="url(#optGlow)" />
    {/* Gauge outer ring */}
    <circle cx="200" cy="210" r="120" stroke="#333333" strokeWidth="3" fill="none" />
    <circle cx="200" cy="210" r="115" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="url(#gaugeGrad)" />
    {/* Gauge track */}
    <motion.path
      d="M100 270 A 120 120 0 0 1 300 270"
      stroke="#333333"
      strokeWidth="16"
      strokeLinecap="round"
      fill="none"
    />
    {/* Gauge fill — animated */}
    <motion.path
      d="M100 270 A 120 120 0 0 1 300 270"
      stroke="url(#gaugeActive)"
      strokeWidth="16"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 0.78 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    />
    <defs>
      <linearGradient id="gaugeActive" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#525252" />
        <stop offset="50%" stopColor="#a3a3a3" />
        <stop offset="100%" stopColor="#ffffff" />
      </linearGradient>
    </defs>
    {/* Tick marks */}
    {[...Array(9)].map((_, i) => {
      const angle = -180 + i * 22.5;
      const rad = (angle * Math.PI) / 180;
      const x1 = 200 + 95 * Math.cos(rad);
      const y1 = 210 + 95 * Math.sin(rad);
      const x2 = 200 + 105 * Math.cos(rad);
      const y2 = 210 + 105 * Math.sin(rad);
      return (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#525252" strokeWidth="2" strokeLinecap="round" />
      );
    })}
    {/* Needle */}
    <motion.g
      style={{ transformOrigin: '200px 210px' }}
      initial={{ rotate: -90 }}
      animate={{ rotate: 50 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <line x1="200" y1="210" x2="200" y2="120" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="200" cy="210" r="8" fill="#ffffff" />
    </motion.g>
    <circle cx="200" cy="210" r="5" fill="#1a1a1a" />
    {/* Labels */}
    <text x="200" y="260" textAnchor="middle" fill="#a3a3a3" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="700">78%</text>
    <text x="200" y="278" textAnchor="middle" fill="#525252" fontSize="10" fontFamily="Inter, sans-serif">Conversion Rate</text>
    {/* A/B indicator */}
    <rect x="155" y="300" width="36" height="22" rx="6" fill="#333333" />
    <text x="173" y="315" textAnchor="middle" fill="#ffffff" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="800">A</text>
    <rect x="209" y="300" width="36" height="22" rx="6" fill="#ffffff" />
    <text x="227" y="315" textAnchor="middle" fill="#0a0a0a" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="800">B</text>
  </svg>
);

const ScalingIllustration = () => (
  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="scaleGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </radialGradient>
      <linearGradient id="lineGrad" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stopColor="#525252" />
        <stop offset="100%" stopColor="#ffffff" />
      </linearGradient>
      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </linearGradient>
    </defs>
    <circle cx="200" cy="200" r="180" fill="url(#scaleGlow)" />
    {/* Grid lines */}
    {[120, 170, 220, 270, 320].map((y, i) => (
      <line key={i} x1="60" y1={y} x2="340" y2={y} stroke="#1f1f1f" strokeWidth="1" />
    ))}
    {/* Area fill */}
    <motion.path
      d="M60 320 L100 290 L140 270 L180 230 L220 200 L260 150 L300 110 L340 80 L340 320Z"
      fill="url(#areaGrad)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    />
    {/* Main growth line */}
    <motion.path
      d="M60 320 L100 290 L140 270 L180 230 L220 200 L260 150 L300 110 L340 80"
      stroke="url(#lineGrad)"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    />
    {/* Data points */}
    {[
      [100, 290], [140, 270], [180, 230], [220, 200], [260, 150], [300, 110], [340, 80]
    ].map(([cx, cy], i) => (
      <motion.circle
        key={i}
        cx={cx}
        cy={cy}
        r="5"
        fill="#0a0a0a"
        stroke="#ffffff"
        strokeWidth="2.5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
      />
    ))}
    {/* Branching paths from the last point */}
    <motion.path
      d="M340 80 L360 60"
      stroke="#a3a3a3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="4 4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    />
    <motion.path
      d="M340 80 L370 75"
      stroke="#737373"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="4 4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 1.3 }}
    />
    <motion.path
      d="M340 80 L365 50"
      stroke="#525252"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="4 4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 1.4 }}
    />
    {/* Arrow head at the end */}
    <motion.polygon
      points="340,80 332,88 336,80 332,72"
      fill="#ffffff"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    />
    {/* Growth percentage label */}
    <motion.g initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}>
      <rect x="285" y="60" width="50" height="22" rx="6" fill="rgba(255,255,255,0.1)" />
      <text x="310" y="75" textAnchor="middle" fill="#ffffff" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="800">+340%</text>
    </motion.g>
  </svg>
);

/* ──────────────────────────────────────────────
   Illustration selector
   ────────────────────────────────────────────── */
const ILLUSTRATIONS = [
  AuditIllustration,
  ExecutionIllustration,
  OptimizationIllustration,
  ScalingIllustration,
];

/* ──────────────────────────────────────────────
   Main ProcessSection Component
   ────────────────────────────────────────────── */
const ProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isClickingRef = useRef(false);

  /* ─── Scroll-driven step switching ─── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80px', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (!isClickingRef.current) {
      const index = Math.min(3, Math.floor(progress * 4));
      setActiveIndex(index);
    }
  });

  /* ─── Click-driven step switching ─── */
  const handleStepClick = (index) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const totalHeight = rect.height;
    const viewportHeight = window.innerHeight;
    const stickyHeight = viewportHeight - 80;
    const scrollableRange = totalHeight - stickyHeight;

    if (scrollableRange <= 0) {
      setActiveIndex(index);
      return;
    }

    const targetProgress = (index + 0.5) / 4;
    const sectionStartPageY = window.pageYOffset + rect.top - 80;
    const targetScrollY = sectionStartPageY + targetProgress * scrollableRange;

    isClickingRef.current = true;
    setActiveIndex(index);

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });

    setTimeout(() => {
      isClickingRef.current = false;
    }, 850);
  };

  const ActiveIllustration = ILLUSTRATIONS[activeIndex];

  return (
    <div
      ref={sectionRef}
      data-theme="dark"
      className="relative w-full h-[200vh] md:h-[320vh] bg-[#0a0a0a] font-['Inter',sans-serif] py-14"
    >
      {/* Subtle radial accent glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.015] blur-3xl" />
      </div>

      {/* Header Area */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full flex flex-col gap-2 mb-6 md:mb-8 pt-4 md:pt-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-2"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-red-600 font-semibold">
            Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-[-0.04em] leading-[1.1] mb-2">
            Four steps to sustainable growth
          </h2>
          <p className="text-sm text-neutral-500 max-w-xl">
            We follow a proven methodology that turns data into strategy and strategy into revenue.
            Each phase builds on the last, creating momentum that compounds over time.
          </p>
        </motion.div>
      </div>

      <div className="sticky top-[80px] h-[calc(120vh-80px)] md:h-[130vh] lg:h-[calc(100vh-80px)] w-full flex items-center overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center">

          {/* Left Column — Step List + Active Description */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center w-full order-2 lg:order-1 mt-2 lg:mt-0">
            {/* Step items */}
            <div className="flex flex-col gap-0">
              {STEPS.map((step, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={step.id}
                    onClick={() => handleStepClick(index)}
                    className="cursor-pointer select-none group"
                  >
                    <div className={`py-5 sm:py-6 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-60'}`}>
                      {/* Step title row */}
                      <div className="flex items-start gap-6 lg:gap-8">
                        <h3
                          className={`text-lg sm:text-xl lg:text-2xl font-bold tracking-[-0.02em] transition-colors duration-500 whitespace-nowrap ${isActive ? 'text-white' : 'text-neutral-400'
                            }`}
                        >
                          {step.title}
                        </h3>

                        {/* Description — appears inline next to active title on larger screens */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              key={`${step.id}-desktop`}
                              className="hidden lg:block overflow-hidden"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            >
                              <p className="text-sm text-neutral-400 leading-relaxed max-w-full pt-1">
                                {step.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Mobile description - below title */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            key={`${step.id}-mobile`}
                            className="lg:hidden overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <p className="text-sm text-neutral-400 leading-relaxed mt-2 max-w-sm">
                              {step.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column — Illustration */}
          <div className="col-span-1 lg:col-span-6 flex justify-center items-center w-full order-1 lg:order-2">
            <div className="relative w-full h-[260px] sm:h-[360px] lg:h-auto lg:aspect-[4/3] max-w-[620px] flex items-center justify-center">
              <div className="relative w-full max-w-[260px] sm:max-w-[360px] lg:max-w-[480px] aspect-square">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    className="absolute inset-0 object-cover w-full h-full"
                    initial={{ opacity: 0, scale: 0.92, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ActiveIllustration />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
