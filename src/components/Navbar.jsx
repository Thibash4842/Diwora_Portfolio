import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [navTheme, setNavTheme] = useState('light');
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const servicesRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Detect scroll for glassmorphism effect
            setIsScrolled(currentScrollPos > 50);

            // Detect background theme based on navbar center line (y = 40px)
            const themeElements = document.querySelectorAll('[data-theme]');
            let currentTheme = 'light';

            themeElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 40 && rect.bottom >= 40) {
                    currentTheme = el.getAttribute('data-theme');
                }
            });

            setNavTheme(currentTheme);
        };

        window.addEventListener('scroll', handleScroll);
        // Run once on mount
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close services dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (servicesRef.current && !servicesRef.current.contains(e.target)) {
                setIsServicesOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navLinks = [
        { label: 'About Us', to: '/about' },
        { label: 'Works', href: '#works' },
        {
            label: 'Services',
            href: '#services',
            dropdown: [
                { label: 'Advertising', to: '/advertising' },
                { label: 'Branding', href: '#services' },
                { label: 'Digital Marketing', href: '#services' },
                { label: 'Web Development', href: '#services' },
            ],
        },
        { label: 'Careers', href: '#careers' },
    ];

    return (
        <>
            {/* Desktop & Tablet Navbar */}
            <nav
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${isScrolled
                    ? navTheme === 'dark'
                        ? 'bg-black/30 backdrop-blur-md border-b border-white/10'
                        : 'bg-white/70 backdrop-blur-md border-b border-black/5'
                    : 'bg-transparent'
                    }`}
                aria-label="Main navigation"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" aria-label="Diwora home">
                                <img
                                    src={logo}
                                    alt="Diwora"
                                    className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-all duration-300 hover:opacity-80"
                                    style={{
                                        filter: navTheme === 'dark'
                                            ? 'brightness(0) invert(1)'
                                            : 'none',
                                        transition: 'filter 300ms ease-in-out, opacity 300ms ease-in-out',
                                    }}
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation Links */}
                        <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
                            {navLinks.map((link) =>
                                link.dropdown ? (
                                    /* ─── Services Dropdown ─── */
                                    <div key={link.label} className="relative" ref={servicesRef}>
                                        <button
                                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                                            className={`relative group overflow-hidden inline-flex items-center gap-1 pb-1 transition-colors duration-300 text-sm font-medium ${navTheme === 'dark' ? 'text-white' : 'text-black'
                                                }`}
                                            aria-expanded={isServicesOpen}
                                            aria-haspopup="true"
                                        >
                                            <span className="relative flex items-center gap-1 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                                                {link.label}
                                                <svg
                                                    className={`w-3.5 h-3.5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2.5}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                            <span className="absolute top-full left-0 flex items-center gap-1 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                                                {link.label}
                                                <svg
                                                    className={`w-3.5 h-3.5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2.5}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </button>

                                        {/* Dropdown Panel */}
                                        <div
                                            className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 origin-top transition-all duration-300 ease-out ${isServicesOpen
                                                ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                                                : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                                                }`}
                                        >
                                            {/* Arrow */}
                                            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-sm rotate-45 shadow-sm border-l border-t border-gray-100" />

                                            <div className="relative bg-white rounded-xl shadow-xl shadow-black/8 border border-gray-100 overflow-hidden py-2">
                                                {link.dropdown.map((item, idx) => (
                                                    item.to ? (
                                                        <Link
                                                            key={item.label}
                                                            to={item.to}
                                                            onClick={() => setIsServicesOpen(false)}
                                                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-all duration-200 group/item"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                                                            {item.label}
                                                        </Link>
                                                    ) : (
                                                        <a
                                                            key={item.label}
                                                            href={item.href}
                                                            onClick={() => setIsServicesOpen(false)}
                                                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-all duration-200 group/item"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                                                            {item.label}
                                                        </a>
                                                    )
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : link.to ? (
                                    /* ─── Regular Nav Link (React Router) ─── */
                                    <Link
                                        key={link.label}
                                        to={link.to}
                                        className={`relative group overflow-hidden inline-flex pb-1 transition-colors duration-300 text-sm font-medium ${navTheme === 'dark' ? 'text-white' : 'text-black'
                                            }`}
                                        aria-label={link.label}
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
                                        key={link.label}
                                        href={link.href}
                                        className={`relative group overflow-hidden inline-flex pb-1 transition-colors duration-300 text-sm font-medium ${navTheme === 'dark' ? 'text-white' : 'text-black'
                                            }`}
                                        aria-label={link.label}
                                    >
                                        <span className="relative flex items-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                                            {link.label}
                                        </span>
                                        <span className="absolute top-full left-0 flex items-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                                            {link.label}
                                        </span>
                                    </a>
                                )
                            )}
                        </div>

                        {/* CTA Button */}
                        <button className="hidden lg:flex group relative items-center rounded-full border-2 border-red-600 bg-red-600 px-5 py-2 transition-all duration-300 active:scale-95 overflow-hidden">

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

                        {/* Mobile Menu Button */}
                        <button
                            className={`lg:hidden relative z-50 p-2 rounded-lg transition-colors duration-300 ${
                                navTheme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5'
                            }`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <div className="w-6 h-6 relative flex items-center justify-center">
                                <div
                                    className={`absolute w-5 h-0.5 transition-all duration-300 ease-in-out ${navTheme === 'dark' ? 'bg-white' : 'bg-black'
                                        } ${isMobileMenuOpen
                                            ? 'rotate-45 translate-y-0'
                                            : '-translate-y-1.5'
                                        }`}
                                />
                                <div
                                    className={`absolute w-5 h-0.5 transition-all duration-300 ease-in-out ${navTheme === 'dark' ? 'bg-white' : 'bg-black'
                                        } ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                                        }`}
                                />
                                <div
                                    className={`absolute w-5 h-0.5 transition-all duration-300 ease-in-out ${navTheme === 'dark' ? 'bg-white' : 'bg-black'
                                        } ${isMobileMenuOpen
                                            ? '-rotate-45 translate-y-0'
                                            : 'translate-y-1.5'
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-screen w-64 bg-black/95 backdrop-blur-lg z-40 lg:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto border-l border-white/10 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                role="navigation"
                aria-label="Mobile navigation"
            >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)} aria-label="Diwora home">
                        <img
                            src={logo}
                            alt="Diwora"
                            className="h-8 w-auto object-contain"
                            style={{ filter: 'brightness(0) invert(1)' }}
                        />
                    </Link>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
                        aria-label="Close menu"
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Links */}
                <div className="flex flex-col gap-2 p-4">
                    {navLinks.map((link) =>
                        link.dropdown ? (
                            /* ─── Mobile Services Accordion ─── */
                            <div key={link.label}>
                                <button
                                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                    className="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-white/5 rounded-lg transition-all duration-300 font-medium"
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

                                {/* Expandable sub-items */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileServicesOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="pl-4 py-1 flex flex-col gap-1">
                                        {link.dropdown.map((item) => (
                                            item.to ? (
                                                <Link
                                                    key={item.label}
                                                    to={item.to}
                                                    onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                                                    className="flex items-center gap-2.5 px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 text-sm font-medium"
                                                >
                                                    <span className="w-1 h-1 rounded-full bg-red-400" />
                                                    {item.label}
                                                </Link>
                                            ) : (
                                                <a
                                                    key={item.label}
                                                    href={item.href}
                                                    onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                                                    className="flex items-center gap-2.5 px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 text-sm font-medium"
                                                >
                                                    <span className="w-1 h-1 rounded-full bg-blue-400" />
                                                    {item.label}
                                                </a>
                                            )
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : link.to ? (
                            /* ─── Regular Mobile Link (React Router) ─── */
                            <Link
                                key={link.label}
                                to={link.to}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-4 py-3 text-white hover:text-black hover:bg-black/10 rounded-lg transition-all duration-300 font-medium"
                                aria-label={link.label}
                            >
                                {link.label}
                            </Link>
                        ) : (
                            /* ─── Regular Mobile Link (Anchor) ─── */
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-4 py-3 text-white hover:text-black hover:bg-black/10 rounded-lg transition-all duration-300 font-medium"
                                aria-label={link.label}
                            >
                                {link.label}
                            </a>
                        )
                    )}
                </div>

                {/* Mobile CTA Button */}
                <button className="group relative mx-auto flex items-center rounded-full border-2 border-red-600 bg-red-600 px-5 py-2 transition-all duration-300 active:scale-95 overflow-hidden">

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
        </>
    );
};

export default Navbar;
