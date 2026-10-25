import React, { useState } from 'react';
import { Send, BookOpen, CheckCircle2, ChevronDown, ChevronUp, Sparkles, ExternalLink } from 'lucide-react';
import { TELEGRAM_ARTICLES, PSYCHOLOGIST } from '../data/content';

export default function TelegramBlog() {
  const [expandedId, setExpandedId] = useState('anchor');

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="blog" className="py-20 sm:py-28 bg-[#FBFDFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            База знаний & Самопомощь
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Полезные техники из моего Telegram-канала
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            В канале <strong className="text-emerald-900 font-semibold">«С психикой вальсируем 🧠»</strong> я делюсь простыми научными упражнениями, которые вы можете применить прямо сейчас.
          </p>
        </div>

        {/* Articles Accordion / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {TELEGRAM_ARTICLES.map((article) => {
            const isExpanded = expandedId === article.id;
            return (
              <div
                key={article.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/50">
                      {article.tag}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {article.source}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {article.summary}
                  </p>

                  {/* Step by step instructions toggle */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => toggleExpand(article.id)}
                      className="flex items-center justify-between w-full text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors py-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Скрыть пошаговый алгоритм' : 'Пошаговый алгоритм выполнения'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2 text-xs text-slate-700 animate-fade-in">
                        {article.steps.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={PSYCHOLOGIST.contacts.channel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors"
                  >
                    <span>Читать пост в канале</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Telegram Channel Callout Banner */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-emerald-800 via-teal-800 to-emerald-900 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-bold mb-3">
              <Send className="w-3.5 h-3.5" />
              <span>Telegram-канал о доказательной психологии</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              «С психикой вальсируем 🧠»
            </h3>
            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed font-normal">
              Разборы сложных тем простым языком, поддержка мам и родителей, развенчание мифов о тревоге и бессоннице, честные мысли психолога без белого халата.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <a
              href={PSYCHOLOGIST.contacts.channel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-emerald-900 hover:bg-emerald-50 text-sm font-bold shadow-md transition-all text-center"
            >
              <Send className="w-4 h-4 text-emerald-700" />
              <span>Подписаться на канал</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
