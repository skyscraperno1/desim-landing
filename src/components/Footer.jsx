import { useTranslation } from 'react-i18next'
import Logo from "../icons/Logo"
import { X, LinkedIn, Instagram, Youtube, Line } from "../icons/SocialIcons"

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className="w-full flex flex-col items-center -translate-y-[650px]  bg-[#004B83] text-white py-[60px] px-[150px]">
      <div className="flex gap-[60px] mx-auto mb-[40px]">
        <div className="font-normal text-[20px] leading-[32px] cursor-pointer">{t('footer.home')}</div>
        <div className="font-normal text-[20px] leading-[32px] cursor-pointer">{t('footer.productIntroduction')}</div>
        <div className="font-normal text-[20px] leading-[32px] cursor-pointer">{t('footer.achievements')}</div>
        <div className="font-normal text-[20px] leading-[32px] cursor-pointer">{t('footer.news')}</div>
        <div className="font-normal text-[20px] leading-[32px] cursor-pointer">{t('footer.contact')}</div>
      </div>
      <div className="flex w-full justify-between border-t border-b border-t-[#F7F7F7] border-b-[#F7F7F7FF] py-[24px]">
        <Logo />
        <div className='flex gap-[20px]'>
          <button className='cursor-pointer'>
            <X />
          </button>
          <button className='cursor-pointer'>
            <LinkedIn />
          </button>
          <button className='cursor-pointer'>
            <Instagram />
          </button>
          <button className='cursor-pointer'>
            <Youtube />
          </button>
          <button className='cursor-pointer'>
            <Line />
          </button>
        </div>
      </div>
      <div className='flex mt-[10px] justify-between w-full'>
        <p className='font-normal text-[14px] leading-[100%] text-[#B0B0B0]'>{t('footer.copyright')}</p>
        <div className='flex gap-[40px]'>
          <p className='font-normal text-[14px] leading-[100%] text-[#B0B0B0]'>{t('footer.privacyPolicy')}</p>
          <p className='font-normal text-[14px] leading-[100%] text-[#B0B0B0]'>{t('footer.termsOfService')}</p>
        </div>
      </div>
    </div>
  )
}
