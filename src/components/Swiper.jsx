import { SwiperLeft } from "../icons/SwiperLeft";
import { SwiperRight } from "../icons/SwiperRight";
import { useState, useEffect, useRef } from "react";
import SwiperBg from "../assets/imgs/swiper-bg.png";

export const Swiper = ({ cards }) => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);

  // 检测是否为移动端
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 960);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 根据设备类型计算总页数
  const cardsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handlePrev = () => {
    setCurrent((current) => (current <= 0 ? totalPages - 1 : current - 1));
  };

  const handleNext = () => {
    setCurrent((current) => (current >= totalPages - 1 ? 0 : current + 1));
  };

  // 处理触摸开始
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
  };

  // 处理触摸移动
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX;
    const walk = (startX - x) * 1.5; // 滑动距离乘以系数

    if (Math.abs(walk) > 50) { // 滑动距离超过50px时才触发翻页
      if (walk > 0 && current < totalPages - 1) {
        handleNext();
      } else if (walk < 0 && current > 0) {
        handlePrev();
      }
      setIsDragging(false);
    }
  };

  // 处理触摸结束
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // 处理鼠标按下
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  // 处理鼠标移动
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (startX - x) * 1.5;

    if (Math.abs(walk) > 50) {
      if (walk > 0 && current < totalPages - 1) {
        handleNext();
      } else if (walk < 0 && current > 0) {
        handlePrev();
      }
      setIsDragging(false);
    }
  };

  // 处理鼠标松开
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 处理鼠标离开容器
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center lg:max-w-[1040px] relative">
      <img src={SwiperBg} alt="swiper-bg" className="lg:block hidden absolute -top-[140px] right-0 w-[161px] h-[278px] select-none" />
      <div className="flex items-center w-full">
        <button 
          onClick={handlePrev} 
          className={`cursor-pointer lg:mr-[5px] mr-[2px] hover:opacity-80 ${
            current === 0 ? 'opacity-30 pointer-events-none' : ''
          }`}
        >
          <SwiperLeft />
        </button>
        <div 
          ref={containerRef}
          className="w-full overflow-hidden px-[10px] py-[10px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className={`flex gap-[15px] transition-transform ${isDragging ? 'duration-0' : 'duration-300'}`}
            style={{ 
              transform: `translateX(calc(-${current * 100}% - ${current * (isMobile ? 15 : 20)}px))`,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
          >
            {cards.map((card) => (
              <div 
                key={card.id}
                className="select-none flex-shrink-0 w-full lg:w-[300px] lg:h-[375px] h-[300px] bg-white rounded-[20px] shadow-[10px_10px_3px_0px_#0000001A] p-6 cursor-pointer"
                onClick={() => window.open(card.url, '_blank')}
              >
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="lg:w-[200px] lg:h-[200px] w-[160px] h-[160px] object-cover mx-auto"
                />
                <h3 className="lg:text-[24px] text-[19.2px] leading-[32px] mt-[7px]">{card.title}</h3>
                <p className="lg:text-[15px] lg:leading-[32px] leading-[21px] text-[12px] lg:text-medium text-normal">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={handleNext} 
          className={`cursor-pointer lg:ml-[5px] ml-[2px] hover:opacity-80 ${
            current === totalPages - 1 ? 'opacity-30 pointer-events-none' : ''
          }`}
        >
          <SwiperRight />
        </button>
      </div>

      <div className="lg:flex hidden gap-[28px] mt-[35px]">
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
