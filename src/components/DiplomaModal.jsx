import React, { useEffect } from 'react';
import { X, Award, Clock } from 'lucide-react';

export default function DiplomaModal({ diploma, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!diploma) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row z-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white text-slate-700 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Document Image */}
        <div className="md:w-3/5 bg-slate-100 flex items-center justify-center p-4 sm:p-6 overflow-auto max-h-[50vh] md:max-h-[90vh]">
          <img
            src={diploma.image}
            alt={diploma.title}
            className="max-w-full max-h-full object-contain rounded-xl"
          />
        </div>

        {/* Right Side: Details */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e6f4f1] text-emerald-950 text-sm font-semibold mb-4">
              <Award className="w-4 h-4 text-emerald-800" />
              <span>{diploma.badge}</span>
            </div>

            <h3 className="font-editorial text-xl sm:text-2xl font-medium text-slate-900 mb-2 leading-snug">
              {diploma.title}
            </h3>

            <div className="text-sm font-medium text-emerald-900 mb-4">
              {diploma.issuer}
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-800" />
                <span>{diploma.hours}</span>
              </div>
              <div>•</div>
              <div>Выдан: {diploma.year} г.</div>
            </div>

            <p className="text-base text-slate-700 leading-relaxed">
              {diploma.details}
            </p>
          </div>

          <div className="mt-8 pt-4">
            <div className="text-sm text-slate-500">
              Официальный документ государственного образца с действующей лицензией.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
