import { useTranslation, Trans } from 'react-i18next';
import WorriedGirl from "@/assets/imgs/worried-girl.png"
import Feature1 from "@/assets/imgs/Feature1.png"
import Feature2 from "@/assets/imgs/Feature2.png"

const DotLine = ({ count }) => {
  return (
    <div className="flex gap-[17px]">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="w-[6px] h-[6px] bg-[#C69C6D] rounded-full"></div>
      ))}
    </div>
  );
};

export const Explain = () => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center h-[970px] gap-[40px] px-[100px]">
      {/* 标题部分 */}
      <div className="flex flex-col py-auto gap-[35px]">
        <h2 className="text-[40px] leading-[40px] font-bold">{t('explain.title')}</h2>
        <DotLine count={17} />
      </div>
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
      <div className="w-full max-w-[1000px] rounded-[30px] border-[5px] border-[#0DB3DB] p-8">
        <h3 className="text-center text-white text-[32px] mb-12 bg-[#0DB3DB] rounded-[30px]">
          {t('explain.features.title')}
        </h3>
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