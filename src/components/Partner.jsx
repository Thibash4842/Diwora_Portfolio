import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LogoMarquee = () => {
  const marqueeRef = useRef(null);

  const logos = [
    "https://via.placeholder.com/200x100?text=Brand1",
    "https://via.placeholder.com/200x100?text=Brand2",
    "https://via.placeholder.com/200x100?text=Brand3",
    "https://via.placeholder.com/200x100?text=Brand4",
    "https://via.placeholder.com/200x100?text=Brand5",
  ];

  // duplicate for seamless loop
  const extendedLogos = [...logos, ...logos];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        ease: "none",
        duration: 20, // lower = faster
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-white py-16 overflow-hidden" ref={marqueeRef}>
      <h2 className="text-center text-gray-600 text-sm font-semibold uppercase mb-10">
        Trusted by leading brands
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex marquee-track gap-12">
          {extendedLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center min-w-[200px]">
              <img
                src={logo}
                alt="logo"
                className="h-16 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;