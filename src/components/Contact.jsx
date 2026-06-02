import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import artboardImg from '../assets/contact/Artboard.png';

gsap.registerPlugin(ScrollTrigger);

/* ─── Service options ─── */
const SERVICE_OPTIONS = [
  'Brand Visual',
  'Motion & Video',
  'Content & Digital',
  'Ideation & Scripting',
  'Web Design & Development',
  'Social Media Marketing',
];

/* ─── Floating particle ─── */
const Particle = ({ style }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={style}
  />
);

/* ─── Inline error message ─── */
const FieldError = ({ msg }) => (
  <p
    className="mt-1.5 text-xs text-red-400 font-medium tracking-wide"
    style={{ animation: 'fadeSlideIn 0.25s ease' }}
  >
    {msg}
  </p>
);

/* ═══════════════════════════════════════════
   CONTACT SECTION
═══════════════════════════════════════════ */
const Contact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const pillsRef = useRef([]);
  const formCardRef = useRef(null);
  const fieldsRef = useRef([]);
  const btnRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const particlesRef = useRef([]);

  /* ── Form state ── */
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    details: '',
  });
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  /* ─── Validate ─── */
  const validate = () => {
    const e = {};
    if (!form.company.trim()) e.company = 'Company name is required';
    if (!form.service) e.service = 'Please choose a service';
    if (!form.details.trim()) e.details = 'Project details are required';
    return e;
  };

  const handleChange = (field) => (ev) => {
    setForm((p) => ({ ...p, [field]: ev.target.value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: '' }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      /* shake the button */
      gsap.fromTo(btnRef.current,
        { x: -6 }, { x: 0, duration: 0.4, ease: 'elastic.out(1,0.3)' }
      );
      return;
    }
    setSubmitting(true);
    /* Simulate async submit */
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1600);
  };

  /* ─── GSAP animations ─── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Blob ambient parallax ── */
      gsap.to(blob1Ref.current, {
        y: -60,
        x: 30,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to(blob2Ref.current, {
        y: 50,
        x: -40,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.5,
      });

      /* ── Floating particles ── */
      particlesRef.current.forEach((p, i) => {
        if (!p) return;
        gsap.to(p, {
          y: gsap.utils.random(-25, 25),
          x: gsap.utils.random(-15, 15),
          opacity: gsap.utils.random(0.3, 0.9),
          duration: gsap.utils.random(3, 6),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.4,
        });
      });

      /* ── Scroll-triggered entrance ── */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(headingRef.current,
        { opacity: 0, y: 50, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 }
      )
        .fromTo(subRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(pillsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 },
          '-=0.4'
        )
        .fromTo(formCardRef.current,
          { opacity: 0, x: 50, filter: 'blur(12px)' },
          { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.9 },
          '-=0.8'
        )
        .fromTo(fieldsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
          '-=0.5'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ─── Button hover ─── */
  const handleBtnEnter = () => {
    gsap.to(btnRef.current, { scale: 1.05, duration: 0.25, ease: 'power2.out' });
  };
  const handleBtnLeave = () => {
    gsap.to(btnRef.current, { scale: 1, duration: 0.25, ease: 'power2.out' });
  };

  /* ─── Input glow helper ─── */
  const inputBase = (field) =>
    `w-full rounded-xl px-4 py-3.5 text-sm font-medium text-white placeholder-white/35 outline-none transition-all duration-300 bg-white/[0.05] border ${errors[field]
      ? 'border-red-500/70 shadow-[0_0_0_3px_rgba(239,68,68,0.15)]'
      : focusedField === field
        ? 'border-red-500/60 shadow-[0_0_0_3px_rgba(180,20,20,0.25),0_0_20px_rgba(180,20,20,0.15)]'
        : 'border-white/10 hover:border-white/20'
    }`;

  /* ─── Particles data ─── */
  const particles = Array.from({ length: 18 }, (_, i) => ({
    width: Math.random() * 4 + 1.5,
    height: Math.random() * 4 + 1.5,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    background: i % 3 === 0
      ? 'rgba(180,20,20,0.6)'
      : i % 3 === 1
        ? 'rgba(255,255,255,0.25)'
        : 'rgba(180,20,20,0.35)',
    opacity: Math.random() * 0.6 + 0.2,
    filter: 'blur(0.5px)',
  }));

  return (
    <>
      {/* ── Keyframe for field error entrance ── */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .contact-select option {
          background: #1a0505;
          color: #fff;
        }
        .contact-select::-webkit-scrollbar { width: 4px; }
        .contact-select::-webkit-scrollbar-track { background: transparent; }
        .contact-select::-webkit-scrollbar-thumb { background: rgba(180,20,20,0.5); border-radius: 9999px; }
      `}</style>

      <section
        id="contact"
        ref={sectionRef}
        data-theme="dark"
        className="relative w-full overflow-hidden py-20 lg:py-18"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 10% 0%, #080000 100%)',
        }}
      >

        {/* ── Main content grid ── */}
        <div className="relative z-10 max-w-full mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-8 items-stretch">

            {/* ════════════════════
                LEFT COLUMN
            ════════════════════ */}
            <div
              ref={leftColRef}
              className="relative flex flex-col overflow-hidden rounded-2xl"
            >
              {/* Heading — top-left inside card */}
              <div className="px-7 pt-8 pb-0">
                <h2
                  ref={headingRef}
                  className="text-4xl sm:text-5xl font-normal text-white leading-[1.1] tracking-tight"
                >
                  Get in Touch
                </h2>
                <p
                  ref={subRef}
                  className="mt-3 mb-3 text-sm text-white/55 leading-relaxed"
                >
                  Let's build something exceptional together<br />
                  Reach out to discuss your next digital project.
                </p>
              </div>

              {/* Image + overlaid pills */}
              <div className="relative flex-1 w-full overflow-hidden bg-[linear-gradient(to_bottom,_#000000_10%,_#3a0000_45%,_#6b0000_100%)]">

                {/* Artboard image — fills the area */}
                <img
                  src={artboardImg}
                  alt="Diwora contact visual"
                  draggable={false}
                  className="w-full h-full object-cover object-center select-none block"
                />

                {/* Gradient scrim so pills stay legible over the image */}
                <div
                  className="absolute inset-x-0 bottom-0 pointer-events-none"
                  style={{
                    height: '45%',
                    background:
                      'linear-gradient(to top, rgba(8,0,0,0.82) 0%, rgba(8,0,0,0.45) 55%, transparent 100%)',
                  }}
                />

                {/* Pills — absolutely over the bottom of the image */}
                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col sm:flex-row gap-2.5 px-4 pb-4">
                  {/* Email pill */}
                  <a
                    ref={(el) => (pillsRef.current[0] = el)}
                    href="mailto:connect@diwora.com"
                    className="group flex-1 flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 cursor-pointer"
                    style={{
                      background: 'rgba(15,5,5,0.55)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(140,15,15,0.55)';
                      e.currentTarget.style.borderColor = 'rgba(220,38,38,0.45)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(15,5,5,0.55)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(180,20,20,0.30)' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="rgba(220,38,38,0.95)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        <polyline points="22,6 12,13 2,6" stroke="rgba(220,38,38,0.95)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-white/45 font-medium mb-0.5 uppercase tracking-wider">Email us</p>
                      <p className="text-xs text-white/80 font-semibold truncate">connect@diwora.com</p>
                    </div>
                    <div className="ml-auto flex-shrink-0">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-white/35 group-hover:text-white/65 transition-colors duration-300">
                        <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </a>

                  {/* Call pill */}
                  <a
                    ref={(el) => (pillsRef.current[1] = el)}
                    href="tel:+919514111996"
                    className="group flex-1 flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 cursor-pointer"
                    style={{
                      background: 'rgba(15,5,5,0.55)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(140,15,15,0.55)';
                      e.currentTarget.style.borderColor = 'rgba(220,38,38,0.45)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(15,5,5,0.55)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(180,20,20,0.30)' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.23 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="rgba(220,38,38,0.95)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-white/45 font-medium mb-0.5 uppercase tracking-wider">Call us</p>
                      <p className="text-xs text-white/80 font-semibold truncate">+91 95141 11996</p>
                    </div>
                    <div className="ml-auto flex-shrink-0">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-white/35 group-hover:text-white/65 transition-colors duration-300">
                        <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* ════════════════════
                RIGHT COLUMN — Form
            ════════════════════ */}
            <div
              ref={formCardRef}
              className="rounded-2xl p-7 sm:p-9"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                boxShadow:
                  '0 0 0 1px rgba(255,255,255,0.04) inset, 0 32px 80px rgba(0,0,0,0.55), 0 0 60px rgba(180,20,20,0.06)',
              }}
            >
              {submitted ? (
                /* ── Success state ── */
                <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(180,20,20,0.18)', border: '1.5px solid rgba(220,38,38,0.4)' }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="rgba(220,38,38,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-sm text-white/50">We'll get back to you within 24 hours.</p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', details: '' }); }}
                    className="mt-2 text-xs text-white/40 hover:text-white/70 underline underline-offset-4 transition-colors duration-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="flex flex-col gap-4">

                    {/* Name */}
                    <div ref={(el) => (fieldsRef.current[0] = el)}>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange('name')}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={inputBase('name')}
                        autoComplete="name"
                      />
                    </div>

                    {/* Email */}
                    <div ref={(el) => (fieldsRef.current[1] = el)}>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="Mail"
                        value={form.email}
                        onChange={handleChange('email')}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={inputBase('email')}
                        autoComplete="email"
                      />
                    </div>

                    {/* Company Name */}
                    <div ref={(el) => (fieldsRef.current[2] = el)}>
                      <input
                        id="contact-company"
                        type="text"
                        placeholder="Company Name"
                        value={form.company}
                        onChange={handleChange('company')}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className={inputBase('company')}
                        autoComplete="organization"
                        aria-required="true"
                        aria-invalid={!!errors.company}
                        aria-describedby={errors.company ? 'company-error' : undefined}
                      />
                      {errors.company && <FieldError msg={errors.company} />}
                    </div>

                    {/* Choose a Service */}
                    <div ref={(el) => (fieldsRef.current[3] = el)}>
                      <label
                        htmlFor="contact-service"
                        className="block text-xs text-white/50 font-semibold uppercase tracking-widest mb-2"
                      >
                        Choose a Service <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="contact-service"
                        value={form.service}
                        onChange={handleChange('service')}
                        onFocus={() => setFocusedField('service')}
                        onBlur={() => setFocusedField(null)}
                        className={`${inputBase('service')} contact-select appearance-none cursor-pointer`}
                        aria-required="true"
                        aria-invalid={!!errors.service}
                        aria-describedby={errors.service ? 'service-error' : undefined}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6 9l6 6 6-6' stroke='rgba(255,255,255,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 14px center',
                          paddingRight: '2.5rem',
                        }}
                      >
                        <option value="" disabled>--- Select Choice ---</option>
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && <FieldError msg={errors.service} />}
                    </div>

                    {/* Project Details */}
                    <div ref={(el) => (fieldsRef.current[4] = el)}>
                      <textarea
                        id="contact-details"
                        placeholder="Enter Project Details"
                        value={form.details}
                        onChange={handleChange('details')}
                        onFocus={() => setFocusedField('details')}
                        onBlur={() => setFocusedField(null)}
                        rows={4}
                        className={`${inputBase('details')} resize-none`}
                        aria-required="true"
                        aria-invalid={!!errors.details}
                        aria-describedby={errors.details ? 'details-error' : undefined}
                      />
                      {errors.details && <FieldError msg={errors.details} />}
                    </div>

                    {/* Submit button */}
                    <div ref={(el) => (fieldsRef.current[5] = el)} className="mt-1">
                      <button
                        ref={btnRef}
                        type="submit"
                        onMouseEnter={handleBtnEnter}
                        onMouseLeave={handleBtnLeave}
                        disabled={submitting}
                        className="relative overflow-hidden px-8 py-3.5 rounded-full text-sm font-bold text-white tracking-wide transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{
                          background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 60%, #7f1d1d 100%)',
                          boxShadow: '0 0 0 1px rgba(220,38,38,0.4), 0 8px 30px rgba(180,20,20,0.40)',
                        }}
                      >
                        {/* Shine sweep */}
                        <span
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background:
                              'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
                            backgroundSize: '200% 100%',
                            animation: submitting ? 'none' : 'btnShine 2.4s ease infinite',
                          }}
                        />
                        <span className="relative z-10 flex items-center gap-2">
                          {submitting ? (
                            <>
                              <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
                                <path d="M12 2a10 10 0 0110 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                              </svg>
                              Sending…
                            </>
                          ) : (
                            'Inquire Now'
                          )}
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── Button shine keyframe ── */}
        <style>{`
          @keyframes btnShine {
            0%   { background-position: 200% center; }
            100% { background-position: -200% center; }
          }
        `}</style>
      </section>
    </>
  );
};

export default Contact;
