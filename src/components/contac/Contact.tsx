import React from "react";
import { PiWhatsappLogo } from "react-icons/pi";
import { LiaTelegramPlane } from "react-icons/lia";
import { AiOutlineArrowUp } from "react-icons/ai";
import BtnWhatsApp from "../reut/BtnWhatsApp";

export default function Contac() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const generateWhatsAppLink = () => {
    const url = `https://wa.link/n1s77w`;
    window.open(url, "_blank");
  };
  const emailAddress = "julianarturo1216@gmail.com";
  const openGmailCompose = () => {
    const url = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
      emailAddress
    )}`;
    window.open(url, "_blank");
  };
  return (
    <section
      className="flex md:justify-center md:items-center items-start md:ml-0 ml-10 flex-col w-screen"
      id="contacto">
      <div
        className="mb-5  rounded-[10px] bg-[#4AE2D91A] text-[#00FFFF] px-2 py-1"
        style={{ display: "inline-block" }}>
        📬 Contactame
      </div>
      <h2 className="text-white md:text-4xl font-extrabold text-[25px] md:mb-20 mb-5">
        Vamos a conversar!
      </h2>
      <div className="flex md:flex-row flex-col md:gap-20 gap-5  w-full md:justify-center md:items-center items-start">
        <BtnWhatsApp />
        <div className="flex flex-col md:items-center md:justify-center">
          <p className="text-[#00FFFF] ml-2">E-Mail</p>
          <button
            className="px-2 py-1 flex items-center text-[#FFFFFF80] hover:text-[#FFFFFF] xl:text-xl"
            onClick={openGmailCompose}>
            {emailAddress}
            <span className="ml-2 text-[#00FFFF]">
              <LiaTelegramPlane />
            </span>
          </button>
          B
        </div>
      </div>

      <button
        className="px-2 py-1 flex items-center text-[#00FFFF] hover:text-[#FFFFFF] xl:text-xl mt-20"
        onClick={scrollToTop}>
        Volver arriba
        <AiOutlineArrowUp className="ml-5" />
      </button>
    </section>
  );
}
