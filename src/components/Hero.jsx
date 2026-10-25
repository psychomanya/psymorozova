import React from 'react';
import { ArrowRight, CheckCircle2, Award, BookOpen, ShieldCheck } from 'lucide-react';
import { PSYCHOLOGIST } from '../data/content';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
      {/* Soft ambient emerald background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-emerald-100/35 via-teal-100/25 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Value proposition & personal brand */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Minimalist Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-900 text-xs font-semibold mb-5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Доказательная терапия</span>
              <span className="text-emerald-300">•</span>
              <span className="text-emerald-800 font-normal">МГУ им. М.В. Ломоносова</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-4">
              Бережная психотерапия,{' '}
              <span className="emerald-gradient-text">когда почва уходит из-под ног</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-6 font-normal">
              {PSYCHOLOGIST.heroSubtitle}
            </p>

            {/* Micro-proof bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 w-full max-w-lg">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>КПТ, ACT и CFT протоколы</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Супервизии в АКПП</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Без давления и оценки</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Онлайн • 5 000 ₽ / сессия</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <span>Записаться на консультацию</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#tests"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold text-emerald-900 bg-white hover:bg-emerald-50 border border-emerald-200 transition-all text-center"
              >
                <BookOpen className="w-4 h-4 text-emerald-700" />
                <span>Пройти тест (3 мин)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Photo */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-emerald-200/70 bg-emerald-950 aspect-[3/4]">
                <img
                  src="./assets/mariya-morozova-hero.jpg"
                  alt="Мария Морозова — Клинический психолог"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/75 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-base font-bold tracking-tight">Мария Морозова</div>
                  <div className="text-xs text-emerald-200 font-medium">Клинический психолог • Психфак МГУ</div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-md py-2 px-3 rounded-xl shadow-md border border-emerald-100 flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Award className="w-3.5 h-3.5 text-emerald-700" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">МГУ им. Ломоносова</div>
                  <div className="text-[10px] text-slate-500">Специалитет</div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-3 -left-3 bg-white/95 backdrop-blur-md py-2 px-3 rounded-xl shadow-md border border-emerald-100 flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">Член АКПП</div>
                  <div className="text-[10px] text-slate-500">Супервизии & этика</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-14 pt-8 border-t border-emerald-100/70">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PSYCHOLOGIST.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-800 tracking-tight mb-0.5">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-600 font-medium leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
