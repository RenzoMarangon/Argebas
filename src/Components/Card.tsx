type CardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

const Card = ({ image, alt, title, description }: CardProps) => {
  return (
    <article className="card relative bg-white shadow-xs rounded-lg overflow-hidden py-3 px-2">
      <div className="w-1/5  ">
        <img src={image} alt={alt} className="w-full h-auto" />
      </div>

      <div className="card__body relative">
        <h4 className="relative ml-2">
          <span className="ml-2">{title}</span>
          <span className="border-2 border-red rounded-xl h-6 w-0 absolute top-0 left-0 text-fuchsia-500"></span>
        </h4>
        <p className="ml-2 text-xs mt-3 leading-5 text-gray-500">
          {description}
        </p>
      </div>
    </article>
  );
};

export default Card;
