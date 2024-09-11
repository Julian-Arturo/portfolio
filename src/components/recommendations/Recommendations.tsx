import recomen from "../../constant/recommendations";
import TargetRecomen from "./recomentarjet";

export default function Recommendations() {
  return (
    <section
      className="md:mt-0 mt-20 md:mx-[110px] flex justify-start items-start  flex-col mb-32 "
      id="recomendaciones">
      <div className="mb-5 rounded-[10px] bg-[#4AE2D91A] text-[#00FFFF] px-2 py-1 md;:text-[1.5rem] text-[18px]">
        💬 Recomendaciones
      </div>
      <div className=" w-full md:h-60 flex md:flex-row flex-col gap-10 justify-center items-center xl:mt-20">
        {recomen.map((remm, index) => (
          <TargetRecomen
            key={index}
            description={remm.description}
            img={remm.img}
            logo={remm.logo}
            name={remm.name}
            position={remm.position}
          />
        ))}
      </div>
    </section>
  );
}
// 