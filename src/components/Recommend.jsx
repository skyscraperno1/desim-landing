import { TitleDot } from "./TitleDot";
import { useTranslation } from "react-i18next";
import RecommendUser from '../assets/imgs/recommend-user.png'
import RecommendCover from '../assets/imgs/recommend-cover.png'
import bg_influencer from '../assets/imgs/bg_influencer.png'
import bg_influencer_mobile from '../assets/imgs/bg_influencer-mobile.png'
import { Button } from "./Button";
import ServiceImg from '../assets/imgs/service-img.png'
import LuggageGirl from '../assets/imgs/luggage-girl.png'

const RecommendItem = () => {
  return (
    <div className="lg:w-[333px] w-full rounded-[20px] flex flex-col gap-[15px] p-[30px_20px_40px_20px] bg-white shadow-[10px_10px_6px_0px_#0000001A]">
      <div>
        <img src={RecommendUser} alt="recommend" className="w-[50px] h-[50px]" />
        <h2 className="text-[24px] leading-[42px] font-normal">account_sample</h2>
      </div>
      <img src={RecommendCover} alt="recommend" className="w-[293px] h-[293px]" />
      <div>
        <h2 className="w-fit rounded-[14px] gap-[10px] px-[18px] bg-[#DE0071] text-[15px] leading-[26px] font-normal text-white">韩国</h2>
      </div>
      <h2 className="text-[24px] leading-[35px] font-bold text-[#323232]">この文章は一言です</h2>
      <p className="text-[15px] leading-[20px] font-normal tracking-normal">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
      </p>
    </div>
  )
}
export const Recommend = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full relative flex flex-col gap-[35px] items-center lg:-translate-y-[332px] -translate-y-[208px] bg-no-repeat lg:bg-[url('/src/assets/imgs/bg_influencer.png')] bg-[url('/src/assets/imgs/bg_influencer-mobile.png')] bg-contain bg-bottom z-10 lg:px-0 px-[25px] clip-path-ellipse-long" >
      <img src={LuggageGirl} className="lg:block hidden absolute -top-[150px] right-[240px] w-[225px] -z-20" />
      <TitleDot>
        {t('recommend.title')}
      </TitleDot>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-[20px] "
      >
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
      </div>
      <Button variant="blue" className="mt-[35px] lg:w-[420px] w-full">{t('recommend.button')}</Button>
      <div className="w-full lg:h-[200px] h-[100px] relative">
      </div>
    </div>
  )
}

