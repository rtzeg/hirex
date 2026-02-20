import { useEffect, useMemo, useRef, useState } from "react";
import lines from "../assets/lines.png";
import metalShape from "../assets/63.svg";
import valuesIcon from "../assets/04.png";
import mapImg from "../assets/map.png";

const stats = [
  { value: "125+", label: "Fields Covered" },
  { value: "24/7", label: "Staff Operational\ncoverage" },
  { value: "^45%", label: "Cutting cost\nfor companies" },
  { value: "97%", label: "Average CSAT" },
];

const values = [
  {
    title: "Transparency",
    text:
      "We believe in being open and honest in everything we do. Clear communication builds trust - both with our clients and the team.",
    variant: "dark",
  },
  {
    title: "Dedication",
    text:
      "We give every project our full focus and commitment to achieve outstanding results.",
    variant: "light",
  },
  {
    title: "Respectfulness",
    text: "We value people, perspectives, and kindness in every detail.",
    variant: "dark",
  },
  {
    title: "Trust",
    text:
      "We believe in people. By giving everyone a voice, we create a culture where trust grows naturally",
    variant: "light",
  },
];

// ---------- helpers for number animation ----------
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const parseStatValue = (raw) => {
  // "24/7" -> animate 24, keep "/7"
  if (typeof raw === "string" && raw.includes("/")) {
    const [left, right] = raw.split("/");
    const num = parseInt(left.replace(/\D/g, ""), 10);
    return {
      prefix: left.replace(/[0-9]/g, ""), // usually ""
      number: Number.isFinite(num) ? num : 0,
      suffix: `/${right}`,
    };
  }

  // generic: prefix + number + suffix
  const m = String(raw).match(/^([^0-9]*)([0-9]+)(.*)$/);
  if (!m) return { prefix: "", number: 0, suffix: String(raw) };

  return {
    prefix: m[1] ?? "",
    number: parseInt(m[2], 10) || 0,
    suffix: m[3] ?? "",
  };
};

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();

    // safari compat
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  return reduced;
};

const useCountUp = ({ to, duration = 1100, enabled }) => {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!enabled) {
      setValue(0);
      return;
    }

    let start = null;

    const tick = (ts) => {
      if (start === null) start = ts;
      const elapsed = ts - start;
      const t = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(t);
      setValue(Math.round(eased * to));

      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [to, duration, enabled]);

  return value;
};

const AnimatedStatValue = ({ raw, animate }) => {
  const parsed = useMemo(() => parseStatValue(raw), [raw]);
  const reducedMotion = usePrefersReducedMotion();

  const shouldAnimate = animate && !reducedMotion;

  const animatedNum = useCountUp({
    to: parsed.number,
    duration: 1100,
    enabled: shouldAnimate,
  });

  const shownNumber = shouldAnimate ? animatedNum : parsed.number;

  return (
    <>
      {parsed.prefix}
      {shownNumber}
      {parsed.suffix}
    </>
  );
};

const AboutUs = () => {
  // start animation when stats block is visible (once)
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      // fallback: just show without animation if no IO
      setStatsVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <main className=" text-white">
      <section className="bg-transparent h-[700px]">
        {/* fixed header -> отступ сверху */}
        <div className="mx-auto w-[100%] max-w-[1920px] max-[1200px]:pt-[120px]">
          <div className="relative h-[536px] overflow-hidden rounded-[28px] shadow-[0_25px_120px_rgba(0,0,0,0.55)]">
            {/* фон-градиент */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(110% 140% at 50% 65%, #4E7F99 0%, #2B4A5E 38%, #15222B 68%, #050A0E 100%)",
              }}
            />

            {/* lines.png поверх */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.16]"
              style={{
                backgroundImage: `url(${lines})`,
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            />

            {/* виньетка для контраста */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.10) 55%, rgba(0,0,0,0.28) 100%)",
              }}
            />

            {/* контент */}
            <div className="relative z-10 top-[200px] flex min-h-[320px] items-end px-10 py-12 max-[1200px]:min-h-[280px] max-[900px]:px-6 max-[900px]:py-10">
              <div className="max-w-[520px]">
                <h1 className="text-[72px]/[0.95] font-semibold tracking-[-0.03em] text-white/95 max-[1600px]:text-[64px] max-[1200px]:text-[56px] max-[900px]:text-[44px]">
                  About Hirex
                </h1>

                <p className="mt-6 text-[22px]/[1.25] text-white/75 max-[1200px]:text-[20px] max-[900px]:text-[18px]">
                  Exceptional products start
                  <br />
                  with people who care
                </p>
              </div>
            </div>

            {/* правая металлическая фигура */}
            <img
              src={metalShape}
              alt=""
              aria-hidden="true"
              draggable="false"
              className="
              pointer-events-none absolute right-[-220px] top-1/2 z-10
              w-[980px] -translate-y-1/2 select-none
              max-[1600px]:w-[860px] max-[1600px]:right-[-240px]
              max-[1200px]:w-[740px] max-[1200px]:right-[-260px]
              max-[900px]:w-[620px] max-[900px]:right-[-260px] max-[900px]:opacity-90
              max-[650px]:hidden
            "
            />
          </div>
        </div>
      </section>

      {/* NUMBERS + MAP */}
      <section className="bg-transparent">
        <div
          ref={statsRef}
          className="mx-auto w-[100%] max-w-[1920px] px-6 py-20 max-[1200px]:py-14"
        >
          {/* TOP HEADER ROW */}
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] items-start gap-10 max-[1200px]:grid-cols-1 max-[1200px]:gap-6">
            <div className="min-w-0">
              <p className="text-[20px]/[1.2] text-[#73869A] md:text-[24px]">
                We in Numbers
              </p>
            </div>

            <div className="min-w-0">
              <h2 className="text-[72px]/[0.95] font-semibold tracking-[-0.03em] text-[#1E2225] max-[1600px]:text-[56px] max-[1200px]:text-[44px]">
                What we do
              </h2>
            </div>

            <div className="min-w-0">
              <p className="max-w-[720px] text-[30px]/[1.2] text-[#475766] md:text-[24px]/[1.12]">
                Hirex is designed for companies across various industries that need a reliable,
                ready-to-work team for customer support, call centers, and operational efficiency.
              </p>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-4 gap-12 max-[1200px]:mt-10 max-[1200px]:grid-cols-2 max-[700px]:grid-cols-1 max-[700px]:gap-8">
            {stats.map((s) => (
              <div key={s.value} className="min-w-0">
                <div className="text-[72px]/[0.95] font-semibold tracking-[-0.03em] text-[#32393E] max-[1600px]:text-[64px] max-[1200px]:text-[56px]">
                  <AnimatedStatValue raw={s.value} animate={statsVisible} />
                </div>
                <div className="mt-4 whitespace-pre-line text-[18px]/[1.35] text-[#4E5A61] max-[1200px]:text-[16px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* MAP CARD */}
          <div className="mt-14 overflow-hidden rounded-[28px] bg-[#4E5A61] shadow-[0_25px_90px_rgba(0,0,0,0.55)] max-[1200px]:mt-10">
            <div className="relative h-[380px] w-full max-[1600px]:h-[340px] max-[1200px]:h-[320px] max-[700px]:h-[260px]">
              <img
                src={mapImg}
                alt="World map"
                draggable="false"
                className="absolute inset-0 h-full w-full object-cover opacity-90"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(120% 140% at 50% 30%, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.25) 65%, rgba(0,0,0,0.35) 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-transparent">
        <div className="mx-auto w-[100%] max-w-[1920px] px-6 pt-10 pb-20">
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] items-start gap-10 max-[1200px]:grid-cols-1">
            <div className="min-w-0">
              <p className="text-[20px]/[1.2] text-[#73869A] md:text-[24px]]">
                Our Values
              </p>
            </div>

            <div className="min-w-0">
              <h2 className="text-[72px]/[0.95] font-semibold tracking-[-0.03em] text-[#1E2225] max-[1600px]:text-[56px] max-[1200px]:text-[44px]">
                What
                <br />
                Drives Us
              </h2>
            </div>

            <div className="min-w-0">
              <p className="max-w-[720px] text-[30px]/[1.2] text-[#475766] md:text-[24px]/[1.12]">
                Hirex is designed for companies across various industries that need a reliable,
                ready-to-work team for customer support, call centers, and operational efficiency.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-4 gap-8 max-[1600px]:grid-cols-2 max-[700px]:grid-cols-1">
            {values.map((v) => {
              const isLight = v.variant === "light";

              return (
                <div
                  key={v.title}
                  className={`
                  relative overflow-hidden rounded-[26px] border
                  shadow-[0_25px_70px_rgba(0,0,0,0.45)]
                  ${isLight ? "bg-[#EAF0F2] border-[#2B4A5E]/25" : "bg-[#2B4A5E] border-white/15"}
                `}
                >
                  <div className="px-8 pt-8">
                    <div
                      className={`
                      h-[58px] w-[58px] rounded-[18px] border
                      ${isLight ? "bg-white/70 border-black/10" : "bg-white/5 border-white/15"}
                    `}
                    >
                      <img
                        src={valuesIcon}
                        alt=""
                        aria-hidden="true"
                        draggable="false"
                        className="h-full w-full object-contain p-2"
                      />
                    </div>
                  </div>

                  <div className="px-8 pb-9 pt-6">
                    <h3
                      className={`
                      text-[34px]/[1.05] font-semibold tracking-[-0.02em]
                      ${isLight ? "text-[#202326]" : "text-white/95"}
                    `}
                    >
                      {v.title}
                    </h3>

                    <p
                      className={`
                      mt-5 text-[16px]/[1.7]
                      ${isLight ? "text-[#202326]/70" : "text-white/70"}
                    `}
                    >
                      {v.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
