import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { DIPLOMAS } from '../data/content';
import DiplomaModal from './DiplomaModal';

export default function Diplomas() {
  const [selectedDiploma, setSelectedDiploma] = useState(null);
  const universityDiploma = DIPLOMAS[0]; // MSU
  const certifications = DIPLOMAS.slice(1); // AKPP, ACT, CBT-I

  return (
    <section id="diplomas" className="py-20 sm:py-28 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight mb-3">
            Образование и квалификация
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Все документы государственного образца открыты для подтверждения профессионального уровня.
          </p>
        </div>

        {/* Primary University Diploma — Featured Presentation */}
        <div 
          onClick={() => setSelectedDiploma(universityDiploma)}
          className="bg-white rounded-3xl p-8 sm:p-10 mb-8 cursor-pointer transition-transform duration-200 hover:-translate-y-1 flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
        >
          <div className="w-full lg:w-1/2 aspect-[16/10] bg-slate-200 rounded-2xl overflow-hidden relative">
            <img
              src={universityDiploma.image}
              alt={universityDiploma.title}
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            <div className="absolute top-4 left-4">
              <span className="text-sm font-semibold px-4 py-1.5 rounded-full bg-white text-emerald-950">
                {universityDiploma.badge}
              </span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-slate-900 mb-2 leading-snug">
                {universityDiploma.title}
              </h3>
              <div className="text-sm font-semibold text-emerald-900 mb-4">
                {universityDiploma.issuer}
              </div>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                {universityDiploma.details}
              </p>
            </div>

            <div className="flex items-center justify-between text-sm sm:text-base text-slate-700 pt-4">
              <span className="font-medium text-slate-600">{universityDiploma.hours}</span>
              <span className="font-semibold text-slate-900">{universityDiploma.year} г.</span>
            </div>
          </div>
        </div>

        {/* Specialized Clinical Certifications */}
        <div className="mb-14">
          <h3 className="font-editorial text-2xl font-medium text-slate-900 mb-6">
            Клиническая специализация и протоколы
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedDiploma(item)}
                className="bg-white rounded-3xl p-7 cursor-pointer transition-transform duration-200 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden relative mb-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-sm font-semibold px-3 py-1 rounded-full bg-white text-emerald-950">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-emerald-900 mb-1">
                    {item.issuer}
                  </div>
                  <h4 className="font-editorial text-lg font-medium text-slate-900 leading-snug mb-3">
                    {item.title}
                  </h4>
                </div>

                <div className="pt-3 flex items-center justify-between text-sm text-slate-700">
                  <span className="text-slate-600">{item.hours}</span>
                  <span className="font-semibold text-slate-900">{item.year} г.</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimalist Trust Bar */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0d5c56] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-7 h-7 text-emerald-200 shrink-0" />
            <span className="text-base sm:text-lg">Более 600 академических часов специализированного постдипломного обучения доказательным методам</span>
          </div>
          <span className="text-emerald-100 text-sm sm:text-base shrink-0 font-medium">Государственные лицензии</span>
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
