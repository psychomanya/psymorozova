import React, { useState } from 'react';
import { Check, Send, MessageSquare, Phone, Clock, Video, Shield, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { PSYCHOLOGIST, WORK_PROCESS } from '../data/content';

export default function Pricing() {
  const [selectedTopic, setSelectedTopic] = useState('Тревога и паника');

  const topics = [
    'Тревога и паника',
    'Апатия и депрессия',
    'Бессонница и сон',
    'Самокритика и перфекционизм',
    'Родительское выгорание',
    'Сложности в отношениях',
  ];

  const getTgUrl = () => {
    const text = encodeURIComponent(`Здравствуйте, Мария! Хочу записаться на консультацию. Мой запрос: ${selectedTopic}.`);
    return `https://t.me/flymemary?text=${text}`;
  };

  const getWaUrl = () => {
    const text = encodeURIComponent(`Здравствуйте, Мария! Хочу записаться на консультацию. Мой запрос: ${selectedTopic}.`);
    return `https://wa.me/79296513491?text=${text}`;
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white border-y border-emerald-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Условия & Стоимость
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Прозрачная стоимость и понятный процесс
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Никаких скрытых платежей, навязанных пакетов или сложных обязательств. Вы платите за конкретную сессию и выбираете комфортный для себя темп.
          </p>
        </div>

        {/* Pricing Card & Format Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Main Price Card */}
          <div className="lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#FBFDFB] via-white to-emerald-50/50 border-2 border-emerald-300 shadow-xl shadow-emerald-900/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-900">
                  Индивидуальная сессия
                </span>
                <span className="text-xs text-slate-500 font-medium">Онлайн по всему миру</span>
              </div>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  {PSYCHOLOGIST.price}
                </span>
                <span className="text-sm text-slate-500 font-medium">/ консультация</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Первичная встреча: 1,5 часа (90 минут)</div>
                    <div className="text-xs text-slate-500">Полноценная диагностика, разбор симптомов и выработка плана без спешки.</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Последующие сессии: 50 минут</div>
                    <div className="text-xs text-slate-500">Регулярная терапевтическая работа, освоение техник и закрепление навыков.</div>
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Удобная видеосвязь (Google Meet, Telegram, WhatsApp)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Работа со взрослыми и подростками 16+ (с согласия родителей)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Практические задания и методички для закрепления результата</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% соблюдение конфиденциальности и этики</span>
                </li>
              </ul>
            </div>

            {/* Quick contact buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
              <a
                href={PSYCHOLOGIST.contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-sm transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Написать в Telegram</span>
              </a>

              <a
                href={PSYCHOLOGIST.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-teal-50 hover:bg-teal-100 text-teal-900 font-bold text-xs border border-teal-200 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-teal-700" />
                <span>Написать в WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Request Generator */}
          <div className="lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-slate-900 text-white flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Быстрый старт в 1 клик</span>
              </div>

              <h3 className="text-2xl font-bold mb-3">
                С чего вы хотите начать?
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                Выберите ваш ключевой запрос, и система сформирует вежливое начальное сообщение для записи — вам не придется долго думать, как сформулировать свои мысли:
              </p>

              {/* Topic Pills */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {topics.map((t) => {
                  const isSelected = selectedTopic === t;
                  return (
                    <button
                      key={t}
                      onClick={() => setSelectedTopic(t)}
                      className={`text-xs px-3.5 py-2 rounded-xl font-medium transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20 scale-102'
                          : 'bg-white/10 text-slate-300 hover:bg-white/15'
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>

              {/* Generated message preview */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-8">
                <div className="text-[11px] text-slate-400 mb-1 font-semibold uppercase tracking-wider">
                  Предпросмотр сообщения:
                </div>
                <div className="text-xs sm:text-sm text-emerald-200 font-mono italic">
                  «Здравствуйте, Мария! Хочу записаться на консультацию. Мой запрос: {selectedTopic}.»
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getTgUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md text-center"
              >
                <Send className="w-4 h-4" />
                <span>Отправить в Telegram</span>
              </a>

              <a
                href={getWaUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all text-center"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>Отправить в WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Roadmap / How We Will Work (4 Steps) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Как устроен процесс терапии
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Понятные и предсказуемые шаги от первого сообщения до уверенности в своих силах
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORK_PROCESS.map((wp) => (
              <div
                key={wp.step}
                className="p-6 rounded-3xl bg-[#FBFDFB] border border-emerald-100/80 shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-emerald-800/20 mb-3 block">
                    {wp.step}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {wp.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {wp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
