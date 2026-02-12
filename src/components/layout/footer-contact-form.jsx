const FooterContactForm = () => {
  return (
    <section className="relative z-20 mx-auto w-[78.2%] max-w-[1501px] rounded-[34px] bg-[#d8e0e7] p-8 text-[#33556d] md:px-14 md:py-12 max-[1200px]:w-full">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
        <div className="flex flex-col justify-between gap-8">
          <h2 className="max-w-[440px] text-[52px]/[0.95] font-semibold max-md:text-[40px]/[1]">
            Ready to Hire Excellence?
          </h2>
          <p className="max-w-[480px] text-body-2 text-[#33556d] max-md:text-[34px]/[1.08]">
            Our specialist will review your request and contact to you shortly.
          </p>
        </div>

        <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
          <input className="h-14 w-full rounded-[16px] border-0 bg-white/70 px-5 text-[28px] text-[#33556d] placeholder:text-[#33556d]/50 focus:outline-none" placeholder="Full Name" type="text" />
          <input className="h-14 w-full rounded-[16px] border-0 bg-white/70 px-5 text-[28px] text-[#33556d] placeholder:text-[#33556d]/50 focus:outline-none" placeholder="Phone number" type="tel" />
          <input className="h-14 w-full rounded-[16px] border-0 bg-white/70 px-5 text-[28px] text-[#33556d] placeholder:text-[#33556d]/50 focus:outline-none" placeholder="Email adress" type="email" />
          <input className="h-14 w-full rounded-[16px] border-0 bg-white/70 px-5 text-[28px] text-[#33556d] placeholder:text-[#33556d]/50 focus:outline-none" placeholder="Comments" type="text" />
          <button className="h-14 w-full rounded-[16px] bg-[#33556d] text-[28px] font-medium text-white transition-colors duration-300 hover:bg-[#28485f]" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default FooterContactForm;
