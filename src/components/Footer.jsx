import React from 'react';
import { Send, MessageSquare, Phone, ExternalLink } from 'lucide-react';
import { PSYCHOLOGIST } from '../data/content';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="mb-4">
              <div className="font-editorial text-2xl font-medium text-white tracking-tight">
                {PSYCHOLOGIST.name}
              </div>
              <div className="text-sm text-emerald-400 font-normal mt-1">
                {PSYCHOLOGIST.title}
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Индивидуальные консультации онлайн. Научно обоснованная психотерапия в атмосфере уважения и принятия.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={PSYCHOLOGIST.contacts.telegram}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-800 text-white flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>

              <a
                href={PSYCHOLOGIST.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-800 text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={PSYCHOLOGIST.contacts.channel}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium flex items-center gap-1.5 transition-colors"
              >
                <span>Telegram-канал</span>
                <ExternalLink className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3">
            <div className="text-sm font-semibold text-white mb-4">
              Разделы
            </div>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">Обо мне</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">С чем я работаю</a></li>
              <li><a href="#methods" className="hover:text-white transition-colors">Методы</a></li>
              <li><a href="#diplomas" className="hover:text-white transition-colors">Дипломы</a></li>
              <li><a href="#tests" className="hover:text-white transition-colors">Тесты</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Стоимость</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Частые вопросы</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="lg:col-span-4">
            <div className="text-sm font-semibold text-white mb-4">
              Контакты
            </div>
            
            <div className="space-y-3 text-sm mb-6">
              <div className="flex items-center gap-2.5 text-slate-300">
                <Send className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={PSYCHOLOGIST.contacts.telegram} className="hover:text-white underline underline-offset-2">
                  {PSYCHOLOGIST.contacts.telegramUsername}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${PSYCHOLOGIST.contacts.phoneRaw}`} className="hover:text-white">
                  {PSYCHOLOGIST.contacts.phone}
                </a>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="py-3 px-6 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors cursor-pointer"
            >
              Записаться на сессию
            </button>
          </div>

        </div>

        <div className="pt-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} {PSYCHOLOGIST.name}. Все права защищены.
          </div>
          <div>
            Частная психологическая практика • ОГРНИП / Самозанятость
          </div>
        </div>

      </div>
    </footer>
  );
}
