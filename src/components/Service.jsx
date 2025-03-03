import { useTranslation, Trans } from "react-i18next";
import HeroImg from '../assets/imgs/HeroImg.png'
import { TitleDot } from "./TitleDot";
import HeroLeave from '../assets/imgs/HeroLeave.png'
import ProductSupport1 from '../assets/imgs/product1.png'
import ProductSupport2 from '../assets/imgs/product2.png'

export const Service = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#FFD757] w-full flex flex-col items-center -translate-y-[323px] pt-[115px] px-[250px] pb-[244px]">
      <TitleDot>
        {t('service.title')}
      </TitleDot>
      <div className="relative flex items-end gap-[82px] mt-[32px] ">
        <div className="relative w-[600px] h-[322px] bg-white rounded-[20px] flex flex-col items-center gap-[32px] py-[40px] px-[50px]">
          <img src={HeroLeave} alt="hero-leave" className="w-[70px] absolute top-[6px] -right-[20px] rotate-[15deg]" />
          <h2 className="text-[24px] leading-[32px]">{t('service.content.title')}</h2>
          <h1 className="text-[45px] leading-[65px] font-bold">{t('service.content.subtitle')}</h1>
          <p className="text-[15px] leading-[26px] font-normal">{t('service.content.desc')}</p>
        </div>
        <img src={HeroImg} alt="hero" className="w-[309px] h-[299px]" />
        <div className="rounded-full w-[356px] h-[356px] bg-[#FFC157] absolute -bottom-[160px] -right-[170px] -z-10"></div>
      </div>
      {/* 提供商品 */}
      <div className="relative mt-[65px] flex gap-[30px] border-[5px] border-[#0DB3DB] rounded-[20px] pt-[80px] pb-[35px] bg-white w-[1040px] justify-center">
        <h1 className="text-[28px] leading-[40px] text-white bg-[#0DB3DB] rounded-full px-[83px] py-[17px] font-bold absolute -top-[40px] left-[50%] -translate-x-1/2">{t('service.productSupport')}</h1>
        <div className="flex w-[470px] gap-[20px] bg-[#F7F7F7] p-[20px]">
          <img src={ProductSupport1} alt="product-1" className="w-[100px] h-[100px] object-cover" />
          <div className="flex flex-col justify-center h-[100px]">
            <h3 className="text-[24px] leading-[35px]">{t('service.card1.title')}</h3>
            <p className="text-[15px] leading-[26px] font-normal">{t('service.card1.desc')}</p>
          </div>
        </div>
        <div className="flex w-[470px] gap-[20px] bg-[#F7F7F7] p-[20px]">
          <img src={ProductSupport2} alt="product-2" className="w-[100px] h-[100px] object-cover" />
          <div className="flex flex-col justify-center h-[100px]">
            <h3 className="text-[24px] leading-[35px]">{t('service.card2.title')}</h3>
            <h3 className="text-[24px] leading-[35px]">{t('service.card2.title1')}</h3>
            <p className="text-[15px] leading-[26px] font-normal">{t('service.card2.desc')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}