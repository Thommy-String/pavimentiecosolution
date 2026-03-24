import React from 'react';
import { Camera, Phone } from 'lucide-react';
import { PHONE_NUMBER } from '../utils/constants';

const ScenarioSolutionsSection = () => {
    return (
        <section className="relative z-10 py-24 bg-slate-50 overflow-hidden w-screen -ml-[calc((100vw-100%)/2)]">
            <div className="w-full">
                <div className="w-full text-left">
                    {/* Header Principale */}
                    <div className="mb-16 px-8 md:px-12 lg:px-20">
                        <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-[0.9]">
                            Non serve <span className="text-emerald-500">impazzire</span> per un
                            <br/>
                            <span className="relative inline-block">
                                <span className="relative z-10">nuovo pavimento</span>
                                <span className="absolute bottom-2 left-0 w-full h-4 bg-emerald-400/30 -rotate-1 -z-0"></span>
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-1 space-y-8">
                        {/* Approfondimento Testuale a tutta larghezza */}
                        <div className="space-y-8 text-xl text-slate-600 leading-relaxed max-w-5xl text-left px-8 md:px-12 lg:px-20">
                            <p className="text-2xl font-bold text-slate-900">
                                <span className="text-emerald-500">Rinnova i tuoi ambienti senza lo stress</span> di dover fare da "capocantiere" tra idraulici, falegnami e calcinacci.
                                <br/><br/>
                                Quando decidi di cambiare i pavimenti, l'entusiasmo svanisce subito pensando al caos: <span className="bg-red-100 px-1 text-red-700 font-bold">giorni di polvere in ogni angolo, termosifoni e sanitari da smontare, porte che poi non si chiudono più</span>, e l'ansia infinita di dover coordinare ditte diverse che spesso si danno la colpa a vicenda per i ritardi.
                                <br/><br/>
                                Noi abbiamo <span className="italic font-bold">cambiato le regole.</span> Essendo un'impresa edile completa, <span className="text-emerald-500 font-bold">cancelliamo questo problema alla radice.</span> Che tu voglia incollare un nuovo gres direttamente sopra le vecchie piastrelle (in pochissimi millimetri e senza demolire), o che serva rifare da zero tutto il massetto, <span className="font-bold">le nostre squadre interne gestiscono l'intero processo.</span> Tagliamo le porte, adattiamo gli impianti idraulici e portiamo via noi le macerie.
                                <br/><br/>
                                <span className="bg-green-100 px-1 text-green-700 font-bold">Un unico referente, un prezzo bloccato al centesimo e la tua casa consegnata pulita e pronta da vivere.</span>
                            </p>
                            
                            {/* CTA - WhatsApp con foto + Phone */}
                            <div className="mt-12 flex flex-col md:flex-row gap-4 relative max-w-3xl w-full">
                                <a
                                    href={`https://wa.me/39334222121212?text=${encodeURIComponent('Ciao! Vi invio una foto dei miei ambienti per un sopralluogo gratuito. Vorrei cambiare i pavimenti senza troppo caos.')}`}
                                    onClick={() => {
                                        if (typeof window.gtag_report_conversion === 'function') {
                                            window.gtag_report_conversion();
                                        }
                                    }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        group relative inline-flex flex-col items-center justify-center gap-1 flex-1
                                        bg-[#25D366] hover:bg-[#20bd5a]
                                        px-8 py-5 rounded-xl
                                        text-white font-black uppercase tracking-tighter
                                        transition-all duration-200
                                        shadow-[0_12px_0_0_rgba(0,0,0,0.3),0_20px_25px_-5px_rgba(37,211,102,0.4)]
                                        hover:shadow-[0_6px_0_0_rgba(0,0,0,0.3),0_15px_20px_-5px_rgba(37,211,102,0.5)]
                                        hover:-translate-y-1
                                        active:translate-y-1
                                        active:shadow-[0_2px_0_0_rgba(0,0,0,0.3)]
                                        border-none
                                        relative
                                    "
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <Camera className="w-5 h-5" strokeWidth={2.5} />
                                        <span className="text-base md:text-lg tracking-[-0.07em]">Inviaci le foto</span>
                                    </div>
                                    <p className="text-[10px] md:text-xs font-medium text-white/80 italic">
                                        Su WhatsApp
                                    </p>
                                </a>

                                <a
                                    href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                                    onClick={() => {
                                        if (typeof window.gtag_report_conversion === 'function') {
                                            window.gtag_report_conversion();
                                        }
                                    }}
                                    className="
                                        group relative inline-flex flex-col items-center justify-center gap-1 flex-1
                                        bg-emerald-500 hover:bg-emerald-600
                                        px-8 py-5 rounded-xl
                                        text-white font-black uppercase tracking-tighter
                                        transition-all duration-200
                                        shadow-[0_12px_0_0_rgba(5,150,105,1),0_20px_25px_-5px_rgba(16,185,129,0.4)]
                                        hover:shadow-[0_6px_0_0_rgba(5,150,105,1),0_15px_20px_-5px_rgba(16,185,129,0.5)]
                                        hover:-translate-y-1
                                        active:translate-y-1
                                        active:shadow-[0_2px_0_0_rgba(5,150,105,1)]
                                        border-none
                                        relative
                                    "
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <Phone className="w-5 h-5" strokeWidth={2.5} />
                                        <span className="text-base md:text-lg tracking-[-0.07em]">Chiama ora</span>
                                    </div>
                                    <p className="text-[10px] md:text-xs font-medium text-white/80 italic">
                                        Sopralluogo gratuito
                                    </p>
                                </a>
                            </div>

                            {/* Reassurance Section */}
                            <div className="mt-8 flex flex-wrap items-center justify-start gap-x-6 gap-y-2 text-xs md:text-sm text-slate-600 font-bold border-t border-slate-200 pt-8">
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                    Nessun obbligo d'acquisto
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                    Risposta in 2 ore
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                    7 giorni su 7
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScenarioSolutionsSection;
