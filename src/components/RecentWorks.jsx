import React from 'react';

// TODO: Immagini reali dei lavori da aggiungere
// import lavoro1 from '../assets/images/primadopo/lavoro1.jpg';
// import lavoro2 from '../assets/images/primadopo/lavoro2.jpg';
// import lavoro3 from '../assets/images/primadopo/lavoro3.jpg';
// import lavoro4 from '../assets/images/primadopo/lavoro4.jpg';
// import lavoro5 from '../assets/images/primadopo/lavoro5.jpg';
// import lavoro6 from '../assets/images/primadopo/lavoro6.jpg';
// import lavoro7 from '../assets/images/primadopo/lavoro7.webp';
// import lavoro8 from '../assets/images/primadopo/lavoro8.jpg';
// import lavoro9 from '../assets/images/primadopo/lavoro9.jpg';
// import lavoro10 from '../assets/images/primadopo/lavoro10.jpg';
// import lavoro11 from '../assets/images/primadopo/lavoro11.webp';
// import lavoro12 from '../assets/images/primadopo/lavoro12.jpg';

// --- DATI DEI LAVORI AGGIORNATI CON FOTO REALI ---
// Placeholder images - da sostituire con immagini reali
const placeholderImg = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop';

const works = [
    { id: 1, title: 'Terrazzo privato', sqm: 65, time: '3 gg', imageAfter: placeholderImg },
    { id: 2, title: 'Tetto industriale', sqm: 130, time: '6 gg', imageAfter: placeholderImg },
    { id: 3, title: 'Impermeab. Tetto Condominiale', sqm: 88, time: '4 gg', imageAfter: placeholderImg },
    { id: 4, title: 'Tetto condominiale', sqm: 28, time: '2 gg', imageAfter: placeholderImg },
    { id: 5, title: 'Tetto privato', sqm: 85, time: '6 gg', imageAfter: placeholderImg },
    { id: 6, title: 'Terrazzo', sqm: 120, time: '5 gg', imageAfter: placeholderImg },
    { id: 7, title: 'Balcone privato', sqm: 6, time: '2 gg', imageAfter: placeholderImg },
    { id: 8, title: 'Balcone privato', sqm: 7, time: '2 gg', imageAfter: placeholderImg },
    { id: 9, title: 'Imperm. tetto', sqm: 90, time: '4 gg', imageAfter: placeholderImg },
    { id: 10, title: 'Impermeab. balcone', sqm: 12, time: '3 gg', imageAfter: placeholderImg },
    { id: 11, title: 'Tetto Condominiale', sqm: 135, time: '6 gg', imageAfter: placeholderImg },
    { id: 12, title: 'Balcone Residenziale', sqm: 25, time: '4 gg', imageAfter: placeholderImg }
];

const RecentWorks = () => {
    return (
        <section className="py-2 bg-gray-50">
            <div className="container mx-auto px-4">
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {works.map((work) => (
                        <div key={work.id} className="group relative aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                            <img 
                                src={work.imageAfter} 
                                alt={work.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Overlay Sfumato Sempre Visibile per Leggibilità */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                            
                            {/* Testi in basso */}
                            <div className="absolute bottom-0 left-0 right-0 p-3">
                                <h3 className="text-white font-black text-xs md:text-base leading-tight mb-2 drop-shadow-md truncate">
                                    {work.title}
                                </h3>
                                <div className="flex items-center gap-3 text-white/95 text-[11px] md:text-sm font-black leading-none">
                                    <span className="flex items-center gap-1.5 bg-blue-600/60 backdrop-blur-md px-2 py-1 rounded-lg">
                                        <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                                        {work.sqm} mq
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-amber-600/60 backdrop-blur-md px-2 py-1 rounded-lg">
                                        <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        {work.time}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentWorks;