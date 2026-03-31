import heroImage from '../assets/images/aboutuslavori copia/pvcImage1.jpg';

function HeroShowcasePage() {
  const mainTitle = "Fabbrica di Serramenti su Misura";
  
  const products = [
    { label: 'PVC', bgColor: 'bg-blue-100', textColor: 'text-blue-700', borderColor: 'border-blue-200' },
    { label: 'Alluminio', bgColor: 'bg-slate-100', textColor: 'text-slate-700', borderColor: 'border-slate-200' },
    { label: 'Legno', bgColor: 'bg-amber-100', textColor: 'text-amber-700', borderColor: 'border-amber-200' },
    { label: 'Legno-Alluminio', bgColor: 'bg-green-100', textColor: 'text-green-700', borderColor: 'border-green-200' },
    { label: 'Ibridi', bgColor: 'bg-cyan-100', textColor: 'text-cyan-700', borderColor: 'border-cyan-200' },
    { label: 'Porte Blindate', bgColor: 'bg-red-100', textColor: 'text-red-700', borderColor: 'border-red-200' },
    { label: 'Persiane', bgColor: 'bg-orange-100', textColor: 'text-orange-700', borderColor: 'border-orange-200' },
    { label: 'Tapparelle', bgColor: 'bg-purple-100', textColor: 'text-purple-700', borderColor: 'border-purple-200' },
  ];

  const ProductTags = () => (
    <div className="flex flex-wrap gap-2">
      {products.map((tag) => (
        <span
          key={tag.label}
          className={`px-3 py-1.5 rounded text-xs font-medium ${tag.bgColor} ${tag.textColor} border ${tag.borderColor}`}
        >
          {tag.label}
        </span>
      ))}
    </div>
  );

  return (
    <div className="bg-white">
      {/* HERO 1: Image Right Clean */}
      <section className="min-h-screen flex items-center bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#1d1d1f]/50 mb-6">Design 1</p>
            <h1 className="text-6xl sm:text-7xl font-bold text-[#1d1d1f] mb-8 leading-tight">{mainTitle}</h1>
            <p className="text-lg text-[#1d1d1f]/60 mb-8">Dalla nostra fabbrica direttamente a casa tua. Zero intermediari, posa certificata.</p>
            <div className="mb-8"><ProductTags /></div>
            <button className="px-8 py-3 bg-[#1d1d1f] text-white font-semibold rounded-lg hover:bg-[#1d1d1f]/90 transition">Preventivo gratuito</button>
          </div>
          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img src={heroImage} alt="Serramenti" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* HERO 2: Image Left Modern */}
      <section className="min-h-screen flex items-center bg-[#f5f5f7] px-6 py-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <img src={heroImage} alt="Serramenti" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs uppercase tracking-widest text-[#1d1d1f]/50 mb-6">Design 2</p>
            <h1 className="text-6xl sm:text-7xl font-bold text-[#1d1d1f] mb-8 leading-tight">{mainTitle}</h1>
            <p className="text-lg text-[#1d1d1f]/60 mb-8">Qualità Made in Italy con 15 anni di garanzia. Isolamento termico e acustico superiore.</p>
            <button className="px-8 py-3 bg-[#1d1d1f] text-white font-semibold rounded-lg hover:bg-[#1d1d1f]/90 transition">Scopri i materiali</button>
          </div>
        </div>
      </section>

      {/* HERO 3: Centered with Gradient Accent */}
      <section className="min-h-screen flex items-center bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto w-full text-center">
          <p className="text-xs uppercase tracking-widest text-[#1d1d1f]/50 mb-8">Design 3</p>
          <h1 className="text-7xl sm:text-8xl font-bold text-[#1d1d1f] mb-6 leading-tight">
            {mainTitle}
          </h1>
          <p className="text-xl text-[#1d1d1f]/60 mb-12">Serramenti artigianali con tecnologia d'avanguardia. Posa professionale inclusa.</p>
          <div className="mb-12 flex justify-center"><ProductTags /></div>
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl mb-8">
            <img src={heroImage} alt="Serramenti" className="w-full h-full object-cover" />
          </div>
          <button className="px-8 py-3 bg-[#1d1d1f] text-white font-semibold rounded-lg hover:bg-[#1d1d1f]/90 transition">Contattaci</button>
        </div>
      </section>

      {/* HERO 4: Split with Gradient Background */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-white via-[#f5f5f7] to-white px-6 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#b678ff]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#1d1d1f]/50 mb-6">Design 4</p>
            <h1 className="text-6xl sm:text-7xl font-bold text-[#1d1d1f] mb-8 leading-tight">{mainTitle}</h1>
            <p className="text-lg text-[#1d1d1f]/60 mb-8">Ogni serramento è costruito su misura per la tua casa. Consulenza gratuita inclusa.</p>
            <button className="px-8 py-4 bg-[#1d1d1f] text-white font-semibold rounded-full hover:bg-[#1d1d1f]/90 transition">Richiedi visita</button>
          </div>
          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img src={heroImage} alt="Serramenti" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* HERO 5: Full Image with Overlay */}
      <section className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-white/60 mb-8">Design 5</p>
          <h1 className="text-7xl sm:text-8xl font-bold mb-8 leading-tight">{mainTitle}</h1>
          <p className="text-xl text-white/80 mb-12">Trasformiamo la tua visione in realtà con serramenti di eccellenza.</p>
          <button className="px-10 py-4 bg-white text-[#1d1d1f] font-semibold rounded-full hover:bg-white/90 transition">Esplora il portfolio</button>
        </div>
      </section>

      {/* HERO 6: Three Column Layout */}
      <section className="min-h-screen flex items-center bg-[#f5f5f7] px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-xs uppercase tracking-widest text-[#1d1d1f]/50 mb-8 text-center">Design 6</p>
          <h1 className="text-6xl sm:text-7xl font-bold text-[#1d1d1f] mb-16 text-center">{mainTitle}</h1>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="h-80 rounded-3xl overflow-hidden shadow-lg">
              <img src={heroImage} alt="1" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg text-[#1d1d1f]/60 mb-6">Produciamo infissi in PVC, alluminio, legno e soluzioni ibride. Ogni progetto è personalizzato secondo le tue esigenze.</p>
              <div className="mb-8"><ProductTags /></div>
              <button className="px-8 py-3 bg-[#1d1d1f] text-white font-semibold rounded-lg hover:bg-[#1d1d1f]/90 transition w-fit">Scopri di più</button>
            </div>
            <div className="h-80 rounded-3xl overflow-hidden shadow-lg">
              <img src={heroImage} alt="2" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* HERO 7: Minimalist Elegant */}
      <section className="min-h-screen flex items-center bg-white px-6 py-20 relative">
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-[#b678ff]/10 to-[#ff9447]/5 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <p className="text-xs uppercase tracking-widest text-[#1d1d1f]/50 mb-8">Design 7</p>
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h1 className="text-6xl sm:text-7xl font-bold text-[#1d1d1f] mb-8 leading-tight">{mainTitle}</h1>
              <p className="text-lg text-[#1d1d1f]/60 mb-8">Investimento che dura nel tempo. Materiali premium e installazione certificata.</p>
              <button className="px-8 py-3 bg-[#1d1d1f] text-white font-semibold rounded-lg hover:bg-[#1d1d1f]/90 transition">Calcola preventivo</button>
            </div>
            <div className="lg:col-span-2 h-80 rounded-3xl overflow-hidden shadow-2xl">
              <img src={heroImage} alt="Serramenti" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* HERO 8: Stacked Modern */}
      <section className="min-h-screen flex items-center bg-gradient-to-b from-[#f5f5f7] to-white px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-widest text-[#1d1d1f]/50 mb-8">Design 8</p>
            <h1 className="text-6xl sm:text-7xl font-bold text-[#1d1d1f] mb-8 leading-tight">{mainTitle}</h1>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg text-[#1d1d1f]/60 mb-8">Scegli tra una varietà completa di materiali e finiture. Ogni prodotto è costruito con precisione artigianale.</p>
                <div className="mb-8"><ProductTags /></div>
              </div>
              <div className="h-80 rounded-3xl overflow-hidden shadow-xl">
                <img src={heroImage} alt="Serramenti" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <button className="px-8 py-3 bg-[#1d1d1f] text-white font-semibold rounded-lg hover:bg-[#1d1d1f]/90 transition">Prenota consulenza</button>
        </div>
      </section>

      {/* HERO 9: Asymmetric Diagonal */}
      <section className="min-h-screen flex items-center bg-white px-6 py-20 relative overflow-hidden">
        <div className="absolute -right-48 -top-48 w-96 h-96 bg-[#b678ff]/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <p className="text-xs uppercase tracking-widest text-[#1d1d1f]/50 mb-8">Design 9</p>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-6xl sm:text-7xl font-bold text-[#1d1d1f] mb-8 leading-tight">{mainTitle}</h1>
              <p className="text-lg text-[#1d1d1f]/60 mb-8">Qualità, eleganza e performance. I tuoi serramenti meritano il meglio.</p>
              <button className="px-8 py-3 bg-[#1d1d1f] text-white font-semibold rounded-lg hover:bg-[#1d1d1f]/90 transition">Inizia ora</button>
            </div>
            <div className="lg:col-span-5 h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img src={heroImage} alt="Serramenti" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* HERO 10: Double Image */}
      <section className="min-h-screen flex items-center bg-[#f5f5f7] px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-xs uppercase tracking-widest text-[#1d1d1f]/50 mb-8">Design 10</p>
          <h1 className="text-6xl sm:text-7xl font-bold text-[#1d1d1f] mb-12 leading-tight">{mainTitle}</h1>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="h-96 rounded-3xl overflow-hidden shadow-xl">
              <img src={heroImage} alt="Serramenti moderni" className="w-full h-full object-cover" />
            </div>
            <div className="h-96 rounded-3xl overflow-hidden shadow-xl">
              <img src={heroImage} alt="Installazione professionale" className="w-full h-full object-cover" />
            </div>
          </div>
          <div><ProductTags /></div>
          <button className="mt-8 px-8 py-3 bg-[#1d1d1f] text-white font-semibold rounded-lg hover:bg-[#1d1d1f]/90 transition">Vedi progetti</button>
        </div>
      </section>

      {/* HERO 11: Circular Image */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-white to-[#f5f5f7] px-6 py-20 relative overflow-hidden">
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-[#ff6b8a]/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#1d1d1f]/50 mb-6">Design 11</p>
            <h1 className="text-6xl sm:text-7xl font-bold text-[#1d1d1f] mb-8 leading-tight">{mainTitle}</h1>
            <p className="text-lg text-[#1d1d1f]/60 mb-8">Bellezza e funzionalità in perfetto equilibrio. Soluzioni pensate per te.</p>
            <div className="mb-8"><ProductTags /></div>
            <button className="px-8 py-3 bg-[#1d1d1f] text-white font-semibold rounded-lg hover:bg-[#1d1d1f]/90 transition">Contattaci</button>
          </div>
          <div className="relative h-96 w-96 mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#b678ff]/20 to-[#ff9447]/20 rounded-full blur-2xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
              <img src={heroImage} alt="Serramenti" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* HERO 12: Text Centered Large */}
      <section className="min-h-screen flex items-center bg-white px-6 py-20">
        <div className="max-w-5xl mx-auto w-full">
          <p className="text-xs uppercase tracking-widest text-[#1d1d1f]/50 mb-8 text-center">Design 12</p>
          <h1 className="text-7xl sm:text-8xl font-bold text-[#1d1d1f] mb-12 leading-tight text-center">{mainTitle}</h1>
          <div className="text-center mb-16">
            <p className="text-xl text-[#1d1d1f]/60 mb-8 max-w-2xl mx-auto">La scelta di serramenti premium per una casa che respira qualità e comfort.</p>
            <div className="flex justify-center mb-12"><ProductTags /></div>
            <button className="px-8 py-3 bg-[#1d1d1f] text-white font-semibold rounded-lg hover:bg-[#1d1d1f]/90 transition">Scopri le collezioni</button>
          </div>
          <div className="h-96 rounded-3xl overflow-hidden shadow-2xl">
            <img src={heroImage} alt="Serramenti" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* HERO 13: Bold Right Image */}
      <section className="min-h-screen flex items-center bg-[#f5f5f7] px-6 py-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#1d1d1f]/50 mb-8">Design 13</p>
            <h1 className="text-6xl sm:text-7xl font-bold text-[#1d1d1f] mb-8 leading-tight">{mainTitle}</h1>
            <p className="text-lg text-[#1d1d1f]/60 mb-8">Ogni finestra racconta una storia di passione e maestria artigianale. Scopri la tua.</p>
            <div className="mb-8"><ProductTags /></div>
            <button className="px-8 py-3 bg-[#1d1d1f] text-white font-semibold rounded-lg hover:bg-[#1d1d1f]/90 transition">Richiedi preventivo</button>
          </div>
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute -inset-4 bg-gradient-to-bl from-[#b678ff]/10 to-transparent blur-2xl" />
            <img src={heroImage} alt="Serramenti" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* HERO 14: Minimal Split */}
      <section className="min-h-screen flex items-center bg-white px-6 py-20 relative">
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-[#b678ff] via-[#ff6b8a] to-[#ff9447] opacity-20" />
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#1d1d1f]/50 mb-8">Design 14</p>
            <h1 className="text-6xl sm:text-7xl font-bold text-[#1d1d1f] mb-8 leading-tight">{mainTitle}</h1>
            <p className="text-lg text-[#1d1d1f]/60 mb-8">Precisione, eleganza e durabilità. Tutto quello che serve per una casa perfetta.</p>
            <button className="px-8 py-3 bg-[#1d1d1f] text-white font-semibold rounded-lg hover:bg-[#1d1d1f]/90 transition">Contattaci subito</button>
          </div>
          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img src={heroImage} alt="Serramenti" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* HERO 15: Statement Dark */}
      <section className="min-h-screen flex items-center bg-[#1d1d1f] text-white px-6 py-20 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#b678ff]/10 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <p className="text-xs uppercase tracking-widest text-white/50 mb-8">Design 15</p>
          <h1 className="text-7xl sm:text-8xl font-bold mb-8 leading-tight">{mainTitle}</h1>
          <p className="text-xl text-white/70 mb-12 max-w-2xl">Quando la qualità incontra il design. Serramenti che trasformano il tuo spazio.</p>
          <div className="mb-12 flex gap-2 flex-wrap">
            {products.map((tag) => (
              <span key={tag.label} className="px-3 py-1.5 rounded text-xs font-medium bg-white/10 text-white border border-white/20">
                {tag.label}
              </span>
            ))}
          </div>
          <div className="h-96 rounded-3xl overflow-hidden shadow-2xl mb-8">
            <img src={heroImage} alt="Serramenti" className="w-full h-full object-cover" />
          </div>
          <button className="px-8 py-3 bg-white text-[#1d1d1f] font-semibold rounded-lg hover:bg-white/90 transition">Scopri di più</button>
        </div>
      </section>

      {/* Navigation */}
      <div className="bg-[#f5f5f7] border-t border-[#1d1d1f]/10 py-8 sticky bottom-0">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-[#1d1d1f]/60 mb-4">
            Scorri per vedere i 15 design. Quale preferisci?
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            {Array.from({ length: 15 }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => {
                  document.querySelectorAll('section')[i].scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-lg bg-white border border-[#1d1d1f]/10 text-[#1d1d1f] hover:border-[#1d1d1f]/40 transition text-sm font-medium"
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroShowcasePage;
