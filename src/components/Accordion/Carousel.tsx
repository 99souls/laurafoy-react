import { useState } from 'react';
import carousel_left from '../../assets/ostinato/carousel_left.svg';
import carousel_right from '../../assets/ostinato/carousel_right.svg';
import './styles.css';

interface CarouselProps {
  slides: string[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((previousIndex) => {
      return (previousIndex + 1) % slides.length;
    });
  };

  const previousSlide = () => {
    setCurrentIndex((previousIndex) => {
      return previousIndex === 0 ? slides.length - 1 : previousIndex - 1;
    });
  };

  return (
    <div className='carousel'>
      <button
        className='carouselButton carouselButton-left'
        onClick={previousSlide}
      >
        <img
          src={carousel_left}
          alt='Carousel Left'
        />
      </button>
      <div>
        <img
          className='carouselImage'
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex}`}
        />
      </div>
      <button
        className='carouselButton carouselButton-right'
        onClick={nextSlide}
      >
        <img
          src={carousel_right}
          alt='Carousel Right'
        />
      </button>
      <div className='carouselIndicatorRow'>
        {slides.map((...props) => {
          return (
            <button
              onClick={() => {
                setCurrentIndex(props[1]);
              }}
              className={`carouselIndicator ${
                props[1] === currentIndex ? 'carouselIndicator-active' : ''
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
