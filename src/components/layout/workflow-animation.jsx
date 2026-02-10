import logo from "../../assets/logo.svg";
import businessIcon from "../../assets/busines.svg";
import settingIcon from "../../assets/setting.svg";
import arrowIcon from "../../assets/Arrow.svg";

const WorkflowAnimation = () => {
  return (
    <div className="relative">
      <div className="grid items-center gap-6 lg:grid-cols-[220px_430px_220px] lg:justify-between">
        <article className="z-10 flex min-h-[200px] items-center justify-center rounded-[24px] border border-[#9eabb6] bg-[linear-gradient(145deg,#ceced1_0%,#d9dadd_52%,#c8c8ca_100%)] px-6 py-8 text-center text-[#586673] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
          <img alt="Your business" className="h-[96px] w-[96px] object-contain opacity-90" src={businessIcon} />
        </article>

        <div className="relative z-10 mx-auto flex w-full max-w-[430px] flex-col gap-6">
          <button
            className="workflow-vibrate h-[74px] w-full rounded-[20px] border border-[#9eaab5] bg-[linear-gradient(145deg,#6f7f8d_0%,#4d5d6b_48%,#384754_100%)] px-6 text-[24px] font-medium text-white shadow-[0_0_0_4px_rgba(217,225,231,0.8),0_0_0_8px_rgba(157,169,179,0.45)]"
            type="button"
          >
            <span className="inline-flex items-center gap-2">
              <img alt="" aria-hidden="true" className="workflow-gear-spin h-6 w-6" src={settingIcon} />
              Work Process
            </span>
          </button>

          <button
            className="workflow-vibrate h-[74px] w-full rounded-[20px] border border-[#9eaab5] bg-[linear-gradient(145deg,#70808e_0%,#4d5d6b_48%,#384754_100%)] px-6 text-[24px] font-medium text-white shadow-[0_0_0_4px_rgba(217,225,231,0.8),0_0_0_8px_rgba(157,169,179,0.45)]"
            type="button"
          >
            Impact & Results
          </button>
        </div>

        <article className="z-10 flex min-h-[200px] items-center justify-center rounded-[24px] border border-[#577085] bg-[linear-gradient(120deg,#122434_0%,#173447_48%,#426885_100%)] px-6 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
          <img alt="Hirex" className="h-16 w-auto" src={logo} />
        </article>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-[13%] top-1/2 hidden h-[240px] -translate-y-1/2 lg:block">
        <div className="absolute left-0 top-[30px] h-[92px] w-[34%] rounded-[999px] border-2 border-dashed border-[#8d9dac] border-r-0" />
        <div className="absolute left-0 bottom-[30px] h-[92px] w-[34%] rounded-[999px] border-2 border-dashed border-[#8d9dac] border-r-0" />

        <div className="absolute right-0 top-[30px] h-[92px] w-[34%] rounded-[999px] border-2 border-dashed border-[#8d9dac] border-l-0" />
        <div className="absolute right-0 bottom-[30px] h-[92px] w-[34%] rounded-[999px] border-2 border-dashed border-[#8d9dac] border-l-0" />

        <img alt="" className="absolute left-[30.5%] top-[46px] h-8 w-8 rotate-180 opacity-90" src={arrowIcon} />
        <img alt="" className="absolute left-[30.5%] bottom-[46px] h-8 w-8 rotate-180 opacity-90" src={arrowIcon} />
        <img alt="" className="absolute right-[30.5%] top-[46px] h-8 w-8 opacity-90" src={arrowIcon} />
        <img alt="" className="absolute right-[30.5%] bottom-[46px] h-8 w-8 opacity-90" src={arrowIcon} />
      </div>
    </div>
  );
};

export default WorkflowAnimation;
