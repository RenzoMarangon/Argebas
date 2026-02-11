import { instagram, mail, whatsapp } from "../Assets/icons";
import { argebas } from "../Assets/images";
import Container from "./Container";
import Section from "./Section";

export const Footer = () => {
  return (
    <Section className="bg-black text-white">
      <Container className="flex flex-col md:flex-row md:items-center justify-between">
        <img
          src={argebas}
          className="w-2/3 mx-auto my-3 md:m-0 md:h-6 md:w-auto"
        />

        <div className="flex flex-col md:flex-row gap-4 justify-between w-1/2">
          <p className="flex md:flex-col gap-2 items-center md:items-start">
            <span>Teléfono:</span>
            <a href="tel:+541125581664" className="text-sm text-gray-700">
              <span className="text-sm text-gray-300">15-2558-1664</span>
            </a>
          </p>

          <p className="flex flex-col gap-2 items-start">
            <span>Dirección:</span>
            <p className="text-sm text-gray-300 w-100 md:w-auto mb-4 md:mb-0">
              Mariano Acha 2691, CABA | Buenos Aires, Argentina.
            </p>
          </p>
        </div>

        <div>
          <p>Contactanos</p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.instagram.com/argebas/"
              target="_blank"
              rel="noopener noreferrer">
              <img src={instagram} />
            </a>

            <a href="mailto:info@argebas.com.ar">
              <img src={mail} />
            </a>

            <a
              href="https://wa.me/541112345678?text=Hola,%20quiero%20consultar%20por%20el%20servicio%20de%20fotocopiadoras"
              target="_blank"
              rel="noopener noreferrer">
              <img src={whatsapp} />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};
