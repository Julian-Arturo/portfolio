import PopupInitial from "@/components/PopupInitial";
import Layout from "../layouts/default";
import useTranslate from "@/hooks/useTranslate";
import { useState } from "react";
import HomeView from "@/components/home/Home";
import Experience from "@/components/experience/Experience";
import Aboutme from "@/components/aboutme/Aboutme";
import Project from "@/components/projects/Projects";
import ProjectVideo from "@/components/projectviodeo/ProjectsVideo";
import TechnoloGy from "@/components/technology/Technology";
import Trajectory from "@/components/trajectory/Trajectory";
import Recommendations from "@/components/recommendations/Recommendations";
import Contac from "@/components/contac/Contact";
import Background from "@/components/background";

export default function Home() {
  const [showPopupInitial, setShowPopupInitial] = useState(true);

  const t = useTranslate("home");

  const closePopup = () => {
    setShowPopupInitial(false);
  };

  return (
    <Layout
      title="Julian Hernandez"
      description="Julian Hernandez - Desarrollador Front-end y Diseñador UI | Bienvenido a mi página web personal. Soy Julian Hernandez, un apasionado desarrollador front-end y diseñador UI con amplia experiencia en el desarrollo de aplicaciones web y diseño de interfaces. Explora mi portafolio de proyectos, descubre mi experiencia y habilidades, y ponte en contacto conmigo para colaboraciones y oportunidades en el campo de la ingeniería en sistemas. ¡Descarga mi CV y descubre cómo combino funcionalidad y estética para crear experiencias digitales excepcionales! Acompáñame en mi viaje de crecimiento y aprendizaje en la industria tecnológica. ¡Bienvenido a mi mundo digital!">
      <div className="snap-y snap-mandatory flex flex-col items-center ">
        {showPopupInitial && <PopupInitial closePopup={closePopup} />}
        <Background />
        <HomeView />
        <Experience />
        <Aboutme />
        <Project />
        {/* <ProjectVideo /> */}
        <TechnoloGy />
        <Trajectory />
        <Recommendations />
        <Contac />
      </div>
    </Layout>
  );
}
