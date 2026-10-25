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
    return `tg://resolve?domain=flymemary&text=${text}`;
  };

  const getWaUrl = () => {
    const text = encodeURIComponent(`Здравствуйте, Мария! Хочу записаться на консультацию. Мой запрос: ${selectedTopic}.`);
    return `https://wa.me/79296513491?text=${text}`;
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight mb-3">
            Стоимость и запись
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Прозрачные условия без скрытых доплат и навязывания долгосрочных пакетов.
          </p>
        </div>

        {/* Pricing Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl">
          
          {/* Main Price Card */}
          <div className="lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-[#f3f5f3] flex flex-col justify-between anim-rise">
            <div>
              <h3 className="font-editorial text-2xl font-medium text-slate-900 mb-4">
                Индивидуальная сессия
              </h3>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-editorial text-4xl sm:text-5xl font-medium text-slate-900 tracking-tight">
                  {PSYCHOLOGIST.price}
                </span>
                <span className="text-sm text-slate-600">/ сессия</span>
              </div>

              <p className="text-sm text-slate-600 mb-8">
                Онлайн по видеосвязи в защищенном формате
              </p>

              <div className="space-y-3 mb-8">
                <div className="p-4 rounded-2xl bg-white flex items-center gap-3">
                  <Clock className="w-4 h-4 text-emerald-800 shrink-0" />
                  <div className="text-sm text-slate-800">
                    <strong className="text-slate-900 font-medium">Первая встреча:</strong> 1,5 часа (90 минут)
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white flex items-center gap-3">
                  <Clock className="w-4 h-4 text-emerald-800 shrink-0" />
                  <div className="text-sm text-slate-800">
                    <strong className="text-slate-900 font-medium">Регулярные сессии:</strong> 50 минут
                  </div>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-slate-700 mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>Google Meet, Telegram или WhatsApp</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>Взрослые и подростки 16+ (с согласия родителей)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>Полная конфиденциальность по этическому кодексу</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 flex gap-3">
              <a
                href={PSYCHOLOGIST.contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-5 rounded-full text-sm font-semibold text-white bg-emerald-900 hover:bg-emerald-950 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Записаться в Telegram</span>
              </a>

              <a
                href={PSYCHOLOGIST.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-4 rounded-full text-emerald-950 bg-white hover:bg-[#e6f4f1] transition-colors"
                aria-label="Записаться через WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Message Composer */}
          <div className="lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-[#fafaf9] flex flex-col justify-between">
            <div>
              <h3 className="font-editorial text-2xl font-medium text-slate-900 mb-2">
                Записаться с готовым запросом
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Выберите то, что беспокоит сейчас, и отправьте готовое сообщение психологу в один клик.
              </p>

              {/* Topics chips */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                {topics.map((t) => {
                  const isSelected = selectedTopic === t;
                  return (
                    <button
                      key={t}
                      onClick={() => setSelectedTopic(t)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-900 text-white'
                          : 'bg-white text-slate-700 hover:bg-[#e6f4f1]'
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>

              {/* Preview bubble */}
              <div className="p-4 rounded-2xl bg-white text-sm text-slate-700 leading-relaxed mb-6">
                <span className="text-sm text-slate-500 block mb-1">Предварительный текст сообщения:</span>
                «Здравствуйте, Мария! Хочу записаться на консультацию. Мой запрос: {selectedTopic}.»
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={getTgUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full text-sm font-semibold text-white bg-emerald-900 hover:bg-emerald-950 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Отправить в Telegram</span>
              </a>

              <a
                href={getWaUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full text-sm font-semibold text-emerald-950 bg-[#e6f4f1] hover:bg-[#d8ece8] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Отправить в WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
