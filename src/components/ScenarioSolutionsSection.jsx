import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

const scenarios = [
  {
    id: 1,
    emoji: '⚡',
    title: 'Voglio fare in fretta senza spaccare',
    situation:
      'Voglio il pavimento nuovo, magari in SPC o gres, ma non voglio demolire mezza casa. Si può posare sopra quello vecchio?',
    solution:
      'Assolutamente sì, zero macerie. Incolliamo o posiamo il nuovo pavimento direttamente su quello esistente. E se il livello si alza? Nessun problema: tagliamo noi le porte interne, regoliamo la blindata e cambiamo i battiscopa.',
    color: 'from-blue-500/20 to-blue-600/10',
    borderColor: 'border-blue-400/40',
    accentColor: 'text-blue-400',
  },
  {
    id: 2,
    emoji: '🏗️',
    title: "C'è da fare il lavoro sporco",
    situation:
      'Il vecchio pavimento è un disastro e anche il sottofondo va rifatto. Chi mi porta via tutti i calcinacci?',
    solution:
      'Facciamo tutto noi, chiavi in mano. Demoliamo, rifacciamo il massetto nuovo a regola d\'arte (perfettamente in piano) e trasportiamo tutte le macerie in una discarica autorizzata. Tu non devi noleggiare furgoni o chiamare altre ditte.',
    color: 'from-amber-500/20 to-amber-600/10',
    borderColor: 'border-amber-400/40',
    accentColor: 'text-amber-400',
  },
  {
    id: 3,
    emoji: '💧',
    title: 'Imprevisti idraulici',
    situation:
      'Devo posare nel bagno o spostare un termosifone per far passare le piastrelle. Devo cercare un idraulico a parte?',
    solution:
      'Nessun artigiano esterno da cercare. Abbiamo la nostra squadra per gli interventi idraulici. Smontiamo noi i sanitari, togliamo i caloriferi e li rimontiamo perfettamente funzionanti a pavimento finito.',
    color: 'from-cyan-500/20 to-cyan-600/10',
    borderColor: 'border-cyan-400/40',
    accentColor: 'text-cyan-400',
  },
  {
    id: 4,
    emoji: '✨',
    title: 'La paura delle rifiniture',
    situation:
      'Ho comprato delle piastrelle enormi e costosissime, ho paura che me le posino storte o che si formino dei gradini tra una e l\'altra.',
    solution:
      'Posa millimetrica garantita. Utilizziamo solo colle professionali specifiche per grandi formati e sistemi a "cunei autolivellanti". Il risultato? Un pavimento perfettamente in bolla, senza un millimetro di dislivello.',
    color: 'from-emerald-500/20 to-emerald-600/10',
    borderColor: 'border-emerald-400/40',
    accentColor: 'text-emerald-400',
  },
];

function ScenarioSolutionsSection() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="w-full bg-gradient-to-b from-slate-900/40 to-slate-900/20 py-16 md:py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Qualsiasi sia la tua situazione,{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-emerald-400">abbiamo già la soluzione</span>
              <span className="absolute -bottom-2 left-0 w-full h-2 md:h-3 bg-emerald-400/20 rounded-sm -rotate-1"></span>
            </span>
          </h2>
          <p className="text-sm md:text-base text-white/60 font-medium mt-6 max-w-2xl mx-auto">
            Non sei solo di fronte a questi dubbi. Abbiamo già aiutato centinaia di clienti nelle tue stesse situazioni.
          </p>
        </div>

        {/* Scenario Cards Grid */}
        <div className="space-y-3 md:space-y-4">
          {scenarios.map((scenario) => {
            const isExpanded = expandedId === scenario.id;
            return (
              <div
                key={scenario.id}
                className={`
                  rounded-2xl overflow-hidden backdrop-blur-xl
                  border transition-all duration-300 cursor-pointer
                  ${scenario.borderColor}
                  ${isExpanded ? `bg-gradient-to-br ${scenario.color} shadow-2xl` : 'bg-white/[0.05] hover:bg-white/[0.08]'}
                `}
                onClick={() => setExpandedId(isExpanded ? null : scenario.id)}
              >
                {/* Header / Trigger */}
                <div className="p-5 md:p-6 flex items-start gap-4 md:gap-5">
                  <div className="text-2xl md:text-3xl flex-shrink-0">{scenario.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-black text-sm md:text-base mb-1 ${scenario.accentColor}`}>
                      {scenario.title}
                    </h3>
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed line-clamp-2">
                      {scenario.situation}
                    </p>
                  </div>
                  <div
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      isExpanded ? 'rotate-90' : ''
                    }`}
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white/40" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Expandable Content */}
                {isExpanded && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-white/10 pt-5 md:pt-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-bold text-xs md:text-sm uppercase tracking-wide mb-2 opacity-75">
                          La tua situazione
                        </h4>
                        <p className="text-white/70 text-xs md:text-sm leading-relaxed italic">
                          {scenario.situation}
                        </p>
                      </div>
                      <div className="h-px bg-gradient-to-r from-white/5 via-white/10 to-white/5"></div>
                      <div>
                        <h4 className={`font-bold text-xs md:text-sm uppercase tracking-wide mb-2 ${scenario.accentColor}`}>
                          Come lo risolviamo
                        </h4>
                        <p className="text-white/80 text-xs md:text-sm leading-relaxed font-medium">
                          {scenario.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-sm md:text-base text-white/60 mb-6">
            Riconosci la tua situazione? Contattaci ora per una consulenza personalizzata.
          </p>
          <a
            href="tel:+393342221212"
            className="
              inline-flex items-center gap-2
              bg-emerald-500 hover:bg-emerald-600
              px-8 py-4 rounded-xl
              text-white font-bold text-sm md:text-base uppercase tracking-tight
              transition-all duration-200
              shadow-[0_8px_0_0_rgba(5,150,105,1),0_16px_30px_-6px_rgba(16,185,129,0.45)]
              hover:shadow-[0_4px_0_0_rgba(5,150,105,1),0_12px_20px_-4px_rgba(16,185,129,0.5)]
              hover:-translate-y-0.5
              active:translate-y-1
              active:shadow-[0_2px_0_0_rgba(5,150,105,1)]
            "
          >
            <span>📞 Contatta la nostra squadra</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ScenarioSolutionsSection;
