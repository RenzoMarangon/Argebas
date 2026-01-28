import Section from "../Components/Section";
import Container from "../Components/Container";

export default function Hero() {
  return (
    <Section
      id="home"
      className="relative h-[40dvh] md:h-[60dvh] lg:h-[100dvh] flex items-center justify-center">
      {/* Fondo full width */}
      {/* background */}
      <div className="absolute inset-0 bg-[url('./Assets/images/hero.webp')] bg-cover bg-center" />

      <Container className=" text-white text-center">
        <div className="relative z-10">
          <h3>Alquiler de fotocopiadoras</h3>
          <h4>Impresión - Digitalización - Mantenimiento - Insumos</h4>
        </div>
      </Container>
    </Section>
  );
}
