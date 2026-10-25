import React, { useEffect } from 'react';
import { X, Award, ExternalLink, Clock } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-emerald-100 z-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 shadow-md flex items-center justify-center transition-all cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Document Image */}
        <div className="md:w-3/5 bg-slate-100 flex items-center justify-center p-4 sm:p-6 overflow-auto max-h-[50vh] md:max-h-[90vh]">
          <img
            src={diploma.image}
            alt={diploma.title}
            className="max-w-full max-h-full object-contain rounded-xl shadow-md border border-slate-200"
          />
        </div>

        {/* Right Side: Details & Verification */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-4">
              <Award className="w-3.5 h-3.5 text-emerald-700" />
              <span>{diploma.badge}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-snug">
              {diploma.title}
            </h3>

            <div className="text-sm font-semibold text-emerald-800 mb-4">
              {diploma.issuer}
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500 mb-6 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>{diploma.hours}</span>
              </div>
              <div>•</div>
              <div>Выдан: {diploma.year} г.</div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {diploma.details}
            </p>
          </div>

          <div className="pt-6 border-t border-slate-100 mt-6">
            <div className="text-[11px] text-slate-400">
              Официальный документ государственного / установленного образца с государственной лицензией.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
