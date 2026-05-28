import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from './Navbar';
import Partner from './Partner';
import Testimonial from './TestimonialSlider';
import Footer from './Footer';
import ServicesSection from './ServicesSection';
import ResultsSection from './ResultsSection';
import ProcessSection from './ProcessSection';
import MarketplaceSection from './MarketplaceSection';
import datadriven from '../assets/advertising/datadriven.png';
import expertise from '../assets/advertising/expertise.png';

/* ──────────────────────────────────────────────
   Animated counter hook for stats
   ────────────────────────────────────────────── */
const useCountUp = (end, duration = 2000, startOnView = false, inView = true) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (startOnView && !inView) return;
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, startOnView, inView]);

  return count;
};

/* ──────────────────────────────────────────────
   Decimal-aware counter (e.g. 8.2)
   ────────────────────────────────────────────── */
const useCountUpDecimal = (end, decimals = 1, duration = 2000, startOnView = false, inView = true) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (startOnView && !inView) return;
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, decimals, duration, startOnView, inView]);

  return count;
};

/* ──────────────────────────────────────────────
   Decorative floating dot
   ────────────────────────────────────────────── */
const FloatingDot = ({ className, delay = 0, size = 6 }) => (
  <motion.div
    className={`absolute rounded-full ${className}`}
    style={{ width: size, height: size }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.6, ease: 'easeOut' }}
  >
    <motion.div
      className="w-full h-full rounded-full bg-current"
      animate={{ y: [0, -8, 0], opacity: [1, 0.6, 1] }}
      transition={{ duration: 3 + delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  </motion.div>
);

/* ──────────────────────────────────────────────
   Stat item with animated counter
   ────────────────────────────────────────────── */
const StatItem = ({ prefix = '', value, suffix = '', label, inView }) => {
  const count = useCountUp(value, 2200, true, inView);
  return (
    <div className="flex flex-col items-center md:items-start">
      <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-black tracking-tight leading-none">
        {prefix}{count}{suffix}
      </span>
      {label && (
        <span className="text-xs sm:text-sm text-neutral-400 font-medium mt-1 tracking-wide">
          {label}
        </span>
      )}
    </div>
  );
};

/* ──────────────────────────────────────────────
   Dashboard stat card with animated counter
   ────────────────────────────────────────────── */
const DashboardStat = ({ prefix = '', value, suffix = '', label, inView, dark = false, decimal = false }) => {
  const count = decimal
    ? useCountUpDecimal(value, 1, 2200, true, inView)
    : useCountUp(value, 2200, true, inView);

  return (
    <div className={`rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-sm ${dark
      ? 'bg-neutral-900'
      : 'border border-neutral-200 bg-white'
      }`}>
      <span className={`block text-3xl sm:text-4xl lg:text-[42px] font-black leading-none tracking-tight ${dark ? 'text-white' : 'text-black'
        }`}>
        {prefix}{count}{suffix}
      </span>
      <span className={`block text-sm sm:text-[15px] font-medium mt-2 ${dark ? 'text-neutral-400' : 'text-neutral-500'
        }`}>
        {label}
      </span>
    </div>
  );
};

/* ──────────────────────────────────────────────
   Main Advertising Landing Page
   ────────────────────────────────────────────── */
const Advertising = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' });

  const dashboardRef = useRef(null);
  const dashboardInView = useInView(dashboardRef, { once: true, margin: '-80px' });

  return (
    <div className="relative w-full min-h-screen bg-white overflow-x-clip font-['Inter',sans-serif]">
      <Navbar />

      {/* ─── Hero Section ─── */}
      <section className="relative z-10 flex flex-col justify-center pt-28 pb-12 sm:pt-32 lg:pt-32 lg:pb-16">

        {/* ─── Subtle Grid Pattern Background ─── */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="adGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#adGrid)" />
          </svg>
        </div>


        {/* Decorative Dots */}
        <FloatingDot className="text-red-400 top-28 left-[28%] hidden md:block" delay={0.3} size={7} />
        <FloatingDot className="text-red-500 top-36 right-[22%] hidden lg:block" delay={0.6} size={5} />
        <FloatingDot className="text-red-300 top-[45%] left-[15%] hidden lg:block" delay={0.9} size={8} />
        <FloatingDot className="text-red-400 top-[55%] right-[35%] hidden md:block" delay={1.2} size={6} />
        <FloatingDot className="text-red-500 bottom-[30%] left-[45%] hidden lg:block" delay={0.5} size={5} />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full flex flex-col justify-center gap-8 lg:gap-12 flex-1">

          {/* ─── Hero Heading ─── */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-black text-black leading-[1.05] tracking-[-0.02em] uppercase max-w-6xl">
              SCALE YOUR REVENUE WITH PERFORMANCE DRIVEN MARKETING
            </h1>
          </motion.div>

          {/* ─── CTA + Description Row ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end w-full">
            {/* CTA Button */}
            <motion.div
              className="lg:col-span-7 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="group relative px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:shadow-xl active:scale-[0.97] text-[15px]">
                <span className="relative z-10 flex items-center gap-2">
                  Inquire Now
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </motion.div>

            {/* Description */}
            <motion.div
              className="lg:col-span-5 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <p className="text-[14px] md:text-[15px] text-neutral-500 leading-relaxed">
                  We build campaigns that deliver measurable results. From startups to established brands, we've helped businesses generate millions in revenue through data-driven strategies and creative excellence.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ─── Stats Bar ─── */}
          <section ref={statsRef} className="relative z-10 border-t border-neutral-100">
            <div className="max-w-7xl mx-auto">
              {/* Trusted label */}
              <motion.p
                className="text-xs sm:text-sm font-medium text-neutral-400 tracking-widest uppercase mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                Trusted by leading brands across India
              </motion.p>

              {/* Stats */}
              <motion.div
                className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-0"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <StatItem prefix="₹" value={10} suffix="Cr+" label="ad spend managed" inView={statsInView} />

                {/* Divider */}
                <div className="hidden md:block w-px h-12 bg-neutral-200 mx-8 lg:mx-12" />
                <span className="md:hidden text-neutral-300 text-2xl">|</span>

                <StatItem value={5} suffix="M+" label="leads generated" inView={statsInView} />

                {/* Divider */}
                <div className="hidden md:block w-px h-12 bg-neutral-200 mx-8 lg:mx-12" />
                <span className="md:hidden text-neutral-300 text-2xl">|</span>

                <StatItem value={300} suffix="%+" label="average ROAS" inView={statsInView} />
              </motion.div>
            </div>
          </section>
        </div>
      </section>

      {/* ─── Why choose us ─── */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col items-start gap-2 sm:gap-3 mb-10 sm:mb-12 lg:mb-16">
            <p className="text-xs uppercase tracking-[0.35em] text-red-600 font-semibold">
              Why choose us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-[-0.04em] leading-tight max-w-3xl">
              What sets us apart
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 leading-7 max-w-2xl">
              We obsess over numbers, not vanity metrics.
            </p>
          </div>

          {/* Cards Grid - Fully Responsive */}
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {/* Card 1: Data Driven Strategy */}
            <article className="flex flex-col h-full rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white/95 p-6 sm:p-8 shadow-[0_28px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(15,23,42,0.12)]">
              <div className="inline-flex items-center justify-center rounded-2xl mb-6 h-48 sm:h-56 w-full overflow-hidden">
                <img src={datadriven} alt="Data Driven Strategy" className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow flex flex-col">
                <h3 className="text-xl sm:text-2xl font-semibold text-black mb-2 sm:mb-3">
                  Data Driven Strategy
                </h3>
                <p className="text-sm sm:text-base text-neutral-500 leading-7 mb-6 sm:mb-8 flex-grow">
                  Every decision backed by real data and testing.
                </p>
                <button className="mt-auto self-start inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-black transition-all duration-300 hover:border-red-500 hover:text-red-600 hover:bg-red-50/50">
                  Learn More
                </button>
              </div>
            </article>

            {/* Card 2: ROI Focused Execution (Featured) */}
            <article className="flex flex-col h-full rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white/95 p-6 sm:p-8 shadow-[0_28px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(15,23,42,0.12)]">
              <div className="inline-flex items-center justify-center rounded-2xl mb-6 h-48 sm:h-56 w-full overflow-hidden">
                <img src="" alt="ROI Focused Execution" className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-black text-black mb-3 sm:mb-4 leading-tight">
                  ROI Focused Execution
                </h3>
                <p className="text-sm sm:text-base text-black leading-7 mb-8 sm:mb-10 flex-grow">
                  We optimize for revenue, not just clicks.
                </p>
                <button className="mt-auto self-start inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-black transition-all duration-300 hover:border-red-500 hover:text-red-600 hover:bg-red-50/50">
                  Learn More
                </button>
              </div>
            </article>

            {/* Card 3: Full Funnel Expertise */}
            <article className="md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col h-full rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white/95 p-6 sm:p-8 shadow-[0_28px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(15,23,42,0.12)]">
              <div className="inline-flex items-center justify-center rounded-2xl mb-6 h-48 sm:h-56 w-full overflow-hidden">
                <img src={expertise} alt="Full Funnel Expertise" className="w-full h-full object-contain" />
              </div>
              <div className="flex-grow flex flex-col">
                <h3 className="text-xl sm:text-2xl font-semibold text-black mb-2 sm:mb-3">
                  Full Funnel Expertise
                </h3>
                <p className="text-sm sm:text-base text-neutral-500 leading-7 mb-6 sm:mb-8 flex-grow">
                  From awareness to retention, we handle it all.
                </p>
                <button className="mt-auto self-start inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-black transition-all duration-300 hover:border-red-500 hover:text-red-600 hover:bg-red-50/50">
                  Learn More
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ─── Partner ───  */}
      <Partner />

      {/* ─── Performance Dashboard ─── */}
      <section ref={dashboardRef} className="relative z-10 py-16 sm:py-20 lg:py-4">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Section Title */}
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-black tracking-[-0.02em] mb-8 sm:mb-10 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={dashboardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Performance Dashboard
          </motion.h2>

          {/* Dashboard Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={dashboardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Left – Large placeholder card */}
            <div className="rounded-2xl sm:rounded-3xl bg-neutral-100 min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]" />

            {/* Right – Stat cards stack */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:w-[260px]">
              {/* Card 1 – ₹150Cr+ */}
              <DashboardStat prefix="₹" value={150} suffix="Cr+" label="Ad Spend Managed" inView={dashboardInView} />

              {/* Card 2 – ₹450Cr+ (dark) */}
              <DashboardStat prefix="₹" value={450} suffix="Cr+" label="Revenue Generated" inView={dashboardInView} dark />

              {/* Card 3 – 8.2M+ */}
              <DashboardStat value={8.2} suffix="M+" label="Ad Spend Managed" inView={dashboardInView} decimal />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Services Section ─── */}
      <ServicesSection />

      {/* ─── Results Section ─── */}
      <ResultsSection />

      {/* ─── Process Section ─── */}
      <ProcessSection />

      {/* ─── Marketplace Section ─── */}
      <MarketplaceSection />

      {/* ─── Testimonial Slider Section ─── */}
      <Testimonial />

      {/* ─── Footer Section ─── */}
      <Footer />

    </div>
  );
};

export default Advertising;

