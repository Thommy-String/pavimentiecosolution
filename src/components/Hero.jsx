import { PHONE_NUMBER } from '../utils/constants';
import ServiceAreasBadge from './ServiceAreasBadge';
import { Phone } from 'lucide-react';
import WorksCarousel from './WorksCarousel';
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
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <p className="text-sm text-white/80 font-medium italic">
              Più di 500 pavimenti posati
            </p>
          </div>

          {/* ── H1 ── */}
          <h1 className="font-black tracking-tight leading-relaxed mb-5 max-w-4xl">
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
              Goditi il Tuo{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-emerald-400">Nuovo Pavimento</span>
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-emerald-400/20 rounded-sm -rotate-1"></span>
              </span>
              {' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-orange-400">Senza Impazzire</span>
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-orange-400/20 rounded-sm -rotate-1"></span>
              </span>
              {' '}tra Muratori, Idraulici e Falegnami.
            </span>
            <span className="block text-lg sm:text-xl md:text-2xl text-white/75 font-semibold mt-4 leading-snug">
              Servizio{' '}
              <span className="text-yellow-300 text-xl font-black">100% Chiavi in Mano</span>
            </span>
          </h1>

          {/* ── Carosello Lavori ── */}
          <div className="w-screen relative left-1/2 -translate-x-1/2 mb-8">
            <WorksCarousel />
          </div>

          {/* ── Google Review Card ── */}
          <div className="w-full max-w-2xl mb-8">
            <div className="bg-white/[0.08] backdrop-blur-lg border border-white/15 rounded-2xl overflow-hidden">
              {/* Top bar — Google branding */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.06] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-[11px] font-semibold text-white/70 uppercase tracking-wider">Recensione Google</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wide">Verificata</span>
                </div>
              </div>

              {/* Review body */}
              <div className="p-5 md:p-6">
                <div className="flex gap-4 items-start">
                  {/* Big quotation mark */}

                  <div className="flex-1 min-w-0">
                    {/* Review text */}
                    <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 text-left">
                      <span className="text-white font-semibold">Tutto gestito da loro,</span> nuovo massetto, posa gres porcellanato che avevo già acquistato e taglio delle porte. <span className="text-white font-semibold">4 giorni di posa e casa pulita.</span> Prezzo ottimo. Consiglio vivamente...
                    </p>

                    {/* Author row */}
                    <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        {/* Avatar photo */}
                        <img
                          src="https://img.freepik.com/premium-photo/happy-senior-man-casual-polo-shirt-with-backpack-standing-beach-looking-camera-smiling_465191-10379.jpg?w=360"
                          alt="Giuseppe T."
                          className="w-9 h-9 rounded-full object-cover border border-emerald-300/50 shrink-0"
                        />
                        <div>
                          <span className="font-bold text-white text-sm block leading-tight">Giuseppe Testa</span>
                          <span className="text-[11px] text-white/50 font-medium">Milano - San Siro</span>
                        </div>
                      </div>
                      {/* Stars */}
                      <div className="flex items-center gap-0.5 shrink-0">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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