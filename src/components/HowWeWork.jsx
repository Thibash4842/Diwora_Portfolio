import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────────────────
   Custom Modern Minimal Illustrations (Startup / Product Style)
   ────────────────────────────────────────────────────────── */

const UnderstandIllustration = () => (
  <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="glowGrad1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.02" />
      </linearGradient>
      <linearGradient id="lineGrad1" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
    </defs>

    {/* Grid Background */}
    <rect width="400" height="220" rx="16" fill="#09090b" />
    <path d="M 0,22 H 400 M 0,44 H 400 M 0,66 H 400 M 0,88 H 400 M 0,110 H 400 M 0,132 H 400 M 0,154 H 400 M 0,176 H 400 M 0,198 H 400" stroke="#18181b" strokeWidth="1" />
    <path d="M 40,0 V 220 M 80,0 V 220 M 120,0 V 220 M 160,0 V 220 M 200,0 V 220 M 240,0 V 220 M 280,0 V 220 M 320,0 V 220 M 360,0 V 220" stroke="#18181b" strokeWidth="1" />

    {/* Abstract user persona box */}
    <rect x="50" y="55" width="110" height="65" rx="10" fill="url(#glowGrad1)" stroke="#3b82f6" strokeWidth="1.2" />
    <circle cx="85" cy="80" r="12" fill="#3b82f6" fillOpacity="0.15" stroke="#3b82f6" strokeWidth="1" />
    <line x1="110" y1="75" x2="145" y2="75" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />
    <line x1="110" y1="85" x2="135" y2="85" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.5" />
    <line x1="70" y1="102" x2="145" y2="102" stroke="#27272a" strokeWidth="1.5" strokeLinecap="round" />

    {/* Context overlap card */}
    <rect x="230" y="95" width="120" height="70" rx="10" fill="#0f172a" fillOpacity="0.6" stroke="#6366f1" strokeWidth="1.2" strokeOpacity="0.8" />
    <path d="M 255,120 L 270,135 L 290,115" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="300" y1="125" x2="330" y2="125" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="255" y1="145" x2="325" y2="145" stroke="#475569" strokeWidth="1.5" />

    {/* Dynamic curve linking nodes */}
    <path d="M 160,88 C 195,88 195,130 230,130" stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="4 4" />

    {/* Concentric scan circles */}
    <circle cx="195" cy="109" r="28" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />
    <circle cx="195" cy="109" r="18" stroke="#60a5fa" strokeWidth="1.5" strokeOpacity="0.8" />
    <circle cx="195" cy="109" r="4" fill="#ffffff" />
  </svg>
);

const StrategyIllustration = () => (
  <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="glowGrad2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.02" />
      </linearGradient>
      <linearGradient id="lineGrad2" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
    </defs>

    {/* Grid Background */}
    <rect width="400" height="220" rx="16" fill="#09090b" />
    <path d="M 0,22 H 400 M 0,44 H 400 M 0,66 H 400 M 0,88 H 400 M 0,110 H 400 M 0,132 H 400 M 0,154 H 400 M 0,176 H 400 M 0,198 H 400" stroke="#18181b" strokeWidth="1" />
    <path d="M 40,0 V 220 M 80,0 V 220 M 120,0 V 220 M 160,0 V 220 M 200,0 V 220 M 240,0 V 220 M 280,0 V 220 M 320,0 V 220 M 360,0 V 220" stroke="#18181b" strokeWidth="1" />

    {/* Flow Diagram / Roadmap spline */}
    <path d="M 60,150 L 140,90 L 250,130 L 330,60" stroke="url(#lineGrad2)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Milestones */}
    <circle cx="60" cy="150" r="5" fill="#09090b" stroke="#a855f7" strokeWidth="3" />
    <circle cx="140" cy="90" r="5" fill="#09090b" stroke="#a855f7" strokeWidth="3" />
    <circle cx="250" cy="130" r="5" fill="#09090b" stroke="#d946ef" strokeWidth="3" />
    <circle cx="330" cy="60" r="7" fill="#ffffff" stroke="#d946ef" strokeWidth="4" />

    {/* Metric Box */}
    <rect x="75" y="35" width="85" height="40" rx="8" fill="url(#glowGrad2)" stroke="#a855f7" strokeWidth="1.2" />
    <line x1="88" y1="48" x2="138" y2="48" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="88" y1="58" x2="120" y2="58" stroke="#c084fc" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M 125,88 L 125,75" stroke="#a855f7" strokeWidth="1.2" strokeDasharray="2,2" />

    {/* Competitive positioning card */}
    <rect x="250" y="150" width="95" height="45" rx="8" fill="#09090b" stroke="#d946ef" strokeWidth="1.2" strokeOpacity="0.4" />
    <line x1="262" y1="163" x2="312" y2="163" stroke="#52525b" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="262" y1="173" x2="295" y2="173" stroke="#d946ef" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const DesignIllustration = () => (
  <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="glowGrad3" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#ef4444" stopOpacity="0.02" />
      </linearGradient>
      <linearGradient id="lineGrad3" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>

    {/* Grid Background */}
    <rect width="400" height="220" rx="16" fill="#09090b" />
    <path d="M 0,22 H 400 M 0,44 H 400 M 0,66 H 400 M 0,88 H 400 M 0,110 H 400 M 0,132 H 400 M 0,154 H 400 M 0,176 H 400 M 0,198 H 400" stroke="#18181b" strokeWidth="1" />
    <path d="M 40,0 V 220 M 80,0 V 220 M 120,0 V 220 M 160,0 V 220 M 200,0 V 220 M 240,0 V 220 M 280,0 V 220 M 320,0 V 220 M 360,0 V 220" stroke="#18181b" strokeWidth="1" />

    {/* Wireframe Phone Frame */}
    <rect x="140" y="30" width="120" height="160" rx="12" fill="url(#glowGrad3)" stroke="#f59e0b" strokeWidth="1.2" />
    <circle cx="200" cy="42" r="3.5" fill="#f59e0b" />

    {/* UI blocks inside card */}
    <rect x="155" y="60" width="90" height="25" rx="6" fill="#18181b" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" />
    <rect x="155" y="95" width="40" height="40" rx="6" fill="#18181b" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.4" />
    <rect x="205" y="95" width="40" height="40" rx="6" fill="#18181b" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.4" />
    <rect x="155" y="145" width="90" height="25" rx="6" fill="#18181b" stroke="#52525b" strokeWidth="1" strokeOpacity="0.2" />

    {/* Floating Pen curve representing vector graphics */}
    <path d="M 80,120 C 130,50 270,170 320,100" stroke="url(#lineGrad3)" strokeWidth="3" strokeLinecap="round" />
    <circle cx="200" cy="110" r="5.5" fill="#ffffff" stroke="#ef4444" strokeWidth="2.5" />

    {/* Handles */}
    <line x1="200" y1="110" x2="225" y2="65" stroke="#f59e0b" strokeWidth="1.5" />
    <line x1="200" y1="110" x2="175" y2="155" stroke="#f59e0b" strokeWidth="1.5" />
    <circle cx="225" cy="65" r="3" fill="#f59e0b" />
    <circle cx="175" cy="155" r="3" fill="#f59e0b" />
  </svg>
);

const BuildIllustration = () => (
  <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="glowGrad4" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.02" />
      </linearGradient>
      <linearGradient id="lineGrad4" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>

    {/* Grid Background */}
    <rect width="400" height="220" rx="16" fill="#09090b" />
    <path d="M 0,22 H 400 M 0,44 H 400 M 0,66 H 400 M 0,88 H 400 M 0,110 H 400 M 0,132 H 400 M 0,154 H 400 M 0,176 H 400 M 0,198 H 400" stroke="#18181b" strokeWidth="1" />
    <path d="M 40,0 V 220 M 80,0 V 220 M 120,0 V 220 M 160,0 V 220 M 200,0 V 220 M 240,0 V 220 M 280,0 V 220 M 320,0 V 220 M 360,0 V 220" stroke="#18181b" strokeWidth="1" />

    {/* Isometric Component blocks */}
    <g transform="translate(135, 80)">
      <path d="M 0,-20 L 30,-35 L 60,-20 L 30,-5 Z" fill="#10b981" fillOpacity="0.65" stroke="#10b981" strokeWidth="1.2" />
      <path d="M 0,-20 L 30,-5 L 30,25 L 0,10 Z" fill="#059669" fillOpacity="0.65" stroke="#10b981" strokeWidth="1.2" />
      <path d="M 30,-5 L 60,-20 L 60,10 L 30,25 Z" fill="#047857" fillOpacity="0.65" stroke="#10b981" strokeWidth="1.2" />
    </g>

    <g transform="translate(195, 110)">
      <path d="M 0,-20 L 30,-35 L 60,-20 L 30,-5 Z" fill="#06b6d4" fillOpacity="0.65" stroke="#06b6d4" strokeWidth="1.2" />
      <path d="M 0,-20 L 30,-5 L 30,25 L 0,10 Z" fill="#0891b2" fillOpacity="0.65" stroke="#06b6d4" strokeWidth="1.2" />
      <path d="M 30,-5 L 60,-20 L 60,10 L 30,25 Z" fill="#0e7490" fillOpacity="0.65" stroke="#06b6d4" strokeWidth="1.2" />
    </g>

    {/* Code Tag floating box */}
    <rect x="40" y="40" width="80" height="40" rx="8" fill="#18181b" stroke="url(#lineGrad4)" strokeWidth="1.2" />
    <text x="50" y="65" fill="#10b981" fontSize="14" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
    <line x1="85" y1="54" x2="110" y2="54" stroke="#52525b" strokeWidth="1.5" />
    <line x1="85" y1="64" x2="105" y2="64" stroke="#52525b" strokeWidth="1.5" />

    {/* Cyber Cylinder database representation */}
    <g transform="translate(285, 35)">
      <ellipse cx="25" cy="12" rx="18" ry="7" fill="url(#glowGrad4)" stroke="#06b6d4" strokeWidth="1.2" />
      <path d="M 7,12 L 7,25 A 18,7 0 0,0 43,25 L 43,12" fill="none" stroke="#06b6d4" strokeWidth="1.2" />
      <ellipse cx="25" cy="25" rx="18" ry="7" fill="url(#glowGrad4)" stroke="#06b6d4" strokeWidth="1.2" strokeDasharray="3,3" />
      <path d="M 7,25 L 7,38 A 18,7 0 0,0 43,38 L 43,25" fill="none" stroke="#06b6d4" strokeWidth="1.2" />
      <ellipse cx="25" cy="38" rx="18" ry="7" fill="#06b6d4" fillOpacity="0.15" stroke="#06b6d4" strokeWidth="1.2" />
    </g>

    {/* Connectivity pipelines */}
    <path d="M 120,60 H 165" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
    <path d="M 255,110 L 300,80" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" />
  </svg>
);

/* ──────────────────────────────────────────────────────────
   Process Card Steps Configuration (Matching screenshot layout)
   ────────────────────────────────────────────────────────── */

const STEPS = [
  {
    number: '01.Understand',
    phase: 'Understand',
    paragraphs: [
      "We start by understanding what you're trying to achieve, not just what you want to create.",
      "This includes your brand, audience, and where things currently stand. Most of the clarity comes from here."
    ],
    Illustration: UnderstandIllustration,
    themeColor: '#3b82f6'
  },
  {
    number: '02.Strategy',
    phase: 'Strategy',
    paragraphs: [
      "We define the digital roadmap, target positioning, and clear visual architecture.",
      "Our goal is to structure a solid foundation that translates business objectives into functional design directions."
    ],
    Illustration: StrategyIllustration,
    themeColor: '#a855f7'
  },
  {
    number: '03.Design',
    phase: 'Design',
    paragraphs: [
      "We craft the user interface, interaction designs, and interactive high-fidelity prototypes.",
      "Through rapid iteration and feedback loops, we build a seamless, polished, and delightful user journey."
    ],
    Illustration: DesignIllustration,
    themeColor: '#f59e0b'
  },
  {
    number: '04.Build',
    phase: 'Build',
    paragraphs: [
      "We translate designs into high-performance, clean, and responsive codebases.",
      "Leveraging modern frameworks, we ensure absolute precision, fast load speeds, and seamless API integrations."
    ],
    Illustration: BuildIllustration,
    themeColor: '#10b981'
  }
];

const HowWeWork = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const cardsRef = useRef([]);
  const textItemsRef = useRef([]);
  const dotsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handler to scroll to a specific step on click
  const handleStepClick = (index) => {
    if (!containerRef.current) return;
    const scrollTriggerInstance = ScrollTrigger.getById('howWeWorkTrigger');
    if (!scrollTriggerInstance) return;

    const start = scrollTriggerInstance.start;
    const end = scrollTriggerInstance.end;
    const totalScroll = end - start;

    // Distribute spacing evenly for cards
    const progress = index / (STEPS.length - 1);
    const targetScrollPos = start + progress * totalScroll;

    window.scrollTo({
      top: targetScrollPos + 5, // add a small offset to ensure trigger registers
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const cards = cardsRef.current;
    const textItems = textItemsRef.current;
    const dots = dotsRef.current;
    const container = containerRef.current;
    const stickyElement = stickyRef.current;

    if (!container || !stickyElement || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // 1. Initial State Setup
      gsap.set(cards[0], { opacity: 1, scale: 1, y: 0, x: 0, rotation: 0, zIndex: 40 });
      gsap.set(cards[1], { opacity: 1, scale: 0.9, y: 800, x: 40, rotation: 10, zIndex: 50 });
      gsap.set(cards[2], { opacity: 1, scale: 0.9, y: 800, x: -40, rotation: -10, zIndex: 60 });
      gsap.set(cards[3], { opacity: 1, scale: 0.9, y: 800, x: 40, rotation: 10, zIndex: 70 });

      // Timeline indicator initial states
      gsap.set(textItems[0], { opacity: 1 });
      gsap.set(dots[0], { opacity: 1, scale: 1.2, backgroundColor: STEPS[0].themeColor });
      for (let i = 1; i < textItems.length; i++) {
        gsap.set(textItems[i], { opacity: 0.35 });
        gsap.set(dots[i], { opacity: 0.3, scale: 1, backgroundColor: '#d4d4d8' });
      }

      // 2. Timeline Definition with ScrollTrigger Pinned container
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'howWeWorkTrigger',
          trigger: container,
          start: 'top top',
          end: () => `+=${window.innerHeight * 3.2}`, // length of pinning scroll
          pin: stickyElement,
          pinSpacing: true,
          scrub: 1.2, // lag coefficient for smooth premium scrolling feel
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Keep activeIndex state in sync for mobile visual progress bar
            const progress = self.progress;
            const computedIndex = Math.min(
              STEPS.length - 1,
              Math.floor(progress * STEPS.length)
            );
            setActiveIndex(computedIndex);
          }
        }
      });

      // 3. Chain Transitions (Dynamic Stacking with rotation and translation)
      // Step 0 -> Step 1: Card 1 slides UP and rotates into place. Card 0 scales down, moves up and rotates back.
      tl.to(cards[0], { scale: 0.95, y: -30, rotation: -4, ease: 'power2.inOut', duration: 1 })
        .to(cards[1], { y: 0, x: 0, rotation: 0, scale: 1, ease: 'power2.inOut', duration: 1 }, '<')
        .to(textItems[0], { opacity: 0.35, ease: 'power2.inOut', duration: 0.5 }, '<')
        .to(dots[0], { opacity: 0.3, scale: 1, backgroundColor: '#d4d4d8', ease: 'power2.inOut', duration: 0.5 }, '<')
        .to(textItems[1], { opacity: 1, ease: 'power2.inOut', duration: 0.5 }, '<+=0.5')
        .to(dots[1], { opacity: 1, scale: 1.2, backgroundColor: STEPS[1].themeColor, ease: 'power2.inOut', duration: 0.5 }, '<')
        .to({}, { duration: 0.8 }); // Hold screen briefly

      // Step 1 -> Step 2: Card 2 slides UP. Card 1 & 0 get pushed back and rotate.
      tl.to(cards[0], { scale: 0.90, y: -60, rotation: -8, ease: 'power2.inOut', duration: 1 })
        .to(cards[1], { scale: 0.95, y: -30, rotation: 3, ease: 'power2.inOut', duration: 1 }, '<')
        .to(cards[2], { y: 0, x: 0, rotation: 0, scale: 1, ease: 'power2.inOut', duration: 1 }, '<')
        .to(textItems[1], { opacity: 0.35, ease: 'power2.inOut', duration: 0.5 }, '<')
        .to(dots[1], { opacity: 0.3, scale: 1, backgroundColor: '#d4d4d8', ease: 'power2.inOut', duration: 0.5 }, '<')
        .to(textItems[2], { opacity: 1, ease: 'power2.inOut', duration: 0.5 }, '<+=0.5')
        .to(dots[2], { opacity: 1, scale: 1.2, backgroundColor: STEPS[2].themeColor, ease: 'power2.inOut', duration: 0.5 }, '<')
        .to({}, { duration: 0.8 }); // Hold screen briefly

      // Step 2 -> Step 3: Card 3 slides UP. Cards 2, 1 & 0 get pushed back further and rotate.
      tl.to(cards[0], { scale: 0.85, y: -90, rotation: -12, ease: 'power2.inOut', duration: 1 })
        .to(cards[1], { scale: 0.90, y: -60, rotation: -1, ease: 'power2.inOut', duration: 1 }, '<')
        .to(cards[2], { scale: 0.95, y: -30, rotation: 5, ease: 'power2.inOut', duration: 1 }, '<')
        .to(cards[3], { y: 0, x: 0, rotation: 0, scale: 1, ease: 'power2.inOut', duration: 1 }, '<')
        .to(textItems[2], { opacity: 0.35, ease: 'power2.inOut', duration: 0.5 }, '<')
        .to(dots[2], { opacity: 0.3, scale: 1, backgroundColor: '#d4d4d8', ease: 'power2.inOut', duration: 0.5 }, '<')
        .to(textItems[3], { opacity: 1, ease: 'power2.inOut', duration: 0.5 }, '<+=0.5')
        .to(dots[3], { opacity: 1, scale: 1.2, backgroundColor: STEPS[3].themeColor, ease: 'power2.inOut', duration: 0.5 }, '<')
        .to({}, { duration: 0.8 }); // Hold screen briefly

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      data-theme="light"
      className="w-full relative bg-[#f9f8f6] py-1 md:py-2"
    >
      <div
        ref={stickyRef}
        className="w-full min-h-screen flex items-center justify-center pt-24 pb-16 px-6 sm:px-12 lg:px-20"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center font-sans">

          {/* Left Column — Heading and desktop interactive progress indicators */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center h-full">
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-neutral-400 uppercase">
              Our Process
            </span>
            <h2 className="text-4xl xl:text-5xl font-medium tracking-tight text-neutral-900 mt-2">
              How We Work
            </h2>

            {/* Desktop Timeline list */}
            <div className="hidden lg:flex flex-col gap-6 mt-12 w-fit">
              {STEPS.map((step, idx) => (
                <div
                  key={idx}
                  onClick={() => handleStepClick(idx)}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div
                    ref={(el) => (dotsRef.current[idx] = el)}
                    className="w-2.5 h-2.5 rounded-full bg-neutral-300 transition-all duration-300 ease-out"
                  />
                  <div
                    ref={(el) => (textItemsRef.current[idx] = el)}
                    className="text-sm md:text-base font-bold text-neutral-800 tracking-wide transition-all duration-300 ease-out group-hover:translate-x-1"
                  >
                    {step.number}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Visual Progress Bar */}
            <div className="lg:hidden flex items-center gap-2 mt-6 max-w-sm">
              {STEPS.map((step, idx) => (
                <div
                  key={idx}
                  onClick={() => handleStepClick(idx)}
                  className="flex-1 h-1 bg-neutral-200 rounded-full overflow-hidden cursor-pointer"
                >
                  <div
                    className="h-full bg-black transition-all duration-300"
                    style={{
                      width: activeIndex === idx ? '100%' : activeIndex > idx ? '100%' : '0%',
                      opacity: activeIndex === idx ? 1 : activeIndex > idx ? 0.4 : 0
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Mobile Current Phase Label */}
            <div className="lg:hidden mt-2">
              <span className="text-xs font-bold text-black uppercase tracking-wide">
                Phase {STEPS[activeIndex].number}
              </span>
            </div>
          </div>

          {/* Right Column — Cards Stack (overflow-hidden removed to allow fanning out) */}
          <div className="col-span-1 lg:col-span-7 relative flex items-center justify-center h-[400px] md:h-[480px] lg:h-[500px] w-full">
            <div className="relative w-full max-w-[460px] h-[360px] md:h-[440px] flex items-center justify-center">
              {STEPS.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="absolute w-full h-full bg-white rounded-[28px] md:rounded-[32px] p-6 md:p-8 shadow-[0_10px_25px_0px_rgba(0,0,0,0.3)] flex flex-col gap-4"
                >
                  {/* Card Header (01.Understand) */}
                  <h3 className="text-lg md:text-xl font-normal text-black tracking-tight">
                    {step.number}
                  </h3>

                  {/* Card Illustration Container (16:9 ratio) */}
                  <div className="w-full aspect-[16/9] rounded-xl md:rounded-2xl overflow-hidden bg-black border border-zinc-800/60 flex items-center justify-center p-1.5 shadow-inner">
                    <step.Illustration />
                  </div>

                  {/* Card Main Info / Description Paragraphs */}
                  <div className="flex flex-col gap-2.5 md:gap-3.5 my-auto">
                    {step.paragraphs.map((para, paraIdx) => (
                      <p key={paraIdx} className="text-xs md:text-sm lg:text-[14px] text-black leading-relaxed font-medium">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
