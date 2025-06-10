import React from "react";

type AlertAtivoProps = {
  status: string;
  onClose: () => void;
};

export default function AlertAtivo({ status, onClose }: AlertAtivoProps) {
  return (
    <div
      className="fixed top-6 left-1/2 z-50 flex items-center justify-between gap-4 px-6 py-4 rounded-lg shadow-2xl border border-green-400 bg-gradient-to-r from-green-200 via-green-100 to-green-50 text-green-900 font-bold text-center animate-slide-fade-in"
      style={{ minWidth: 320, maxWidth: 480, boxShadow: '0 8px 32px 0 rgba(34,197,94,0.15)', transform: 'translateX(-50%)' }}
    >
      <div className="flex items-center gap-2">
        <svg className="w-6 h-6 text-green-600 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span>{status}</span>
      </div>
      <button
        className="ml-4 text-green-700 hover:text-green-900 text-2xl font-bold transition-colors duration-200"
        onClick={onClose}
        type="button"
        aria-label="Fechar"
      >
        ×
      </button>
    </div>
  );
}
