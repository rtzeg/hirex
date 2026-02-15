// src/components/sections/WhoHirexFor.jsx
import { Link } from "react-router-dom";
import lines from "../../assets/lines.png";

// Иконки можешь заменить на свои.
// Я оставил твои 01..05.png, чтобы ничего лишнего не придумывать.
import icon1 from "../../assets/01.png";
import icon2 from "../../assets/02.png";
import icon3 from "../../assets/03.png";
import icon4 from "../../assets/04.png";
import icon5 from "../../assets/05.png";

const cards = [
  {
    title: "Customer Support",
    text:
      "We optimize shipment tracking, assist with route planning, and manage customer communications — reducing delays and boosting satisfaction levels.",
    icon: icon4,
    span: "xl:col-span-1"
  },
  {
    title: "Data Entry & Data Processing",
    text:
      "We handle the logistics of shipping goods internationally, coordinating between multiple carriers to ensure timely deliveries and adherence to customs regulations.",
    icon: icon3,
    span: "xl:col-span-1"
  },
  {
    title: "Sales",
    text:
      "Our facilities offer secure storage options with inventory management systems, allowing businesses to streamline their supply chain and reduce overhead costs.",
    icon: icon5,
    span: "xl:col-span-1"
  },
  {
    title: "Accounting & Bookkeeping",
    text:
      "We specialize in the final leg of the delivery process, focusing on speed and efficiency to enhance customer experience with timely and reliable deliveries.",
    icon: icon2,
    span: "xl:col-span-1"
  },
  {
    title: "Supply Chain Consulting",
    text:
      "We provide expert analysis and strategic recommendations to optimize your supply chain operations, focusing on cost reduction and efficiency improvements.",
    icon: icon1,
    span: "xl:col-span-2"
  }
];

const WhoHirexFor = () => {
  return (
    <section className="relative mx-auto w-[100%] max-w-[1920px] px-6 pb-24">
      <div className="relative overflow-hidden rounded-[28px] shadow-[0_25px_120px_rgba(0,0,0,0.55)]">
        {/* BASE GRADIENT (без Union.png) */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(110% 140% at 50% 65%, #4E7F99 0%, #2B4A5E 38%, #15222B 68%, #050A0E 100%)"
          }}
        />

        {/* lines.png поверх */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `url(${lines})`,
            backgroundRepeat: "repeat",
            backgroundSize: "auto"
          }}
        />

        {/* читабельность/виньетка */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.06) 55%, rgba(0,0,0,0.22) 100%)"
          }}
        />

        {/* CONTENT */}
        <div className="relative px-6 pb-10 pt-20 text-white max-[1200px]:pt-16">
          <p className="text-center text-[18px]/[1.2] text-white/55 max-[1200px]:text-[16px]">
            Who Hirex Is For?
          </p>

          <h2 className="mx-auto mt-5 max-w-[980px] text-center text-[64px]/[1.02] font-semibold tracking-[-0.03em] max-[1600px]:text-[56px] max-[1200px]:text-[44px] max-[700px]:text-[36px]">
            Flexible Support <br /> Built to Your Model
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-center text-[18px]/[1.6] text-white/70 max-[1200px]:text-[16px]">
            Hirex is designed for companies across various industries that need a reliable,
            ready-to-work team for customer support, call centers, and operational efficiency.
          </p>

          {/* GRID: 3 сверху, 2 снизу (вторая снизу широкая) */}
          <div className="mx-auto mt-12 grid max-w-[1500px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((c) => (
              <div
                key={c.title}
                className={[
                  "relative overflow-hidden rounded-[22px] border border-white/35",
                  "bg-white/5 shadow-[0_22px_70px_rgba(0,0,0,0.35)]",
                  "p-7 backdrop-blur-[10px] max-[700px]:p-6",
                  c.span,
                  // на md (2 колонки) широкая карточка должна занять всю строку
                  c.title === "Supply Chain Consulting" ? "md:col-span-2" : ""
                ].join(" ")}
              >
                {/* легкий внутренний градиент */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-70"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.00) 55%)"
                  }}
                />

                <div className="relative">
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

                  {/* CTA только на широкой карточке */}
                  {c.title === "Supply Chain Consulting" && (
                    <div className="mt-7 flex items-center justify-end max-[700px]:justify-start">
                      <Link
                        to="/"
                        className="inline-flex items-center gap-3 rounded-[16px] border border-white/35 bg-white/10 px-6 py-3 text-[18px]/[1] text-white/85 backdrop-blur transition hover:bg-white/15"
                      >
                        <span>Book a demo</span>
                        <span className="text-white/75">→</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="h-6" />
        </div>
      </div>
    </section>
  );
};

export default WhoHirexFor;
