import img1 from "../../public/images/image 1 .png";
import img2 from "../../public/images/image 2.png";
import img3 from "../../public/images/image 3.png";
import img4 from "../../public/images/image 4.png";
import img5 from "../../public/images/apprecetas.png";
import img6 from "../../public/images/27industries.png";


const experiencecosnt = [
  {
    indexImage: 1,
    background: img3,
    title: "CanchApp",
    description:
      "Desarrollo de un aplicativo movil para la gestion de partidos, el cual tenia como objetivo organizar una partido y buscar una cancha disponible para realizar el evento.",
    tool: ["Firebase", "Flutter"],
  },
  {
    indexImage: 2,
    background: img2,
    title: "GreenWall",
    description:
      "Este aplicativo tenía como objetivo gestionar el estado de un huerto, en donde debía conectarse vía bluetooth a un microcontrolador y luego tomaba los datos que se enviaban desde un microcontrolador a la base de datos de firebase y los mostraba en tiempo real.",
    tool: ["Firebase", "Flutter", "Arduino"],
  },
  {
    indexImage: 3,
    background: img1,
    title: "Valliu",
    description:
      "Es una billetera virtual creada con la finalidad de poder tener una en el celular algunos servicios de transporte publico de Valledupar-Colombia, en donde se podía recargar a la tarjeta de transporte, ver las paradas de los buses, hacer recargas a celulares entre otras cosas.",
    tool: ["Firebase", "Geolocalización", "Flutter", "API"],
  },
  {
    indexImage: 4,
    background: img4,
    title: "MC-Construcciones",
    description:
      "Desarrollo de una landing page, la cual tiene como finalidad dar a conocer los servicios de la empresa MC-construcciones y la información de contacto.",
    tool: ["React", "JavaScript"],
  },
  {
    indexImage: 4,
    background: img5,
    title: "AppRecetas",
    description:
      "Esta app tiene como finalidad porder dar a conocer a su usuario recetas que puede hacer en casa, con su ingredientes y paso a paso",
    tool: ["Flutter", "Dart", "API"],
  },
  {
    indexImage: 4,
    background: img6,
    title: "27Industries",
    description:
      "Desarrollo web para la empresa 27Industries, la cual cuenta con un diseño intuitivo y muy buenos detalles. Ademas tiene su formulario de contacto y sus accesos a las redes sociales.",
    tool: ["Next.js", "Typescript", "Node.js"],
  },
];

export default experiencecosnt;
