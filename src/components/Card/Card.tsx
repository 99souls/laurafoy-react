import LinkButton from '../Button/LinkButton';

interface CardProps {
  title: string;
  description: string;
  buttonURL: string;
  image: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonURL,
  image,
}) => {
  return (
    <div className='card'>
      <div
        className='cardImage'
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className='cardText'>
        <div className='cardTextPair'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <LinkButton destinationURL={buttonURL}>VIEW</LinkButton>
      </div>
    </div>
  );
};

export default Card;
