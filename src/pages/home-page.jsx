import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  fullName: z.string().min(2, "Укажите имя"),
  phone: z.string().min(6, "Укажите телефон"),
  email: z.string().email("Введите корректный email"),
  message: z.string().min(4, "Опишите запрос")
});

const HomePage = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      message: ""
    }
  });

  const cards = useMemo(
    () => [
      {
        title: "Customer Support",
        text: "24/7 multichannel support to increase retention and customer satisfaction.",
        icon: "◎"
      },
      {
        title: "Data Entry & Processing",
        text: "Structured workflows for logistics, documentation, and compliance accuracy.",
        icon: "✴"
      },
      {
        title: "Sales",
        text: "Pipeline coverage, lead qualification, and outbound support for growth.",
        icon: "✦"
      },
      {
        title: "Accounting & Bookkeeping",
        text: "Reliable financial operations with daily reconciliation and reporting.",
        icon: "◍"
      },
      {
        title: "Supply Chain Consulting",
        text: "Operational analysis to reduce delivery timelines and logistics costs.",
        icon: "⬡"
      }
    ],
    []
  );

  const howItWorks = useMemo(
    () => [
      {
        title: "Interview",
        text: "We shortlist candidates based on your workflow and train them on SOPs.",
        badge: "01"
      },
      {
        title: "Training",
        text: "We integrate the new team with your tools, KPI dashboards, and onboarding kit.",
        badge: "02"
      },
      {
        title: "Onboarding",
        text: "We launch in 48 hours with QA, weekly reports, and a dedicated manager.",
        badge: "03"
      }
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        quote:
          "Hirex reduced our response time by 43% in the first month while maintaining CSAT above 95%.",
        name: "CEO Global Retail",
        company: "Global Retail Platform"
      },
      {
        quote:
          "We were able to scale our logistics support without building a new internal department.",
        name: "Operations Manager",
        company: "Fintech Solutions"
      },
      {
        quote:
          "The team feels like an extension of our business, with consistent reporting and quality.",
        name: "Director of Logistics",
        company: "Line Trans"
      }
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        question: "Can I rely on outsourced professionals?",
        answer:
          "We vet every candidate, run practical simulations, and assign a success manager to your team."
      },
      {
        question: "How do you guarantee the quality of specialists?",
        answer:
          "We track QA metrics weekly and replace talent quickly if we miss agreed performance targets."
      },
      {
        question: "Do I need to pay extra for taxes or other charges?",
        answer:
          "No. Pricing is all-inclusive with no hidden fees or unexpected add-ons."
      }
    ],
    []
  );

  const onSubmit = (values) => {
    console.log("Form values", values);
  };

  return (
    <div className="bg-slate-100 text-slate-900">
      <header className="relative overflow-hidden bg-[#132633] text-white">
        <div className="absolute left-6 top-12 hidden h-28 w-28 rotate-12 rounded-3xl border border-white/20 bg-white/10 md:block" />
        <div className="absolute right-6 top-28 hidden h-24 w-24 -rotate-12 rounded-3xl border border-white/20 bg-white/10 md:block" />
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3 text-lg font-semibold">
            <span className="rounded-xl bg-white/10 px-3 py-2 text-sm uppercase tracking-[0.3em]">hirex</span>
          </div>
          <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.2em] text-white/70 md:flex">
            <a className="transition hover:text-white" href="#how">How it works</a>
            <a className="transition hover:text-white" href="#industries">Industries</a>
            <a className="transition hover:text-white" href="#services">Service</a>
            <a className="transition hover:text-white" href="#solutions">Solutions</a>
            <a className="transition hover:text-white" href="#about">About</a>
          </nav>
          <button className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
            Book a demo
          </button>
        </div>
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 pt-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              All-In-One Outsourcing & Expert Support.
            </h1>
            <p className="text-sm leading-relaxed text-white/70">
              Scale your business with professional teams and instant online consultations. We build
              dedicated talent so you can focus on strategy.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
                Book a demo
              </button>
              <button className="rounded-full border border-white/40 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Get a quote
              </button>
            </div>
          </div>
          <div className="relative rounded-[28px] border border-white/20 bg-white/10 p-4">
            <div className="flex items-center justify-center rounded-[24px] bg-slate-200">
              <div className="relative h-64 w-full overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#b0b7bd,#f0f4f8)] md:h-72">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-xl">
                    ▶
                  </span>
                </div>
                <div className="absolute bottom-6 right-6 h-16 w-16 rounded-2xl border border-white/50 bg-white/60" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="mx-auto w-full max-w-6xl space-y-10 px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">About us</p>
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Our mission is to help businesses scale by supplying trained remote staff who can start
              delivering from day one. From chats and calls to finance and CRM, we take care of the daily
              tasks that keep companies running.
            </p>
          </div>
          <div className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-600">
                We don’t just send you candidates — we provide pre-trained specialists who already know
                how to perform.
              </p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                Our story →
              </button>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-600">
                You gain a reusable talent pipeline that scales in days, not months.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white" id="workflow">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Workflow process</p>
          <div className="mt-4 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">Revolutionizing Your Business Workflow</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                At Hirex, we transform your operational processes by seamlessly integrating our expert
                outsourcing services, resulting in greater efficiency, lower costs, and superior outcomes.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                <span>Your business</span>
                <span>Work process</span>
                <span>Hirex</span>
              </div>
              <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <div className="flex h-24 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-slate-600 shadow-sm">
                  Your Business
                </div>
                <div className="flex flex-col items-center gap-3 text-xs text-slate-400">
                  <span className="rounded-full border border-dashed border-slate-300 px-3 py-1">→</span>
                  <span className="rounded-full border border-dashed border-slate-300 px-3 py-1">←</span>
                </div>
                <div className="flex h-24 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
                  hirex
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f1f2a]" id="industries">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 text-white">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-white/50">Who Hirex is for?</p>
          <h2 className="mt-4 text-center text-3xl font-semibold">
            Scalable Support Tailored to Your Business
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-white/70">
            Hirex is designed for companies across various industries that need a reliable, ready-to-work
            team for customer support, call centers, and operational efficiency.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3" id="services">
            {cards.map((card) => (
              <article key={card.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg">
                  {card.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-white/70">{card.text}</p>
                <button className="mt-5 rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white">
                  Book a demo →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f1f2a]" id="how">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">How it works</p>
              <h2 className="mt-3 text-3xl font-semibold">Hire Wisely</h2>
              <p className="mt-2 text-sm text-white/70">
                We carefully select our hires to ensure you can accelerate growth and achieve your goals
                more effectively.
              </p>
            </div>
            <div className="hidden gap-3 md:flex">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30">
                ←
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30">
                →
              </button>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {howItWorks.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <span className="text-xs uppercase tracking-[0.3em] text-white/50">{item.badge}</span>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white" id="solutions">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Client success stories</p>
              <h2 className="mt-2 text-3xl font-semibold">Trusted by Industry Leaders</h2>
              <p className="mt-2 text-sm text-slate-600">
                See how Hirex transforms business operations through intelligent outsourcing and expertise.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200">
                ←
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200">
                →
              </button>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm text-slate-600">“{item.quote}”</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.company}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100" id="faq">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">I know you have questions.</p>
              <h2 className="mt-3 text-3xl font-semibold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((item, index) => (
                <button
                  className="w-full rounded-3xl border border-slate-200 bg-white p-5 text-left"
                  key={item.question}
                  onClick={() => setActiveFaq(index)}
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900">{item.question}</span>
                    <span className="text-lg text-slate-400">{activeFaq === index ? "−" : "+"}</span>
                  </div>
                  {activeFaq === index ? (
                    <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white" id="contact">
        <div className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="grid gap-8 rounded-[28px] border border-slate-200 bg-slate-50 p-8 md:grid-cols-[1.1fr_1fr]">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold">Ready to Hire Excellence?</h2>
              <p className="text-sm text-slate-600">
                Our specialists will review your request and contact you shortly.
              </p>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <input
                    {...register("fullName")}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm"
                    placeholder="Full name"
                    type="text"
                  />
                  {errors.fullName ? (
                    <p className="mt-1 text-xs text-rose-500">{errors.fullName.message}</p>
                  ) : null}
                </div>
                <div>
                  <input
                    {...register("phone")}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm"
                    placeholder="Phone number"
                    type="text"
                  />
                  {errors.phone ? (
                    <p className="mt-1 text-xs text-rose-500">{errors.phone.message}</p>
                  ) : null}
                </div>
              </div>
              <div>
                <input
                  {...register("email")}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm"
                  placeholder="Email address"
                  type="email"
                />
                {errors.email ? (
                  <p className="mt-1 text-xs text-rose-500">{errors.email.message}</p>
                ) : null}
              </div>
              <div>
                <textarea
                  {...register("message")}
                  className="min-h-[96px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm"
                  placeholder="Comments"
                />
                {errors.message ? (
                  <p className="mt-1 text-xs text-rose-500">{errors.message.message}</p>
                ) : null}
              </div>
              <button
                className="w-full rounded-2xl bg-[#132633] px-5 py-3 text-sm font-semibold text-white"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#0f1f2a] text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="text-2xl font-semibold">hx</div>
            <p className="text-sm text-white/70">+1 (123) 321-11-22</p>
            <p className="text-sm text-white/70">info@hirx.ai</p>
            <p className="text-xs text-white/40">© Hirex 2026</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Navigation</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>How it works</li>
              <li>Industries</li>
              <li>Service</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Social</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
