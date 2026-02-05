// components/PricingCard.jsx
'use client';

export interface Tariff {
  id: string;
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  text: string;
}

export interface PricingCardProps {
  tariff: Tariff;
  isSelected: boolean;
  showDiscount: boolean;
  onSelect: () => void;
}

const PricingCard = ({
  tariff,
  isSelected,
  showDiscount,
  onSelect,
}: PricingCardProps) => {
  const isBest = tariff.is_best;
  const discountPercent = Math.round(
    ((tariff.full_price - tariff.price) / tariff.full_price) * 100
  );

  return (
    <div
      className={`relative flex flex-col rounded-2xl  bg-[#313637] border-2 border-[#484D4E] rounded-[40px] overflow-hidden transition-all duration-300
      ${
        isBest
          ? 'border-[#FDB056] bg-gradient-to-b from-[#2D3233] to-[#1a1d1e] lg:col-span-2 lg:row-span-2'
          : 'border-[#484D4E] bg-[#2D3233] hover:border-gray-500'
      }
      ${isSelected ? 'ring-2 ring-[#81FE95]' : ''}
    `}
    >
      {/* ХИТ Badge for best tariff */}
      {isBest && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-[#FF8A00] to-[#FF5E00] text-white px-6 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg">
            ХИТ!
          </div>
        </div>
      )}

      {/* Discount Badge */}
      {showDiscount && discountPercent > 0 && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-[#81FE95] text-[#121212] px-3 py-1 rounded-full font-bold text-sm shadow">
            -{discountPercent}%
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow" onClick={onSelect}>
        {/* Period */}
        <h3
          className={`font-bold mb-2 ${isBest ? 'text-2xl' : 'text-xl'} text-white`}
        >
          {tariff.period}
        </h3>

        {/* Prices */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2 flex-wrap">
            {/* Discounted Price */}
            <span
              className={`font-bold ${isBest ? 'text-4xl' : 'text-3xl'} text-white`}
            >
              {showDiscount ? tariff.price : tariff.full_price} ₽
            </span>

            {/* Strikethrough Original Price */}
            {showDiscount && discountPercent > 0 && (
              <span className="text-lg text-gray-400 line-through">
                {tariff.full_price} ₽
              </span>
            )}
          </div>
        </div>

        {/* Description Text */}
        <p className="text-gray-300 mb-6 flex-grow">{tariff.text}</p>

        {/* Select Button */}
        <button
          className={`
          w-full py-3.5 rounded-xl font-semibold transition-colors duration-200 mt-auto
          ${
            isSelected
              ? 'bg-[#81FE95] text-[#121212]'
              : 'bg-gradient-to-r from-[#FF8A00] to-[#FF5E00] text-white hover:opacity-90'
          }
        `}
        >
          {isSelected ? '✓ Выбрано' : 'Купить'}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
