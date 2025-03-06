const DotLine = ({ count }) => {
  return (
    <div className="flex gap-[17px]">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="w-[6px] h-[6px] bg-[#C69C6D] rounded-full"></div>
      ))}
    </div>
  );
};

export const TitleDot = ({ children }) => {
  return (
      <div className="flex flex-col py-auto gap-[35px] items-center">
      <h2 className="text-[40px] leading-[40px] font-bold text-center">{children}</h2>
      <DotLine count={17} />
    </div>
  )
}