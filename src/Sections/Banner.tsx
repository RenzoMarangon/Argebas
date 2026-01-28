import Section from "../Components/Section";
import Container from "../Components/Container";

const Banner = () => {
  return (
    <Section className="relative h-[35dvh] flex items-center">
      <div className="absolute inset-0 bg-[url('./Assets/images/banner.webp')] bg-cover bg-center -z-50" />
      <Container className="text-center text-white  ">
        <h3 className="mb-8 text-3xl font-medium">
          10 años de experiencia nos avalan
        </h3>
        <div className="flex justify-center gap-4">
          <button className="py-2 px-4 rounded-md text-black font-medium bg-yellow-300 border-2 hover:bg-transparent hover:border-yellow-300  hover:text-yellow-300 transition">
            Contáctanos
          </button>
          <button className="text-cyan-600 border-2 border-cyan-600 rounded-md py-2 px-4 font-medium hover:bg-cyan-600 hover:text-white transition">
            Whatsapp
          </button>
        </div>
      </Container>
    </Section>
  );
};

export default Banner;
