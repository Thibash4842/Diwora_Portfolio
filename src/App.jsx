import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Partner from './components/Partner'
import About from './components/About'
import ScrollStack from './components/ScrollStack'
import FeaturedWorks from './components/FeaturedWorks'
import TestimonialSlider from './components/TestimonialSlider'
import FAQ from './components/FAQ'
import './index.css'

function App() {
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
      </div>

      <TestimonialSlider />

      <FAQ />

      <Footer />
    </div>
  )
}

export default App
