import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ApplicationModal = ({ isOpen, onClose, jobTitle = '' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        portfolio: '',
        message: '',
    });
    const [resumeFile, setResumeFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    const fileInputRef = useRef(null);
    const scrollRef = useRef(null);

    // Reset form when modal closes
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setFormData({ name: '', email: '', phone: '', portfolio: '', message: '' });
                setResumeFile(null);
                setIsSubmitted(false);
                setFocusedField(null);
            }, 400);
        }
    }, [isOpen]);

    // Close on Escape and lock body scroll
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';

            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [isOpen, onClose]);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) setResumeFile(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file) setResumeFile(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => setIsDragging(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In production, you'd POST this data to an API
        setIsSubmitted(true);
    };

    const formatFileSize = (bytes) => {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / 1048576).toFixed(1) + ' MB';
    };

    // Framer Motion variants
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.92, y: 40 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.08 },
        },
        exit: {
            opacity: 0,
            scale: 0.92,
            y: 40,
            transition: { duration: 0.35, ease: [0.4, 0, 1, 1] },
        },
    };

    const staggerContainer = {
        visible: {
            transition: { staggerChildren: 0.06, delayChildren: 0.2 },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
    };

    const successVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    {/* Backdrop */}
                    <motion.div
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    {/* Modal */}
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative w-full max-w-[680px] max-h-[92vh] overflow-hidden rounded-2xl bg-white shadow-2xl"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="application-modal-title"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="relative px-8 pt-8 pb-6 border-b border-neutral-100">
                            {/* Subtle accent line */}
                            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 via-red-500 to-orange-400" />

                            <div className="flex items-start justify-between">
                                <div>
                                    <motion.p
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.4 }}
                                        className="text-xs font-semibold tracking-[0.15em] uppercase text-red-600 mb-2"
                                    >
                                        Apply for Position
                                    </motion.p>
                                    <motion.h2
                                        id="application-modal-title"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.28, duration: 0.4 }}
                                        className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight"
                                    >
                                        {jobTitle}
                                    </motion.h2>
                                </div>

                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-900 transition-colors duration-300"
                                    aria-label="Close modal"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-neutral-500 group-hover:text-white transition-colors duration-300"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Scrollable Body */}
                        <style>{`
                            .application-modal-scroll::-webkit-scrollbar {
                                width: 4px;
                            }
                            .application-modal-scroll::-webkit-scrollbar-track {
                                background: transparent;
                            }
                            .application-modal-scroll::-webkit-scrollbar-thumb {
                                background: #d4d4d4;
                                border-radius: 999px;
                            }
                            .application-modal-scroll::-webkit-scrollbar-thumb:hover {
                                background: #a3a3a3;
                            }
                        `}</style>
                        <div
                            ref={scrollRef}
                            className="application-modal-scroll overflow-y-auto"
                            style={{ maxHeight: 'calc(92vh - 140px)', scrollbarWidth: 'thin', scrollbarColor: '#d4d4d4 transparent' }}
                        >
                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    /* ─── Success State ─── */
                                    <motion.div
                                        key="success"
                                        variants={successVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="flex flex-col items-center justify-center text-center px-8 py-20"
                                    >
                                        {/* Animated checkmark */}
                                        <div className="relative w-20 h-20 mb-8">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                                className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-200"
                                            >
                                                <motion.svg
                                                    initial={{ pathLength: 0, opacity: 0 }}
                                                    animate={{ pathLength: 1, opacity: 1 }}
                                                    transition={{ delay: 0.5, duration: 0.5 }}
                                                    className="w-9 h-9 text-white"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </motion.svg>
                                            </motion.div>
                                        </div>

                                        <motion.h3
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4, duration: 0.4 }}
                                            className="text-2xl font-bold text-neutral-900 mb-3"
                                        >
                                            Application Submitted!
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5, duration: 0.4 }}
                                            className="text-neutral-500 text-[15px] leading-relaxed max-w-sm mb-8"
                                        >
                                            Thank you for applying for the <span className="font-semibold text-neutral-700">{jobTitle}</span> position. We'll review your application and get back to you soon.
                                        </motion.p>
                                        <motion.button
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6, duration: 0.4 }}
                                            onClick={onClose}
                                            className="px-8 py-3 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors duration-300 active:scale-[0.97]"
                                        >
                                            Done
                                        </motion.button>
                                    </motion.div>
                                ) : (
                                    /* ─── Form ─── */
                                    <motion.form
                                        key="form"
                                        variants={staggerContainer}
                                        initial="hidden"
                                        animate="visible"
                                        onSubmit={handleSubmit}
                                        className="px-8 py-8 space-y-6"
                                    >
                                        {/* Name & Email — side by side on larger screens */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <motion.div variants={fadeUp}>
                                                <label
                                                    htmlFor="apply-name"
                                                    className={`block text-xs font-semibold tracking-wide uppercase mb-2 transition-colors duration-300 ${focusedField === 'name' ? 'text-red-600' : 'text-neutral-400'
                                                        }`}
                                                >
                                                    Full Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    id="apply-name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('name')}
                                                    onBlur={() => setFocusedField(null)}
                                                    placeholder="John Doe"
                                                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-[15px] placeholder:text-neutral-300 outline-none transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/10 focus:bg-white hover:border-neutral-300"
                                                />
                                            </motion.div>

                                            <motion.div variants={fadeUp}>
                                                <label
                                                    htmlFor="apply-email"
                                                    className={`block text-xs font-semibold tracking-wide uppercase mb-2 transition-colors duration-300 ${focusedField === 'email' ? 'text-red-600' : 'text-neutral-400'
                                                        }`}
                                                >
                                                    Email Address <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    id="apply-email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('email')}
                                                    onBlur={() => setFocusedField(null)}
                                                    placeholder="john@example.com"
                                                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-[15px] placeholder:text-neutral-300 outline-none transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/10 focus:bg-white hover:border-neutral-300"
                                                />
                                            </motion.div>
                                        </div>

                                        {/* Phone & Portfolio */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <motion.div variants={fadeUp}>
                                                <label
                                                    htmlFor="apply-phone"
                                                    className={`block text-xs font-semibold tracking-wide uppercase mb-2 transition-colors duration-300 ${focusedField === 'phone' ? 'text-red-600' : 'text-neutral-400'
                                                        }`}
                                                >
                                                    Phone Number <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    id="apply-phone"
                                                    name="phone"
                                                    type="tel"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('phone')}
                                                    onBlur={() => setFocusedField(null)}
                                                    placeholder="+91 98765 43210"
                                                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-[15px] placeholder:text-neutral-300 outline-none transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/10 focus:bg-white hover:border-neutral-300"
                                                />
                                            </motion.div>

                                            <motion.div variants={fadeUp}>
                                                <label
                                                    htmlFor="apply-portfolio"
                                                    className={`block text-xs font-semibold tracking-wide uppercase mb-2 transition-colors duration-300 ${focusedField === 'portfolio' ? 'text-red-600' : 'text-neutral-400'
                                                        }`}
                                                >
                                                    Portfolio Link
                                                </label>
                                                <input
                                                    id="apply-portfolio"
                                                    name="portfolio"
                                                    type="url"
                                                    value={formData.portfolio}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('portfolio')}
                                                    onBlur={() => setFocusedField(null)}
                                                    placeholder="https://yourportfolio.com"
                                                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-[15px] placeholder:text-neutral-300 outline-none transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/10 focus:bg-white hover:border-neutral-300"
                                                />
                                            </motion.div>
                                        </div>

                                        {/* Resume Upload */}
                                        <motion.div variants={fadeUp}>
                                            <label className="block text-xs font-semibold tracking-wide uppercase mb-2 text-neutral-400">
                                                Resume / CV <span className="text-red-500">*</span>
                                            </label>
                                            <div
                                                onClick={() => fileInputRef.current?.click()}
                                                onDrop={handleDrop}
                                                onDragOver={handleDragOver}
                                                onDragLeave={handleDragLeave}
                                                className={`relative group cursor-pointer rounded-xl border-2 border-dashed transition-all duration-300 ${isDragging
                                                    ? 'border-red-500 bg-red-50/50'
                                                    : resumeFile
                                                        ? 'border-green-400 bg-green-50/30'
                                                        : 'border-neutral-200 bg-neutral-50 hover:border-neutral-300 hover:bg-neutral-100/50'
                                                    }`}
                                            >
                                                <input
                                                    ref={fileInputRef}
                                                    type="file"
                                                    accept=".pdf,.doc,.docx"
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                    required={!resumeFile}
                                                />

                                                {resumeFile ? (
                                                    /* ─── File Selected State ─── */
                                                    <div className="flex items-center gap-4 p-5">
                                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-md shadow-red-200/50">
                                                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                                <polyline points="14 2 14 8 20 8" />
                                                                <line x1="16" y1="13" x2="8" y2="13" />
                                                                <line x1="16" y1="17" x2="8" y2="17" />
                                                                <polyline points="10 9 9 9 8 9" />
                                                            </svg>
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-semibold text-neutral-800 truncate">{resumeFile.name}</p>
                                                            <p className="text-xs text-neutral-400 mt-0.5">{formatFileSize(resumeFile.size)}</p>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setResumeFile(null);
                                                                if (fileInputRef.current) fileInputRef.current.value = '';
                                                            }}
                                                            className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-100 hover:bg-red-100 flex items-center justify-center transition-colors duration-200"
                                                            aria-label="Remove file"
                                                        >
                                                            <svg className="w-4 h-4 text-neutral-400 hover:text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <line x1="18" y1="6" x2="6" y2="18" />
                                                                <line x1="6" y1="6" x2="18" y2="18" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                ) : (
                                                    /* ─── Drop Zone ─── */
                                                    <div className="flex flex-col items-center justify-center py-8 px-6 text-center">
                                                        <div className="w-12 h-12 rounded-xl bg-neutral-100 group-hover:bg-neutral-200 flex items-center justify-center mb-3 transition-colors duration-300">
                                                            <svg className="w-6 h-6 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                                <polyline points="17 8 12 3 7 8" />
                                                                <line x1="12" y1="3" x2="12" y2="15" />
                                                            </svg>
                                                        </div>
                                                        <p className="text-sm text-neutral-600 font-medium mb-1">
                                                            <span className="text-red-600 font-semibold">Click to upload</span> or drag and drop
                                                        </p>
                                                        <p className="text-xs text-neutral-400">PDF, DOC, or DOCX (max 10MB)</p>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>

                                        {/* Cover Note */}
                                        <motion.div variants={fadeUp}>
                                            <label
                                                htmlFor="apply-message"
                                                className={`block text-xs font-semibold tracking-wide uppercase mb-2 transition-colors duration-300 ${focusedField === 'message' ? 'text-red-600' : 'text-neutral-400'
                                                    }`}
                                            >
                                                Cover Note
                                            </label>
                                            <textarea
                                                id="apply-message"
                                                name="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('message')}
                                                onBlur={() => setFocusedField(null)}
                                                placeholder="Tell us why you'd be a great fit for this role..."
                                                className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-[15px] placeholder:text-neutral-300 outline-none transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/10 focus:bg-white hover:border-neutral-300 resize-none"
                                            />
                                        </motion.div>

                                        {/* Submit */}
                                        <motion.div variants={fadeUp} className="pt-2 pb-2">
                                            <button
                                                type="submit"
                                                className="group relative w-full flex items-center justify-center gap-3 rounded-xl bg-neutral-900 text-white py-4 text-[15px] font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:bg-neutral-800 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:ring-offset-2"
                                            >
                                                {/* Hover shimmer */}
                                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />

                                                <span className="relative z-10">Submit Application</span>
                                                <svg
                                                    className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                    <polyline points="12 5 19 12 12 19" />
                                                </svg>
                                            </button>

                                            <p className="text-center text-xs text-neutral-400 mt-4 leading-relaxed">
                                                By submitting, you agree to our{' '}
                                                <span className="text-neutral-600 underline underline-offset-2 cursor-pointer hover:text-neutral-900 transition-colors">Privacy Policy</span>{' '}
                                                and consent to being<br /> contacted about this role.
                                            </p>
                                        </motion.div>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ApplicationModal;
