import React, { useState, useEffect, useRef } from 'react';
import useScrollAnimations from '../hooks/useScrollAnimations';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-fade';

import aboutImg from '../assets/about/diwora-team.png';

const studioImages = [
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop"
];

const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let startTime = null;
                    const step = (timestamp) => {
                        if (!startTime) startTime = timestamp;
                        const progress = timestamp - startTime;

                        // Ease out cubic: 1 - Math.pow(1 - t, 3)
                        let t = Math.min(progress / duration, 1);
                        let easeOutProgress = 1 - Math.pow(1 - t, 3);

                        setCount(Math.floor(easeOutProgress * end));

                        if (progress < duration) {
                            window.requestAnimationFrame(step);
                        } else {
                            setCount(end);
                        }
                    };
                    window.requestAnimationFrame(step);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [end, duration]);

    return <span ref={ref}>{count}</span>;
};

const About = () => {
    const sectionRef = useRef(null);
    useScrollAnimations(sectionRef);

    return (
        <section id="about" ref={sectionRef} data-theme="light" className="w-full bg-white py-14 border-t border-neutral-100/60">
            <div className="max-w-full mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-start">

                    {/* Left Column - About Label and Vision Card */}
                    <div className="lg:col-span-3 flex flex-col gap-4 w-full lg:sticky lg:top-20" data-animate="fade-left" data-animate-duration="1">

                        <span className="text-2xl font-normal text-black tracking-wide">
                            About Diwora
                        </span>

                        {/* Vision Card */}
                        <div className="flex flex-col bg-[#e3e3e3] p-4 rounded-2xl border border-neutral-100">

                            {/* Inner White Box containing Profile Image */}
                            <div className="bg-white rounded-2xl border border-neutral-100/80 shadow-[0_4px_25px_rgba(0,0,0,0.01)] mb-6">
                                <div className="relative w-full aspect-square bg-[#f8f9fa] rounded-xl overflow-hidden flex items-center justify-center">
                                    <img
                                        src={aboutImg}
                                        alt="Profile Graphic"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Vision Info */}
                            <div className="flex flex-col mb-6">
                                <h3 className="text-xl font-medium text-black mb-2">Our Vision</h3>
                                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                                    To shape how brands exist visually in a world full of noise.
                                </p>
                            </div>

                            {/* About Us Button */}
                            <a href="/about" className="px-6 py-2.5 bg-neutral-900 hover:bg-black text-white font-normal rounded-lg text-sm transition-colors w-fit shadow-sm">
                                About Us
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Headings, Stats, and Studio Photo */}
                    <div className="lg:col-span-7 flex flex-col gap-10 w-full">

                        {/* Main Large Heading */}
                        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-black leading-[1.2] tracking-tight" data-animate="fade-right" data-animate-duration="1" data-animate-delay="0.1">
                            We approach every project with clarity combining creative thinking and strategy to build work that truly matters.
                        </h2>

                        {/* Two-Column Details Sub-Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start" data-animate="fade-up" data-animate-duration="0.9" data-animate-delay="0.2">

                            {/* Column 1: Reviews and Purpose Statement */}
                            <div className="flex flex-col gap-6">
                                {/* Avatars and Reviews */}
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-3">
                                        {[
                                            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face&q=80',
                                            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&q=80',
                                            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&q=80',
                                            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face&q=80'
                                        ].map((img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                alt={`Reviewer ${i + 1}`}
                                                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                            />
                                        ))}
                                    </div>
                                    <span className="text-[15px] font-semibold text-black">k+ Reviews</span>
                                </div>

                                {/* Purpose Statement */}
                                <p className="text-sm text-neutral-800 font-normal leading-relaxed max-w-sm">
                                    At Diwora, creativity is always guided by purpose. Every idea is shaped with intention built to communicate clearly and connect with the right audience.
                                </p>
                            </div>

                            {/* Column 2: Scope of Work and Counter Stats */}
                            <div className="flex flex-col gap-6">
                                {/* Scope of Work */}
                                <p className="text-[14px] md:text-[15px] text-neutral-500 font-normal leading-relaxed max-w-sm">
                                    From photography and video to motion and campaigns, we create visual content that doesn't just look good it drives growth and keeps brands relevant
                                </p>

                                {/* Counter Stats */}
                                <div className="flex items-center gap-6 mt-2">
                                    <div>
                                        <p className="text-xl md:text-4xl font-black text-black">
                                            <CountUp end={50} />+
                                        </p>
                                        <p className="text-xs text-neutral-500 mt-1 font-medium">Projects Completed</p>
                                    </div>

                                    {/* Vertical Divider */}
                                    <div className="w-px h-8 bg-neutral-300"></div>

                                    <div>
                                        <p className="text-xl md:text-4xl font-black text-black">
                                            <CountUp end={25} />+
                                        </p>
                                        <p className="text-xs text-neutral-500 mt-1 font-medium">Happy Clients</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Large Studio Photo Carousel */}
                        <div className="w-full h-64 sm:h-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.015)] border border-neutral-100 mt-4 group" data-animate="zoom-in" data-animate-duration="1.1" data-animate-delay="0.15">
                            <Swiper
                                modules={[Autoplay]}
                                effect="slide"
                                speed={1800}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                loop={true}
                                className="w-full h-full"
                            >
                                {studioImages.map((src, idx) => (
                                    <SwiperSlide key={idx} className="w-full h-full overflow-hidden">
                                        <div className="w-full h-full relative">
                                            {/* Subtle overlay for premium cinematic feel */}
                                            <div className="absolute inset-0 bg-black/5 z-10 transition-colors duration-500 group-hover:bg-transparent"></div>
                                            <img
                                                src={src}
                                                alt={`Studio workspace ${idx + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
