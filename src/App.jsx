import { useEffect } from 'react'
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
import Advertising from './components/Advertising'
import AboutUs from './components/AboutUs'
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
      <section data-theme="light" className="w-full h-[30vh] sm:h-screen bg-white px-6 md:px-12 lg:px-20 py-4">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"
          alt="Team workspace"
          className="w-full h-full object-cover rounded-xl"
        />
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
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advertising" element={<Advertising />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App
