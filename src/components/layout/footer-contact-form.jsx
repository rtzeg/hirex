const FooterContactForm = () => {
  return (
    <section className="relative z-20 mx-auto w-[78.2%] max-w-[1501px] rounded-[34px] bg-[#d8e0e7] p-8 text-[#33556d] max-[1604px]:w-full max-[1604px]:rounded-[30px] max-[1604px]:px-8 max-[1604px]:py-9 md:px-14 md:py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12 max-[1604px]:gap-6">
        <div className="flex flex-col justify-between gap-8 max-[1604px]:gap-6">
          <h2 className="max-w-[440px] text-[52px]/[0.95] font-semibold max-[1604px]:max-w-[420px] max-[1604px]:text-[44px]/[1] max-md:text-[36px]/[1.05]">
            Ready to Hire Excellence?
          </h2>
          <p className="max-w-[480px] text-body-2 text-[#33556d] max-[1604px]:text-[26px]/[1.12] max-md:text-[22px]/[1.2]">
            Our specialist will review your request and contact to you shortly.
          </p>
        </div>

        <form className="space-y-4 max-[1604px]:space-y-3" onSubmit={(event) => event.preventDefault()}>
          <input className="h-14 w-full rounded-[16px] border-0 bg-white/70 px-5 text-[28px] text-[#33556d] placeholder:text-[#33556d]/50 focus:outline-none max-[1604px]:h-12 max-[1604px]:text-[22px] max-md:text-[18px]" placeholder="Full Name" type="text" />
          <input className="h-14 w-full rounded-[16px] border-0 bg-white/70 px-5 text-[28px] text-[#33556d] placeholder:text-[#33556d]/50 focus:outline-none max-[1604px]:h-12 max-[1604px]:text-[22px] max-md:text-[18px]" placeholder="Phone number" type="tel" />
          <input className="h-14 w-full rounded-[16px] border-0 bg-white/70 px-5 text-[28px] text-[#33556d] placeholder:text-[#33556d]/50 focus:outline-none max-[1604px]:h-12 max-[1604px]:text-[22px] max-md:text-[18px]" placeholder="Email adress" type="email" />
          <input className="h-14 w-full rounded-[16px] border-0 bg-white/70 px-5 text-[28px] text-[#33556d] placeholder:text-[#33556d]/50 focus:outline-none max-[1604px]:h-12 max-[1604px]:text-[22px] max-md:text-[18px]" placeholder="Comments" type="text" />
          <button className="h-14 w-full rounded-[16px] bg-[#33556d] text-[28px] font-medium text-white transition-colors duration-300 hover:bg-[#28485f] max-[1604px]:h-12 max-[1604px]:text-[22px] max-md:text-[18px]" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default FooterContactForm;