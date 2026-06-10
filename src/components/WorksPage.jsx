import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';
import FeaturedWorks from './FeaturedWorks';
import HeroBackground from './HeroBackground';
import useScrollAnimations from '../hooks/useScrollAnimations';

const WorksPage = () => {
    const pageRef = useRef(null);
    useScrollAnimations(pageRef);

    return (
        <div ref={pageRef} data-theme="light" className="relative w-full min-h-screen bg-[#f5f5f7] overflow-x-hidden font-['Inter',sans-serif]">
            <Navbar />

            {/* Hero Section Container */}
            <section
                data-theme="light"
                className="relative min-h-screen w-full overflow-hidden bg-[#f5f5f7] flex flex-col items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-8"
            >
                <HeroBackground />

                {/* Hero Content Container */}
                <div className="relative z-10 max-w-full mx-auto px-6 md:px-12 lg:px-20 w-full flex flex-col justify-center min-h-[calc(100vh-140px)]">

                    {/* Title */}
                    <motion.div
                        className="w-full mb-16 lg:mb-20"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    >
                        <h1 className="text-[clamp(2.5rem,5.5vw,8rem)] text-center md:text-left font-poppins font-bold text-black leading-[1.08] tracking-tight uppercase max-w-5xl">
                            PROJECTS THAT<br />
                            SPEAK FOR <br /><span className="text-[#e10022]">THEMSELVES</span>
                        </h1>
                    </motion.div>

                    {/* Bottom row: Description on right */}
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-start justify-between w-full"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    >
                        <div className="lg:col-span-8" />
                        <div className="lg:col-span-4 flex flex-col gap-2 max-w-xl lg:ml-auto">
                            <p className="text-[clamp(14px,1.1vw,20px)] text-neutral-500 font-normal leading-relaxed">
                                Explore our work across branding, motion graphics, content production, and digital experiences crafted to leave a lasting impression.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </section>

            <div className="bg-white pt-20">
                <FeaturedWorks />
            </div>
            <Contact />
            <Footer />
        </div>
    );
};

export default WorksPage;
