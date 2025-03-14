import { useTranslation } from 'react-i18next';
import WorriedGirl from "@/assets/imgs/worried-girl.png"
import Feature1 from "@/assets/imgs/Feature1.png"
import Feature2 from "@/assets/imgs/Feature2.png"
import EsimPhone from "@/assets/imgs/esim-phone.png";
import { TitleDot } from './TitleDot';


export const Explain = () => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center gap-[40px] lg:px-[250px] px-[10px] lg:mt-[112px] mt-[50px]">
      {/* 标题部分 */}
      <TitleDot>{t('explain.title')}</TitleDot>
      {/* 问题描述部分 */}
      <div className="flex items-center rounded-[30px] w-full py-[30px] px-[40px] bg-[#F2F2F2] relative lg:mb-0 mb-[25px]">
        <img src={WorriedGirl} alt="worried girl" className="absolute lg:w-[128px] w-[100px] lg:left-[100px] lg:-top-[10px] -bottom-[45px] left-[50%] -translate-x-[50%]" />
        <div className="w-full flex flex-col gap-2 lg:ml-6 lg:text-[28px] text-[20px] lg:leading-[50px] leading-[40px] text-[#293761] items-center text-center lg:pb-0 pb-[100px]">
          <p>
            {t('explain.worries.line1')}
          </p>
          <p>
            {t('explain.worries.line2')}
          </p>
          <p>
            {t('explain.worries.line3')}
          </p>
        </div>
      </div>
      {/* 文中内容 */}
      <div className="w-full text-center">
        <div className="inline-flex flex-col items-center mb-[25px]">
          <h3 className="lg:text-[28px] text-[22px] lg:leading-[30px] leading-[45px] pb-[25px] underline decoration-8 decoration-[#FFD757]">
            {t('explain.content.title')}
          </h3>
          <p className="lg:text-[24px] text-[20px] lg:leading-[42px] leading-[33px] font-normal">
            {t('explain.content.line1')}
          </p>
          <p className="lg:text-[24px] text-[20px] lg:leading-[42px] leading-[33px] font-normal">
            {t('explain.content.line2')}
          </p>
        </div>
      </div>
      {/* 特性展示部分 */}
      <div className="w-full rounded-[30px] border-[5px] border-[#0DB3DB] p-8 relative pt-[80px] z-10 bg-white">
        <h3 className="text-center lg:px-[83px] px-[10.5px] lg:truncate lg:w-fit w-plus10 py-[17px] text-white lg:text-[32px] text-[22.4px] absolute bg-[#0DB3DB] rounded-[30px] -top-[40px] left-[50%] -translate-x-[50%]">
          {t('explain.features.title')}
        </h3>
        <img src={EsimPhone} className="absolute w-[165px] h-[238px] -left-[86px] -bottom-[80px] lg:block hidden" />
        <div className="flex lg:flex-row flex-col justify-center items-center w-full gap-[30px]">
          {/* 特性1 */}
          <div className="flex-1 flex flex-col items-center">
              <img 
                src={Feature1}
                alt="No physical SIM" 
                className="w-[200px] h-[134px] my-[20px]"
              />
            <p className="lg:text-[24px] text-[20px] text-center">
              {t('explain.features.noPhysicalSim.title')}
            </p>
            <p className="lg:text-[24px] text-[20px] text-center">
              {t('explain.features.noPhysicalSim.description')}
            </p>
          </div>
          {/* 特性2 */}
          <div className="flex-1 flex flex-col items-center">
              <img 
                src={Feature2}
                alt="Global support" 
                className="w-[200px] h-[134px] my-[20px]"
              />
            <p className="text-[24px] text-center">
              {t('explain.features.globalSupport.title')}
            </p>
            <p className="text-[20px] text-center">
              {t('explain.features.globalSupport.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}