import React from 'react';
import placeholderImg from '../assets/images/terrazzo-perfetto-isolazione-base-chianche_1-1024x683.jpg';

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

const works = [
    { id: 1, title: 'Terrazzo Condominiale', sqm: 65, time: '3 gg', image: lavoro1 },
    { id: 2, title: 'Tetto Industriale', sqm: 120, time: '6 gg', image: lavoro2 },
    { id: 3, title: 'Tetto', sqm: 88, time: '4 gg', image: lavoro3 },
    { id: 4, title: 'Tetto', sqm: 28, time: '2 gg', image: lavoro4 },
    { id: 5, title: 'Tetto', sqm: 82, time: '3 gg', image: lavoro5 },
    { id: 6, title: 'Tetto residenziale', sqm: 120, time: '5 gg', image: lavoro6 },
    { id: 7, title: 'Balcone privato', sqm: 7, time: '2 gg', image: lavoro7 },
    { id: 8, title: 'Balconcino privato', sqm: 5, time: '2 gg', image: lavoro8 },
    { id: 9, title: 'Tetto industriale', sqm: 90, time: '4 gg', image: lavoro9 },
    { id: 10, title: 'Balconcino privato', sqm: 12, time: '2 gg', image: lavoro10 },
    { id: 11, title: 'Tetto condominiale', sqm: 103, time: '3 gg', image: lavoro11 },
    { id: 12, title: 'Terrazzo privato', sqm: 64, time: '3 gg', image: lavoro12 },
];

const WorkCard = ({ work, className }) => {
  return (
    <div className={`relative group w-full overflow-hidden shadow-md border border-slate-100 rounded-2xl bg-white ${className}`}>
      <img src={work.image} alt={work.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute top-3 right-3 px-2 py-0.5 bg-slate-900/60 backdrop-blur-sm rounded text-[8px] font-bold text-white uppercase tracking-wider">
        Concluso
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-4 flex flex-col items-center justify-end text-center">
         <p className="text-[10px] text-white/90 font-bold uppercase tracking-widest mb-1">{work.title}</p>
         <div className="flex items-center gap-2 text-white text-sm font-black">
            <span className="text-yellow-400">{work.sqm} mq</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
            <span>{work.time}</span>
         </div>
      </div>
    </div>
  );
};

const HeroComparisonCards = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-4">
       {/* Section Header for Cards */}
       <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-slate-100"></div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Esempi</span>
          <div className="h-px flex-1 bg-slate-100"></div>
       </div>

       {/* Compact Grid */}
       <div className="grid grid-cols-2 md:grid-cols-6 gap-4 py-4">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} className="h-40 md:h-56 w-full" />
          ))}
       </div>
    </div>
  );
};

export default HeroComparisonCards;
