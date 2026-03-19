import { Droplets, Home, CloudRain } from 'lucide-react';

const problems = [
    {
        icon: Droplets,
        title: "1. Macchie Gialle e Intonaco che Cade",
        desc: "L'acqua sta marcendo il tuo soffitto e creando muffe pericolose per la tua salute."
    },
    {
        icon: Home,
        title: "2. Fughe Saltate e Piastrelle Crepate",
        desc: "L'acqua inzuppa il massetto e spacca il pavimento col gelo. Il danno peggiora ad ogni pioggia."
    },
    {
        icon: CloudRain,
        title: "3. Il Dramma delle Liti Condominiali",
        desc: "Il tuo terrazzo sgocciola dai vicini scatenando liti, minacce legali e richieste di risarcimento."
    }
];

function ProblemAgitation() {
    return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm w-full relative">
            <div className="mb-3 flex justify-center lg:justify-start">
               
            </div>
            <h3 className="text-[18px] md:text-xl font-black text-slate-800 mb-5 text-center lg:text-left tracking-tight">
                I <span className="text-[#ef4444]">3 Problemi</span> che Risolviamo Ora
            </h3>
            
            <div className="flex flex-col gap-5">
                {problems.map((prob, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                        <div className="bg-white p-2.5 rounded-full shrink-0 shadow-sm border border-slate-100">
                            <prob.icon className="w-6 h-6 text-[#2563eb]" />
                        </div>
                        <div className="text-left flex-1">
                            <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight mb-1">{prob.title}</h4>
                            <p className="text-slate-600 text-[13px] md:text-sm leading-snug">{prob.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProblemAgitation;
