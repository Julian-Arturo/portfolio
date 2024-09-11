import React, { forwardRef, Ref } from "react";
import { PiWhatsappLogo } from "react-icons/pi";

interface BtnWhatsAppProps {
  text?: string; // Propiedad opcional para personalizar el texto del botón
}


const BtnWhatsApp = forwardRef(
  (props: BtnWhatsAppProps, ref: Ref<HTMLButtonElement>) => {
    const { text } = props;

    const generateWhatsAppLink = () => {
      const url = `https://wa.link/n1s77w`;
      window.open(url, "_blank");
    };

    return (
      <button
        ref={ref}
        className="px-2 py-1 flex items-center border border-[#00FFF0] bg-green-2 hover:text-[#FFFFFF] hover:border-[#FFFFFF] text-[#00FFF0] rounded-[10px] xl:text-xl"
        onClick={generateWhatsAppLink}>
        <PiWhatsappLogo /> &nbsp; {text || "Conversemos"}
      </button>
    );
  }
);


export default BtnWhatsApp;
