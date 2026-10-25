import React from 'react';
import { Send, ArrowRight } from 'lucide-react';
import { TELEGRAM_ARTICLES, PSYCHOLOGIST } from '../data/content';

export default function TelegramBlog() {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-[#FBFDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
            Самопомощь
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Практики из Telegram-канала
          </h2>
          <p className="text-sm text-slate-600">
            Простые научно обоснованные упражнения, которые можно применить прямо сейчас.
          </p>
        </div>

        {/* 3 Actionable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {TELEGRAM_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/50 mb-3 inline-block">
                  {article.tag}
                </span>

                <h3 className="text-base font-bold text-slate-900 mb-4">
                  {article.title}
                </h3>

                <div className="space-y-2 text-xs text-slate-600 mb-4">
                  {article.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <a
                  href={PSYCHOLOGIST.contacts.channel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
                >
                  <span>Подробнее в канале</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Channel Banner */}
        <div className="rounded-2xl p-6 sm:p-7 bg-emerald-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Send className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <div className="text-sm font-bold">Канал «С психикой вальсируем 🧠»</div>
              <div className="text-xs text-emerald-200">
                Полезные разборы без сложной терминологии и поддержка в трудную минуту.
              </div>
            </div>
          </div>

          <a
            href={PSYCHOLOGIST.contacts.channel}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 text-xs font-bold transition-all"
          >
            Подписаться
          </a>
        </div>

      </div>
    </section>
  );
}
