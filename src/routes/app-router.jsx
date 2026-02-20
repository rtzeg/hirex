import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/main-layout.jsx";
import HomePage from "../pages/home-page.jsx";
import Industries from "../pages/Industries.jsx";
import AboutHirexSection from "../pages/About-us.jsx"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="industries" element={<Industries />} />
        <Route path="about" element={<AboutHirexSection />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;