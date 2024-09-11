import Image, { ImageProps } from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

interface Props {
  title: string;
  description1?: string;
  description2?: string;
  date?: string;
  time?: string;
  company?: string; 
}

export default function TargetTrahectory({
  title,
  description1,
  description2,
  date,
  time,
  company
}: Props) {
  const description = description1 || description2;

  return (
    <div className="cursor-pointer md:mx-8 mx-2 flex flex-col px-5 py-5 border border-[#00FFFF80] hover:bg-[#00FFFF1A] mb-10 md:mb-0 rounded-[20px] md:w-[32vw] xl:w-[35vw] gap-y-2">
      <h2 className="text-white orbitronsemi   font-bold xl:text-[18px] text-left md:text-[16px] text-[12px] md:w-auto w-[18rem]">
        {title}
      </h2>
      <h3 className="text-[#00ffff86] md:text-[14px] xl:text-[16px] text-[12px]">
        {company}
      </h3>
      {description && (
        <p className="xl:text-x1 md:text-[12px] text-[12px] text-left text-[#FFFFFF80]">
          {description}
        </p>
      )}
      <div className="flex w-full justify-between">
        <h3 className="text-[#00FFFF] md:text-[12px] xl:text-[16px] text-[12px]">
          {time}
        </h3>
        <h3 className="text-[#00FFFF] md:text-[11px] xl:text-[16px] text-[12px]">
          {date}
        </h3>
      </div>
    </div>
  );
}
