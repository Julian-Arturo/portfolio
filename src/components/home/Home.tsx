import React from "react";
import Image from "next/image";
import useTranslate from "@/hooks/useTranslate";
import { AiOutlineArrowDown } from "react-icons/ai";
import BtnWhatsApp from "../reut/BtnWhatsApp";
import SocialMediaLinks from "../reut/BtnSocialMedia";
const RenderHome = () => {
  const contentTranslate = useTranslate("home");
  return (
    <section className="flex flex-col w-screen " id="home">
      <div className="h-screen w-full grid lg:grid-cols-[30%_35%_25%] items-center gap-x-10 md:mt-10 lg:mt-0 justify-center">
        <div className=" flex flex-col md:items-start  items-center justify-center md:py-10 md:mt-0 mt-5 lg:ml-20  bg-green-2 gap-y-3">
          <div className="hidden md:flex rounded-[10px] bg-[#4AE2D91A] text-[#00FFFF] px-2 py-1">
            👋 Saludos!
          </div>
          <h1 className="hidden md:flex text-[42px] 2xl:text-[60px] text-white font-bold leading-[50px] 2xl:leading-[60px] lg:w-[80%]">
            Julian Hernandez
          </h1>
          <p className="text-[#FFFFFF80] hidden md:flex">
            Front-end developer · UI designer
          </p>
          <SocialMediaLinks />
        </div>
        {/* Avatar Inicio */}

        <div className="md:max-w-[25rem] md:max-h-[25rem] 2xl:max-w-[40rem] 2xl:max-h-[40rem] relative  flex flex-col items-center lg:h-screen gap-y-10 firefly-container">
          <Image
            priority={true}
            src="/images/popupInitial/AvatarAndIcons.svg"
            alt="Avatar"
            width={1000}
            height={1000}
          />
        </div>
        <div className="md:hidden ml-5">
          <div className=" rounded-[10px] bg-[#4AE2D91A] text-[#00FFFF] px-2 py-1 w-[100px] text-[14px]">
            👋 Saludos!
          </div>
          <h2 className=" text-[12vw] mt-5 text-white font-bold leading-[60px]">
            Julian Hernandez
          </h2>
          <p className="text-[#FFFFFF80] ">Front-end developer · UI designer</p>
        </div>

        <div className=" w-full h-full flex lg:flex-col items-center justify-center p-10 lg:h-screen  gap-y-5 bg-green-1 mb-10 md:gap-x-5 lg:gap-x-0">
          <button
            className="firefly px-2 py-1 flex items-center text-[#00FFF0] hover:text-[#FFFFFF] xl:text-2xl"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/public/julian_hernandez_cv_front_end.pdf";
              link.download = "julian_hernandez_cv_front_end.pdf";
              link.click();
            }}>
            Descargar CV <AiOutlineArrowDown />
          </button>

          <BtnWhatsApp />
        </div>
      </div>
      <div className="w-full h-[2px] bg-[#00FFFF33] md:mt-0 mt-10"></div>
    </section>
  );
};

const HomeView = () => {
  return <RenderHome />;
};

export default HomeView;
