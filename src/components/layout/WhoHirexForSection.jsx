import iconSupport from "../../assets/04.png";
import iconData from "../../assets/06.png";
import iconSales from "../../assets/07.png";
import iconAccounting from "../../assets/08.png";
import iconSupply from "../../assets/05.png";

const CALENDLY_URL = "https://calendly.com/asad-hirx/30min";

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
    cta: true,
  },
];

const WhoHirexIsForSection = ({
  id = "solutions",
  title = "Scalable Support Tailored to Your Business",
  subtitle = "Who Hirex Is For?",
  description =
    "Hirex is designed for companies across various industries that need a reliable, ready-to-work team for customer support, call centers, and operational efficiency.",
  showOuterShell = false, // если нужно оборачивать в твой синий shell (как в HirexAudienceGrid)
}) => {
  const content = (
    <section id={id} className="relative bg-[#16232B] px-[41px] py-[41px] z-10 text-white">
      <div className="relative z-10 mx-auto max-w-[1320px] text-center">
        <p className="text-[24px] font-medium leading-[1.1] text-white/75">{subtitle}</p>
        <h3 className="mt-6 text-[64px]/[1.02] font-semibold tracking-[-0.03em] text-white/90 max-[1600px]:text-[48px] max-[1200px]:text-[44px] max-[700px]:text-[36px]">
          {title}
        </h3>
        <p className="mx-auto mt-6 max-w-[900px] text-[20px] leading-[1.3] text-[#A8B8C6] md:text-[24px]">
          {description}
        </p>
      </div>

      <div className="relative z-10 mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {audienceItems.map((item, index) => {
          const isWideCard = index === 4;

          return (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-[28px] border border-[#9BB7C9] bg-[linear-gradient(115deg,#153042_0%,#284257_52%,#355770_100%)] p-7 text-left transition duration-300 hover:bg-[linear-gradient(115deg,#1b232d_0%,#202834_60%,#232e3a_100%)] ${
                isWideCard ? "md:col-span-2 xl:col-span-2" : ""
              }`}
            >
              {isWideCard ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-x-10">
                  <div className="min-w-0">
                    <img alt="" aria-hidden="true" className="h-[74px] w-[74px] object-contain" src={item.icon} />
                    <h4 className="mt-5 max-w-[480px] text-[24px] font-medium leading-[1.1] text-[#DDE6EE] md:text-[32px]">
                      {item.title}
                    </h4>
                    <p className="mt-4 max-w-[90%] text-[18px] leading-[1.25] text-[#AFC0CF] md:text-[22px]">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex justify-start md:justify-end">
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto inline-flex h-[58px] w-full items-center justify-center rounded-[18px] border border-[#A7BDC9] bg-[rgba(255,255,255,0.08)] px-10 text-[24px] font-medium text-[#D9E3EA] transition hover:bg-[rgba(255,255,255,0.14)] md:w-auto md:text-[34px]"
                    >
                      <span className="whitespace-nowrap">Book a demo</span>
                      <span className="ml-2">→</span>
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <img alt="" aria-hidden="true" className="h-[74px] w-[74px] object-contain" src={item.icon} />
                  <h4 className="mt-5 max-w-[480px] text-[24px] font-medium leading-[1.1] text-[#DDE6EE] md:text-[32px]">
                    {item.title}
                  </h4>
                  <p className="mt-4 max-w-[90%] text-[18px] leading-[1.25] text-[#AFC0CF] md:text-[22px]">
                    {item.description}
                  </p>
                </>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );

  // Если нужно прямо “в твоём синем контейнере” как в HirexAudienceGrid
  if (showOuterShell) {
    return (
      <section
        id={id}
        className="relative z-10 mt-14 overflow-hidden rounded-[32px] bg-[#16232B] px-4 pb-8 pt-12 text-white md:mt-16 md:px-8 md:pb-12 md:pt-16"
      >
        {content}
      </section>
    );
  }

  // Если вставляешь в другой блок (например в WhoHirexFor), без внешнего shell
  return (
    <section id={id} className="relative z-10 text-white">
      {content}
    </section>
  );
};

export default WhoHirexIsForSection;