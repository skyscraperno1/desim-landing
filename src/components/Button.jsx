import { cn } from "../utils";

export const Button = ({ children, width, className, href, onClick }) => {
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
        'flex items-center rounded-[32px] lg:rounded-[40px]',
        'py-[11px] px-[41px] lg:px-[72px]',
        'bg-gradient-button shadow-[0_10px_0_#931827]',
        'hover:opacity-95',
        'text-[32px] lg:text-[40px]',
        'leading-[46.34px] lg:leading-[57.92px]',
        'active:translate-y-[2px] active:shadow-[0_2px_0_#910314]',
        'transition-all',
        'text-white',
        `${width ? width : 'w-auto'}`,
        className || ''
      )}
    >
      {children}
    </button>
  )
}