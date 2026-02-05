'use client';

import { useState } from 'react';

export default function BuySection() {
  const [isChecked, setIsChecked] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyClick = () => {
    if (!isChecked) {
      setShowError(true);
      return;
    }

    setIsLoading(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="checkbox"
            id="privacy-policy"
            checked={isChecked}
            onChange={(e) => {
              setIsChecked(e.target.checked);
              if (e.target.checked) setShowError(false);
            }}
            className="absolute inset-0 w-8 h-8 opacity-0 z-10 cursor-pointer"
          />

          <div
            className={`relative w-8 h-8 ${showError ? 'ring-2 ring-red-500 rounded' : ''}`}
          >
            <div className="absolute inset-0 border rounded-[4px] rounded-[4px]" />
            <div
              className={`border rounded-[4px] box-border ${isChecked ? 'border-[#FDB056]' : 'border-transparent'}`}
            />

            {isChecked && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[#FDB056]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        <label
          htmlFor="privacy-policy"
          className="font-montserrat font-normal text-sm sm:text-base leading-relaxed text-[#CDCDCD] flex items-start gap-3 cursor-pointer"
        >

          <span className="flex-1">
            Я согласен с{' '}
            <a
              href="/offer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CDCDCD] underline hover:text-white transition-colors"
            >
              офертой рекуррентных платежей
            </a>{' '}
            и{' '}
            <a
              href="/privacy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CDCDCD] underline hover:text-white transition-colors"
            >
              Политикой конфиденциальности
            </a>
          </span>
        </label>
      </div>

      {showError && (
        <div className="text-red-500 text-sm animate-pulse">
          ✓ Необходимо согласие для продолжения
        </div>
      )}

      <button
        onClick={handleBuyClick}
        disabled={isLoading}
        className={`flex justify-center items-center w-full max-w-[352px] h-[66px] bg-[#FDB056] rounded-[20px] text-black font-montserrat font-bold text-xl ${isLoading ? '' : 'animate-pulse'} hover:animate-none transition-all`}
      >
        {isLoading ? 'Обработка...' : 'Купить'}
      </button>
    </div>
  );
}
