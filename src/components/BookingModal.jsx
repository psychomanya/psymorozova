import React, { useEffect } from 'react';
import { X, Send, MessageSquare, Phone, Clock, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { PSYCHOLOGIST } from '../data/content';

export default function BookingModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100 z-10 p-6 sm:p-8 animate-scale-up">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold w-fit mb-4">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Запись на консультацию</span>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          Напишите мне для записи
        </h3>
        
        <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
          Выберите удобный мессенджер. Мы обсудим ваш запрос и подберем комфортное время для встречи.
        </p>

        {/* Price & Format Reminder */}
        <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-emerald-100/80 mb-6 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-500 font-medium">Стоимость сессии</div>
            <div className="text-xl font-extrabold text-slate-900">{PSYCHOLOGIST.price}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-500 font-medium">Первая консультация</div>
            <div className="text-sm font-bold text-emerald-800">1,5 часа (90 минут)</div>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="space-y-3 mb-6">
          <a
            href={PSYCHOLOGIST.contacts.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                <Send className="w-5 h-5 text-emerald-200" />
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">Написать в Telegram</div>
                <div className="text-xs text-emerald-200 font-normal">Быстрый ответ @flymemary</div>
              </div>
            </div>
            <span className="text-xs text-emerald-200 group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a
            href={PSYCHOLOGIST.contacts.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-emerald-950 font-bold text-sm transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-sm">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">Написать в WhatsApp</div>
                <div className="text-xs text-slate-500 font-normal">{PSYCHOLOGIST.contacts.phone}</div>
              </div>
            </div>
            <span className="text-xs text-emerald-800 group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a
            href={`tel:${PSYCHOLOGIST.contacts.phoneRaw}`}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-medium text-xs transition-all"
          >
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-slate-500" />
              <span>Позвонить: {PSYCHOLOGIST.contacts.phone}</span>
            </div>
            <span className="text-[11px] text-slate-400">Звонок / SMS</span>
          </a>
        </div>

        {/* Security badge */}
        <div className="flex items-center gap-2 text-xs text-slate-500 justify-center">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Конфиденциальность гарантируется этическим кодексом</span>
        </div>

      </div>
    </div>
  );
}
