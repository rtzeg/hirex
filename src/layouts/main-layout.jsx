import { Outlet } from "react-router-dom";
import Header from "../components/layout/header.jsx";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
