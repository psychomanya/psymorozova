import React, { useState } from 'react';
import { ExternalLink, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { DIAGNOSTIC_TESTS } from '../data/content';

const SYMPTOM_OPTIONS = [
  {
    id: 'anxiety',
    label: 'Тревога и навязчивые мысли',
    method: 'Когнитивно-поведенческая терапия (КПТ) и ACT',
    timeline: 'Первые изменения заметны через 3–5 сессий',
    description: 'Мы выявим автоматические мысли-триггеры, освоим протоколы заземления и вернем управляемость вашей повседневной жизни.',
    tgMessage: 'Здравствуйте, Мария! Хочу проконсультироваться по поводу тревоги и беспокойных мыслей.'
  },
  {
    id: 'fatigue',
    label: 'Опустошение и апатия',
    method: 'Поведенческая активация и ACT',
    timeline: 'Мягкий пошаговый план восстановления ресурса',
    description: 'Без рывков и насилия над собой исследуем причины упадка сил и выстроим микро-действия для возврата устойчивой энергии.',
    tgMessage: 'Здравствуйте, Мария! Меня беспокоит упадок сил и апатия. Хочу записаться на консультацию.'
  },
  {
    id: 'sleep',
    label: 'Бессонница и сон',
    method: 'КПТ инсомнии (CBT-I)',
    timeline: 'Клинический золотой стандарт за 4–8 недель',
    description: 'Снимем страх перед ночью, настроим циркадные ритмы и цикличность сна без использования снотворных препаратов.',
    tgMessage: 'Здравствуйте, Мария! Хочу обратиться к вам с бессонницей и сложностями со сном.'
  },
  {
    id: 'critic',
    label: 'Внутренний критик и вина',
    method: 'Терапия, сфокусированная на сострадании (CFT)',
    timeline: 'Формирование внутренней заботливой опоры',
    description: 'Перестроим привычку наказывать себя за промахи, трансформируя токсичный стыд в теплое и поддерживающее отношение к себе.',
    tgMessage: 'Здравствуйте, Мария! Чувствую постоянную самокритику и вину, хочу проработать это на консультации.'
  }
];

export default function Tests() {
  const [selectedSymptom, setSelectedSymptom] = useState(SYMPTOM_OPTIONS[0]);

  return (
    <section id="tests" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight mb-3">
            Самодиагностика и тесты
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Интерактивный маршрут помощи и валидированные клинические шкалы для быстрой оценки эмоционального состояния.
          </p>
        </div>

        {/* The Live Thing: Interactive Symptom Navigator */}
        <div className="bg-[#f3f5f3] rounded-3xl p-8 sm:p-10 mb-16">
          <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-slate-900 mb-6">
            С чем вы столкнулись прямо сейчас?
          </h3>

          {/* Selector pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {SYMPTOM_OPTIONS.map((opt) => {
              const isSelected = selectedSymptom.id === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedSymptom(opt)}
                  className={`px-5 py-3 rounded-full text-sm font-medium transition-colors cursor-pointer text-left ${
                    isSelected
                      ? 'bg-emerald-900 text-white'
                      : 'bg-white text-slate-800 hover:bg-[#e6f4f1] hover:text-emerald-950'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          {/* Dynamic Result Panel */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="text-sm font-medium text-emerald-900">
                Рекомендуемый подход: <span className="font-semibold text-slate-900">{selectedSymptom.method}</span>
              </div>
              <p className="text-base text-slate-700 leading-relaxed">
                {selectedSymptom.description}
              </p>
              <div className="text-sm text-slate-500">
                {selectedSymptom.timeline}
              </div>
            </div>

            <div className="shrink-0">
              <a
                href={`tg://resolve?domain=flymemary&text=${encodeURIComponent(selectedSymptom.tgMessage)}`}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-white bg-emerald-900 hover:bg-emerald-950 transition-colors"
              >
                <span>Обсудить этот запрос</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Clinical Tests List */}
        <div className="mb-6">
          <h3 className="font-editorial text-2xl font-medium text-slate-900 mb-2">
            Клинические опросники онлайн
          </h3>
          <p className="text-base text-slate-600 mb-8">
            Шкалы первичной оценки с мгновенным автоматическим подсчетом результатов.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {DIAGNOSTIC_TESTS.map((test) => (
            <div
              key={test.id}
              className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-1.5">
                  <h4 className="font-editorial text-xl font-medium text-slate-900">
                    {test.title}
                  </h4>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full bg-[#f3f5f3] text-emerald-950">
                    {test.time}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {test.desc}
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href={test.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-emerald-950 bg-[#e6f4f1] hover:bg-[#d8ece8] transition-colors"
                >
                  <span>Пройти тест</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="flex items-center gap-2.5 text-sm text-slate-600 pt-4">
          <ShieldCheck className="w-5 h-5 text-emerald-800 shrink-0" />
          <span>Анонимно и без регистрации. Вы можете отправить свой результат перед первой встречей.</span>
        </div>

      </div>
    </section>
  );
}
