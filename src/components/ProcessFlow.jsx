import { ArrowDown } from "../icons/ArrowDown";


const ProcessFlow = ({ title, steps }) => {
  return (
    <div className="flex flex-col items-center gap-[20px] h-[490px]">
      <h2 className="text-[24px] leading-[52px] h-[52px] w-[240px] text-white bg-[#004B83] rounded-[10px] text-center">
        {title}
      </h2>
      {steps.map((step, index) => (
        <div key={index} className="w-full flex flex-col items-center gap-[20px]">
          <div className="bg-white rounded-[10px] flex items-center text-[24px] leading-[35px] w-full h-[100px] px-[20px]">
            {Array.isArray(step) ? (
              <div className="flex flex-col w-full">
                {step.map((line, i) => (
                  <div key={i} className="truncate">{line}</div>
                ))}
              </div>
            ) : (
              <div className="truncate w-full">{step}</div>
            )}
          </div>
          {index < steps.length - 1 && <ArrowDown />}
        </div>
      ))}
    </div>
  );
};

const StepNumbers = ({ count }) => {
  return (
    <div className="flex flex-col items-center gap-[58.91px] px-[22px] mt-[72px]">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="flex items-center justify-center h-[100px]">
          <div className="text-[37px] bg-[#0DB3DB] font-extrabold flex items-center justify-center text-white rounded-full w-[60px] h-[60px]">
            {i + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

const ProcessContainer = ({ leftSteps, rightSteps }) => {
  return (
    <div className="flex">
      <ProcessFlow {...leftSteps} />
      <StepNumbers count={Math.max(leftSteps.steps.length, rightSteps.steps.length)} />
      <ProcessFlow {...rightSteps} />
    </div>
  );
};

export default ProcessContainer; 

const MobileProcess = ({ title, steps }) => {
  return (
    <div className="flex flex-col items-center gap-[20px]">
      <h2 className="text-[19.2px] leading-[43px] h-[43px] w-[176px] text-white bg-[#004B83] rounded-[10px] text-center">
        {title}
      </h2>
      {steps.map((step, index) => (
        <div key={index} className="w-full flex flex-col items-center">
          <div className="relative flex w-full items-center gap-[15px]">
            <div className="absolute text-[37px] bg-[#0DB3DB] font-extrabold flex items-center justify-center text-white rounded-full w-[60px] h-[60px] flex-shrink-0">
              {index + 1}
            </div>
            <div className="bg-white rounded-[10px] flex items-center text-[24px] leading-[35px] w-full h-[80px] px-[20px] ml-[30px]">
              {Array.isArray(step) ? (
                <div className="flex flex-col w-full">
                  {step.map((line, i) => (
                    <>
                      <span key={i} className="text-[19.2px] leading-[33px] ml-[22px] whitespace-nowrap">
                        {line}
                      </span>
                    </>
                  ))}
                </div>
              ) : (
                <div className="text-[19.2px] leading-[33px] ml-[22px] w-full">{step}</div>
              )}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="my-[20px]">
              <ArrowDown />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const MobileProcessContainer = ({ leftSteps, rightSteps }) => {
  return (
    <div className="flex flex-col gap-[40px] w-full">
      <div className="flex flex-col items-center">
        <div className="w-full">
          <MobileProcess {...leftSteps} />
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="w-full">
          <MobileProcess {...rightSteps} />
        </div>
      </div>
    </div>
  );
};
