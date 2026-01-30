'use client';

import Timer from '../../ui/Timer';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex flex-col items-center py-2 gap-1 absolute w-full h-[103px] left-0 top-0 bg-[#1D5B43]">
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="flex flex-col items-center justify-between">
            <div className="flex items-center">
              <div className="w-[447px] h-[31px] font-montserrat font-semibold text-2xl leading-[130%] text-center text-white tracking-[-0.01em] flex-none order-0 flex-grow-0">
                Успейте открыть пробную неделю
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Timer />

              {/* Декоративный плюс как в дизайне */}
              {/* <div className="flex items-center"> */}
                {/* <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF2E00] flex items-center justify-center"> */}
                  {/* <span className="text-white font-bold text-lg">+</span> */}
                {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
