import experien from "../../constant/experiencie"
import BoxExperience from "./container";
export default function Experience() {
    return (
      <div className="w-screen flex flex-col mt-20 items-center justify-center ">
        <div className="  flex flex-col md:flex-row items-center justify-center mb-10">
          {experien.map((service, key) => (
            <BoxExperience
              key={key}
              title={service.title}
              description={service.descripción}
              logo={service.logo}
            />
          ))}
        </div>
        <div className="flex md:flex-row flex-col   bg-[#00FFFF1A] md:h-32 2xl:w-[60vw] xl:w-[70vw] lg:w-[84vw] md:w-[84vw] mb-20 rounded-[20px] justify-around items-center w-screen h-[70vw] ">
          <div>
            <h2 className="text-[16px] text-[#00FFFF] flex justify-center items-center">
              Desenvolvedor
            </h2>
            <h2 className="text-[30px] text-[#00FFFF] font-bold flex justify-center items-center">
              Front-end
            </h2>
          </div>
          <div>
            <h2 className="text-[16px] text-[#00FFFF] flex justify-center items-center">
              Docenas de proyectos y
            </h2>
            <h2 className="text-[30px] text-[#00FFFF] font-bold flex justify-center items-center">
              Experiencias
            </h2>
          </div>
          <div>
            <h2 className="text-[16px] text-[#00FFFF] flex justify-center items-center">
              Designer Freelancer
            </h2>
            <h2 className="text-[30px] text-[#00FFFF] font-bold flex justify-center items-center">
              UI · UX
            </h2>
          </div>
        </div>

        <div className="w-full h-[2px] bg-[#00FFFF33] "></div>
      </div>
    );
}