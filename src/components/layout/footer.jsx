import { Link } from "react-router-dom";
import logoFooter from "../../assets/logo_footer.png";
import FooterArrow from "./footer-arrow.jsx";
import FooterContactForm from "./footer-contact-form.jsx";

const navigation = [
  ["How it works", "Industries", "Service"],
  ["Solutions", "About Us", "Contact Us"]
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Facebook", href: "https://www.facebook.com" },
  { label: "Instagram", href: "https://www.instagram.com" }
];

const Footer = () => {
  return (
    <footer className="pb-8 pt-16">
      <div className="mx-auto w-[93.95%] max-w-[1804px]">
        <FooterContactForm />

        <section className="relative -mt-12 overflow-hidden rounded-[30px] bg-[linear-gradient(118deg,#0A1925_0%,#29465A_48%,#2B4A5F_100%)] px-8 pb-8 pt-28 text-white md:px-12 lg:px-14 lg:pb-10">
          <FooterArrow />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[240px_1fr_460px]">
            <div>
              <Link aria-label="Go to home page" to="/">
                <img alt="Hirex" className="h-auto w-[160px]" src={logoFooter} />
              </Link>
            </div>

            <div className="space-y-2 text-[70px]/[1.05] font-semibold max-md:text-[46px]/[1.1]">
              <a className="block transition-opacity hover:opacity-80" href="tel:+11233211122">
                +1 (123) 321-11-22
              </a>
              <a className="block transition-opacity hover:opacity-80" href="mailto:info@hirx.ai">
                info@hirx.ai
              </a>
            </div>

            <div>
              <h3 className="text-[52px] font-semibold text-white max-md:text-[42px]">Navigation</h3>
              <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-[40px]/[1.15] font-normal max-md:text-[32px]">
                {navigation.map((col) => (
                  <div className="space-y-2" key={col[0]}>
                    {col.map((item) => (
                      <Link className="block transition-opacity hover:opacity-80" key={item} to="/">
                        {item}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-10 flex flex-wrap items-center justify-between gap-5 text-[38px] text-white/95 max-md:text-[30px]">
            <p>© Hirex 2026</p>
            <div className="flex flex-wrap items-center justify-center gap-7">
              {socialLinks.map((social) => (
                <a
                  className="inline-flex items-center gap-3 transition-opacity hover:opacity-80"
                  href={social.href}
                  key={social.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/90 text-[20px] font-bold text-[#29465A]">
                    {social.label[0]}
                  </span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
            <p>All Rights Reserved</p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
