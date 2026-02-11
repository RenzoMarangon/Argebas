import Section from "../Components/Section";
import Container from "../Components/Container";

export default function Hero() {
  return (
    <Section
      id="index"
      className="relative h-[60dvh] md:h-[80dvh] lg:h-[100dvh] flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('./Assets/images/hero.webp')] bg-cover bg-no-repeat bg-[center_60%]" />

      <Container className=" text-white text-center">
        <div className="relative z-10">
          <h2 className="text-2xl md:text-4xl lg:text-7xl font-semibold">
            Alquiler de fotocopiadoras
          </h2>
          <h4 className="text-sm md:text-lg lg:text-2xl font-normal mt-2">
            Impresión - Digitalización - Mantenimiento - Insumos
          </h4>
        </div>
      </Container>
    </Section>
  );
}
