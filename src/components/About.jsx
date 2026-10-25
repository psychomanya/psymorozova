import React from 'react';
import { Shield, BookCheck, HeartHandshake, Compass } from 'lucide-react';
import { PSYCHOLOGIST } from '../data/content';

export default function About({ onOpenBooking }) {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FBFDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
              Обо мне
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              «Перемены происходят через принятие себя, а не через вину и критику»
            </h2>

            <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Меня зовут <strong className="text-slate-900 font-semibold">Мария Морозова</strong>. Я клинический психолог и КПТ-терапевт. Получила фундаментальное психологическое образование и специализируюсь на доказательных протоколах помощи при тревоге, апатии и нарушениях сна.
              </p>
              <p>
                Я знаю о тревоге, выгорании и синдроме самозванца не только по профессиональной литературе, но и по личному пути. Поэтому в моей работе нет давления, готовых шаблонов и критики. Мы вместе исследуем ваши сложности с заботой и вниманием.
              </p>
              <p>
                Нашим ориентиром всегда остаются ваши истинные ценности — то, что по-настоящему важно именно для вас.
              </p>
            </div>

            {/* 4 Pillars of Trust */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-5 border-t border-slate-100">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <Shield className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Личная терапия у психотерапевта</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <BookCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Регулярные супервизии сложных кейсов</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <HeartHandshake className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Безопасная и мягкая атмосфера</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <Compass className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Научные протоколы с доказанной базой</span>
              </div>
            </div>

            <div className="mt-7">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 transition-all cursor-pointer shadow-xs"
              >
                <span>Записаться на сессию</span>
              </button>
            </div>
          </div>

          {/* Right Column: Close-up Portrait & Quote */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden shadow-ambient border border-emerald-100 aspect-[4/5] bg-emerald-900">
              <img
                src="./assets/mariya-morozova-portrait.jpg"
                alt="Мария Морозова"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-sm font-bold">Мария Морозова</div>
                <div className="text-xs text-emerald-200 font-medium">«Человеку нужен человек»</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-900 text-white flex items-center justify-between gap-4">
              <div className="text-xs text-emerald-100">
                Канал <strong className="text-white">«С психикой вальсируем 🧠»</strong>
              </div>
              <a
                href={PSYCHOLOGIST.contacts.channel}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-3 py-1.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 text-xs font-bold transition-all"
              >
                Читать блог
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
