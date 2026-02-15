// src/pages/Industries.jsx
import { Link } from "react-router-dom";
import WhoHirexForSection from "../components/layout/WhoHirexForSection";

import collage1 from "../assets/comp.png";
import collage2 from "../assets/build.png";

import icon1 from "../assets/01.png";
import icon2 from "../assets/02.png";
import icon3 from "../assets/03.png";
import icon4 from "../assets/04.png";
import icon5 from "../assets/05.png";

const items = [
  {
    title: "Ecommerce businesses",
    text:
      "We automate order processing, handle customer inquiries, and manage returns — with dedicated remote teams built to handle high volumes effortlessly.",
    icon: icon1
  },
  {
    title: "Marketplaces",
    text:
      "We provide 24/7 user support, resolve disputes, and coordinate with sellers to keep your platform running smoothly without interruptions.",
    icon: icon2
  },
  {
    title: "Logistics Companies",
    text:
      "We optimize shipment tracking, assist with route planning, and manage customer communications — reducing delays and boosting satisfaction levels.",
    icon: icon3
  },
  {
    title: "Retail Operations",
    text:
      "We strengthen both offline and online support, including live chats and financial integrations, perfect for handling peak seasons without overloading your core team.",
    icon: icon4
  },
  {
    title: "Other Industries",
    text: "See the rest of fields Hirex people willing to assist you with today.",
    icon: icon5
  }
];

const Industries = () => {
  return (
    <main className="bg-[#EAF0F2] text-[#2B2F33]">
      {/* header fixed -> отступ сверху */}
      <WhoHirexForSection />
      <section className="mx-auto w-[100%] max-w-[1920px] px-6 pt-[140px] max-[1200px]:pt-[120px]">
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-16 max-[1200px]:grid-cols-1 max-[1200px]:gap-10">
          {/* LEFT */}
          <div className="min-w-0">
            <p className="text-[18px]/[1.2] text-[#2B2F33]/70 max-[1200px]:text-[16px]">
              Fields of Operations
            </p>

            <h1 className="mt-4 text-[64px]/[0.95] font-semibold tracking-[-0.03em] text-[#2B2F33]/35 max-[1600px]:text-[56px] max-[1200px]:text-[44px]">
              Explore Industries
              <br />
              We Serve
            </h1>

            <p className="mt-6 max-w-[520px] text-[18px]/[1.6] text-[#2B2F33]/65 max-[1200px]:text-[16px]">
              See how Hirex transforms business operations among different
              spheres while focusing on multiple directions
            </p>

            {/* Collage */}
            <div className="relative mt-10 h-[520px] max-[1600px]:h-[480px] max-[1200px]:h-[520px] max-[700px]:h-[440px]">
              {/* Card 1 (left) — ДОЛЖНА БЫТЬ СВЕРХУ */}
              <div className="absolute left-0 top-[70px] z-20 w-[62%] overflow-hidden rounded-[18px] border border-[#2B2F33]/10 bg-white/40 shadow-[0_40px_80px_rgba(0,0,0,0.18)] max-[1600px]:top-[60px] max-[700px]:top-[40px]">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={collage1}
                    alt=""
                    className="h-full w-full object-cover grayscale"
                    draggable="false"
                  />
                </div>
              </div>

              {/* Card 2 (center tall) — ПОД Card 1 */}
              <div className="absolute left-[42%] top-[0px] z-10 w-[44%] overflow-hidden rounded-[18px] border border-[#2B2F33]/10 bg-white/40 shadow-[0_40px_80px_rgba(0,0,0,0.18)] max-[700px]:left-[40%]">
                <div className="aspect-[3/5] w-full">
                  <img
                    src={collage2}
                    alt=""
                    className="h-full w-full object-cover grayscale"
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="min-w-0">
            <div className="space-y-10">
              {items.map((it, idx) => (
                <div key={it.title} className="relative">
                  <div className="grid grid-cols-[92px_minmax(0,1fr)] gap-10 max-[1600px]:gap-8 max-[700px]:grid-cols-1 max-[700px]:gap-5">
                    <div className="flex items-start justify-start">
                      <div className="h-[72px] w-[72px] rounded-[18px] bg-white/55 ring-1 ring-[#2B2F33]/10 shadow-[0_18px_40px_rgba(0,0,0,0.12)] max-[1600px]:h-[64px] max-[1600px]:w-[64px]">
                        <img
                          src={it.icon}
                          alt=""
                          className="h-full w-full object-contain p-2"
                          draggable="false"
                        />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[40px]/[1.05] font-semibold tracking-[-0.02em] text-[#2B2F33]/45 max-[1600px]:text-[34px] max-[1200px]:text-[32px] max-[700px]:text-[28px]">
                        {it.title}
                      </h3>

                      <p className="mt-4 max-w-[720px] text-[16px]/[1.7] text-[#2B2F33]/65 max-[1200px]:text-[15px]">
                        {it.text}
                      </p>
                    </div>
                  </div>

                  {/* divider */}
                  {idx !== items.length - 1 && (
                    <div className="mt-10 h-px w-full bg-[#2B2F33]/15" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Big CTA */}
        <div className="mt-16 pb-24 max-[1200px]:mt-12">
          <Link
            to="/industries"
            className="group flex w-full items-center justify-center gap-6 rounded-[26px] border border-[#2B2F33]/25 bg-[#EAF0F2] px-8 py-10 text-[44px]/[1] font-medium text-[#2B2F33] shadow-[0_30px_90px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-[1.01] max-[1600px]:text-[40px] max-[1200px]:py-9 max-[1200px]:text-[34px] max-[700px]:py-8 max-[700px]:text-[26px]"
          >
            <span className="underline underline-offset-8 decoration-[#2B2F33]/30">
              See Other Industries
            </span>
            <span className="text-[#2B2F33]/75 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Industries;
