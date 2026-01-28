import Container from "../Components/Container";
import Section from "../Components/Section";
import { comex, globalmind, driplan, remax } from "../Assets/images";

const Brands = () => {
  return (
    <Section id="brands" className="">
      <Container className="text-center">
        <p className="text-lg font-normal text-gray-500">
          +50 clientes confían en nosotros
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          <img src={comex} />
          <img src={globalmind} />
          <img src={driplan} />
          <img src={remax} />
        </div>
      </Container>
    </Section>
  );
};

export default Brands;
