import React, { useState } from 'react';
import { Check, Send, MessageSquare, Clock } from 'lucide-react';
import { PSYCHOLOGIST } from '../data/content';

export default function Pricing() {
  const [selectedTopic, setSelectedTopic] = useState('Тревога и паника');

  const topics = [
    'Тревога и паника',
    'Апатия и усталость',
    'Бессонница и сон',
    'Самокритика и вина',
    'Родительское выгорание',
    'Отношения и границы',
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
    <section id="pricing" className="py-16 sm:py-24 bg-white border-y border-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
            Стоимость
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Условия и запись
          </h2>
          <p className="text-sm text-slate-600">
            Прозрачная цена без скрытых условий и навязанных пакетов.
          </p>
        </div>

        {/* Pricing & 1-Click Generator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Main Price Card */}
          <div className="lg:col-span-6 rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-[#FBFDFB] to-emerald-50/40 border border-emerald-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-900">
                  Индивидуальная сессия
                </span>
                <span className="text-xs text-slate-500 font-medium">Онлайн по видеосвязи</span>
              </div>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  {PSYCHOLOGIST.price}
                </span>
                <span className="text-sm text-slate-500">/ консультация</span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white border border-emerald-100 flex items-center gap-3">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                  <div className="text-xs sm:text-sm text-slate-800">
                    <strong className="text-slate-900">Первая встреча:</strong> 1,5 часа (90 мин)
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-emerald-100 flex items-center gap-3">
                  <Clock className="w-4 h-4 text-teal-700 shrink-0" />
                  <div className="text-xs sm:text-sm text-slate-800">
                    <strong className="text-slate-900">Последующие сессии:</strong> 50 минут
                  </div>
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Google Meet, Telegram или WhatsApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Взрослые и подростки 16+ (с согласия родителей)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% конфиденциальность по кодексу этики</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex gap-3">
              <a
                href={PSYCHOLOGIST.contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram</span>
              </a>

              <a
                href={PSYCHOLOGIST.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-900 font-bold text-xs border border-teal-200 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-teal-700" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 1-Click Request Assistant */}
          <div className="lg:col-span-6 rounded-3xl p-7 sm:p-8 bg-slate-900 text-white flex flex-col justify-between shadow-lg">
            <div>
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                Быстрая запись
              </div>

              <h3 className="text-xl font-bold mb-2">
                С чего начнем?
              </h3>
              
              <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                Выберите запрос — система сформирует вежливое сообщение, чтобы вам не пришлось думать над формулировкой:
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {topics.map((t) => {
                  const isSelected = selectedTopic === t;
                  return (
                    <button
                      key={t}
                      onClick={() => setSelectedTopic(t)}
                      className={`text-xs px-3 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-500 text-slate-950 font-bold'
                          : 'bg-white/10 text-slate-300 hover:bg-white/15'
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 mb-6">
                <div className="text-[10px] text-slate-400 mb-1 uppercase font-semibold">
                  Текст сообщения:
                </div>
                <div className="text-xs text-emerald-200 font-mono italic">
                  «Здравствуйте, Мария! Хочу записаться на консультацию. Мой запрос: {selectedTopic}.»
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href={getTgUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors text-center"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Отправить в Telegram</span>
              </a>

              <a
                href={getWaUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors text-center"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-300" />
                <span>Отправить в WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
