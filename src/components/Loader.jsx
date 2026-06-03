import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // Make everything visible initially before animating, as we rely on inline styles for the initial state
    gsap.set('.willem-visibility-hidden', { visibility: 'visible' });

    // 0.00s
    tl.fromTo('.willem__letter',
      { y: '100%' },
      { y: '0%', duration: 1.25, stagger: 0.025, ease: 'expo.inOut' },
      0
    );

    // 1.25s - Open the small box in the center
    tl.fromTo('.willem-loader__box',
      { width: '0em' },
      { width: '1em', duration: 1.27, ease: 'expo.inOut' },
      1.25
    );
    tl.fromTo('.willem__growing-image',
      { width: '0%', height: '100%' },
      { width: '100%', height: '100%', duration: 1.27, ease: 'expo.inOut' },
      1.25
    );
    tl.fromTo('.willem__h1-start',
      { x: '0em' },
      { x: '-0.05em', duration: 1.27, ease: 'expo.inOut' },
      1.25
    );
    tl.fromTo('.willem__h1-end',
      { x: '0em' },
      { x: '0.05em', duration: 1.27, ease: 'expo.inOut' },
      1.25
    );

    // 2.45s - Slideshow in the center slit
    tl.fromTo('.willem__cover-image-extra',
      { opacity: 1 },
      { opacity: 0, duration: 0.05, stagger: 0.5, ease: 'none' },
      2.45
    );

    // 3.76s - Expand to full screen
    tl.fromTo('.willem__growing-image',
      { height: '100%', width: '100%' },
      { height: '100dvh', width: '100vw', duration: 2, ease: 'expo.inOut' },
      3.76
    );
    tl.fromTo('.willem-loader__box',
      { width: '1em' },
      { width: '110vw', duration: 2, ease: 'expo.inOut' },
      3.76
    );

    // 4.82s - reveal final header content as it expands
    tl.fromTo('.willem__letter-white',
      { y: '100%' },
      { y: '0%', duration: 1.25, stagger: 0.025, ease: 'expo.out' },
      4.82
    );
    tl.fromTo('.underline-link',
      { y: '100%' },
      { y: '0%', duration: 1.25, stagger: 0.1, ease: 'expo.out' },
      4.82
    );

    // Fade out entire loader at the end
    tl.to(container.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      delay: 0.5
    });

  }, { scope: container });

  return (
    <div className="loader-container" ref={container}>
      <section className="willem-header">
        <div className="willem-loader">
          <div className="willem__h1">
            <div className="willem__h1-start willem-visibility-hidden" style={{ visibility: 'hidden', transform: 'translateX(0em)' }}>
              <span className="willem__letter" style={{ transform: 'translateY(100%)' }}>D</span>
              <span className="willem__letter" style={{ transform: 'translateY(100%)' }}>i</span>
              <span className="willem__letter" style={{ transform: 'translateY(100%)' }}>w</span>
            </div>

            <div className="willem-loader__box willem-visibility-hidden" style={{ visibility: 'hidden', width: '0em' }}>
              <div className="willem-loader__box-inner">
                <div className="willem__growing-image" style={{ width: '0%' }}>
                  <div className="willem__growing-image-wrap">
                    <img
                      src="https://cdn.prod.website-files.com/69da551bc91ee431738ed14d/69da551cc91ee431738ed1b1_minimalist-architecture-2.avif"
                      alt=""
                      className="willem__cover-image-extra is--1"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/69da551bc91ee431738ed14d/69da551cc91ee431738ed1b2_minimalist-architecture-4.avif"
                      alt=""
                      className="willem__cover-image-extra is--2"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/69da551bc91ee431738ed14d/69da551cc91ee431738ed1b0_minimalist-architecture-3.avif"
                      alt=""
                      className="willem__cover-image-extra is--3"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/69da551bc91ee431738ed14d/69da551cc91ee431738ed1af_minimalist-architecture-1.avif"
                      alt=""
                      className="willem__cover-image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="willem__h1-end willem-visibility-hidden" style={{ visibility: 'hidden', transform: 'translateX(0em)' }}>
              <span className="willem__letter" style={{ transform: 'translateY(100%)' }}>o</span>
              <span className="willem__letter" style={{ transform: 'translateY(100%)' }}>r</span>
              <span className="willem__letter" style={{ transform: 'translateY(100%)' }}>a</span>
            </div>
          </div>
        </div>

        <div className="willem-header__content willem-visibility-hidden" style={{ visibility: 'hidden' }}>
          <header className="willem-header__top">
            <nav className="willen-nav">
              <div className="willem-nav__start">
                <a href="#" className="underline-link" style={{ transform: 'translateY(100%)' }}>Diwora©</a>
              </div>
              <div className="willem-nav__end">
                <div className="willem-nav__links">
                  <a href="#projects" className="underline-link" style={{ transform: 'translateY(100%)' }}>Projects,</a>
                  <a href="#services" className="underline-link" style={{ transform: 'translateY(100%)' }}>Services,</a>
                  <a href="#blog" className="underline-link" style={{ transform: 'translateY(100%)' }}>Blog (13)</a>
                </div>
                <div className="willem-nav__cta">
                  <a href="#contact" className="underline-link is--alt" style={{ transform: 'translateY(100%)' }}>Get in touch</a>
                </div>
              </div>
            </nav>
          </header>

          <div className="willem-header__bottom">
            <div className="willem__h1">
              <span className="willem__letter-white" style={{ transform: 'translateY(100%)' }}>D</span>
              <span className="willem__letter-white" style={{ transform: 'translateY(100%)' }}>i</span>
              <span className="willem__letter-white" style={{ transform: 'translateY(100%)' }}>w</span>
              <span className="willem__letter-white" style={{ transform: 'translateY(100%)' }}>o</span>
              <span className="willem__letter-white" style={{ transform: 'translateY(100%)' }}>r</span>
              <span className="willem__letter-white" style={{ transform: 'translateY(100%)' }}>a</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loader;
