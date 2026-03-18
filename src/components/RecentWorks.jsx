import React, { useState, useMemo } from 'react';

// Immagini reali dei lavori
import lavoro1 from '../assets/images/primadopo/lavoro1.jpg';
import lavoro2 from '../assets/images/primadopo/lavoro2.jpg';
import lavoro3 from '../assets/images/primadopo/lavoro3.jpg';
import lavoro4 from '../assets/images/primadopo/lavoro4.jpg';
import lavoro5 from '../assets/images/primadopo/lavoro5.jpg';
import lavoro6 from '../assets/images/primadopo/lavoro6.jpg';
import lavoro7 from '../assets/images/primadopo/lavoro7.webp';
import lavoro8 from '../assets/images/primadopo/lavoro8.jpg';
import lavoro9 from '../assets/images/primadopo/lavoro9.jpg';
import lavoro10 from '../assets/images/primadopo/lavoro10.jpg';
import lavoro11 from '../assets/images/primadopo/lavoro11.webp';
import lavoro12 from '../assets/images/primadopo/lavoro12.jpg';

// --- DATI DEI LAVORI AGGIORNATI CON FOTO REALI ---
const works = [
    {
        id: 1,
        category: 'impermeabilizzazione',
        title: 'Guaina Liquida su Terrazzo Condominiale',
        location: 'Zona Tortona - MILANO',
        sqm: 65,
        price: 2950,
        time: '3 giorni',
        description: 'Impermeabilizzazione completa di un terrazzo di 65mq con sistema poliuretanico multistrato. Sigillatura dei giunti perimetrali e dei bocchettoni di scarico.',
        imageAfter: lavoro1,
        imageBefore: null,
        review: { text: "Lavoro rapido e risolutivo. Non piove più nel magazzino sottostante. Ottimo lavoro!", avatar: "https://i.pravatar.cc/150?u=1" }
    },
    {
        id: 2,
        category: 'impermeabilizzazione',
        title: 'Ripristino Guaina Terrazzo Privato',
        location: 'Arese (MI)',
        sqm: 42,
        price: 1890,
        time: '2 giorni',
        description: 'Applicazione di guaina liquida elastica su superficie preesistente. Risolto problema di micro-infiltrazioni dovute a crepe strutturali.',
        imageAfter: lavoro2,
        imageBefore: null,
        review: { text: "Professionalità e pulizia incredibile. Il prezzo era esattamente quello pattuito.", avatar: "https://i.pravatar.cc/150?u=2" }
    },
    {
        id: 3,
        category: 'impermeabilizzazione',
        title: 'Impermeabilizzazione Tetto Piano',
        location: 'Monza - Centro',
        sqm: 88,
        price: 3960,
        time: '4 giorni',
        description: 'Rifacimento impermeabilizzazione su tetto piano. Sistema armato con rete in fibra di vetro per massima resistenza meccanica.',
        imageAfter: lavoro3,
        imageBefore: null,
        review: { text: "Hanno lavorato sodo anche sotto il sole. Squadra coordinata e molto competente.", avatar: "https://i.pravatar.cc/150?u=3" }
    },
    {
        id: 4,
        category: 'impermeabilizzazione',
        title: 'Salvataggio Terrazzo in Klinker',
        location: 'Varese',
        sqm: 28,
        price: 1350,
        time: '1 giorno',
        description: 'Intervento senza demolizione su klinker degradato. Applicazione membrana liquida trasparente ad alta adesione.',
        imageAfter: lavoro4,
        imageBefore: null,
        review: { text: "Volevamo evitare la polvere della demolizione. Questa soluzione è stata perfetta.", avatar: "https://i.pravatar.cc/150?u=4" }
    },
    {
        id: 5,
        category: 'impermeabilizzazione',
        title: 'Risanamento Balcone Perimetrale',
        location: 'Sesto San Giovanni',
        sqm: 15,
        price: 750,
        time: '8 ore',
        description: 'Impermeabilizzazione flash su balcone con infiltrazioni evidenti dai frontalini. Trattamento specifico antisale.',
        imageAfter: lavoro5,
        imageBefore: null,
        review: { text: "Gentili, veloci e molto chiari nella spiegazione del lavoro. Consigliati.", avatar: "https://i.pravatar.cc/150?u=5" }
    },
    {
        id: 6,
        category: 'impermeabilizzazione',
        title: 'Grande Lastrico Solare Industriale',
        location: 'Lainate (MI)',
        sqm: 120,
        price: 5400,
        time: '5 giorni',
        description: 'Superficie estesa trattata con guaina liquida bianca riflettente per abbattimento termico estivo e tenuta stagna.',
        imageAfter: lavoro6,
        imageBefore: null,
        review: { text: "Oltre all'impermeabilizzazione, sentiamo proprio la casa più fresca. Fenomenale.", avatar: "https://i.pravatar.cc/150?u=6" }
    },
    {
        id: 7,
        category: 'impermeabilizzazione',
        title: 'Copertura Capannone Artigianale',
        location: 'Rho - Fiera',
        sqm: 150,
        price: 6750,
        time: '6 giorni',
        description: 'Impermeabilizzazione alto spessore su copertura metallica e cemento. Protezione totale contro agenti atmosferici e ristagni.',
        imageAfter: lavoro7,
        imageBefore: null,
        review: { text: "Lavoro eseguito a regola d'arte. Finalmente risolte le infiltrazioni persistenti.", avatar: "https://i.pravatar.cc/150?u=7" }
    },
    {
        id: 8,
        category: 'impermeabilizzazione',
        title: 'Terrazzo Panoramico in Resina',
        location: 'Milano - CityLife',
        sqm: 55,
        price: 2475,
        time: '3 giorni',
        description: 'Applicazione sistema impermeabilizzante trasparente su gres porcellanato per mantenere l\'estetica originale senza demolizioni.',
        imageAfter: lavoro8,
        imageBefore: null,
        review: { text: "Velocissimi e molto discreti. Il terrazzo è tornato perfetto senza rompere nulla.", avatar: "https://i.pravatar.cc/150?u=8" }
    },
    {
        id: 9,
        category: 'impermeabilizzazione',
        title: 'Rifacimento Guaina Box Interrati',
        location: 'Cinisello Balsamo',
        sqm: 90,
        price: 4050,
        time: '4 giorni',
        description: 'Intervento di impermeabilizzazione esterna su soletta box interrati. Utilizzo di membrana liquida bituminosa ad alta elasticità.',
        imageAfter: lavoro9,
        imageBefore: null,
        review: { text: "Ottimo rapporto qualità prezzo. Squadra professionale e attenta ai dettagli.", avatar: "https://i.pravatar.cc/150?u=9" }
    },
    {
        id: 10,
        category: 'impermeabilizzazione',
        title: 'Impermeabilizzazione Lastrico Solare',
        location: 'Magenta (MI)',
        sqm: 75,
        price: 3375,
        time: '3 giorni',
        description: 'Bonifica infiltrazioni su lastrico solare calpestabile. Sistema a triplo strato con finitura anti-scivolo.',
        imageAfter: lavoro10,
        imageBefore: null,
        review: { text: "Seri e puntuali. Hanno risolto un problema che durava da anni.", avatar: "https://i.pravatar.cc/150?u=10" }
    },
    {
        id: 11,
        category: 'impermeabilizzazione',
        title: 'Trattamento Balconi Condominiali',
        location: 'Saronno',
        sqm: 35,
        price: 1575,
        time: '2 giorni',
        description: 'Impermeabilizzazione rapida di 4 balconi con membrana liquida ad asciugatura veloce. Zero disagi per i condomini.',
        imageAfter: lavoro11,
        imageBefore: null,
        review: { text: "Hanno finito tutto in tempo record. Molto puliti durante le fasi di lavoro.", avatar: "https://i.pravatar.cc/150?u=11" }
    },
    {
        id: 12,
        category: 'impermeabilizzazione',
        title: 'Tetto Piano Industriale',
        location: 'Pero (MI)',
        sqm: 210,
        price: 9450,
        time: '7 giorni',
        description: 'Grande intervento su tetto industriale. Applicazione di guaina liquida rinforzata con tessuto non tessuto per massima durabilità.',
        imageAfter: lavoro12,
        imageBefore: null,
        review: { text: "Ottimo intervento tecnico. La garanzia decennale ci dà molta tranquillità.", avatar: "https://i.pravatar.cc/150?u=12" }
    },
];

const formatPrice = (p) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(p);

const filterCategories = {
    'all': 'Tutti i Lavori',
    'impermeabilizzazione': 'Risultati Guaina Liquida'
};

// --- COMPONENTE CARD ---
const MinimalCard = ({ work }) => {
    return (
        <div className="snap-center flex-shrink-0 w-[85vw] md:w-full bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            {/* FOTO */}
            <div className="relative h-[250px] md:h-[300px] w-full bg-gray-100 overflow-hidden group">
                <img
                    src={work.imageAfter}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm border border-white/20">
                        {work.location}
                    </span>
                </div>
                <div className="absolute bottom-4 right-4 animate-pulse">
                    <span className="px-3 py-1 bg-red-600 text-white rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg">
                        Lavoro Concluso
                    </span>
                </div>
            </div>

            {/* DATI TECNICI */}
            <div className="flex border-b border-gray-100 divide-x divide-gray-100 bg-slate-50/50">
                <div className="flex-1 py-3 text-center">
                    <span className="block text-[10px] text-gray-400 uppercase font-medium">Tempo</span>
                    <span className="block text-sm font-bold text-gray-800">{work.time}</span>
                </div>
                <div className="flex-1 py-3 text-center">
                    <span className="block text-[10px] text-gray-400 uppercase font-medium">Area</span>
                    <span className="block text-sm font-bold text-gray-800">{work.sqm} mq</span>
                </div>
                <div className="flex-1 py-3 text-center bg-yellow-400">
                    <span className="block text-[10px] text-slate-900 uppercase font-bold">Investimento</span>
                    <span className="block text-sm font-black text-slate-900">{formatPrice(work.price)}</span>
                </div>
            </div>

            {/* INFO & RECENSIONE */}
            <div className="p-5 flex flex-col gap-4 flex-grow">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{work.title}</h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">{work.description}</p>
                </div>
                <div className="mt-auto flex items-center gap-3 pt-3 border-t border-gray-50">
                    <img src={work.review.avatar} alt="Client" loading="lazy" className="w-8 h-8 rounded-full object-cover border border-gray-100" />
                    <p className="text-xs text-gray-600 italic leading-snug">"{work.review.text}"</p>
                </div>
            </div>
        </div>
    );
};

// --- COMPONENTE PRINCIPALE DINAMICO ---
function RecentWorks({ service, category, title, showFilter = false }) {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredWorks = useMemo(() => {
        // Logica per la Home Page con i filtri
        if (showFilter) {
            const sortedWorks = [...works].sort((a, b) => b.id - a.id);
            if (activeCategory === 'all') {
                return sortedWorks;
            }
            return sortedWorks.filter(w => w.category === activeCategory);
        }

        // Logica esistente per le pagine servizio
        if (category) {
            return works.filter(w => w.category === category);
        }

        const type = service?.pricingId || "";
        if (type.includes('impermeabilizzazione')) return works.filter(w => w.category === 'impermeabilizzazione');

        // Fallback di sicurezza (mantiene il vecchio comportamento se nessuna condizione è soddisfatta)
        return [...works].sort((a, b) => b.id - a.id).slice(0, 6);

    }, [service, category, showFilter, activeCategory]);

    const displayTitle = title || (service ? `I nostri lavori: ${service.navLabel}` : "Costi reali di lavori finiti.");

    if (filteredWorks.length === 0) return null;

    return (
        <section className="bg-gray-50 pt-12 pb-12 md:pt-20 md:pb-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 text-center uppercase tracking-tighter">
                    {displayTitle}
                </h2>

                {/* Filtri visibili solo in homepage */}
                {showFilter && (
                    <div className="flex justify-center flex-wrap gap-2 md:gap-3 mb-10">
                        {Object.entries(filterCategories).map(([key, label]) => (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(key)}
                                className={`px-4 py-2 text-xs md:text-sm font-bold rounded-full transition-all duration-200 shadow-sm
                                    ${activeCategory === key
                                        ? 'bg-slate-900 text-white scale-105 shadow-lg'
                                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                )}

                <div className="
                    flex overflow-x-auto snap-x snap-mandatory gap-5 pb-8 -mx-4 px-4 
                    md:grid md:grid-cols-2 lg:grid-cols-6 md:gap-6 lg:gap-8 md:overflow-visible md:pb-0 md:mx-0
                    scrollbar-hide 
                ">
                    {filteredWorks.map((work) => <MinimalCard key={work.id} work={work} />)}
                </div>
            </div>
        </section>
    );
}

export default RecentWorks;