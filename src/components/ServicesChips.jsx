const services = [
  {
    id: 1,
    label: 'Parquet',
    image: 'https://www.parquetsartoriale.com/assets/front/images/mediagallery/big/parquet%20moderno%20di%20Olmo%20oliato%20tonalizzato%20(3).jpg',
  },
  {
    id: 2,
    label: 'SPC / Vinilico',
    image: 'https://media.adeo.com/media/4099081/media.png?width=300',
  },
  {
    id: 3,
    label: 'Gres Porcellanato',
    image: 'https://www.pavipro.it/wp-content/uploads/2025/01/wheat-5.jpeg',
  },
  {
    id: 4,
    label: 'Piastrelle',
    image: 'https://imgix.obi.de/api/disc/cms/public/dam/ita/pubblicate/p8.jpg?crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&fp-z=1&w=1920&auto=format%2Ccompress&h=1079',
  },
  {
    id: 5,
    label: 'Rifacimento Massetto',
    image: 'https://www.globalsocietacooperativa.com/wp-content/uploads/2023/04/massetto.jpg',
  },
  {
    id: 6,
    label: 'Adeguamento Porte',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4lgjh4hjrt9m49Mv834QPCvmOZjG7IjaqQ&s',
  },
];

function ServicesChips() {
  return (
    <div className="w-full max-w-5xl mx-auto mb-10">
      {/* Titolo piccolo */}
      <p className="text-xs md:text-sm text-white/60 font-bold uppercase tracking-widest mb-5 text-center">
        ✨ Materiali e Servizi Disponibili
      </p>

      {/* Griglia Cards con Immagini */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="
              group relative overflow-hidden
              rounded-2xl backdrop-blur-xl
              border border-white/20 hover:border-white/40
              transition-all duration-300 cursor-pointer
              hover:shadow-2xl hover:shadow-emerald-500/20
            "
          >
            {/* Immagine di Background */}
            <div className="relative h-28 md:h-32 overflow-hidden">
              <img
                src={service.image}
                alt={service.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Overlay scuro con gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            </div>

            {/* Titolo sopra l'immagine (in basso) */}
            <div className="absolute inset-0 flex items-end p-3 md:p-4">
              <h3 className="text-white font-bold text-xs md:text-sm leading-tight">
                {service.label}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Testo informativo sotto */}
      <p className="text-xs md:text-sm text-white/50 text-center mt-6 font-medium">
        E molto altro. Durante il sopralluogo ti proponiamo tutto quello che serve.
      </p>
    </div>
  );
}

export default ServicesChips;
