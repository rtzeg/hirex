import lines from "../../assets/lines.png";
import unionBg from "../../assets/Union.png";

import cubeLeft from "../../assets/01.png";
import cubeRight from "../../assets/02.png";

import "./main-section.css"

const isVideoFile = (url) => /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);

const MainSection = ({
    videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"
}) => {
    return (
        <section className="relative overflow-hidden m-0 p-0 bg-transparent">
            {/* КОНТЕЙНЕР (твои width НЕ трогаю) */}
            <div className="relative mx-auto w-[100%] max-w-[1920px] pt-0">
                {/* Wrapper НЕ hidden, чтобы видео + кубы могли вылезать */}
                <div className="relative">
                    {/* СИНЯЯ КАРТОЧКА (ТОЛЬКО ОНА СИНЯЯ) */}
                    <div className="relative overflow-hidden rounded-[28px] shadow-[0_25px_120px_rgba(0,0,0,0.55)]">
                        {/* 2-й фон: Union.png (основной) */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url(${unionBg})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}
                        />

                        {/* 1-й фон: линии (поверх Union) */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 opacity-[0.16]"
                            style={{
                                backgroundImage: `url(${lines})`,
                                backgroundRepeat: "repeat",
                                backgroundSize: "auto"
                            }}
                        />

                        {/* легкая виньетка/читабельность */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.06) 55%, rgba(0,0,0,0.22) 100%)"
                            }}
                        />

                        {/* Контент (синюю часть УВЕЛИЧИЛ по высоте) */}
                        <div className="relative px-6 pt-20 pb-[260px] text-center text-white md:px-10 md:pt-24 md:pb-[330px]">
                            <h1 className="mx-auto max-w-[1100px] text-[44px]/[1.05] font-semibold tracking-[-0.02em] md:text-[76px]/[1.02]">
                                <span className="text-white/55">All-In-One Outsourcing</span>
                                <br />
                                <span className="text-white">&amp; Expert Support.</span>
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

                    {/* КУБЫ ВЫНЕСЕНЫ НАРУЖУ КАРТОЧКИ -> боковые части прозрачные (цвет берет body) */}
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

                    {/* ВИДЕО: вылезает вниз */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-[-310px] md:bottom-[-500px] z-20">
                        <div className="pointer-events-auto mx-auto w-[40%] max-w-[1133px] md:w-[70%]">
                            <div className="relative rounded-[28px]">
                                {/* Само видео */}
                                <div className="relative overflow-hidden rounded-[28px] bg-black border-2 border-[#16232B] shadow-[0_22px_70px_rgba(0,0,0,0.45)]">
                                    <div className="aspect-video w-full">
                                        {isVideoFile(videoUrl) ? (
                                            <video className="h-full w-full" controls src={videoUrl} />
                                        ) : (
                                            <iframe
                                                className="h-full w-full"
                                                src={videoUrl}
                                                title="Hirex video"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Серое поле снизу (увеличил, чтобы места хватало) */}
                <div className="h-[520px] md:h-[550px]" >
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

