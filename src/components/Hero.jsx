import React from 'react';
import { ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';
import { PSYCHOLOGIST } from '../data/content';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
      {/* Soft ambient emerald background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-emerald-100/30 via-teal-100/20 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value proposition & personal brand */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50/90 border border-emerald-200/60 text-emerald-900 text-xs font-medium mb-5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Доказательная психотерапия онлайн</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-4">
              Бережная психотерапия,{' '}
              <span className="emerald-gradient-text">когда почва уходит из-под ног</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-7 font-normal">
              {PSYCHOLOGIST.heroSubtitle}
            </p>

            {/* Micro-proof bullets — calm, quiet, truthful */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-lg">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Научные подходы (КПТ, ACT, CFT)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Безопасная атмосфера без критики</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Индивидуальные сессии по видеосвязи</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>5 000 ₽ / сессия (первая — 1,5 ч)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 shadow-ambient transition-all cursor-pointer"
              >
                <span>Записаться на консультацию</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#tests"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold text-emerald-900 bg-white hover:bg-emerald-50 border border-emerald-200 transition-all text-center"
              >
                <BookOpen className="w-4 h-4 text-emerald-700" />
                <span>Самодиагностика</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Portrait Photo */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[350px] sm:max-w-[380px]">
              <div className="rounded-3xl overflow-hidden shadow-ambient border border-emerald-200/60 bg-emerald-950 aspect-[3/4]">
                <img
                  src="./assets/mariya-morozova-hero.jpg"
                  alt="Мария Морозова — Клинический психолог"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
