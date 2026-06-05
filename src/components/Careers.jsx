import React, { useState, useRef, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ApplicationModal from './ApplicationModal';
import useScrollAnimations from '../hooks/useScrollAnimations';

const jobs = [
    {
        title: "Graphics Designer",
        subtitle: "0-1 Year Experience | Fresher Also Can Apply",
        description: "We are looking for a talented Graphics Designer to join our creative team. You will be responsible for creating visual concepts, by hand or using computer software, to communicate ideas that inspire, inform, or captivate consumers."
    },
    {
        title: "Video Editor",
        subtitle: "2 Years Experience | Adobe Suite Knowledge",
        description: "Join our post-production team to craft compelling narratives. You'll work closely with directors and producers to assemble raw footage into a finished project that matches the director's vision."
    },
    {
        title: "PR Executive",
        subtitle: "Looking interns for Public Relation Executive | Journalist ",
        description: "We need a PR Executive to manage our brand presence and communications. You will build relationships with media, draft press releases, and develop strategies to enhance our public image."
    },
    {
        title: "Telecaller",
        subtitle: "0-2 Years Experience | Full-Time",
        description: "Looking Tele callers only female with good communications skills required."
    }
];

const AccordionItem = ({ job, isOpen, onClick, onApply }) => {
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div className="border-b border-[#cfd4d8] overflow-hidden">
            <button
                onClick={onClick}
                className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
            >
                <h3 className="text-[16px] md:text-[17px] font-bold text-[#2d3748]">
                    {job.title}
                </h3>
                <div className="relative w-4 h-4 flex items-center justify-center text-[#2d3748]">
                    <span className={`absolute w-3.5 h-[1.5px] bg-current transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    <span className={`absolute w-3.5 h-[1.5px] bg-current transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-0 opacity-0' : 'rotate-90 opacity-100'}`} />
                </div>
            </button>

            <div
                ref={contentRef}
                style={{ maxHeight: `${height}px` }}
                className="transition-all duration-500 ease-in-out overflow-hidden"
            >
                <div
                    className={`pb-6 transition-all duration-500 ease-in-out transform ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                >
                    <p className="text-[14px] md:text-[15px] text-[#556981] font-normal mb-5 tracking-wide">
                        {job.subtitle}
                    </p>
                    <p className="text-[14px] md:text-[15px] text-neutral-600 leading-relaxed max-w-3xl mb-6 font-normal">
                        {job.description}
                    </p>
                    <button
                        onClick={(e) => { e.stopPropagation(); onApply(job.title); }}
                        className="px-6 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-black transition-colors duration-300 hover:shadow-md"
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

const Careers = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState('');
    const sectionRef = useRef(null);

    useScrollAnimations(sectionRef);

    const handleApply = (jobTitle) => {
        setSelectedJob(jobTitle);
        setIsModalOpen(true);
    };

    return (
        <div data-theme="light" className="relative w-full min-h-screen bg-white font-['Inter',sans-serif]">
            <Navbar />
            <section ref={sectionRef} id="careers" className="w-full bg-white pt-32 pb-20 md:pt-40 md:pb-32">
                <div className="max-w-full mx-auto px-6 md:px-12 lg:px-20">
                    <div className="max-w-5xl">
                        <h2 className="text-[56px] md:text-7xl lg:text-[80px] font-bold text-black tracking-tight mb-10 md:mb-14" data-animate="fade-up">
                            Careers
                        </h2>

                        <p className="text-[22px] md:text-[28px] lg:text-[32px] text-black font-normal leading-[1.3] md:leading-[1.3] mb-16 md:mb-20 tracking-tight" data-animate="fade-up" data-animate-delay="0.1">
                            Join the clan of diwora and be a part of our family, where your ideas are valued, your creativity is celebrated, we'll continue to craft extraordinary stories that captivate the world.
                        </p>
                    </div>

                    <div className="w-full max-w-full border-t border-neutral-200" data-animate="fade-up" data-animate-stagger="0.15">
                        {jobs.map((job, index) => (

                            <AccordionItem
                                key={index}
                                job={job}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                onApply={handleApply}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />

            <ApplicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                jobTitle={selectedJob}
            />
        </div>
    );
};

export default Careers;
