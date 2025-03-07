import { useTranslation } from 'react-i18next'
import { TitleDot } from './TitleDot'
import { Swiper } from "./Swiper";
import { cards } from '../utils'
import { Button } from './Button'
export const DestinationPlane = () => {
  const { t } = useTranslation()
  return (
    <div className="w-full flex flex-col gap-[35px] items-center lg:-translate-y-[500px] -translate-y-[450px] lg:px-0 px-[10px] lg:pt-[112px] pt-[50px] pb-[94px] bg-[#FFD757]">
     
      <div className='w-full lg:mb-[25px] mb-[10px]'>
      <TitleDot>
        {t('destinationPlane.title')}
      </TitleDot>
      </div>
      <Swiper cards={cards} />
      {/* 其他目标国家 */}
      <div className="flex flex-col items-center">
        <p className="lg:text-[15px] text-[12px] lg:leading-[26px] leading-[20px] font-normal text-center">{t('destination.other')}</p>
        <p className="lg:text-[24px] text-[19.2px] lg:leading-[42px] leading-[33px] font-normal text-center">{t('destination.countries')}</p>
      </div>
      <p className="text-[24px] leading-[42px] font-normal text-center">{t('destination.otherDesc')}</p>
      <Button>
        {t('destination.button')}
      </Button>
    </div>
  )
}
