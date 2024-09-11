import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/Logo.svg";

export default function Header() {
  return (
    <div className="fixed  mt-5 w-full left-0 right-0 top-0 z-50 md:flex hidden">
      <nav className="bg-[#131c2a] w-full ml-20 rounded-[10px] flex items-center justify-between">
        <div className="flex items-center">
          <Image src={logo} alt="logo" className="w-[30px] ml-5 h-[30px]" />
        </div>
        <div className="flex h-10 items-center text-[14px] mr-6">
          <Link
            href="#home"
            className="text-[#FFFFFF80] rounded-md px-3 py-2 hover:text-[#00FFF0] font-medium"
            aria-current="page">
            Inicio
          </Link>
          <Link
            href="#sobremi"
            className="text-[#FFFFFF80] rounded-md px-3 py-2 hover:text-[#00FFF0] font-medium">
            Sobre mi
          </Link>
          <Link
            href="#portafolio"
            className="text-[#FFFFFF80] rounded-md px-3 py-2 hover:text-[#00FFF0] font-medium">
            Portafolio
          </Link>
          <Link
            href="#skills"
            className="text-[#FFFFFF80] rounded-md px-3 py-2 hover:text-[#00FFF0] font-medium">
            Skills
          </Link>
          <Link
            href="#carrera"
            className="text-[#FFFFFF80] rounded-md px-3 py-2 hover:text-[#00FFF0] font-medium">
            Carrera
          </Link>
          <Link
            href="#recomendaciones"
            className="text-[#FFFFFF80] rounded-md px-3 py-2 hover:text-[#00FFF0] font-medium">
            Recomendaciones
          </Link>
          <Link
            href="#contacto"
            className="text-[#FFFFFF80] rounded-md px-3 py-2 hover:text-[#00FFF0] font-medium">
            Contacto
          </Link>
        </div>
      </nav>
      <button className="text-[#FFFFFF80] mx-5 bg-[#131c2a] rounded-[10px] px-3">
        Español
      </button>
    </div>
  );
}
