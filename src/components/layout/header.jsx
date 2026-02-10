import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const navItems = ["How it works", "Industries", "Service", "Solutions", "About Us"];

const Header = () => {
  return (
    <header className="fixed left-1/2 top-0 z-50 w-[93.95%] max-w-[1804px] -translate-x-1/2 bg-transparent">
      <div className="mx-auto mt-1 flex min-h-[102px] items-center justify-between border-t border-[#00A7FF] bg-[#122434]/92 px-9 backdrop-blur-[2px]">
        <Link aria-label="Go to home page" to="/">
          <img alt="Hirex" className="h-[52px] w-auto" src={logo} />
        </Link>

        <nav aria-label="Main navigation">
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
          className="rounded-[16px] bg-[#D9DEE1] px-10 py-3 text-[37px]/[1] font-normal text-[#202326] transition-colors duration-300 hover:bg-white"
          type="button"
        >
          Book a demo
        </button>
      </div>
    </header>
  );
};

export default Header;
