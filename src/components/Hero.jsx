import { Heart, Clock } from "@/icons/HeroIcon";
import HeroImg from '../assets/imgs/HeroImg.png'
import HeroLeave from '../assets/imgs/HeroLeave.png'
import { Button } from "@/components/Button"
import { useTranslation, Trans } from 'react-i18next';


export const HeroBox = ({ children, Component }) => {
  return (
    <div className="relative rounded-[20px] lg:border-[3px] border-[1.5px] lg:p-[15px] p-[10px] flex items-center justify-between bg-white lg:w-[320px] w-[150px] lg:h-[160px] h-[105px] border-black flex-col text-[#323333]">
      <div className="absolute rounded-full w-[66px] h-[66px] border-[3px] lg:scale-100 scale-50 flex items-center justify-center lg:-top-[23px] lg:-right-[23px] -top-[26px] -right-[26px] border-black bg-white z-10">
        <Component />
      </div>
      {children}
    </div>
  )
}

export const HeroBlueBox = ({ children }) => {
  return (
    <div className="flex items-center justify-center rounded-[15px] lg:w-[188px] w-[100px] lg:h-[64px] h-[45px] border-black border-2 bg-[#004B83] lg:text-[28px] text-[15px] text-white">{children}</div>
  )
}

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-hero w-full lg:pt-[100px] pt-[50px] clip-path-ellipse lg:px-0 px-[10px]">
      <div className="w-full h-full flex justify-center items-center flex-col gap-[30px]">
        <div className="flex lg:flex-row flex-col items-center">
          <div className="flex flex-col text-[#232323]">
            <p className="flex lg:text-[65px] text-[34px] lg:leading-[94px] leading-[100%] font-extrabold items-end">海外で初
              <span className="lg:text-[45px] lg:leading-[74px] text-[24px] leading-[100%]">めて</span>
              <img src={HeroLeave} className="px-2 lg:-translate-y-4 -translate-y-2px lg:w-[58px]  w-[40px]"/>
              <span className="lg:text-[45px] lg:leading-[74px] text-[24px] leading-[100%]">の<span className="text-[#DE0071]">eSIM</span></span>
            </p>
            <p className="lg:text-[65px] text-[34px] lg:leading-[94px] leading-[100%] font-extrabold">
              { t('hero.peace') }
            </p>
            <div className="flex gap-[14px] lg:mt-0 mt-[18px]">
              <HeroBlueBox>{ t('hero.resolveAnxiety') }</HeroBlueBox>
              <HeroBlueBox>{ t('hero.verifyTerminal') }</HeroBlueBox>
              <HeroBlueBox>{ t('hero.guideConfiguration') }</HeroBlueBox>
            </div>
            <p className="lg:text-[28px] text-[19px] lg:leading-[40px] leading-[33px] mt-[18px]">現地での接続まで、海外渡航の全てをサポート</p>
            <p className="text-[28px] leading-[40px] mt-[18px]">{ t('')}</p>
          </div>
          <img src={HeroImg} className="lg:w-[308px] lg:h-[299px] w-[208px] h-[201px]" />
        </div>
        <div className="flex gap-[30px]">
          <HeroBox Component={Heart}>
            <div className="w-full text-center">
              <div className="max-w-[100px] lg:text-[12px] text-[10px] lg:leading-[17.38px] leading-[100%] mx-auto">
                {t('hero.heroBox1')}
              </div>
              <div className="text-[#DE0071] font-semibold lg:text-[26px] text-[14px] lg:leading-[37.65px] leading-[100%] lg:mt-0 mt-[8px]">
                <Trans
                  i18nKey="hero.satisfaction"
                  components={[
                    <span className="text-black lg:text-[15px] text-[10px] lg:leading-[21.72px] leading-[100%]" />,
                  ]}
                />
              </div>
            </div>
            <div className="lg:text-[23.8px] text-[12px] leading-none font-bold">
              <Trans
                i18nKey="hero.satisfactionRage"
                values={{ rate: 98 }}
                components={[
                  <span className="lg:text-[50.5px] text-[28px] leading-[100%]" />,
                ]}
              />
            </div>
          </HeroBox>
          <HeroBox Component={Clock}>
            <div className="w-full text-center">
              <div className="max-w-[100px] lg:text-[12px] text-[10px] lg:leading-[17.38px] leading-[100%] mx-auto">
                {t('hero.heroBox2')}
              </div>
              <div className="text-[#DE0071] font-semibold lg:text-[26px] text-[14px] lg:leading-[37.65px] leading-[100%] lg:mt-0 mt-[8px]">
                {t('hero.timeDecline')}
              </div>
            </div>
            <div className="lg:text-[23.8px] text-[12px] leading-none font-bold">
              <Trans
                i18nKey="hero.aboutMinutes"
                values={{ minutes: 40 }}
                components={[
                  <span className="lg:text-[50.5px] text-[28px] leading-[100%]" />,
                ]}
              />
            </div>
          </HeroBox>
        </div>
        <Button className="font-bold w-[320px] lg:w-[420px]">{t('hero.apply')}</Button>
        <div className="w-full lg:h-[100px] h-[60px] relative"></div>
      </div>
    </div>
  )
}