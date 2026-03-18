import { Link } from 'react-router-dom';
import { COMPANY_NAME, PHONE_NUMBER } from '../utils/constants';
import { serviceNavLinks } from '../utils/serviceNavLinks';
import logoImage from '../assets/logo/eco-solutions-logo-.jpeg';

const serviceLinks = serviceNavLinks
  .filter((s) => s.slug && s.navLabel)
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  .map((s) => ({
    slug: s.slug,
    label: s.navLabel,
  }));

function Footer() {
  return (
    <footer
      id="contatti"
      className="border-t border-gray-200 bg-white/90 backdrop-blur"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-10 text-center sm:text-left md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex flex-col items-center gap-3 sm:items-start">
              <img
                src={logoImage}
                alt={COMPANY_NAME}
                className="h-16 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-sm font-bold text-slate-900 uppercase tracking-tighter">
              Ecosolution - Specialista in impermeabilizzazioni.
              <br />
              Interventi certificati con garanzia decennale.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-900">
              Servizi
            </p>
            <ul className="flex flex-col items-center gap-2 text-sm text-slate-600 sm:items-start font-bold">
              <li>Impermeabilizzazione Terrazzi</li>
              <li>Guaina Liquida Senza Demolizione</li>
              <li>Rifacimento Balconi</li>
              <li>Pronto Intervento Infiltrazioni</li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-900">
              Contatti
            </p>
            <p className="text-sm text-slate-600 font-bold">
              {PHONE_NUMBER}
              <br />
              Milano e tutta la Lombardia
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-900">
              Orari
            </p>
            <p className="text-sm text-slate-600 font-bold">
              Lunedì - Sabato: 07:00 - 20:00
              <br />
              Pronto Intervento 24/7
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-8 text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
          © {new Date().getFullYear()} {COMPANY_NAME}. P.IVA 12345678910. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
