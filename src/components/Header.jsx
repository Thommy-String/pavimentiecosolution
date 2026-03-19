import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_NAME } from '../utils/constants';
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
          <div className="flex items-center h-20 md:h-24">
            
            {/* Logo e Info Aziendali - Espanso */}
            <div className="flex items-center gap-4 md:gap-6 w-full">
              <Link to="/" className="flex-shrink-0 group">
                <img 
                  src={logoImage} 
                  alt={COMPANY_NAME} 
                  className="h-14 w-14 md:h-20 md:w-20 object-contain rounded-2xl shadow-sm border border-slate-100 group-hover:scale-105 transition-transform"
                />
              </Link>
              <div className="flex flex-col border-l-2 border-slate-200 pl-4 md:pl-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl md:text-3xl font-black text-slate-900 leading-none tracking-tighter uppercase">
                    Ecosolution
                  </span>
                  <span className="hidden md:inline-block text-[10px] font-black bg-blue-600 text-white px-2 py-0.5 rounded uppercase tracking-widest">
                    Ditta Edile
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mt-1">
                  <span className="text-[11px] md:text-sm font-bold text-slate-600 uppercase tracking-widest">
                    Ditta Edile - Impermeabilizzazioni
                  </span>
                  <span className="hidden md:block w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="text-[9px] md:text-xs font-semibold text-blue-600 uppercase tracking-tight">
                    Milano e tutta la Lombardia
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}

export default Header;