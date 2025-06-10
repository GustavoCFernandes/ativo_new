'use client';
import React from 'react';

export default function FullscreenLoader() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <svg
          className="animate-spin h-10 w-10 text-white mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M12 2a10 10 0 0110 10h-4a6 6 0 00-6-6V2z"
          />
        </svg>
        <span className="text-white text-lg font-semibold">Enviando...</span>
      </div>
    </div>
  );
}
