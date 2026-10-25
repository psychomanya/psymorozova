import React, { useState } from 'react';
import { Brain, Compass, Heart, Moon, CheckCircle, ArrowRight } from 'lucide-react';
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
  const Icon = methodIcons[selectedMethod.code] || Brain;

  return (
    <section id="methods" className="py-16 sm:py-24 bg-white border-y border-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
            Методы
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Доказательная база
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Только научно проверенные подходы с подтвержденной эффективностью.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {METHODS.map((method) => {
            const TabIcon = methodIcons[method.code] || Brain;
            const isActive = activeTab === method.code;
            return (
              <button
                key={method.code}
                onClick={() => setActiveTab(method.code)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:bg-emerald-50 border border-slate-200/70'
                }`}
              >
                <TabIcon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-200' : 'text-emerald-700'}`} />
                <span>{method.code}</span>
              </button>
            );
          })}
        </div>

        {/* Compact Method Card */}
        <div className="bg-[#FBFDFB] rounded-2xl p-6 sm:p-8 border border-emerald-100 max-w-3xl mx-auto shadow-xs">
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-emerald-800" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                {selectedMethod.code}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                {selectedMethod.name}
              </h3>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed mb-5">
            {selectedMethod.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-4 border-t border-slate-100">
            {selectedMethod.bullets.map((b, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
