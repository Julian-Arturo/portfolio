import Image, { ImageProps } from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

interface Props {
  logo: string | StaticImageData;
  title: string;
  description: string;
}

export default function BoxExperience({ title, description, logo }: Props) {
  return (
    <div className="relaway container mx-8 flex  flex-col items-center justify-center    border  border-[#00FFFF80] hover:bg-[#00FFFF1A] lg:h-52 lg:w-60 xl:h-60 xl:w-64 md:h-52 md:w-56 w-[80vw] h-[60vw] mb-10 md:mb-0 rounded-[20px]">
      <Image src={logo} alt="logo IMG About" className="pb-2" />
      <p className="xl:text-x1 md:text-[14px] w-3/4  text-center  text-white">
        {description}
      </p>
      <h2 className="text-white orbitronsemi pb-2 text-xl text-[24px] font-bold xl:text-[28px]">
        {title}
      </h2>
    </div>
  );
}
