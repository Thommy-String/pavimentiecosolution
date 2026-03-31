import heroVideo from '../assets/video/pvcWindoGoldenOak.mp4';
import pvcImage from '../assets/images/aboutuslavori copia/pvcImage1.jpg';

function Hero() {

  return (
    <>
      {/* ─── SEZIONE 1: Hero principale — sfondo video, tipografia enorme ─── */}
      <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center bg-black overflow-hidden">

        {/* Video di sfondo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Overlay scuro per leggibilità del testo — ridotto per più luminosità */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Glow ambientale colorato — soft e sottile */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[140%] max-w-[1200px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(182,120,255,0.08)_0%,rgba(255,100,50,0.04)_40%,transparent_70%)] blur-3xl" />
        </div>

        <div className="relative z-10 w-full mx-auto px-8 sm:px-16 md:px-20 lg:px-32 pt-20 pb-12 md:pt-28 md:pb-16 flex flex-col items-center text-center">

          {/* Eyebrow — piccola, understatement elegante */}
          <p className="text-sm sm:text-base font-medium text-white/80 tracking-wide mb-8 uppercase">
            Lentate Sul Seveso MB - Via Libertà 🇮🇹
          </p>

          {/* Headline — ENORME, gradient colorato stile Apple — viola/magenta/arancio */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-bold tracking-[-0.06em] leading-[1.1] mb-10 drop-shadow-[0_6px_30px_rgba(0,0,0,0.6)]">
            <span className="block text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
            Fabbrica di
            </span>
            <span className="block bg-gradient-to-r from-[#64b5f6] via-[#ff7ea0] to-[#ffab6b] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
               Serramenti su Misura
            </span>
          </h1>

          {/* Value props — 3 punti con check, stile Apple minimal */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-2">
            {[
              'Compra al prezzo di Fabbrica',
              'Zero intermediari',
              'Prezzi Shock',
            ].map((text) => (
              <div key={text} className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-[#30d158] shrink-0" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.15" />
                  <path d="M7.5 12.5l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-base sm:text-lg font-bold text-white/90 tracking-tight">{text}</span>
              </div>
            ))}
          </div>

          {/* Brand logos — profili utilizzati */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-xs font-medium text-white uppercase tracking-[0.2em]">100% Qualità tedesca certificata</p>
            <div className="flex items-center gap-12">
              <img
                src="https://upload.wikimedia.org/wikipedia/de/thumb/6/64/Aluplast_Logo.svg/1280px-Aluplast_Logo.svg.png"
                alt="Aluplast"
                className="h-10 sm:h-14 w-auto object-contain opacity-100"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Logo-veka.svg/1280px-Logo-veka.svg.png"
                alt="VEKA"
                className="h-10 sm:h-14 w-auto object-contain opacity-100"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ─── SEZIONE PREZZI: Caroselli orizzontali per categoria ─── */}
      <section className="relative w-full bg-[#f5f5f7] py-24 md:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">

          {/* Section header */}
          <div className="text-center mb-16 md:mb-24 px-6 sm:px-10 md:px-20">
            <p className="text-sm font-semibold text-[#0071e3] uppercase tracking-widest mb-4">Listino Prezzi</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] text-[#1d1d1f] leading-[1.05]">
              Confronta. Scegli.<br />
              <span className="bg-gradient-to-r from-[#0071e3] to-[#00c7be] bg-clip-text text-transparent">Risparmia.</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto leading-relaxed">
              Prezzi reali di fabbrica. Nessun ricarico showroom.
            </p>
          </div>

          {/* ── Carosello PVC ── */}
          <div className="mb-16">
            <div className="px-6 sm:px-10 md:px-16 mb-5 flex items-baseline gap-3">
              <h3 className="text-xl font-bold text-[#1d1d1f]">Infissi in PVC</h3>
              <span className="text-sm text-[#86868b]">energeto® NEO · 4 modelli disponibili</span>
            </div>
            <div
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
              style={{ paddingLeft: 'clamp(1.5rem, 5vw, 4rem)', paddingRight: 'clamp(1.5rem, 5vw, 4rem)', scrollbarWidth: 'none' }}
            >
              {[
                { name: 'IDEAL NEO AD', badge: 'Entry', badgeColor: 'bg-slate-500', price: '€190', savings: '€2.100', uf: '1.2 W/m²K', uw: '0.79 W/m²K', vetro: '54mm', guarnizioni: '2', armatura: 'Acciaio', profilo: 'Decalato' },
                { name: 'IDEAL NEO MD', badge: 'Standard', badgeColor: 'bg-[#0071e3]', price: '€210', savings: '€2.300', uf: '1.1 W/m²K', uw: '0.76 W/m²K', vetro: '54mm', guarnizioni: '3', armatura: 'Acciaio', profilo: 'Decalato' },
                { name: 'NEO View', badge: 'Premium', badgeColor: 'bg-violet-600', price: '€240', savings: '€2.500', uf: '1.1 W/m²K', uw: '0.75 W/m²K', vetro: '60mm', guarnizioni: '3', armatura: 'Acciaio', profilo: 'Canat nascosto', highlight: true },
                { name: 'NEO MD FB', badge: 'Top', badgeColor: 'bg-amber-500', price: '€280', savings: '€2.800', uf: '0.96 W/m²K', uw: '0.72 W/m²K', vetro: '68mm', guarnizioni: '3', armatura: 'Powerdur', profilo: 'Allineato' },
              ].map((m) => (
                <div
                  key={m.name}
                  className={`snap-start shrink-0 w-[72vw] sm:w-[360px] rounded-3xl bg-white flex flex-col overflow-hidden transition-all duration-500 min-h-[520px] hover:scale-105 hover:shadow-2xl ${m.highlight ? 'border-2 border-[#0071e3] shadow-xl' : 'border border-[#e5e5e7] shadow-sm hover:shadow-lg'}`}
                >
                  {/* Card top — immagine + badge */}
                  <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[#f0f0f5] to-[#e5e5e7]">
                    <img src={pvcImage} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className={`absolute inset-0 ${m.highlight ? 'bg-gradient-to-t from-black/50 to-black/10' : 'bg-gradient-to-t from-black/35 to-transparent'}`} />
                    <span className={`absolute top-4 right-4 text-[11px] font-bold uppercase tracking-widest text-white ${m.badgeColor} px-3 py-1.5 rounded-full shadow-lg`}>
                      {m.badge}
                    </span>
                  </div>

                  {/* Titolo card */}
                  <div className="px-6 pt-6 pb-2">
                    <h4 className="text-lg font-bold text-[#1d1d1f] tracking-tight">{m.name}</h4>
                  </div>

                  {/* Prezzo — prominente */}
                  <div className="px-6 py-4 bg-gradient-to-r from-[#0071e3]/5 to-transparent rounded-2xl mx-6 mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-[#1d1d1f]">{m.price}</span>
                      <span className="text-sm text-[#86868b] font-medium">/mq + iva</span>
                    </div>
                    <p className="text-sm text-[#30d158] font-semibold mt-2">💰 Risparmi {m.savings} su 10 finestre</p>
                  </div>

                  {/* Specs griglia — migliorati */}
                  <div className="px-6 py-4 grid grid-cols-2 gap-x-6 gap-y-4 flex-1">
                    {[
                      { label: 'Trasmittanza Uf', val: m.uf },
                      { label: 'Coeff. Uw', val: m.uw },
                      { label: 'Luce vetro', val: m.vetro },
                      { label: 'Guarnizioni', val: m.guarnizioni },
                      { label: 'Armatura', val: m.armatura },
                      { label: 'Profilo', val: m.profilo },
                    ].map((s) => (
                      <div key={s.label} className="flex flex-col gap-1">
                        <p className="text-[10px] font-semibold text-[#86868b] uppercase tracking-wider">{s.label}</p>
                        <p className="text-sm font-bold text-[#1d1d1f]">{s.val}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA — full width con grip */}
                  <div className="px-6 pb-6 mt-auto">
                    <button className={`w-full py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 ${m.highlight ? 'text-white bg-[#0071e3] hover:bg-[#0055b3] shadow-lg' : 'text-white bg-[#1d1d1f] hover:bg-[#0a0a0a] shadow-md'}`}>
                      Richiedi preventivo
                    </button>
                  </div>
                </div>
              ))}
              {/* Spacer finale per vedere la prossima card */}
              <div className="shrink-0 w-6" />
            </div>
          </div>

          {/* ── Carosello Alluminio ── */}
          <div className="mb-16">
            <div className="px-6 sm:px-10 md:px-16 mb-5 flex items-baseline gap-3">
              <h3 className="text-xl font-bold text-[#1d1d1f]">Infissi in Alluminio</h3>
              <span className="text-sm text-[#86868b]">Taglio termico · 3 serie disponibili</span>
            </div>
            <div
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
              style={{ paddingLeft: 'clamp(1.5rem, 5vw, 4rem)', paddingRight: 'clamp(1.5rem, 5vw, 4rem)', scrollbarWidth: 'none' }}
            >
              {[
                { name: 'Alum. Residenziale', badge: 'Standard', price: '€280', savings: '€2.200', taglio: '55mm', uf: '1.4 W/m²K', finitura: 'RAL standard', uso: 'Residenziale', colori: '50+' },
                { name: 'Alum. Termico+', badge: 'Performance', price: '€320', savings: '€2.600', taglio: '65mm', uf: '1.1 W/m²K', finitura: 'RAL + anodizzato', uso: 'Residenziale / Comm.', colori: '200+', highlight: true },
                { name: 'Alum. Passivo', badge: 'Top', price: '€380', savings: '€3.200', taglio: '75mm', uf: '0.8 W/m²K', finitura: 'Qualsiasi RAL', uso: 'Grandi vetrate', colori: '∞' },
              ].map((m) => (
                <div
                  key={m.name}
                  className={`snap-start shrink-0 w-[72vw] sm:w-[360px] rounded-3xl bg-white flex flex-col overflow-hidden transition-all duration-500 min-h-[520px] hover:scale-105 hover:shadow-2xl ${m.highlight ? 'border-2 border-slate-400 shadow-xl' : 'border border-[#e5e5e7] shadow-sm hover:shadow-lg'}`}
                >
                  {/* Card top */}
                  <div className="relative h-52 bg-gradient-to-br from-slate-200 to-slate-500 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white/30" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                      <rect x="2" y="2" width="20" height="20" rx="2" />
                      <path d="M2 9h20M9 2v20" />
                    </svg>
                    <span className={`absolute top-4 right-4 text-[11px] font-bold uppercase tracking-widest text-white ${m.highlight ? 'bg-slate-600' : 'bg-slate-500'} px-3 py-1.5 rounded-full shadow-lg`}>
                      {m.badge}
                    </span>
                  </div>

                  {/* Titolo card */}
                  <div className="px-6 pt-6 pb-2">
                    <h4 className="text-lg font-bold text-[#1d1d1f] tracking-tight">{m.name}</h4>
                  </div>

                  {/* Prezzo — prominente */}
                  <div className="px-6 py-4 bg-gradient-to-r from-slate-100/60 to-transparent rounded-2xl mx-6 mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-[#1d1d1f]">{m.price}</span>
                      <span className="text-sm text-[#86868b] font-medium">/mq + iva</span>
                    </div>
                    <p className="text-sm text-[#30d158] font-semibold mt-2">💰 Risparmi {m.savings} su 10 finestre</p>
                  </div>

                  {/* Specs — migliorati */}
                  <div className="px-6 py-4 grid grid-cols-2 gap-x-6 gap-y-4 flex-1">
                    {[
                      { label: 'Taglio termico', val: m.taglio },
                      { label: 'Trasmittanza Uf', val: m.uf },
                      { label: 'Finitura', val: m.finitura },
                      { label: 'Utilizzo', val: m.uso },
                      { label: 'Colori disponibili', val: m.colori },
                    ].map((s) => (
                      <div key={s.label} className="flex flex-col gap-1">
                        <p className="text-[10px] font-semibold text-[#86868b] uppercase tracking-wider">{s.label}</p>
                        <p className="text-sm font-bold text-[#1d1d1f]">{s.val}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="px-6 pb-6 mt-auto">
                    <button className={`w-full py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 ${m.highlight ? 'text-white bg-slate-600 hover:bg-slate-700 shadow-lg' : 'text-white bg-[#1d1d1f] hover:bg-[#0a0a0a] shadow-md'}`}>
                      Richiedi preventivo
                    </button>
                  </div>
                </div>
              ))}
              <div className="shrink-0 w-6" />
            </div>
          </div>

          {/* ── Carosello Legno-Alluminio ── */}
          <div>
            <div className="px-6 sm:px-10 md:px-16 mb-5 flex items-baseline gap-3">
              <h3 className="text-xl font-bold text-[#1d1d1f]">Legno · Alluminio</h3>
              <span className="text-sm text-[#86868b] flex items-center gap-1.5">
                Premium
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">Top di gamma</span>
              </span>
            </div>
            <div
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
              style={{ paddingLeft: 'clamp(1.5rem, 5vw, 4rem)', paddingRight: 'clamp(1.5rem, 5vw, 4rem)', scrollbarWidth: 'none' }}
            >
              {[
                { name: 'Legno-Alu Classico', badge: 'Classic', price: '€420', savings: '€2.800', legno: 'Pino lamellare', esterno: 'Alluminio standard', vetro: 'Doppio Low-E', garanzia: '15 anni', pefc: 'Sì' },
                { name: 'Legno-Alu Passivo', badge: 'Premium', price: '€520', savings: '€3.500', legno: 'Abete/rovere', esterno: 'Alu verniciato', vetro: 'Triplo selettivo', garanzia: '20 anni', pefc: 'Certificato PEFC', highlight: true },
                { name: 'Legno-Alu Prestige', badge: 'Prestige', price: '€650', savings: '€4.200', legno: 'Rovere / noce', esterno: 'Alu any RAL', vetro: 'Triplo 4 stagioni', garanzia: '25 anni', pefc: 'PEFC + FSC' },
              ].map((m) => (
                <div
                  key={m.name}
                  className={`snap-start shrink-0 w-[72vw] sm:w-[360px] rounded-3xl bg-white flex flex-col overflow-hidden transition-all duration-500 min-h-[520px] hover:scale-105 hover:shadow-2xl ${m.highlight ? 'border-2 border-amber-400/60 shadow-lg' : 'border border-[#e5e5e7] shadow-sm hover:shadow-lg'}`}
                >
                  {/* Card top */}
                  <div className="relative h-52 bg-gradient-to-br from-amber-200 to-amber-600 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white/30" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <span className={`absolute top-4 right-4 text-[11px] font-bold uppercase tracking-widest text-white bg-amber-700 px-3 py-1.5 rounded-full shadow-lg`}>
                      {m.badge}
                    </span>
                  </div>

                  {/* Titolo card */}
                  <div className="px-6 pt-6 pb-2">
                    <h4 className="text-lg font-bold text-[#1d1d1f] tracking-tight">{m.name}</h4>
                  </div>

                  {/* Prezzo — prominente */}
                  <div className="px-6 py-4 bg-gradient-to-r from-amber-100/60 to-transparent rounded-2xl mx-6 mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-[#1d1d1f]">{m.price}</span>
                      <span className="text-sm text-[#86868b] font-medium">/mq + iva</span>
                    </div>
                    <p className="text-sm text-[#30d158] font-semibold mt-2">💰 Risparmi {m.savings} su 10 finestre</p>
                  </div>

                  {/* Specs */}
                  <div className="px-6 py-4 grid grid-cols-2 gap-x-6 gap-y-4 flex-1">
                    {[
                      { label: 'Legno interno', val: m.legno },
                      { label: 'Guscio esterno', val: m.esterno },
                      { label: 'Vetro', val: m.vetro },
                      { label: 'Certificazione', val: m.pefc },
                      { label: 'Garanzia', val: m.garanzia },
                    ].map((s) => (
                      <div key={s.label} className="flex flex-col gap-1">
                        <p className="text-[10px] font-semibold text-[#86868b] uppercase tracking-wider">{s.label}</p>
                        <p className="text-sm font-bold text-[#1d1d1f]">{s.val}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="px-6 pb-6 mt-auto">
                    <button className="w-full py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-amber-500 rounded-xl hover:from-amber-700 hover:to-amber-600 transition-all duration-300 shadow-lg">
                      Richiedi preventivo
                    </button>
                  </div>
                </div>
              ))}
              <div className="shrink-0 w-6" />
            </div>
          </div>

        </div>
      </section>

      {/* ─── SEZIONE 2: Sistema energeto® NEO — Specifiche tecniche approfondite ─── */}
      <section className="relative w-full bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">

          {/* Section header */}
          <div className="text-center mb-16 md:mb-24">
            <p className="text-sm font-semibold text-[#0071e3] uppercase tracking-widest mb-4">Sistema energeto® NEO</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#1d1d1f] leading-tight mb-4">
              Design senza compromessi.
            </h2>
            <p className="text-base md:text-lg text-[#86868b] max-w-3xl mx-auto">
              Modernità, eleganza e prestazioni termiche eccezionali. Scopri come la piattaforma energeto® NEO combina design minimalista e tecnologie innovative.
            </p>
          </div>

          {/* 4 feature cards — design moderno */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

            {/* Card 1: Design minimalista */}
            <div className="rounded-3xl border border-[#e5e5e7] bg-gradient-to-br from-white to-[#f9fafb] p-8 md:p-10 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0071e3] to-[#0055b3] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1d1d1f] mb-3">Design a Spigoli</h3>
              <p className="text-[14px] text-[#86868b] leading-relaxed mb-4">
                Forme semplici e simmetriche che incorniciano perfettamente i vetri. Un'eleganza minimalista che rispecchia le tendenze architettoniche moderne.
              </p>
              <ul className="space-y-2.5">
                {['Profili snelli e puliti', 'Aspetto scandinavo moderno', 'Massimizzazione della superficie vitrata'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#0071e3] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[13px] text-[#1d1d1f] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Superfici vetrate maggiori */}
            <div className="rounded-3xl border border-[#e5e5e7] bg-gradient-to-br from-white to-[#f9fafb] p-8 md:p-10 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff9447] to-[#f59e0b] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1d1d1f] mb-3">Massima Luminosità</h3>
              <p className="text-[14px] text-[#86868b] leading-relaxed mb-4">
                Con una larghezza del profilo di soli 103mm, la variante energeto® NEO View consente 20% più luce naturale rispetto alle finestre standard.
              </p>
              <ul className="space-y-2.5">
                {['Canat nascosto dietro il telaio', 'Profili da 60mm per vetri caldi', '+20% accesso luminoso'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#ff9447] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[13px] text-[#1d1d1f] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3: Efficienza energetica */}
            <div className="rounded-3xl border border-[#e5e5e7] bg-gradient-to-br from-white to-[#f9fafb] p-8 md:p-10 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#30d158] to-[#34c759] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1d1d1f] mb-3">Isolamento Termico</h3>
              <p className="text-[14px] text-[#86868b] leading-relaxed mb-4">
                Coefficiente di trasmittanza fino a 0.96 W/m²K. La tecnologia FOAM INSIDE crea camere isolate di poliuretano espanso per prestazioni eccezionali.
              </p>
              <ul className="space-y-2.5">
                {['68mm di isolamento garantito', 'Valori Ug fino a 0.72 W/m²K', 'FOAM INSIDE integrato'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#30d158] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[13px] text-[#1d1d1f] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 4: Robustezza e sicurezza */}
            <div className="rounded-3xl border border-[#e5e5e7] bg-gradient-to-br from-white to-[#f9fafb] p-8 md:p-10 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff6b8a] to-[#ef4444] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m7 4a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1d1d1f] mb-3">Tecnologie Integrate</h3>
              <p className="text-[14px] text-[#86868b] leading-relaxed mb-4">
                BONDING INSIDE, SAFETEC INSIDE e POWERDUR INSIDE: tre livelli di protezione per rigidità strutturale, resistenza anti-effrazione e durabilità assoluta.
              </p>
              <ul className="space-y-2.5">
                {['Bonding interno per tenuta perfetta', 'Protezione anti-scasso SAFETEC', 'Armature compozite POWERDUR'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#ff6b8a] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[13px] text-[#1d1d1f] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Varianti disponibili — 3 opzioni di sistema */}
          <div className="mt-16 md:mt-24 pt-16 md:pt-20 border-t border-[#e5e5e7]">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-3">Tre Varianti, Una Piattaforma</h3>
              <p className="text-[14px] text-[#86868b]">Combinazioni libere di soluzioni AD (esterne), MD (centrali) e composte, tutte sulla stessa piattaforma</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'IDEAL NEO AD', desc: 'Etanseità esterna con profili armati in acciaio tradizionale', specs: ['Larghezza telaio: 76mm', 'Luce vetro: 54mm', 'Ug: 1.2 W/m²K'] },
                { name: 'IDEAL NEO MD', desc: 'Etanseità centrale con 3 guarnizioni per massima tenuta', specs: ['Larghezza telaio: 76mm', 'Luce vetro: 54mm', 'Ug: 1.1 W/m²K'] },
                { name: 'NEO MD FB', desc: 'Massima performance con FOAM INSIDE e POWERDUR', specs: ['Larghezza telaio: 76mm', 'Luce vetro: 68mm', 'Ug: 0.96 W/m²K'] },
              ].map((variant) => (
                <div key={variant.name} className="rounded-2xl border border-[#0071e3]/20 bg-[#0071e3]/5 p-6 md:p-7">
                  <h4 className="font-bold text-[#1d1d1f] text-lg mb-2">{variant.name}</h4>
                  <p className="text-xs text-[#86868b] mb-4 leading-relaxed">{variant.desc}</p>
                  <ul className="space-y-1.5">
                    {variant.specs.map((spec) => (
                      <li key={spec} className="text-xs text-[#1d1d1f] font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── SEZIONE 3: Smart-slide NEO — Porte scorrevoli ─── */}
      <section className="relative w-full bg-[#f5f5f7] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">

          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#0071e3] uppercase tracking-widest mb-4">Porte Scorrevoli</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#1d1d1f] leading-tight mb-4">
              Smart-slide NEO.
            </h2>
            <p className="text-base md:text-lg text-[#86868b] max-w-3xl mx-auto">
              Scorrevoli minimaliste che trasformano terrazze, balconi e cucine. Panorami senza interruzioni.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Operabilità Intuitiva', desc: 'Una semplice rotazione della maniglia blocca il canat, che scorre con minima forza', icon: '⚙️' },
              { title: 'Sfruttamento dello Spazio', desc: 'Assenza di battenti oscillanti = sfruttamento ottimale dello spazio interno', icon: '📐' },
              { title: 'Applicazione Versatile', desc: 'Ideali per terrazze, balconi, cucine e grandi superfici vitrate fino a 6×2.5m', icon: '🏠' },
              { title: 'Design Scandinavo', desc: 'Forme semplici, simmetriche e minimaliste che si integrano perfettamente in ogni ambiente', icon: '✨' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white border border-[#e5e5e7] p-7 md:p-8 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-bold text-[#1d1d1f] mb-2">{item.title}</h4>
                <p className="text-[14px] text-[#86868b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SEZIONE 4: Finiture decorative — Woodec & Aludec ─── */}
      <section className="relative w-full bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">

          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#0071e3] uppercase tracking-widest mb-4">Finiture Decorative</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#1d1d1f] leading-tight mb-4">
              Legno e Alluminio.
            </h2>
            <p className="text-base md:text-lg text-[#86868b] max-w-3xl mx-auto">
              Estetica naturale con i vantaggi della tecnologia PVC. Colori e texture per ogni stile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Woodec */}
            <div className="rounded-3xl border border-[#e5e5e7] bg-gradient-to-br from-[#fef3c7] to-[#f9fafb] p-8 md:p-10">
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">Woodec — Aspetto Naturale</h3>
              <p className="text-[14px] text-[#86868b] leading-relaxed mb-6">
                Imitazione del legno realistica con stampa profonda e finitura opaca. Tocco morbido e naturale, mantiene la durabilità e la resistenza del PVC.
              </p>
              <ul className="space-y-2.5 mb-6">
                {['Stamping profondo realistica', 'Superficie opaca e morbida', 'Ritocchi tattili naturali', 'Durabilità senza manutenzione'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[13px] text-[#1d1d1f] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider">Effetto naturale legno vero</div>
            </div>

            {/* Aludec */}
            <div className="rounded-3xl border border-[#e5e5e7] bg-gradient-to-br from-[#e0e7ff] to-[#f9fafb] p-8 md:p-10">
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">Aludec — Alluminio Strutturato</h3>
              <p className="text-[14px] text-[#86868b] leading-relaxed mb-6">
                Superficie a granulazione fine con coat in polvere. 7 tonalità: dal bianco al grigio, marrone, antracite, Alux metallico e nero profondo.
              </p>
              <ul className="space-y-2.5 mb-6">
                {['Granulazione unica e fine', 'Finitura opaca con coat polvere', '7 tonalità esclusive', 'Stile minimalista moderno'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[13px] text-[#1d1d1f] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider">Design contemporaneo elegante</div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── SEZIONE 5: Perché sceglierci ─── */}
      <section id="prodotti" className="relative w-full bg-[#f5f5f7] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">

          {/* Section headline — centrata */}
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-[#0071e3] uppercase tracking-widest mb-4">
              Perché sceglierci
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#1d1d1f] leading-tight">
              Dalla nostra fabbrica,
              <br />
              direttamente a casa tua.
            </h2>
          </div>

          {/* 3 feature cards — stile Apple con icone grandi e colorate */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

            {/* Card 1 */}
            <div className="group relative flex flex-col items-center text-center p-8 md:p-10 rounded-3xl bg-white hover:bg-[#fafafa] transition-colors duration-500 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#0071e3] to-[#0055b3] flex items-center justify-center shadow-lg shadow-blue-500/20">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 22h20M6 18V2l12 4v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Produzione Diretta</h3>
              <p className="text-[15px] text-[#86868b] leading-relaxed">
                Nessun intermediario, nessun ricarico. I tuoi serramenti nascono nel nostro stabilimento.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative flex flex-col items-center text-center p-8 md:p-10 rounded-3xl bg-white hover:bg-[#fafafa] transition-colors duration-500 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#ff6b8a] to-[#ef4444] flex items-center justify-center shadow-lg shadow-red-500/20">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Posa Certificata</h3>
              <p className="text-[15px] text-[#86868b] leading-relaxed">
                Installatori interni formati, posa a regola d'arte con certificazione e collaudo finale.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative flex flex-col items-center text-center p-8 md:p-10 rounded-3xl bg-white hover:bg-[#fafafa] transition-colors duration-500 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#ff9447] to-[#f59e0b] flex items-center justify-center shadow-lg shadow-amber-500/20">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Garanzia 15 Anni</h3>
              <p className="text-[15px] text-[#86868b] leading-relaxed">
                Materiali premium, testati per durare. Garanzia completa su prodotto e installazione.
              </p>
            </div>

          </div>

          {/* Stats — numeri grandi, Apple style, colore gradient */}
          <div className="mt-24 grid grid-cols-3 gap-4 md:gap-12 max-w-3xl mx-auto text-center">
            {[
              { number: '15+', label: 'Anni di esperienza', gradient: 'from-[#0071e3] to-[#0055b3]' },
              { number: '3.000+', label: 'Installazioni', gradient: 'from-[#ff6b8a] to-[#ef4444]' },
              { number: '100%', label: 'Made in Italy', gradient: 'from-[#ff9447] to-[#f59e0b]' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <span className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm text-[#86868b] font-medium">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default Hero;
