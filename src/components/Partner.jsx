import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import partner1 from "../assets/partners/partner01.png";
import partner2 from "../assets/partners/partner02.png";
import partner3 from "../assets/partners/partner03.png";
import partner4 from "../assets/partners/partner04.png";
import partner5 from "../assets/partners/partner05.png";

const LogoMarquee = () => {
  const marqueeRef = useRef(null);

  const logos = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
  ];

  // duplicate for seamless loop
  const extendedLogos = [...logos, ...logos];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        ease: "linear",
        duration: 20, // lower = faster
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-white py-14 overflow-hidden" ref={marqueeRef}>
      <div className="relative w-full overflow-hidden">
        <div className="flex marquee-track gap-4 md:gap-10">
          {extendedLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center min-w-[100px] md:min-w-[200px]">
              <img
                src={logo}
                alt="logo"
                className="h-8 md:h-10 object-contain hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;