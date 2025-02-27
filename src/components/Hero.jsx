import { Heart, Clock } from "@/icons/HeroIcon";
import HeroImg from '../assets/imgs/HeroImg.png'
import HeroLeave from '../assets/imgs/HeroLeave.png'
import { Button } from "@/components/Button"
import { useTranslation, Trans } from 'react-i18next';


export const HeroBox = ({ children, Component }) => {
  return (
    <div className="relative rounded-[20px] border-[3px] p-[15px] flex items-center justify-between bg-white w-[320px] h-[160px] border-black flex-col text-[#323333]">
      <div className="absolute rounded-full w-[66px] h-[66px] border-[3px] flex items-center justify-center -top-[23px] -right-[23px] border-black bg-white z-10">
        <Component />
      </div>
      {children}
    </div>
  )
}

export const HeroBlueBox = ({ children }) => {
  return (
    <div className="rounded-[15px] w-[188px] h-[64px] border-black border-2 bg-[#004B83] leading-[64px] text-[28px] text-white text-center">{children}</div>
  )
}

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-hero w-full h-[790px]" style={{
      clipPath: 'ellipse(123% 100% at 50% 0%)'
    }}>
      <div className="w-full h-full flex justify-center items-center flex-col gap-[30px]">
        <div className="flex">
          <div className="flex flex-col text-[#232323]">
            <p className="flex text-[65px] leading-[94px] font-extrabold items-end">海外で初<span className="text-[45px] leading-[74px]">めて</span><img src={HeroLeave} className="px-2 -translate-y-4"/>
              <span className="text-[45px] leading-[74px]">の<span className="text-[#DE0071]">eSIM</span></span>
            </p>
            <p className="text-[65px] leading-[94px] font-extrabold">
              { t('hero.peace') }
            </p>
            <div className="flex gap-[14px]">
              <HeroBlueBox>{ t('hero.resolveAnxiety') }</HeroBlueBox>
              <HeroBlueBox>{ t('hero.verifyTerminal') }</HeroBlueBox>
              <HeroBlueBox>{ t('hero.guideConfiguration') }</HeroBlueBox>
            </div>
            <p className="text-[28px] leading-[40px] mt-[18px]">{ t('')}</p>
          </div>

          <img src={HeroImg} className="w-[308px] h-[299px]" />
        </div>
        <div className="flex gap-[30px]">
          <HeroBox Component={Heart}>
            <div className="w-full text-center">
              <div className="max-w-[100px] text-[12px] leading-[17.38px] mx-auto">
                {t('hero.heroBox1')}
              </div>
              <div className="text-[#DE0071] font-semibold text-[26px] leading-[37.65px]">
                <Trans
                  i18nKey="hero.satisfaction"
                  components={[
                    <span className="text-black text-[15px] leading-[21.72px]" />,
                  ]}
                />
              </div>
            </div>
            <div className="text-[23.8px] leading-none font-bold">
              <Trans
                i18nKey="hero.satisfactionRage"
                values={{ rate: 98 }}
                components={[
                  <span className="text-[50.5px] leading-1" />,
                ]}
              />
            </div>
          </HeroBox>
          <HeroBox Component={Clock}>
            <div className="w-full text-center">
              <div className="max-w-[100px] text-[12px] leading-[17.38px] mx-auto">
                {t('hero.heroBox2')}
              </div>
              <div className="text-[#DE0071] font-semibold text-[26px] leading-[37.65px]">
                {t('hero.timeDecline')}
              </div>
            </div>
            <div className="text-[23.8px] leading-none font-bold">
              <Trans
                i18nKey="hero.aboutMinutes"
                values={{ minutes: 40 }}
                components={[
                  <span className="text-[50.5px] leading-1" />,
                ]}
              />
            </div>
          </HeroBox>
        </div>
        <Button className="text-[40px] leading-[40px] font-bold w-[420px]">{t('hero.apply')}</Button>
      </div>
    </div>
  )
}