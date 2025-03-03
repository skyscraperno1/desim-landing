import { useTranslation } from 'react-i18next';
import WorriedGirl from "@/assets/imgs/worried-girl.png"
import Feature1 from "@/assets/imgs/Feature1.png"
import Feature2 from "@/assets/imgs/Feature2.png"
import EsimPhone from "@/assets/imgs/esim-phone.png";
import { TitleDot } from './TitleDot';


export const Explain = () => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center h-[970px] gap-[40px] px-[250px] mt-28">
      {/* 标题部分 */}
      <TitleDot>{t('explain.title')}</TitleDot>
      {/* 问题描述部分 */}
      <div className="flex items-center rounded-[30px] w-full py-[30px] px-[40px] bg-[#F2F2F2] relative">
        <img src={WorriedGirl} alt="worried girl" className="absolute w-[128px] h-[215px] left-[10px] -top-[10px]" />
        <div className="w-full flex flex-col gap-2 ml-6 text-[28px] leading-[50px] text-[#293761] items-center">
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
        <div className="inline-flex flex-col items-center">
          <h3 className="text-[28px] border-b-4 border-[#FFD757]">
            {t('explain.content.title')}
          </h3>
          <p className="text-[24px] leading-[42px] font-normal">
            {t('explain.content.line1')}
          </p>
          <p className="text-[24px] leading-[42px] font-normal">
            {t('explain.content.line2')}
          </p>
        </div>
      </div>
      {/* 特性展示部分 */}
      <div className="w-full rounded-[30px] border-[5px] border-[#0DB3DB] p-8 relative pt-[80px] z-10 bg-white">
        <h3 className="text-center px-[83px] py-[17px] text-white text-[32px] absolute bg-[#0DB3DB] rounded-[30px] -top-[40px] left-[50%] -translate-x-[50%] truncate">
          {t('explain.features.title')}
        </h3>
        <img src={EsimPhone} className="absolute w-[165px] h-[238px] -left-[86px] -bottom-[120px]" />
        <div className="grid grid-cols-2 gap-8">
          {/* 特性1 */}
          <div className="flex flex-col items-center">
              <img 
                src={Feature1}
                alt="No physical SIM" 
                className="w-[200px] h-[134px]"
              />
            <p className="text-[24px] text-center">
              {t('explain.features.noPhysicalSim.title')}
            </p>
            <p className="text-[20px] text-center">
              {t('explain.features.noPhysicalSim.description')}
            </p>
          </div>
          {/* 特性2 */}
          <div className="flex flex-col items-center">
              <img 
                src={Feature2}
                alt="Global support" 
                className="w-[200px] h-[134px]"
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