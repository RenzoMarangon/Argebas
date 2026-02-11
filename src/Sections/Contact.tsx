import { ContactForm } from "../Components/ContactForm";
import Container from "../Components/Container";
import Section from "../Components/Section";

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <h2 className="font-bold text-center text-2xl mb-4 text-cyan-500 ">
          Contactanos
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="w-full">
            <div className="mb-8">
              <p className="flex gap-2 items-center">
                <span>Teléfono:</span>
                <a
                  href="https://wa.me/541112345678?text=Hola,%20quiero%20consultar%20por%20el%20servicio%20de%20fotocopiadoras"
                  className="text-sm text-gray-700">
                  15-2558-1664
                </a>
              </p>

              <p className="flex gap-2 items-center">
                <span>Dirección:</span>
                <p className="text-sm text-gray-700">
                  Mariano Acha 2691, CABA - Buenos Aires
                </p>
              </p>

              <p className="flex gap-2 items-center">
                <span>Mail:</span>
                <p className="text-sm text-gray-700">info@argebas.com.ar</p>
              </p>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.407726379263!2d-58.48205701006468!3d-34.568548482251515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7bf3d0ec4f3%3A0x1d1e0b942bd539be!2sArgebas!5e0!3m2!1ses!2sar!4v1769813349440!5m2!1ses!2sar"
              height="250"
              loading="lazy"
              className="rounded shadow-xs w-full"></iframe>
          </div>

          <ContactForm />
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
