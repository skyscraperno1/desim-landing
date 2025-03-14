import { TitleDot } from "./TitleDot";
import { useTranslation } from "react-i18next";
import PurchaseProduct from '../assets/imgs/purchase-product.png'
import PurchaseGirl from '../assets/imgs/purchase-girl.png'
import { Button } from "./Button";
import PurchasePhone from '../assets/imgs/purchase-phone.png'
import ProcessContainer from './ProcessFlow';
import { MobileProcessContainer } from './ProcessFlow';

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
    <div className="relative lg:-translate-y-[402px] -translate-y-[290px] w-full">
      <img src={PurchasePhone} alt="purchase-phone" className="absolute lg:w-[214px] w-[102px] lg:right-[290px] right-[1px] lg:-top-[130px] -top-[40px] z-20" />
      <div className="relative bg-[#E6F6FF] flex flex-col items-center  pt-[115px] lg:px-[250px] px-[10px] gap-[35px] clip-path-ellipse-top w-full"
      >
        <TitleDot>
          {t('purchase.title')}
        </TitleDot>
        <div className="hidden lg:block">
          <ProcessContainer leftSteps={amazonSteps} rightSteps={officialSteps} />
        </div>
        <div className="block lg:hidden">
          <MobileProcessContainer leftSteps={amazonSteps} rightSteps={officialSteps} />
        </div>
        <div className="border-[5px] border-[#0DB3DB] rounded-[30px] w-full bg-white mt-[20px] lg:px-[30px] lg:py-[30px] px-[15px] py-[35px] flex lg:flex-row flex-col gap-[30px] items-center justify-center max-w-[870px]">
          <img src={PurchaseProduct} alt="purchase-product" className="w-[200px] h-[200px]" />
          <div className="lg:w-auto w-full">
            <h2 className="lg:text-[24px] text-[19.2px] leading-[35px] w-full text-start">
              {t('purchase.product.title')}
            </h2>
            <p className="lg:text-[15px] text-[12px] lg:leading-[26px] leading-[21px] mt-[20px]">
              {t('purchase.product.desc')}
            </p>
          </div>
        </div>
        {/* 底部内容 */}
        <h3 className="lg:text-[24px] text-[19.2px] lg:leading-[42px] leading-[33px] font-normal text-center">
          {t('purchase.bottom.title')}
        </h3>
        <div className="flex lg:flex-row flex-col gap-[30px] max-h-[80px] mb-[125px] relative lg:w-auto w-full">
          <Button className="lg:!text-[40px] !text-[32px] lg:w-[420px] !px-0 w-full"  
            onClick={() => window.open(t('purchase.bottom.button1Url'), '_blank')}
          >{t('purchase.bottom.button1')}</Button>
          <Button className="lg:!text-[40px] !text-[32px] lg:w-[420px] !px-0 w-full"
            onClick={() => window.open(t('purchase.bottom.button2Url'), '_blank')}
          >{t('purchase.bottom.button2')}</Button>
          <img src={PurchaseGirl} alt="purchase-girl" className="lg:block hidden absolute w-[194px] h-[232px] -bottom-[30px] -left-[150px] -z-10" />
        </div>
      </div>
    </div>
  )
}