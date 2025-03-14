import { useTranslation, Trans } from "react-i18next";
import HeroImg from '../assets/imgs/HeroImg.png'
import { TitleDot } from "./TitleDot";
import HeroLeave from '../assets/imgs/HeroLeave.png'
import ProductSupport1 from '../assets/imgs/product1.png'
import ProductSupport2 from '../assets/imgs/product2.png'

export const Service = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#FFD757] w-full flex flex-col items-center lg:-translate-y-[280px] -translate-y-[180px] lg:pt-[115px] pt-[50px] lg:px-[250px] px-[10px] lg:pb-[244px] pb-[177px] overflow-hidden">
      <TitleDot>
        {t('service.title')}
      </TitleDot>
      <div className="relative flex lg:flex-row flex-col items-end lg:gap-[82px] gap-[25px] mt-[32px]">
        <div className="relative lg:w-[600px] w-full bg-white rounded-[20px] flex flex-col items-center gap-[32px] lg:py-[40px] lg:px-[50px] p-[20px_10px_50px_10px]">
          <img src={HeroLeave} alt="hero-leave" className="lg:w-[70px] w-[40px] absolute lg:top-[6px] top-[62px] right-[18px] lg:-right-[20px] rotate-[15deg]" />
          <h2 className="lg:text-[24px] lg:leading-[32px] text-[19.2px] leading-[33px]">{t('service.content.title')}</h2>
          <h1 className="text-[45px] leading-[65px] font-black text-center lg:block hidden">{t('service.content.subtitle')}</h1>
          <h1 className="text-[36px] leading-[46px] font-black text-center lg:hidden block">
            出国前
            <div>テストサービス</div>
          </h1>
          <p className="text-[15px] leading-[26px] font-normal lg:mr-0 mr-[110px]">{t('service.content.desc')}</p>
        </div>
        <img src={HeroImg} alt="hero" className="lg:w-[309px] w-[153px] lg:static absolute -bottom-[26px] -right-[2px]" />
        <div className="rounded-full w-[356px] h-[356px] bg-[#FFC157] absolute -bottom-[160px] -right-[170px] -z-10"></div>
      </div>
      {/* 提供商品 */}
      <div className="relative mt-[65px] flex lg:flex-row flex-col gap-[30px] border-[5px] border-[#0DB3DB] lg:rounded-[20px] rounded-[25px] lg:pt-[80px] pt-[60px] lg:px-0 px-[5px] pb-[35px] bg-white lg:w-[1040px] w-full justify-center ">
        <h1 className="lg:text-[28px] text-[22px] leading-[40px] text-white bg-[#0DB3DB] rounded-full px-[83px] lg:py-[17px] py-[10px] font-bold absolute -top-[40px] left-[50%] -translate-x-1/2 z-10 truncate">{t('service.productSupport')}</h1>
        <div className="flex lg:w-[470px] w-full gap-[20px] bg-[#F7F7F7] lg:p-[20px] px-[11px] py-[16px]">
          <img src={ProductSupport1} alt="product-1" className="lg:w-[100px] w-[80px] lg:h-[100px] h-[80px] object-cover" />
          <div className="flex flex-col justify-center h-[100px]">
            <h3 className="lg:text-[24px] text-[19.2px] lg:leading-[35px] leading-[30px]">{t('service.card1.title')}</h3>
            <p className="lg:text-[15px] text-[12px] lg:leading-[26px] leading-[20px] font-normal">{t('service.card1.desc')}</p>
          </div>
        </div>
        <div className="flex lg:w-[470px] w-full gap-[20px] bg-[#F7F7F7] lg:p-[20px] px-[11px] py-[16px]">
          <img src={ProductSupport2} alt="product-2" className="lg:w-[100px] w-[80px] lg:h-[100px] h-[80px] object-cover" />
          <div className="flex flex-col justify-center h-[100px]">
            <h3 className="lg:text-[24px] text-[19.2px] lg:leading-[35px] leading-[30px]">{t('service.card2.title')}</h3>
            <h3 className="lg:text-[24px] text-[19.2px] lg:leading-[35px] leading-[30px]">{t('service.card2.title1')}</h3>
            <p className="lg:text-[15px] text-[12px] lg:leading-[26px] leading-[20px] font-normal">{t('service.card2.desc')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}