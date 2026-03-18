import { Waves, Timer, ShieldCheck, UserCheck } from 'lucide-react';

const reasons = [
    {
        icon: Waves,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        title: "Zero Demolizioni",
        desc: "Risparmi il costo dello smaltimento macerie e non facciamo polvere né rumore per giorni."
    },
    {
        icon: Timer,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        title: "Sopralluogo entro 48h",
        desc: "Sappiamo che hai urgenza, arriviamo subito a Castel San Pietro e comuni limitrofi."
    },
    {
        icon: ShieldCheck,
        color: "text-green-600",
        bgColor: "bg-green-50",
        title: "Garanzia Certificata",
        desc: "Usiamo solo guaine liquide di alta gamma certificate, resistenti ai raggi UV e al gelo, non semplici pitture da brico."
    },
    {
        icon: UserCheck,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        title: "Unico Referente",
        desc: "Dalla stesura della guaina liquida alla posa del nuovo pavimento (se richiesta), gestiamo tutto noi senza intermediari."
    }
];

function WhyChooseUs() {
    return (
        <div className="mt-8 mb-12 w-full py-8 border-y border-slate-200">
            <h3 className="text-[18px] md:text-xl font-black text-slate-800 mb-8 text-center lg:text-left tracking-tight flex items-center gap-3">
                <span className="w-12 h-1.5 bg-[#2563eb] rounded-full hidden lg:block"></span>
                PERCHÉ SCEGLIERE <span className="text-[#2563eb]">NOI</span> <span className="text-slate-400 font-medium text-sm md:text-base border-l border-slate-300 pl-3 ml-1 hidden sm:inline">(E NON UN TUTTOFARE)</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {reasons.map((reason, idx) => (
                    <div key={idx} className="group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col h-full">
                        <div className={`${reason.bgColor} p-3 rounded-xl shrink-0 w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <reason.icon className={`w-6 h-6 ${reason.color}`} />
                        </div>
                        <div className="text-left flex flex-col flex-1">
                            <h4 className="font-black text-slate-900 text-sm md:text-base leading-tight mb-2 uppercase tracking-tight">{reason.title}</h4>
                            <p className="text-slate-600 text-[13px] md:text-sm leading-relaxed">{reason.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhyChooseUs;
