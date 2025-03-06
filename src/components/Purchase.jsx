import { TitleDot } from "./TitleDot";
import { useTranslation } from "react-i18next";
import PurchaseProduct from '../assets/imgs/purchase-product.png'
import PurchaseGirl from '../assets/imgs/purchase-girl.png'
import { Button } from "./Button";
import PurchasePhone from '../assets/imgs/purchase-phone.png'
import ProcessContainer from './ProcessFlow';

export const Purchase = () => {
  const { t } = useTranslation();

  const amazonSteps = {
    title: t('purchase.amazon.title'),
    steps: [
      t('purchase.amazon.step1'),
      t('purchase.amazon.step2'),
      t('purchase.amazon.step3')
    ]
  };

  const officialSteps = {
    title: t('purchase.official.title'),
    steps: [
      t('purchase.official.step1'),
      t('purchase.official.step2'),
      t('purchase.official.step3')
    ]
  };

  return (
    <div className="relative -translate-y-[465px]">
      <img src={PurchasePhone} alt="purchase-phone" className="absolute w-[214px] h-[294px] right-[290px] -top-[130px] z-20" />
      <div className="relative bg-[#E6F6FF] w-full flex flex-col items-center  pt-[115px] px-[250px] gap-[35px]"
        style={{ clipPath: "ellipse(123% 100% at 50% 100%)" }}
      >
        <TitleDot>
          {t('purchase.title')}
        </TitleDot>
        <ProcessContainer leftSteps={amazonSteps} rightSteps={officialSteps} />
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