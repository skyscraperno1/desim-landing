
import { Button } from "@/components/Button"
import { useTranslation, Trans } from 'react-i18next';
import { Header } from "@/components/Header"
import { Hero, HeroBox } from "@/components/Hero";
import { Heart, Clock } from "@/icons/HeroIcon";
import HeroImg from './assets/imgs/HeroImg.png'

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div className="h-full w-full">
        <Header></Header>
        <Hero>
          <div className="flex">
            <img src={HeroImg}/>
          </div>
          <div className="flex">
            <HeroBox Component={Heart}>
              <div className="w-full text-center">
                <div className="max-w-[100px] text-[12px] leading-[17.38px] mx-auto">
                  {t('heroBox1')}
                </div>
                <div className="text-[#DE0071] font-semibold text-[26px] leading-[37.65px]">
                  <Trans
                    i18nKey="satisfaction"
                    components={[
                      <span className="text-black text-[15px] leading-[21.72px]" />,
                    ]}
                  />
                </div>
              </div>
              <div className="text-[23.8px] leading-none font-bold">
                <Trans
                  i18nKey="satisfactionRage"
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
                  {t('heroBox2')}
                </div>
                <div className="text-[#DE0071] font-semibold text-[26px] leading-[37.65px]">
                  {t('timeDecline')}
                </div>
              </div>
              <div className="text-[23.8px] leading-none font-bold">
                <Trans
                  i18nKey="aboutMinutes"
                  values={{ minutes: 40 }}
                  components={[
                    <span className="text-[50.5px] leading-1" />,
                  ]}
                />
              </div>
            </HeroBox>
          </div>
          <Button className="text-[40px] leading-[40px] font-bold w-[420px]">{t('apply')}</Button>
        </Hero>
      </div>
    </>
  )
}
export default App
