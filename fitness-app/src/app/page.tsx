import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <main className="pt-[103px] w-full">
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 lg:py-16">
          <h1 className="font-montserrat mb-24 font-bold text-3xl md:text-4xl lg:text-5xl xl:text-[40px] leading-[110%] tracking-[0.05em] text-white">
            Выбери подходящий для себя{' '}
            <span className="text-[#FDB056]">тариф</span>
          </h1>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <Image
                src="/img.png"
                alt="Описание изображения"
                width={500}
                height={300}
                className="w-full h-auto max-w-[500px] rounded-lg mx-auto"
              />
            </div>
            <div className="flex flex-col">
              {/* <PricesGrid /> */}

              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-start p-[18px_20px] gap-2  w-full max-w-[499px] h-auto md:h-[78px] left-1/2 -translate-x-1/2 md:left-[820px] md:translate-x-0 top-[866px] bg-[#2D3233] rounded-[20px] mx-4 md:mx-0">
                  <svg
                    width="3"
                    height="18"
                    viewBox="0 0 3 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.377523 11.6437C0.386898 12.2578 0.888461 12.75 1.50252 12.75C2.11659 12.75 2.61815 12.2531 2.62752 11.6437L3.00252 1.5375C3.02596 1.15313 2.88534 0.778125 2.61346 0.4875C2.32284 0.178125 1.91971 0 1.50252 0C1.08534 0 0.682211 0.178125 0.391586 0.4875C0.119711 0.778125 -0.0209143 1.15313 0.00252325 1.5375L0.377523 11.6437Z"
                      fill="#FDB056"
                    />
                    <path
                      d="M1.5 18C2.32843 18 3 17.3284 3 16.5C3 15.6716 2.32843 15 1.5 15C0.671573 15 0 15.6716 0 16.5C0 17.3284 0.671573 18 1.5 18Z"
                      fill="#FDB056"
                    />
                  </svg>

                  <p className="w-full max-w-[427px] h-auto font-montserrat font-normal text-sm sm:text-base leading-[130%] text-white  px-4 sm:px-0 mx-auto">
                    Следуя плану на 3 месяца и более, люди получают в 2 раза
                    лучший результат, чем за 1 месяц
                  </p>
                </div>

                <div className="flex flex-row items-center p-0 gap-3 w-[649px] h-[36px]">
                  <input
                    type="checkbox"
                    className="w-[32px] h-[32px] flex-none order-0 flex-grow-0 cursor-pointer rounded border-2 border-gray-400 checked:border-[#FDB056] checked:bg-[#FDB056] focus:ring-2 focus:ring-[#FDB056]/50 transition-all duration-200"
                  />
                  <p className="w-[605px] h-[36px] font-montserrat font-normal text-base leading-[110%] text-[#CDCDCD] flex items-end flex-none order-1 flex-grow-0">
                    Я согласен с офертой рекуррентных платежей и Политикой
                    конфиденциальности{' '}
                  </p>
                </div>
                <button className="flex flex-row justify-center items-center py-5 px-[60px] gap-2.5 w-[352px] h-[66px]  bg-[#FDB056] rounded-[20px]">
                  <span className="font-montserrat font-bold text-xl text-white">
                    Купить
                  </span>
                </button>

                <p className="w-full max-w-[748px] md:w-[748px] h-auto md:h-[68px] left-1/2 -translate-x-1/2 md:left-[820px] md:translate-x-0 top-[1106px] font-montserrat font-normal text-xs sm:text-sm leading-[140%] md:leading-[120%] text-[#9B9B9B] px-4 md:px-0 mx-auto">
                  Нажимая кнопку «Купить», Пользователь соглашается на разовое
                  списание денежных средств для получения пожизненного доступа к
                  приложению. Пользователь соглашается, что данные
                  кредитной/дебетовой карты будут сохранены для осуществления
                  покупок дополнительных услуг сервиса в случае желания
                  пользователя.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start p-5 gap-[30px]  border border-[#484D4E] rounded-[30px]">
            <div className="box-border flex flex-row justify-center items-center py-4 px-[30px] gap-2.5 w-[461px] h-[68px] bg-[#2D3233] border border-[#81FE95] rounded-[30px] flex-none order-0 flex-grow-0">
              <p className="w-[401px] h-[34px] font-montserrat font-medium text-[28px] leading-[120%] text-[#81FE95] flex-none order-0 flex-grow-0">
                гарантия возврата 30 дней
              </p>
            </div>
            <p className="w-full max-w-[1176px] h-auto font-montserrat font-normal text-base sm:text-lg md:text-xl lg:text-2xl leading-[140%] md:leading-[130%] text-[#DCDCDC] text-left sm:px-6 md:px-0 ">
              Мы уверены, что наш план сработает для тебя и ты увидишь видимые
              результаты уже через 4 недели! Мы даже готовы полностью вернуть
              твои деньги в течение 30 дней с момента покупки, если ты не
              получишь видимых результатов.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
