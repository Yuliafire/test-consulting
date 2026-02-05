'use client';
import { useTimer } from '../../hooks/useTime';

export default function Timer() {
  const { minutes, seconds } = useTimer(120);

  return (
    <div className="flex items-center p-0 gap-1.5 w-[113px] h-[52px] flex-none order-1 flex-grow-0">
      <div className="w-[43px] h-[44px] font-raleway font-bold text-[40px] leading-[110%] uppercase tracking-[-0.01em] text-[#FFBB00] text-center flex-none order-0 flex-grow-0">
        {minutes}
      </div>
      <div className="font-raleway font-bold text-[40px] leading-[110%] text-[#FFBB00] mx-[-2px]">
        :
      </div>
      <div className="w-[43px] h-[44px] font-raleway font-bold text-[40px] leading-[110%] uppercase tracking-[-0.01em] text-[#FFBB00] text-center flex-none order-2 flex-grow-0">
        {seconds}
      </div>
    </div>
  );
}
