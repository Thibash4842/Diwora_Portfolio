import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import useScrollAnimations from '../hooks/useScrollAnimations';

// Service tab data matching reference design
const SERVICES = [
  {
    id: 'social',
    title: 'Social Media Marketing',
    activeTitle: 'Build a community that converts',
    description: 'Organic growth, influencer partnerships, community management, and brand storytelling across platforms.',
    cta: 'Inquire Now',
  },
  {
    id: 'performance',
    title: 'Performance Marketing',
    activeTitle: 'Maximize your advertising ROI',
    description: 'Paid search, social advertising, retargeting, and programmatic campaigns optimized for growth.',
    cta: 'Inquire Now',
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce Marketing',
    activeTitle: 'Scale your online storefront sales',
    description: 'Conversion rate optimization, shopping campaigns, product catalog setups, and checkout funnel design.',
    cta: 'Inquire Now',
  },
  {
    id: 'retention',
    title: 'Retention Marketing',
    activeTitle: 'Turn customers into repeat buyers',
    description: 'Email, WhatsApp, and push notification campaigns.',
    cta: 'Inquire Now',
  },
];

/* ──────────────────────────────────────────────
   3D-Like Floating Glassmorphic Badge Component
   ────────────────────────────────────────────── */
const FloatingBadge = ({ children, className, delay = 0, yOffset = 8 }) => (
  <motion.div
    className={`absolute rounded-2xl bg-white/80 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/40 flex items-center justify-center p-3 select-none z-20 ${className}`}
    animate={{
      y: [0, -yOffset, 0],
    }}
    transition={{
      duration: 3.5,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    {children}
  </motion.div>
);

/* ──────────────────────────────────────────────
   Mockup Wrapper to center the Phone/Dashboard
   ────────────────────────────────────────────── */
const MockupContainer = ({ children }) => (
  <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-[#FAF9F6] to-[#F3F4F6] overflow-hidden">
    <div className="relative w-full h-full flex items-center justify-center origin-center scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100">
      {children}
    </div>
  </div>
);

/* ──────────────────────────────────────────────
   1. Social Media Marketing Mockup
   ────────────────────────────────────────────── */
const SocialMockup = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev.slice(-8),
        { id: Math.random(), left: Math.random() * 60 + 20 }
      ]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MockupContainer>
      {/* Phone Mockup */}
      <div className="relative w-[220px] h-[370px] bg-black rounded-[40px] p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border-[4px] border-[#2C2C2E] overflow-hidden flex flex-col">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-black rounded-b-xl z-30" />

        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col relative">
          {/* Header */}
          <div className="h-10 border-b border-neutral-100 flex items-center justify-between px-3 pt-3">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600 p-[1px]">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[10px]">✨</div>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-neutral-800 leading-tight">diwora_agency</span>
                <span className="text-[7px] text-neutral-400 leading-none">Sponsored</span>
              </div>
            </div>
            <span className="text-[12px] text-neutral-400">•••</span>
          </div>

          {/* Image Post Area */}
          <div className="flex-1 bg-gradient-to-tr from-pink-100 via-indigo-50 to-emerald-50 relative flex items-center justify-center overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-white/90 backdrop-blur shadow-md flex items-center justify-center">
              <span className="text-2xl">🔥</span>
            </div>

            {/* Rising Hearts */}
            <AnimatePresence>
              {hearts.map((h) => (
                <motion.div
                  key={h.id}
                  className="absolute bottom-2 text-red-500 text-base pointer-events-none"
                  style={{ left: `${h.left}%` }}
                  initial={{ opacity: 0, y: 0, scale: 0.6 }}
                  animate={{ opacity: [0, 1, 0], y: -150, scale: [0.6, 1.2, 0.8] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                >
                  ❤️
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Social Stats/Interactions */}
          <div className="p-3 border-t border-neutral-50 flex flex-col gap-1.5">
            <div className="flex gap-2">
              <span className="text-xs">❤️</span>
              <span className="text-xs">💬</span>
              <span className="text-xs">✈️</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[8px] font-bold text-neutral-800">4,912 likes</span>
              <p className="text-[7px] text-neutral-500 leading-tight">
                <span className="font-bold text-neutral-800 mr-1">diwora_agency</span>
                Driving performance-driven creative hooks that convert scrollers to buyers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badges */}
      <FloatingBadge className="top-12 right-12 w-12 h-12 text-[#E1306C]" delay={0.2}>
        <span className="text-xl font-bold">📸</span>
      </FloatingBadge>
      <FloatingBadge className="bottom-16 left-8 w-12 h-12" delay={0.6}>
        <span className="text-xl">❤️</span>
      </FloatingBadge>
      <FloatingBadge className="top-24 left-10 w-11 h-11" delay={1}>
        <span className="text-lg">💬</span>
      </FloatingBadge>
    </MockupContainer>
  );
};

/* ──────────────────────────────────────────────
   2. Performance Marketing Mockup
   ────────────────────────────────────────────── */
const PerformanceMockup = () => {
  return (
    <MockupContainer>
      {/* Dashboard Screen */}
      <div className="w-[280px] bg-white rounded-3xl p-4 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] border border-neutral-100 flex flex-col gap-3.5 relative">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[8px] uppercase tracking-wider text-neutral-400 font-bold">Growth Metrics</span>
            <span className="text-xs font-black text-neutral-800">ROAS Dashboard</span>
          </div>
          <span className="px-2 py-0.5 text-[7px] font-bold text-emerald-600 bg-emerald-50 rounded-full flex items-center gap-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
          </span>
        </div>

        {/* Metric Grid */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-neutral-50 rounded-xl p-2 flex flex-col">
            <span className="text-[7px] text-neutral-400 font-bold">ROAS</span>
            <span className="text-[11px] font-black text-neutral-800">5.4x</span>
            <span className="text-[6px] text-emerald-600 font-semibold mt-0.5">↑ +18%</span>
          </div>
          <div className="bg-neutral-50 rounded-xl p-2 flex flex-col">
            <span className="text-[7px] text-neutral-400 font-bold">Conversions</span>
            <span className="text-[11px] font-black text-neutral-800">+2,400</span>
            <span className="text-[6px] text-emerald-600 font-semibold mt-0.5">↑ +24%</span>
          </div>
          <div className="bg-neutral-50 rounded-xl p-2 flex flex-col">
            <span className="text-[7px] text-neutral-400 font-bold">Ad Spend</span>
            <span className="text-[11px] font-black text-neutral-800">₹15L</span>
            <span className="text-[6px] text-neutral-400 font-semibold mt-0.5">Scale Active</span>
          </div>
        </div>

        {/* SVG Drawing Graph */}
        <div className="relative h-24 border border-neutral-50 rounded-xl p-2 flex flex-col justify-between overflow-hidden">
          <div className="flex justify-between items-center text-[7px] text-neutral-400">
            <span>Daily Sales</span>
            <span>Real-time tracking</span>
          </div>
          <svg className="w-full h-12 absolute bottom-0 left-0 pr-1 overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
            <defs>
              <linearGradient id="neonGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 35 Q 20 30, 40 18 T 80 8 T 100 3 L 100 40 L 0 40 Z" fill="url(#neonGradient)" />
            <motion.path
              d="M0 35 Q 20 30, 40 18 T 80 8 T 100 3"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </svg>
        </div>
      </div>

      {/* Floating Badges */}
      <FloatingBadge className="top-12 left-8 w-11 h-11 text-blue-600" delay={0.1}>
        <span className="text-lg font-bold">G</span>
      </FloatingBadge>
      <FloatingBadge className="bottom-16 right-10 w-11 h-11 text-indigo-700" delay={0.4}>
        <span className="text-xs font-black">Meta</span>
      </FloatingBadge>
    </MockupContainer>
  );
};

/* ──────────────────────────────────────────────
   3. Ecommerce Marketing Mockup
   ────────────────────────────────────────────── */
const EcommerceMockup = () => {
  const [isOrdered, setIsOrdered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsOrdered((prev) => !prev);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <MockupContainer>
      {/* Product Page Card */}
      <div className="w-[240px] bg-white rounded-3xl p-4 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] border border-neutral-100 flex flex-col gap-3 relative">
        <div className="relative w-full h-28 rounded-2xl bg-neutral-50 overflow-hidden flex items-center justify-center">
          <div className="absolute top-2 left-2 px-1.5 py-0.5 text-[7px] font-bold bg-neutral-900 text-white rounded-full uppercase tracking-wider">
            Premium
          </div>
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center text-white text-2xl shadow-md">
            🎧
          </div>
        </div>

        <div className="flex flex-col gap-0.5">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-black text-neutral-800">Pro-Bass Headphones</span>
            <span className="text-[10px] font-bold text-neutral-900">₹14,999</span>
          </div>
          <span className="text-[7px] text-neutral-400 font-semibold">⭐⭐⭐⭐⭐ (284 sales today)</span>
        </div>

        <AnimatePresence mode="wait">
          {!isOrdered ? (
            <motion.button
              key="cart-btn"
              className="w-full py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-[8px] font-bold uppercase tracking-widest"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              Add to Cart
            </motion.button>
          ) : (
            <motion.div
              key="success-msg"
              className="w-full py-2 bg-emerald-50 text-emerald-700 rounded-xl text-[8px] font-bold text-center border border-emerald-100"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              🎉 Conversion Confirmed!
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating badges */}
      <FloatingBadge className="top-16 right-10 w-11 h-11 text-amber-500" delay={0.2}>
        <span className="text-lg">🛒</span>
      </FloatingBadge>
      <FloatingBadge className="bottom-20 left-8 w-12 h-12" delay={0.5}>
        <span className="text-xl">💳</span>
      </FloatingBadge>
    </MockupContainer>
  );
};

/* ──────────────────────────────────────────────
   4. Retention Marketing Mockup (Matches image exactly)
   ────────────────────────────────────────────── */
const RetentionMockup = () => {
  return (
    <MockupContainer>
      {/* Smartphone frame container */}
      <div className="relative w-[210px] h-[360px] bg-black rounded-[40px] p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border-[4px] border-[#2C2C2E] flex flex-col overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-black rounded-b-xl z-30" />

        {/* Screen Background Image */}
        <div className="w-full h-full rounded-[32px] overflow-hidden relative flex flex-col bg-gradient-to-tr from-sky-400 via-emerald-200 to-indigo-400 p-2.5 pt-7">
          {/* Clock & Status */}
          <div className="absolute top-1.5 left-5 right-5 flex justify-between text-[7px] font-bold text-neutral-800">
            <span>9:41</span>
            <div className="flex items-center gap-0.5">
              <span>📶</span>
              <span>🔋</span>
            </div>
          </div>

          {/* Time text centered */}
          <div className="w-full flex flex-col items-center mt-2 text-neutral-800 mb-3">
            <span className="text-[28px] font-light leading-none">9:41</span>
            <span className="text-[5px] font-bold tracking-wider uppercase opacity-80 mt-0.5">Monday, May 25</span>
          </div>

          {/* Notification Center Stack */}
          <div className="flex flex-col gap-1.5 z-10">
            {/* Notification 1: WhatsApp */}
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-xl p-2 shadow-sm border border-white/20 flex flex-col gap-0.5"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center text-[7px] text-white">💬</div>
                  <span className="text-[8px] font-bold text-neutral-800">Welcome back!</span>
                </div>
                <span className="text-[6px] text-neutral-500 font-medium">now</span>
              </div>
              <div className="flex gap-0.5 mt-0.5">
                <span className="w-1 h-1 rounded-full bg-neutral-400" />
                <span className="w-1 h-1 rounded-full bg-neutral-400" />
                <span className="w-1 h-1 rounded-full bg-neutral-400" />
              </div>
            </motion.div>

            {/* Notification 2: Coupon */}
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-xl p-2 shadow-sm border border-white/20 flex flex-col gap-0.5"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[7px] text-white">🏷️</div>
                  <span className="text-[8px] font-bold text-neutral-800">20% Off Today</span>
                </div>
                <span className="text-[6px] text-neutral-500 font-medium">now</span>
              </div>
              <div className="flex gap-0.5 mt-0.5">
                <span className="w-1 h-1 rounded-full bg-neutral-400" />
                <span className="w-1 h-1 rounded-full bg-neutral-400" />
                <span className="w-1 h-1 rounded-full bg-neutral-400" />
              </div>
            </motion.div>

            {/* Notification 3: Delivery */}
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-xl p-2 shadow-sm border border-white/20 flex flex-col gap-0.5"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center text-[7px] text-white">🛍️</div>
                  <span className="text-[8px] font-bold text-neutral-800">Your order is ready</span>
                </div>
                <span className="text-[6px] text-neutral-500 font-medium">now</span>
              </div>
              <div className="flex gap-0.5 mt-0.5">
                <span className="w-1 h-1 rounded-full bg-neutral-400" />
                <span className="w-1 h-1 rounded-full bg-neutral-400" />
                <span className="w-1 h-1 rounded-full bg-neutral-400" />
                <span className="w-1 h-1 rounded-full bg-neutral-400" />
              </div>
            </motion.div>

            {/* Notification 4: Re-engagement */}
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-xl p-2 shadow-sm border border-white/20 flex flex-col gap-0.5"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, type: 'spring', stiffness: 100 }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-700 flex items-center justify-center text-[7px] text-white">☕</div>
                  <span className="text-[8px] font-bold text-neutral-800">We miss you!</span>
                </div>
                <span className="text-[6px] text-neutral-500 font-medium">now</span>
              </div>
              <div className="flex gap-0.5 mt-0.5">
                <span className="w-1 h-1 rounded-full bg-neutral-400" />
                <span className="w-1 h-1 rounded-full bg-neutral-400" />
                <span className="w-1 h-1 rounded-full bg-neutral-400" />
              </div>
            </motion.div>
          </div>

          {/* Bottom Dock */}
          <div className="absolute bottom-2 left-2 right-2 bg-white/30 backdrop-blur-lg rounded-2xl h-8 flex items-center justify-around px-2 border border-white/10 z-10">
            <span className="text-[9px]">✉️</span>
            <span className="text-[9px]">🌐</span>
            <span className="text-[9px]">💬</span>
            <span className="text-[9px]">🛍️</span>
          </div>
        </div>
      </div>

      {/* Floating badges around phone */}
      <FloatingBadge className="top-10 right-10 w-11 h-11 text-emerald-500" delay={0.2}>
        <span className="text-lg">💬</span>
      </FloatingBadge>
      <FloatingBadge className="top-24 left-8 w-10 h-10 text-sky-500" delay={0.5}>
        <span className="text-base">✉️</span>
      </FloatingBadge>
      <FloatingBadge className="bottom-16 right-8 w-10 h-10" delay={0.8}>
        <span className="text-base">🛍️</span>
      </FloatingBadge>
      <FloatingBadge className="bottom-20 left-10 w-9 h-9" delay={1.1}>
        <span className="text-sm">🔄</span>
      </FloatingBadge>
    </MockupContainer>
  );
};

/* ──────────────────────────────────────────────
   Main ServicesSection Component
   ────────────────────────────────────────────── */
const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isClickingRef = useRef(false);

  useScrollAnimations(sectionRef);

  // Scroll logic to update active tab based on view progress, offsetting 80px for the navbar
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80px", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    // Only scroll-sync if user isn't actively navigating via click
    if (!isClickingRef.current) {
      const index = Math.min(3, Math.floor(progress * 4));
      setActiveIndex(index);
    }
  });

  // Jump page scroll offset immediately to sync position for clicked tab, offsetting 80px for the navbar
  const handleTabClick = (index) => {
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

    // Scroll centered within the zone corresponding to the clicked tab
    const targetProgress = (index + 0.5) / 4;

    // Absolute position of the top of the section from the top of the page, minus navbar height (80px)
    const sectionStartPageY = window.pageYOffset + rect.top - 80;
    const targetScrollY = sectionStartPageY + targetProgress * scrollableRange;

    isClickingRef.current = true;
    setActiveIndex(index);

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });

    // Release lock once browser completes smooth scrolling animation
    setTimeout(() => {
      isClickingRef.current = false;
    }, 850);
  };

  const renderVisual = (index) => {
    switch (index) {
      case 0:
        return <SocialMockup />;
      case 1:
        return <PerformanceMockup />;
      case 2:
        return <EcommerceMockup />;
      case 3:
        return <RetentionMockup />;
      default:
        return null;
    }
  };

  return (
    <div data-theme="light" ref={sectionRef} className="relative w-full h-[200vh] md:h-[320vh] bg-white font-['Inter',sans-serif] py-0 md:py-14">
      {/* Header Area */}
      <div className="max-w-full mx-auto px-6 md:px-12 lg:px-20 w-full flex flex-col gap-2 mb-6 md:mb-8 pt-4 md:pt-0" data-animate="fade-up">
        <p className="text-xs uppercase tracking-[0.35em] text-red-600 font-semibold">
          Services
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-black tracking-[-0.04em] leading-[1.1] mb-2">
          How we drive growth
        </h2>
        <p className="text-sm text-neutral-500 max-w-sm">
          Tailored solutions for every stage of your business.
        </p>
      </div>

      <div className="sticky top-[80px] h-[calc(120vh-80px)] md:h-[130vh] lg:h-[calc(100vh-80px)]  w-full flex items-center overflow-hidden">
        <div className="max-w-full mx-auto pl-6 md:pl-12 lg:pl-20 pr-6 md:pr-12 lg:pr-0 w-full lg:h-full grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center lg:items-stretch">

          {/* Left Column: Headers & Card Navigation */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center w-full order-2 lg:order-1 mt-2 lg:mt-0 py-6 lg:py-12">
            {/* Vertically Stacked Card Menu (Matches mockup exactly) */}
            <div className="flex flex-col gap-2 sm:gap-3">
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={service.id}
                    onClick={() => handleTabClick(index)}
                    className={`cursor-pointer w-full rounded-2xl transition-all duration-300 select-none ${isActive
                      ? 'bg-white border border-neutral-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-4 lg:p-6'
                      : 'bg-[#FCFCFD] border border-neutral-100/70 p-3 lg:p-5 hover:bg-neutral-50/50'
                      }`}
                  >
                    {/* Tab Header */}
                    <div className="flex justify-between items-center">
                      <span className={`text-sm sm:text-base lg:text-[21px] font-bold tracking-tight transition-colors duration-300 ${isActive ? 'text-black' : 'text-neutral-700'
                        }`}>
                        {service.title}
                      </span>
                    </div>

                    {/* Tab Expansion details (Expanded when active) */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 lg:pt-4 flex flex-col items-start gap-3 lg:gap-4">
                            <h4 className="text-sm sm:text-base lg:text-lg font-bold text-neutral-900 leading-tight">
                              {service.activeTitle}
                            </h4>
                            <p className="text-[11px] sm:text-xs text-neutral-500 leading-relaxed max-w-sm font-medium">
                              {service.description}
                            </p>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Mockup Showcase Container */}
          <div className="col-span-1 lg:col-span-7 flex justify-center items-stretch w-full order-1 lg:order-2 lg:h-full">
            <div className="relative w-full h-[260px] sm:h-[360px] lg:h-full rounded-2xl lg:rounded-l-3xl lg:rounded-r-none overflow-hidden shadow-sm flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="w-full h-full"
                  initial={{
                    opacity: 0,
                    y: 100,
                    x: 100,
                    scale: 0.85,
                    filter: "blur(10px)"
                  }}
                  animate={{
                    opacity: [0, 1, 1, 1],
                    y: [100, 80, 40, 0],
                    x: [100, 80, 40, 0],
                    scale: [0.85, 0.9, 0.95, 1],
                    filter: ["blur(10px)", "blur(4px)", "blur(0px)", "blur(0px)"]
                  }}
                  exit={{
                    opacity: [1, 1, 1, 0],
                    y: [0, -40, -80, -100],
                    x: [0, 40, 80, 100],
                    scale: [1, 0.95, 0.9, 0.85],
                    filter: ["blur(0px)", "blur(0px)", "blur(4px)", "blur(10px)"],
                    transition: {
                      duration: 0.9,
                      times: [0, 0.35, 0.7, 1],
                      ease: "easeInOut"
                    }
                  }}
                  transition={{
                    duration: 0.9,
                    times: [0, 0.35, 0.7, 1],
                    ease: "easeInOut"
                  }}
                >
                  {renderVisual(activeIndex)}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
