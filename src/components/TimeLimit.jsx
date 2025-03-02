import TimeLimitBg from "@/assets/imgs/group-time.png";
import { useTranslation } from 'react-i18next';
import TimeLineBox from "@/assets/imgs/time-line-detail.png"
import StarGroup from "@/assets/imgs/star-group.png"


export const TimeLimit = () => {
  const { t } = useTranslation()
  return (
    <div
      className="w-full h-[780px] bg-gradient-hero relative -translate-y-[191px]"
    >
      <div className="w-full h-full absolute inset-0 bg-no-repeat bg-cover pt-[231px] flex flex-col items-center"
        style={{ backgroundImage: `url(${TimeLimitBg})` }}
      >
        <h3 className="text-[#DE0071] font-extrabold text-[45px] leading-[45px]">{ t('timeline.header')}</h3>
        <img src={TimeLineBox} className="w-[1041px] h-[314px] mt-[105px]"/>
        <img src={StarGroup} className="absolute top-[300px] right-[360px]" />
        <img src={StarGroup} className="absolute bottom-[20px] left-[340px]" />
      </div>
    </div>
  )
}