import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Phone, MessageSquare, Sparkles } from 'lucide-react';
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
    { label: 'С чем работаю', href: '#services' },
    { label: 'Методы', href: '#methods' },
    { label: 'Дипломы', href: '#diplomas' },
    { label: 'Самодиагностика', href: '#tests' },
    { label: 'Материалы', href: '#blog' },
    { label: 'Стоимость', href: '#pricing' },
    { label: 'Вопросы', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-emerald-100/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-700 to-teal-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <div className="font-bold text-slate-900 tracking-tight text-lg group-hover:text-emerald-800 transition-colors">
                {PSYCHOLOGIST.name}
              </div>
              <div className="text-xs text-emerald-800/80 font-medium tracking-wide">
                Клинический психолог • КПТ
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors"
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
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/70 transition-all"
            >
              <Send className="w-3.5 h-3.5 text-emerald-700" />
              <span>{PSYCHOLOGIST.contacts.telegramUsername}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-700 hover:from-emerald-900 hover:to-teal-800 shadow-sm hover:shadow transition-all transform active:scale-95"
            >
              <span>Записаться</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-2 rounded-full text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800"
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
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={PSYCHOLOGIST.contacts.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50 text-emerald-900 font-medium text-sm"
                >
                  <Send className="w-4 h-4 text-emerald-700" />
                  Написать в Telegram
                </a>
                <a
                  href={PSYCHOLOGIST.contacts.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-50 text-teal-900 font-medium text-sm"
                >
                  <MessageSquare className="w-4 h-4 text-teal-700" />
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
