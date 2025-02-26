export const Hero = ({ children }) => {
  return (
    <div className="bg-gradient-hero w-full h-[790px]" style={{
      clipPath: 'ellipse(100% 100% at 50% 0%)'
    }}>
      <div className="w-full h-full flex justify-center items-center">
        { children }
      </div>
    </div>
  )
}