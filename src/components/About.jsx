import React from 'react';
import { Shield, Sparkles, HeartHandshake, Compass, BookCheck, CheckCircle2 } from 'lucide-react';
import { PSYCHOLOGIST } from '../data/content';

export default function About({ onOpenBooking }) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-t border-emerald-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
              Обо мне
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              «Я не учу вас жить, а помогаю вернуть контакт с собой и своими ценностями»
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed font-normal">
              <p>
                Меня зовут <strong className="text-slate-900 font-semibold">Мария Морозова</strong>. Я клинический психолог, КПТ-терапевт и выпускница факультета психологии <strong className="text-slate-900 font-semibold">МГУ им. М.В. Ломоносова</strong> (специалитет, 2013 год).
              </p>
              <p>
                Я не только по учебникам знаю, что такое тревожные расстройства, паника, послеродовая апатия и выгорание. Я проживала этот путь сама и видела его у близких людей. Это научило меня главному правилу терапии: <span className="text-emerald-900 font-medium">никакие изменения не происходят через насилие над собой, стыд или критику</span>.
              </p>
              <p>
                Мой стиль работы — мягкий, бережный и безоценочный. Я не даю готовых советов и не навешиваю ярлыков. Вместо этого мы создаем безопасное пространство, в котором вы сможете исследовать свои сложности с любопытством и состраданием, а не со страхом.
              </p>
              <p>
                Нашим ориентиром всегда служат ваши истинные ценности — то, что по-настоящему важно для вас. Как компас Джека Воробья, который показывает не на север, а на то, чего вы искренне хотите.
              </p>
            </div>

            {/* 4 Pillars of Professionalism */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">Личная терапия</h4>
                  <p className="text-xs text-slate-500">Регулярно работаю со своим терапевтом, чтобы сохранять чистоту восприятия.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <BookCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">Супервизии АКПП</h4>
                  <p className="text-xs text-slate-500">Сложные клиентские кейсы разбираю с опытными супервизорами ассоциации.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">Безоценочность</h4>
                  <p className="text-xs text-slate-500">Здесь можно быть любым: уставшим, злым, растерянным, неидеальным.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">Медицинская ориентация</h4>
                  <p className="text-xs text-slate-500">Глубокое понимание психиатрии и подготовка к официальной аккредитации.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 transition-all shadow-sm"
              >
                <span>Познакомиться на консультации</span>
              </button>
            </div>
          </div>

          {/* Right Column: Close-up Portrait & Quotes */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Close-up Portrait Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-emerald-100 aspect-[4/5] bg-emerald-900 group">
              <img
                src="./assets/mariya-morozova-portrait.jpg"
                alt="Мария Морозова"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-sm font-bold">«В безопасном пространстве можно быть собой»</div>
                <div className="text-xs text-emerald-200">Мария Морозова • Доказательная практика</div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-950 text-white relative shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5 text-emerald-300" />
                </div>

                <blockquote className="text-base sm:text-lg font-medium leading-snug mb-5 text-emerald-50">
                  «Человеку нужен человек. Нейросети или книги могут дать теорию, но исцеление и обретение внутренней устойчивости всегда происходят через живой контакт, принятие и бережное присутствие рядом».
                </blockquote>

                <div className="pt-4 border-t border-emerald-800/60 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm text-white">Мария Морозова</div>
                    <div className="text-xs text-emerald-300">Канал «С психикой вальсируем 🧠»</div>
                  </div>

                  <a
                    href={PSYCHOLOGIST.contacts.channel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 text-xs font-bold transition-all"
                  >
                    Читать блог
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
