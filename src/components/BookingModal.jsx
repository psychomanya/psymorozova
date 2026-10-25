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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white rounded-3xl z-10 p-7 sm:p-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="font-editorial text-2xl font-medium text-slate-900 mb-2">
          Запись на консультацию
        </h3>
        
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          Напишите мне в удобный для вас мессенджер — мы обсудим вашу ситуацию и выберем время первой сессии.
        </p>

        {/* Price Tag */}
        <div className="p-4 rounded-2xl bg-[#f3f5f3] mb-6 flex items-center justify-between text-sm">
          <div>
            <div className="text-slate-500 text-sm">Стоимость сессии</div>
            <div className="text-xl font-medium text-slate-900 font-editorial">{PSYCHOLOGIST.price}</div>
          </div>
          <div className="text-right">
            <div className="text-slate-500 text-sm">Первая диагностика</div>
            <div className="font-semibold text-emerald-900 text-sm">1,5 часа (90 мин)</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-6">
          <a
            href={PSYCHOLOGIST.contacts.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-emerald-900 hover:bg-emerald-950 text-white font-semibold text-sm transition-colors"
          >
            <div className="flex items-center gap-3">
              <Send className="w-4 h-4" />
              <span>Написать в Telegram @flymemary</span>
            </div>
            <span className="text-emerald-200">→</span>
          </a>

          <a
            href={PSYCHOLOGIST.contacts.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-[#e6f4f1] hover:bg-[#d8ece8] text-emerald-950 font-semibold text-sm transition-colors"
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="w-4 h-4 text-emerald-800" />
              <span>Написать в WhatsApp</span>
            </div>
            <span className="text-emerald-900">→</span>
          </a>

          <a
            href={`tel:${PSYCHOLOGIST.contacts.phoneRaw}`}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-slate-500" />
              <span>{PSYCHOLOGIST.contacts.phone}</span>
            </div>
            <span className="text-sm text-slate-500">Звонок / SMS</span>
          </a>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
          <span>100% конфиденциальность по кодексу профессиональной этики</span>
        </div>

      </div>
    </div>
  );
}
