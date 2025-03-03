import { useTranslation, Trans } from "react-i18next";
import { TitleDot } from "./TitleDot";
export const Service = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#FFD757] w-full h-[200px] flex flex-col items-center -translate-y-[323px]">
      <TitleDot>
        {t('service.title')}
      </TitleDot>
    </div>
  )
}