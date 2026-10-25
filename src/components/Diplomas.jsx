import React, { useState } from 'react';
import { Eye, Clock, ShieldCheck } from 'lucide-react';
import { DIPLOMAS } from '../data/content';
import DiplomaModal from './DiplomaModal';

export default function Diplomas() {
  const [selectedDiploma, setSelectedDiploma] = useState(null);

  return (
    <section id="diplomas" className="py-16 sm:py-24 bg-[#FBFDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
            Квалификация
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Образование и дипломы
          </h2>
          <p className="text-sm text-slate-600">
            Все документы государственного образца открыты для подтверждения квалификации.
          </p>
        </div>

        {/* Diplomas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {DIPLOMAS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedDiploma(item)}
              className="group bg-white rounded-2xl border border-emerald-100 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-300"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-3 py-1.5 rounded-full bg-white text-emerald-900 text-xs font-bold shadow-md flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Увеличить</span>
                  </div>
                </div>

                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/95 text-emerald-900 shadow-xs border border-emerald-100">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-emerald-800 mb-0.5">
                    {item.issuer}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug mb-2 group-hover:text-emerald-800 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-600" />
                    <span>{item.hours}</span>
                  </div>
                  <span className="font-semibold">{item.year} г.</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Trust Bar */}
        <div className="p-4 rounded-2xl bg-emerald-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
            <span>Более 600 академических часов специализированного постдипломного обучения доказательным методам</span>
          </div>
          <span className="text-emerald-200 text-[11px]">Государственные лицензии</span>
        </div>

      </div>

      {selectedDiploma && (
        <DiplomaModal
          diploma={selectedDiploma}
          onClose={() => setSelectedDiploma(null)}
        />
      )}
    </section>
  );
}
