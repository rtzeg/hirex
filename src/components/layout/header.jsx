import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const navItems = ["How it works", "Industries", "Service", "Solutions", "About Us"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed left-1/2 top-0 z-50 w-[100%] max-w-[1920px] -translate-x-1/2 bg-transparent">
      <div className="relative z-[70] mx-auto mt-1 flex min-h-[102px] items-center justify-between border border-white/10 bg-[#122434]/60 px-9 shadow-lg backdrop-blur-[16px] max-[1200px]:min-h-[86px] max-[1200px]:px-5">
        <Link aria-label="Go to home page" to="/">
          <img alt="Hirex" className="h-[52px] w-auto max-[1200px]:h-10" src={logo} />
        </Link>

        <nav aria-label="Main navigation" className="max-[1200px]:hidden">
          <ul className="flex items-center gap-12 text-menu text-white">
            {navItems.map((item) => (
              <li key={item}>
                <Link className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80" to="/">
                  <span>{item}</span>
                  {item === "Industries" ? (
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.75"
                      />
                    </svg>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="rounded-[16px] bg-[#D9DEE1] px-10 py-3 text-[37px]/[1] font-normal text-[#202326] transition-colors duration-300 hover:bg-white max-[1200px]:hidden"
          type="button"
        >
          Book a demo
        </button>

        <button
          aria-controls="mobile-nav-panel"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="relative hidden h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition-all duration-300 hover:bg-white/20 max-[1200px]:inline-flex"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          type="button"
        >
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-2.5"}`}
          />
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-2.5"}`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[55] bg-[#030B12]/55 transition-opacity duration-300 min-[1201px]:hidden ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={closeMenu}
      />
      <aside
        className={`fixed right-0 top-0 z-[60] h-screen w-[min(88vw,420px)] border-l border-white/10 bg-[#0B1B29]/80 px-7 pb-8 pt-28 text-white shadow-[-20px_0_50px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] min-[1201px]:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        id="mobile-nav-panel"
      >
        <nav aria-label="Mobile navigation" className="mt-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  className="inline-flex w-full items-center justify-between rounded-xl px-4 py-3 text-[22px]/[1.2] transition-colors duration-300 hover:bg-white/10"
                  onClick={closeMenu}
                  to="/"
                >
                  <span>{item}</span>
                  {item === "Industries" ? (
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.75"
                      />
                    </svg>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="mt-8 w-full rounded-[16px] bg-[#D9DEE1] px-8 py-4 text-[28px]/[1.05] font-normal text-[#202326] transition-colors duration-300 hover:bg-white"
          type="button"
        >
          Book a demo
        </button>
      </aside>
    </header>
  );
};

export default Header;