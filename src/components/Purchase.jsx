import { TitleDot } from "./TitleDot";
import { useTranslation } from "react-i18next";
import { ArrowDown } from "../icons/ArrowDown";
import PurchaseProduct from '../assets/imgs/purchase-product.png'
import PurchaseGirl from '../assets/imgs/purchase-girl.png'
import { Button } from "./Button";
import PurchasePhone from '../assets/imgs/purchase-phone.png'
export const Purchase = () => {
  const { t } = useTranslation();
  return (
    <div className="relative -translate-y-[465px]">
      <img src={PurchasePhone} alt="purchase-phone" className="absolute w-[214px] h-[294px] right-[290px] -top-[130px] z-20" />
      <div className="relative bg-[#E6F6FF] w-full flex flex-col items-center  pt-[115px] px-[250px] gap-[35px]"
        style={{ clipPath: "ellipse(123% 100% at 50% 100%)" }}
      >
        <TitleDot>
          {t('purchase.title')}
        </TitleDot>
        <div className="flex">
          {/* Amazon */}
          <div className="flex flex-col items-center gap-[20px] h-[490px]">
            <h2 className="text-[24px] leading-[52px] h-[52px] w-[240px] text-white bg-[#004B83] rounded-[10px] text-center">
              {t('purchase.amazon.title')}
            </h2>
            <div className="bg-white rounded-[10px] flex items-center text-[24px] w-full h-[100px] px-[20px]">
              {t('purchase.amazon.step1')}
            </div>
            <ArrowDown />
            <div className="bg-white rounded-[10px] flex items-center text-[24px]  w-full h-[100px] px-[20px]">
              {t('purchase.amazon.step2')}
            </div>
            <ArrowDown />
            <div className="bg-white rounded-[10px] flex items-center text-[24px] w-full h-[100px] px-[20px]">
              {t('purchase.amazon.step3')}
            </div>
          </div>
          {/* step */}
          <div className="flex flex-col items-center gap-[58.91px] px-[22px] mt-[72px]">

            <div className="text-[37px] bg-[#0DB3DB] font-extrabold flex items-center justify-center text-white rounded-full  w-[60px] h-[60px] my-[20px]">
              1
            </div>
            <div className="text-[37px] bg-[#0DB3DB] font-extrabold flex items-center justify-center text-white rounded-full  w-[60px] h-[60px] my-[20px]">
              2
            </div>
            <div className="text-[37px] bg-[#0DB3DB] font-extrabold flex items-center justify-center text-white rounded-full  w-[60px] h-[60px] my-[20px]">
              3
            </div>
          </div>
          {/* 官网 */}
          <div className="flex flex-col items-center gap-[20px] h-[490px]">
            <h2 className="text-[24px] leading-[52px] h-[52px] w-[240px] text-white bg-[#004B83] rounded-[10px] text-center">
              {t('purchase.official.title')}
            </h2>
            <div className="bg-white rounded-[10px] flex items-center text-[24px] w-full h-[100px] px-[20px]">
              {t('purchase.official.step1')}
            </div>
            <ArrowDown />
            <div className="bg-white rounded-[10px] flex items-center text-[24px] w-full h-[100px] px-[20px]">
              {t('purchase.official.step2')}
            </div>
            <ArrowDown />
            <div className="bg-white rounded-[10px] flex items-center text-[24px] w-full h-[100px] px-[20px]">
              {t('purchase.official.step3')}
            </div>
          </div>
        </div>
        <div className="border-[5px] border-[#0DB3DB] rounded-[30px] w-full bg-white my-[35px] mx-[85px] p-[30px] flex items-center justify-center max-w-[870px]">
          <img src={PurchaseProduct} alt="purchase-product" className="w-[200px] h-[200px] mr-[30px]" />
          <div>
            <h2 className="text-[24px] leading-[35px]">
              {t('purchase.product.title')}
            </h2>
            <p className="text-[15px] leading-[26px] mt-[20px]">
              {t('purchase.product.desc')}
            </p>
          </div>
        </div>
        {/* 底部内容 */}
        <h3 className="text-[24px] font-normal">
          {t('purchase.bottom.title')}
        </h3>
        <div className="flex gap-[30px] max-h-[80px] mb-[125px] relative">
          <Button className="!text-[40px] !px-0 w-[420px]">{t('purchase.bottom.button1')}</Button>
          <Button className="!text-[40px] !px-0 w-[420px]">{t('purchase.bottom.button2')}</Button>
          <img src={PurchaseGirl} alt="purchase-girl" className="absolute w-[194px] h-[232px] -bottom-[30px] -left-[150px] -z-10" />
        </div>
      </div>
    </div>

  )
}
