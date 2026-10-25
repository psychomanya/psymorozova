import React, { useEffect } from 'react';
import { X, Send, MessageSquare, Phone, ShieldCheck } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100 z-10 p-6 sm:p-7">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
          Запись на сессию
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Напишите мне в мессенджер
        </h3>
        
        <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
          Мы обсудим вашу ситуацию и выберем удобное окно для первой встречи.
        </p>

        {/* Price Tag */}
        <div className="p-3.5 rounded-2xl bg-[#F8FAF9] border border-emerald-100 mb-5 flex items-center justify-between text-xs">
          <div>
            <div className="text-slate-500">Стоимость сессии</div>
            <div className="text-lg font-extrabold text-slate-900">{PSYCHOLOGIST.price}</div>
          </div>
          <div className="text-right">
            <div className="text-slate-500">Первая консультация</div>
            <div className="font-bold text-emerald-800">1,5 часа (90 мин)</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-2.5 mb-5">
          <a
            href={PSYCHOLOGIST.contacts.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-xs transition-all"
          >
            <div className="flex items-center gap-2.5">
              <Send className="w-4 h-4" />
              <span>Написать в Telegram @flymemary</span>
            </div>
            <span className="text-emerald-200">→</span>
          </a>

          <a
            href={PSYCHOLOGIST.contacts.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-emerald-950 font-bold text-xs transition-all"
          >
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Написать в WhatsApp</span>
            </div>
            <span className="text-emerald-800">→</span>
          </a>

          <a
            href={`tel:${PSYCHOLOGIST.contacts.phoneRaw}`}
            className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs transition-all"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              <span>{PSYCHOLOGIST.contacts.phone}</span>
            </div>
            <span className="text-[10px] text-slate-400">Звонок / SMS</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Конфиденциальность гарантируется</span>
        </div>

      </div>
    </div>
  );
}
