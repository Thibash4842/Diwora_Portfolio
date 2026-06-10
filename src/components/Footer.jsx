import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/Dlogo-white-footer.png';
import useScrollAnimations from '../hooks/useScrollAnimations';

/* ─── Flip-link animation ─── */
const FlipLink = ({ children, href, to, className = '' }) => {
  const inner = (
    <>
      <span className="flex items-center gap-2 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute top-full left-0 flex items-center gap-2 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
        {children}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`relative group overflow-hidden inline-flex pb-0.5 ${className}`}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} className={`relative group overflow-hidden inline-flex pb-0.5 ${className}`}>
      {inner}
    </a>
  );
};

/* ─── Shared column heading ─── */
const ColHeading = ({ children }) => (
  <p className="text-xs 2xl:text-lg font-semibold uppercase tracking-[0.25em] text-white/40 mb-5">
    {children}
  </p>
);

/* ─── Footer ─── */
const Footer = () => {
  const footerRef = useRef(null);
  useScrollAnimations(footerRef);

  const quickLinks = [
    { label: 'About', to: '/about' },
    { label: 'Works', to: '/works' },
    { label: 'Careers', to: '/careers' },
    { label: 'Contact us', href: '#contact' },
  ];

  const services = [
    { label: 'Advertising', to: '/advertising' },
    { label: 'Brand Visual', href: '#' },
    { label: 'Motion Video', href: '#' },
    { label: 'Digital Marketing', href: '#' },
    { label: 'Ideation & Scripting', href: '#' },
    { label: 'Website Development', href: '#' },
  ];

  const legalLinks = [
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ];

  const socialLinks = [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Youtube', href: '#' },
  ];

  return (
    <footer
      ref={footerRef}
      data-theme="dark"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_#1a0505_0%,_#0d0202_45%,_#050000_55%,_#000000_100%)]"
    >

      {/* ═══════════════════════════════════════
          MAIN CONTENT  — matches site container
      ═══════════════════════════════════════ */}
      <div className="relative z-10 max-w-full mx-auto px-6 md:px-12 lg:px-20 pt-10 pb-0">

        {/* ── 4-Column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8" data-animate="fade-up" data-animate-stagger="0.12">

          {/* ── Col 1: Head Office ── */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <ColHeading><b className="text-white">Head Office</b></ColHeading>

            {/* Address */}
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="flex-shrink-0 mt-0.5 text-white/40 text-sm 2xl:text-lg" />
              <p className="text-sm 2xl:text-lg text-white/60 leading-relaxed">
                Door No, Primus Building,<br className="block sm:hidden" />
                SP–7A, South Phase,<br />
                Guindy Industrial Estate,<br className="block sm:hidden" />
                SIDCO Industrial Estate,<br />
                Guindy, Chennai,<br className="block sm:hidden" />
                Tamil Nadu 600032
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="flex-shrink-0 text-white/40 text-sm 2xl:text-lg" />
              <a
                href="tel:+919514111996"
                className="text-sm 2xl:text-lg text-white/60 hover:text-white transition-colors duration-300"
              >
                +91 95141 11996
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <FaEnvelope className="flex-shrink-0 text-white/40 text-sm 2xl:text-lg" />
              <a
                href="mailto:connect@diwora.com"
                className="text-sm 2xl:text-lg text-white/60 hover:text-white transition-colors duration-300"
              >
                connect@diwora.com
              </a>
            </div>
          </div>

          {/* ── Col 2: Navigation ── */}
          <div className='lg:col-span-1'>
            <ColHeading><b className="text-white">Navigation</b></ColHeading>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ label, href, to }) => (
                <li key={label}>
                  <FlipLink
                    href={href}
                    to={to}
                    className="text-sm 2xl:text-lg font-medium text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {label}
                  </FlipLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Services ── */}
          <div className='lg:col-span-1'>
            <ColHeading><b className="text-white">Services</b></ColHeading>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.label}>
                  <FlipLink
                    to={s.to}
                    href={s.href}
                    className="text-sm 2xl:text-lg font-medium text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {s.label}
                  </FlipLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Legal ── */}
          <div className='lg:col-span-1'>
            <ColHeading><b className="text-white">Legal</b></ColHeading>
            <ul className="flex flex-col gap-3">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <FlipLink
                    href={href}
                    className="text-sm 2xl:text-lg font-medium text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {label}
                  </FlipLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Copyright + Social bar ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-10 pb-8 border-t border-white/10 pt-6" data-animate="fade-up" data-animate-delay="0.3">
          <span className="text-xs 2xl:text-lg text-white tracking-wide">
            Copyright © 2026 Diwora. All rights reserved
          </span>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {socialLinks.map(({ label, href }) => (
              <FlipLink
                key={label}
                href={href}
                className="text-xs 2xl:text-lg font-medium text-white hover:text-white transition-colors duration-300 tracking-wide"
              >
                {label}
              </FlipLink>
            ))}
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-full mx-auto px-6 md:px-12 lg:px-20">
        <div className="h-px bg-white/10" />
      </div>

      {/* ── Footer Logo ── */}
      <div className="max-w-full mx-auto px-6 md:px-12 lg:px-20 pb-4">
        <img
          src={logo}
          alt="Diwora"
          draggable={false}
          className="w-full h-auto object-contain select-none"
        />
      </div>
    </footer>
  );
};

export default Footer;
