import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import socialMedia from '../assets/advertising/results/social_media.png';
import analytics from '../assets/advertising/results/analytics.png';
import reach from '../assets/advertising/results/reach.png';
import engagement from '../assets/advertising/results/engagement.png';

/* ──────────────────────────────────────────────
   Project data matching the reference design
   ────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 'social',
    image: socialMedia,
    name: 'Project Name',
    service: 'Service',
  },
  {
    id: 'analytics',
    image: analytics,
    name: 'Project Name',
    service: 'Service',
  },
  {
    id: 'reach',
    image: reach,
    name: 'Project Name',
    service: 'Service',
  },
  {
    id: 'engagement',
    image: engagement,
    name: 'Project Name',
    service: 'Service',
  },
];

/* ──────────────────────────────────────────────
   Single Project Card
   ────────────────────────────────────────────── */
const ProjectCard = ({ project, index, inView }) => (
  <motion.div
    className="flex flex-col gap-4 group cursor-pointer"
    initial={{ opacity: 0, y: 40 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{
      duration: 0.6,
      delay: 0.1 + index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    {/* Image Container */}
    <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    {/* Text */}
    <div className="flex flex-col gap-1 px-0.5">
      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black tracking-tight leading-tight">
        {project.name}
      </h3>
      <p className="text-sm text-neutral-500 font-medium">
        {project.service}
      </p>
    </div>
  </motion.div>
);

/* ──────────────────────────────────────────────
   Results Section
   ────────────────────────────────────────────── */
const ResultsSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-white font-['Inter',sans-serif] py-14"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ─── Section Header ─── */}
        <div className="flex flex-col items-start gap-2 sm:gap-3 mb-10 sm:mb-12 lg:mb-16">
          <motion.p
            className="text-xs uppercase tracking-[0.35em] text-red-600 font-semibold"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Results
          </motion.p>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-[-0.04em] leading-tight max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            Real growth from real campaigns
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base text-neutral-500 leading-7 max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            See how we've transformed businesses.
          </motion.p>
        </div>

        {/* ─── Projects Grid (2×2) ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResultsSection;
