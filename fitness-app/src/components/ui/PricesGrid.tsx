// components/PricingGrid.tsx
'use client';
import { useState, useEffect } from 'react';
import PricingCard from './PricingCard';
// import { Tariff } from '@/types/tariff';

export interface Tariff {
  id: string;
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  text: string;
}

const PricingGrid = () => {
  const [tariffs, setTariffs] = useState<Tariff[]>([]);
  const [selectedTariff, setSelectedTariff] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showDiscount, setShowDiscount] = useState<boolean>(true);

  // Fetch data from your API
  useEffect(() => {
    const fetchTariffs = async () => {
      setIsLoading(true);
      try {
        // Uncomment this for real API call
        // const response = await fetch('https://t-core.fit-hub.pro/Test/GetTariffs');
        // const data: Tariff[] = await response.json();
        // setTariffs(data);

        // Mock data
        const mockData: Tariff[] = [
          {
            id: '1',
            period: 'Навсегда',
            price: 5990,
            full_price: 18990,
            is_best: true,
            text: 'Для тех, кто хочет всегда быть в форме',
          },
          {
            id: '2',
            period: '3 месяца',
            price: 3990,
            full_price: 11970,
            is_best: false,
            text: 'Привести тело в порядок',
          },
          {
            id: '3',
            period: '1 месяц',
            price: 1690,
            full_price: 1690,
            is_best: false,
            text: 'Чтобы получить первые результаты',
          },
          {
            id: '4',
            period: '1 неделя',
            price: 149,
            full_price: 999,
            is_best: false,
            text: 'Чтобы просто начать',
          },
        ];
        setTariffs(mockData);
        const best = mockData.find((t) => t.is_best);
        if (best) setSelectedTariff(best.id);
      } catch (error) {
        console.error('Error loading tariffs:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTariffs();
  }, []);

  const handleSelectTariff = (id: string) => {
    setSelectedTariff(id);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-400">Загрузка тарифов...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* The grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {tariffs.map((tariff: Tariff) => (
          <PricingCard
            key={tariff.id}
            tariff={tariff}
            isSelected={selectedTariff === tariff.id}
            showDiscount={showDiscount}
            onSelect={() => handleSelectTariff(tariff.id)}
          />
        ))}
      </div>

    </div>
  );
};

export default PricingGrid;
