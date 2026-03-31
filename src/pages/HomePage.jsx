import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ScenarioSolutionsSection from '../components/ScenarioSolutionsSection';
import PavimentQuiz from '../components/PavimentQuiz';
import RecentWorks from '../components/RecentWorks';
import MethodSection from '../components/MethodSection';
import ServicesTable from '../components/ServicesTable';
import AboutUs from '../components/AboutUs';
import logoImage from '../assets/logo/MRK-Ecosolution-logo.jpeg';
import {
  COMPANY_NAME,
  WEBSITE_URL,
  PHONE_NUMBER,
  SCHEMA_ADDRESS,
  SCHEMA_GEO,
  MAIN_CATEGORY,
  PRIMARY_CITY,
  GBP_CATEGORIES,
  SERVICE_AREAS
} from '../utils/constants';

function HomePage() {
  const [extraModalOpen, setExtraModalOpen] = useState(false);

  useEffect(() => {
    // Scroll to top when page changes (non essenziale per la home, ma buona pratica)
    window.scrollTo(0, 0);
    // Cambia il title a seconda dell'esperienza che vuoi trasmettere
    document.title = "MRK Ecosolution — Serramenti su Misura | Prezzi di Fabbrica Milano";
  }, []);

  // 1. CONSIGLIO VIDEO: SCHEMA MARKUP
  // Questo "spiega" a Google chi sei, dove sei e cosa fai.
  // Deve corrispondere ESATTAMENTE ai dati GBP e constants.js
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", // Importante: business locale
    "name": COMPANY_NAME,
    "image": [logoImage],
    "@id": WEBSITE_URL,
    "url": WEBSITE_URL,
    "telephone": PHONE_NUMBER,
    "priceRange": "$$", // Fascia di prezzo (opzionale)
    "address": {
      "@type": "PostalAddress",
      ...SCHEMA_ADDRESS
    },
    "geo": {
      "@type": "GeoCoordinates",
      ...SCHEMA_GEO
    },
    "areaServed": SERVICE_AREAS.map(area => ({
      "@type": "Place",
      "name": area.name
    })),
    "knowsAbout": GBP_CATEGORIES,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "07:00",
        "closes": "20:00"
      }
    ],
    "serviceType": MAIN_CATEGORY,
    "description": `Produciamo e installiamo serramenti su misura a ${PRIMARY_CITY}. Infissi in PVC, alluminio e legno-alluminio a prezzi di fabbrica. Preventivo gratuito, posa certificata, garanzia 15 anni.`
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>

        <Hero />

        <PavimentQuiz />

        {/* Griglia Lavori Precedenti */}
        <RecentWorks />

        <ServicesTable />

        <ScenarioSolutionsSection />

        <div className="py-16 bg-white">
          <MethodSection />
        </div>

        <AboutUs />

      </main>
    </div>
  );
}

export default HomePage;
