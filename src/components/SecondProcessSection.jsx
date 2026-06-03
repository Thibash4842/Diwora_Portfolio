import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import audit from '../assets/advertising/process/strategy01.png';
import execution from '../assets/advertising/process/Execution01.png';
import optimization from '../assets/advertising/process/optimization01.png';
import scaling from '../assets/advertising/process/works01.png';

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
   Image Components for each step
   ────────────────────────────────────────────── */
const StepImageContainer = ({ color, imageSrc, alt, initialRotation, imageClassName = "" }) => (
  <div className="w-full h-full flex items-center justify-center relative perspective-[1200px]">
    {/* Ambient Glow */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className={`w-64 h-64 ${color} rounded-full blur-[80px] opacity-40`} />
    </div>

    <motion.div
      initial={{ opacity: 0, rotateX: initialRotation.x, rotateY: initialRotation.y, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, rotateX: initialRotation.x / 2, rotateY: initialRotation.y / 2, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-[90%] max-w-[420px] aspect-[4/4] z-10 group flex items-center justify-center"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div
        animate={{ y: [-12, 12, -12] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full flex items-center justify-center"
      >
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 opacity-90 group-hover:opacity-100 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] ${imageClassName}`}
        />
      </motion.div>
    </motion.div>
  </div>
);

const AuditImage = () => (
  <StepImageContainer
    color="bg-indigo-500"
    imageSrc={audit}
    alt="Audit and Strategy"
    initialRotation={{ x: 20, y: -15 }}
  />
);

const ExecutionImage = () => (
  <StepImageContainer
    color="bg-orange-500"
    imageSrc={execution}
    alt="Execution & Launch"
    initialRotation={{ x: -10, y: 15 }}
    imageClassName="rotate-45"
  />
);

const OptimizationImage = () => (
  <StepImageContainer
    color="bg-emerald-500"
    imageSrc={optimization}
    alt="Optimization & Testing"
    initialRotation={{ x: 15, y: -10 }}
  />
);

const ScalingImage = () => (
  <StepImageContainer
    color="bg-cyan-500"
    imageSrc={scaling}
    alt="Scaling What Works"
    initialRotation={{ x: 30, y: -10 }}
  />
);

/* ──────────────────────────────────────────────
   Illustration selector
   ────────────────────────────────────────────── */
const ILLUSTRATIONS = [
  AuditImage,
  ExecutionImage,
  OptimizationImage,
  ScalingImage,
];

/* ──────────────────────────────────────────────
   Main SecondProcessSection Component
   ────────────────────────────────────────────── */
const SecondProcessSection = () => {
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
      <div className="max-w-full mx-auto px-6 md:px-12 lg:px-20 w-full flex flex-col gap-2 mb-6 md:mb-8 pt-4 md:pt-0 relative z-10">
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
        <div className="max-w-full mx-auto px-6 md:px-12 lg:px-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-2 xl:gap-2 items-center">

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
                          className={`text-lg sm:text-xl lg:text-2xl font-bold tracking-[-0.02em] transition-colors duration-500 whitespace-nowrap ${isActive ? 'text-white [text-shadow:0_0_10px_rgba(255,255,255,0.7)]' : 'text-neutral-400'
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

export default SecondProcessSection;
