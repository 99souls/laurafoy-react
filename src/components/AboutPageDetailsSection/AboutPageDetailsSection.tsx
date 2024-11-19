import LinkButton from '../Button/LinkButton';
import portrait from './../../assets/AboutSection/portrait.png';
import cv from './../../assets/docs/cv.pdf';
import './styles.css';

const AboutPageDetailsSection = () => {
  return (
    <div className='aboutSectionContainer'>
      <div className='aboutTextContainer'>
        <h1 className='recent-grotesk'>ABOUT ME</h1>
        <p className='fs-24 fw-500'>
          I'm Laura Foy, a visual designer who loves designing accessible and
          intuitive interfaces in bold, exciting and imaginative ways. I enjoy
          solving problems with style and creativity, aiming to go above and
          beyond to create user experiences that not only serve users' needs but
          also spark joy.
        </p>
        <LinkButton destinationURL={cv}>MY CV</LinkButton>
      </div>
      <div className='aboutPictureContainer'>
        <img
          src={portrait}
          className='portrait'
        ></img>
      </div>
    </div>
  );
};

export default AboutPageDetailsSection;
