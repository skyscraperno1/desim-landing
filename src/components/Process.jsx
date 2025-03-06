import { TitleDot } from "./TitleDot";
import { useTranslation } from "react-i18next";
import ProcessContainer from './ProcessFlow';
import ServiceImg from '../assets/imgs/service-img.png'

export const Process = () => {
  const { t } = useTranslation();

  const amazonSteps = {
    title: t('process.amazon.title'),
    steps: [
      t('process.amazon.step1'),
      t('process.amazon.step2'),
      t('process.amazon.step3'),
      [
        t('process.amazon.step4.0'),
        t('process.amazon.step4.1')
      ]
    ]
  };

  const officialSteps = {
    title: t('process.official.title'),
    steps: [
      t('process.official.step1'),
      t('process.official.step2'),
      t('process.official.step3'),
      [
        t('process.official.step4.0'),
        t('process.official.step4.1')
      ]
    ]
  };

  return (
    <div className="w-full flex flex-col gap-[35px] items-center -translate-y-[650px] pt-[300px] pb-[100px] bg-[#E6F6FF] px-[250px] relative">
      <img src={ServiceImg} className="absolute top-[150px] left-[150px] w-[254px] z-20" />
      <TitleDot>
        {t('process.title')}
      </TitleDot>
      <ProcessContainer leftSteps={amazonSteps} rightSteps={officialSteps} />
    </div>
  )
}

export default Process;
