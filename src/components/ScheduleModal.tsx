import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { OFFICE_DATA, PRACTICE_AREAS } from '../data/content';
import { X, ArrowRight, Calendar, Clock, MapPin, Video } from 'lucide-react';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const [modalidade, setModalidade] = useState<'presencial' | 'digital'>('presencial');
  const [area, setArea] = useState<string>(PRACTICE_AREAS[0].title);
  const [nome, setNome] = useState('');
  const [periodo, setPeriodo] = useState('Manhã (09h - 12h)');

  if (!isOpen) return null;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const mensagem = `Olá! Gostaria de agendar um atendimento na DFC Advocacia.%0A%0A*Nome:* ${encodeURIComponent(nome || 'Cliente')}%0A*Modalidade:* ${modalidade === 'presencial' ? 'Presencial (Minaslândia, BH)' : 'Digital (Online/Videoconferência)'}%0A*Área:* ${encodeURIComponent(area)}%0A*Preferência de Horário:* ${encodeURIComponent(periodo)}`;
    const url = `https://wa.me/${OFFICE_DATA.phoneRaw}?text=${mensagem}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="schedule-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#0A0A0A] text-white border border-neutral-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Fechar formulário de agendamento"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-1">
            AGENDAMENTO PROGRAMADO
          </span>
          <h3 id="schedule-modal-title" className="text-2xl font-display font-bold text-white tracking-tight">
            Agendar Atendimento
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-normal">
            Escolha o formato e horário de sua preferência para atendimento exclusivo com a equipe DFC Advocacia.
          </p>
        </div>

        <form onSubmit={handleConfirm} className="space-y-4">
          {/* Modalidade Toggle */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
              Modalidade de Atendimento
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setModalidade('presencial')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-xs font-semibold transition-all ${
                  modalidade === 'presencial'
                    ? 'border-white bg-white text-black'
                    : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Presencial em BH</span>
              </button>

              <button
                type="button"
                onClick={() => setModalidade('digital')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-xs font-semibold transition-all ${
                  modalidade === 'digital'
                    ? 'border-white bg-white text-black'
                    : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>Atendimento Digital</span>
              </button>
            </div>
          </div>

          {/* Nome */}
          <div>
            <label htmlFor="schedule-name" className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
              Seu Nome Completo
            </label>
            <input
              id="schedule-name"
              type="text"
              required
              placeholder="Ex: Carlos Eduardo Silveira"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Área de Atuação */}
          <div>
            <label htmlFor="schedule-area" className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
              Área de Interesse
            </label>
            <select
              id="schedule-area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
            >
              {PRACTICE_AREAS.map((p) => (
                <option key={p.id} value={p.title} className="bg-[#0A0A0A]">
                  {p.title}
                </option>
              ))}
              <option value="Outro assunto jurídico" className="bg-[#0A0A0A]">
                Outro assunto jurídico / Orientação geral
              </option>
            </select>
          </div>

          {/* Período de preferência */}
          <div>
            <label htmlFor="schedule-period" className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
              Preferência de Turno
            </label>
            <select
              id="schedule-period"
              value={periodo}
              onChange={(e) => setPeriodo(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
            >
              <option value="Manhã (09h - 12h)" className="bg-[#0A0A0A]">Manhã (09h - 12h)</option>
              <option value="Tarde (13h - 18h)" className="bg-[#0A0A0A]">Tarde (13h - 18h)</option>
              <option value="Horário flexível" className="bg-[#0A0A0A]">Horário flexível / Conforme agenda</option>
            </select>
          </div>

          <div className="pt-4 border-t border-neutral-900 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-full border border-neutral-800 text-xs font-semibold text-neutral-400 hover:text-white"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider font-display hover:bg-neutral-200 transition-colors"
            >
              <span>Confirmar no WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};
