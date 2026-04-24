const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-white flex flex-col items-center justify-center pt-24 pb-12 lg:pt-0 lg:pb-0"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
              LET'S MAKE IDEAS HAPPEN WITH DIWORA
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative overflow-hidden flex items-center justify-center px-8 py-3 bg-black text-white font-semibold rounded-full hover:px-10 transition-all duration-300 ease-in-out active:scale-95 w-fit">
                <span className="absolute left-5 -translate-x-[150%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                  Inquire Now
                </span>
              </button>
              <button className="group relative overflow-hidden flex items-center justify-center px-8 py-3 border-2 border-black text-black bg-transparent font-semibold rounded-full hover:px-10 hover:bg-black/5 transition-all duration-300 ease-in-out active:scale-95 w-fit">
                <span className="absolute left-5 -translate-x-[150%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                  View Works
                </span>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-4">
            <p className="text-lg sm:text-xl text-black leading-relaxed font-semibold">
              We craft ideas that connect, designs that inspire, and campaigns that perform.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              From concept to execution, we bring your brand's story to life with impactful visuals and meaningful communication
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-12 lg:mt-0 lg:absolute lg:bottom-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-600 text-sm font-medium">Scroll to explore</span>
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;