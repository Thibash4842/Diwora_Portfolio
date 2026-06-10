import { useEffect, useState, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useScrollAnimations from './hooks/useScrollAnimations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Partner from './components/Partner'
import About from './components/About'
import ScrollStack from './components/ScrollStack'
import FeaturedWorks from './components/FeaturedWorks'
import HowWeWork from './components/HowWeWork'
import TestimonialSlider from './components/TestimonialSlider'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Careers from './components/Careers'
import Advertising from './components/Advertising'
import AboutUs from './components/AboutUs'
import ContactPage from './components/ContactPage'
import WorksPage from './components/WorksPage'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'

import FullVideo from './assets/about/video.mp4'
import './index.css'

gsap.registerPlugin(ScrollTrigger)

/* ─── Scroll To Top Component ─── */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wait for the new page to render before scrolling up
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      // console.log("ScrollTrigger count:", ScrollTrigger.getAll().length);
    }, 10);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

/* ─── Portfolio Home (original layout) ─── */
function Home({ heroRef, navRevealed, loading }) {
  const homeRef = useRef(null);
  useScrollAnimations(homeRef);

  return (
    <div ref={homeRef} className="w-full min-h-screen bg-white">
      <Navbar revealed={navRevealed} />
      <Hero ref={heroRef} skipAnimation={!loading} />
      <Partner />

      {/* <FullWidthImage /> */}
      <section
        data-theme="light"
        className="w-full h-[30vh] sm:h-screen lg:h-[90vh] bg-white px-6 md:px-12 lg:px-20 py-4"
        data-animate="zoom-in"
        data-animate-duration="1.2"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover rounded-xl"
        >
          <source src={FullVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <About />

      <div id="works">
        <ScrollStack />
        <FeaturedWorks />
        <HowWeWork />
      </div>

      <TestimonialSlider />

      <FAQ />

      <Contact />

      <Footer />
    </div>
  )
}

/* ─── App Router ─── */
function App() {
  const [loading, setLoading] = useState(() => {
    try {
      return sessionStorage.getItem('hasVisited') !== 'true';
    } catch (e) {
      return true;
    }
  });
  const [navRevealed, setNavRevealed] = useState(() => {
    try {
      return sessionStorage.getItem('hasVisited') === 'true';
    } catch (e) {
      return false;
    }
  });
  const heroRef = useRef(null);

  // Prevent automatic scroll restoration on load
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    } else {
      document.body.style.overflow = 'auto';

      const forceScrollTop = () => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      };

      // Perform immediate and delayed scrolls to override any async layout/rendering scroll adjustments
      forceScrollTop();
      requestAnimationFrame(forceScrollTop);
      setTimeout(forceScrollTop, 10);
      setTimeout(forceScrollTop, 50);
      setTimeout(forceScrollTop, 100);
      setTimeout(forceScrollTop, 200);

      // Force ScrollTrigger to recalculate dimensions now that the scrollbar is visible
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [loading]);

  return (
    <>
      <CustomCursor />
      {loading && <Loader
        onTransitionStart={() => {
          // Step 1: Navbar slides in
          setNavRevealed(true);
          // Step 2: Hero reveal starts after navbar begins animating
          setTimeout(() => {
            if (heroRef.current) heroRef.current.reveal();
          }, 500);
        }}
        onComplete={() => {
          setLoading(false);
          try {
            sessionStorage.setItem('hasVisited', 'true');
          } catch (e) {
            // ignore
          }
        }}
      />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home heroRef={heroRef} navRevealed={navRevealed} loading={loading} />} />
        <Route path="/advertising" element={<Advertising />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
