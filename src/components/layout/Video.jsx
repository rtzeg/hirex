import { useRef, useState } from "react";

const VideoCard = ({
  videoSrc,                 // локальный файл: import localVideo from "...";
  posterSrc,                // картинка-превью (можно screenshot)
  borderColor = "#16232B",  // твой бордер
  radius = 28
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const start = async () => {
    setIsPlaying(true);

    // дожидаемся, когда видео появится в DOM
    requestAnimationFrame(async () => {
      try {
        await videoRef.current?.play();
      } catch (e) {
        // автоплей может блокироваться; тогда пользователь нажмёт play на контролах
      }
    });
  };

  return (
    <div
      className="relative overflow-hidden bg-black shadow-[0_22px_70px_rgba(0,0,0,0.45)]"
      style={{
        borderRadius: `${radius}px`,
        border: `2px solid ${borderColor}`
      }}
    >
      <div className="aspect-video w-full">
        {!isPlaying ? (
          <button
            type="button"
            onClick={start}
            className="group relative h-full w-full"
            aria-label="Play video"
          >
            {/* превью */}
            <img
              src={posterSrc}
              alt=""
              className="h-full w-full object-cover opacity-90"
              draggable="false"
            />

            {/* легкая затемнялка */}
            <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/25" />

            {/* кнопка как на YouTube */}
            <span className="absolute left-1/2 top-1/2 grid h-[64px] w-[92px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[18px] bg-[#FF0000] shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition-transform group-hover:scale-[1.05]">
              <span className="ml-[4px] block h-0 w-0 border-y-[13px] border-l-[22px] border-y-transparent border-l-white" />
            </span>
          </button>
        ) : (
          <video
            ref={videoRef}
            className="h-full w-full"
            src={videoSrc}
            controls
            playsInline
            preload="metadata"
          />
        )}
      </div>
    </div>
  );
};

export default VideoCard;