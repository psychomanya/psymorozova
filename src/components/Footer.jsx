import React from 'react';
import { Send, MessageSquare, Phone, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { PSYCHOLOGIST } from '../data/content';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white text-lg tracking-tight">
                  {PSYCHOLOGIST.name}
                </div>
                <div className="text-xs text-emerald-400 font-medium">
                  {PSYCHOLOGIST.title}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Научно доказанная психотерапия без давления, ярлыков и эзотерики. МГУ им. М.В. Ломоносова, член АКПП, регулярные супервизии.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={PSYCHOLOGIST.contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>

              <a
                href={PSYCHOLOGIST.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-teal-600 text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={PSYCHOLOGIST.contacts.channel}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <span>Блог в Telegram</span>
                <ExternalLink className="w-3 h-3 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Навигация
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Обо мне</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">С чем я помогаю</a></li>
              <li><a href="#methods" className="hover:text-emerald-400 transition-colors">Доказательные методы</a></li>
              <li><a href="#diplomas" className="hover:text-emerald-400 transition-colors">Дипломы и сертификаты</a></li>
              <li><a href="#tests" className="hover:text-emerald-400 transition-colors">Психологические тесты</a></li>
              <li><a href="#blog" className="hover:text-emerald-400 transition-colors">Техники из Telegram</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Условия и стоимость</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Частые вопросы</a></li>
            </ul>
          </div>

          {/* Contacts Block */}
          <div className="lg:col-span-4">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Контакты для записи
            </div>
            
            <div className="space-y-3 text-xs sm:text-sm mb-6">
              <div className="flex items-center gap-2 text-slate-300">
                <Send className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={PSYCHOLOGIST.contacts.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                  {PSYCHOLOGIST.contacts.telegramUsername}
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${PSYCHOLOGIST.contacts.phoneRaw}`} className="hover:text-white">
                  {PSYCHOLOGIST.contacts.phone}
                </a>
              </div>

              <div className="text-xs text-slate-400 pt-1">
                Формат: онлайн видеозвонки (Google Meet / Telegram / WhatsApp).
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 px-5 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs transition-colors shadow-sm"
            >
              Записаться на консультацию
            </button>
          </div>

        </div>

        {/* Bottom Bar & Crisis Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Мария Морозова. Все права защищены.
          </div>

          <div className="text-center md:text-right max-w-md text-[11px] text-slate-500">
            Психологическое консультирование не является скорой медицинской помощью. При остром кризисном состоянии обращайтесь по телефону доверия: <strong className="text-slate-400">8-800-2000-122</strong> или <strong className="text-slate-400">112</strong>.
          </div>
        </div>

      </div>
    </footer>
  );
}
