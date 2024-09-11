import Image, { ImageProps } from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

import SwiperCore, { EffectCards, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";
import { useMediaQuery } from "@mui/material";

interface Props {
  logo: string | StaticImageData;
  title: string;
  tools: string[];
  description: string;
}

export default function TargetProject({
  title,
  description,
  logo,
  tools,
}: Props) {
  const isLgScreen = useMediaQuery(
    " (min-width: 1024px)"
  );
  const isMdScreen = useMediaQuery(
    "(min-width: 768px) and (max-width: 1024px)"
  );
  const isSmScreen = useMediaQuery("(min-width: 576px) and (max-width: 768px)");

  let slidesPerView = 2;

  if (isMdScreen) {
    slidesPerView = 2;
  }
  if (isSmScreen) {
    slidesPerView = 1;
  }
  return (
    <div
      className="p-6 relaway container flex  flex-col  border border-[#00FFFF80] hover:bg-[#00FFFF1A] w-full
     rounded-[20px] ">
      <h2 className="text-white orbitronsemi pb-2 text-xl lg:text-[13px] xl:text-[16px]  text-[16px] font-bold">
        {title}
      </h2>
      <p className="md:text-[16px] lg:text-[14px] xl:text-[10px]  2xl:text-[1rem] text-[#FFFFFF80] 2xl:h-[12rem]  xl:h-[7rem] lg:h-[10rem] h-[12rem] overflow-auto cursor-pointer text-justify">
        {description}
      </p>
      <div className="container">
        <Swiper
          modules={[EffectCards, Autoplay]}
          slidesPerView={slidesPerView}
          autoplay={true}>
          {tools.map((tool, index) => (
            <SwiperSlide key={index}>
              <div className="mb-5 rounded-[5px] mr-2 mt-5 bg-[#4AE2D91A] text-[#00FFFF] 2xl:px-3 py-1 lg:text-[10px] xl:text-[10px] 2xl:text-[16px] text-[12px] pl-4 lg:pl-3">
                {tool}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Image
        src={logo}
        alt="logo IMG About"
        className="pb-2  flex items-center justify-center w-full 2xl:h-[10vw] h-[20vw] rounded-[20px]"
      />
    </div>
  );
}
