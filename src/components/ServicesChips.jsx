import { Layers, Zap, Wrench, Droplet } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: '🪵',
    label: 'Parquet',
    description: 'Posatura parquet legno massello e laminato',
  },
  {
    id: 2,
    icon: '⬜',
    label: 'SPC / Vinilico',
    description: 'Pavimenti in SPC e vinile di lusso',
  },
  {
    id: 3,
    icon: '🟫',
    label: 'Gres',
    description: 'Piastrelle in gres porcellanato',
  },
  {
    id: 4,
    icon: '🪨',
    label: 'Piastrelle',
    description: 'Ceramica, monocottura e piastrelloni',
  },
  {
    id: 5,
    icon: '🔨',
    label: 'Rifacimento Massetto',
    description: 'Massetto nuovo a regola d\'arte',
  },
  {
    id: 6,
    icon: '🚪',
    label: 'Adeguamenti Porte',
    description: 'Taglio porte e battiscopa',
  },
  {
    id: 7,
    icon: '💧',
    label: 'Servizi Idraulici',
    description: 'Spostamento sanitari e termosifoni',
  },
  {
    id: 8,
    icon: '🗑️',
    label: 'Smaltimento Macerie',
    description: 'Trasporto in discarica autorizzata',
  },
];

function ServicesChips() {
  return (
    <div className="w-full max-w-5xl mx-auto mb-8">
      {/* Titolo piccolo */}
      <p className="text-xs md:text-sm text-white/60 font-bold uppercase tracking-widest mb-4 text-center">
        ✨ Servizi e Materiali
      </p>

      {/* Griglia Chips */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="
              group relative
              bg-white/[0.08] hover:bg-white/[0.12] 
              backdrop-blur-xl border border-white/15 hover:border-white/25
              rounded-xl px-3 md:px-4 py-3 md:py-4
              transition-all duration-200 cursor-pointer
              hover:shadow-lg hover:shadow-emerald-500/10
            "
            title={service.description}
          >
            {/* Icon + Label */}
            <div className="flex items-start gap-2.5">
              <span className="text-lg md:text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {service.icon}
              </span>
              <span className="text-xs md:text-sm font-bold text-white leading-tight">
                {service.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Testo informativo sotto */}
      <p className="text-xs md:text-sm text-white/50 text-center mt-5 font-medium">
        E molto altro. Durante il sopralluogo ti proponiamo tutto quello che serve.
      </p>
    </div>
  );
}

export default ServicesChips;
