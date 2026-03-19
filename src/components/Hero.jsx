import { COMPANY_NAME } from '../utils/constants';
import MethodSection from './MethodSection';
import GuainaLiquidaDetail from './GuainaLiquidaDetail';
import { MessageCircle } from 'lucide-react';
import ServiceAreasBadge from './ServiceAreasBadge';

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
                        
                        {/* Top Badge */}
                        <div className="inline-flex flex-col items-center justify-center gap-4 mb-6 w-full lg:w-auto">
                            <ServiceAreasBadge />
                        </div>

                        <h1 className="text-center lg:text-left font-black tracking-tighter leading-[0.9] md:leading-[0.85] flex flex-col gap-y-4">
                            <span className="relative inline-block">
                                <span className="relative z-10 text-3xl md:text-8xl text-slate-900 uppercase">
                                     <span className="text-red-600">STOP INFILTRAZIONI 💦</span> <br/>
                                    
                                </span>
                                <span className="absolute inset-0 bg-yellow-300 -rotate-1 z-0"></span>
                            </span>
                            
                            <span className="text-2xl md:text-5xl text-slate-800 uppercase leading-none mt-4">
                                Impermeabilizzazione  <br/>
                                <span className="relative inline-block mt-2">
                                    <span className="relative z-10 text-slate-900">terrazzi, balconi, tetti</span>
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
                            {/* OVERLAY MOBILE: Layout Organizzato al Centro/Alto */}
                            <div className="absolute inset-0 flex flex-col items-center pt-6 p-4 z-20">
                                <div className="bg-white/30 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/40 flex flex-col items-center w-fit max-w-[90%] transform transition-transform group-hover:scale-[1.02]">
                                    {/* Prezzo in alto al centro */}
                                    <div className="flex flex-col items-center mb-3 text-center">
                                        <span className="text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] mb-1 drop-shadow-sm">Lavoro completo</span>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-[10px] italic font-bold text-slate-800 uppercase drop-shadow-sm">da</span>
                                            <span className="text-4xl font-black text-red-600 tracking-tighter leading-none drop-shadow-md">
                                                €30<span className="text-lg ml-0.5">/MQ</span>
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Linea sottile separatrice */}
                                    <div className="w-full h-px bg-white/30 mb-3"></div>

                                    {/* Google e Anni sotto */}
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="flex items-center gap-2 bg-white/40 px-3 py-1.5 rounded-full">
                                            <img 
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png" 
                                                alt="Google Logo" 
                                                className="w-4 h-4 flex-shrink-0"
                                            />
                                            <div className="flex gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="w-3 h-3 text-[#facc15]" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-bold text-white uppercase tracking-widest drop-shadow-sm">21 anni di attività</span>
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

                                {/* OVERLAY DESKTOP: Layout Centrale Organizzato */}
                                <div className="absolute inset-0 flex flex-col items-center pt-8 p-6 z-20">
                                    <div className="bg-white/30 backdrop-blur-md p-8 rounded-[2.5rem] shadow-2xl border border-white/40 flex flex-col items-center w-fit transform transition-transform group-hover:translate-y-2">
                                        {/* Prezzo in alto al centro */}
                                        <div className="flex flex-col items-center mb-6 text-center">
                                            <span className="text-white text-sm font-black uppercase tracking-[0.3em] mb-2 drop-shadow-sm">Lavoro completo</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm italic font-bold text-slate-800 uppercase tracking-tight drop-shadow-sm">da</span>
                                                <div className="relative inline-block group/price">
                                                    <span className="relative z-10 text-6xl font-black text-red-600 tracking-tighter leading-none drop-shadow-md">
                                                        €30<span className="text-2xl ml-1">/MQ</span>
                                                    </span>
                                                    <div className="absolute -bottom-1 -right-2 w-[110%] h-3 bg-yellow-300 -rotate-2 -z-0"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Linea sottile separatrice */}
                                        <div className="w-32 h-px bg-white/40 mb-6"></div>

                                        {/* Google Logo, Stars and Activity */}
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="flex items-center gap-3 bg-white/40 px-4 py-2 rounded-full border border-white/20">
                                                <img 
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png" 
                                                    alt="Google Logo" 
                                                    className="w-6 h-6 flex-shrink-0"
                                                />
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} className="w-5 h-5 text-[#facc15]" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>
                                            <span className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] drop-shadow-sm">21 Anni di Attività</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-full bg-slate-50 py-12 lg:py-16 relative z-10 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Questo componente è stato rimosso in quanto non necessario al momento */}
                    {/* <HeroComparisonCards /> */}
                </div>
            </div>
            
        </section>
    );
}

export default Hero;