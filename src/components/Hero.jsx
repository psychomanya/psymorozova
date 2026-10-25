import React from 'react';
import { Send, ArrowRight, CheckCircle2, Award, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';
import { PSYCHOLOGIST } from '../data/content';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Background soft ambient emerald glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-emerald-100/40 via-teal-100/30 to-emerald-50/20 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-40 right-[-100px] w-80 h-80 bg-teal-200/20 blur-2xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Доказательная психотерапия</span>
              <span className="text-emerald-300">•</span>
              <span className="text-emerald-800 font-normal">Специалитет МГУ</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
              Мягкая и научно обоснованная поддержка, когда{' '}
              <span className="emerald-gradient-text">почва уходит из-под ног</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
              {PSYCHOLOGIST.heroSubtitle}
            </p>

            {/* Quick trust micro-bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9 w-full max-w-xl">
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Опора на протоколы КПТ, ACT и CFT</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Регулярные супервизии в ассоциации КПТ</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Безопасная атмосфера без критики</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Онлайн в любой точке мира • 5 000 ₽</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-700 hover:from-emerald-900 hover:to-teal-800 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Записаться на консультацию</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#tests"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-base font-semibold text-emerald-900 bg-white hover:bg-emerald-50/70 border border-emerald-200 shadow-sm transition-all text-center"
              >
                <BookOpen className="w-4 h-4 text-emerald-700" />
                <span>Пройти самодиагностику</span>
              </a>
            </div>

            {/* Subtle channel link */}
            <div className="mt-5 text-xs text-slate-500 flex items-center gap-2">
              <span>Автор блога</span>
              <a
                href={PSYCHOLOGIST.contacts.channel}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-emerald-700 hover:text-emerald-900 underline underline-offset-2 flex items-center gap-1"
              >
                «{PSYCHOLOGIST.contacts.channelName}»
              </a>
            </div>
          </div>

          {/* Right Column: Photo & Floating Trust Cards */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Decorative accent frames */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/15 via-teal-500/10 to-transparent rounded-3xl transform rotate-2 scale-102 -z-10" />
              <div className="absolute -inset-1 bg-gradient-to-br from-emerald-700/20 to-teal-600/20 rounded-3xl blur-md -z-10" />

              {/* Main Photo Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-200/80 bg-emerald-950 aspect-[3/4]">
                <img
                  src="./assets/mariya-morozova-hero.jpg"
                  alt="Мария Морозова — Клинический психолог"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
                
                {/* Photo caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-lg font-bold tracking-tight">Мария Морозова</div>
                  <div className="text-xs text-emerald-200 font-medium">Клинический психолог • Выпускница МГУ</div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md py-2.5 px-3.5 rounded-2xl shadow-lg border border-emerald-100 flex items-center gap-2.5 animate-bounce-slow">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">МГУ им. Ломоносова</div>
                  <div className="text-[10px] text-slate-500">Специалитет (2013)</div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md py-2.5 px-3.5 rounded-2xl shadow-lg border border-emerald-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-teal-700" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">Член АКПП</div>
                  <div className="text-[10px] text-slate-500">Супервизии & этика</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats / Proof Row */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-emerald-100/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {PSYCHOLOGIST.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-800 tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-slate-600 font-medium">
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
