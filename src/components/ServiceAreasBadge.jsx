import React from 'react';
import { MapPin } from 'lucide-react';

function ServiceAreasBadge() {
    return (
        <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-neutral-200 shadow-sm">
                <MapPin className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <div className="flex flex-col">
                    <span className="text-xs font-medium text-neutral-500 tracking-wide">
                        Consegna e posa in tutta la Lombardia
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ServiceAreasBadge;
