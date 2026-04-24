import React, { useState, useEffect, useRef } from 'react';

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
    return (
        <section id="about" className="w-full bg-white pt-20 md:pt-32 pb-10 md:pb-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                    {/* Left Section */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        <h2 className="text-5xl font-bold text-black tracking-wide">
                            About Diwora
                        </h2>
                        <div className=" flex flex-col gap-8 bg-gray-100 p-6 rounded-lg">

                            {/* Profile Image */}
                            <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Vision */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-2xl font-bold text-black">Our Vision</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    To shape how brands exist visually in a world full of noise.
                                </p>
                            </div>

                            {/* About Us Button */}
                            <button className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-black/80 transition-all duration-300 w-fit">
                                About Us
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="lg:col-span-3 flex flex-col gap-8">
                        {/* Main Heading */}
                        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-black leading-tight">
                            We approach every project with clarity combining creative thinking and strategy to build work that truly matters.
                        </h2>

                        {/* Reviews Section */}
                        <div className="flex items-center gap-4 py-6">
                            <div className="flex -space-x-3">
                                {[
                                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
                                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop'
                                ].map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt={`Reviewer ${i + 1}`}
                                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                    />
                                ))}
                            </div>
                            <span className="text-lg font-semibold text-black">100k+ Reviews</span>
                        </div>

                        {/* Detailed Description */}
                        <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-black pl-6">
                            At Diwora, creativity is always guided by purpose. Every idea is shaped with intention built to communicate clearly and connect with the right audience.
                        </p>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                            From photography and video to motion and campaigns, we create visual content that doesn't just look good it drives growth and keeps brands relevant
                        </p>

                        {/* Stats */}
                        <div className="flex items-center justify-start gap-12 pt-8">
                            <div className="flex items-center gap-8">
                                <div>
                                    <p className="text-3xl font-bold text-black"><CountUp end={50} />+</p>
                                    <p className="text-base text-gray-600 mt-1">Projects Completed</p>
                                </div>
                                <div className="w-px h-16 bg-gray-300"></div>
                                <div>
                                    <p className="text-3xl font-bold text-black"><CountUp end={25} />+</p>
                                    <p className="text-base text-gray-600 mt-1">Happy Clients</p>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="w-full h-64 sm:h-72 lg:h-80 bg-gray-800 rounded-lg overflow-hidden mt-8">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
                                alt="Team workspace"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
