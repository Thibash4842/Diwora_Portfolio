import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
// import optimization from '../assets/advertising/process/optimization01.png';

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
  <div className="w-full h-full flex items-center justify-center relative perspective-[1200px]">
    {/* Ambient Glow */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]" />
    </div>

    <motion.div
      initial={{ opacity: 0, rotateX: 20, rotateY: -15, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, rotateX: 10, rotateY: -10, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-[85%] max-w-[320px] aspect-[4/3] rounded-2xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] p-5 flex flex-col justify-between z-10"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="h-2.5 w-24 bg-white/20 rounded-full" />
          <div className="h-1.5 w-16 bg-white/10 rounded-full" />
        </div>
      </div>

      <div className="flex items-end justify-between h-24 mt-6 border-b border-white/[0.05] pb-2 relative" style={{ transform: "translateZ(20px)" }}>
        {[45, 75, 55, 95, 65, 85].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: `${h}%`, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`w-[12%] rounded-t-sm ${i === 3 ? 'bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-white/10'}`}
          />
        ))}
      </div>

      {/* Floating Metric Card */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-6 -bottom-6 w-36 p-3 rounded-xl border border-white/[0.08] bg-white/5 backdrop-blur-2xl shadow-xl z-20 flex flex-col gap-1"
        style={{ transform: "translateZ(40px)" }}
      >
        <span className="text-[10px] text-neutral-400 font-medium">Market Share</span>
        <div className="flex items-end gap-2">
          <span className="text-lg font-bold text-white leading-none">24.5%</span>
          <span className="text-[10px] text-emerald-400 font-medium pb-0.5">+4.2%</span>
        </div>
      </motion.div>
    </motion.div>
  </div>
);

const ExecutionIllustration = () => (
  <div className="w-full h-full flex items-center justify-center relative perspective-[1200px]">
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-64 h-64 bg-orange-500/15 rounded-full blur-[80px]" />
    </div>

    {/* Multi-layered Launch UI */}
    <motion.div
      initial={{ opacity: 0, rotateX: -10, rotateY: 15, scale: 0.9 }}
      animate={{ opacity: 1, rotateX: 5, rotateY: 10, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-[90%] max-w-[340px] aspect-[16/10] z-10 flex items-center justify-center"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Background Dashboard */}
      <div className="absolute inset-0 rounded-2xl border border-white/[0.05] bg-[#111111]/60 backdrop-blur-md p-4 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
          <div className="h-2 w-16 bg-white/10 rounded-full" />
        </div>
        <div className="w-full space-y-2">
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }} className="h-full bg-orange-500/30" />
          </div>
          <div className="h-1.5 w-3/4 bg-white/5 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2.2, delay: 0.6, ease: "easeInOut" }} className="h-full bg-orange-500/30" />
          </div>
        </div>
      </div>

      {/* Foreground Rocket / Launch Node */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-20 w-32 h-32 rounded-2xl border border-orange-500/30 bg-[#161616]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(249,115,22,0.15)] flex flex-col items-center justify-center gap-3"
        style={{ transform: "translateZ(50px)" }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 rounded-xl bg-gradient-to-tr from-orange-600 to-red-500 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.4)]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
        </motion.div>
        <div className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-[10px] text-orange-400 font-semibold tracking-wider">
          DEPLOYING
        </div>
      </motion.div>
    </motion.div>
  </div>
);

const OptimizationIllustration = () => (
  <div className="w-full h-full flex items-center justify-center relative perspective-[1200px]">
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-64 h-64 bg-emerald-500/15 rounded-full blur-[80px]" />
    </div>

    <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
      {/* Variant A */}
      <motion.div
        initial={{ opacity: 0, x: -30, rotateY: 15, scale: 0.9 }}
        animate={{ opacity: 1, x: -20, rotateY: 10, scale: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute z-10 w-40 p-4 rounded-xl border border-white/[0.05] bg-[#111111]/80 backdrop-blur-xl shadow-xl flex flex-col gap-3"
      >
        <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-neutral-400 font-bold bg-white/10 px-2 py-0.5 rounded-md">VAR A</span>
            <div className="w-2 h-2 rounded-full bg-neutral-600" />
          </div>
          <div className="h-16 w-full border border-white/5 rounded-lg flex items-end p-2 gap-1 bg-white/[0.02] mt-3">
            <div className="w-full bg-white/10 rounded-sm h-[40%]" />
            <div className="w-full bg-white/10 rounded-sm h-[60%]" />
            <div className="w-full bg-white/10 rounded-sm h-[45%]" />
          </div>
          <div className="text-sm font-bold text-neutral-300 mt-2">2.4% <span className="text-[10px] text-neutral-500 font-normal">conv.</span></div>
        </motion.div>
      </motion.div>

      {/* Variant B (Winner) */}
      <motion.div
        initial={{ opacity: 0, x: 30, rotateY: -15, scale: 0.9, z: 20 }}
        animate={{ opacity: 1, x: 20, rotateY: -10, scale: 1.05, z: 40 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute z-20 w-44 p-4 rounded-xl border border-emerald-500/30 bg-[#161616]/90 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col gap-3"
      >
        <motion.div animate={{ y: [4, -4, 4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-500/20">VAR B</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </div>
          <div className="h-16 w-full border border-emerald-500/10 rounded-lg flex items-end p-2 gap-1 bg-emerald-500/[0.02] relative overflow-hidden mt-3">
            <div className="w-full bg-emerald-500/30 rounded-sm h-[50%]" />
            <div className="w-full bg-emerald-500/50 rounded-sm h-[75%]" />
            <div className="w-full bg-emerald-500 rounded-sm h-[90%] shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute top-1 right-2 text-emerald-400"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </motion.div>
          </div>
          <div className="text-lg font-bold text-white mt-2">5.8% <span className="text-[10px] text-emerald-400 font-medium">conv.</span></div>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

const ScalingIllustration = () => (
  <div className="w-full h-full flex items-center justify-center relative perspective-[1200px]">
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-64 h-64 bg-cyan-500/15 rounded-full blur-[80px]" />
    </div>

    <motion.div
      initial={{ opacity: 0, rotateX: 30, rotateZ: -10, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, rotateX: 20, rotateZ: -5, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-[85%] max-w-[320px] aspect-[4/3] rounded-2xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] p-5 z-10"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* 3D Grid background */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20 pointer-events-none">
        <div className="w-full h-full border-[0.5px] border-white/20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>

      <div className="flex flex-col h-full justify-between relative z-10">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Total Revenue</span>
            <span className="text-2xl font-bold text-white">$4.2M</span>
          </div>
          <div className="px-2 py-1 rounded-md bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold">
            +340% YOY
          </div>
        </div>

        {/* 3D Chart Line */}
        <div className="relative h-24 w-full mt-auto" style={{ transform: "translateZ(30px)" }}>
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(6, 182, 212, 0.3)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0 100 L 20 80 L 40 85 L 60 50 L 80 40 L 100 10"
              fill="url(#chartGrad)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
            <motion.path
              d="M0 100 L 20 80 L 40 85 L 60 50 L 80 40 L 100 10"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
          </svg>

          {/* Floating Data Point */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
            className="absolute top-[10%] right-0 w-3 h-3 rounded-full bg-white border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
          />
        </div>
      </div>
    </motion.div>
  </div>
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
      <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 w-full flex flex-col gap-2 mb-6 md:mb-8 pt-4 md:pt-0 relative z-10">
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
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-2 xl:gap-2 items-center">

          {/* Left Column — Step List + Active Description */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center w-full order-2 lg:order-1 mt-2 lg:mt-0 relative z-20">
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
                          className={`text-lg sm:text-xl lg:text-2xl font-bold tracking-[-0.02em] transition-colors duration-500 whitespace-nowrap ${isActive ? 'text-white [text-shadow:0_0_10px_rgba(255,255,255,0.8)]' : 'text-neutral-400'
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
                              <p className="text-sm text-neutral-400 leading-relaxed max-w-full pt-1 [text-shadow:0_0_10px_rgba(255,255,255,0.8)]">
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
          <div className="col-span-1 lg:col-span-7 flex justify-center lg:justify-end xl:justify-center items-center w-full order-1 lg:order-2 pointer-events-none z-10">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] xl:h-[750px] flex items-center justify-center lg:justify-end xl:justify-center">
              <div className="relative w-[340px] h-[340px] scale-[0.85] sm:scale-100 lg:scale-[1.3] xl:scale-[1.6] 2xl:scale-[1.8] origin-center lg:origin-right xl:origin-center">
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
