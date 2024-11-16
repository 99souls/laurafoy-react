import AboutSection from '../../components/AboutSection/AboutSection';
import ExperienceSection from '../../components/ExperienceSection/ExperienceSection';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import ProjectListing from '../../components/ProjectListing/ProjectListing';
import './Home.css';

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="contentContainer">
        <AboutSection />
        <ExperienceSection />
        <ProjectListing />
      </div>
      <Footer />
    </>
  );
};

export default Home;
