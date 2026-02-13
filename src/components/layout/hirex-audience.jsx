import { useMemo, useState } from "react";
import iconSupport from "../../assets/04.png";
import iconData from "../../assets/06.png";
import iconSales from "../../assets/07.png";
import iconAccounting from "../../assets/08.png";
import iconSupply from "../../assets/05.png";
import slideInterview from "../../assets/09.png";
import slideTraining from "../../assets/10.png";
import slideOnboarding from "../../assets/03.png";
import slideAudit from "../../assets/01.png";
import topLeftCube from "../../assets/01.png";
import topRightCube from "../../assets/03.png";

const audienceItems = [
  {
    icon: iconSupport,
    title: "Customer Support",
    description:
      "We optimize shipment tracking, assist with route planning, and manage customer communications — reducing delays and boosting satisfaction levels.",
  },
  {
    icon: iconData,
    title: "Data Entry & Data Processing",
    description:
      "We handle the logistics of shipping goods internationally, coordinating between multiple carriers to ensure timely deliveries and adherence to customs regulations.",
  },
  {
    icon: iconSales,
    title: "Sales",
    description:
      "Our facilities offer secure storage options with inventory management systems, allowing businesses to streamline their supply chain and reduce overhead costs.",
  },
  {
    icon: iconAccounting,
    title: "Accounting & Bookkeeping",
    description:
      "We specialize in the final leg of the delivery process, focusing on speed and efficiency to enhance customer experience with timely and reliable deliveries.",
  },
  {
    icon: iconSupply,
    title: "Supply Chain Consulting",
    description:
      "We provide expert analysis and strategic recommendations to optimize your supply chain operations, focusing on cost reduction and efficiency improvements.",
    cta: "Book a demo",
  },
];

const processSlides = [
  {
    image: slideInterview,
    title: "Interview",
    description:
      "Before we hire anyone our people are getting trained in order to be ready for new job opportunities. We present only TOP candidates for your review.",
  },
  {
    image: slideTraining,
    title: "Training",
    description:
      "We integrate your business processes and connect your team to the Hirex platform within 48 hours for a smooth launch.",
  },
  {
    image: slideOnboarding,
    title: "Onboarding",
    description:
      "Continuous excellence. Hirex managers run regular coaching and testing to keep service quality and deep product knowledge stable.",
  },
  {
    image: slideAudit,
    title: "Optimization",
    description:
      "We monitor KPIs daily, adjust scripts and workflows, and consistently improve conversion and customer satisfaction.",
  },
];

const HirexAudienceGrid = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slidesPerView = useMemo(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1280) return 2;
    return 3;
  }, []);

  const maxIndex = Math.max(0, processSlides.length - slidesPerView);

  const prevSlide = () => setSlideIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  const nextSlide = () => setSlideIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

  return (
    <section className="relative z-10 mt-14 overflow-hidden rounded-[32px] bg-[#16232B] px-4 pb-8 pt-12 text-white md:mt-16 md:px-8 md:pb-12 md:pt-16">
      <img
        alt=""
        aria-hidden="true"
        className="main-shell-float-slow pointer-events-none absolute -left-16 top-0 z-[1] hidden w-[210px] opacity-95 md:block"
        src={topLeftCube}
      />
      <img
        alt=""
        aria-hidden="true"
        className="main-shell-float-fast pointer-events-none absolute -right-12 top-2 z-[1] hidden w-[240px] opacity-95 md:block"
        src={topRightCube}
      />
      <div className="relative z-10 mx-auto max-w-[1320px] text-center">
        <p className="text-[24px] font-medium leading-[1.1] text-white/75">Who Hirex Is For?</p>
        <h3 className="mx-auto mt-4 max-w-[720px] text-[52px] font-semibold leading-[1.02] md:text-[72px]">
          Scalable Support Tailored to Your Business
        </h3>
        <p className="mx-auto mt-6 max-w-[900px] text-[20px] leading-[1.3] text-[#A8B8C6] md:text-[48px]">
          Hirex is designed for companies across various industries that need a reliable,
          ready-to-work team for customer support, call centers, and operational efficiency.
        </p>
      </div>

      <div className="relative z-10 mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {audienceItems.map((item, index) => {
          const isWideCard = index === 4;

          return (
            <article
              className={`group relative overflow-hidden rounded-[28px] border border-[#9BB7C9] bg-[linear-gradient(115deg,#153042_0%,#284257_52%,#355770_100%)] p-7 text-left transition duration-300 hover:bg-[linear-gradient(115deg,#1b232d_0%,#202834_60%,#232e3a_100%)] ${isWideCard ? "md:col-span-2 xl:col-span-2" : ""}`}
              key={item.title}
            >
              <img alt="" aria-hidden="true" className="h-[74px] w-[74px] object-contain" src={item.icon} />
              <h4 className="mt-5 max-w-[480px] text-[24px] font-medium leading-[1.05] text-[#DDE6EE] md:text-[52px]">
                {item.title}
              </h4>
              <p className="mt-4 max-w-[90%] text-[18px] leading-[1.25] text-[#AFC0CF] md:text-[38px]">
                {item.description}
              </p>

              {item.cta ? (
                <button
                  className="mt-6 h-[58px] rounded-[18px] border border-[#A7BDC9] bg-[rgba(255,255,255,0.08)] px-10 text-[24px] font-medium text-[#D9E3EA] transition hover:bg-[rgba(255,255,255,0.14)] md:absolute md:bottom-7 md:right-7 md:text-[34px]"
                  type="button"
                >
                  Book a demo <span className="ml-2">→</span>
                </button>
              ) : null}
            </article>
          );
        })}
      </div>

      <div className="relative z-10 mt-14 md:mt-16">
        <div className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-start md:justify-between">
          <p className="text-[22px] text-white/65 md:pt-3">How it Works</p>

          <div className="md:mr-auto md:ml-16">
            <h4 className="text-[58px] font-semibold leading-[0.95] md:text-[72px]">Hire Wisely</h4>
            <p className="mt-3 max-w-[720px] text-[20px] leading-[1.25] text-[#A8B8C6] md:text-[46px]">
              We carefully select our hires to ensure that you can accelerate your growth and
              achieve your goals more effectively.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              aria-label="Previous slide"
              className="h-[56px] w-[84px] rounded-[16px] border border-white/45 text-[34px] text-white transition hover:bg-white/10"
              onClick={prevSlide}
              type="button"
            >
              ←
            </button>
            <button
              aria-label="Next slide"
              className="h-[56px] w-[84px] rounded-[16px] border border-white/45 text-[34px] text-white transition hover:bg-white/10"
              onClick={nextSlide}
              type="button"
            >
              →
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-3 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${slideIndex} * ((100% - ${slidesPerView - 1}*0.75rem) / ${slidesPerView} + 0.75rem)))` }}
          >
            {processSlides.map((slide) => (
              <article
                className="group min-h-[330px] shrink-0 rounded-[28px] border border-[#B8C7D2] bg-[#CED4DA] px-7 pb-6 pt-4 text-[#232D38] transition-colors duration-300 hover:bg-[#5A6772] hover:text-[#D9E2EA]"
                key={slide.title}
                style={{ width: `calc((100% - ${(slidesPerView - 1) * 0.75}rem) / ${slidesPerView})` }}
              >
                <img alt="" aria-hidden="true" className="h-[130px] w-[190px] object-contain" src={slide.image} />
                <h5 className="mt-4 text-[56px] font-medium leading-[0.98]">{slide.title}</h5>
                <p className="mt-4 text-[18px] leading-[1.26] text-inherit/90 md:text-[34px]">
                  {slide.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HirexAudienceGrid;   