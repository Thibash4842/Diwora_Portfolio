import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoLight from '../assets/logo.png';
import logoDark from '../assets/Dlogo-white.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [navTheme, setNavTheme] = useState('light');
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [hoveredService, setHoveredService] = useState('Advertising');

    const dropdownTimeout = useRef(null);
    const isMegaMenuOpen = activeDropdown !== null;

    useEffect(() => {
        // Handle background navbar scroll effect
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        // Use Intersection Observer for theme detection
        const themeElements = document.querySelectorAll('[data-theme]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // When a section intersects our top detection zone, it's behind the navbar
                    if (entry.isIntersecting) {
                        setNavTheme(entry.target.getAttribute('data-theme'));
                    }
                });
            },
            {
                // Detection zone: a band starting 40px from top, ending at 90% from bottom (i.e. top 10% of screen)
                rootMargin: '-40px 0px -90% 0px',
                threshold: 0
            }
        );

        themeElements.forEach((el) => observer.observe(el));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    // Per-service featured card data
    const serviceCards = {
        'Advertising': [
            {
                title: 'Campaigns That Convert — The Art of Modern Advertising',
                image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop',
                to: '/articles/modern-advertising'
            },
            {
                title: 'Storytelling Through Ads: Emotional Connections That Sell',
                image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1974&auto=format&fit=crop',
                to: '/articles/ad-storytelling'
            },
        ],
        'Brand Visual': [
            {
                title: 'Crafting Visual Identities That Define Brands',
                image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop',
                to: '/articles/visual-identity'
            },
            {
                title: 'Color, Form & Feel: The Building Blocks of Brand Design',
                image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
                to: '/articles/brand-design'
            },
        ],
        'Motion Video': [
            {
                title: 'Motion Graphics That Move Audiences',
                image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop',
                to: '/articles/motion-graphics'
            },
            {
                title: 'From Script to Screen: Producing Compelling Brand Films',
                image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop',
                to: '/articles/brand-films'
            },
        ],
        'Digital Marketing': [
            {
                title: 'The Future of Digital Strategy in 2026',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
                to: '/articles/future-strategy'
            },
            {
                title: 'Data-Driven Campaigns: Marketing That Performs',
                image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop',
                to: '/articles/data-driven'
            },
        ],
        'Ideation & Scripting': [
            {
                title: 'From Blank Page to Big Idea: The Ideation Process',
                image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop',
                to: '/articles/ideation-process'
            },
            {
                title: 'Writing Scripts That Captivate from the First Line',
                image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop',
                to: '/articles/script-writing'
            },
        ],
        'Website Development': [
            {
                title: 'Building Brands that Last a Lifetime',
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop',
                to: '/articles/building-brands'
            },
            {
                title: 'Web Experiences That Convert Visitors into Customers',
                image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop',
                to: '/articles/web-experiences'
            },
        ],
    };

    const handleMouseEnter = (label) => {
        if (dropdownTimeout.current) {
            clearTimeout(dropdownTimeout.current);
        }
        setActiveDropdown(label);
        // Reset to first service when opening the mega menu
        if (label === 'Service') {
            setHoveredService('Advertising');
        }
    };

    const handleMouseLeave = () => {
        dropdownTimeout.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 300); // 300ms delay to prevent flicker
    };

    const navLinks = [
        { label: 'About Us', to: '/about' },
        { label: 'Works', href: '#works' },
        {
            label: 'Service', // Premium mega-menu
            href: '#service',
            subLinks: [
                { label: 'Advertising', to: '/advertising' },
                { label: 'Brand Visual', to: '/brand-visual' },
                { label: 'Motion Video', to: '/motion-video' },
                { label: 'Digital Marketing', to: '/digital-marketing' },
                { label: 'Ideation & Scripting', to: '/ideation-scripting' },
                { label: 'Website Development', to: '/website-development' },
            ],
            featuredCards: [
                {
                    title: 'The Future of Digital Strategy in 2026',
                    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
                    to: '/articles/future-strategy'
                },
                {
                    title: 'Building Brands that Last a Lifetime',
                    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop',
                    to: '/articles/building-brands'
                },
            ]
        },
        { label: 'Careers', to: '/careers' },
    ];

    // Determine the navbar colors based on state
    let navBgClass = 'bg-transparent';
    if (isMegaMenuOpen || isMobileMenuOpen) {
        navBgClass = 'bg-[#0a0a0a] border-b border-white/10'; // Forced dark premium aesthetic
    } else if (isScrolled) {
        navBgClass = navTheme === 'dark'
            ? 'bg-black/30 backdrop-blur-md border-b border-white/10'
            : 'bg-white/70 backdrop-blur-md border-b border-black/5';
    }

    const navTextColor = isMegaMenuOpen || isMobileMenuOpen || navTheme === 'dark' ? 'text-white' : 'text-black';
    const ctaStrokeColor = isMegaMenuOpen || isMobileMenuOpen || navTheme === 'dark' ? 'stroke-white' : 'stroke-black';

    return (
        <>
            {/* Desktop & Tablet Navbar */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-in-out ${navBgClass}`}
                aria-label="Main navigation"
                onMouseLeave={handleMouseLeave}
            >
                <div className="max-w-full mx-auto px-6 md:px-12 lg:px-20 relative z-20">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" aria-label="Diwora home" onClick={() => setActiveDropdown(null)} className="block">
                                <div className="relative h-9 sm:h-10 md:h-11 w-[120px] sm:w-[130px] md:w-[240px] flex items-center transition-opacity duration-300 hover:opacity-80">
                                    {/* Light Logo — hidden when bg is dark (mega menu, mobile menu, or dark section) */}
                                    <img
                                        src={logoLight}
                                        alt="Diwora"
                                        className={`absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-300 ease-in-out ${isMegaMenuOpen || isMobileMenuOpen || navTheme === 'dark' ? 'opacity-0' : 'opacity-100'
                                            }`}
                                    />
                                    {/* Dark (white) Logo — shown when bg is dark */}
                                    <img
                                        src={logoDark}
                                        alt="Diwora"
                                        className={`absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-300 ease-in-out ${isMegaMenuOpen || isMobileMenuOpen || navTheme === 'dark' ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation Links */}
                        <div className="hidden lg:flex items-center gap-8 flex-1 justify-center h-full">
                            {navLinks.map((link) => (
                                <div key={link.label} className="h-full flex items-center">
                                    {link.subLinks ? (
                                        /* ─── Mega Menu Trigger ─── */
                                        <div
                                            className="h-full flex items-center px-2 cursor-pointer"
                                            onMouseEnter={() => handleMouseEnter(link.label)}
                                        >
                                            <button
                                                className={`relative group overflow-hidden inline-flex items-center gap-1 pb-1 transition-colors duration-300 text-sm font-medium ${navTextColor}`}
                                                aria-expanded={activeDropdown === link.label}
                                                aria-haspopup="true"
                                            >
                                                <span className="relative flex items-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                                                    {link.label}
                                                </span>
                                                <span className="absolute top-full left-0 flex items-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                                                    {link.label}
                                                </span>
                                            </button>
                                        </div>
                                    ) : link.to ? (
                                        /* ─── Regular Nav Link (React Router) ─── */
                                        <Link
                                            to={link.to}
                                            className={`relative group overflow-hidden inline-flex pb-1 px-2 transition-colors duration-300 text-sm font-medium ${navTextColor}`}
                                            aria-label={link.label}
                                            onMouseEnter={() => handleMouseEnter(null)}
                                        >
                                            <span className="relative flex items-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                                                {link.label}
                                            </span>
                                            <span className="absolute top-full left-0 flex items-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                                                {link.label}
                                            </span>
                                        </Link>
                                    ) : (
                                        /* ─── Regular Nav Link (Anchor) ─── */
                                        <a
                                            href={link.href}
                                            className={`relative group overflow-hidden inline-flex pb-1 px-2 transition-colors duration-300 text-sm font-medium ${navTextColor}`}
                                            aria-label={link.label}
                                            onMouseEnter={() => handleMouseEnter(null)}
                                        >
                                            <span className="relative flex items-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                                                {link.label}
                                            </span>
                                            <span className="absolute top-full left-0 flex items-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                                                {link.label}
                                            </span>
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:flex items-center h-full" onMouseEnter={() => handleMouseEnter(null)}>
                            <button className="group relative items-center rounded-full border-2 border-red-600 bg-red-600 px-5 py-2 transition-all duration-300 active:scale-95 overflow-hidden flex">
                                {/* Expanding Background */}
                                <span className="absolute right-0 top-0 h-full w-[45px] rounded-full bg-white transition-all duration-700 ease-out group-hover:w-full group-hover:bg-[#1c1c1c]"></span>

                                {/* Text */}
                                <span className="relative z-10 text-[16px] sm:text-[18px] font-normal tracking-[0.05em] text-white">
                                    Contact
                                </span>

                                {/* Arrow */}
                                <svg
                                    viewBox="0 0 13 10"
                                    className="relative z-10 ml-3 h-[10px] w-[15px] -translate-x-1 stroke-white transition-all duration-500 ease-out group-hover:translate-x-0"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1 5L11 5" strokeWidth="2" strokeLinecap="round" />
                                    <polyline
                                        points="8 1 12 5 8 9"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className={`lg:hidden relative z-50 p-2 rounded-lg transition-colors duration-300 hover:bg-white/10`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <div className="w-6 h-6 relative flex items-center justify-center">
                                <div className={`absolute w-5 h-0.5 transition-all duration-300 ease-in-out ${navTextColor} bg-current ${isMobileMenuOpen ? 'rotate-45 translate-y-0 text-white' : '-translate-y-1.5'}`} />
                                <div className={`absolute w-5 h-0.5 transition-all duration-300 ease-in-out ${navTextColor} bg-current ${isMobileMenuOpen ? 'opacity-0 text-white' : 'opacity-100'}`} />
                                <div className={`absolute w-5 h-0.5 transition-all duration-300 ease-in-out ${navTextColor} bg-current ${isMobileMenuOpen ? '-rotate-45 translate-y-0 text-white' : 'translate-y-1.5'}`} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mega Menu Dropdown Panel */}
                <div
                    className={`absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top ${isMegaMenuOpen
                        ? 'opacity-100 scale-y-100 translate-y-0 shadow-2xl pointer-events-auto bg-[#0a0a0a]'
                        : 'opacity-0 scale-y-95 -translate-y-4 pointer-events-none bg-[#0a0a0a]'
                        }`}
                    onMouseEnter={() => activeDropdown && handleMouseEnter(activeDropdown)}
                >
                    <div className="max-w-full mx-auto px-6 md:px-12 lg:px-20 py-16">
                        {(() => {
                            const activeLink = navLinks.find(l => l.label === activeDropdown);
                            if (!activeLink || !activeLink.subLinks) return null;
                            return (
                                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 w-full">

                                    {/* Left Column: Featured Cards — two fixed slots, each crossfades between service variants */}
                                    <div className="w-full lg:w-2/3 h-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                        {[0, 1].map((slotIdx) => (
                                            <div key={slotIdx} className="relative aspect-[4/4] rounded-xl overflow-hidden bg-gray-900">
                                                {Object.entries(serviceCards).map(([serviceKey, cards]) => {
                                                    const card = cards[slotIdx];
                                                    if (!card) return null;
                                                    const isActive = hoveredService === serviceKey;
                                                    return (
                                                        <Link
                                                            key={serviceKey}
                                                            to={card.to}
                                                            onClick={() => setActiveDropdown(null)}
                                                            className="group absolute inset-0 block overflow-hidden rounded-xl"
                                                            style={{
                                                                opacity: isActive ? 1 : 0,
                                                                transition: 'opacity 400ms ease-in-out',
                                                                pointerEvents: isActive ? 'auto' : 'none',
                                                            }}
                                                        >
                                                            {/* Image */}
                                                            <img
                                                                src={card.image}
                                                                alt={card.title}
                                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                                            />
                                                            {/* Gradient overlay */}
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                                                            {/* Title */}
                                                            <div className="absolute inset-0 p-4 flex flex-col justify-end">
                                                                <h4 className="text-md lg:text-xl font-light text-white leading-tight">
                                                                    {card.title}
                                                                </h4>
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Right Column: Vertical Links */}
                                    <div className="w-full lg:w-1/3 flex flex-col gap-4">
                                        {activeLink.subLinks.map((sub, idx) => (
                                            <Link
                                                key={idx}
                                                to={sub.to}
                                                onClick={() => setActiveDropdown(null)}
                                                onMouseEnter={() => setHoveredService(sub.label)}
                                                className={`group inline-flex items-center text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-light transition-colors duration-300 w-fit ${hoveredService === sub.label
                                                    ? 'text-white [text-shadow:0_0_10px_rgba(255,255,255,0.7)]'
                                                    : 'text-gray-500 hover:text-gray-300'
                                                    }`}
                                            >
                                                <span className="relative overflow-hidden inline-block pb-0">
                                                    <span className="block transition-transform duration-500 group-hover:-translate-y-full">{sub.label}</span>
                                                    <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0">{sub.label}</span>
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>


                            );
                        })()}
                    </div>
                </div>

                {/* Mobile Dropdown Panel — top-down, full-width, inside nav for correct absolute positioning */}
                <div
                    className={`absolute top-full left-0 w-full h-[100vh] lg:hidden overflow-y-auto max-h-[calc(100vh-5rem)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top bg-[#0a0a0a] border-t border-white/10 ${isMobileMenuOpen
                        ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto shadow-2xl'
                        : 'opacity-0 scale-y-95 -translate-y-4 pointer-events-none'
                        }`}
                    role="navigation"
                    aria-label="Mobile navigation"
                >
                    <div className="px-6 py-8 flex flex-col gap-1">

                        {/* Nav Links */}
                        {navLinks.map((link) =>
                            link.subLinks ? (
                                /* ─── Service Accordion ─── */
                                <div key={link.label}>
                                    <button
                                        onClick={() => {
                                            const opening = !isMobileServicesOpen;
                                            setIsMobileServicesOpen(opening);
                                            if (opening) setHoveredService('Advertising');
                                        }}
                                        className="w-full flex items-center justify-between py-3 text-white font-medium text-base tracking-wide transition-colors duration-300 hover:text-gray-300 border-b border-white/5"
                                    >
                                        {link.label}
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Expandable service sub-section */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isMobileServicesOpen ? 'max-h-[1800px] opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="pt-4 pb-2 flex flex-col sm:flex-row gap-6">

                                            {/* Left: Service list — tap to switch cards */}
                                            <div className="flex flex-col gap-1 sm:w-1/3">
                                                {link.subLinks.map((sub) => (
                                                    <Link
                                                        key={sub.label}
                                                        to={sub.to}
                                                        onMouseEnter={() => setHoveredService(sub.label)}
                                                        onClick={() => {
                                                            setHoveredService(sub.label);
                                                            setIsMobileMenuOpen(false);
                                                            setIsMobileServicesOpen(false);
                                                        }}
                                                        className={`block py-1.5 text-base font-light transition-colors duration-300 ${hoveredService === sub.label
                                                            ? 'text-white'
                                                            : 'text-gray-500 hover:text-gray-300'
                                                            }`}
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>

                                            {/* Right: Featured cards — crossfade on tap */}
                                            <div className="sm:w-2/3 flex flex-col gap-4">
                                                <p className="text-xs font-medium tracking-widest text-gray-500 uppercase mb-1">Featured</p>
                                                {[0, 1].map((slotIdx) => (
                                                    <div key={slotIdx} className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-900">
                                                        {Object.entries(serviceCards).map(([serviceKey, cards]) => {
                                                            const card = cards[slotIdx];
                                                            if (!card) return null;
                                                            const isActive = hoveredService === serviceKey;
                                                            return (
                                                                <Link
                                                                    key={serviceKey}
                                                                    to={card.to}
                                                                    onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                                                                    className="group absolute inset-0 block overflow-hidden rounded-xl"
                                                                    style={{
                                                                        opacity: isActive ? 1 : 0,
                                                                        transition: 'opacity 400ms ease-in-out',
                                                                        pointerEvents: isActive ? 'auto' : 'none',
                                                                    }}
                                                                >
                                                                    <img
                                                                        src={card.image}
                                                                        alt={card.title}
                                                                        className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                                                                    />
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                                                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                                                                        <h4 className="text-sm font-medium text-white leading-tight">
                                                                            {card.title}
                                                                        </h4>
                                                                    </div>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ) : link.to ? (
                                /* ─── Regular Link (Router) ─── */
                                <Link
                                    key={link.label}
                                    to={link.to}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="py-3 text-white font-medium text-base tracking-wide hover:text-gray-300 transition-colors duration-300 border-b border-white/5"
                                >
                                    {link.label}
                                </Link>
                            ) : (
                                /* ─── Regular Link (Anchor) ─── */
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="py-3 text-white font-medium text-base tracking-wide hover:text-gray-300 transition-colors duration-300 border-b border-white/5"
                                >
                                    {link.label}
                                </a>
                            )
                        )}

                        {/* CTA Button */}
                        <div className="pt-6">
                            <a href="#contact" className="w-full group relative flex items-center justify-center rounded-full border-2 border-red-600 bg-red-600 px-5 py-3 transition-all duration-300 active:scale-95 overflow-hidden">
                                <span className="absolute right-0 top-0 h-full w-[45px] rounded-full bg-white transition-all duration-700 ease-out group-hover:w-full group-hover:bg-[#1c1c1c]" />
                                <span className="relative z-10 text-[16px] font-normal tracking-[0.05em] text-white">
                                    Contact
                                </span>
                                <svg
                                    viewBox="0 0 13 10"
                                    className="relative z-10 ml-3 h-[10px] w-[15px] -translate-x-1 stroke-white transition-all duration-500 ease-out group-hover:translate-x-0"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1 5L11 5" strokeWidth="2" strokeLinecap="round" />
                                    <polyline points="8 1 12 5 8 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>

            </nav>

            {/* Backdrop Overlay for Mega Menu */}
            <div
                className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${isMegaMenuOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                aria-hidden="true"
            />

            {/* Mobile backdrop — click outside to close */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </>
    );
};

export default Navbar;
