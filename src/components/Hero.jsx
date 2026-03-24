import { PHONE_NUMBER } from '../utils/constants';
import ServiceAreasBadge from './ServiceAreasBadge';
import ServicesChips from './ServicesChips';
import { Phone } from 'lucide-react';

import heroMainImg from '../assets/images/heroImage.jpg';

function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[70vh] md:min-h-[75vh] flex items-center justify-center">
      {/* ── Background ── */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={heroMainImg}
          alt="Pavimento moderno posato a regola d'arte"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30"></div>
      </div>

      {/* ── Content ── */}
      <div className="w-full px-4 md:px-12 lg:px-24 py-8 md:py-10 lg:py-12 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

          {/* Badge regione */}
          <div className="mb-5">
            <ServiceAreasBadge />
          </div>

          {/* ── Social proof stars ── */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="text-sm text-white/80 font-medium italic">
              Più di 500 pavimenti posati
            </p>
          </div>

          {/* ── H1 ── */}
          <h1 className="font-black tracking-tight leading-relaxed mb-5 max-w-4xl">
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
              Goditi il Tuo Nuovo Pavimento{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-emerald-400">Senza Impazzire</span>
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-emerald-400/20 rounded-sm -rotate-1"></span>
              </span>
              {' '}tra Muratori, Idraulici e Falegnami.
            </span>
            <span className="block text-lg sm:text-xl md:text-2xl text-white/85 font-semibold mt-4 leading-snug">
              Servizio{' '}
              <span className="text-yellow-300 font-black">100% Chiavi in Mano</span>: unico referente.
            </span>
          </h1>

          {/* ── Services Chips ── */}
          <ServicesChips />

          {/* ── CTA Button ── */}
          <div className="flex flex-col items-center gap-4 w-full max-w-xl">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
              onClick={() => {
                if (typeof window.gtag_report_conversion === 'function') {
                  window.gtag_report_conversion();
                }
              }}
              className="
                group relative inline-flex items-center justify-center gap-3 w-full
                bg-emerald-500 hover:bg-emerald-600
                px-8 py-5 rounded-2xl
                text-white font-extrabold uppercase tracking-tight
                transition-all duration-200
                shadow-[0_8px_0_0_rgba(5,150,105,1),0_16px_30px_-6px_rgba(16,185,129,0.45)]
                hover:shadow-[0_4px_0_0_rgba(5,150,105,1),0_12px_20px_-4px_rgba(16,185,129,0.5)]
                hover:-translate-y-0.5
                active:translate-y-1
                active:shadow-[0_2px_0_0_rgba(5,150,105,1)]
                text-lg md:text-xl
              "
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
              <span>Chiama per un preventivo</span>
            </a>

            {/* Rassicurazioni sotto CTA */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs md:text-sm text-white/70 font-medium">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Nessun Obbligo di Acquisto
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Sopralluogo Gratuito
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Tutti i giorni 7:00–20:00
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;