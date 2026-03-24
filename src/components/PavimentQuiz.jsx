import React, { useState, useRef } from 'react';
import { MessageCircle, ArrowLeft, CheckCircle2, HelpCircle, Package, Wrench, Layers, Hammer, Maximize } from 'lucide-react';
import { PHONE_NUMBER } from '../utils/constants';

/* ───────── material cards (same data as ServicesChips in Hero) ───────── */

const materialCards = [
  {
    id: 'parquet',
    label: 'Parquet',
    pricePerMq: 20,
    image: 'https://www.parquetsartoriale.com/assets/front/images/mediagallery/big/parquet%20moderno%20di%20Olmo%20oliato%20tonalizzato%20(3).jpg',
  },
  {
    id: 'gres',
    label: 'Gres Porcellanato',
    pricePerMq: 20,
    image: 'https://www.pavipro.it/wp-content/uploads/2025/01/wheat-5.jpeg',
  },
  {
    id: 'spc',
    label: 'SPC / Vinilico',
    pricePerMq: 15,
    image: 'https://media.adeo.com/media/4099081/media.png?width=300',
  },
  {
    id: 'piastrelle',
    label: 'Piastrelle',
    pricePerMq: 15,
    image: 'https://imgix.obi.de/api/disc/cms/public/dam/ita/pubblicate/p8.jpg?crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&fp-z=1&w=1920&auto=format%2Ccompress&h=1079',
  },
  {
    id: 'laminato',
    label: 'Laminato',
    pricePerMq: 15,
    image: 'https://www.pavimentieparquet.com/wp-content/uploads/posa-parquet-flottante-scaled.webp',
  },
  {
    id: 'marmo',
    label: 'Marmo & Pietra',
    pricePerMq: 35,
    image: 'https://images.squarespace-cdn.com/content/v1/5acf2e25a9e028b9d3e29660/1546952504876-44CSZV8FRFIGPYKM2HNK/pavimento+su+misura+in+marmo+bianco',
  },
];

/* ───────── other step data ───────── */

const supplyOptions = [
  {
    id: 'supply_install',
    title: 'Fornitura + Posa',
    desc: 'Pensiamo a tutto noi: materiale e installazione.',
    icon: Package,
    accent: 'emerald',
  },
  {
    id: 'install_only',
    title: 'Solo Posa',
    desc: 'Ho già il materiale, mi serve solo la manodopera.',
    icon: Wrench,
    accent: 'amber',
  },
  {
    id: 'not_sure_supply',
    title: 'Non sono sicuro',
    desc: 'Vorrei capire quale opzione conviene di più.',
    icon: HelpCircle,
    accent: 'blue',
  },
];

const floorStateOptions = [
  {
    id: 'existing_floor',
    title: 'Pavimento esistente',
    desc: 'Si posa sopra o si rimuove il vecchio pavimento.',
    icon: Layers,
    accent: 'orange',
  },
  {
    id: 'subfloor_ready',
    title: 'Massetto già pronto',
    desc: 'Il sottofondo è già livellato e pronto per la posa.',
    icon: Maximize,
    accent: 'emerald',
  },
  {
    id: 'redo_subfloor',
    title: 'Dobbiamo rifare il massetto',
    desc: 'Il massetto va rifatto o livellato prima della posa.',
    icon: Hammer,
    accent: 'blue',
  },
  {
    id: 'not_sure_state',
    title: 'Non lo so',
    desc: 'Preferisco che venga valutato in sopralluogo.',
    icon: HelpCircle,
    accent: 'slate',
  },
];

const sqmPresets = [
  { label: 'Bagno / Ripostiglio', hint: '5 – 10 mq', value: 8 },
  { label: 'Camera da letto', hint: '12 – 18 mq', value: 15 },
  { label: 'Zona giorno', hint: '25 – 40 mq', value: 30 },
  { label: 'Appartamento intero', hint: '50 – 90 mq', value: 70 },
  { label: 'Grande superficie', hint: '100+ mq', value: 120 },
];

/* ───────── accent helpers ───────── */
const accentMap = {
  emerald: {
    bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-200',
    hoverBg: 'group-hover:bg-emerald-600', hoverText: 'group-hover:text-white',
  },
  amber: {
    bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-200',
    hoverBg: 'group-hover:bg-amber-600', hoverText: 'group-hover:text-white',
  },
  blue: {
    bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200',
    hoverBg: 'group-hover:bg-blue-600', hoverText: 'group-hover:text-white',
  },
  orange: {
    bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200',
    hoverBg: 'group-hover:bg-orange-600', hoverText: 'group-hover:text-white',
  },
  slate: {
    bg: 'bg-slate-100', text: 'text-slate-500', border: 'border-slate-200',
    hoverBg: 'group-hover:bg-slate-600', hoverText: 'group-hover:text-white',
  },
};

/* ───────── price calc helper ───────── */
function calcPriceRange(material, sqm) {
  if (!material || !sqm) return null;
  const card = materialCards.find((c) => c.id === material.id);
  if (!card) return null;
  const low = card.pricePerMq * sqm;
  const high = Math.round(card.pricePerMq * 1.9) * sqm;
  const fmt = (n) => n.toLocaleString('it-IT');
  return { low: fmt(low), high: fmt(high), perMq: card.pricePerMq };
}

/* ───────── component ───────── */

function PavimentQuiz() {
  const TOTAL_STEPS = 4;
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    material: null,    // { id, label, pricePerMq } or { id:'ideas' } or { id:'help' }
    supply: null,      // { id, title }
    floorState: null,  // { id, title }
    sqm: 30,
  });

  const quizRef = useRef(null);

  const scrollToTop = () => {
    if (quizRef.current) {
      const y = quizRef.current.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const advance = (patch) => {
    setSelections((prev) => ({ ...prev, ...patch }));
    setStep((s) => s + 1);
    setTimeout(scrollToTop, 80);
  };

  const goBack = () => {
    setStep((s) => Math.max(1, s - 1));
    setTimeout(scrollToTop, 80);
  };

  const resetQuiz = () => {
    setStep(1);
    setSelections({ material: null, supply: null, floorState: null, sqm: 30 });
    setTimeout(scrollToTop, 80);
  };

  const cleanPhone = PHONE_NUMBER ? PHONE_NUMBER.replace(/\D/g, '') : '393342221212';

  const priceRange = calcPriceRange(selections.material, selections.sqm);

  const generateWhatsAppMessage = () => {
    const matLabel = selections.material?.label || (selections.material?.id === 'ideas' ? 'Ho qualche idea' : 'Da decidere insieme');
    const lines = [
      `Ciao! Ho compilato il configuratore sul vostro sito.`,
      ``,
      `*Riepilogo:*`,
      `Materiale: ${matLabel}`,
      `Servizio: ${selections.supply?.title || '—'}`,
      `Stato attuale: ${selections.floorState?.title || '—'}`,
      `Superficie: circa ${selections.sqm} mq`,
      ...(priceRange ? [`Stima indicativa: € ${priceRange.low} – € ${priceRange.high}`] : []),
      ``,
      `Vorrei ricevere un preventivo dettagliato. Grazie!`,
    ];
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  /* ── reusable option card (for steps 2-3) ── */
  const OptionCard = ({ item, onSelect }) => {
    const a = accentMap[item.accent] || accentMap.emerald;
    return (
      <button
        onClick={onSelect}
        className="group flex flex-col items-start p-5 md:p-6 rounded-2xl border-2 border-slate-200 hover:border-slate-900 hover:shadow-lg hover:-translate-y-0.5 transition-all text-left bg-white"
      >
        <div className={`w-11 h-11 flex items-center justify-center rounded-xl mb-3 border ${a.bg} ${a.text} ${a.border} ${a.hoverBg} ${a.hoverText} transition-colors`}>
          <item.icon className="w-5 h-5" />
        </div>
        <span className="font-black text-lg md:text-xl mb-1 text-slate-900 uppercase tracking-tight group-hover:text-emerald-600 transition-colors leading-snug">
          {item.title}
        </span>
        <span className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</span>
      </button>
    );
  };

  const StepHeader = ({ number, title }) => (
    <div className="mb-8">
      <span className="text-[11px] font-bold bg-white border border-slate-200 text-slate-500 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
        Step {number} di {TOTAL_STEPS}
      </span>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
        {title}
      </h3>
    </div>
  );

  const BackButton = () => (
    <button onClick={goBack} className="flex items-center text-sm font-bold text-slate-400 hover:text-slate-800 transition-colors mb-6 uppercase tracking-wider">
      <ArrowLeft className="w-4 h-4 mr-1.5" /> Indietro
    </button>
  );

  const progressPercent = (step / (TOTAL_STEPS + 1)) * 100;

  /* ─────────────── RENDER ─────────────── */
  return (
    <section ref={quizRef} className="bg-white py-8 md:py-12 border-b border-slate-100 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Quiz Card */}
        <div className="bg-slate-50 rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden relative">
          {/* Progress Bar */}
          <div className="flex h-1.5 w-full bg-slate-200 absolute top-0 left-0 z-10">
            <div className="h-full bg-emerald-500 transition-all duration-500 ease-out" style={{ width: `${progressPercent}%` }} />
          </div>

          <div className="p-4 sm:p-6 md:p-10">

            {/* ──────── STEP 1 — Sai già che pavimento vuoi? ──────── */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <StepHeader number={1} title="Sai già che pavimento vuoi?" />

                {/* Material image cards — 2 col grid like Hero */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-6">
                  {materialCards.map((mat) => (
                    <button
                      key={mat.id}
                      onClick={() => advance({ material: { id: mat.id, label: mat.label, pricePerMq: mat.pricePerMq } })}
                      className="group relative overflow-hidden rounded-xl h-28 md:h-40 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-transform hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <img src={mat.image} alt={mat.label} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors" />
                      {/* Price pill */}
                      <div className="absolute top-2.5 right-2.5 md:top-3 md:right-3">
                        <span className="text-white/90 font-semibold text-[10px] md:text-xs bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md tracking-wide">
                          da €{mat.pricePerMq}/mq
                        </span>
                      </div>
                      {/* Label */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                        <h3 className="text-white font-bold text-xs md:text-sm uppercase tracking-widest leading-tight group-hover:text-emerald-300 transition-colors">
                          {mat.label}
                        </h3>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 my-6">
                  <div className="flex-1 h-px bg-slate-200" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">oppure</span>
                  <div className="flex-1 h-px bg-slate-200" />
                </div>

                {/* Secondary options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => advance({ material: { id: 'ideas', label: null, pricePerMq: null } })}
                    className="group flex items-center gap-4 p-4 md:p-5 rounded-2xl border-2 border-slate-200 hover:border-slate-900 hover:shadow-lg hover:-translate-y-0.5 transition-all text-left bg-white"
                  >
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl border bg-amber-100 text-amber-600 border-amber-200 group-hover:bg-amber-600 group-hover:text-white transition-colors shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-black text-base md:text-lg text-slate-900 uppercase tracking-tight group-hover:text-emerald-600 transition-colors leading-snug block">
                        Ho qualche idea
                      </span>
                      <span className="text-sm text-slate-500 font-medium">Sto valutando tra un paio di opzioni.</span>
                    </div>
                  </button>
                  <button
                    onClick={() => advance({ material: { id: 'help', label: null, pricePerMq: null } })}
                    className="group flex items-center gap-4 p-4 md:p-5 rounded-2xl border-2 border-slate-200 hover:border-slate-900 hover:shadow-lg hover:-translate-y-0.5 transition-all text-left bg-white"
                  >
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl border bg-blue-100 text-blue-600 border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-black text-base md:text-lg text-slate-900 uppercase tracking-tight group-hover:text-emerald-600 transition-colors leading-snug block">
                        No, aiutatemi voi
                      </span>
                      <span className="text-sm text-slate-500 font-medium">Vorrei un consiglio da un esperto.</span>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* ──────── STEP 2 — Fornitura + Posa o Solo Posa ──────── */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <BackButton />
                <StepHeader number={2} title="Di cosa hai bisogno?" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {supplyOptions.map((opt) => (
                    <OptionCard key={opt.id} item={opt} onSelect={() => advance({ supply: { id: opt.id, title: opt.title } })} />
                  ))}
                </div>
              </div>
            )}

            {/* ──────── STEP 3 — Stato attuale del pavimento ──────── */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <BackButton />
                <StepHeader number={3} title="Su cosa verrà posato?" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {floorStateOptions.map((opt) => (
                    <OptionCard key={opt.id} item={opt} onSelect={() => advance({ floorState: { id: opt.id, title: opt.title } })} />
                  ))}
                </div>
              </div>
            )}

            {/* ──────── STEP 4 — Metri Quadri ──────── */}
            {step === 4 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <BackButton />
                <StepHeader number={4} title="Quanti metri quadri, più o meno?" />

                {/* Quick-pick presets */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {sqmPresets.map((p) => (
                    <button
                      key={p.value}
                      onClick={() => setSelections((prev) => ({ ...prev, sqm: p.value }))}
                      className={`px-4 py-2.5 rounded-xl border-2 text-left transition-all ${
                        selections.sqm === p.value
                          ? 'border-emerald-500 bg-emerald-50 shadow-sm'
                          : 'border-slate-200 bg-white hover:border-slate-400'
                      }`}
                    >
                      <span className="block font-bold text-sm text-slate-900 leading-tight">{p.label}</span>
                      <span className="block text-[11px] text-slate-500 font-medium">{p.hint}</span>
                    </button>
                  ))}
                </div>

                {/* Slider */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-6">
                  <div className="flex items-end justify-between mb-4">
                    <label className="text-sm font-bold text-slate-600 uppercase tracking-widest">Superficie</label>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl md:text-6xl font-black text-emerald-600 leading-none tabular-nums">{selections.sqm}</span>
                      <span className="text-lg font-bold text-slate-400">mq</span>
                    </div>
                  </div>
                  <input
                    type="range" min={5} max={200} step={1}
                    value={selections.sqm}
                    onChange={(e) => setSelections((prev) => ({ ...prev, sqm: Number(e.target.value) }))}
                    className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-emerald-500 
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 
                      [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-500 
                      [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:border-2 
                      [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:cursor-grab
                      [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full
                      [&::-moz-range-thumb]:bg-emerald-500 [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white"
                  />
                  <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-2">
                    <span>5 mq</span>
                    <span>200 mq</span>
                  </div>
                </div>

                {/* CTA to results */}
                <button
                  onClick={() => { setStep(5); setTimeout(scrollToTop, 80); }}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-6 rounded-2xl font-black text-lg uppercase tracking-tight shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Vedi il mio preventivo →
                </button>
              </div>
            )}

            {/* ──────── STEP 5 — RESULTS ──────── */}
            {step === 5 && (
              <div className="animate-in fade-in zoom-in-95 duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Perfetto!</p>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">Ecco il tuo riepilogo</h3>
                  </div>
                </div>

                {/* Summary card */}
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-2 border-emerald-200 rounded-2xl p-6 md:p-8 mb-8">
                  <div className="space-y-4">
                    <SummaryRow
                      label="Materiale"
                      value={
                        selections.material?.label
                          || (selections.material?.id === 'ideas' ? 'Ho qualche idea' : 'Da decidere insieme')
                      }
                    />
                    <SummaryRow label="Servizio" value={selections.supply?.title} />
                    <SummaryRow label="Stato attuale" value={selections.floorState?.title} />
                    <SummaryRow label="Superficie" value={`${selections.sqm} mq`} />

                    {/* Price range — only if a specific material was chosen */}
                    {priceRange && (
                      <div className="border-t border-emerald-300 pt-5 mt-5">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
                          <div>
                            <span className="font-bold text-slate-600 text-sm uppercase tracking-widest block mb-1">Stima indicativa</span>
                            <span className="text-xs text-slate-500 font-medium">Solo posa, da € {priceRange.perMq}/mq</span>
                          </div>
                          <p className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-600 leading-none whitespace-nowrap">
                            € {priceRange.low} – {priceRange.high}
                          </p>
                        </div>
                        <p className="text-xs text-slate-500 font-medium mt-3">
                          *Posa in opera. Fornitura materiale, rimozione vecchio pavimento e preparazione massetto quotati a parte dopo sopralluogo gratuito.
                        </p>
                      </div>
                    )}

                    {/* No price — generic message */}
                    {!priceRange && (
                      <div className="border-t border-emerald-300 pt-5 mt-5">
                        <p className="text-sm text-slate-600 font-medium">
                          Dopo un breve sopralluogo gratuito ti forniremo un preventivo dettagliato con tutte le voci di spesa.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Personalized nudge */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 mb-8 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-lg">💡</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm mb-1">
                      {selections.floorState?.id === 'existing_floor'
                        ? 'Valuteremo se posare sopra o rimuovere il vecchio pavimento — entrambe le opzioni sono nel nostro servizio chiavi in mano.'
                        : selections.floorState?.id === 'redo_subfloor'
                        ? 'Nessun problema: ci occupiamo anche del rifacimento del massetto prima della posa.'
                        : selections.material?.id === 'help'
                        ? 'Ti guideremo nella scelta del materiale perfetto durante il sopralluogo gratuito.'
                        : selections.supply?.id === 'install_only'
                        ? 'Ottimo! Controlleremo che il materiale sia idoneo e procediamo con la posa.'
                        : 'Ti invieremo un preventivo dettagliato entro 24 ore dal sopralluogo.'}
                    </p>
                    <p className="text-sm text-slate-500">
                      Il prezzo finale dipende dal materiale, dalla preparazione del fondo e dalle finiture. Il sopralluogo è gratuito e senza impegno.
                    </p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <a
                    href={generateWhatsAppMessage()}
                    onClick={() => { if (typeof window.gtag_report_conversion === 'function') window.gtag_report_conversion(); }}
                    target="_blank" rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 rounded-2xl font-black text-center uppercase tracking-tight shadow-md hover:shadow-xl transition-all flex justify-center items-center gap-2 text-base md:text-lg hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-6 h-6 shrink-0" />
                    <span>Invia su WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${cleanPhone}`}
                    onClick={() => { if (typeof window.gtag_report_conversion === 'function') window.gtag_report_conversion(); }}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-6 rounded-2xl font-black text-center uppercase tracking-tight shadow-md hover:shadow-xl transition-all flex justify-center items-center gap-2 text-base md:text-lg hover:-translate-y-0.5"
                  >
                    <span>📞 Chiama Ora</span>
                  </a>
                </div>

                {/* Reassurance */}
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs md:text-sm text-slate-500 font-bold">
                  {['Sopralluogo Gratuito', 'Nessun Obbligo', 'Risposta in Giornata'].map((t) => (
                    <span key={t} className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {t}
                    </span>
                  ))}
                </div>

                <button onClick={resetQuiz} className="w-full mt-6 text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-wider font-bold text-xs underline underline-offset-4 decoration-slate-300 hover:decoration-slate-600">
                  Rifai il configuratore
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── tiny helper ── */
function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between items-start gap-4">
      <span className="font-bold text-slate-600 text-sm uppercase tracking-widest shrink-0">{label}</span>
      <span className="font-black text-base md:text-lg text-slate-900 text-right">{value || '—'}</span>
    </div>
  );
}

export default PavimentQuiz;
