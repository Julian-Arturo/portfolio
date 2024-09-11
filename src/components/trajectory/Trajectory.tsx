import React from "react";
import professional from "../../constant/professional";
import academy from "../../constant/academy";
import { AiOutlineArrowDown } from "react-icons/ai";

import TargetTrahectory from "./targetTrahectory";

export default function Trajectory() {
  return (
    <section
      className="flex justify-center items-center flex-col w-screen "
      id="carrera">
      <div
        className="mb-5 hidden md:flex rounded-[10px] bg-[#4AE2D91A] text-[#00FFFF] px-2 py-1"
        style={{ display: "inline-block" }}>
        💼 Carrera
      </div>
      <h2 className="text-white md:text-4xl font-extrabold text-[25px] mb-20">
        Tecnologías y habilidades
      </h2>

      <div className="grid md:grid-cols-2 md:gap-x-10 w-[80vw] justify-center items-center mb-5 ">
        <div className="flex flex-col md:items-center md:h-[75vw] 2xl:h-[55vw]">
          <h2 className="text-white md:text-2xl font-extrabold text-[25px] md:pl-0 pl-8">
            Área Profesional
          </h2>
          <h3 className="text-[#FFFFFF80] md:text-[20px] mt-1 md:pl-0  pl-8">
            2020 · Actualmente
          </h3>
          <div className=" flex md:flex-col h-full mt-16 md:gap-y-10 md:overflow-y-auto overflow-x-auto justify-start items-start md:w-full w-screen">
            {professional.map((slide, index) => {
              return (
                <TargetTrahectory
                  key={index}
                  date={slide.date}
                  company={slide.company}
                  description1={slide.descripción}
                  title={slide.title}
                  time={slide.time}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-col md:items-center  md:h-[75vw] 2xl:h-[55vw]">
          <h2 className="text-white md:text-2xl font-extrabold text-[25px] md:pl-0 pl-8">
            Área Académica
          </h2>
          <h3 className="text-[#FFFFFF80] md:text-[20px] mt-1 md:pl-0 pl-8">
            2018 · Actualmente
          </h3>
          <div className="flex md:flex-col h-full mt-16 md:gap-y-10 md:overflow-y-auto overflow-x-auto justify-start items-start md:w-full w-screen">
            {academy.map((slide, index) => {
              return (
                <TargetTrahectory
                  key={index}
                  date={slide.date}
                  description2={slide.descripción}
                  title={slide.title}
                  time={slide.time}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-[#00FFFF33]"></div>
      <p className="text-[#00FFFF] w-full text-right flex items-center justify-center my-10">
        Desliza para ver más... &nbsp; <AiOutlineArrowDown />
      </p>
    </section>
  );
}
