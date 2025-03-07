import { useState, useEffect } from 'react';

const DotLine = ({ count }) => {
  return (
    <div className="flex lg:gap-[17px] gap-[13px]">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="w-[6px] h-[6px] bg-[#C69C6D] rounded-full"></div>
      ))}
    </div>
  );
};

export const TitleDot = ({ children }) => {
  const [dotCount, setDotCount] = useState(window.innerWidth >= 960 ? 17 : 13);

  useEffect(() => {
    const handleResize = () => {
      setDotCount(window.innerWidth >= 960 ? 17 : 13);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col py-auto lg:gap-[35px] gap-[20px] items-center">
      <h2 className="lg:text-[40px] text-[32px] lg:leading-[40px] leading-[100%] font-bold text-center">{children}</h2>
      <DotLine count={dotCount} />
    </div>
  )
}