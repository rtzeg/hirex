import WorkflowAnimation from "./workflow-animation.jsx";

const AboutWorkflowSection = () => {
  return (
    <section className="mx-auto w-[93.95%] max-w-[1804px] rounded-[34px] bg-[#d9e1e7] px-6 py-8 text-[#111922] md:px-10 md:py-10">
      <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
        <p className="text-[20px]/[1.2] text-[#73869A] md:text-[24px]">About Us</p>

        <div>
          <h2 className="text-[56px]/[0.95] font-semibold tracking-[-0.01em] md:text-[84px]/[0.92]">Our Mission</h2>

          <p className="mt-4 max-w-[1150px] text-[34px]/[1.2] text-[#475766] md:text-[50px]/[1.12]">
            Our mission is to help businesses scale by supplying trained remote staff who can start
            delivering from day one. From chats and calls to finance and CRM work, we take care of
            the daily tasks that keep companies running.
          </p>

          <div className="mt-7 grid gap-6 md:grid-cols-2">
            <p className="max-w-[520px] text-[27px]/[1.25] text-[#566675] md:text-[39px]/[1.24]">
              We don’t just send you candidates — we provide pre-trained specialists who already
              know how to perform.
            </p>
            <p className="max-w-[520px] text-[27px]/[1.25] text-[#566675] md:text-[39px]/[1.24]">
              You get a reliable team that steps in fast, saves you time, and helps your business
              run better every day.
            </p>
          </div>

          <button
            className="mt-7 inline-flex min-h-[68px] items-center gap-2 rounded-[20px] border border-[#1a2630] px-8 text-[36px]/[1.1] text-[#1a2630] transition-all duration-300 hover:bg-[#111922] hover:text-white active:scale-[0.98] md:min-h-[74px] md:px-10 md:text-[40px]"
            type="button"
          >
            <span>Our Story</span>
            <svg
              aria-hidden="true"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12H20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
              />
              <path
                d="M14 6L20 12L14 18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[300px_1fr]">
        <p className="text-[20px]/[1.2] text-[#73869A] md:text-[24px]">Workflow Process</p>

        <div>
          <h2 className="text-[56px]/[0.95] font-semibold tracking-[-0.01em] md:text-[84px]/[0.92]">
            Revolutionizing Your
            <br />
            Business Workflow
          </h2>

          <p className="mt-4 max-w-[1150px] text-[34px]/[1.2] text-[#475766] md:text-[50px]/[1.12]">
            At Hirex, we transform your operational processes by seamlessly integrating our expert
            outsourcing services, resulting in greater efficiency, lower costs, and superior
            outcomes.
          </p>
        </div>
      </div>

      <div className="mt-4 lg:mt-2">
        <WorkflowAnimation />
      </div>
    </section>
  );
};

export default AboutWorkflowSection;
