    import { useState, useEffect } from 'react';
    import logo from '../assets/logo.png';

    const Navbar = () => {
        const [isScrolled, setIsScrolled] = useState(false);
        const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
        const [navTheme, setNavTheme] = useState('light');

        useEffect(() => {
            const handleScroll = () => {
                const currentScrollPos = window.scrollY;

                // Detect scroll for glassmorphism effect
                setIsScrolled(currentScrollPos > 50);

                // Detect background theme
                const themeElements = document.querySelectorAll('[data-theme]');
                let currentTheme = 'light';
                
                themeElements.forEach(el => {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom >= 60) {
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

        const navLinks = [
            { label: 'About Us', href: '#about' },
            { label: 'Works', href: '#works' },
            { label: 'Services', href: '#services' },
            { label: 'Careers', href: '#careers' },
        ];

        return (
            <>
                {/* Desktop & Tablet Navbar */}
                <nav
                    className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${isScrolled
                            ? 'bg-black/30 backdrop-blur-md border-b border-white/10'
                            : 'bg-transparent'
                        }`}
                    aria-label="Main navigation"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-20">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <a href="#" aria-label="Diwora">
                                    <img src={logo} alt="Diwora" className="h-8 md:h-10 w-auto object-contain" />
                                </a>
                            </div>

                            {/* Desktop Navigation Links */}
                            <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className={`relative group transition-colors duration-300 text-sm font-medium ${
                                            navTheme === 'dark' ? 'text-white hover:text-gray-200' : 'text-black hover:text-gray-800'
                                        }`}
                                        aria-label={link.label}
                                    >
                                        {link.label}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300 ease-out" />
                                    </a>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="hidden md:flex items-center gap-4">
                                <button
                                    className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-black text-white font-semibold rounded-lg hover:from-black hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-red-500/50 active:scale-95"
                                    aria-label="Get Started"
                                >
                                    Contact Us
                                </button>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                className="md:hidden relative z-50 p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle mobile menu"
                                aria-expanded={isMobileMenuOpen}
                            >
                                <div className="w-6 h-6 relative flex items-center justify-center">
                                    <div
                                        className={`absolute w-5 h-0.5 transition-all duration-300 ease-in-out ${
                                            navTheme === 'dark' ? 'bg-white' : 'bg-black'
                                        } ${isMobileMenuOpen
                                                ? 'rotate-45 translate-y-0'
                                                : '-translate-y-1.5'
                                            }`}
                                    />
                                    <div
                                        className={`absolute w-5 h-0.5 transition-all duration-300 ease-in-out ${
                                            navTheme === 'dark' ? 'bg-white' : 'bg-black'
                                        } ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                                            }`}
                                    />
                                    <div
                                        className={`absolute w-5 h-0.5 transition-all duration-300 ease-in-out ${
                                            navTheme === 'dark' ? 'bg-white' : 'bg-black'
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
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-hidden="true"
                    />
                )}

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 h-screen w-64 bg-black/95 backdrop-blur-lg z-40 md:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto border-l border-white/10 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    role="navigation"
                    aria-label="Mobile navigation"
                >
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-4 border-b border-white/10">
                        <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Menu
                        </span>
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
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-4 py-3 text-white hover:text-black hover:bg-black/10 rounded-lg transition-all duration-300 font-medium"
                                aria-label={link.label}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile CTA Button */}
                    <div className="p-4 border-t border-white/10">
                        <button
                            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 active:scale-95"
                            aria-label="Contact us mobile"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </>
        );
    };

    export default Navbar;
