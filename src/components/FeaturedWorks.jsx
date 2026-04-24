import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Lumina Dashboard',
    service: 'UI/UX Design & Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=1200&fit=crop',
  },
  {
    id: 2,
    title: 'Aura E-Commerce',
    service: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=1200&fit=crop',
  },
  {
    id: 3,
    title: 'Nova Branding',
    service: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&h=1200&fit=crop',
  },
  {
    id: 4,
    title: 'Echo Mobile App',
    service: 'Mobile Design',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&h=1200&fit=crop',
  },
];

const FeaturedWorks = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white pt-10 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-16 md:mb-24">
          Featured Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group cursor-pointer flex flex-col gap-5"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Chroma/Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/40 via-purple-500/40 to-pink-500/40 opacity-0 transition-opacity duration-700 group-hover:opacity-100 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                
                {/* Optional Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="bg-white/90 text-black px-6 py-3 rounded-full font-medium text-sm shadow-lg backdrop-blur-sm transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    View Project
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1 px-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base font-medium">
                  {project.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
