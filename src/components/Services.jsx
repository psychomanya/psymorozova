import React from 'react';
import { 
  ShieldAlert, 
  CloudRain, 
  Moon, 
  HeartHandshake, 
  Sparkles, 
  Flame, 
  AlertCircle, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES, NOT_WORKING_WITH } from '../data/content';

const iconMap = {
  ShieldAlert: ShieldAlert,
  CloudRain: CloudRain,
  Moon: Moon,
  HeartHandshake: HeartHandshake,
  Sparkles: Sparkles,
  Flame: Flame,
};

export default function Services({ onOpenBooking }) {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-y border-emerald-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Спектр запросов
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            С чем вы можете ко мне обратиться
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            В терапии нет «глупых» или «незначительных» проблем. Если вам тяжело, больно или страшно — это уже достаточный повод получить бережную профессиональную поддержку.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.id}
                className="group p-6 sm:p-7 rounded-3xl bg-[#FBFDFB] hover:bg-white border border-emerald-100/80 hover:border-emerald-300/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100/70 group-hover:bg-emerald-700 text-emerald-800 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/50">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-800 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Outcomes */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                    Результат работы:
                  </div>
                  <ul className="space-y-1.5">
                    {service.outcomes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Boundary of competence / Not working with block */}
        <div className="rounded-3xl p-6 sm:p-8 bg-slate-50 border border-slate-200/80 relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-slate-700 font-bold text-sm mb-2">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>Честность и этика: с чем я не работаю</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Как доказательный специалист я беру в работу только те запросы, где моя квалификация гарантирует максимальную пользу. Я не работаю с РПП (анорексия, булимия), химическими зависимостями и расстройствами аутистического спектра (РАС) — для них необходима специализированная мультидисциплинарная помощь.
              </p>
              <div className="flex flex-wrap gap-2">
                {NOT_WORKING_WITH.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium"
                  >
                    • {item.title}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-emerald-900 bg-emerald-100 hover:bg-emerald-200/80 transition-colors"
              >
                <span>Уточнить мой запрос</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
