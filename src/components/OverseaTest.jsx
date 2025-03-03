import { useTranslation, Trans } from "react-i18next";
import Robot from "@/assets/imgs/robot.png";
import { TitleDot } from "./TitleDot";
import {
  IconFeature1,
  IconFeature2,
  IconFeature3,
} from "../icons/IconFeatures";
import HeaderStripe from "@/assets/imgs/header-stripe.png";
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
    <div className="w-full -translate-y-[191px]">
      <div className="w-full bg-[#004B83] h-[510px] text-white flex items-center justify-center">
        {/* 文字内容 */}
        <div>
          <div className="w-fit flex leading-[40px] text-[40px] gap-[10px] items-center mr-[40px]">
            <h2 className="text-[#004B83] font-extrabold leading-[45px] text-[45px] bg-white px-[24px] py-[28px] rounded-[20px]">
              {t("oversea.title")}
            </h2>
            {t("oversea.is")}
          </div>
          <div className="text-[40px] leading-[40px]">
            <Trans
              i18nKey="oversea.cheap"
              components={[<span className="text-[75px] leading-[75px]" />]}
            />
          </div>
        </div>
        {/* 图片背景 */}
        <div
          className="flex items-start justify-center w-[621px] h-[621px] rounded-full bg-[#41CDEE] translate-y-[180px]"
          style={{
            boxShadow: "8px 10px 6px 0px #00000012",
          }}
        >
          <img
            src={Robot}
            className="w-[299px] h-[389px] -translate-y-[40px]"
          />
        </div>
      </div>
      <div
        className="-translate-y-[130px] w-full bg-[#E6F6FF] relative z-10 py-[97px]"
        style={{ clipPath: "ellipse(123% 100% at 50% 100%)" }}
      >
        <div className="mx-[250px] flex flex-col items-center px-[10px]">
          <TitleDot>{t("oversea.features.title")}</TitleDot>
          <h2 className="text-[24px] leading-[42px] text-center my-[80px]">
            {t("oversea.features.desc")}
          </h2>
          {/* 特征卡片 */}
          <div className="h-[369px] flex gap-[40px]">
            <FeatureCard
              title={t("oversea.features.card1.title")}
              content={t("oversea.features.card1.desc")}
              Component={IconFeature2}
            />
            <FeatureCard
              title={t("oversea.features.card2.title")}
              content={t("oversea.features.card2.desc")}
              Component={IconFeature1}
            />
            <FeatureCard
              title={t("oversea.features.card3.title")}
              content={t("oversea.features.card3.desc")}
              Component={IconFeature3}
            />
          </div>
          {/* 常见问题 */}
          <div
            className="bg-[#F2F2F2] w-full h-[650px] flex flex-col items-center relative mt-[50px] rounded-[20px]"
            style={{ boxShadow: "10px 10px 6px 0px #0000001A" }}
          >
            {/* Banner */}
            <h3
              className="h-[98px] bg-no-repeat text-center leading-[84px] text-[28px] text-white mt-[40px]"
              style={{
                width: "calc(100% + 20px)",
                backgroundImage: `url(${HeaderStripe})`,
                backgroundSize: '100% 100%'
              }}
            >
              {t("oversea.commonError.title")}
            </h3>
            <div className="flex">
              <div className="flex-1 h-[469px] flex flex-col">
                <p className="text-[28px] leading-[40px] text-center pb-[20px]">Before</p>
                <div className="bg-white flex flex-col flex-1 border border-[#CACACA] py-[30px] px-[20px] justify-between">
                  <h4 className="text-[28px] leading-[40px] text-center pb-[20px]">
                    {t("oversea.commonError.card1.title")}
                  </h4>
                  <img src={IllustBefore} alt="" className="h-[200px]" />
                  <ul className="list-disc list-inside text-[15px] leading-[26px] font-normal h-[80px]">
                    <li>{t("oversea.commonError.card1.desc.line1")}</li>
                    <li>{t("oversea.commonError.card1.desc.line2")}</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 h-[469px] flex flex-col ">
                <p className="text-[28px] leading-[40px] text-center pb-[20px]">After</p>
                <div className="bg-white flex flex-col flex-1 border border-[#CACACA] py-[30px] px-[20px] justify-between">
                  <h4 className="text-[28px] leading-[40px] text-center">
                    {t("oversea.commonError.card2.title")}
                  </h4>
                  <img src={IllustAfter} alt="" className="h-[200px]" />
                  <ul className="list-disc list-inside text-[15px] leading-[26px] font-normal h-[80px]">
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
