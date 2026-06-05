import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useScrollAnimations from '../hooks/useScrollAnimations';

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    id: 1,
    title: <>BRAND<br className="block sm:hidden" /> VISUAL</>,
    number: '01',
    label: 'Approach',
    description: (
      <>
        <p>We create images that define how your brand is seen.</p>
        <p>From <strong className='font-semibold'>Commercial Photography</strong> to creative direction, we focus on making your brand feel clear, consistent, and instantly recognizable ,not just visually appealing.</p>
        <p>Every detail matters here, from lighting and composition to how your product or space is presented. The goal is simple: visuals that feel right and stay consistent wherever your brand shows up.</p>
      </>
    ),
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    video: 'https://www.pexels.com/download/video/33191775/',
    color: 'bg-white',
  },
  {
    id: 2,
    title: <>MOTION<br className="block sm:hidden" /> &amp; VIDEO</>,
    number: '02',
    label: 'Approach',
    description: (
      <>
        <p>We approach video through structure and storytelling.</p>
        <p>Each project begins with defining the message and how it should be experienced. We shape pacing, sequencing, and visual flow before moving into production.</p>
        <p>The result is content that feels natural to watch, communicates clearly, and works across different platforms.</p>
      </>
    ),
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    video: 'https://www.pexels.com/download/video/30728857/',
    color: 'bg-gray-50',
  },
  {
    id: 3,
    title: <>CONTENT<br className="block sm:hidden" /> &amp; DIGITAL</>,
    number: '03',
    label: 'Approach',
    description: (
      <>
        <p>Content without direction usually ends up going nowhere.</p>
        <p>We look at how your brand shows up across platforms what you're saying, how often, and whether it actually connects. From there, we shape a clearer direction for both content and campaigns.</p>
        <p>This includes planning what to create, how it's distributed, and how it performs over time. Not everything needs to go viral , it just needs to reach the right people consistently.</p>
      </>
    ),
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    video: 'https://www.pexels.com/download/video/37116344/',
    color: 'bg-white',
  },
  {
    id: 4,
    title: <>IDEATION<br className="block sm:hidden" /> SCRIPTING</>,
    number: '04',
    label: 'Approach',
    description: (
      <>
        <p>We approach ideation by starting with clarity , what needs to be said and why it matters.</p>
        <p>From there, we develop concepts and scripts that give structure to your content, shaping both message and direction before execution.</p>
        <p>The result is work that feels considered, purposeful, and easier to understand.</p>
      </>
    ),
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    video: 'https://www.pexels.com/download/video/4872872/',
    color: 'bg-gray-50',
  },
  {
    id: 5,
    title: <>WEBSITE<br className="block sm:hidden" /> DEVELOPMENT</>,
    number: '05',
    label: 'Approach',
    description: (
      <>
        <p>We build digital experiences that feel intuitive and engaging.</p>
        <p>From websites to interactive platforms, we focus on user journey, aesthetic consistency, and performance.</p>
        <p>The goal is to ensure your digital presence is as strong and impactful as your brand itself.</p>
      </>
    ),
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    video: 'https://www.pexels.com/download/video/11274330/',
    color: 'bg-white',
  },
  {
    id: 6,
    title: 'ADVERTISING',
    number: '06',
    label: 'Approach',
    description: (
      <>
        <p>A strong brand needs a clear foundation.</p>
        <p>We help define your core identity, positioning, and voice. Our approach ensures every piece of content aligns with a larger vision.</p>
        <p>The result is a cohesive brand presence that builds trust and recognition over time.</p>
      </>
    ),
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    video: 'https://www.pexels.com/download/video/5086609/',
    color: 'bg-gray-50',
  }
];

const VideoWithFallback = ({ src, poster, alt, className }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-neutral-900 ${className}`}>
      {/* Fallback/Placeholder Image */}
      <img
        src={poster}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          opacity: hasError || !isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
          zIndex: 1 
        }}
      />

      {/* Video Element */}
      {!hasError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          onError={() => setHasError(true)}
          onCanPlay={() => setIsLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: 2 
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

const ScrollStack = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useScrollAnimations(containerRef);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = cardsRef.current;
      if (!cards.length) return;

      // Ensure ScrollTrigger understands the native flow before animating
      ScrollTrigger.refresh();

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return; // The last card doesn't need to scale down

        // Animate each card to scale down and fade out smoothly as we scroll past its sticky point
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top top+=100", // When this card hits its sticky position
            endTrigger: containerRef.current,
            end: "bottom bottom", // Continues scaling until the entire section is scrolled past
            scrub: true,
          },
          scale: 0.85,
          ease: "none"
        });

      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-white pt-10 md:pt-20 pb-10 md:pb-16 relative z-10">
      <div className="w-full max-w-full mx-auto px-6 md:px-12 lg:px-20 mb-16 text-center md:text-left z-10 relative">
        <h2 className="text-4xl font-normal text-black mb-4" data-animate="fade-up">What We Do</h2>
      </div>

      <div className="w-full flex flex-col gap-[10vh] md:gap-[50vh] relative">
        {cardsData.map((card, index) => {
          const isDark = index % 2 !== 0;
          return (
            <div
              key={card.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`
                sticky top-[90px] origin-top
                w-full flex flex-col pt-10 md:pt-12 pb-8 md:pb-12 shadow-sm border border-gray-100
                min-h-[500px] rounded-lg
                ${isDark ? 'bg-zinc-900' : 'bg-white'}
              `}
              style={{ zIndex: index + 1 }}
              data-theme={isDark ? 'dark' : 'light'}
            >
              {/* Top Section */}
              <div className="flex justify-between items-center md:items-start w-full px-6 md:px-12 lg:px-20 gap-2 md:gap-4 relative">
                <h3 className={`w-1/1 text-[28px] sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.1] md:leading-none z-10 ${isDark ? 'text-white' : 'text-black'}`}>
                  {card.title}
                </h3>
                <span className={`text-6xl sm:text-7xl md:text-[7rem] font-black leading-none mt-0 md:-mt-8 lg:-mt-18 opacity-40 md:opacity-100 pointer-events-none z-0 ${isDark ? 'text-zinc-700 md:text-zinc-800' : 'text-gray-200 md:text-gray-100'}`}>
                  {card.number}
                </span>
              </div>

              {/* Divider */}
              <div className={`w-full h-[1px] my-6 ${isDark ? 'bg-zinc-800' : 'bg-black'}`}></div>

              {/* Bottom Section */}
              <div className="flex flex-col lg:flex-row gap-8 px-6 md:px-12 lg:px-20 items-start justify-between w-full">
                {/* Approach label */}
                <div className="w-full lg:w-1/5">
                  <span className={`text-lg md:text-xl font-medium ${isDark ? 'text-white' : 'text-black'}`}>{card.label}</span>
                </div>

                {/* Description text */}
                <div className={`w-full lg:w-2/5 flex flex-col gap-6 text-sm md:text-base font-light leading-relaxed pr-0 md:pr-8 ${isDark ? 'text-gray-300' : 'text-black'}`}>
                  <div className="flex flex-col gap-4">
                    {card.description}
                  </div>
                  <button className={`self-start px-8 py-3 rounded-full font-medium transition-colors mt-4 ${isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                    Discuss Project
                  </button>
                </div>

                {/* Right Image / Video */}
                <div 
                  className="w-full lg:w-2/5 h-64 md:h-[400px]"
                  data-animate="zoom-in"
                  data-animate-duration="0.9"
                >
                  <VideoWithFallback
                    src={card.video}
                    poster={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ScrollStack;
