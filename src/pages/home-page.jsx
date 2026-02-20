import Button from "../components/ui/button.jsx";

import Faq from "../components/layout/faq.jsx";
import ClientSuccessSlider from "../components/layout/client-success-slider.jsx";
import AboutWorkflowSection from "../components/layout/about-workflow-section.jsx";
import MainSection from "../components/layout/main-section.jsx";
import HirexAudienceGrid from "../components/layout/hirex-audience.jsx";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#e5e7eb]">
      <div className="mx-auto w-full">
        <MainSection />
        <AboutWorkflowSection />
        <HirexAudienceGrid />
        <ClientSuccessSlider />

        <Faq />
      </div>
    </div>
  );
};

export default HomePage;
