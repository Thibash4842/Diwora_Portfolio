import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import useScrollAnimations from '../hooks/useScrollAnimations';

const MARKETPLACE_ITEMS = [
  {
    id: 'product',
    title: 'Product Management',
    description: 'Streamline your product lifecycle from ideation to launch with tools to organize, optimize, and scale products using data-driven insights.',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80', // Sunglasses
  },
  {
    id: 'inventory',
    title: 'Inventory Management',
    description: 'Maintain optimal stock levels and prevent stockouts with real-time tracking, automated reordering, and forecasting tools.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80', // Boxes/Inventory
  },
  {
    id: 'fulfillment',
    title: 'Order Fulfillment',
    description: 'Ensure fast and accurate delivery with end-to-end order processing, shipping automation, and seamless returns management.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80', // Shipping
  },
  {
    id: 'brand',
    title: 'Brand Registry',
    description: 'Protect your intellectual property, control your brand narrative, and unlock advanced marketing tools to build customer trust.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80', // Brand/Logo
  },
  {
    id: 'advertising',
    title: 'Advertising & Promotions',
    description: 'Drive targeted traffic and increase conversions with data-backed ad campaigns, seasonal promotions, and sponsored placements.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', // Analytics/Ads
  },
];

/* Decorative floating dot matching the reference */
const GlowDot = ({ className, delay = 0, size = 20 }) => (
  <motion.div
    className={`absolute flex items-center justify-center ${className}`}
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

const MarketplaceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isClickingRef = useRef(false);

  useScrollAnimations(sectionRef);

  const totalItems = MARKETPLACE_ITEMS.length;

  // Scroll logic to update active tab based on view progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80px", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!isClickingRef.current) {
      const index = Math.min(totalItems - 1, Math.floor(progress * totalItems));
      setActiveIndex(index);
    }
  });

  // Handle click on menu item
  const handleItemClick = (index) => {
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

    const targetProgress = (index + 0.5) / totalItems;
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[250vh] md:h-[400vh] bg-white font-['Inter',sans-serif] py-14"
    >

      {/* Header Area */}
      <div className="max-w-full mx-auto px-6 md:px-12 lg:px-20 w-full flex flex-col gap-3 mb-8 md:mb-12 pt-4 md:pt-0 relative z-10" data-animate="fade-up">
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-black tracking-[-0.03em] leading-tight max-w-xl">
          Marketplace Management
        </h2>
        <p className="text-[15px] text-black/80 max-w-md leading-relaxed">
          An optimizing operations on digital platforms where multiple sellers offer products or services to multiple buyers.
        </p>
      </div>

      {/* Sticky Container */}
      <div className="sticky top-[80px] h-[calc(140vh-80px)] md:h-[150vh] lg:h-[calc(100vh-80px)] w-full flex items-center overflow-hidden z-10">
        <div className="max-w-full mx-auto px-6 md:px-12 lg:px-20 w-full h-full relative flex items-center">

          {/* Background Layer: Animated SVG Lines & GlowDots */}
          <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
            {/* SVG Connector Lines */}
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              {/* Line 1 (Top Left) */}
              <path
                d="M 120 0 L 120 50 L 150 50 L 150 130 L 255 130"
                stroke="#ffffff" strokeWidth="1" fill="none" className="opacity-15"
                vectorEffect="non-scaling-stroke"
              />
              <motion.path
                d="M 120 0 L 120 50 L 150 50 L 150 130 L 255 130"
                stroke="#fff" strokeWidth="3" fill="none" className="opacity-40 blur-[2px]"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="40 160"
                animate={{ strokeDashoffset: [0, -200] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M 120 0 L 120 50 L 150 50 L 150 130 L 255 130"
                stroke="#ef4444" strokeWidth="1.5" fill="none" className="opacity-80"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="40 160"
                animate={{ strokeDashoffset: [0, -200] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              {/* Line 2 (Bottom Left) */}
              <path
                d="M 255 650 L 230 650 L 230 950"
                stroke="#fff" strokeWidth="1" fill="none" className="opacity-15"
                vectorEffect="non-scaling-stroke"
              />
              <motion.path
                d="M 255 650 L 230 650 L 230 950"
                stroke="#fff" strokeWidth="3" fill="none" className="opacity-40 blur-[2px]"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="40 160"
                animate={{ strokeDashoffset: [0, -200] }}
                transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M 255 650 L 230 650 L 230 950"
                stroke="#ef4444" strokeWidth="1.5" fill="none" className="opacity-80"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="40 160"
                animate={{ strokeDashoffset: [0, -200] }}
                transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "linear" }}
              />

              {/* Line 3 (Top Right / Menu Left) */}
              <path
                d="M 660 50 L 660 330 L 620 330 L 620 530"
                stroke="#fff" strokeWidth="1" fill="none" className="opacity-15"
                vectorEffect="non-scaling-stroke"
              />
              <motion.path
                d="M 660 50 L 660 330 L 620 330 L 620 530"
                stroke="#fff" strokeWidth="3" fill="none" className="opacity-40 blur-[2px]"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="45 180"
                animate={{ strokeDashoffset: [0, -225] }}
                transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M 660 50 L 660 330 L 620 330 L 620 530"
                stroke="#ef4444" strokeWidth="1.5" fill="none" className="opacity-80"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="45 180"
                animate={{ strokeDashoffset: [0, -225] }}
                transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "linear" }}
              />

              {/* Line 4 (Middle Right / Menu Right) */}
              <path
                d="M 930 250 L 970 250 L 970 150 L 1000 150"
                stroke="#fff" strokeWidth="1" fill="none" className="opacity-15"
                vectorEffect="non-scaling-stroke"
              />
              <motion.path
                d="M 930 250 L 970 250 L 970 150 L 1000 150"
                stroke="#fff" strokeWidth="3" fill="none"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="35 140"
                animate={{ strokeDashoffset: [0, -175] }}
                transition={{ duration: 3.5, delay: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M 930 250 L 970 250 L 970 150 L 1000 150"
                stroke="#ef4444" strokeWidth="1.5" fill="none" className="opacity-80"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="35 140"
                animate={{ strokeDashoffset: [0, -175] }}
                transition={{ duration: 3.5, delay: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            {/* Background Glow Dots matching Figma exactly */}
            <GlowDot className="left-[17%] top-[5%]" delay={0.2} size={26} />
            <GlowDot className="left-[31%] top-[5%]" delay={0.4} size={28} />
            <GlowDot className="left-[58%] top-[24%]" delay={0.6} size={24} />
            <GlowDot className="left-[20%] top-[24%]" delay={0.8} size={22} />
            <GlowDot className="left-[12%] top-[32%]" delay={1.0} size={20} />
            <GlowDot className="left-[8%] top-[42%]" delay={1.2} size={20} />
            <GlowDot className="left-[12%] top-[73%]" delay={1.4} size={24} />
            <GlowDot className="left-[81%] top-[53%]" delay={1.6} size={24} />
            <GlowDot className="left-[89%] top-[92%]" delay={1.8} size={26} />
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-24 items-center h-full relative z-10">

            {/* Left Column: Featured Content Card */}
            <div className="flex justify-center items-center w-full h-full relative">
              <motion.div
                className="w-full max-w-[420px] aspect-[4/5] bg-[#111111] rounded-[24px] p-4 flex flex-col shadow-2xl relative overflow-hidden group"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    className="flex flex-col h-full w-full"
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Image Container */}
                    <div className="w-full flex-grow bg-white rounded-[16px] overflow-hidden mb-6 relative">
                      <img
                        src={MARKETPLACE_ITEMS[activeIndex].image}
                        alt={MARKETPLACE_ITEMS[activeIndex].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/5" />
                    </div>

                    {/* Text Content */}
                    <div className="px-2 pb-4 flex flex-col gap-3">
                      <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                        {MARKETPLACE_ITEMS[activeIndex].title}
                      </h3>
                      <p className="text-sm text-neutral-400 leading-relaxed max-w-[90%]">
                        {MARKETPLACE_ITEMS[activeIndex].description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Right Column: Vertical Menu */}
            <div className="flex flex-col justify-center w-full h-full relative pl-0 lg:pl-12">
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                {MARKETPLACE_ITEMS.map((item, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleItemClick(index)}
                      className="cursor-pointer group flex items-center relative"
                    >
                      <h3
                        className={`text-2xl sm:text-3xl lg:text-[32px] transition-all duration-500 ease-out whitespace-nowrap ${isActive
                          ? 'text-neutral-900 font-normal translate-x-2 lg:translate-x-4'
                          : 'text-neutral-400 font-light hover:text-neutral-500'
                          }`}
                        style={{
                          letterSpacing: '-0.02em'
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
