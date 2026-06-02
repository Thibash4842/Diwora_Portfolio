import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    id: 1,
    title: 'BRAND VISUAL',
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
    color: 'bg-white',
  },
  {
    id: 2,
    title: 'MOTION & VIDEO',
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
    color: 'bg-gray-50',
  },
  {
    id: 3,
    title: 'CONTENT & DIGITAL',
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
    color: 'bg-white',
  },
  {
    id: 4,
    title: 'IDEATION & SCRIPTING',
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
    color: 'bg-gray-50',
  }
];

const ScrollStack = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

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
    <section ref={containerRef} className="w-full bg-white pt-10 md:pt-16 pb-10 md:pb-16 relative">
      <div className="w-full max-w-full mx-auto px-6 md:px-12 lg:px-20 mb-16 text-center md:text-left z-10 relative">
        <h2 className="text-4xl font-normal text-black mb-4">What We Do</h2>
      </div>

      <div className="w-full flex flex-col gap-[10vh] md:gap-[50vh] relative">
        {cardsData.map((card, index) => {
          const isDark = index % 2 !== 0;
          return (
            <div
              key={card.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`
                sticky top-[100px] origin-top
                w-full flex flex-col pt-12 md:pt-16 pb-8 md:pb-12 shadow-sm border border-gray-100
                min-h-[500px] rounded-lg
                ${isDark ? 'bg-zinc-900' : 'bg-white'}
              `}
              style={{ zIndex: index + 1 }}
              data-theme={isDark ? 'dark' : 'light'}
            >
              {/* Top Section */}
              <div className="flex justify-between items-start w-full px-6 md:px-12 lg:px-20 gap-2 md:gap-4 relative">
                <h3 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter w-full sm:w-[75%] md:w-2/3 leading-[1.1] md:leading-none z-10 ${isDark ? 'text-white' : 'text-black'}`}>
                  {card.title}
                </h3>
                <span className={`absolute right-6 md:right-12 top-0 md:relative md:right-auto md:top-auto text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-black leading-none mt-0 md:-mt-8 lg:-mt-12 opacity-40 md:opacity-100 pointer-events-none z-0 ${isDark ? 'text-zinc-700 md:text-zinc-800' : 'text-gray-200 md:text-gray-100'}`}>
                  {card.number}
                </span>
              </div>

              {/* Divider */}
              <div className={`w-full h-[1px] my-8 md:my-12 ${isDark ? 'bg-zinc-800' : 'bg-black'}`}></div>

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

                {/* Right Image */}
                <div className="w-full lg:w-2/5 h-64 md:h-[400px]">
                  <img
                    src={card.image}
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
