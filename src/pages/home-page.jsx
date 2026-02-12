import Button from "../components/ui/button.jsx";

import Faq from "../components/layout/faq.jsx";
import ClientSuccessSlider from "../components/layout/client-success-slider.jsx";
import AboutWorkflowSection from "../components/layout/about-workflow-section.jsx";
import MainSection from "../components/layout/main-section.jsx";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#f3f5f9] px-4 pb-8 pt-32 md:px-8 md:pb-12 md:pt-36">
      <div className="mx-auto w-full space-y-8">
        <MainSection />
        <AboutWorkflowSection />
        <ClientSuccessSlider />

        <Faq />
      </div>
    </div>
  );
};

export default HomePage;
