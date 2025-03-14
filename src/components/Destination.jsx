import { TitleDot } from "./TitleDot";
import { useTranslation, Trans } from "react-i18next";
import { Swiper } from "./Swiper";
import { Button } from "./Button";
import { cards } from "../utils";

export const Destination = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#FFD757] w-full flex flex-col items-center lg:-translate-y-[402px] -translate-y-[290px] pt-[115px] lg:px-[250px] px-[10px] lg:pb-[244px] pb-[158px] gap-[35px]">
      <TitleDot>
        {t('destination.title')}
      </TitleDot>
      <div className="text-center mt-[20px]">
        <p className="lg:text-[28px] text-[22.4px] lg:leading-[59px] leading-[40px] lg:font-bold font-medium">{t('destination.subtitle1')}</p>
        <p className="lg:text-[28px] text-[22.4px] lg:leading-[59px] leading-[40px] lg:font-bold font-medium">
          <Trans
            i18nKey="destination.subtitle2"
            components={[
              <span className="text-[#DE0071] lg:text-[40px] text-[32px] font-bold" key="0" />,
              <span className="text-[#DE0071]" key="1" />,
            ]}
          />
        </p>
      </div>
      <Swiper cards={cards} />
      {/* 其他目标国家 */}
      <div className="flex flex-col items-center">
        <p className="lg:text-[15px] text-[12px] lg:leading-[26px] leading-[20px] font-normal text-center">{t('destination.other')}</p>
        <p className="lg:text-[24px] text-[19.2px] lg:leading-[42px] leading-[33px] font-normal text-center">{t('destination.countries')}</p>
      </div>
      <p className="text-[24px] leading-[42px] font-normal text-center">{t('destination.otherDesc')}</p>
      <Button
        className='lg:!text-[40px] !text-[32px]'
        onClick={() => window.open(t('destination.buttonUrl'), '_blank')}
      >
        {t('destination.button')}
      </Button>
    </div>
  )
}
