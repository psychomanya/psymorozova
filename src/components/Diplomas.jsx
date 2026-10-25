import React, { useState } from 'react';
import { Award, Eye, Clock, ShieldCheck, CheckCircle } from 'lucide-react';
import { DIPLOMAS } from '../data/content';
import DiplomaModal from './DiplomaModal';

export default function Diplomas() {
  const [selectedDiploma, setSelectedDiploma] = useState(null);

  return (
    <section id="diplomas" className="py-20 sm:py-28 bg-[#FBFDFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Квалификация & Доверие
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Образование и официальные дипломы
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Вы имеете полное право знать, кому доверяете свое психологическое здоровье. Все дипломы и удостоверения о повышении квалификации открыты для ознакомления.
          </p>
        </div>

        {/* Diplomas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {DIPLOMAS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedDiploma(item)}
              className="group bg-white rounded-3xl border border-emerald-100/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              {/* Document Image Thumbnail with Overlay */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="px-4 py-2 rounded-full bg-white text-emerald-900 text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Посмотреть скан</span>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-emerald-900 shadow-sm border border-emerald-100">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-emerald-800 mb-1">
                    {item.issuer}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug mb-3 group-hover:text-emerald-800 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
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

        {/* Academic Proof Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-emerald-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <div className="text-sm font-bold">Непрерывное повышение квалификации</div>
              <div className="text-xs text-emerald-200">
                Более 600 академических часов специализированного обучения доказательным методам + супервизии.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-100 shrink-0">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Гос. лицензии образовательных учреждений</span>
          </div>
        </div>

      </div>

      {/* Diploma Viewer Modal */}
      {selectedDiploma && (
        <DiplomaModal
          diploma={selectedDiploma}
          onClose={() => setSelectedDiploma(null)}
        />
      )}
    </section>
  );
}
