import { Routes, Route } from 'react-router-dom'
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
import Advertising from './components/Advertising'
import './index.css'

/* ─── Portfolio Home (original layout) ─── */
function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Partner />
      {/* <FullWidthImage /> */}

      <section className="w-full h-screen bg-white px-6 md:px-12 lg:px-20">
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

      <Footer />
    </div>
  )
}

/* ─── App Router ─── */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/advertising" element={<Advertising />} />
    </Routes>
  )
}

export default App
