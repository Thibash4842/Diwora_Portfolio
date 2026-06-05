import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import useScrollAnimations from '../hooks/useScrollAnimations';
import partner1 from "../assets/partners/partner01.png";
import partner2 from "../assets/partners/partner02.png";
import partner3 from "../assets/partners/partner03.png";
import partner4 from "../assets/partners/partner04.png";
import partner5 from "../assets/partners/partner05.png";

const LogoMarquee = () => {
  const marqueeRef = useRef(null);
  useScrollAnimations(marqueeRef);

  const logos = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
  ];

  // duplicate multiple times for seamless loop on ultra-wide (4K) screens
  const extendedLogos = [...logos, ...logos];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        duration: 18,
        ease: "none",
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section data-theme="light" className="w-full h-[40vh] md:h-[90vh] bg-white overflow-hidden" ref={marqueeRef}>
      <div className="w-full h-full px-6 md:px-12 lg:px-20 flex items-center py-16 md:py-24">
        <div className="relative w-full overflow-hidden">
          <p className="text-base md:text-1xl font-normal text-black-600 tracking-wide pb-10 uppercase" data-animate="slide-up" data-animate-duration="0.8">TRUSTED BY LEADING BRANDS</p>
          <div className="flex marquee-track gap-4 md:gap-10 lg:gap-8 xl:gap-10 pr-4 md:pr-10 lg:pr-8 xl:pr-10">
            {extendedLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center min-w-[100px] md:min-w-[200px] lg:min-w-[160px] xl:min-w-[180px]">
                <img
                  src={logo}
                  alt="logo"
                  className="h-8 md:h-10 lg:h-12 object-contain hover:scale-105 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;