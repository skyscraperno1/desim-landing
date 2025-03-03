import { TitleDot } from "./TitleDot";
import { useTranslation, Trans } from "react-i18next";
import { Swiper } from "./Swiper";
import SwiperCover from "../assets/imgs/swiper-cover.png";
import { Button } from "./Button";

export const Destination = () => {
  const { t } = useTranslation();
  const cards = [
    {
      id: 1,
      image: SwiperCover,
      title: "韓国eSIM / 3日間 / 完全無制限",
      desc: "テストサービス付き"
    },
    {
      id: 2,
      image: SwiperCover,
      title: "韓国eSIM / 3日間 / 完全無制限",
      desc: "テストサービス付き"
    },
    {
      id: 3,
      image: SwiperCover,
      title: "韓国eSIM / 3日間 / 完全無制限",
      desc: "テストサービス付き"
    },
    {
      id: 4,
      image: SwiperCover,
      title: "韓国eSIM / 3日間 / 完全無制限",
      desc: "テストサービス付き"
    },
    {
      id: 5,
      image: SwiperCover,
      title: "韓国eSIM / 3日間 / 完全無制限",
      desc: "テストサービス付き"
    },
    {
      id: 6,
      image: SwiperCover,
      title: "韓国eSIM / 3日間 / 完全無制限",
      desc: "テストサービス付き"
    },
    {
      id: 7,
      image: SwiperCover,
      title: "韓国eSIM / 3日間 / 完全無制限",
      desc: "テストサービス付き"
    },
    {
      id: 8,
      image: SwiperCover,
      title: "韓国eSIM / 3日間 / 完全無制限",
      desc: "テストサービス付き"
    },
    {
      id: 9,
      image: SwiperCover,
      title: "韓国eSIM / 3日間 / 完全無制限",
      desc: "テストサービス付き"
    }
  ]
  return (
    <div className="bg-[#FFD757] w-full flex flex-col items-center -translate-y-[465px] pt-[115px] px-[250px] pb-[244px] gap-[35px]">
      <TitleDot>
        {t('destination.title')}
      </TitleDot>
      <div className="text-center mt-[20px]">
        <p className="text-[28px] leading-[59px] font-bold">{t('destination.subtitle1')}</p>
        <p className="text-[28px] leading-[59px] font-bold">
          <Trans
            i18nKey="destination.subtitle2"
            components={[
              <span className="text-[#DE0071] text-[40px]" key="0" />,
              <span className="text-[#DE0071]" key="1" />,
            ]}
          />
        </p>
      </div>
      <Swiper cards={cards} />
      {/* 其他目标国家 */}
      <div className="flex flex-col items-center">
        <p className="text-[15px] leading-[26px] font-normal">{t('destination.other')}</p>
        <p className="text-[24px] leading-[42px] font-normal">{t('destination.countries')}</p>
      </div>
      <p className="text-[24px] leading-[42px] font-normal">{t('destination.otherDesc')}</p>
      <Button>
        {t('destination.button')}
      </Button>
    </div>
  )
}
