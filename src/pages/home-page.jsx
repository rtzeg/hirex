import Button from "../components/ui/button.jsx";
import TypographyShowcase from "../components/ui/typography.jsx";
import Faq from "../components/layout/faq.jsx";
import ClientSuccessSlider from "../components/layout/client-success-slider.jsx";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#f3f5f9] px-4 pb-8 pt-32 md:px-8 md:pb-12 md:pt-36">
      <div className="mx-auto w-full space-y-8">
        <header className="overflow-hidden rounded-[36px] bg-[#0f2a3d] p-6 text-white md:p-10">
          <p className="text-menu uppercase tracking-[0.2em] text-white/70">Hirex UI starter</p>
          <h1 className="mt-4 text-h2-5 max-w-3xl">
            Заготовка под Figma: типографика, кнопки и базовые UI-компоненты.
          </h1>
          <p className="text-body-1 mt-4 max-w-2xl text-white/80">
            Подключили шрифты из assets/fonts, вынесли стили текста в отдельные токены и сделали
            переиспользуемые кнопки с анимацией наведения.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary">Book a demo</Button>
            <Button variant="secondary">Get quote</Button>
            <Button variant="ghost">Contact us</Button>
          </div>
        </header>

        <TypographyShowcase />

        <section className="mx-auto w-full max-w-6xl rounded-[32px] border border-slate-200 bg-white p-6 md:p-10">
          <div className="mb-8">
            <p className="text-menu uppercase tracking-[0.18em] text-slate-500">Buttons library</p>
            <h2 className="text-h3 mt-4 text-slate-900">Одинаковые кнопки в одном месте</h2>
            <p className="text-subheading mt-3 max-w-2xl text-slate-600">
              Эти компоненты можно использовать на всех секциях сайта. У каждой кнопки есть общий
              стиль, hover-анимация «блик», фокус-обводка и размерные варианты.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-menu text-slate-500">Variants</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="accent">Accent</Button>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-menu text-slate-500">Sizes</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          </div>
        </section>

        <ClientSuccessSlider />

        <Faq />
      </div>
    </div>
  );
};

export default HomePage;
