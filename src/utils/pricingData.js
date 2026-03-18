// Waterproofing Services Pricing Data
// Videos are served from public/ — use string paths instead of imports

const VIDEO_PATHS = {
  guainaLiquida: '/videos/guaina-liquida.mp4',
  resina: '/videos/resina-trasparente.mp4',
  sistemaArmato: '/videos/sistema-armato.mp4',
};

export const pricingData = [
  {
    id: 'guaina-liquida',
    name: 'Guaina Liquida Impermeabilizzante',
    price: '€35',
    pricePerMq: 35,
    unit: '/mq',
    timeFactorPerMq: 0.05,
    mediaType: 'video',
    mediaSrc: VIDEO_PATHS.guainaLiquida,
    description: 'Membrana liquida elastometrica ad alta resistenza. Ideale per terrazzi e balconi, applicabile senza demolire il pavimento esistente.',
    calculator: {
      label: 'mq',
      min: 5,
      max: 500,
      step: 1,
      defaultValue: 50,
    },
    features: [
      'Applicazione: A freddo (senza fuoco)',
      'Calpestabile: Dopo 12-24 ore',
      'Garanzia: 10 anni sulla tenuta',
      'Senza demolizione del pavimento',
    ],
    processSteps: [
      {
        icon: 'clipboard-check',
        title: 'Fase 1: Ispezione e Bonifica',
        description: 'Rilievo della planarità, identificazione di ristagni e pulizia della superficie da muschio, alghe e sporco.',
      },
      {
        icon: 'droplets',
        title: 'Fase 2: Primer Adesivo',
        description: 'Applicazione di un primer a freddo che prepara il supporto e garantisce l\'adesione ottimale della guaina.',
      },
      {
        icon: 'paint-brush',
        title: 'Fase 3: Stesura Membrana',
        description: 'Applicazione di due mani incrociate di guaina liquida con rullo professionale, creando uno strato continuo senza giunzioni.',
      },
      {
        icon: 'droplets',
        title: 'Fase 4: Sigillatura Giunti',
        description: 'Trattamento specifico di scarichi, soglie di finestre e angoli con bandelle elastiche per la massima tenuta.',
      },
      {
        icon: 'check-circle',
        title: 'Fase 5: Test di Tenuta',
        description: 'Verifica della tenuta idrica dopo 48 ore di asciugatura mediante test di allagamento localizzato.',
      },
    ],
  },

  {
    id: 'resina-trasparente',
    name: 'Guaina Liquida Trasparente',
    price: '€45',
    pricePerMq: 45,
    unit: '/mq',
    timeFactorPerMq: 0.04,
    mediaType: 'video',
    mediaSrc: VIDEO_PATHS.resina,
    description: 'Sistema in guaina liquida trasparente UV-resistente. Protegge le infiltrazioni mantenendo intatto l\'aspetto originale di gres e klinker.',
    calculator: {
      label: 'mq',
      min: 5,
      max: 200,
      step: 1,
      defaultValue: 25,
    },
    features: [
      'Effetto: 100% Trasparente',
      'Calpestabile: Dopo 6-8 ore',
      'Garanzia: 8 anni sulla tenuta',
      'Elevata resistenza chimica',
    ],
    processSteps: [
      {
        icon: 'search',
        title: 'Fase 1: Bonifica Superficiale',
        description: 'Pulizia profonda con eliminazione di muschio, alghe e sporco. Lavaggio ad alta pressione e asciugatura totale (critico).',
      },
      {
        icon: 'wind',
        title: 'Fase 2: Asciugatura Forzata',
        description: 'Utilizzo di ventilatori industriali per garantire che l\'umidità residua sia completamente eliminata prima dell\'applicazione.',
      },
      {
        icon: 'layers',
        title: 'Fase 3: Primer Epossidico',
        description: 'Stesura di un primer che penetra nei pori della superficie e fornisce una base di adesione ottimale per la resina.',
      },
      {
        icon: 'shield-check',
        title: 'Fase 4: Applicazione Resina',
        description: 'Stesura della resina epossidica trasparente in due mani incrociate con rullo specifico, mantenendo spessore uniforme.',
      },
      {
        icon: 'sparkles',
        title: 'Fase 5: Vetrificazione Finale',
        description: 'Applicazione di una mano finale di vernice trasparente UV-protetta per resistenza ai raggi solari e durabilità.',
      },
    ],
  },

  {
    id: 'sistema-armato',
    name: 'Guaina Liquida Armata (Fibrorinforzata)',
    price: '€55',
    pricePerMq: 55,
    unit: '/mq',
    timeFactorPerMq: 0.06,
    mediaType: 'video',
    mediaSrc: VIDEO_PATHS.sistemaArmato,
    description: 'Sistema multistrato con armatura in tessuto non tessuto. La massima protezione contro fessurazioni e assestamenti strutturali.',
    calculator: {
      label: 'mq',
      min: 10,
      max: 300,
      step: 1,
      defaultValue: 60,
    },
    features: [
      'Armatura: Rete poliestere integrata',
      'Calpestabile: Dopo 24 ore',
      'Garanzia: 12 anni sulla tenuta',
      'Resistenza meccanica superiore',
    ],
    processSteps: [
      {
        icon: 'clipboard-check',
        title: 'Fase 1: Preparazione Accurata',
        description: 'Pulizia a fondo, rimozione di detriti e verifiche strutturali. Controllo di lesioni o assestamenti della soletta.',
      },
      {
        icon: 'layers',
        title: 'Fase 2: Primer Adesivo Specifico',
        description: 'Applicazione di un primer che favorisce l\'adesione della membrana armata al supporto sottostante.',
      },
      {
        icon: 'grid',
        title: 'Fase 3: Posa Membrana Armata',
        description: 'Stesura della membrana bituminosa armata con sovrapposizioni obbligatorie e sigillatura dei giunti con calore o adesivo.',
      },
      {
        icon: 'shield-check',
        title: 'Fase 4: Protezione Meccanica',
        description: 'Applicazione di uno strato protettivo (sabbia, graniglia o massetto leggero) per proteggere la membrana dall\'usura.',
      },
      {
        icon: 'check-circle',
        title: 'Fase 5: Ispezione Finale',
        description: 'Controllo visivo e test di tenuta della membrana armata su tutta la superficie.',
      },
    ],
  },

  {
    id: 'sigillatura-fughe',
    name: 'Sigillatura Fughe Professionale',
    price: '€8',
    pricePerMq: 8,
    unit: '/ml',
    timeFactorPerMq: 0.02,
    mediaType: 'video',
    mediaSrc: '/videos/sigillatura.mp4',
    description: 'Bonifica e sigillatura delle fughe con elastomeri certificati. Previene infiltrazioni d\'acqua nei punti critici.',
    calculator: {
      label: 'ml',
      min: 10,
      max: 500,
      step: 1,
      defaultValue: 100,
    },
    features: [
      'Materiale: Sigillante elastomerico',
      'Calpestabile: Immediatamente',
      'Garanzia: 7 anni',
      'Compatibile con resine',
    ],
    processSteps: [
      {
        icon: 'scissors',
        title: 'Fase 1: Pulizia Fughe',
        description: 'Rimozione di muschio, sporco e vecchi sigillanti dalle fughe usando attrezzatura specifica.',
      },
      {
        icon: 'droplets',
        title: 'Fase 2: Asciugatura',
        description: 'Asciugatura completa delle fughe con aria compressa e ventilazione naturale.',
      },
      {
        icon: 'paint-brush',
        title: 'Fase 3: Applicazione Sigillante',
        description: 'Stesura del sigillante elastomerico nelle fughe con pistola professinale, riempimento completo.',
      },
      {
        icon: 'check-circle',
        title: 'Fase 4: Levigatura',
        description: 'Levigatura superficiale per un aspetto uniforme e pulito, allineamento con la piastrella.',
      },
    ],
  },
];
