import React, { useState, useEffect } from 'react';
import { Menu, X, Send } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#fafaf9] py-3.5 shadow-xs'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Typographic Personal Brand */}
          <a href="#" className="flex flex-col group">
            <span className="font-editorial text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight group-hover:text-emerald-900 transition-colors leading-none mb-1">
              {PSYCHOLOGIST.name}
            </span>
            <span className="text-sm text-slate-500 font-normal">
              Клинический психолог
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-emerald-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3.5">
            <a
              href={PSYCHOLOGIST.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-emerald-900 bg-[#e6f4f1] hover:bg-[#d8ece8] transition-colors"
            >
              <Send className="w-3.5 h-3.5 text-emerald-800" />
              <span>{PSYCHOLOGIST.contacts.telegramUsername}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-emerald-900 hover:bg-emerald-950 transition-colors cursor-pointer"
            >
              Записаться
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2.5">
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-emerald-900 hover:bg-emerald-950 transition-colors cursor-pointer"
            >
              Запись
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-emerald-900 transition-colors cursor-pointer"
              aria-label="Меню навигации"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-5 bg-[#fafaf9] rounded-3xl transition-opacity">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-base font-medium text-slate-800 hover:bg-emerald-50 hover:text-emerald-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-1">
                <a
                  href={PSYCHOLOGIST.contacts.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-emerald-950 bg-[#e6f4f1]"
                >
                  <Send className="w-4 h-4" />
                  <span>Написать в Telegram ({PSYCHOLOGIST.contacts.telegramUsername})</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
