type CardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

const Card = ({ image, alt, title, description }: CardProps) => {
  return (
    <article className="card relative bg-white shadow-md rounded-lg overflow-hidden">
      <div className="card__image">
        <img src={image} alt={alt} />
      </div>

      <div className="card__body">
        <h4 className="card__title">{title}</h4>
        <p className="card__description">{description}</p>
      </div>
    </article>
  );
};

export default Card;