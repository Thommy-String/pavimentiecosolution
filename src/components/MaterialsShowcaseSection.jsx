import React from 'react';
import { Sparkles, Check } from 'lucide-react';

const MaterialsShowcaseSection = () => {
    const materials = [
        {
            title: 'Parquet & Legno',
            subtitle: 'Eleganza Naturale',
            description: 'Calore e bellezza autentica. Utilizziamo solo legni nobili certificati con finitura sostenibile.',
            benefits: ['Isolamento termico', 'Riparabile', 'Classe A+ sostenibilità'],
            color: 'from-amber-100 to-amber-50',
            accentColor: 'text-amber-700',
            borderColor: 'border-amber-300'
        },
        {
            title: 'Gres Porcellanato',
            subtitle: 'Massima Durabilità',
            description: 'Perfetto per cucine e bagni. Resistente all\'acqua, alle macchie e ai graffi. Longevità garantita.',
            benefits: ['Impermeabile', '100+ anni di durabilità', 'Facile pulizia'],
            color: 'from-slate-100 to-slate-50',
            accentColor: 'text-slate-700',
            borderColor: 'border-slate-300'
        },
        {
            title: 'SPC / Vinilico',
            subtitle: 'Pratico & Confortevole',
            description: 'Caldo al tatto, resistente all\'umidità. Ideale per camere da letto e ambienti umidi.',
            benefits: ['Caldo in inverno', 'Silenzioso', 'Resistente all\'acqua'],
            color: 'from-green-100 to-green-50',
            accentColor: 'text-green-700',
            borderColor: 'border-green-300'
        },
        {
            title: 'Piastrelle Ceramiche',
            subtitle: 'Classico Duraturo',
            description: 'Tradizione e affidabilità. Manutenzione semplice e stile personalizzabile con infinite scelte di design.',
            benefits: ['Esteticamente versatile', 'Lunga durata', 'Manutenzione zero'],
            color: 'from-blue-100 to-blue-50',
            accentColor: 'text-blue-700',
            borderColor: 'border-blue-300'
        }
    ];

    return (
        <section className="w-full bg-gradient-to-b from-white via-slate-50/30 to-white py-20 md:py-28 px-4 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs md:text-sm font-bold text-emerald-700 uppercase tracking-widest">
                            I Nostri Materiali
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
                        Il Pavimento Perfetto Per Te
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                        Ogni materiale ha pro e contro. Ecco perché consulentiamo i nostri clienti per trovare la soluzione ideale che combina stile, funzionalità e budget.
                    </p>
                </div>

                {/* Materials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {materials.map((material, idx) => (
                        <div
                            key={idx}
                            className={`relative overflow-hidden rounded-2xl border-2 ${material.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 group`}
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${material.color} opacity-50`}></div>

                            {/* Content */}
                            <div className="relative p-8 md:p-10 flex flex-col h-full">
                                {/* Icon Area */}
                                <div className={`w-14 h-14 rounded-xl ${material.accentColor.replace('text-', 'bg-').replace('-700', '-100')} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <Sparkles className={`w-7 h-7 ${material.accentColor}`} />
                                </div>

                                {/* Title */}
                                <h3 className={`text-2xl md:text-3xl font-black ${material.accentColor} mb-1 uppercase tracking-tight`}>
                                    {material.title}
                                </h3>
                                <p className={`text-sm md:text-base font-bold ${material.accentColor} opacity-75 mb-4`}>
                                    {material.subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-slate-700 font-medium text-base md:text-lg leading-relaxed mb-6">
                                    {material.description}
                                </p>

                                {/* Benefits List */}
                                <div className="space-y-3 mt-auto">
                                    {material.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <Check className={`w-5 h-5 ${material.accentColor} shrink-0 mt-0.5`} />
                                            <span className="text-sm md:text-base text-slate-700 font-medium">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 md:mt-20 text-center">
                    <p className="text-lg text-slate-600 mb-6 font-medium">
                        Non sai quale materiale fa per te?
                    </p>
                    <a
                        href="tel:+393342221212"
                        className="
                            inline-flex items-center gap-3
                            bg-emerald-500 hover:bg-emerald-600
                            px-8 md:px-12 py-5 rounded-2xl
                            text-white font-black text-base md:text-lg uppercase tracking-tight
                            transition-all duration-200
                            shadow-[0_8px_0_0_rgba(5,150,105,1),0_16px_30px_-6px_rgba(16,185,129,0.45)]
                            hover:shadow-[0_4px_0_0_rgba(5,150,105,1),0_12px_20px_-4px_rgba(16,185,129,0.5)]
                            hover:-translate-y-0.5
                            active:translate-y-1
                            active:shadow-[0_2px_0_0_rgba(5,150,105,1)]
                        "
                    >
                        <span>📞 Consulenza Gratuita</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MaterialsShowcaseSection;
