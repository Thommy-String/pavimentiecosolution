import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react'; // Cambio Phone con MessageCircle per WhatsApp
import { COMPANY_NAME, PHONE_NUMBER } from '../utils/constants';
import logoImage from '../assets/logo/eco-solutions-logo-.jpeg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Modifica: Header sempre visibile, ma non sticky (position: absolute)
  const location = useLocation();

  // 1. Chiudi il menu quando cambia la rotta (opzionale se singola pagina)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <style>
        {`
          .header-nav {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 50;
          }
        `}
      </style>

      <header className="header-nav bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            
            {/* Logo e Tagline */}
            <div className="flex items-center gap-3 md:gap-4">
              <Link to="/" className="flex-shrink-0 group">
                <img 
                  src={logoImage} 
                  alt={COMPANY_NAME} 
                  className="h-12 w-12 md:h-16 md:w-16 object-contain rounded-xl shadow-sm border border-slate-100 group-hover:scale-105 transition-transform"
                />
              </Link>
              <div className="flex flex-col border-l-2 border-slate-100 pl-3 md:pl-4">
                <span className="text-lg md:text-xl font-black text-slate-900 leading-tight tracking-tighter">
                  Ecosolution
                </span>
                <span className="text-[10px] md:text-xs font-medium text-slate-600 uppercase tracking-[-0.02em]">
                  Specialista in impermeabilizzazioni
                </span>
              </div>
            </div>

            {/* Desktop & Mobile CTA - Giallo stile Hero Semplificato */}
            <div className="flex items-center">
              <a
                href={`https://wa.me/${PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 text-slate-900 border-2 border-slate-900/10 hover:border-slate-900/20 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-bold uppercase tracking-tight text-[11px] md:text-sm transition-all hover:bg-slate-50"
              >
                <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-600" />
                <span>Preventivo su Whatsapp</span>
              </a>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}

export default Header;