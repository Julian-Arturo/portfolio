import { useEffect, useRef } from "react";
import Image from "next/image";
import { AiOutlineArrowDown } from "react-icons/ai";

import julian from "../../public/images/aboutme/julian.png";

import  gsap  from "gsap";
import useTranslate from "@/hooks/useTranslate";
import BtnWhatsApp from "./reut/BtnWhatsApp";
import SocialMediaLinks from "./reut/BtnSocialMedia";

interface PopupInitial {
  closePopup: Function;
}

export default function PopupInitial({ closePopup }: PopupInitial) {
  const tHome = useTranslate("home");
  const refApp = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const refSaludotext = useRef<HTMLDivElement>(null);
  const refNombretext = useRef<HTMLHeadingElement>(null);
  const refCargotext = useRef<HTMLHeadingElement>(null);
  const refRedesIcon = useRef<HTMLImageElement>(null);
  const refAvatar = useRef<HTMLImageElement>(null);
  const refButtonEntrar = useRef<HTMLButtonElement>(null);
  const refButtonCV = useRef<HTMLButtonElement>(null);
  const refButtonContactanos = useRef<HTMLButtonElement>(null);

  // Mobile
  const refSaludotextMobile = useRef<HTMLDivElement>(null);
  const refNombretextMobile = useRef<HTMLHeadingElement>(null);
  const refCargotextMobile = useRef<HTMLHeadingElement>(null);

  const addAnim = () => {
    tl.current = gsap.timeline();

    tl.current.fromTo(
      refSaludotext.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.1 }
    );
    tl.current.fromTo(
      refNombretext.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 0.6 }
    );
    tl.current.fromTo(
      refCargotext.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 0.6 }
    );
    tl.current.fromTo(
      refRedesIcon.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5 }
    );
    tl.current.fromTo(
      refAvatar.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5 }
    );
    tl.current.fromTo(
      refButtonEntrar.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.5 }
    );
    tl.current.fromTo(
      refButtonCV.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.5 }
    );

     tl.current.fromTo(
       refButtonContactanos.current,
       { y: "100%", opacity: 0 },
       { y: "0%", opacity: 1, duration: 0.5 }
     );
    
    //Mobile
     tl.current.fromTo(
       refSaludotextMobile.current,
       { scale: 0, opacity: 0 },
       { scale: 1, opacity: 1, duration: 0.1 }
     );
     tl.current.fromTo(
       refNombretextMobile.current,
       { x: "-100%", opacity: 0 },
       { x: "0%", opacity: 1, duration: 0.6 }
     );
     tl.current.fromTo(
       refCargotextMobile.current,
       { x: "-100%", opacity: 0 },
       { x: "0%", opacity: 1, duration: 0.6 }
     );
    
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    addAnim();
    return () => {
      if (tl.current) {
        tl.current.kill();
      }
      document.body.style.overflow = "auto";
    };
  }, []);


  return (
    <div className=" fixed top-0 left-0 z-50 w-screen md:h-full  bg-[#090E16] ">
      <div className="md:my-10 lg:my-0  w-screen max-w-full grid lg:grid-cols-[30%_35%_25%] items-center gap-x-5 ">
        <div className="md:ml-20 flex flex-col md:items-start items-center justify-center md:py-10 mt-10 md:mt-0  bg-green-2 gap-y-3 ">
          <div
            ref={refSaludotext}
            className=" rounded-[10px] bg-[#4AE2D91A] text-[#00FFFF] xl:text-xl  xl:px-5 px-2 py-1 hidden md:flex">
            👋 Saludos!
          </div>
          <h1
            ref={refNombretext}
            className=" text-[52px] 2xl:text-[72px] xl:text-[62px] text-white font-bold  leading-[60px] hidden md:flex">
            Julian Hernandez
          </h1>
          <p
            ref={refCargotext}
            className="text-[#FFFFFF80] hidden md:flex xl:text-xl">
            Front-end developer · UI designer
          </p>
          <SocialMediaLinks ref={refRedesIcon} />
        </div>
        {/* Avatar Inicio */}
        <div className="w-full h-full flex flex-col items-center justify-center lg:p-10 mx-auto lg:h-screen gap-y-10 flex-grow-1">
          <div
            ref={refAvatar}
            className="md:max-w-[20rem] md:max-h-[30rem] w-[50vw] h-[50vw] relative flex items-center justify-center md:ml-10 mt-10">
            <Image priority={true} src={julian} alt="Avatar" />
          </div>
          <button
            ref={refButtonEntrar}
            onClick={() => closePopup()}
            className="px-10 py-1  border border-[#00FFFF]  text-[#00FFFF] rounded-[7px] hover:text-[#FFFFFF] hover:border-[#FFFFFF] md:mb-0  mb-10 xl:px-16 xl:py-2 md:ml-10">
            Entrar
          </button>
        </div>
        <div className="md:hidden ml-5" ref={refSaludotextMobile}>
          <div className=" rounded-[10px] bg-[#4AE2D91A] text-[#00FFFF] px-2 py-1 flex items-start justify-start w-[30vw]">
            👋 Saludos!
          </div>
          <h1
            className=" text-[52px] text-white font-bold leading-[60px]"
            ref={refNombretextMobile}>
            Julian Hernandez
          </h1>
          <p className="text-[#FFFFFF80]" ref={refCargotextMobile}>
            Front-end developer · UI designer
          </p>
        </div>

        <div className="flex-shrink-0 w-full h-full flex lg:flex-col items-center justify-center p-10 lg:h-screen  gap-y-5 bg-green-1 mb-10 md:gap-x-5 lg:gap-x-0">
          <button
            ref={refButtonCV}
            className="firefly px-2 py-1 flex items-center text-[#00FFFF] hover:text-[#FFFFFF] xl:text-2xl"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/public/julian_hernandez_cv_front_end.pdf";
              link.download = "julian_hernandez_cv_front_end.pdf";
              link.click();
            }}>
            Descargar CV <AiOutlineArrowDown />
          </button>
          <BtnWhatsApp ref={refButtonContactanos} />
        </div>
      </div>
    </div>
  );
}
