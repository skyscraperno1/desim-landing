import { useTranslation, Trans } from "react-i18next";
import Robot from "@/assets/imgs/robot.png";
import { TitleDot } from "./TitleDot";
import {
  IconFeature1,
  IconFeature2,
  IconFeature3,
} from "../icons/IconFeatures";
// import HeaderStripe from "@/assets/imgs/header-stripe.png";
import IllustBefore from "@/assets/imgs/illust-before.png";
import IllustAfter from "@/assets/imgs/illust-after.png";

const FeatureCard = ({ title, content, Component }) => {
  return (
    <div
      className="px-[16px] py-[19px] bg-white flex-1 flex flex-col items-center justify-start gap-[18px] rounded-[20px]"
      style={{ boxShadow: "10px 10px 6px 0px #0000001A" }}
    >
      <Component />
      <h3 className="text-[20px] leading-[20px] font-bold">{title}</h3>
      <div>{content}</div>
    </div>
  );
};
export const OverseaTest = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full lg:-translate-y-[100px]">
      <div className="w-full bg-[#004B83] text-white flex lg:flex-row flex-col items-center justify-center select-none overflow-hidden">
        {/* 文字内容 */}
        <div className="lg:w-fit w-full lg:px-0 px-[10px]">
          <div className="w-fit lg:flex hidden leading-[40px] text-[40px] gap-[10px] items-center mr-[40px]">
            <h2 className="text-[#004B83] font-extrabold leading-[100%] text-[45px] bg-white px-[24px] py-[28px] rounded-[20px]">
              {t("oversea.title")}
            </h2>
            {t("oversea.is")}
          </div>
          <div className="lg:hidden block text-white font-extrabold text-[32px] mt-[36px]">
            <h2 className="text-[#004B83] font-extrabold bg-white py-[10px] px-[14px] w-fit rounded-[13px]">
              海外eSIMテストサービ
            </h2>
            <div className="flex items-center gap-[10px]  mt-[10px]">
              <h2 className="text-[#004B83] font-extrabold bg-white py-[10px] px-[14px] w-fit rounded-[13px]">
                ス
              </h2>
              {t("oversea.is")}
            </div>
          </div>
          <div className="lg:text-[40px] text-[23px] leading-[100%] mt-[20px]">
            <Trans
              i18nKey="oversea.cheap"
              components={[<span className="lg:text-[75px] text-[42.5px] leading-[100%]" />]}
            />
          </div>
        </div>
        {/* 图片背景 */}
        <div
          className="flex items-start justify-center lg:w-[621px] lg:h-[621px] w-[289px] h-[289px] rounded-full bg-[#41CDEE] lg:translate-y-[180px] -translate-y-[32px] lg:translate-x-0 translate-x-[120px]"
          style={{
            boxShadow: "8px 10px 6px 0px #00000012",
          }}
        >
          <img
            src={Robot}
            className="lg:w-[299px] w-[116px] -translate-y-[40px]"
          />
        </div>
      </div>

      <div className="w-full bg-[#E6F6FF] relative z-10 py-[100px] lg:pb-[100px] pb-[50px] -translate-y-[180px] clip-path-ellipse-top">
        <div className="lg:mx-[250px] mx-[10px] flex flex-col items-center px-[10px]">
          <TitleDot>{t("oversea.features.title")}</TitleDot>
          <h2 className="lg:text-[24px] text-[18px] lg:leading-[42px] leading-[33px] text-center lg:my-[80px] my-[40px]">
            {t("oversea.features.desc")}
          </h2>
          {/* 特征卡片 */}
          <div className="lg:flex-row flex-col flex gap-[40px]">
            <FeatureCard
              title={t("oversea.features.card1.title")}
              content={t("oversea.features.card1.desc")}
              Component={IconFeature1}
            />
            <FeatureCard
              title={t("oversea.features.card2.title")}
              content={t("oversea.features.card2.desc")}
              Component={IconFeature2}
            />
            <FeatureCard
              title={t("oversea.features.card3.title")}
              content={t("oversea.features.card3.desc")}
              Component={IconFeature3}
            />
          </div>
          {/* 常见问题 */}
          <div
            className="bg-[#F2F2F2] lg:px-[40px] px-[6.5px] lg:pb-[40px] pb-[30px] flex flex-col items-center relative mt-[50px] rounded-[20px]"
            style={{ boxShadow: "10px 10px 6px 0px #0000001A" }}
          >
            {/* Banner */}
            <h3
              className="lg:h-[98px] h-[61px] bg-no-repeat text-center lg:leading-[84px] leading-[50px] lg:text-[28px] text-[19px] text-white lg:mt-[35px] mt-[30px] banner-bg"
            >
              {t("oversea.commonError.title")}
            </h3>
            <div className="flex">
              <div className="flex-1 flex flex-col">
                <p className="lg:text-[28px] text-[22.4px] leading-[40px] text-center lg:pb-[14px] pb-[5px]">Before</p>
                <div className="bg-white flex flex-col flex-1 border border-[#CACACA] py-[30px] px-[20px] justify-start gap-[13px]">
                  <h4 className="lg:text-[28px] text-[19.2px] leading-[33px] lg:leading-[40px] text-center pb-[20px]">
                    {t("oversea.commonError.card1.title")}
                  </h4>
                  <img src={IllustBefore} alt="" className="lg:w-[435px] w-[150px]" />
                  <ul className="list-disc list-inside lg:text-[15px] text-[12px] lg:leading-[26px] leading-[20px] font-normal">
                    <li>{t("oversea.commonError.card1.desc.line1")}</li>
                    <li>{t("oversea.commonError.card1.desc.line2")}</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 flex flex-col ">
                <p className="lg:text-[28px] text-[22.4px] leading-[40px] text-center lg:pb-[14px] pb-[5px]">After</p>
                <div className="bg-white flex flex-col flex-1 border border-[#CACACA] py-[30px] px-[20px] justify-start gap-[13px]">
                  <h4 className="lg:text-[28px] text-[19.2px] leading-[33px] lg:leading-[40px] text-center pt-[20px]">
                    {t("oversea.commonError.card2.title")}
                  </h4>
                  <img src={IllustAfter} alt="" className="lg:w-[435px] w-[150px]" />
                  <ul className="list-disc list-inside lg:text-[15px] text-[12px] lg:leading-[26px] leading-[20px] font-normal">
                    <li>{t("oversea.commonError.card2.desc.line1")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
