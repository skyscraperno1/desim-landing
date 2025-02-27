export const HeroBox = ({ children, Component }) => {
  return (
    <div className="relative rounded-[20px] border-[3px] p-[15px] flex items-center justify-between bg-white w-[320px] h-[160px] border-black flex-col text-[#323333]">
      <div className="absolute rounded-full w-[66px] h-[66px] border-[3px] flex items-center justify-center -top-[23px] -right-[23px] border-black bg-white z-10">
        <Component />
      </div>
      {children}
    </div>
  )
}

export const Hero = ({ children }) => {
  return (
    <div className="bg-gradient-hero w-full h-[790px]" style={{
      clipPath: 'ellipse(123% 100% at 50% 0%)'
    }}>
      <div className="w-full h-full flex justify-center items-center flex-col">
        {children}
      </div>
    </div>
  )
}