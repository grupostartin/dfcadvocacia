import React from 'react';
import { createPortal } from 'react-dom';
import { PracticeArea, OFFICE_DATA } from '../data/content';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface PracticeAreaModalProps {
  area: PracticeArea | null;
  onClose: () => void;
}

export const PracticeAreaModal: React.FC<PracticeAreaModalProps> = ({ area, onClose }) => {
  if (!area) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="practice-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#0A0A0A] text-white border border-neutral-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Fechar janela de detalhes"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase block mb-1">
            {area.number} ÁREA DE ATUAÇÃO
          </span>
          <h3 id="practice-modal-title" className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            {area.title}
          </h3>
        </div>

        {/* Overview & Description */}
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
          {area.description}
        </p>

        {/* Scope Checklist */}
        <div className="bg-neutral-900/80 rounded-xl p-5 border border-neutral-800/80 mb-6 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
            ESCOPO E ATIVIDADES ATENDIDAS
          </span>
          {area.keyPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
              <span className="text-xs sm:text-sm text-neutral-300 leading-snug">
                {point}
              </span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-neutral-900">
          <span className="text-xs text-neutral-400 text-center sm:text-left">
            Atendimento presencial em BH ou 100% online.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-full border border-neutral-800 text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors w-full sm:w-auto"
            >
              Fechar
            </button>
            <a
              href={OFFICE_DATA.getWhatsAppUrlForArea(area.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0A0A0A] hover:bg-neutral-200 text-xs font-bold tracking-tight transition-all duration-200 w-full sm:w-auto"
            >
              <span>Consultar no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
