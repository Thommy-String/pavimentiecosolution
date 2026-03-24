import React from 'react';

const services = [
  {
    id: 1,
    label: 'Parquet',
    price: '€ 20',
    image: 'https://www.parquetsartoriale.com/assets/front/images/mediagallery/big/parquet%20moderno%20di%20Olmo%20oliato%20tonalizzato%20(3).jpg',
  },
  {
    id: 2,
    label: 'Gres Porcellanato',
    price: '€ 20',
    image: 'https://www.pavipro.it/wp-content/uploads/2025/01/wheat-5.jpeg',
  },
  {
    id: 3,
    label: 'SPC / Vinilico',
    price: '€ 15',
    image: 'https://media.adeo.com/media/4099081/media.png?width=300',
  },
  {
    id: 4,
    label: 'Piastrelle',
    price: '€ 15',
    image: 'https://imgix.obi.de/api/disc/cms/public/dam/ita/pubblicate/p8.jpg?crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&fp-z=1&w=1920&auto=format%2Ccompress&h=1079',
  },
  {
    id: 5,
    label: 'Laminato',
    price: '€ 15',
    image: 'https://www.pavimentieparquet.com/wp-content/uploads/posa-parquet-flottante-scaled.webp',
  },
  {
    id: 6,
    label: 'Marmo & Pietra',
    price: '€ 35',
    image: 'https://images.squarespace-cdn.com/content/v1/5acf2e25a9e028b9d3e29660/1546952504876-44CSZV8FRFIGPYKM2HNK/pavimento+su+misura+in+marmo+bianco',
  },
];

function ServicesChips() {
  return (
    <div className="w-full max-w-5xl mx-auto mb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative overflow-hidden rounded-xl h-28 md:h-44"
          >
            {/* Immagine full */}
            <img
              src={service.image}
              alt={service.label}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay: trasparente in alto, scuro in basso */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Prezzo — in alto a destra */}
            <div className="absolute top-2.5 right-2.5 md:top-3 md:right-3">
              <span className="text-white/90 font-semibold text-[10px] md:text-xs bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md tracking-wide">
                da {service.price}/mq
              </span>
            </div>

            {/* Nome — in basso a sinistra */}
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
              <h3 className="text-white font-bold text-xs md:text-sm uppercase tracking-widest leading-tight">
                {service.label}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesChips;
