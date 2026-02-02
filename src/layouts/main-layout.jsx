import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Outlet />
    </div>
  );
};

export default MainLayout;
