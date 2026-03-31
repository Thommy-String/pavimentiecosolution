import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_NAME, PHONE_NUMBER } from '../utils/constants';
import logoImage from '../assets/logo/MRK-Ecosolution-logo.jpeg';
import { Phone } from 'lucide-react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-2xl shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">

          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={logoImage}
              alt={COMPANY_NAME}
              className="h-12 w-auto md:h-16 object-contain transition-opacity duration-300 group-hover:opacity-70"
            />
          </Link>

          {/* Nav links — only desktop, Apple style */}
          <nav className="hidden md:flex items-center gap-8">
            {['Serramenti', 'Materiali', 'Metodo', 'Contatti'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[13px] text-[#1d1d1f]/70 hover:text-[#1d1d1f] font-normal tracking-wide transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
            onClick={() => {
              if (typeof window.gtag_report_conversion === 'function') {
                window.gtag_report_conversion();
              }
            }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1d1d1f] text-white text-[13px] font-medium hover:bg-[#1d1d1f]/90 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            <Phone className="w-3.5 h-3.5" strokeWidth={2.5} />
            <span className="hidden sm:inline">Preventivo</span>
            <span className="sm:hidden">Chiama</span>
          </a>

        </div>
      </div>
    </header>
  );
}

export default Header;
