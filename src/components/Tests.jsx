import React from 'react';
import { ExternalLink, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { DIAGNOSTIC_TESTS } from '../data/content';

export default function Tests() {
  return (
    <section id="tests" className="py-16 sm:py-24 bg-white border-y border-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
            Самодиагностика
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Клинические тесты онлайн
          </h2>
          <p className="text-sm text-slate-600">
            Оцените уровень тревоги, подавленности или бессонницы за 2–4 минуты.
          </p>
        </div>

        {/* Tests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {DIAGNOSTIC_TESTS.map((test) => (
            <div
              key={test.id}
              className="p-5 rounded-2xl bg-[#FBFDFB] hover:bg-white border border-emerald-100 hover:border-emerald-300 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/50">
                    {test.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Clock className="w-3 h-3 text-emerald-600" />
                    <span>{test.time}</span>
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 leading-snug">
                  {test.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {test.desc}
                </p>
              </div>

              <div>
                <a
                  href={test.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors"
                >
                  <span>Пройти тест</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist note */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Анонимно, бесплатно и без рекламы. Вы можете прислать результат перед первой встречей.</span>
        </div>

      </div>
    </section>
  );
}
