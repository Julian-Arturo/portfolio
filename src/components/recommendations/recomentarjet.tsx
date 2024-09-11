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
  img: string | StaticImageData;
  name: string;
  position: string;
  description: string;
}

export default function TargetRecomen({
  name,
  description,
  logo,
  position,
  img,
}: Props) {
  const isLgScreen = useMediaQuery(" (min-width: 1024px)");
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
      className=" p-6  container flex  flex-col  border border-[#00FFFF80] hover:bg-[#00FFFF1A] w-full 2xl:h-[15vw] 2xl:w-[25vw] xl:h-[18vw] lg:h-[24vw] lg:w-[38vw] rounded-[20px] xl:w-[30vw] justify-around">
      <Image
        src={logo}
        alt="logo IMG About"
        className="pb-2  flex items-center justify-center relative top-1"
      />
      <p className="md:text-[10px] text-[#FFFFFF80]  cursor-pointer text-justify text-[12px]">
        {description}
      </p>
      <div className="flex gap-3 mt-5">
        <Image
          src={img}
          alt="logo IMG About"
          className=" pb-2 flex items-center justify-center lg:h-[60px] lg:w-[55px] md:h-[50px] md:w-[45px] "
        />
        <div className="flex  flex-col ">
          <h2 className="text-white orbitronsemi lg:text-[13px] xl:text-[16px]  text-[14px] font-bold">
            {name}
          </h2>
          <p className="text-[#EEEEEE80] text-[12px]">{position}</p>
        </div>
      </div>
    </div>
  );
}
