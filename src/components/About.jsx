import React from 'react';
import { Shield, BookCheck, HeartHandshake, Compass } from 'lucide-react';
import { PSYCHOLOGIST } from '../data/content';

export default function About({ onOpenBooking }) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7">
            <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight mb-4">
              Обо мне и моем подходе
            </h2>

            <p className="font-editorial text-xl sm:text-2xl text-emerald-950 font-normal italic leading-snug mb-6">
              «Перемены происходят через принятие, а не через вину и самокритику»
            </p>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                Меня зовут <strong className="text-slate-900 font-medium">Мария Морозова</strong>. Я клинический психолог и когнитивно-поведенческий терапевт. Работаю со взрослыми, помогая бережно распутать клубок тревоги, апатии и нарушений сна.
              </p>
              <p>
                Я знаю о выгорании и синдроме самозванца не только по академическим статьям, но и по собственному опыту. В моем кабинете нет давления, шаблонов и оценок. Мы вместе исследуем ваши сложности в безопасном пространстве.
              </p>
              <p>
                Нашим ориентиром остаются ваши истинные ценности — то, что имеет значение именно для вашей жизни.
              </p>
            </div>

            {/* 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6">
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <Shield className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>Личная терапия у психотерапевта</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <BookCheck className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>Регулярные профессиональные супервизии</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <HeartHandshake className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>Бережная безоценочная среда</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <Compass className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>Научные протоколы с доказанной базой</span>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-emerald-900 hover:bg-emerald-950 transition-colors cursor-pointer"
              >
                <span>Записаться на сессию</span>
              </button>
            </div>
          </div>

          {/* Right Column: Close-up Portrait & Channel */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-slate-200">
              <img
                src="./assets/mariya-morozova-portrait.jpg"
                alt="Мария Морозова"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>

            <div className="p-5 rounded-2xl bg-[#0d5c56] text-white flex items-center justify-between gap-4">
              <div className="text-sm font-medium">
                Канал «С психикой вальсируем»
              </div>
              <a
                href={PSYCHOLOGIST.contacts.channel}
                className="shrink-0 px-4 py-2 rounded-full bg-white text-emerald-950 hover:bg-emerald-50 text-sm font-semibold transition-colors"
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
