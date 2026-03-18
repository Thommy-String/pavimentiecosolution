import React from 'react';
import { ArrowRight, CheckCircle2, Banknote, ShieldCheck, Sofa, UserCheck, MessageCircle } from 'lucide-react';

const ValuePropsSection = () => {
  const points = [
    { 
      title: "INFILTRAZIONE ATTIVA", 
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop", 
      desc: "Macchie di umidità e muffa che avanzano sul soffitto." 
    },
    { 
      title: "GUAINA SCREPOLATA", 
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop", 
      desc: "Barriera protettiva ormai cotta dal sole e fragile." 
    },
    { 
      title: "RISTAGNI PERICOLOSI", 
      image: "https://images.unsplash.com/photo-1590066394891-81c6a7e04d49?q=80&w=1000&auto=format&fit=crop", 
      desc: "Pendenze errate che accumulano acqua e logorano il terrazzo." 
    },
    { 
      title: "DISTACCO PIASTRELLE", 
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop", 
      desc: "Acqua che solleva il pavimento e distrugge il massetto." 
    }
  ];

  const props = [
    {
      title: "TI FIDARESTI DI UN ACCONTO? NOI NO. PAGHI SOLO A LAVORO FINITO.",
      tag: "ACCONTO ZERO",
      tagColor: "bg-blue-100 text-blue-700",
      buttonColor: "bg-blue-50",
      subtitle: "Non chiediamo anticipi. Paghi solo per quello che abbiamo effettivamente impermeabilizzato. Se il lavoro dura più giorni, dividiamo il totale al termine di ogni giornata. Ad esempio, su un intervento da €1.500 in due giorni, pagherai €750 a fine prima giornata e i restanti €750 solo quando il terrazzo sarà completamente impermeabilizzato e testato.",
      cta: "Domande? Parliamone su WhatsApp",
      fuds: "Senza impegno",
      icon: <Banknote className="w-5 h-5" />,
      image: "https://i.ebayimg.com/images/g/NCAAAOSwRetf3deR/s-l1200.jpg",
    },
    {
      title: "SAI GIÀ QUANTO PAGHI PRIMA DI INIZIARE, PRECISO AL CENTESIMO.",
      tag: "PREZZO BLOCCATO",
      tagColor: "bg-orange-100 text-orange-700",
      buttonColor: "bg-orange-50",
      subtitle: "Basta preventivi che lievitano 'per imprevisti'. Il nostro prezzo è blindato: include primer, membrana, guaina e tutto il necessario per una tenuta idrica garantita nel tempo. Niente voci extra scoperte a lavori iniziati.",
      cta: "Ottieni preventivo gratis su WhatsApp",
      fuds: "Senza impegno.",
      icon: <ShieldCheck className="w-5 h-5" />,
      image: "https://www.nikkisplate.com/wp-content/uploads/2023/03/Modern-white-oak-flooring-ideas-2.jpeg",
      reverse: true
    },
    {
      title: "INFILTRAZIONI ATTIVE? INTERVENIAMO ANCHE IN EMERGENZA.",
      tag: "INTERVENTO RAPIDO",
      tagColor: "bg-green-100 text-green-700",
      buttonColor: "bg-green-50",
      subtitle: "Se il tuo terrazzo perde acqua e stai già vedendo macchie sul soffitto del piano di sotto, non aspettare. Siamo operativi entro 24-48 ore anche per interventi urgenti. Blocchiamo l'infiltrazione e poi programmiamo la soluzione definitiva.",
      cta: "Hai un'emergenza? Scrivici ora",
      fuds: "Risposta in pochi minuti.",
      icon: <Sofa className="w-5 h-5" />,
      image: "https://static.vecteezy.com/system/resources/thumbnails/032/384/976/small/furniture-on-white-background-ai-generative-photo.jpg",
    },
    {
      title: "SOLO IMPERMEABILIZZATORI ESPERTI. NESSUN IMPROVVISATO.",
      tag: "SICUREZZA",
      tagColor: "bg-purple-100 text-purple-700",
      buttonColor: "bg-purple-50",
      subtitle: "Sappiamo chi lavora sul tuo terrazzo: solo tecnici specializzati con anni di esperienza su guaine bituminose, membrane liquide e sistemi a freddo. Niente subappalti a sconosciuti. Rispetto assoluto per il tuo immobile e per i vicini del piano di sotto.",
      cta: "Chiedi chi verrà a fare il sopralluogo",
      fuds: "Personale qualificato e certificato",
      icon: <UserCheck className="w-5 h-5" />,
      image: "https://dpr-parquet.com/wp-content/uploads/2022/12/posa_in_opera.jpg",
      reverse: true
    },
    {
      title: "OTTIENI IL TUO PREVENTIVO REALE IN 10 MINUTI.",
      tag: "VELOCITÀ",
      tagColor: "bg-yellow-100 text-yellow-700",
      buttonColor: "bg-yellow-50",
      subtitle: "Non aspettare giorni per un appuntamento. Mandaci le foto del terrazzo su WhatsApp: dimensioni, stato attuale della guaina e zone di infiltrazione. Riceverai una stima tecnica precisa in tempo reale, valida come pre-sopralluogo gratuito.",
      cta: "Scrivici su WhatsApp. Sempre online",
      fuds: "Senza impegno. Zero insistenza o spam.",
      icon: <MessageCircle className="w-5 h-5" />,
      image: "https://www.rossatopavimenti.it/wp-content/uploads/2022/12/posa-pavimento-legno-lisca-di-pesce-noale.jpg",
    }
  ];

  const handleWhatsAppClick = (propTitle) => {
    // Evento Conversione Google Ads
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-XXXXXXXXX/YYYYYYYYYYYY', // Sostituisci con il tuo ID reale
      });
    }

    const phoneNumber = "393342221212";
    const message = encodeURIComponent(`Ciao! Vorrei informazioni su: ${propTitle}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="bg-white py-16 md:py-28 px-4 overflow-hidden">
      <div className="bg-slate-50 py-16 md:py-24 px-4 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-[900] text-slate-900 uppercase tracking-tighter leading-none mb-6">
              Riconosci uno di questi <span className="text-red-600">problemi?</span>
            </h2>
            <p className="text-slate-600 font-medium uppercase tracking-widest text-sm">Agisci subito prima che il danno diventi strutturale</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {points.map((point, index) => (
              <div key={index} className="group bg-white border-[3px] border-slate-900 rounded-[2rem] overflow-hidden shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] transition-all">
                <div className="aspect-square overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={point.image} alt={point.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-900 uppercase leading-none mb-2">{point.title}</h3>
                  <p className="text-sm text-slate-600 leading-tight font-medium">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-20 md:space-y-40">
        {props.map((prop, index) => (
          <div 
            key={index} 
            className={`flex flex-col gap-10 md:gap-20 items-center ${prop.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            {/* --- TESTO --- */}
            <div className="w-full md:w-1/2 space-y-6">
              {/* Tag Notion-Style Colorato */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md font-bold text-[11px] uppercase tracking-wider ${prop.tagColor} shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]`}>
                {prop.icon}
                {prop.tag}
              </div>
              
              <h2 className="text-3xl md:text-5xl font-[900] text-slate-900 leading-[0.95] uppercase tracking-tighter">
                {prop.title}
              </h2>
              
              <p className="text-[15px] md:text-lg text-slate-600 leading-relaxed border-l-4 border-slate-900 pl-5">
                {prop.subtitle}
              </p>

              <div className="pt-4 flex flex-col items-start gap-4">
                {/* Bottone Brutalista con il colore del Tag */}
                <button 
                  onClick={() => handleWhatsAppClick(prop.title)}
                  className={`
                    group relative inline-flex items-center gap-3
                    border-[2.5px] border-slate-900 
                    px-8 py-4 rounded-xl
                    text-slate-900 font-black uppercase tracking-tighter text-sm
                    transition-all duration-200
                    shadow-[5px_5px_0px_0px_rgba(15,23,42,1)]
                    hover:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)]
                    hover:translate-x-0.5 hover:translate-y-0.5
                    ${prop.buttonColor}
                  `}
                >
                  {prop.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* FUDS */}
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-bold uppercase tracking-tight">
                  <div className="p-0.5 bg-green-100 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                  </div>
                  {prop.fuds}
                </div>
              </div>
            </div>

            {/* --- IMMAGINE --- */}
            <div className="w-full md:w-1/2">
              <div className={`
                relative aspect-[4/3] overflow-hidden 
                border-[3px] border-slate-900 rounded-[2.5rem]
                shadow-[15px_15px_0px_0px_rgba(15,23,42,1)]
                ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}
                hover:rotate-0 transition-transform duration-500
              `}>
                <img 
                  src={prop.image} 
                  alt={prop.title}
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuePropsSection;