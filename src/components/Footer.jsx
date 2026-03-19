import { Link } from 'react-router-dom';
import { COMPANY_NAME, PHONE_NUMBER } from '../utils/constants';
import logoImage from '../assets/logo/eco-solutions-logo-.jpeg';
import { Phone, MessageCircle, Mail, MapPin, Trophy, Clock } from 'lucide-react';

function Footer() {
  const email = "info@ecosolutionsas.com"; 

  return (
    <footer
      id="contatti"
      className="border-t border-slate-200 bg-slate-50 relative overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src={logoImage}
                alt={COMPANY_NAME}
                className="h-20 w-auto rounded-xl shadow-sm border border-white"
                loading="lazy"
              />
            </Link>
            <div className="space-y-4">
              <p className="text-sm font-bold text-slate-800 leading-relaxed uppercase tracking-tight">
                Ecosolution. Ditta edile specializzata.
              </p>
              <div className="flex items-center gap-2 text-amber-600">
                <Trophy className="w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-widest">N.1 in costruzioni e ristrutturazioni complete</span>
              </div>
            </div>
          </div>

          {/* Column 2: Servizi Categorizzati */}
          <div className="lg:col-span-1">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
              I Nostri Servizi
            </p>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <p className="text-[10px] font-bold text-blue-600 uppercase mb-3 tracking-widest">Impermeabilizzazione</p>
                <ul className="space-y-2 text-sm text-slate-600 font-bold uppercase tracking-tighter">
                  <li className="hover:text-blue-600 transition-colors cursor-pointer">Terrazzi & Balconi</li>
                  <li className="hover:text-blue-600 transition-colors cursor-pointer">Tetti & Coperture</li>
                  <li className="hover:text-blue-600 transition-colors cursor-pointer">Piscine & Vasche</li>
                  <li className="hover:text-blue-600 transition-colors cursor-pointer">Fondamenta & Muri</li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-bold text-blue-600 uppercase mb-3 tracking-widest">Edilizia Generale</p>
                <ul className="space-y-2 text-sm text-slate-600 font-bold uppercase tracking-tighter">
                  <li className="hover:text-blue-600 transition-colors cursor-pointer">Ristrutturazioni Chiavi in Mano</li>
                  <li className="hover:text-blue-600 transition-colors cursor-pointer">Posa Pavimenti (SPC/Laminato)</li>
                  <li className="hover:text-blue-600 transition-colors cursor-pointer">Interventi Strutturali</li>
                  <li className="hover:text-blue-600 transition-colors cursor-pointer">Manutenzioni Condominiali</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Info */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
                Dove Operiamo
              </p>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                <p className="text-sm text-slate-700 font-bold uppercase tracking-tight">
                  Milano, Monza, Bergamo, Brescia e tutta la Lombardia.
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
                Disponibilità
              </p>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                <p className="text-sm text-slate-700 font-bold uppercase tracking-tight">
                  Lunedì - Sabato: 07:00 - 20:00<br/>
                  <span className="text-blue-600">Pronto Intervento H24</span>
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Professional CTAs */}
          <div className="space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
              Contattaci Ora
            </p>
            
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
              onClick={() => { if (typeof window.gtag_report_conversion === 'function') window.gtag_report_conversion(); }}
              className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase">Chiamata Diretta</span>
                <span className="text-sm font-black text-slate-900">{PHONE_NUMBER}</span>
              </div>
            </a>

            <a 
              href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(`Buongiorno ${COMPANY_NAME}, vorrei richiedere un sopralluogo gratuito.`)}`}
              onClick={() => { if (typeof window.gtag_report_conversion === 'function') window.gtag_report_conversion(); }}
              className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl hover:border-green-500 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase">WhatsApp</span>
                <span className="text-sm font-black text-slate-900">Chat Rapida</span>
              </div>
            </a>

            <a 
              href={`mailto:${email}`}
              onClick={() => { if (typeof window.gtag_report_conversion === 'function') window.gtag_report_conversion(); }}
              className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl hover:border-slate-800 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase">Email Preventivi</span>
                <span className="text-sm font-black text-slate-900">Invia Progetto</span>
              </div>
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
          <div>
            © {new Date().getFullYear()} {COMPANY_NAME} | P.IVA 11634620967
          </div>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-blue-600 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
