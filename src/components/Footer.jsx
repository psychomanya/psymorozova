import React from 'react';
import { Send, MessageSquare, Phone, ExternalLink } from 'lucide-react';
import { PSYCHOLOGIST } from '../data/content';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center text-white font-bold text-xs">
                ММ
              </div>
              <div>
                <div className="font-bold text-white text-base tracking-tight">
                  {PSYCHOLOGIST.name}
                </div>
                <div className="text-[11px] text-emerald-400 font-medium">
                  {PSYCHOLOGIST.title}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-5">
              Научно доказанная психотерапия без давления и эзотерики. Выпускница МГУ им. Ломоносова, член АКПП, супервизии.
            </p>

            <div className="flex items-center gap-2.5">
              <a
                href={PSYCHOLOGIST.contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-3.5 h-3.5" />
              </a>

              <a
                href={PSYCHOLOGIST.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-teal-700 text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
              </a>

              <a
                href={PSYCHOLOGIST.contacts.channel}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>Telegram-канал</span>
                <ExternalLink className="w-3 h-3 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Разделы
            </div>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Обо мне</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">С чем я работаю</a></li>
              <li><a href="#methods" className="hover:text-emerald-400 transition-colors">Методы</a></li>
              <li><a href="#diplomas" className="hover:text-emerald-400 transition-colors">Дипломы</a></li>
              <li><a href="#tests" className="hover:text-emerald-400 transition-colors">Тесты</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Стоимость</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="lg:col-span-4">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Контакты
            </div>
            
            <div className="space-y-2 text-xs mb-5">
              <div className="flex items-center gap-2 text-slate-300">
                <Send className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={PSYCHOLOGIST.contacts.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                  {PSYCHOLOGIST.contacts.telegramUsername}
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${PSYCHOLOGIST.contacts.phoneRaw}`} className="hover:text-white">
                  {PSYCHOLOGIST.contacts.phone}
                </a>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Записаться на сессию
            </button>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Мария Морозова. Все права защищены.
          </div>

          <div className="text-center md:text-right text-[10px] text-slate-500">
            Психологическая помощь не является скорой медицинской помощью. Телефон доверия: <strong className="text-slate-400">8-800-2000-122</strong> или <strong className="text-slate-400">112</strong>.
          </div>
        </div>

      </div>
    </footer>
  );
}
