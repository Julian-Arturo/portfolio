import React, { useRef, useState } from "react";
import { BsPlay, BsPause } from "react-icons/bs";

interface Props {
  title: string;
  videoUrl: string;
}

export default function TargetProjectVideo({ title, videoUrl }: Props) {
  const videoRef = useRef<HTMLIFrameElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;

    if (video) {
      if (isPlaying) {
        video.contentWindow?.postMessage('{"method":"pause","value":""}', "*");
      } else {
        video.contentWindow?.postMessage('{"method":"play","value":""}', "*");
      }

      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="cursor-pointer p-3 relaway container flex flex-col border border-[#00FFFF80] hover:bg-[#00FFFF1A] w-full rounded-[20px]">
      <div className="relative">
        <div style={{ padding: "49.58% 0 0 0", position: "relative" }}>
          <iframe
            src={videoUrl}
            allow="autoplay; fullscreen"
            style={{
              cursor: "pointer",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title={title}
            onClick={handlePlayPause}></iframe>
        </div>
        
      </div>
      <div className="grid grid-cols-[80%_20%] justify-center items-center">
        <h2 className="text-white orbitronsemi pb-2 text-xl lg:text-[10px] xl:text-[14px] 2xl:text-[20px] text-[11px] font-bold ml-4">
          {title}
        </h2>
        <button
          className="flex items-center text-xl lg:text-[10px] xl:text-[14px] text-[#FFFFFF80] 2xl:text-[20px] text-[10px]"
          onClick={handlePlayPause}>
          Ver &nbsp;
          {isPlaying ? <BsPause /> : <BsPlay />}
        </button>
      </div>
    </div>
  );
}
