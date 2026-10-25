import React, { useState } from 'react';
import { FAQS } from '../data/content';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight mb-3">
            Ответы на частые вопросы
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            То, что чаще всего волнует перед первой консультацией с психологом.
          </p>
        </div>

        {/* Editorial FAQ Accordion — Clean lines, zero boxed cards */}
        <div className="space-y-6">
          {FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="pb-6"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-center justify-between gap-6 cursor-pointer py-2"
                >
                  <span className="font-editorial text-base sm:text-xl font-medium text-slate-900 leading-snug">
                    {item.q}
                  </span>
                  <span className="text-2xl font-light text-slate-400 shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
