import React from 'react';
import { MapPin } from 'lucide-react';

function ServiceAreasBadge() {
    return (
        <div className="w-full my-6 flex justify-center lg:justify-start">
            <div className="inline-flex flex-col lg:flex-row lg:items-center gap-4 text-center lg:text-left">
                
                {/* Header/Icon section */}
                <div className="flex items-center justify-center lg:justify-start gap-3 shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400 text-slate-900 shadow-sm border-2 border-white">
                        <MapPin className="w-4 h-4" strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col pr-0 lg:pr-4 lg:border-r border-slate-200">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">
                            Aree coperte
                        </span>
                        <span className="text-[15px] font-black text-slate-900 uppercase tracking-tight leading-tight">
                            Lombardia
                        </span>
                    </div>
                </div>
                
                {/* Cities list text-based (elegant, monotone) */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2.5 gap-y-1 text-[13px] md:text-[15px]">
                    <span className="font-bold text-slate-700">Milano</span>
                    <span className="text-slate-300 font-bold">•</span>
                    <span className="font-bold text-slate-700">Monza</span>
                    <span className="text-slate-300 font-bold">•</span>
                    <span className="font-bold text-slate-700">Como</span>
                    <span className="text-slate-300 font-bold">•</span>
                    <span className="font-bold text-slate-700">Varese</span>
                    <span className="text-slate-300 font-bold hidden sm:inline">•</span>
                    <span className="font-bold text-slate-700 hidden sm:inline">Bergamo</span>
                    <span className="text-slate-300 font-bold hidden md:inline">•</span>
                    <span className="font-bold text-slate-700 hidden md:inline">Brescia</span>
                    <span className="text-slate-300 font-bold hidden lg:inline">•</span>
                    <span className="font-bold text-slate-700 hidden lg:inline">Lecco</span>
                </div>

                {/* Google 5 Stars - REMOVED stars from here per user request */}

            </div>
        </div>
    );
}

export default ServiceAreasBadge;
