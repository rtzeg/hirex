import { useEffect, useState } from "react";
import lines from "../../assets/lines.png";
import unionBg from "../../assets/Union.png";

import cubeLeft from "../../assets/01.svg";
import cubeRight from "../../assets/02.png";

import localVideo from "../../assets/video/video.MOV";
import videoPoster from "../../assets/video-poster.png";
import VideoCard from "./video.jsx";
import "./main-section.css";

const WORDS = ["Expert Support.", "Customer Service.", "Data Processing."];

const TYPE_SPEED = 70;
const DELETE_SPEED = 35;
const PAUSE_AFTER_TYPED = 1100;
const PAUSE_AFTER_DELETED = 250;

function Cursor() {
  return (
    <span className="ml-1 inline-block h-[1em] w-[2px] align-[-0.1em] bg-white/80 animate-pulse" />
  );
}

const MainSection = ({ videoUrl = localVideo }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const full = WORDS[index % WORDS.length];

    const next = isDeleting
      ? full.slice(0, Math.max(0, text.length - 1))
      : full.slice(0, text.length + 1);

    let delay = isDeleting ? DELETE_SPEED : TYPE_SPEED;

    if (!isDeleting && next === full) delay = PAUSE_AFTER_TYPED;
    if (isDeleting && next === "") delay = PAUSE_AFTER_DELETED;

    const t = setTimeout(() => {
      setText(next);

      if (!isDeleting && next === full) setIsDeleting(true);

      if (isDeleting && next === "") {
        setIsDeleting(false);
        setIndex((i) => i + 1);
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, isDeleting, index]);

  return (
    <section className="main-section relative overflow-hidden m-0 p-0 bg-transparent">
      <div className="relative mx-auto w-[100%] max-w-[1920px] pt-0">
        <div className="main-section__wrap relative">
          <div className="main-section__bg" aria-hidden="true">
            <div
              className="main-section__bg-union"
              style={{
                backgroundImage: `url(${unionBg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
            <div
              className="main-section__bg-lines"
              style={{
                backgroundImage: `url(${lines})`,
                backgroundRepeat: "repeat",
                backgroundSize: "auto",
              }}
            />
            <div
              className="main-section__bg-vignette"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.06) 55%, rgba(0,0,0,0.22) 100%)",
              }}
            />
          </div>

          <div className="main-section__card relative overflow-hidden rounded-[28px] shadow-[0_25px_120px_rgba(0,0,0,0.55)]">
            <div className="main-section__content relative px-6 pt-20 text-center text-white md:px-10 md:pt-24">
              <h1 className="mx-auto max-w-[1100px] text-[44px]/[1.05] font-semibold tracking-[-0.02em] md:text-[76px]/[1.02]">
                <span className="text-white/55">All-In-One Outsourcing</span>
                <br />
                <span className="text-white">
                  &amp;{" "}
                  <span className="inline-block min-w-[17ch]">
                    {text}
                    <Cursor />
                  </span>
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-[620px] text-[14px]/[1.6] text-white/70 md:text-[16px]/[1.7]">
                Scale your business with professional teams and instant online
                consultations. Hire Excellence today.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  className="min-h-12 rounded-[16px] bg-[#D9DEE1] px-10 text-[16px] font-medium text-[#202326] transition hover:bg-white"
                >
                  Book a demo
                </button>

                <button
                  type="button"
                  className="min-h-12 rounded-[16px] border border-white/45 bg-white/10 px-10 text-[16px] font-medium text-white backdrop-blur transition hover:bg-white/15"
                >
                  Get a quote
                </button>
              </div>
            </div>
          </div>

          <img
            alt=""
            aria-hidden="true"
            src={cubeLeft}
            className="cube-float-left pointer-events-none absolute left-[-120px] top-[210px] z-30 hidden w-[360px] select-none lg:block"
          />
          <img
            alt=""
            aria-hidden="true"
            src={cubeRight}
            className="cube-float-right pointer-events-none absolute right-[-140px] top-[250px] z-30 hidden w-[420px] select-none lg:block"
          />

          <div className="main-section__video pointer-events-none absolute inset-x-0 z-40">
            <div className="pointer-events-auto mx-auto main-section__video-inner">
              <div className="main-section__video-frame relative overflow-hidden rounded-[28px] bg-black border-2 border-[#16232B] shadow-[0_22px_70px_rgba(0,0,0,0.45)]">
                <VideoCard
                  videoSrc={videoUrl}
                  posterSrc={videoPoster}
                  borderColor="#16232B"
                  radius={28}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="main-section__afterSpace">
          <div className="h-main">
            <div className="h-left"></div>
            <div className="h-right"></div>
            <div className="h-down"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;