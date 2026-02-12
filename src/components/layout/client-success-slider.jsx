import { useEffect, useMemo, useState } from "react";
import slidePhoto1 from "../../assets/01.png";
import slidePhoto2 from "../../assets/02.png";
import slidePhoto3 from "../../assets/03.png";
import slidePhoto4 from "../../assets/04.png";
import slidePhoto5 from "../../assets/05.png";
import arrowIcon from "../../assets/Arrow.svg";

const storySlides = [
  {
    text: '"Hirex revolutionized our customer support. The integration was seamless, and the quality of the team exceeded our expectations. They truly live up to the \"Excellence\" in their name."',
    highlightedText: "CEO, Global Retail Platform",
    image: slidePhoto1
  },
  {
    text: '"The 24/7 contact center provided by Hirex allowed us to scale without the headache of recruitment. Their automated training ensures the team is always ahead of the curve."',
    highlightedText: "Operations Manager, Fintech Solutions",
    image: slidePhoto2
  },
  {
    text: '"Switching to Hirex was a game-changer for our dispatching. Real-time monitoring and expert support have significantly improved our delivery efficiency."',
    highlightedText: "Director of Logistics, Euro-Trans",
    image: slidePhoto3
  },
  {
    text: '"The onboarding process was fast and transparent. Within one week we had strong specialists embedded into our workflow with zero friction."',
    highlightedText: "Head of Support, SaaS Company",
    image: slidePhoto4
  },
  {
    text: '"Hirex helped us reduce operational load and improve response quality across all channels. Performance metrics improved in the very first month."',
    highlightedText: "Customer Success Lead, E-commerce Brand",
    image: slidePhoto5
  }
];

const getSlidesPerView = (screenWidth) => {
  if (screenWidth >= 1440) return 3;
  if (screenWidth >= 900) return 2;
  return 1;
};

const ClientSuccessSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(() => getSlidesPerView(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxIndex = useMemo(() => Math.max(storySlides.length - slidesPerView, 0), [slidesPerView]);

  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const goPrev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));
  const goNext = () => setActiveIndex((prev) => Math.min(prev + 1, maxIndex));

  return (
    <section className="mx-auto w-[93.95%] max-w-[1804px] rounded-[34px] bg-[#d9e1e7] px-6 py-8 text-[#111922] md:px-10 md:py-10">
      <div className="grid gap-6 lg:grid-cols-[300px_1fr_auto] lg:items-start lg:gap-8">
        <p className="text-[20px]/[1.2] text-[#73869A] md:text-[24px]">Client Success Stories</p>

        <div className="space-y-5">
          <h2 className="text-[56px]/[0.95] font-semibold tracking-[-0.01em] md:text-[84px]/[0.92]">
            Trusted by Industry
            <br />
            Leaders
          </h2>
          <p className="max-w-[720px] text-[30px]/[1.2] text-[#475766] md:text-[50px]/[1.12]">
            See how Hirex transforms business operations through intelligent outsourcing and expertise.
          </p>
        </div>

        <div className="flex items-center gap-4 lg:justify-self-end">
          <button
            aria-label="Previous slide"
            className="group inline-flex h-[68px] w-[132px] items-center justify-center rounded-[20px] border border-[#1a2630] bg-[#d9e1e7] text-[#1a2630] transition-all duration-300 hover:bg-[#111922] hover:text-white active:scale-[0.97] active:bg-[#1b2d3b] disabled:cursor-not-allowed disabled:opacity-40"
            disabled={activeIndex === 0}
            onClick={goPrev}
            type="button"
          >
            <img alt="" aria-hidden="true" className="h-10 w-10" src={arrowIcon} />
          </button>

          <button
            aria-label="Next slide"
            className="group inline-flex h-[68px] w-[132px] items-center justify-center rounded-[20px] border border-[#1a2630] bg-[#d9e1e7] text-[#1a2630] transition-all duration-300 hover:bg-[#111922] hover:text-white active:scale-[0.97] active:bg-[#1b2d3b] disabled:cursor-not-allowed disabled:opacity-40"
            disabled={activeIndex >= maxIndex}
            onClick={goNext}
            type="button"
          >
            <img alt="" aria-hidden="true" className="h-10 w-10 rotate-180" src={arrowIcon} />
          </button>
        </div>
      </div>

      <div className="mt-8 overflow-hidden">
        <div
          className="flex items-stretch gap-5 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * (100 / slidesPerView)}%)` }}
        >
          {storySlides.map((slide) => (
            <article
              className="flex min-h-[340px] h-full shrink-0 flex-col rounded-[30px] border border-[#b9c4ce] bg-[#d9e1e7] p-6 md:p-7"
              key={slide.text}
              style={{ width: `calc((100% - ${(slidesPerView - 1) * 20}px) / ${slidesPerView})` }}
            >
              <p className="text-[24px]/[1.32] text-[#3e4d5a] md:text-[42px]/[1.23]">{slide.text}</p>

              <div className="mt-auto flex items-center gap-4 pt-6">
                <img alt={slide.highlightedText} className="h-14 w-14 rounded-[10px] object-cover md:h-16 md:w-16" src={slide.image} />
                <p className="max-w-[380px] text-[30px]/[1.1] font-semibold text-[#1c242c] md:text-[42px]/[1.08]">
                  {slide.highlightedText}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessSlider;
