import CompactSocialProof from './CompactSocialProof';
import { COMPANY_NAME } from '../utils/constants';
import HeroStats from './HeroStats';
import ServiceAreasBadge from './ServiceAreasBadge';
import ProblemAgitation from './ProblemAgitation';
import WhyChooseUs from './WhyChooseUs';
import HeroComparisonCards from './HeroComparisonCards';
import MethodSection from './MethodSection';
import GuainaLiquidaDetail from './GuainaLiquidaDetail';
import { MessageCircle } from 'lucide-react';

// Carica l'immagine presente nella cartella images
import heroMainImg from '../assets/images/heroimage.jpg';

function Hero() {
    return (
        <section className="relative bg-white overflow-hidden w-full">
            {/* Background Sfumato molto sottile */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-50/60 blur-3xl"></div>
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-cyan-50/60 blur-3xl"></div>
            </div>

            <div className="w-full bg-white px-4 md:px-12 lg:px-24 pb-6 pt-1 md:py-20 lg:py-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* --- COLONNA SINISTRA --- */}
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full">
                        
                        {/* Service Areas Badge - Moved above H1 */}
                        <div className="mb-4 w-full flex justify-center lg:justify-start">
                            <ServiceAreasBadge />
                        </div>

                        <h1 className="text-center lg:text-left font-black tracking-tighter leading-[0.9] md:leading-[0.85] flex flex-col gap-y-4">
                            <span className="relative inline-block">
                                <span className="relative z-10 text-4xl md:text-8xl text-slate-900 uppercase">
                                    STOP <span className="text-red-600">INFILTRAZIONI</span> <br/>
                                    <span className="text-3xl md:text-7xl">D'ACQUA DAL TERRAZZO.</span>
                                </span>
                                <span className="absolute inset-0 bg-yellow-300 -rotate-1 z-0"></span>
                            </span>
                            
                            <span className="text-2xl md:text-5xl text-slate-800 uppercase leading-none mt-4">
                                Impermeabilizzazione con <br/>
                                <span className="relative inline-block mt-2">
                                    <span className="relative z-10 text-slate-900">Guaina Liquida</span>
                                    <span className="absolute bottom-2 left-0 w-full h-3 md:h-6 bg-yellow-400/30 -rotate-1 -z-0"></span>
                                </span>
                                <span className="ml-2 text-red-600">in 2-3 giorni</span>
                            </span>

                            {/* Prezzo - Design ad alto impatto (moved into overlay) */}
                            <div className="hidden"></div>
                        </h1>

                        {/* Immagine sotto titolo - Visibile su mobile */}
                        <div className="w-full lg:hidden mt-8 rounded-2xl overflow-hidden shadow-lg border-4 border-white relative group">
                            <img
                                src={heroMainImg}
                                alt={`Impermeabilizzazione professione terrazzi ${COMPANY_NAME}`}
                                className="w-full h-auto object-cover max-h-[350px]"
                                loading="eager"
                            />
                            {/* OVERLAY MOBILE: Prezzo e Rating */}
                            <div className="absolute inset-0 flex flex-col justify-start p-4 z-20">
                                <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/50 flex flex-col w-full transform transition-transform group-hover:scale-[1.02]">
                                    <div className="flex justify-between items-end border-b border-white/30 pb-3 mb-3">
                                        <div className="flex flex-col">
                                            <span className="text-slate-900 text-xs font-black uppercase tracking-widest mb-1 drop-shadow-sm">Lavoro completo</span>
                                            <div className="flex items-center gap-1.5">
                                                <span className="text-xs italic font-semibold text-slate-800 uppercase drop-shadow-sm">da</span>
                                                <span className="text-4xl font-black text-red-600 tracking-tighter leading-none drop-shadow-md">
                                                    €30<span className="text-xl ml-0.5">/MQ</span>
                                                </span>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight drop-shadow-sm">21 anni <br/>di attività</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sottotitolo: Pronto intervento rapido */}
                        <div className="max-w-2xl mx-auto lg:mx-0 mt-8 text-left border-l-4 border-[#ef4444] pl-6 py-3 bg-slate-50 rounded-r-2xl">
                            <p className="text-[16px] md:text-[20px] text-slate-700 leading-tight font-bold italic">
                                ⚡ Pronto intervento rapido su tetti, guaine e balconi. 
                                <span className="text-slate-900"> Con e senza demolizione</span> per bloccare le infiltrazioni. 
                                <br className="hidden md:block" />
                                <span className="bg-blue-100 text-blue-800 px-1">Preventivo chiaro</span> e intervento immediato.
                            </p>
                        </div>

                        {/* Pulsante CTA - Stile Aggressivo e D'Impatto */}
                        <div className="flex justify-center lg:justify-start mt-10 mb-3 relative w-full gap-4 flex-col sm:flex-row">
                            <a
                                href="tel:+393342221212"
                                onClick={(e) => {
                                    if (typeof window.gtag !== 'undefined') {
                                        window.gtag('event', 'conversion', {
                                            'send_to': 'AW-XXXXXXXXX/YYYYYYYYYYYY',
                                        });
                                    }
                                }}
                                className="
                                    group relative inline-flex items-center justify-center gap-3
                                    bg-[#facc15] hover:bg-[#eab308]
                                    px-10 py-6 rounded-xl
                                    text-slate-900 font-black uppercase tracking-tighter text-xl md:text-2xl
                                    transition-all duration-200
                                    shadow-[0_12px_0_0_rgba(0,0,0,0.3),0_20px_25px_-5px_rgba(250,204,21,0.4)]
                                    hover:shadow-[0_6px_0_0_rgba(0,0,0,0.3),0_15px_20px_-5px_rgba(250,204,21,0.5)]
                                    hover:-translate-y-1
                                    active:translate-y-1
                                    active:shadow-[0_2px_0_0_rgba(0,0,0,0.3)]
                                    border-none
                                    relative
                                "
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                CHIAMA ORA
                            </a>
                        </div>
                        
                        {/* Frasi rassicuranti sotto la CTA */}
                        <div className="flex flex-col items-center lg:items-start justify-center gap-1 mt-3 text-slate-500 text-sm font-medium">
                            <div className="flex items-center justify-center gap-3">
                                <span className="flex items-center gap-1"><svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Zero Impegno</span>
                                <span className="flex items-center gap-1"><svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Preventivo Gratuito</span>
                                <span className="flex items-center gap-1"><svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Intervento Rapido</span>
                            </div>
                        </div>

                        {/* Micro Info Sotto il Bottone */}
                        <div className="hidden"></div>
                    </div>

                    {/* --- COLONNA DESTRA (Immagine Desktop Only) --- */}
                    <div className="hidden lg:block relative">
                        {/* Pattern decorativo */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 opacity-20"
                            style={{ backgroundImage: 'radial-gradient(#2563eb 2px, transparent 2px)', backgroundSize: '24px 24px' }}>
                        </div>

                        <div className="relative z-10 group">
                            {/* Immagine con contenitore per posizionamento relativo */}
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white transform transition-transform duration-700 group-hover:scale-[1.01]">
                                <img
                                    src={heroMainImg}
                                    alt={`Impermeabilizzazione professione terrazzi ${COMPANY_NAME}`}
                                    className="w-full h-auto object-cover max-h-[600px]"
                                    loading="eager"
                                />

                                {/* OVERLAY DESKTOP: Prezzo e Rating posizionato in basso dentro l'immagine */}
                                <div className="absolute inset-0 flex flex-col justify-start p-6 z-20">
                                    <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/50 flex flex-col w-full max-w-sm mr-auto transform transition-transform group-hover:translate-y-2">
                                        <div className="flex justify-between items-end border-b border-white/30 pb-4 mb-4">
                                            <div className="flex flex-col">
                                                <span className="text-slate-900 text-sm font-black uppercase tracking-widest mb-1 drop-shadow-sm">Lavoro completo</span>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm italic font-semibold text-slate-800 uppercase tracking-tight drop-shadow-sm">da</span>
                                                    <div className="relative inline-block group/price">
                                                        <span className="relative z-10 text-5xl font-black text-red-600 tracking-tighter leading-none drop-shadow-md">
                                                            €30<span className="text-2xl ml-1">/MQ</span>
                                                        </span>
                                                        <div className="absolute -bottom-1 -right-2 w-[110%] h-3 bg-yellow-300 -rotate-2 -z-0"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between opacity-90">
                                            <div className="flex items-center gap-3">
                                                {/* Google Logo SVG */}
                                                <svg className="w-7 h-7 drop-shadow-sm flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M23.745 12.27c0-.79-.1-1.54-.25-2.05H12v3.72h6.84c-.15.96-.74 1.78-1.54 2.34v2.04h2.45c1.77-1.63 2.75-4.02 2.75-6.05z" fill="#4285F4"/>
                                                    <path d="M12 24c2.05 0 3.71-.67 4.95-1.81l-2.45-2.04c-.67.44-1.54.69-2.5.69-1.93 0-3.56-1.29-4.15-3.06H5.07v2.07A7.02 7.02 0 0 0 12 24z" fill="#34A853"/>
                                                    <path d="M7.85 14.28c-.15-.44-.23-.91-.23-1.41s.08-.97.23-1.41V9.39H5.07A6.992 6.992 0 0 0 4 12c0 1.08.26 2.1.74 3.02l2.85-2.22.26-.52z" fill="#FBBC04"/>
                                                    <path d="M12 4.75c1.09 0 2.08.37 2.85.99l2.13-2.13C15.69 2.56 14.06 2 12 2 7.7 2 3.99 4.48 2.74 7.98l2.85 2.22c.59-1.77 2.22-3.06 4.15-3.06.59 0 1.16.1 1.7.29.27.09.53.21.76.35l.3.27v-.3z" fill="#EA4335"/>
                                                </svg>
                                                
                                                {/* 5 Stars */}
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} className="w-5 h-5 text-[#facc15]" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>
                                            <span className="text-[12px] font-bold text-slate-800 uppercase tracking-tight text-right drop-shadow-sm">21 anni<br/>di attività</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Comparison Cards Section - Mounted immediately below Hero content */}
            <div className="bg-white pb-12">
                <HeroComparisonCards />
            </div>
        </section>
    );
}

export default Hero;