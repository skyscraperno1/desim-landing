import { cn } from "../utils";

export const Button = ({ children, width, className, href, onClick, variant = 'red' }) => {
  const handleClick = () => {
    if (href) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={cn(
        'flex items-center justify-center rounded-[32px] lg:rounded-[40px] relative z-20',
        'py-[11px] px-[41px] lg:px-[72px]',
        variant === 'blue' 
          ? 'bg-[#0DB3DB] shadow-[0_10px_0_#0D6E99]'
          : 'bg-gradient-button shadow-[0_10px_0_#931827]',
        'text-[32px] lg:text-[40px]',
        'leading-[46.34px] lg:leading-[57.92px]',
        variant === 'blue'
          ? 'active:translate-y-[5px] active:shadow-[0_5px_0_#0D6E99]'
          : 'active:translate-y-[5px] active:shadow-[0_5px_0_#910314]',
        'transition-all',
        'text-white',
        'select-none',
        `${width ? width : 'w-auto'}`,
        className || ''
      )}
    >
      {children}
    </button>
  )
}