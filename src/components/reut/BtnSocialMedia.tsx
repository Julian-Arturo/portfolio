import Image from "next/image";
import linkedin from "../../../public/images/popupInitial/linkedin.png";
import github from "../../../public/images/popupInitial/github.png";
import instagram from "../../../public/images/popupInitial/instagram.png";
import React, { forwardRef, Ref } from "react";

interface SocialMediaLinksRef {
  text?: string;
}

const SocialMediaLinks = forwardRef(
  (props: SocialMediaLinksRef, ref: Ref<HTMLDivElement>) => {
    const linkedinUrl = "https://www.linkedin.com/in/julianhern%C3%A1ndez/";
    const githubUrl = "https://github.com/Julian-Arturo";
    const instagramUrl = "https://www.instagram.com/julian_hdez01/";
    const { text } = props;

    return (
      <div className="flex gap-x-3 mt-2" ref={ref}>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <Image src={linkedin} alt="linkedin" className="w-[30px] h-[30px]" />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Image src={github} alt="github" className="w-[30px] h-[30px]" />
        </a>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src={instagram}
            alt="instagram"
            className="w-[30px] h-[30px]"
          />
        </a>
      </div>
    );
  }
);

export default SocialMediaLinks;
