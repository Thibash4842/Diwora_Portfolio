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

      <section id="services" className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-black mb-6">Services</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From design to development, we offer comprehensive solutions
            tailored to your unique needs and goals.
          </p>
        </div>
      </section>

      <section id="careers" className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-black mb-6">Careers</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join our team and be part of a dynamic, innovative company that values creativity and excellence.
          </p>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-black mb-6">Contact Us</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to get started? Let's discuss how we can help you achieve
            your goals and transform your digital presence.
          </p>
        </div>
      </section>

      <FAQ />

      <Footer />
    </div>
  )
}

export default App
