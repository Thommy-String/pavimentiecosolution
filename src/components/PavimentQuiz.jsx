import React, { useState, useRef } from 'react';
import { MessageCircle, ArrowLeft, AlertTriangle, Ruler, Palette, Home, CheckCircle2 } from 'lucide-react';
import { PHONE_NUMBER } from '../utils/constants';

function PavimentQuiz() {
    const [step, setStep] = useState(1);
    const [selections, setSelections] = useState({
        situation: '',
        size: '',
        sizeLabel: '',
        material: '',
        priceRange: ''
    });
    
    const quizRef = useRef(null);

    const situations = [
        { 
            id: 'nuovo', 
            title: "Voglio un pavimento nuovo", 
            desc: "Cambio totale: il mio vecchio pavimento è rovinato o non mi piace più.",
            icon: Home, 
            color: "bg-emerald-100 text-emerald-600 border-emerald-200", 
            hoverColor: "group-hover:bg-emerald-600 group-hover:text-white" 
        },
        { 
            id: 'upgrade', 
            title: "Rinfrescare il look", 
            desc: "Il pavimento è ok, ma voglio un'atmosfera completamente diversa.",
            icon: Palette, 
            color: "bg-amber-100 text-amber-600 border-amber-200", 
            hoverColor: "group-hover:bg-amber-600 group-hover:text-white" 
        },
        { 
            id: 'studio', 
            title: "Consultare un esperto", 
            desc: "Non so qual è la soluzione migliore per il mio spazio.",
            icon: AlertTriangle, 
            color: "bg-blue-100 text-blue-600 border-blue-200", 
            hoverColor: "group-hover:bg-blue-600 group-hover:text-white" 
        },
        { 
            id: 'veloce', 
            title: "Fatto rapidamente", 
            desc: "Mi serve una soluzione veloce, mi interessa poco il design.",
            icon: Ruler, 
            color: "bg-orange-100 text-orange-600 border-orange-200", 
            hoverColor: "group-hover:bg-orange-600 group-hover:text-white" 
        }
    ];

    const sizes = [
        { 
            id: 'small', 
            title: "Fino a 20 mq", 
            desc: "(Es. camera, bagno singolo)",
            priceRange: "Da € 600 a € 1.200"
        },
        { 
            id: 'medium', 
            title: "Da 20 a 50 mq", 
            desc: "(Es. zona giorno, più ambienti)",
            priceRange: "Da € 1.200 a € 2.800"
        },
        { 
            id: 'large', 
            title: "Oltre 50 mq", 
            desc: "(Es. intera casa, spazi grandi)",
            priceRange: "Da € 2.800 a € 5.000+"
        }
    ];

    const materials = [
        { 
            id: 'parquet', 
            title: "Parquet & Legno", 
            desc: "Naturale, caldo, elegante.",
            priceRange: "€ 30-80 al mq"
        },
        { 
            id: 'gres', 
            title: "Gres Porcellanato", 
            desc: "Duraturo, facile da pulire.",
            priceRange: "€ 20-60 al mq"
        },
        { 
            id: 'spc', 
            title: "SPC / Vinilico", 
            desc: "Pratico, resistente, caldo.",
            priceRange: "€ 15-40 al mq"
        },
        { 
            id: 'piastrelle', 
            title: "Piastrelle Ceramiche", 
            desc: "Classico, personalizzabile.",
            priceRange: "€ 10-50 al mq"
        }
    ];

    const scrollToTop = () => {
        if (quizRef.current) {
            const yOffset = -100;
            const element = quizRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    const handleSituationSelect = (sit) => {
        setSelections(prev => ({ ...prev, situation: sit.title }));
        setStep(2);
        scrollToTop();
    };

    const handleSizeSelect = (size) => {
        setSelections(prev => ({ 
            ...prev, 
            size: size.id,
            sizeLabel: size.title,
            priceRange: size.priceRange
        }));
        setStep(3);
        scrollToTop();
    };

    const handleMaterialSelect = (material) => {
        setSelections(prev => ({ 
            ...prev, 
            material: material.title
        }));
        setStep(4);
        scrollToTop();
    };

    const cleanPhone = PHONE_NUMBER ? PHONE_NUMBER.replace(/\D/g, '') : "393342221212";

    const generateWhatsAppMessage = () => {
        const text = `Ciao! Ho fatto il calcolatore sul vostro sito.\n\n*Il mio caso:*\nSituazione: ${selections.situation}\nSuperficie: ${selections.sizeLabel}\nMateriale: ${selections.material}\n\nVorrei ricevere un preventivo dettagliato.`;
        return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
    };

    const resetQuiz = () => {
        setStep(1);
        setSelections({ situation: '', size: '', sizeLabel: '', material: '', priceRange: '' });
        scrollToTop();
    };

    return (
        <section ref={quizRef} className="bg-white py-16 md:py-24 border-b border-slate-100 scroll-mt-24">
            <div className="container mx-auto px-4 max-w-5xl">
                
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full mb-6">
                        <span className="text-xs md:text-sm font-bold text-emerald-700 uppercase tracking-widest">
                            Calcola il tuo preventivo
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-none">
                        <span className="relative inline-block">
                            <span className="relative z-10 px-2">Il Pavimento</span>
                            <span className="absolute inset-0 bg-emerald-300 -rotate-1 z-0"></span>
                        </span>
                        <br/>
                        <span className="text-emerald-600">che Fa per Te</span>
                    </h2>
                    <p className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto border-l-4 border-emerald-600 pl-6 py-2 text-left">
                        Rispondi a 3 veloci domande per avere un'anteprima di spesa immediata e scoprire qual è la soluzione ideale.
                    </p>
                </div>

                {/* Card Container */}
                <div className="bg-slate-50 rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden relative group">
                    
                    {/* Progress Bar */}
                    <div className="flex h-1.5 w-full bg-slate-200 absolute top-0 left-0">
                        <div 
                            className="h-full bg-emerald-500 transition-all duration-500 ease-out" 
                            style={{ 
                                width: step === 1 ? '25%' : step === 2 ? '50%' : step === 3 ? '75%' : '100%' 
                            }}
                        ></div>
                    </div>

                    <div className="p-8 md:p-12">
                        
                        {/* STEP 1 - SITUATION */}
                        {step === 1 && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="mb-8">
                                    <span className="text-xs font-bold bg-white border border-slate-200 text-slate-500 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Step 1 di 3</span>
                                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight uppercase tracking-tighter">Qual è la tua situazione?</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {situations.map((sit, idx) => (
                                        <button 
                                            key={idx}
                                            onClick={() => handleSituationSelect(sit)}
                                            className="group flex flex-col items-start p-6 rounded-[1.5rem] border-2 border-slate-200 hover:border-black hover:bg-slate-50 hover:shadow-lg hover:-translate-y-1 transition-all text-left bg-white"
                                        >
                                            <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 border ${sit.color} ${sit.hoverColor} transition-colors`}>
                                                <sit.icon className="w-6 h-6" />
                                            </div>
                                            <span className="font-black text-xl mb-2 text-slate-900 uppercase tracking-tight group-hover:text-emerald-600 transition-colors">{sit.title}</span>
                                            <span className="text-sm text-slate-500 font-medium leading-relaxed">{sit.desc}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* STEP 2 - SIZE */}
                        {step === 2 && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <button onClick={() => setStep(1)} className="flex items-center text-sm font-bold text-slate-400 hover:text-slate-800 transition-colors mb-6 uppercase tracking-wider">
                                    <ArrowLeft className="w-4 h-4 mr-1" /> Indietro
                                </button>
                                <div className="mb-8">
                                    <span className="text-xs font-bold bg-white border border-slate-200 text-slate-500 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Step 2 di 3</span>
                                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight uppercase tracking-tighter">Quanto è grande la superficie?</h3>
                                </div>
                                <div className="flex flex-col gap-4">
                                    {sizes.map((size, idx) => (
                                        <button 
                                            key={idx}
                                            onClick={() => handleSizeSelect(size)}
                                            className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-[1.5rem] border-2 border-slate-200 hover:border-black hover:bg-slate-50 hover:shadow-lg hover:-translate-y-1 transition-all text-left bg-white"
                                        >
                                            <div className="flex flex-col mb-2 md:mb-0">
                                                <span className="font-black text-2xl text-slate-900 uppercase tracking-tight group-hover:text-emerald-600 transition-colors">{size.title}</span>
                                                <span className="text-sm text-slate-500 font-medium">{size.desc}</span>
                                            </div>
                                            <div className="hidden md:flex w-12 h-12 bg-slate-100 rounded-full items-center justify-center group-hover:bg-emerald-100 transition-colors border border-slate-200 group-hover:border-emerald-300">
                                                <span className="text-xs font-black text-slate-600 group-hover:text-emerald-600 transition-colors">OK</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* STEP 3 - MATERIAL */}
                        {step === 3 && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <button onClick={() => setStep(2)} className="flex items-center text-sm font-bold text-slate-400 hover:text-slate-800 transition-colors mb-6 uppercase tracking-wider">
                                    <ArrowLeft className="w-4 h-4 mr-1" /> Indietro
                                </button>
                                <div className="mb-8">
                                    <span className="text-xs font-bold bg-white border border-slate-200 text-slate-500 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Step 3 di 3</span>
                                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight uppercase tracking-tighter">Quale materiale preferisci?</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {materials.map((mat, idx) => (
                                        <button 
                                            key={idx}
                                            onClick={() => handleMaterialSelect(mat)}
                                            className="group flex flex-col items-start p-6 rounded-[1.5rem] border-2 border-slate-200 hover:border-black hover:bg-slate-50 hover:shadow-lg hover:-translate-y-1 transition-all text-left bg-white"
                                        >
                                            <span className="font-black text-lg mb-1 text-slate-900 uppercase tracking-tight group-hover:text-emerald-600 transition-colors">{mat.title}</span>
                                            <span className="text-sm text-slate-500 font-medium mb-2">{mat.desc}</span>
                                            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{mat.priceRange}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* STEP 4 - RESULTS */}
                        {step === 4 && (
                            <div className="animate-in fade-in zoom-in-95 duration-500">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                                        <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Perfetto!</p>
                                        <h3 className="text-2xl md:text-3xl font-black text-slate-900">La tua soluzione ideale</h3>
                                    </div>
                                </div>

                                {/* Resume Box */}
                                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-2 border-emerald-200 p-8 rounded-2xl mb-8">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-start">
                                            <span className="font-bold text-slate-600 text-sm uppercase tracking-widest">Situazione</span>
                                            <span className="font-black text-lg text-slate-900">{selections.situation}</span>
                                        </div>
                                        <div className="flex justify-between items-start">
                                            <span className="font-bold text-slate-600 text-sm uppercase tracking-widest">Superficie</span>
                                            <span className="font-black text-lg text-slate-900">{selections.sizeLabel}</span>
                                        </div>
                                        <div className="flex justify-between items-start">
                                            <span className="font-bold text-slate-600 text-sm uppercase tracking-widest">Materiale</span>
                                            <span className="font-black text-lg text-slate-900">{selections.material}</span>
                                        </div>
                                        <div className="border-t border-emerald-300 pt-4 mt-4">
                                            <div className="flex justify-between items-center">
                                                <span className="font-bold text-slate-600 text-sm uppercase tracking-widest">Stima Totale</span>
                                                <div className="text-right">
                                                    <p className="text-4xl md:text-5xl font-black text-emerald-600">{selections.priceRange}</p>
                                                    <p className="text-xs text-slate-600 font-medium mt-1">*Prezzi al mq + manodopera. Finale dopo sopralluogo.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <a
                                        href={generateWhatsAppMessage()}
                                        onClick={() => {
                                            if (typeof window.gtag_report_conversion === 'function') window.gtag_report_conversion();
                                        }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 rounded-2xl font-black text-center uppercase tracking-tight shadow-md hover:shadow-xl transition-all flex justify-center items-center gap-2 text-base md:text-lg hover:-translate-y-1"
                                    >
                                        <MessageCircle className="w-6 h-6 flex-shrink-0" />
                                        <span>Parliamo su WhatsApp</span>
                                    </a>
                                    <a
                                        href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                                        onClick={() => {
                                            if (typeof window.gtag_report_conversion === 'function') window.gtag_report_conversion();
                                        }}
                                        className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-6 rounded-2xl font-black text-center uppercase tracking-tight shadow-md hover:shadow-xl transition-all flex justify-center items-center gap-2 text-base md:text-lg hover:-translate-y-1"
                                    >
                                        <span>📞 Chiama Ora</span>
                                    </a>
                                </div>

                                {/* Reassurance */}
                                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs md:text-sm text-slate-500 font-bold">
                                    <span className="flex items-center gap-1.5">
                                        <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> Sopralluogo Gratuito
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> Nessun Obbligo
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> Risposta Veloce
                                    </span>
                                </div>

                                {/* Restart Button */}
                                <button 
                                    onClick={resetQuiz}
                                    className="w-full mt-6 text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-wider font-bold text-xs underline underline-offset-4 decoration-slate-300 hover:decoration-slate-600"
                                >
                                    Rifai il test
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PavimentQuiz;
