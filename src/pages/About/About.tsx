import AboutPageDetailsSection from '../../components/AboutPageDetailsSection/AboutPageDetailsSection';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import ProjectListing from '../../components/ProjectListing/ProjectListing';
import './styles.css';

const About = () => {
  return (
    <>
      <NavBar />
      <div className='contentContainer'>
        <AboutPageDetailsSection />
        <ProjectListing />
      </div>
      <Footer />
    </>
  );
};

export default About;
