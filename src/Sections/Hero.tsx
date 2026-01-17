import Section from "../Components/Section"
import Container from "../Components/Container"

export default function Hero() {
  return (
    <Section id="home" className="">

      {/* Fondo full width */}
      {/* <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center" /> */}
      <div className="absolute inset-0 bg-gray bg-cover bg-center" />
      <Container className="">
        <div className="">
          <h3>Alquiler de fotocopiadoras</h3>
          <h4>Impresión - Digitalización - Mantenimiento - Insumos</h4>
        </div>
      </Container>
      
    </Section>
  )
}