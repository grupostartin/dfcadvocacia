import React from 'react';
import { OFFICE_DATA } from '../data/content';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#0A0A0A] text-white border border-neutral-800 rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col relative shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block">
                CONFORMIDADE LGPD (LEI Nº 13.709/2018)
              </span>
              <h3 id="privacy-modal-title" className="text-xl font-display font-bold text-white tracking-tight">
                Aviso de Privacidade e Tratamento de Dados
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Fechar política de privacidade"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-neutral-300 text-xs sm:text-sm leading-relaxed font-normal">
          <p>
            A <strong>DFC Advocacia</strong> valoriza a segurança, privacidade e sigilo profissional inerentes à prática jurídica e às relações com seus clientes e consulentes.
          </p>

          <div>
            <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-1 font-mono">
              1. Finalidade do Tratamento de Dados
            </h4>
            <p>
              Os dados fornecidos espontaneamente por meio de formulários ou canais de contato (nome, telefone e informações preliminares sobre a demanda) destinam-se exclusivamente à identificação do usuário, retorno de contato, agendamento de consultas e esclarecimento de dúvidas sobre serviços jurídicos.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-1 font-mono">
              2. Sigilo Profissional e Segurança
            </h4>
            <p>
              Todas as comunicações e informações prestadas são resguardadas pelo sigilo profissional previsto no Estatuto da Advocacia e no Código de Ética e Disciplina da OAB. Não comercializamos nem compartilhamos quaisquer dados com terceiros não autorizados.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-1 font-mono">
              3. Direitos do Titular de Dados
            </h4>
            <p>
              Em observância à LGPD, o titular poderá requerer a qualquer momento a confirmação de existência de tratamento, correção de dados incompletos ou eliminação de dados pessoais desnecessários, mediante contato direto com o escritório.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-1 font-mono">
              4. Controlador e Contato
            </h4>
            <p>
              {OFFICE_DATA.fullName} • {OFFICE_DATA.address.fullFormatted} • Telefone comercial: {OFFICE_DATA.phoneFormatted}.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-neutral-800 flex justify-end bg-neutral-950">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider font-display hover:bg-neutral-200 transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
