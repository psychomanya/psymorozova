import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { METHODS } from '../data/content';

export default function Methods({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('CBT');

  const selectedMethod = METHODS.find((m) => m.code === activeTab) || METHODS[0];

  return (
    <section id="methods" className="py-20 sm:py-28 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight mb-3">
            Научно обоснованные методы
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Подходы доказательной медицины с подтвержденной эффективностью в международных клинических исследованиях.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {METHODS.map((method) => {
            const isActive = activeTab === method.code;
            return (
              <button
                key={method.code}
                onClick={() => setActiveTab(method.code)}
                className={`px-6 py-3 rounded-full text-base font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-emerald-900 text-white'
                    : 'bg-white text-slate-800 hover:bg-[#e6f4f1] hover:text-emerald-950'
                }`}
              >
                <span>{method.code}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Method Panel */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 max-w-4xl">
          <div className="mb-6">
            <h3 className="font-editorial text-xl sm:text-2xl md:text-3xl font-medium text-slate-900 leading-tight">
              {selectedMethod.name}
            </h3>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
            {selectedMethod.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {selectedMethod.bullets.map((b, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-base text-slate-800">
                <Check className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-emerald-900 hover:bg-emerald-950 transition-colors cursor-pointer"
            >
              <span>Подобрать метод на консультации</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
