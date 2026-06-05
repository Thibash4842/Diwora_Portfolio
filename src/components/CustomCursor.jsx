import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;

    // Center initially or keep hidden until first mouse move
    gsap.set(dot, { xPercent: -50, yPercent: -50, opacity: 0 });
    gsap.set(ring, { xPercent: -50, yPercent: -50, opacity: 0 });

    const xDotSetter = gsap.quickSetter(dot, "x", "px");
    const yDotSetter = gsap.quickSetter(dot, "y", "px");
    
    // Smooth trailing effect for the ring using quickTo
    const xRingTo = gsap.quickTo(ring, "x", { duration: 0.4, ease: "power3.out" });
    const yRingTo = gsap.quickTo(ring, "y", { duration: 0.4, ease: "power3.out" });

    let isVisible = false;

    const onMouseMove = (e) => {
      if (!isVisible) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
        isVisible = true;
      }
      
      const { clientX, clientY } = e;
      
      xDotSetter(clientX);
      yDotSetter(clientY);
      xRingTo(clientX);
      yRingTo(clientY);
    };

    const onMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
      isVisible = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  // Hide completely for touch devices (server-side rendering safe fallback)
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-red-600 pointer-events-none z-[9999]"
        style={{ transform: 'translate(-50%, -50%)', willChange: 'transform, opacity' }}
      />
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-red-600 rounded-full pointer-events-none z-[10000]"
        style={{ transform: 'translate(-50%, -50%)', willChange: 'transform, opacity' }}
      />
    </>
  );
};

export default CustomCursor;
