import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
              H
            </div>
            <div>
              <p className="text-sm text-slate-400">Hirex</p>
              <p className="text-base font-semibold">React UI Starter</p>
            </div>
          </div>
          <nav className="flex items-center gap-4 text-sm text-slate-300">
            <span className="rounded-full bg-slate-800 px-3 py-1">Figma → Tailwind</span>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
