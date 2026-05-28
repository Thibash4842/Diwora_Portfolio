import { FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const FlipLink = ({ children, href, className = "", underline = false }) => {
  return (
    <a
      href={href}
      className={`relative group overflow-hidden inline-flex pb-1 ${className}`}
    >
      <span className="relative flex items-center gap-2 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute top-full left-0 flex items-center gap-2 text-white transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
        {children}
      </span>
      {underline && (
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-500 ease-out z-10" />
      )}
    </a>
  );
};


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Works', href: '#works' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact us', href: '#contact' },
  ];

  const services = [
    'Brand Visual',
    'Motion & Video',
    'Content & Digital',
    'Ideation & Scripting',
  ];

  const contactInfo = [
    { type: 'address', label: 'Address', value: 'Door No, Primus Building, SP-7A, South Phase, Guindy Industrial Estate, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032' },
    { type: 'phone', label: 'Phone', value: '+91 95141 11996' },
    { type: 'email', label: 'Email', value: 'connect@diwora.com' },
  ];

  const socialLinks = [
    { name: 'Instagram', type: 'instagram', url: '#' },
    { name: 'Facebook', type: 'facebook', url: '#' },
    { name: 'Whatsapp', type: 'whatsapp', url: '#' },
    { name: 'LinkedIn', type: 'linkedin', url: '#' },
    { name: 'YouTube', type: 'youtube', url: '#' },
  ];

  return (
    <footer data-theme="dark" className="relative bg-gradient-to-b from-slate-950 to-black border-t border-white/10">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-30 w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white shadow-lg hover:shadow-red-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Back to top"
        title="Back to top"
      >
        <FaArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Divider */}
        <div className="mb-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Header Section with Logo and Tagline */}
        <div className="mb-12 sm:mb-16 text-center">
          <h3 className="text-6xl sm:text-7xl font-bold text-white/15 mb-8 sm:mb-10 tracking-wider">
            Diwora
          </h3>
          <p className="text-white text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            We craft powerful ideas into impactful digital experiences. From branding to digital marketing, we help businesses grow with creativity and strategy.
          </p>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-12">
          {/* Contact us */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact us</h4>
            <ul className="space-y-4">
              {contactInfo.map((info) => (
                <li key={info.label} className="flex gap-3">
                  <span className="text-xl flex-shrink-0 text-white/60">
                    {info.type === 'address' && <FaMapMarkerAlt />}
                    {info.type === 'phone' && <FaPhone />}
                    {info.type === 'email' && <FaEnvelope />}
                  </span>
                  <div>
                    <p className="text-white/80 text-sm leading-relaxed hover:text-white transition-colors duration-300 cursor-pointer">
                      {info.value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold mb-6">Socials</h4>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <FlipLink
                    href={social.url}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    <span className="text-lg flex-shrink-0">
                      {social.type === 'instagram' && <FaInstagram />}
                      {social.type === 'facebook' && <FaFacebook />}
                      {social.type === 'whatsapp' && <FaWhatsapp />}
                      {social.type === 'linkedin' && <FaLinkedin />}
                      {social.type === 'youtube' && <FaYoutube />}
                    </span>
                    {social.name}
                  </FlipLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <FlipLink
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm"
                  // underline={true}
                  >
                    {link.label}
                  </FlipLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <FlipLink
                    href="#"
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm"
                  // underline={true}
                  >
                    {service}
                  </FlipLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>©2025 Diwora. All rights reserved.</p>
          <div className="flex gap-6">
            <FlipLink href="#" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </FlipLink>
            <FlipLink href="#" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </FlipLink>
          </div>
        </div>
      </div>

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;
