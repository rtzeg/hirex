import { useState } from "react";

const faqItems = [
  {
    question: "Can I rely on outsourced professionals?",
    answer:
      "Yes. We focus on specialists with proven project experience and transparent communication so your team can rely on stable delivery.",
    isOpen: false
  },
  {
    question: "How do you guarantee the quality of your specialists?",
    answer:
      "We carefully test every candidate and select only the strongest performers, then continue coaching and evaluating them to maintain high service standards.",
    isOpen: false
  },
  {
    question: "Do I need to pay extra for taxes or other charges?",
    answer:
      "No — everything is included in one clear payment. No extra taxes, unexpected costs, or add-ons.",
    isOpen: false
  },
  {
    question: "How quickly can we start working together?",
    answer:
      "Most teams can launch in days, not months. We align requirements, shortlist candidates, and start onboarding right away.",
    isOpen: false
  },
];

const Faq = () => {
  const [openItems, setOpenItems] = useState(() => new Set(faqItems.map((item, index) => (item.isOpen ? index : null)).filter((index) => index !== null)));

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className="mx-auto w-[93.95%] max-w-[1804px] rounded-[34px] bg-[#e5e7eb] px-6 py-8 text-[#111922] md:px-10 md:py-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
        <div>
          <p className="text-[20px]/[1.2] text-[#73869A] md:text-[24px]">I know you have questions.</p>
          <h2 className="mt-3 text-[56px]/[0.95] font-semibold tracking-[-0.01em] md:text-[84px]/[0.92]">
            Frequently
            <br />
            Asked
            <br />
            Questions
          </h2>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openItems.has(index);

            return (
              <article
                className="rounded-[22px] border border-[#BCC8D2] bg-[#d9e1e7] px-5 py-4 md:px-6 md:py-5"
                key={item.question}
              >
                <button
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-5 text-left"
                  onClick={() => toggleItem(index)}
                  type="button"
                >
                  <span className="text-[30px]/[1.13] font-medium text-[#2F3B47] md:text-[45px]/[1.13]">
                    {item.question}
                  </span>
                  <span className="relative mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#5C6C7A] text-[#5C6C7A] md:h-12 md:w-12">
                    <span
                      className={`relative inline-flex h-5 w-5 items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                    >
                      <span className="absolute h-0.5 w-5 bg-current" />
                      <span className="absolute h-5 w-0.5 bg-current" />
                    </span>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[90%] text-[22px]/[1.35] text-[#4F5E6D] md:text-[39px]/[1.28]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
