import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-white flex flex-col items-center justify-center pt-28 pb-16 lg:pt-16 lg:pb-8"
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
          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-black text-black leading-[1.08] tracking-tight uppercase max-w-5xl">
            LET’S MAKE IDEAS<br className="hidden sm:inline" /> HAPPEN WITH DIWORA
          </h1>
        </div>

        {/* Bottom row: Buttons on left, Description on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end justify-between w-full">

          {/* Buttons on left */}
          <div className="lg:col-span-7 flex flex-wrap gap-4 items-center">
            <button className="px-6 py-2.5 bg-neutral-900 hover:bg-black text-white font-semibold rounded-lg transition-colors active:scale-98 text-[15px] shadow-sm">
              Inquire Now
            </button>
            <button className="px-6 py-2.5 border border-neutral-300 hover:bg-neutral-50 text-neutral-800 bg-white font-semibold rounded-lg transition-colors active:scale-98 text-[15px] shadow-sm">
              View Works
            </button>
          </div>

          {/* Description on right */}
          <div className="lg:col-span-5 flex flex-col gap-2 max-w-xl lg:ml-auto">
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