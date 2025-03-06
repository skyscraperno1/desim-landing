import { SwiperLeft } from "../icons/SwiperLeft";
import { SwiperRight } from "../icons/SwiperRight";
import { useState } from "react";
import SwiperBg from "../assets/imgs/swiper-bg.png";

export const Swiper = ({ cards }) => {
  const [current, setCurrent] = useState(0);

  const totalPages = Math.ceil(cards.length / 3);

  const handlePrev = () => {
    setCurrent((current) => (current <= 0 ? totalPages - 1 : current - 1));
  };

  const handleNext = () => {
    setCurrent((current) => (current >= totalPages - 1 ? 0 : current + 1));
  };

  return (
    <div className="w-full flex flex-col items-center max-w-[1040px] relative">
      <img src={SwiperBg} alt="swiper-bg" className="absolute -top-[140px] right-0 w-[161px] h-[278px] select-none" />
      <div className="flex items-center w-full">
        <button 
          onClick={handlePrev} 
          className={`cursor-pointer mr-[5px] hover:opacity-80 ${
            current === 0 ? 'opacity-30 pointer-events-none' : ''
          }`}
        >
          <SwiperLeft />
        </button>
        <div className="w-full overflow-hidden px-[10px] py-[10px]">
          <div 
            className="flex gap-[15px] transition-transform duration-300"
            style={{ transform: `translateX(calc(-${current * 100}% - ${current * 20}px))` }}
          >
            {cards.map((card) => (
              <div 
                key={card.id}
                className="select-none flex-shrink-0 w-[300px] h-[375px] bg-white rounded-[20px] shadow-[10px_10px_3px_0px_#0000001A] p-6"
              >
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-[200px] h-[200px] object-cover mx-auto"
                />
                <h3 className="text-2xl leading-8 mt-4">{card.title}</h3>
                <p className="text-[15px] leading-8">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={handleNext} 
          className={`cursor-pointer ml-[5px] hover:opacity-80 ${
            current === totalPages - 1 ? 'opacity-30 pointer-events-none' : ''
          }`}
        >
          <SwiperRight />
        </button>
      </div>

      <div className="flex gap-[28px] mt-[35px]">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            className={`w-[18.66px] h-[18.66px] rounded-full cursor-pointer select-none ${
              current === index 
                ? 'bg-[#004B83]' 
                : 'bg-[#004B83] opacity-30'
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};
