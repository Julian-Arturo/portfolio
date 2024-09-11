import Image from "next/image";
import julian from "../../../public/images/aboutme/julian.png";
export default function Aboutme() {
  return (
    <section
      className="flex flex-col md:flex-row md:gap-x-16 justify-center items-center mt-10"
      id="sobremi">
      <div className="md:max-w-[20rem] md:max-h-[20rem] 2xl:max-w-[25rem] 2xl:max-h-[35rem] w-[50vw]  h-[30vw] flex flex-col items-center justify-center lg:h-screen md:mr-10 mt-10">
        <Image
          className="flex justify-center items-center md:ml-[10vw] 2xl:ml-[5vw]"
          priority={true}
          src={julian}
          alt="Avatar"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col gap-y-5  md:w-[50vw] w-[80vw] md:mt-0 mt-10 ">
        <div className="rounded-[10px] bg-[#4AE2D91A] text-[#00FFFF] px-2 py-1 md:w-[12vw] w-[30vw] 2xl:w-[7vw] md:text-[16px] text-[12px] mt-10">
          🧐 Sobre mi
        </div>
        <h2 className="text-white md:text-4xl font-extrabold ">
          Julian Arturo Hernandez Urieles{" "}
        </h2>
        <p className="text-[#FFFFFF80] text-justify xl:text-[20px]">
          👋 ¡Hola! Soy Julián Hernández, estudiante apasionado por la
          ingeniería en sistemas. Tengo 20 años, actualmente cuento con
          experiencia en desarrollo de aplicaciones móviles, páginas web y el
          diseño de interfaces UX/UI. Disfruto enfrentar desafíos y encontrar
          soluciones creativas. Mi objetivo es crecer y aprender en el campo de
          la ingeniería, manteniéndome actualizado con las últimas tecnologías.
          Valoro el trabajo en equipo y la comunicación efectiva. Estoy
          emocionado por contribuir al éxito de proyectos tecnológicos
          desafiantes. ¡Gracias por visitar mi portafolio web!
        </p>
      </div>
    </section>
  );
}
