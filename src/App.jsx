import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import Loader from './components/Loader'
import './index.css'

/* ─── Scroll To Top Component ─── */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* ─── Portfolio Home (original layout) ─── */
function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Partner />

      {/* <FullWidthImage /> */}
      <section
        data-theme="light"
        className="w-full h-[30vh] sm:h-screen lg:h-[90vh] bg-white px-6 md:px-12 lg:px-20 py-4"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-xl"
        >
          <source src="https://www.pexels.com/download/video/31259707/" type="video/mp4" />
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
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advertising" element={<Advertising />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
