import React, { useRef, useEffect, useImperativeHandle, forwardRef, useState } from 'react';
import ContactModal from './ContactModal';
import gsap from 'gsap';

const Hero = forwardRef(({ skipAnimation = false }, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const bgImageRef = useRef(null);
  const titleRef = useRef(null);
  const buttonsRef = useRef(null);
  const descriptionRef = useRef(null);

  // When navigating back to "/" after the loader has already finished,
  // immediately show all hero content (no cinematic reveal needed).
  useEffect(() => {
    if (skipAnimation) {
      [bgImageRef, titleRef, buttonsRef, descriptionRef].forEach((r) => {
        if (r.current) {
          gsap.set(r.current, { opacity: 1, y: 0, scale: 1 });
        }
      });
    }
  }, [skipAnimation]);

  useImperativeHandle(ref, () => ({
    reveal() {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Phase 1: Background image — scale down & fade in
      tl.to(bgImageRef.current, {
        opacity: 0.8,
        scale: 1,
        duration: 1.6,
        ease: 'power2.out',
      });

      // Phase 2: Title text — slide up & fade in
      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
        },
        '-=0.8'
      );

      // Phase 3: Buttons — slide up & fade in
      tl.to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      );

      // Phase 4: Description — slide up & fade in
      tl.to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      );
    },
  }));

  return (
    <>
      <section
        ref={sectionRef}
        id="hero"
        className="relative min-h-screen w-full overflow-hidden bg-white flex flex-col items-center justify-center pt-28 pb-10 lg:pt-32 lg:pb-0"
        data-theme="light"
      >
        {/* Background image — starts scaled up & invisible */}
        <img
          ref={bgImageRef}
          src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          style={{ opacity: 0, transform: 'scale(1.15)' }}
        />

        {/* <HeroBackground /> */}

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-full mx-auto px-6 md:px-12 lg:px-20 w-full flex flex-col justify-center min-h-[calc(100vh-140px)]">

          {/* Title — starts translated down & invisible */}
          <div
            ref={titleRef}
            className="w-full mb-10 lg:mb-20"
            style={{ opacity: 0, transform: 'translateY(60px)' }}
          >
            <h1 className="text-[clamp(2.5rem,5.5vw,8rem)] text-center md:text-left font-poppins font-bold text-black leading-[1.08] tracking-tight">
              LET'S MAKE <br className="block sm:hidden" /> IDEAS<br /> HAPPEN<br className="block sm:hidden" /> WITH <br className="block sm:hidden" /> <span className="text-red-600">DIWORA</span>
            </h1>
          </div>

          {/* Bottom row: Buttons on left, Description on right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start justify-between w-full">

            {/* Buttons — starts translated down & invisible */}
            <div
              ref={buttonsRef}
              className="lg:col-span-8 flex flex-wrap gap-3 items-center"
              style={{ opacity: 0, transform: 'translateY(40px)' }}
            >
              {/* <!-- From Uiverse.io by nathAd17 --> */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex justify-center gap-1 sm:gap-2 items-center text-sm sm:text-md 2xl:text-[24px] bg-red-600 hover:bg-black text-white backdrop-blur-md lg:font-normal isolation-auto relative z-10 px-3 py-2 sm:px-4 sm:py-2 2xl:px-5 2xl:py-3.5 overflow-hidden rounded-full group transition-all duration-500"
              >
                Inquire Now

                <svg
                  className="w-6 h-6 md:w-8 md:h-8 2xl:w-9 2xl:h-9 justify-end rounded-full bg-black text-white group-hover:bg-white group-hover:text-black ease-linear duration-300 p-1.5 md:p-2 rotate-45 group-hover:rotate-90"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              <button className="relative flex items-center gap-1 px-6 py-2.5 sm:px-8 sm:py-3.5 2xl:text-[24px] 2xl:px-10 2xl:py-4 rounded-full font-normal text-sm sm:text-md 2xl:text-2xl text-black bg-white overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white hover:rounded-full hover:shadow-[0_0_0_12px_transparent] active:scale-95 active:shadow-[0_0_0_4px_black] group">

                {/* Left Arrow */}
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-4 sm:w-6 fill-black left-[-25%] z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-3 sm:group-hover:left-4 group-hover:fill-white"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>

                {/* Text */}
                <span className="relative z-10 -translate-x-2 sm:-translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 sm:group-hover:translate-x-3">
                  View Works
                </span>

                {/* Circle Background */}
                <span className="absolute top-1/2 left-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black opacity-0 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[180px] sm:group-hover:w-[220px] 2xl:group-hover:w-[250px] group-hover:h-[180px] sm:group-hover:h-[220px] group-hover:opacity-100"></span>

                {/* Right Arrow */}
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-4 sm:w-6 fill-black right-3 sm:right-4 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-white"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
              </button>
            </div>

            {/* Description — starts translated down & invisible */}
            <div
              ref={descriptionRef}
              className="lg:col-span-4 flex flex-col gap-2 max-w-xl lg:ml-auto"
              style={{ opacity: 0, transform: 'translateY(40px)' }}
            >
              <p className="text-[clamp(14px,1.1vw,20px)] text-black font-normal leading-relaxed ">
                We craft ideas that connect, designs that inspire, and campaigns that perform.
              </p>
              <p className="text-[clamp(14px,1.1vw,20px)] text-black font-normal leading-relaxed ">
                From concept to execution, we bring your brand's story to life with impactful visuals and meaningful communication
              </p>
            </div>

          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
});

Hero.displayName = 'Hero';

export default Hero;
