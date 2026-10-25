import React, { useState } from 'react';
import { Sparkles, Brain, Compass, Heart, Moon, CheckCircle, ArrowRight } from 'lucide-react';
import { METHODS } from '../data/content';

const methodIcons = {
  CBT: Brain,
  ACT: Compass,
  CFT: Heart,
  'CBT-I': Moon,
};

export default function Methods({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('CBT');

  const selectedMethod = METHODS.find((m) => m.code === activeTab) || METHODS[0];
  const Icon = methodIcons[selectedMethod.code] || Sparkles;

  return (
    <section id="methods" className="py-20 sm:py-28 bg-[#FBFDFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Научный фундамент
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Доказательные методы психотерапии
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Я работаю в направлениях с научно доказанной эффективностью. Это значит, что каждый инструмент проверен тысячами клинических исследований, понятен и прозрачен для вас.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {METHODS.map((method) => {
            const TabIcon = methodIcons[method.code] || Sparkles;
            const isActive = activeTab === method.code;
            return (
              <button
                key={method.code}
                onClick={() => setActiveTab(method.code)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-md shadow-emerald-900/10 scale-102'
                    : 'bg-white text-slate-700 hover:bg-emerald-50 border border-emerald-100 hover:border-emerald-200'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? 'text-emerald-200' : 'text-emerald-700'}`} />
                <span>{method.code}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Method Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-100 shadow-xl shadow-emerald-900/5 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shrink-0">
                <Icon className="w-7 h-7 text-emerald-700" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  {selectedMethod.code}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {selectedMethod.name}
                </h3>
              </div>
            </div>
            
            <span className="inline-block text-xs font-semibold px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200/60">
              {selectedMethod.level}
            </span>
          </div>

          <div className="space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {selectedMethod.summary}
            </p>

            <div className="bg-[#F8FAF9] p-5 sm:p-6 rounded-2xl border border-emerald-100/80">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Что это дает вам в практике:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedMethod.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              Обычно методы комбинируются под ваши индивидуальные цели и особенности.
            </div>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
            >
              <span>Подобрать метод для меня</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
