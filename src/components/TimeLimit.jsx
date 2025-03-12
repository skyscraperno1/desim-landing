import TimeLimitBg from "@/assets/imgs/group-time.png";
import { useTranslation } from 'react-i18next';
import TimeLineBox from "@/assets/imgs/time-line-detail.png"
import StarGroup from "@/assets/imgs/star-group.png"
import TimeLineBoxMobile from "@/assets/imgs/time-line-detail-mobile.png"


export const TimeLimit = () => {
  const { t } = useTranslation()
  return (
    <div
      className="w-full bg-gradient-hero relative mt-[25px] lg:-translate-y-[100px]"
    >
      <div className="w-full h-full inset-0 bg-no-repeat bg-cover lg:pt-[150px] pt-[64px] lg:pb-[100px] pb-[60px] flex flex-col items-center px-[11px]"
        style={{ backgroundImage: `url(${TimeLimitBg})` }}
      >
        {/* <h3 className="text-[#DE0071] font-extrabold text-[45px] leading-[45px]">{ t('timeline.header')}</h3>
        <img src={TimeLineBox} className="hidden lg:block w-[1041px] mt-[40px]"/>
        <img src={TimeLineBoxMobile} className="lg:hidden w-full mt-[40px]"/>
        <img src={StarGroup} className="hidden lg:block absolute top-[150px] right-[385px]" />
        <img src={StarGroup} className="hidden lg:block absolute bottom-[40px] left-[350px]" /> */}
      </div>
    </div>
  )
}