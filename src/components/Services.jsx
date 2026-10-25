import React from 'react';
import { 
  ShieldAlert, 
  CloudRain, 
  Moon, 
  HeartHandshake, 
  Heart, 
  Compass, 
  Check, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { SERVICES, NOT_WORKING_WITH } from '../data/content';

const iconMap = {
  ShieldAlert: ShieldAlert,
  CloudRain: CloudRain,
  Moon: Moon,
  HeartHandshake: HeartHandshake,
  Heart: Heart,
  Compass: Compass,
};

export default function Services({ onOpenBooking }) {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-y border-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
            Запросы
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            С чем вы можете обратиться
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Если вам тяжело или тревожно — это достаточный повод получить поддержку.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Heart;
            return (
              <div
                key={service.id}
                className="group p-6 rounded-2xl bg-[#FBFDFB] hover:bg-white border border-emerald-100 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 text-emerald-800" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/50">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100/80 space-y-1.5">
                  {service.outcomes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimalist Not-working-with disclaimer */}
        <div className="rounded-2xl p-5 sm:p-6 bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-slate-500 shrink-0" />
            <div className="text-xs text-slate-600">
              <span className="font-bold text-slate-800">Честные границы компетенций:</span> не работаю с РПП, химическими зависимостями и РАС (требуют профильных клиник).
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 text-xs font-bold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Уточнить мой запрос</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
