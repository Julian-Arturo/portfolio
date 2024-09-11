import Image from "next/image";
import tools from "../../../public/images/WorkingTechs.png"
import toolsAfter from "../../../public/images/ProjectsTechs.png";

export default function TechnoloGy() {
    return (
      <section
        className="md:w-full w-[80vw] flex justify-center flex-col items-center "
        id="skills">
        <div
          className="mb-5 hidden md:flex rounded-[10px] bg-[#4AE2D91A] text-[#00FFFF] px-2 py-1"
          style={{ display: "inline-block" }}>
          🧑‍💻 Skills · Experiencias
        </div>
        <h2 className="text-white md:text-4xl font-extrabold text-[25px] ">
          Tecnológias y habilidades
        </h2>
        <h3 className="text-[#FFFFFF80] md:text-[20px] mt-20 text-[12px]">
          Herramientas más usadas
        </h3>
        <Image src={tools} alt="Herramientas" className="mt-10 md:w-[50vw]" />
        <h3 className="text-[#FFFFFF80] md:text-[20px] mt-10 text-[12px]">
          Otras herramientas con las que he trabajado
        </h3>
        <Image
          src={toolsAfter}
          alt="Herramientas"
          className="mt-10 md:w-[40vw] w-[70vw] md:mb-40 mb-20"
        />
      </section>
    );
}