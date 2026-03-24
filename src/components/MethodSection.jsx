import { Brush, Ruler, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
    {
        number: "1",
        title: "Sopralluogo & Consulenza",
        subtitle: "Capire Il Tuo Progetto",
        desc: "Veniamo a casa tua per misurare, analizzare lo stato attuale e discutere delle tue preferenze. Rileviamo anche eventuali problematiche (umidità, dislivelli, ecc).",
        icon: Ruler,
        color: "bg-blue-600"
    },
    {
        number: "2",
        title: "Preparazione del Fondo",
        subtitle: "Base Perfetta",
        desc: "Puliamo accuratamente, ripariamo eventuali crepe, operiamo il livellamento se necessario. Una base piana è fondamentale per una posa corretta.",
        icon: Brush,
        color: "bg-amber-500"
    },
    {
        number: "3",
        title: "Posa Millimetrica & Rifinitura",
        subtitle: "Qualità Garantita",
        desc: "Posiamo con sistemi autolivellanti, rifiniamo gli angoli, riposizioniamo porte e battiscopa. Ispezionamo ogni dettaglio prima di consegnare.",
        icon: CheckCircle2,
        color: "bg-emerald-600"
    }
];

function MethodSection() {
    return (
        <section className="bg-white py-20 border-b-2 border-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mb-16">
                    <div className="inline-flex items-center px-3 py-1 bg-emerald-600 text-white font-bold uppercase tracking-widest text-[10px] mb-4">
                        3 fasi
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-none">
                        <span className="relative inline-block">
                            <span className="relative z-10 px-2">Il Nostro Processo</span>
                            <span className="absolute inset-0 bg-emerald-300 -rotate-1 z-0"></span>
                        </span>
                        <br/>
                        <span className="text-emerald-600">Posa Chiavi in Mano</span>
                    </h2>
                    <p className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl border-l-4 border-emerald-600 pl-6 py-2">
                        Dal sopralluogo gratuito alla posa finale. Il nostro metodo garantisce un pavimento perfetto, puntuale e senza stress.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative group">
                            <div className="relative p-8 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden h-full">
                                {/* Accent line on top */}
                                <div className={`absolute top-0 left-0 w-full h-1.5 ${step.color}`}></div>
                                
                                {/* Number & Icon Header */}
                                <div className="flex justify-between items-start mb-8">
                                    <span className="text-7xl font-black text-slate-900/10 group-hover:text-slate-900/20 transition-colors leading-none italic select-none">
                                        {step.number}
                                    </span>
                                    <div className={`w-14 h-14 ${step.color} flex items-center justify-center rounded-2xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform`}>
                                        <step.icon className="w-7 h-7 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative">
                                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2 block">
                                        {step.subtitle}
                                    </span>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase leading-tight tracking-tighter">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Frecce tra le card (Desktop) - Improved visibility and positioning */}
                            {idx !== 2 && (
                                <div className="hidden lg:flex absolute -right-10 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 bg-white rounded-full border border-slate-200 shadow-md">
                                    <ArrowRight className="w-5 h-5 text-red-600" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MethodSection;
