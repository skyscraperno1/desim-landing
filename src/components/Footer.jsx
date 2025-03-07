import { useTranslation } from 'react-i18next'
import Logo from "../icons/Logo"
import { X, LinkedIn, Instagram, Youtube, Line } from "../icons/SocialIcons"

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className="w-full flex flex-col items-center lg:-translate-y-[500px] -translate-y-[450px] bg-[#004B83] text-white lg:py-[60px] py-[40px] lg:pb-[40px] pb-[20px] lg:px-[150px] px-[24px]">
      <div className="flex lg:flex-row flex-col lg:gap-[60px] gap-[20px] lg:justify-center items-start mx-auto lg:mb-[40px] mb-[20px] w-full">
        <div className="font-normal lg:text-[20px] text-[16px] leading-[32px] cursor-pointer">{t('footer.home')}</div>
        <div className="font-normal lg:text-[20px] text-[16px] leading-[32px] cursor-pointer">{t('footer.productIntroduction')}</div>
        <div className="font-normal lg:text-[20px] text-[16px] leading-[32px] cursor-pointer">{t('footer.achievements')}</div>
        <div className="font-normal lg:text-[20px] text-[16px] leading-[32px] cursor-pointer">{t('footer.news')}</div>
        <div className="font-normal lg:text-[20px] text-[16px] leading-[32px] cursor-pointer">{t('footer.contact')}</div>
      </div>
      <div className="flex w-full lg:justify-between justify-center flex-col lg:flex-row lg:items-center items-start gap-[20px] lg:gap-0 border-t border-b border-t-[#F7F7F7] border-b-[#F7F7F7FF] lg:py-[24px] py-[20px]">
        <Logo />
        <div className='flex gap-[20px]'>
          <button className='cursor-pointer lg:scale-100 scale-[83%]'>
            <X />
          </button>
          <button className='cursor-pointer lg:scale-100 scale-[83%]'>
            <LinkedIn />
          </button>
          <button className='cursor-pointer lg:scale-100 scale-[83%]'>
            <Instagram />
          </button>
          <button className='cursor-pointer lg:scale-100 scale-[83%]'>
            <Youtube />
          </button>
          <button className='cursor-pointer lg:scale-100 scale-[83%]'>
            <Line />
          </button>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col-reverse lg:mt-[10px] mt-[20px] justify-between w-full lg:items-center items-start gap-[15px] lg:gap-0'>
        <p className='font-normal text-[14px] leading-[100%] text-[#fff]'>{t('footer.copyright')}</p>
        <div className='flex gap-[20px] lg:gap-[40px]'>
          <p className='font-normal text-[14px] leading-[100%] text-[#B0B0B0]'>{t('footer.privacyPolicy')}</p>
          <p className='font-normal text-[14px] leading-[100%] text-[#B0B0B0]'>{t('footer.termsOfService')}</p>
        </div>
      </div>
    </div>
  )
}
