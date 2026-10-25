import React, { useState, useEffect } from 'react';
import { Menu, X, Send, MessageSquare } from 'lucide-react';
import { PSYCHOLOGIST } from '../data/content';

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Обо мне', href: '#about' },
    { label: 'Запросы', href: '#services' },
    { label: 'Методы', href: '#methods' },
    { label: 'Дипломы', href: '#diplomas' },
    { label: 'Тесты', href: '#tests' },
    { label: 'Материалы', href: '#blog' },
    { label: 'Стоимость', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-emerald-100/60 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Typographic Personal Brand Logo — clean, no badges/boxes */}
          <a href="#" className="flex flex-col group">
            <span className="font-bold text-slate-900 tracking-tight text-lg sm:text-xl group-hover:text-emerald-800 transition-colors leading-tight">
              {PSYCHOLOGIST.name}
            </span>
            <span className="text-[11px] text-emerald-800/80 font-medium tracking-wide">
              Клинический психолог • МГУ
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-slate-600 hover:text-emerald-800 transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PSYCHOLOGIST.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/70 transition-all"
            >
              <Send className="w-3 h-3 text-emerald-700" />
              <span>{PSYCHOLOGIST.contacts.telegramUsername}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 shadow-sm transition-all transform active:scale-95 cursor-pointer"
            >
              Записаться
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900"
            >
              Запись
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-white/98 backdrop-blur-lg rounded-2xl shadow-xl border border-emerald-100 transition-all">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={PSYCHOLOGIST.contacts.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 rounded-xl bg-emerald-50 text-emerald-900 font-semibold text-xs"
                >
                  <Send className="w-3.5 h-3.5 text-emerald-700" />
                  Написать в Telegram
                </a>
                <a
                  href={PSYCHOLOGIST.contacts.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 rounded-xl bg-teal-50 text-teal-900 font-semibold text-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-teal-700" />
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
