import React from 'react';
import { ArrowRight, BookOpen, Check } from 'lucide-react';
import { PSYCHOLOGIST } from '../data/content';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Display scale dominant focal point */}
          <div className="lg:col-span-7 flex flex-col items-start text-left anim-rise">
            <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-medium text-slate-900 tracking-tight leading-[1.02] mb-6">
              Бережная психотерапия
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-xl mb-8 font-normal">
              Клинический психолог Мария Морозова. Научно обоснованная помощь при тревоге, апатии и бессоннице, когда почва уходит из-под ног.
            </p>

            {/* Micro-proof points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9 w-full max-w-lg">
              <div className="flex items-center gap-3 text-base text-slate-800">
                <Check className="w-5 h-5 text-emerald-800 shrink-0" />
                <span>Научные протоколы КПТ, ACT, CFT</span>
              </div>
              <div className="flex items-center gap-3 text-base text-slate-800">
                <Check className="w-5 h-5 text-emerald-800 shrink-0" />
                <span>Безопасная атмосфера без критики</span>
              </div>
              <div className="flex items-center gap-3 text-base text-slate-800">
                <Check className="w-5 h-5 text-emerald-800 shrink-0" />
                <span>Сессии в Яндекс Телемост</span>
              </div>
              <div className="flex items-center gap-3 text-base text-slate-800">
                <Check className="w-5 h-5 text-emerald-800 shrink-0" />
                <span>5 000 ₽ / сессия (первая — 1,5 ч)</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-white bg-emerald-900 hover:bg-emerald-950 transition-colors cursor-pointer"
              >
                <span>Записаться на консультацию</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#tests"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-medium text-emerald-950 bg-[#e6f4f1] hover:bg-[#d8ece8] transition-colors text-center"
              >
                <BookOpen className="w-5 h-5 text-emerald-800" />
                <span>Самодиагностика</span>
              </a>
            </div>
          </div>

          {/* Focal Point Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[460px] sm:max-w-[480px]">
              <div className="rounded-3xl overflow-hidden bg-slate-200 aspect-[4/5] sm:h-[560px]">
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
