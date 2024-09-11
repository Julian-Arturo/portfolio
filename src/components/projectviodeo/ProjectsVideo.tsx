import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";

import { useMediaQuery } from "@mui/material";

import { EffectCards, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai"
import project from "../../constant/projectvideo";
import TargetProject from "./targetProjectVideo";

export default function ProjectVideo() {

    const isMdScreen = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
    const isSmScreen = useMediaQuery("(min-width: 100px) and (max-width: 768px)");
    
    let slidesPerView = 3;

    if (isMdScreen) {
      slidesPerView = 2;
    }
      if (isSmScreen) {
        slidesPerView = 1;
      }
  return (
    <section className="flex flex-col  mb-20 w-[80vw] md:mx-[110px]">
      <h2 className="text-white md:text-4xl font-extrabold text-[25px]">
        Proyectos en video
      </h2>
      <p className="text-[#FFFFFF80] lg:text-[20px] mt-3 md:w-[60%]">
        Cuento con algunos años de experiencia editando videos y me di a la
        tareas de mostrar mis proyectos en formato video.
      </p>
      <div className="w-full my-10 ">
        <Swiper
          className=" flex items-center justify-center"
          modules={[EffectCards, Pagination]}
          slidesPerView={slidesPerView}
          spaceBetween={20}>
          {project.map((slide, index) => (
            <SwiperSlide key={index}>
              <TargetProject videoUrl={slide.videoUrl} title={slide.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="text-[#00FFFF80] w-full text-right flex items-center justify-end pr-20">
        Desliza para ver más... &nbsp; <AiOutlineArrowRight />
      </p>
    </section>
  );
}
