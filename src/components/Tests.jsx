import React from 'react';
import { ExternalLink, Clock, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { DIAGNOSTIC_TESTS } from '../data/content';

export default function Tests() {
  return (
    <section id="tests" className="py-20 sm:py-28 bg-white border-y border-emerald-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Интерактивный блок
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Экспресс-самодиагностика состояния
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Если вы сомневаетесь, нужна ли вам помощь, или хотите объективно оценить уровень своего стресса, пройдите валидированные клинические тесты онлайн.
          </p>
        </div>

        {/* Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-12">
          {DIAGNOSTIC_TESTS.map((test) => (
            <div
              key={test.id}
              className="p-6 rounded-3xl bg-[#FBFDFB] hover:bg-white border border-emerald-100 hover:border-emerald-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/50">
                    {test.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{test.time}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {test.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {test.description}
                </p>
              </div>

              <div>
                <a
                  href={test.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm"
                >
                  <span>Пройти онлайн</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Explanatory Banner */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                Конфиденциально и без рекламы
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                Тесты созданы мной специально для комфортной самодиагностики клиентов. Вы можете сохранить результат и прислать его мне перед первичной консультацией — это сэкономит время и позволит быстрее перейти к решению проблемы.
              </p>
            </div>
          </div>

          <a
            href="https://psychomanya.github.io/psychotests/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-emerald-900 font-bold text-xs border border-emerald-200 hover:bg-emerald-50 transition-all shadow-sm"
          >
            <span>Все тесты на отдельной странице</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
