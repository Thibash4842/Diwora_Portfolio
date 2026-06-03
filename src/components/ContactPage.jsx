import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';
import HeroBackground from './HeroBackground';

const ContactPage = () => {


    return (
        <div className="relative w-full min-h-screen bg-[#f5f5f7] overflow-x-hidden font-['Inter',sans-serif]">
            <Navbar />

            {/* Hero Section Container */}
            <section
                data-theme="light"
                className="relative min-h-screen w-full overflow-hidden bg-[#f5f5f7] flex flex-col items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-8"
            >
                <HeroBackground />

                <div className="relative z-10 max-w-full mx-auto px-6 md:px-12 lg:px-20 w-full flex flex-col justify-center min-h-[calc(100vh-140px)]">

                    {/* Title - Occupies full width, large, bold all-caps */}
                    <motion.div
                        className="w-full mb-16 lg:mb-20"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    >
                        <h1 className="text-4xl sm:text-6xl lg:text-[80px] text-center md:text-left font-poppins font-bold text-black leading-[1.08] tracking-tight uppercase max-w-5xl">
                            LET'S BUILD SOMETHING<br /> GREAT
                            <span className="text-[#e10022]"> TOGETHER</span>
                        </h1>
                    </motion.div>

                    {/* Bottom row: Description on right, left column empty */}
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-start justify-between w-full"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    >
                        <div className="lg:col-span-8" />
                        <div className="lg:col-span-4 flex flex-col gap-2 max-w-xl lg:ml-auto">
                            <p className="text-[14px] md:text-[15px] text-neutral-500 font-normal leading-relaxed">
                                Whether you have a fully formed project or just a spark of an idea, we're here to listen, strategize, and bring it to life. Drop us a message and let's create something extraordinary.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section Component */}
            <Contact />

            <Footer />
        </div>
    );
};

export default ContactPage;
