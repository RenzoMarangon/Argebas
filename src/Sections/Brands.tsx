import Container from "../Components/Container";
import Section from "../Components/Section";
import { comex, globalmind, driplan, remax } from "../Assets/images";
import { CardsSwiper } from "../Components/CardsSwiper";

type image = {
  src: string;
  alt: string;
};

const images: image[] = [
  { src: comex, alt: "Comex" },
  { src: globalmind, alt: "Globalmind" },
  { src: driplan, alt: "Driplan" },
  { src: remax, alt: "Remax" },
];

const Brands = () => {
  return (
    <Section id="brands">
      <Container className="text-center">
        <p className="text-lg font-normal text-gray-500">
          +50 clientes confían en nosotros
        </p>
        <div className="mt-8 w-full">
          <CardsSwiper
            items={images}
            allowTouchMove={false}
            renderCard={(image) => (
              <img
                src={image.src}
                alt={image.alt}
                className="h-10 w-auto object-contain"
              />
            )}
            getKey={(image) => image.alt}></CardsSwiper>
        </div>
      </Container>
    </Section>
  );
};

export default Brands;
