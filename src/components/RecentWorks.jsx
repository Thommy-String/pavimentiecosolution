import React from 'react';

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
    { id: 1, title: 'Guaina Liquida Terrazzo', sqm: 65, time: '3 gg', imageAfter: lavoro1 },
    { id: 2, title: 'Ripristino Terrazzo', sqm: 42, time: '2 gg', imageAfter: lavoro2 },
    { id: 3, title: 'Impermeab. Tetto Piano', sqm: 88, time: '4 gg', imageAfter: lavoro3 },
    { id: 4, title: 'Salvataggio in Klinker', sqm: 28, time: '1 gg', imageAfter: lavoro4 },
    { id: 5, title: 'Risanamento Balcone', sqm: 15, time: '1 gg', imageAfter: lavoro5 },
    { id: 6, title: 'Lastrico Industriale', sqm: 120, time: '5 gg', imageAfter: lavoro6 },
    { id: 7, title: 'Copertura Capannone', sqm: 150, time: '6 gg', imageAfter: lavoro7 },
    { id: 8, title: 'Terrazzo in Resina', sqm: 55, time: '3 gg', imageAfter: lavoro8 },
    { id: 9, title: 'Guaina Box Interrati', sqm: 90, time: '4 gg', imageAfter: lavoro9 },
    { id: 10, title: 'Impermeab. Lastrico', sqm: 75, time: '3 gg', imageAfter: lavoro10 },
    { id: 11, title: 'Tetto Condominiale', sqm: 200, time: '7 gg', imageAfter: lavoro11 },
    { id: 12, title: 'Balcone Privato', sqm: 20, time: '1 gg', imageAfter: lavoro12 }
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
                                <h3 className="text-white font-bold text-xs md:text-sm leading-tight mb-2 drop-shadow-md">
                                    {work.title}
                               </h3>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-white/90 text-[10px] md:text-xs font-semibold">
                                    <span className="flex items-center gap-1">
                                        <svg className="w-3 h-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                                        {work.sqm} mq
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <svg className="w-3 h-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
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