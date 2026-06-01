import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-white flex flex-col items-center justify-center pt-28 pb-10 lg:pt-32 lg:pb-0"
      data-theme="light"
    >
      {/* Subtle background gradients for premium depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col justify-center min-h-[calc(100vh-140px)]">

        {/* Title - Occupies full width, large, bold all-caps */}
        <div className="w-full mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-6xl lg:text-[80px] text-center md:text-left font-bold text-black leading-[1.08] tracking-tight uppercase max-w-5xl">
            LET’S MAKE <br className="block sm:hidden" /> IDEAS<br /> HAPPEN<br className="block sm:hidden" /> WITH <br className="block sm:hidden" /> DIWORA
          </h1>
        </div>

        {/* Bottom row: Buttons on left, Description on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start justify-between w-full">

          {/* Buttons on left */}
          <div className="lg:col-span-8 flex flex-wrap gap-4 items-center">
            {/* <!-- From Uiverse.io by nathAd17 --> */}
            <button
              type="submit"
              className="flex justify-center gap-2 items-center shadow-xl text-md bg-red-600 hover:bg-black text-white backdrop-blur-md lg:font-normal isolation-auto border border-gray-200 relative z-10 px-4 py-2 overflow-hidden rounded-full group transition-all duration-500"
            >
              Inquire Now

              <svg
                className="w-8 h-8 justify-end rounded-full bg-black text-white group-hover:bg-white group-hover:text-black ease-linear duration-300 p-2 rotate-45 group-hover:rotate-90"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <button className="relative flex items-center gap-1 px-8 py-2.5 rounded-full font-normal text-md text-black bg-white shadow-[0_0_0_2px_black] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white hover:rounded-full hover:shadow-[0_0_0_12px_transparent] active:scale-95 active:shadow-[0_0_0_4px_black] group">

              {/* Left Arrow */}
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-6 fill-black left-[-25%] z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>

              {/* Text */}
              <span className="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-3">
                View Works
              </span>

              {/* Circle Background */}
              <span className="absolute top-1/2 left-1/2 w-5 h-5 rounded-full bg-black opacity-0 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

              {/* Right Arrow */}
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-6 fill-black right-4 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
            </button>
          </div>

          {/* Description on right */}
          <div className="lg:col-span-4 flex flex-col gap-2 max-w-xl lg:ml-auto">
            <p className="text-[14px] md:text-[15px] text-neutral-500 font-normal leading-relaxed">
              We craft ideas that connect, designs that inspire, and campaigns that perform.
            </p>
            <p className="text-[14px] md:text-[15px] text-neutral-500 font-normal leading-relaxed">
              From concept to execution, we bring your brand's story to life with impactful visuals and meaningful communication
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;