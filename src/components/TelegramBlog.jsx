import React from 'react';
import { Send, ArrowRight } from 'lucide-react';
import { TELEGRAM_ARTICLES, PSYCHOLOGIST } from '../data/content';

export default function TelegramBlog() {
  return (
    <section id="blog" className="py-20 sm:py-28 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight mb-3">
            Практики самопомощи
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Короткие доказательные упражнения из авторского Telegram-канала, которые можно применить прямо сейчас.
          </p>
        </div>

        {/* 3 Editorial Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {TELEGRAM_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="flex flex-col justify-between"
            >
              <div>
                <span className="text-sm font-semibold text-emerald-900 block mb-2">
                  {article.tag}
                </span>

                <h3 className="font-editorial text-2xl font-medium text-slate-900 mb-4 leading-snug">
                  {article.title}
                </h3>

                <div className="space-y-3 text-base text-slate-700 mb-6">
                  {article.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-800 shrink-0 mt-2.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={article.url || PSYCHOLOGIST.contacts.channel}
                  className="text-sm font-semibold text-emerald-900 hover:text-emerald-950 inline-flex items-center gap-1.5"
                >
                  <span>Читать разбор в канале</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Channel Banner */}
        <div className="rounded-3xl p-8 sm:p-12 bg-[#0d5c56] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <Send className="w-7 h-7 text-emerald-200" />
            </div>
            <div>
              <div className="font-editorial text-lg sm:text-2xl font-medium text-white mb-1">
                Канал «С психикой вальсируем»
              </div>
              <div className="text-base text-emerald-100">
                Спокойный профессиональный взгляд на тревогу, отношения и контакт с собой.
              </div>
            </div>
          </div>

          <a
            href={PSYCHOLOGIST.contacts.channel}
            className="shrink-0 px-8 py-4 rounded-full bg-white text-emerald-950 hover:bg-emerald-50 text-base font-semibold transition-colors"
          >
            Подписаться
          </a>
        </div>

      </div>
    </section>
  );
}
