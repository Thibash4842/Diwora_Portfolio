import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Loader.css';

const Loader = ({ onComplete, onTransitionStart }) => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // Make everything visible initially before animating
    gsap.set('.willem-visibility-hidden', { visibility: 'visible' });

    // 1. Up‑reveal each letter of the start and end blocks with smooth easing
    tl.fromTo('.willem__h1-start .willem__letter', { y: '100%' }, { y: '0%', duration: 0.85, ease: 'power3.inOut', stagger: 0.11 })
      .fromTo('.willem__h1-end .willem__letter', { y: '100%' }, { y: '0%', duration: 0.85, ease: 'power3.inOut', stagger: 0.11 }, '-=0.55');
    // Removed slide animation – per‑letter up‑reveal now handles the title

    // 2. Image Container Growth (scales from 0 to full width with smooth ease)
    tl.fromTo('.willem__growing-image',
      { width: '0%', height: '100%' },
      { width: '100%', height: '100%', duration: 1.6, ease: 'expo.inOut' }
    );
    tl.to('.willem-loader__box', {
      width: '1em',
      duration: 1.6,
      ease: 'expo.inOut'
    }, '<');

    // 3. Image Slideshow (slower pace)
    tl.to('.willem__cover-image-extra', {
      opacity: 0,
      duration: 0.02,
      stagger: 0.22,
      ease: 'none'
    });

    // 4. Final Image Expansion (epic cinematic scale-up)
    tl.to('.willem__growing-image',
      { height: '100dvh', width: '100vw', duration: 2.7, ease: 'expo.inOut' }
    );
    tl.to('.willem-loader__box',
      { width: '100vw', duration: 2.7, ease: 'expo.inOut' },
      '<'
    );
    // Reset the h1 container y position so the expanded image is centered
    tl.to('.willem__h1', { y: '0vh', duration: 2.7, ease: 'expo.inOut' }, '<');

    // Trigger Hero Reveal slightly after expansion starts
    tl.add(() => {
      if (onTransitionStart) onTransitionStart();
    }, '<0.7');

    // Fade out entire loader smoothly
    tl.to(container.current, {
      opacity: 0,
      duration: 2.0,
      ease: 'power3.inOut',
    }, '-=0.7');

  }, { scope: container });

  return (
    <div className="loader-container prevent-overflow" ref={container}>
      <section className="willem-header">
        <div className="willem-loader">
          <div className="willem__h1">
            <div className="willem__h1-start willem-visibility-hidden" style={{ visibility: 'hidden', transform: 'translateX(0em)' }}>
              <span className="willem__letter">D</span>
              <span className="willem__letter">i</span>
              <span className="willem__letter">w</span>
            </div>

            <div className="willem-loader__box willem-visibility-hidden" style={{ visibility: 'hidden', width: '0em' }}>
              <div className="willem-loader__box-inner">
                <div className="willem__growing-image" style={{ width: '0%' }}>
                  <div className="willem__growing-image-wrap">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1676654935493-10ee2b4f2a25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="willem__cover-image-extra is--1"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1553267071-904e5614583b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="willem__cover-image-extra is--2"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1547142632-bca340742184?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBvcnRmb2xpbyUyMGxhcHRvcCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                      className="willem__cover-image-extra is--3"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="willem__cover-image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="willem__h1-end willem-visibility-hidden" style={{ visibility: 'hidden', transform: 'translateX(0em)' }}>
              <span className="willem__letter">o</span>
              <span className="willem__letter">r</span>
              <span className="willem__letter">a</span>
            </div>
          </div>
        </div>

        {/* Removed final header content (Diwora text) to allow seamless transition to Hero */}
      </section>
    </div>
  );
};

export default Loader;
