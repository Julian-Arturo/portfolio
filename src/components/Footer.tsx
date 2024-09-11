import React from "react";
import logoFooter from "../../public/images/Logofooter.svg";
import linkedin from "../../public/images/popupInitial/linkedin.png";
import instagram from "../../public/images/popupInitial/instagram.png";
import github from "../../public/images/popupInitial/github.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaWhatsappSquare, FaInstagramSquare } from "react-icons/fa";

import Image from "next/image";
import SocialMediaLinks from "./reut/BtnSocialMedia";

const Footer = () => {
  return (
    <footer className="fixed absolute bg-[#00FFFF1A] w-screen xl:h-[13vw] md:h-[18vw] h-[70vw] mt-20 flex md:flex-row flex-col md:px-[80px] items-center md:justify-between justify-center gap-5 z-10">
      <Image src={logoFooter} alt="logo" className="w-[10vw] lg:w-[7vw]" />
      <h2 className="text-[#FFFFFF] lg:text-[18px]">
        Julian Hernandez - Desarrollador
      </h2>
      <SocialMediaLinks />
      <div className="text-white lg:text-[16px] text-[12px] font-light md:text-left text-center">
        Cel: 3003550714 <br /> Email: julianarturo1216@gmail.com
      </div>
    </footer>
  );
};

export default Footer;
