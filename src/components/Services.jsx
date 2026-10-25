import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/content';

export default function Services({ onOpenBooking }) {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Context & Boundaries */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit">
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-4">
              С чем вы можете обратиться
            </h2>
            
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              Если вам тяжело, страшно или не хватает сил — это достаточный повод получить бережную и научно обоснованную помощь.
            </p>

            <div className="p-7 rounded-3xl bg-[#fafaf9] mb-8">
              <div className="flex items-start gap-3.5">
                <ShieldCheck className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-medium block mb-1">Честные границы компетенций:</strong>
                  Я не работаю с расстройствами пищевого поведения (РПП), химическими зависимостями и РАС — эти состояния требуют профильных клинических команд.
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-emerald-900 hover:bg-emerald-950 transition-colors cursor-pointer"
            >
              <span>Обсудить ваш запрос</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Editorial Narrative List — No boxed card rows! */}
          <div className="lg:col-span-7 space-y-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="py-8 first:pt-0 last:pb-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <h3 className="font-editorial text-2xl font-medium text-slate-900">
                    {service.title}
                  </h3>
                  <span className="text-sm font-semibold text-emerald-900">
                    {service.tag}
                  </span>
                </div>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-800 font-medium">
                  {service.outcomes.map((item, idx) => (
                    <span key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-800" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
