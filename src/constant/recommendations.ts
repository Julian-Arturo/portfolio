import logo from "../../public/images/Quotes.png";
import andres from "../../public/images/andres.png";
import gustavo from "../../public/images/gustavo.png";
import img4 from "../../public/images/image 4.png";

const recommendations = [
  {
    logo: logo,
    img: andres,
    name: "Andres Florez",
    description:
      "Recomiendo a Julián Hernández como un talentoso desarrollador y diseñador. Su experiencia en el desarrollo de aplicaciones móviles y diseño de páginas web se refleja en su habilidad para crear soluciones tecnológicas funcionales y visualmente atractivas. Destaca por su capacidad de trabajo en equipo, comunicación efectiva y cumplimiento de plazos.",
    position: "Android Developer",
  },
  {
    logo: logo,
    img: gustavo,
    name: "Gustavo Herrera",
    description:
      "Este aplicativo tenía como objetivo gestionar el estado de un huerto, en donde debía conectarse vía bluetooth a un microcontrolador y luego tomaba los datos que se enviaban desde un microcontrolador a la base de datos de firebase y los mostraba en tiempo real.",
    position: "Agente Comercial",
  },
];

export default recommendations;
