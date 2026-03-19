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
    { id: 1, imageAfter: lavoro1 },
    { id: 2, imageAfter: lavoro2 },
    { id: 3, imageAfter: lavoro3 },
    { id: 4, imageAfter: lavoro4 },
    { id: 5, imageAfter: lavoro5 },
    { id: 6, imageAfter: lavoro6 },
    { id: 7, imageAfter: lavoro7 },
    { id: 8, imageAfter: lavoro8 },
    { id: 9, imageAfter: lavoro9 },
    { id: 10, imageAfter: lavoro10 },
    { id: 11, imageAfter: lavoro11 },
    { id: 12, imageAfter: lavoro12 }
];

const RecentWorks = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        I Nostri Ultimi Lavori
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Alcuni dei nostri interventi di impermeabilizzazione e ristrutturazione.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {works.map((work) => (
                        <div key={work.id} className="relative aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <img 
                                src={work.imageAfter} 
                                alt={`Lavoro ${work.id}`} 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentWorks;