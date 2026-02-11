import Section from "../Components/Section";
import Container from "../Components/Container";
import Card from "../Components/Card";
import { archive, settings, profile, printer } from "../Assets/icons";
import { printerAbout } from "../Assets/images";
import { CardsSwiper } from "../Components/CardsSwiper";

type Card = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    image: printer,
    alt: "Servicio",
    title: "Provisión de equipos propios",
    description:
      "Bajo la modalidad full service, incluye la provisión de todos los equipos necesarios (impresoras, multifunción, fotocopiadoras). También incluye toners, insumos, mantenimiento, servicio tecnico y reposición.",
  },
  {
    image: settings,
    alt: "Soporte",
    title: "Mantenimiento de equipos",
    description:
      "Cuando el cliente ya tiene un parque instalado y necesita que se lo mantengan bajo la modalidad full service. Aquí se puede hacer un mix entre equipos del cliente y equipos que proveamos nosotros.",
  },
  {
    image: profile,
    alt: "Control de usuarios",
    title: "Control de usuarios",
    description:
      "Incluido en ciertos modelos, le permite habilitar distintos usuarios y establecer limites para el uso de los equipos ademas de sacar reportes sobre el uso del equipo.",
  },
  {
    image: archive,
    alt: "Misión",
    title: "Impresión segura",
    description:
      "En caso de requerirlo, puede habilitarse un sistema de impresion segura para evitar posibles fugas de informacion utilizando un algoritmo de cifrado en los documentos a recibir.",
  },
];

const About = () => {
  return (
    <Section id="about" className="mt-8">
      <Container>
        <div className="text-center">
          <h4 className="font-bold text-2xl mb-4 text-gray-700">
            Quienes somos
          </h4>
          <p className="text-gray-700 font-normal text-lg">
            Somos un equipo argentino dedicado a ofrecer soluciones integrales
            en equipamiento de impresión y digitalización. Nos especializamos en
            la comercialización, alquiler y soporte de equipos multifunción,
            impresoras, fotocopiadoras y soluciones de gestión documental que
            ayudan a empresas de todos los tamaños a optimizar sus procesos de
            oficina y flujo de información con tecnología confiable.
          </p>
          <p className="font-semibold font-normal text-lg mt-4 text-gray-600">
            Brindamos nuestro servicio en Capital Federal y toda la provincia de
            Buenos Aires AMBA.
          </p>
        </div>

        <div className="mt-16 scroll-mt-20 " id="faq">
          <h2 className="font-semibold text-xl text-center text-gray-700">
            Qué hacemos
          </h2>
          <div className="mt-8 ">
            <CardsSwiper
              items={cards}
              allowTouchMove={true}
              renderCard={(card) => (
                <Card
                  image={card.image}
                  alt={card.alt}
                  title={card.title}
                  description={card.description}
                />
              )}
              getKey={(image) => image.alt}></CardsSwiper>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mt-12">
          <div className="md:mt-6 mb-8 md:mb-0">
            <h2 className="font-bold text-xl mb-4 text-gray-600">
              Por qué elegirnos
            </h2>
            <ul className="list-disc list-outside text-xl font-medium text-gray-500 marker:text-sm">
              <li>Atención personalizada</li>
              <li>Asesoramiento</li>
              <li>Respuesta rápida</li>
              <li>Full service</li>
              <li>Soporte remoto</li>
            </ul>
          </div>
          <img
            src={printerAbout}
            alt="Alquiler de fotocopiadoras"
            className="w-5/6"
          />
        </div>
      </Container>
    </Section>
  );
};

export default About;
