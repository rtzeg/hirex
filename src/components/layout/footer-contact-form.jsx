import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_wj297kf";          // ✅ у тебя уже есть
const TEMPLATE_ID = "template_9mcc2lg";          // 👈 вставь из EmailJS Templates
const PUBLIC_KEY = "ljduuQlKM3W6vUtcu";     // 👈 EmailJS → Account → API Keys

const FooterContactForm = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formRef.current) return;

    setStatus({ type: "loading", text: "Sending…" });

    try {
      // ✅ sendForm читает значения по name="" из инпутов
      const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      if (res.status !== 200) throw new Error("EmailJS failed");

      setStatus({ type: "ok", text: "Sent ✅" });
      formRef.current.reset();

      setTimeout(() => setStatus({ type: "idle", text: "" }), 3000);
    } catch (e) {
      console.error(e);
      setStatus({ type: "err", text: "Error. Try again." });
    }
  };

  return (
    <section className="relative z-20 mx-auto w-[78.2%] max-w-[1501px] rounded-[34px] bg-[#d8e0e7] p-8 text-[#33556d] max-[1604px]:w-full max-[1604px]:rounded-[30px] max-[1604px]:px-8 max-[1604px]:py-9 md:px-14 md:py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12 max-[1604px]:gap-6">
        <div className="flex flex-col justify-between gap-8 max-[1604px]:gap-6">
          <h2 className="max-w-[440px] text-[52px]/[0.95] font-semibold max-[1604px]:max-w-[420px] max-[1604px]:text-[44px]/[1] max-md:text-[36px]/[1.05]">
            Ready to Hire Excellence?
          </h2>
          <p className="max-w-[480px] text-body-2 text-[#33556d] max-[1604px]:text-[26px]/[1.12] max-md:text-[22px]/[1.2]">
            Our specialist will review your request and contact to shortly.
          </p>
        </div>

        <form
          ref={formRef}
          className="space-y-4 max-[1604px]:space-y-3"
          onSubmit={handleSubmit}
        >
          {/* IMPORTANT:
             Эти name="" должны совпадать с переменными в EmailJS Template:
             {{name}}, {{phone}}, {{email}}, {{comments}}
          */}
          <input
            name="name"
            className="h-14 w-full rounded-[16px] border-0 bg-white/70 px-5 text-[28px] text-[#33556d] placeholder:text-[#33556d]/50 focus:outline-none max-[1604px]:h-12 max-[1604px]:text-[22px] max-md:text-[18px]"
            placeholder="Full Name"
            type="text"
            required
          />
          <input
            name="phone"
            className="h-14 w-full rounded-[16px] border-0 bg-white/70 px-5 text-[28px] text-[#33556d] placeholder:text-[#33556d]/50 focus:outline-none max-[1604px]:h-12 max-[1604px]:text-[22px] max-md:text-[18px]"
            placeholder="Phone number"
            type="tel"
            required
          />
          <input
            name="email"
            className="h-14 w-full rounded-[16px] border-0 bg-white/70 px-5 text-[28px] text-[#33556d] placeholder:text-[#33556d]/50 focus:outline-none max-[1604px]:h-12 max-[1604px]:text-[22px] max-md:text-[18px]"
            placeholder="Email address"
            type="email"
            required
          />
          <input
            name="comments"
            className="h-14 w-full rounded-[16px] border-0 bg-white/70 px-5 text-[28px] text-[#33556d] placeholder:text-[#33556d]/50 focus:outline-none max-[1604px]:h-12 max-[1604px]:text-[22px] max-md:text-[18px]"
            placeholder="Comments"
            type="text"
          />

          {/* Простая анти-спам ловушка */}
          <input name="website" className="hidden" tabIndex="-1" autoComplete="off" />

          <button
            className="h-14 w-full rounded-[16px] bg-[#33556d] text-[28px] font-medium text-white transition-colors duration-300 hover:bg-[#28485f] max-[1604px]:h-12 max-[1604px]:text-[22px] max-md:text-[18px] disabled:opacity-70"
            type="submit"
            disabled={status.type === "loading"}
          >
            {status.type === "loading" ? "Submitting…" : "Submit"}
          </button>

          {status.type !== "idle" ? (
            <div
              className={`text-[16px] max-[1604px]:text-[14px] ${
                status.type === "ok"
                  ? "text-green-700"
                  : status.type === "err"
                  ? "text-red-700"
                  : "text-[#33556d]"
              }`}
            >
              {status.text}
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default FooterContactForm;