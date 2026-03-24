import React from 'react';
import lavoro1 from '../assets/lavori/lavoro1.webp';
import lavoro2 from '../assets/lavori/lavoro2.jpeg';
import lavoro3 from '../assets/lavori/lavoro3.jpg';
import lavoro4 from '../assets/lavori/lavoro4.webp';
import lavoro5 from '../assets/lavori/lavoro5.jpg';
import lavoro6 from '../assets/lavori/lavoro6.jpg';
import lavoro7 from '../assets/lavori/lavoro7.jpg';
import lavoro8 from '../assets/lavori/lavoro8.jpg';
import lavoro9 from '../assets/lavori/lavoro9.jpg';
import lavoro10 from '../assets/lavori/lavoro10.jpg';

const works = [
    { id: 1, title: 'Gres porcellanato', sqm: 65, time: '4 gg', location: 'Milano', imageAfter: lavoro1, avatar: 'https://i.pravatar.cc/100?img=1', initials: 'MT', useInitials: false },
    { id: 2, title: 'Terrazzo privato', sqm: 84, time: '6 gg', location: 'Varese', imageAfter: lavoro2, avatar: 'https://i.pravatar.cc/100?img=5', initials: 'GP', useInitials: false },
    { id: 3, title: 'Parquet a spina di pesce', sqm: 88, time: '3 gg', location: 'Como', imageAfter: lavoro3, avatar: 'https://i.pravatar.cc/100?img=12', initials: 'RP', useInitials: true },
    { id: 4, title: 'Bagno con piastrelle', sqm: 7, time: '2 gg', location: 'Monza', imageAfter: lavoro4, avatar: 'https://i.pravatar.cc/100?img=8', initials: 'CB', useInitials: true },
    { id: 5, title: 'Laminato', sqm: 55, time: '2 gg', location: 'Milano - San Siro', imageAfter: lavoro5, avatar: 'https://i.pravatar.cc/100?img=3', initials: 'LM', useInitials: false },
    { id: 6, title: 'Gres porecllanato', sqm: 120, time: '5 gg', location: 'Varese - Centro', imageAfter: lavoro6, avatar: 'https://i.pravatar.cc/100?img=15', initials: 'AC', useInitials: false },
    { id: 7, title: 'Rivestimento bagno', sqm: 6, time: '3 gg', location: 'Como - Lago', imageAfter: lavoro7, avatar: 'https://i.pravatar.cc/100?img=7', initials: 'SV', useInitials: true },
    { id: 8, title: 'Parquet prefinito', sqm: 106, time: '4 gg', location: 'Monza - Brianza', imageAfter: lavoro8, avatar: 'https://i.pravatar.cc/100?img=11', initials: 'DB', useInitials: false },
    { id: 9, title: 'Parquet prefinito', sqm: 75, time: '3 gg', location: 'Milano - Centrale', imageAfter: lavoro9, avatar: 'https://i.pravatar.cc/100?img=9', initials: 'FR', useInitials: false },
    { id: 10, title: 'Ceramica', sqm: 92, time: '5 gg', location: 'Varese - Lago', imageAfter: lavoro10, avatar: 'https://i.pravatar.cc/100?img=14', initials: 'MG', useInitials: false }
];

const RecentWorks = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                
                {/* Titolo Stilizzato */}
                <div className="mb-12 max-w-4xl">
                    <h2 className="text-3xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9]">
                        Abbiamo posato più di <span className="text-yellow-500">3027mq</span>
                        <br/>
                        <span className="relative inline-block">
                            <span className="relative z-10">di pavimenti come gres, parquet, piastrelle... in tutta Lombardia</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-400/30 -rotate-1 -z-0"></span>
                        </span>
                    </h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {works.map((work) => (
                        <div key={work.id} className="group relative aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                            <img 
                                src={work.imageAfter} 
                                alt={work.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Overlay Sfumato in alto per Leggibilità */}
                            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/30 to-transparent"></div>
                            
                            {/* Testi in alto */}
                            <div className="absolute top-0 left-0 right-0 p-3">
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

                            {/* Avatar, Stelle e Posizione in basso */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-900/90 to-transparent">
                                <div className="flex items-center gap-2">
                                    {/* Avatar circolare */}
                                    <div className="relative w-8 h-8 rounded-full object-cover border-2 border-yellow-400 overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                                        {work.useInitials ? (
                                            <span className="text-xs font-black text-white">
                                                {work.initials}
                                            </span>
                                        ) : (
                                            <img 
                                                src={work.avatar} 
                                                alt={work.title}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextElementSibling.style.display = 'flex';
                                                }}
                                            />
                                        )}
                                        {!work.useInitials && (
                                            <span className="hidden text-xs font-black text-white">
                                                {work.initials}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        {/* Stelle */}
                                        <div className="flex items-center gap-0 mb-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                </svg>
                                            ))}
                                        </div>
                                        {/* Posizione */}
                                        <p className="text-white/80 text-[10px] font-bold truncate flex items-center gap-1">
                                            <svg className="w-3 h-3 text-red-400" viewBox="0 0 24 24" fill="none">
                                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                            </svg>
                                            {work.location}
                                        </p>
                                    </div>
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