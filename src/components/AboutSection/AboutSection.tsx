import LinkButton from '../Button/LinkButton';
import portrait from './../../assets/AboutSection/portrait.png';
import './styles.css';

const AboutSection = () => {
  return (
    <div className="aboutSectionContainer">
      <div className="aboutTextContainer">
        <h1 className="bitter">HI! I'M LAURA FOY</h1>
        <p>
          A digital designer who loves designing accessible and intuitive
          interfaces in bold, exciting and imaginative ways. I enjoy solving
          problems with style and creativity, aiming to go above and beyond to
          create user experiences that not only serve users' needs but also
          spark joy.
        </p>
        <LinkButton>MY CV</LinkButton>
      </div>
      <div className="aboutPictureContainer">
        <img
          src={portrait}
          className="portrait"
        ></img>
      </div>
    </div>
  );
};

export default AboutSection;
