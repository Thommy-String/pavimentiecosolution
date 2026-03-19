import React from 'react';
import placeholderImg from '../assets/images/terrazzo-perfetto-isolazione-base-chianche_1-1024x683.jpg';

const terrasseImages = [
  { src: placeholderImg, alt: 'Terrazzo impermeabilizzato 1' },
  { src: placeholderImg, alt: 'Terrazzo impermeabilizzato 2' },
  { src: placeholderImg, alt: 'Balcone impermeabilizzato' },
  { src: placeholderImg, alt: 'Lastrico solare' },
  { src: placeholderImg, alt: 'Terrazzo piano' },
  { src: placeholderImg, alt: 'Guaina liquida' },
];

function HeroStats() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-10 pt-4">
      
      {/* LATO SINISTRO: Progetti e Face-pile */}
      <div className="flex items-center gap-4">
        {/* I Parquet (Face-pile leggermente più compatto) */}
        <div className="flex -space-x-3">
            {terrasseImages.slice(0, 5).map((img, index) => (
              <div key={index} className="relative transition-transform hover:-translate-y-1 duration-300">
                 <img
                  className="h-9 w-9 rounded-full border-[2px] border-white object-cover shadow-sm"
                  src={img.src}
                  alt={img.alt}
                />
              </div>
            ))}
            <div className="
              flex h-9 w-9 items-center justify-center 
              rounded-full border-[2px] border-white bg-gray-900 
              text-[10px] font-bold text-white shadow-sm z-10
            ">
              +300
            </div>
        </div>
        
        {/* Testo Progetti (Allineato a destra delle immagini, non sotto) */}
        <div className="flex flex-col text-left leading-tight">
              <div className="flex items-center gap-1.5 opacity-80">
                                        <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded border border-blue-100 font-bold uppercase tracking-tighter">
                                            🏆 284+ terrazzi impermeabilizzati
                                        </span>
                                    </div>
             <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">ogni anno in lombardia</span>
        </div>
      </div>

      {/* DIVISORE (Linea sottile verticale, solo su desktop) */}
      <div className="hidden sm:block w-px h-8 bg-gray-300"></div>

    </div>
  );
}

export default HeroStats;