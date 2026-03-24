import React from 'react';

const services = [
  {
    id: 1,
    label: 'Parquet',
    benefit: 'Eleganza naturale',
    image: 'https://www.parquetsartoriale.com/assets/front/images/mediagallery/big/parquet%20moderno%20di%20Olmo%20oliato%20tonalizzato%20(3).jpg',
  },
  {
    id: 2,
    label: 'SPC / Vinilico',
    benefit: 'Pratico e caldo',
    image: 'https://media.adeo.com/media/4099081/media.png?width=300',
  },
  {
    id: 3,
    label: 'Gres Porcellanato',
    benefit: 'Massima durabilità',
    image: 'https://www.pavipro.it/wp-content/uploads/2025/01/wheat-5.jpeg',
  },
  {
    id: 4,
    label: 'Piastrelle',
    benefit: 'Design personalizzabile',
    image: 'https://imgix.obi.de/api/disc/cms/public/dam/ita/pubblicate/p8.jpg?crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&fp-z=1&w=1920&auto=format%2Ccompress&h=1079',
  },
  {
    id: 5,
    label: 'Rifacimento Massetto',
    benefit: 'Base perfetta',
    image: 'https://www.globalsocietacooperativa.com/wp-content/uploads/2023/04/massetto.jpg',
  },
  {
    id: 6,
    label: 'Adeguamento Porte',
    benefit: 'Chiavi in mano',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4lgjh4hjrt9m49Mv834QPCvmOZjG7IjaqQ&s',
  },
];

function ServicesChips() {
  return (
    <div className="w-full max-w-5xl mx-auto mb-8">
      {/* Griglia Cards con Immagini */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative overflow-hidden rounded-lg border border-white/15"
          >
            {/* Immagine di Background */}
            <div className="relative h-16 md:h-20 overflow-hidden">
              <img
                src={service.image}
                alt={service.label}
                className="w-full h-full object-cover"
              />
              {/* Overlay scuro con gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            </div>

            {/* Titolo e Benefit - Sempre visibili */}
            <div className="absolute inset-0 flex flex-col items-start justify-end p-2">
              <h3 className="text-white font-bold text-[10px] md:text-xs leading-tight uppercase tracking-tight">
                {service.label}
              </h3>
              <p className="text-white/80 font-semibold text-[8px] md:text-[9px] mt-0.5 leading-tight italic">
                {service.benefit}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesChips;
