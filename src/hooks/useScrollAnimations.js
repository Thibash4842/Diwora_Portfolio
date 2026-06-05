import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────────────
   Animation Presets
   Each preset defines the "from" state (before reveal).
   The "to" state is always: opacity 1, transform none.
   Only opacity + transform are touched — zero layout impact.
   ───────────────────────────────────────────────────── */
const PRESETS = {
  'fade-up': { opacity: 0, y: 60 },
  'fade-down': { opacity: 0, y: -60 },
  'fade-left': { opacity: 0, x: -80 },
  'fade-right': { opacity: 0, x: 80 },
  'zoom-in': { opacity: 0, scale: 0.85 },
  'zoom-out': { opacity: 0, scale: 1.15 },
  'slide-up': { opacity: 0, y: 100 },
  'slide-down': { opacity: 0, y: -100 },
  'flip-up': { opacity: 0, rotationX: -15, y: 40, transformPerspective: 1000 },
  'flip-left': { opacity: 0, rotationY: 15, x: -40, transformPerspective: 1000 },
};

const TO_STATE = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  rotationX: 0,
  rotationY: 0,
};

/**
 * useScrollAnimations
 *
 * Scans the given container ref for elements with [data-animate] and
 * wires up GSAP ScrollTrigger-based reveal animations.
 *
 * Supported attributes:
 *   data-animate="fade-up"          — animation type (required)
 *   data-animate-duration="0.9"     — seconds  (default 0.9)
 *   data-animate-delay="0.1"        — seconds  (default 0)
 *   data-animate-stagger="0.15"     — for parent groups (default 0)
 *   data-animate-start="top 85%"    — ScrollTrigger start (default "top 85%")
 *   data-animate-once="true"        — play once vs reverse on leave (default true)
 *
 * Usage:
 *   const ref = useRef(null);
 *   useScrollAnimations(ref);
 *   <div ref={ref}> <h2 data-animate="fade-up">Hello</h2> </div>
 */
export default function useScrollAnimations(containerRef, deps = []) {
  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    const elements = container.querySelectorAll('[data-animate]');
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        const preset = el.getAttribute('data-animate');
        const fromVars = PRESETS[preset];
        if (!fromVars) return; // unknown preset — skip silently

        const duration = parseFloat(el.getAttribute('data-animate-duration')) || 0.9;
        const delay = parseFloat(el.getAttribute('data-animate-delay')) || 0;
        const start = el.getAttribute('data-animate-start') || 'top 85%';
        const once = el.getAttribute('data-animate-once') !== 'false'; // default true

        // Check for stagger children
        const staggerVal = parseFloat(el.getAttribute('data-animate-stagger'));
        const hasStagger = staggerVal > 0;

        if (hasStagger) {
          // Animate direct children with stagger
          const children = el.children;
          if (children.length) {
            gsap.fromTo(
              children,
              { ...fromVars },
              {
                ...TO_STATE,
                duration,
                delay,
                stagger: staggerVal,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: el,
                  start,
                  toggleActions: once
                    ? 'play none none none'
                    : 'play none none reverse',
                },
              }
            );
          }
        } else {
          gsap.fromTo(
            el,
            { ...fromVars },
            {
              ...TO_STATE,
              duration,
              delay,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start,
                toggleActions: once
                  ? 'play none none none'
                  : 'play none none reverse',
              },
            }
          );
        }
      });
    }, container);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, ...deps]);
}
