import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Contact from './Contact';

const ContactModal = ({ isOpen, onClose }) => {
    // Close on escape key and manage body overflow
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            // Save current overflow style
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';

            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    {/* Modal Content Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="relative w-full max-w-[1400px] max-h-full overflow-hidden rounded-3xl bg-[#080000] shadow-2xl border border-white/10"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="contact-modal-title"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300 backdrop-blur-md shadow-lg"
                            aria-label="Close modal"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        {/* Scrollable Area */}
                        <style>{`
                            .contact-modal-scroll::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        <div 
                            className="contact-modal-scroll h-full w-full overflow-y-auto"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', maxHeight: 'calc(100vh - 4rem)' }}
                        >
                            <div className="w-full h-full min-h-full pb-4 sm:pb-0">
                                <Contact inModal={true} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
