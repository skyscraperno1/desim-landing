import { useTranslation } from 'react-i18next'
import { TitleDot } from './TitleDot'
import { Swiper } from "./Swiper";
import { cards } from '../utils'
import { Button } from './Button'
export const DestinationPlane = () => {
  const { t } = useTranslation()
  return (
    <div className="w-full flex flex-col gap-[35px] items-center -translate-y-[650px] pt-[112px] pb-[94px] bg-[#FFD757]">
      <TitleDot>
        {t('destinationPlane.title')}
      </TitleDot>
      <div className="mt-[35px]">
        <Swiper cards={cards} />
      </div>
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
