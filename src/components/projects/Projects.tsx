import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";

import { useMediaQuery } from "@mui/material";

import { EffectCards, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai"
import project from "../../constant/project";
import TargetProject from "./targetProject";

export default function Project() {

    const isMdScreen = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
    const isSmScreen = useMediaQuery("(min-width: 100px) and (max-width: 768px)");
    
    let slidesPerView = 4;

    if (isMdScreen) {
      slidesPerView = 2;
    }
      if (isSmScreen) {
        slidesPerView = 1;
      }
  return (
    <section
      className="flex flex-col md:mx-[110px] mb-20 mt-28 w-[80vw] pb-10"
      id="portafolio">
      <div
        className="mb-5 hidden md:flex rounded-[10px] bg-[#4AE2D91A] text-[#00FFFF] px-2 py-1 md:w-[16%]  lg:w-[14%] xl:w-[12%] 2xl:w-[10%] w-[30vw] "
        style={{ display: "inline-block" }}>
        🔗 Portafólio
      </div>
      <h2 className="text-white md:text-4xl font-extrabold text-[25px] ">
        Trabajos y proyectos
      </h2>
      <div className="w-full my-10 ">
        <Swiper
          className=" flex items-center justify-center"
          modules={[EffectCards, Pagination]}
          slidesPerView={slidesPerView}
          spaceBetween={20}>
          {project.map((slide, index) => (
            <SwiperSlide key={index}>
              <TargetProject
                description={slide.description}
                logo={slide.background}
                title={slide.title}
                tools={slide.tool}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="text-[#00FFFF] w-full text-right flex items-center justify-end pr-20">
        Desliza para ver más... &nbsp; <AiOutlineArrowRight />
      </p>
    </section>
  );
}
