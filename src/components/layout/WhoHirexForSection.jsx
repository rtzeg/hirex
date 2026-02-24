import lines from "../../assets/lines.png";

import icon1 from "../../assets/01.png";
import icon2 from "../../assets/02.png";
import icon3 from "../../assets/03.png";
import icon4 from "../../assets/04.png";
import icon5 from "../../assets/05.png";

const CALENDLY_URL = "https://calendly.com/asad-hirx/30min";

const cards = [
  {
    title: "Customer Support",
    text:
      "We optimize shipment tracking, assist with route planning, and manage customer communications — reducing delays and boosting satisfaction levels.",
    icon: icon4
  },
  {
    title: "Data Entry & Data Processing",
    text:
      "We handle the logistics of shipping goods internationally, coordinating between multiple carriers to ensure timely deliveries and adherence to customs regulations.",
    icon: icon2
  },
  {
    title: "Sales",
    text:
      "Our facilities offer secure storage options with inventory management systems, allowing businesses to streamline their supply chain and reduce overhead costs.",
    icon: icon3
  },
  {
    title: "Accounting & Bookkeeping",
    text:
      "We specialize in the final leg of the delivery process, focusing on speed and efficiency to enhance customer experience with timely and reliable deliveries.",
    icon: icon5
  },
  {
    title: "Supply Chain Consulting",
    text:
      "We provide expert analysis and strategic recommendations to optimize your supply chain operations, focusing on cost reduction and efficiency improvements.",
    icon: icon1,
    isWide: true,
    cta: true
  }
];

const WhoHirexFor = () => {
  return (
    <section className="bg-transparent">
      <div className="mx-auto w-[100%] max-w-[1920px] px-6 pb-24">
        <div className="relative overflow-hidden rounded-[28px] shadow-[0_25px_120px_rgba(0,0,0,0.55)]">
          {/* ✅ ВАЖНО: фоновые слои НЕ ловят клики */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(110% 140% at 50% 65%, #4E7F99 0%, #2B4A5E 38%, #15222B 68%, #050A0E 100%)"
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage: `url(${lines})`,
              backgroundRepeat: "repeat",
              backgroundSize: "auto"
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.06) 55%, rgba(0,0,0,0.22) 100%)"
            }}
          />

          {/* ✅ Контент поверх */}
          <div className="relative z-10 px-8 py-16 max-[1200px]:px-6 max-[1200px]:py-12 text-white">
            {/* Заголовки */}
            <div className="mx-auto max-w-[980px] text-center">
              <p className="text-[18px]/[1.2] text-white/55 max-[1200px]:text-[16px]">
                Who Hirex Is For?
              </p>

              <h2 className="mt-6 text-[64px]/[1.02] font-semibold tracking-[-0.03em] text-white/90 max-[1600px]:text-[56px] max-[1200px]:text-[44px] max-[700px]:text-[36px]">
                Flexible Support
                <br />
                Built to Your Model
              </h2>

              <p className="mx-auto mt-6 max-w-[780px] text-[18px]/[1.6] text-white/70 max-[1200px]:text-[16px]">
                Hirex is designed for companies across various industries that need a reliable,
                ready-to-work team for customer support, call centers, and operational efficiency.
              </p>
            </div>

            {/* Карточки */}
            <div className="mt-12 grid grid-cols-12 gap-6 max-[1200px]:gap-5">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className={[
                    "relative overflow-hidden rounded-[22px] border border-white/30",
                    "bg-white/5 shadow-[0_22px_70px_rgba(0,0,0,0.35)] backdrop-blur-[10px]",
                    "p-7 max-[1200px]:p-6",
                    "flex flex-col",
                    c.isWide ? "col-span-12 xl:col-span-8" : "col-span-12 md:col-span-6 xl:col-span-4"
                  ].join(" ")}
                >
                  {/* ✅ Внутренний подсвет НЕ ловит клики */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-70"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.00) 55%)"
                    }}
                  />

                  <div className="relative z-10">
                    <div className="mb-5 h-[46px] w-[46px]">
                      <img
                        src={c.icon}
                        alt=""
                        draggable="false"
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <h3 className="text-[34px]/[1.06] font-semibold tracking-[-0.02em] text-white/92 max-[1200px]:text-[30px]">
                      {c.title}
                    </h3>

                    <p className="mt-4 text-[16px]/[1.7] text-white/65 max-[1200px]:text-[15px]">
                      {c.text}
                    </p>
                  </div>

                  {/* ✅ CTA снизу справа */}
                  {c.cta ? (
                    <div className="relative z-10 mt-auto pt-8 flex items-end justify-end max-[700px]:justify-start">
                      <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pointer-events-auto inline-flex items-center justify-center gap-3 rounded-[16px] border border-white/35 bg-white/10 px-8 py-4 text-[18px]/[1] text-white/85 backdrop-blur transition hover:bg-white/15"
                      >
                        <span>Book a demo</span>
                        <span className="text-white/75">→</span>
                      </a>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="h-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoHirexFor;