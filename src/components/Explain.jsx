import { useTranslation, Trans } from 'react-i18next';
// font-family: M PLUS 1;
// font-weight: 700;
// font-size: 40px;
// line-height: 40px;
// letter-spacing: 0%;
// text-align: center;

const DotLine = ({ count }) => {
  return (
    <div className="flex gap-[17px]">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="w-[6px] h-[6px] bg-[#C69C6D] rounded-full"></div>
      ))}
    </div>
  );
};

export const Explain = () => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center h-[970px] gap-[40px]">
      <div className="flex flex-col py-auto gap-[35px]">
      <h2 className="text-[40px] leading-[40px] font-bold">{ t('explain.title') }</h2>
      <DotLine count={17} />
      </div>
    
    </div>
  )
}